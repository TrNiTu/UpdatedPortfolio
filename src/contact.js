document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("#form-contact");
    const closeForm = document.querySelector("#form-close");

    document.querySelector("#contact-btn").addEventListener("click", e => {
        e.preventDefault();
        contactForm.classList.remove("hidden");
        window.scrollTo(0,document.body.scrollHeight);
    })

    document.querySelector("#form-close").addEventListener("click", e => {
        e.preventDefault();
        contactForm.classList.add("hidden");
        window.scrollTo(0,document.body.scrollHeight);
    })



})