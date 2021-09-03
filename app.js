
// navBar
const navBtn = document.getElementById("nav-btn")
const navbar = document.getElementById("navbar")
const navClose = document.getElementById("nav-close")

const about = document.getElementById("about")
const menu = document.getElementById("menu")
const contact = document.getElementById("contact")

navBtn.addEventListener("click", () => {
    navbar.classList.add("show-navbar")
})

navClose.addEventListener("click", () => {
    navbar.classList.remove("show-navbar")
})

about.addEventListener("click", () => {
    navbar.classList.remove("show-navbar")
})

menu.addEventListener("click", () => {
    navbar.classList.remove("show-navbar")
})

contact.addEventListener("click", () => {
    navbar.classList.remove("show-navbar")
})

// Getting the Year for Copyright
date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()




