let menudiv = document.querySelector(".menudiv");

function openMenu() {
menudiv.classList.add("active")
 document.body.style.overflow = "hidden";
}

function closeMenu() {
menudiv.classList.remove("active")
 document.body.style.overflow = "auto";
}

let form = document.querySelector(".addtocart");
let overlay = document.querySelector(".blur-overlay");

function openAddToCart() {
  let Open = form.classList.add("show");
  overlay.classList.toggle("show");
  document.body.style.overflow = "hidden";
}

function closeAddToCart() {
  let Open = form.classList.remove("show");
  overlay.classList.toggle("show");
  document.body.style.overflow = "auto";
}