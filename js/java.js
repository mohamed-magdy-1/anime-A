// Start The side menu
let button =document.querySelector('.bac-menu');
let menuSmol=document.querySelector('.menu')
let menu =document.querySelector('.menu-cont');

button.addEventListener("click",function(){
    menu.classList.add("active")
    menuSmol.classList.add("active-1")


})


menu.addEventListener("click",function(){
    menu.classList.remove("active")
    menuSmol.classList.remove("active-1")

})
// end The side menu

/////////////////////////////////////////////////////////////
/* Start button scroll */
let btn=document.getElementById('btn');

window.onscroll=function(){
    if(scrollY >=592){
        btn.style.display='block'
    }
    else{
        btn.style.display='none'
    }
}
btn.onclick=function(){
    scroll(0,0)
}
/* end button scroll */
////////////////////////////////////////////////////////////

/* Start button dark mode */
let icon =document.getElementById('icon')
function dark(){
document.body.classList.toggle("dark-them");
if(document.body.classList.contains("dark-them")){
    icon.src='./images/dark theme icon/sun.png'
} else{
    icon.src='./images/dark theme icon/moon.png'
}


}

/* end button dark mode */

/* Start button search */
function search(){
    let sear=document.querySelector(".div-search")
    sear.classList.toggle("search-none-1")
}
/* Start button search*/