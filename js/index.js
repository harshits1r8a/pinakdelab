
let toggle = false;
// target element
const moboicon = document.getElementById('menuToggle')
console.log(moboicon);

const mobomenu = document.getElementById('mobileMenu')
console.log(mobomenu);


moboicon.addEventListener('click', (e) => {
    if (!toggle) {
        mobomenu.style.transform = "translateX(0)"
        toggle = true;
    } else {
        mobomenu.style.transform = "translateX(-400px)"
        toggle = false;
    }
})
  
  
  