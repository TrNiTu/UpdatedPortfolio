const body = document.querySelector("body");
const lightColorTheme = document.getElementById("lightColorTheme");
const darkColorTheme = document.getElementById("darkColorTheme");
const randomColorTheme = document.getElementById("randomColorTheme");

function generateRandomColor() {
    var randomColor = "#";
    var alphanumeric = "1234567890ABCDEF";
    for(var i = 0; i < 6; i++) {
        randomColor += alphanumeric[Math.floor(Math.random()*16)];
    }

    return randomColor;
}

function changeTheme(theme) {
    if(theme === lightColorTheme) {
        body.classList.remove("random");
        body.classList.remove("dark");
        darkColorTheme.classList.remove("activeTheme");
        lightColorTheme.classList.add("activeTheme");
        randomColorTheme.classList.remove("activeTheme");
    } else if(theme === darkColorTheme) {
        body.classList.remove("random");
        body.classList.add("dark");
        darkColorTheme.classList.add("activeTheme");
        lightColorTheme.classList.remove("activeTheme");
        randomColorTheme.classList.remove("activeTheme");
    } else if(theme === randomColorTheme) {
        body.classList.add("random");
        body.style.setProperty("--color-primary", generateRandomColor());
        body.style.setProperty("--color-primaryText", generateRandomColor())
    }
}