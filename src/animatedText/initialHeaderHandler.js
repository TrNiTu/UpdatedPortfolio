const header = "Hello, I'm Trey.";
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function initialHeaderHandler() {

    currentText = header[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.initial-header').textContent += letter;
    if(letter.length === currentText.length) {
        count++;
    }

    setTimeout(initialHeaderHandler, 75);
}());