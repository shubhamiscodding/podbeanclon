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
let cssheading = document.querySelector(".cssheading");

 
    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {  
            if (entry.isIntersecting) {
                cssheading.classList.add("activate");
            } else {
                cssheading.classList.remove("activate");
            }
        });
    });

    observer.observe(cssheading);

