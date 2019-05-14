// Your code goes here


const navs = document.querySelectorAll(".nav .nav-link");

for(let i = 0; i< navs.length; i++){
    navs[i].addEventListener('mouseover', event => {
        event.preventDefault();
        navs[i].style.color = "red";
    })
    navs[i].addEventListener('mouseout', event => {
        event.preventDefault();
        navs[i].style.color = "black";
    }) 
    navs[i].addEventListener('mousedown', event => {
        event.preventDefault();
        navs[i].style.color = "blue";
    }) 
    navs[i].addEventListener('mouseup', event => {
        event.preventDefault();
        navs[i].style.color = "yellow";
    })
}


const dest = document.querySelectorAll(".content-pick .destination");

dest[0].classList.add("sun");
dest[1].classList.add("mtn");
dest[2].classList.add("isl");

const sun = document.querySelector(".sun .btn");
const mtn = document.querySelector(".mtn .btn");
const isl = document.querySelector(".isl .btn");

sun.addEventListener("click", event => {
    const sunp = document.createElement("p");
    sunp.textContent = "Sun Clicked";
    dest[0].appendChild(sunp);
})
sun.addEventListener("mouseout", event => {

    dest[0].lastChild.remove();
})
mtn.addEventListener("mouseenter", event => {
    const mtnp = document.createElement("p");
    mtnp.textContent = "Mountain Active";
    dest[1].appendChild(mtnp);
})
mtn.addEventListener("mouseleave", event => {

    dest[1].lastChild.remove();
})
isl.addEventListener("mousedown", event => {
    const islp = document.createElement("p");
    islp.textContent = "Island Mouse Down";
    dest[2].appendChild(islp);
})
isl.addEventListener("mouseup", event => {

    dest[2].lastChild.remove();
})
const footer = document.querySelector(".footer");
footer.addEventListener("dblclick", event => {
    const footnote = document.createElement("p");
    footnote.textContent="Copyright information not available at this time!";
    footer.appendChild(footnote);
})
footer.addEventListener("focus", event => {
    footer.style.background = "green";
})