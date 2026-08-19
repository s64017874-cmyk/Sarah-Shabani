const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeBtn.textContent = "🌙 Dark Mode";

        localStorage.setItem("theme", "light");

    } else {

        themeBtn.textContent = "☀️ Light Mode";

        localStorage.setItem("theme", "dark");
    }
});


const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeBtn.textContent = "🌙 Dark Mode";

} else {

    themeBtn.textContent = "☀️ Light Mode";
}


const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";
    }
});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const message = document.getElementById("message").value;


    const phoneNumber = "256700000000";


    const whatsappMessage =
        "Hello Sarah!%0A%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Email: " + encodeURIComponent(email) + "%0A%0A" +
        "Message:%0A" +
        encodeURIComponent(message);


    const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        whatsappMessage;


    window.open(whatsappURL, "_blank");

});