// Dark mode memory
if(localStorage.getItem("mode")==="dark"){
document.body.classList.add("dark-mode");
}

function toggleMode(){
document.body.classList.toggle("dark-mode");

localStorage.setItem(
"mode",
document.body.classList.contains("dark-mode")
?"dark":"light"
);
}

// Copy contact
function copyText(text){
navigator.clipboard.writeText(text);
alert("Copied: "+text);
}

// Gallery modal
function openImage(src){
const modal=document.getElementById("modal");
const img=document.getElementById("modalImg");

modal.style.display="flex";
img.src=src;
}

function closeImage(){
document.getElementById("modal").style.display="none";
}
