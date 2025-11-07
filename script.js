const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


function buyNow() {
  alert("Thanks for your interest! Buying feature coming soon ");
  
}

function howToOrder() {
  alert("Ordering is simple! Choose your meal and click Buy Now 🍕");
}

function order(item) {
  alert(`You selected: ${item} — we'll prepare it fresh! 🍟`);
}
