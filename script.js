const menuToggle = document.getElementById("menuToggle");

const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";

});
nav.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.textContent = "☰";

    });

});

const joinForm = document.getElementById("joinForm");

const formMessage = document.getElementById("formMessage");

joinForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    if (!email) {
        return;
    }

    formMessage.textContent =
        "You're on the list. Welcome to the squad!";

    joinForm.reset();

});