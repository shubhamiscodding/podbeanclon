let nav=document.querySelector(".nav");

nav.addEventListener("mouseenter",()=>{
    nav.classList.add("active");
})
nav.addEventListener("mouseleave",()=>{
    nav.classList.remove("active");
})
nav.addEventListener("scroll",()=>{
    nav.classList.add("active");
})