const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".header-items ul");
const header =document.querySelector(".header");

hamburguer.addEventListener("click",() =>{
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active;")
})

document.querySelectorAll(".header-items ul li").forEach(n=>n.addEventListener("click",() =>{
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}))