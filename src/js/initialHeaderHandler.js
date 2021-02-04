const header = "Hello, I'm Trey.";
let count = 0;
let index = 0;
let letter = "";

/* Silences errors*/
function silentErrorHandler() {
    return true;
}

(function initialHeaderHandler() {
    var currentText = "";

        currentText = header[count];
        letter = currentText.slice(0, ++index);

        document.querySelector(".initial-header").textContent += letter;
        if(letter.length === currentText.length) {
            count++;
        }

    window.onerror = silentErrorHandler;
    setTimeout(initialHeaderHandler, 75);
}());