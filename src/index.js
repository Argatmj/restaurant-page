import './style.css';
import createHome from "./modules/home";
import createMenu from "./modules/menu"
import createContact from './modules/Contact';

const home = document.querySelector("#Home");
const menu = document.querySelector("#Menu");
const contact = document.querySelector("#Contact");  
const content = document.getElementById("content"); 

document.addEventListener("DOMContentLoaded", createHome());

home.addEventListener("click", () => {
    content.textContent = '';
    content.className = '';
    createHome();
})

menu.addEventListener("click", () => {
    content.textContent = '';
    content.className = '';
    createMenu();
})

contact.addEventListener("click", () => {
    content.textContent = '';
    content.className = '';
    createContact();
})



