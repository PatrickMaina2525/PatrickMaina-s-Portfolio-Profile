// PREMIUM INTERACTIONS

// scroll animation
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.style.opacity=1;
entry.target.style.transform="translateY(0)";
}
});
});

document.querySelectorAll(".section,.post-card,.category-item")
.forEach(el=>{
el.style.opacity=0;
el.style.transform="translateY(40px)";
observer.observe(el);
});

// mobile menu
const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");

if(toggle){
toggle.onclick=()=>{
nav.classList.toggle("show");
};
}

// copy contact text
function copyText(text){
navigator.clipboard.writeText(text);
alert("Copied: "+text);
}
