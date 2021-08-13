const navItem = document.querySelector(".intro-porfolio-nav-item");
const navMenu = document.querySelector(".intro-porfolio-nav-menu");
const navLink = navItem.querySelectorAll(".nav-link");

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navItem.classList.toggle("active");
});

navLink.forEach(link => link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navItem.classList.remove("active");
}));

/*const greetings = document.querySelector(".intro-porfolio-text");
const greetings_text = greetings.querySelectorAll("li");
greetings.addEventListener("mouseover", () => {
    greetings_text[0].textContent = "Bonjour,";
    greetings_text[1].textContent = "Je suis Phuoc!";
});

greetings.addEventListener("mouseout", () => {
    greetings_text[0].textContent = "Hello,";
    greetings_text[1].textContent = "I'm Phuoc!";
});*/