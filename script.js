const btn=document.getElementById("menu-btn"),nav=document.getElementById("nav");
btn.addEventListener("click",()=>{const open=nav.classList.toggle("open");btn.setAttribute("aria-expanded",open)});
