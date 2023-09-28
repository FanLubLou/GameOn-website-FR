function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
      //Issue#1 Fermer la modale, on récupère le bouton X pour fermer
const closeBtn = document.querySelector(".close");  

      //Issue#1 Fermer la modale, on écoute et on appelle sur le click la foncion closeModal
closeBtn.addEventListener("click", closeModal)

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

      //Issue#1 Fermer la modale, close modal form
function closeModal() {
  modalbg.style.display = "none";
}


