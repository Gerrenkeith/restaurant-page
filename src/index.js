import { home } from "./home.js"
import { menu } from "./menu.js"
import { about } from "./about.js";
const homePage = document.getElementById('home');
const menuPage = document.getElementById('menu');
const aboutPage = document.getElementById('about');
const content = document.getElementById('content');


const handleClick = () => {
    let isClicked = false;
    if(!isClicked){
        content.innerHTML = '';
        isClicked = true
    }

}

homePage.addEventListener('click',()=>{handleClick(); home()});
menuPage.addEventListener('click', ()=>{handleClick(); menu()});
aboutPage.addEventListener('click', ()=>{handleClick(); about()});
