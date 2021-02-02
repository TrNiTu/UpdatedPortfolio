// document.addEventListener("DOMContentLoaded", () => {
//     const contactForm = document.querySelector("#form-contact");
//     const closeForm = document.querySelector("#form-close");

//     document.querySelector("#contact-btn").addEventListener("click", e => {
//         e.preventDefault();
//         contactForm.classList.remove("hidden");
//         window.scrollTo(0,document.body.scrollHeight);
//     })

//     document.querySelector("#form-close").addEventListener("click", e => {
//         e.preventDefault();
//         contactForm.classList.add("hidden");
//         window.scrollTo(0,document.body.scrollHeight);
//     })



// })




const btn = document.getElementById("contact-btn");
const form = document.getElementById("form-contact");
const formClose = document.getElementById("form-close")[0];

btn.onclick = function () {
    form.style.display = "flex";
};

formClose.onclick = function () { 
    form.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == form) {
        form.style.display = "none";
    }
}