
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

// Counter
const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target'); // Get target number
      const count = +counter.innerText; // Current count value
      const increment = target / 200; // Control the speed by dividing

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10); // Repeat every 10ms
      } else {
        counter.innerText = target; // Ensure it ends exactly at target
      }
    };

    updateCount();
  });
  
  
  