import generateHome from "./home";
import generateMenu from "./menu";
import './style.css';
console.log("starting...");

const content = document.getElementById('content');
console.log(content);
if (content.children[1]) {
    content.removeChild(content.children[1]);
}
content.appendChild(generateHome());

const homeButton = document.getElementById('btn-1');
homeButton.addEventListener('click', ()=>{
    content.removeChild(content.children[1]);
    content.appendChild(generateHome());
})
const menuButton = document.getElementById('btn-2');
menuButton.addEventListener('click', ()=> {
    content.removeChild(content.children[1]);
    content.appendChild(generateMenu());

})
const aboutButton = document.getElementById('btn-3');