const menuBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav')
let menuOpen = false;
var w = window.innerWidth;

menuBtn.addEventListener('click', () =>{
    if(!menuOpen){
        menuBtn.classList.add('open');
        nav.classList.add('open');
        menuOpen =true;
    }
    else{
        menuBtn.classList.remove('open');
        nav.classList.remove('open');
        menuOpen = false;
    }
})

if(w>768){
    menuBtn.classList.add('disappear');
}