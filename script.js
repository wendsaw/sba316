<button id="myBtn" type="button">Test it Out</button>


let request;

document
    .getElementById("myBtn")
    .addEventListener("click", testRequest);

function testRequest() {
    request = new XMLHttpRequest();

    if (!request) {
        alert("Failed to create an XMLHttpRequest Object.");
        return false;
    }

    request.onreadystatechange = alertResponse;
    request.open("GET", "test.html");
    request.send();
}

 function alertResponse() {
    if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
            alert(request.responseText);
        } else {
            alert("The request returned a status other than 200 OK: " + request.status);
        }
    }
}
