document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Contact Form Submission
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you! We will get back to you soon.");
        this.reset();
    });
});
