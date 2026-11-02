// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    const open = navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(open)
    );

    menuToggle.textContent = open ? "✕" : "☰";

});

// CLOSE MENU AFTER CLICKING A LINK

navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


// TOAST MESSAGE

const toast = document.getElementById("toast");

let toastTimer;

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2600);

}


// CAR BUTTONS

document.querySelectorAll(".choose-car").forEach(button => {

    button.addEventListener("click", () => {

        showToast(
            button.dataset.car + " selected — garage preview coming soon!"
        );

    });

});


// RACE MODE BUTTONS

document.querySelectorAll(".mode-card").forEach(button => {

    button.addEventListener("click", () => {

        showToast(
            button.dataset.mode + " selected — demo mode coming soon!"
        );

    });

});


// SCROLL REVEAL ANIMATION

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            revealObserver.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach(element => {

    revealObserver.observe(element);

});


// ANIMATED COUNTERS

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const element = entry.target;

        const target = Number(element.dataset.count);

        const start = performance.now();

        function animateCounter(now) {

            const progress = Math.min(
                (now - start) / 1100,
                1
            );

            element.textContent = Math.floor(
                target * progress
            ).toLocaleString();

            if (progress < 1) {

                requestAnimationFrame(animateCounter);

            }

        }

        requestAnimationFrame(animateCounter);

        counterObserver.unobserve(element);

    });

}, {
    threshold: 0.6
});

document.querySelectorAll("[data-count]").forEach(element => {

    counterObserver.observe(element);

});