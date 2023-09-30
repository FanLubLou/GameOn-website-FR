function editNav() {
  let x = document.getElementById("myTopnav");
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

/////////////////////////////////////////////Désactivation du bouton de soumission/////////////////////////
//Je désactive ici le bouton de soumission du formulaire pour pouvoir l'activer plus tard sous condtions
// let button_formSubmit = document.querySelector(".btn-submit")
// console.log("Le bouton avant:", button_formSubmit)
// validateButton 
// button_formSubmit.disabled = true
// console.log("Le bouton après:",button_formSubmit)
///////////////////////////////////////////////Formulaire_Form/////////////////////////////////



// fonction de validation taille nom
// Cette fontion pourra être appelée pour valider le prénom (2 caratères min) & le nom (2 caratères min)
function validateName(name, id) { 
  if (name.length >= 2) {
    return true
  } else {
    let formData
    let contenuText
    if (id === "first") {
      formData = document.querySelectorAll(".formData")[0]
      contenuText = "Veuillez entrer 2 caractères ou plus pour le champ prénom"
    } else {
      formData = document.querySelectorAll(".formData")[1]
      contenuText = "Veuillez entrer 2 caractères ou plus pour le champ nom"
      }   
      let nouvelleDiv = document.createElement("div")
      formData.appendChild(nouvelleDiv)
      nouvelleDiv.textContent = contenuText
  }
} 
  
// fonction de validation de l'email (nécessaire?)
    // Pour cette fonction, nous aurions pu utiliser l'expression régulière suivante:
    // [a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+
    // L'expression signifie:un caractère ou plus, suivi d’un @, suivi d’un caractère ou plus, suivi d’un point, suivi d’un caractère ou plus.
    // Ici, je décide de m'en tenir au type "email" de l'input 
  function validateEmail(Email) {
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    if (emailRegExp.test(Email)) {
      return true
    } else {
      let email = document.querySelectorAll(".formData")[2]
      let nouvelleDivEmail = document.createElement("div")
      email.appendChild(nouvelleDivEmail)
      nouvelleDivEmail.textContent = "Veuillez entrer un email valide"
  }
  }  
    
    
// fonction de validation de la saisie du la valeur numérique pour le nombre de concours
function validateNumber(number) {
  let numberRegExp = new RegExp("[0-9]+")
  if (numberRegExp.test(number)) {
    return true } 
  return false
}

// fonction de validation de la présence d'un choix unique de tournoi
function validateChoice(choice) {
  if (choice === null) {
    return false
  } return true
}

//fonction de validation du fait que les conditions générales soient cochées
// Ici, on ne créé pas de function validateTerms(Terms) // Terms sera soir true (coché) soit false (non coché)



//On utilise la fonction validate appellée par Jason dans le html
// fonction de validation générale
function validateButton(FirstName_value, FirstName_id, LastName_value, LastName_id, Email, Quantity, Choice, Terms) {
  
  //Effacer les messages d'erreur précédents éventuels
  // let parent = document.querySelectorAll(".formData")[0] 
  let elt = document.querySelectorAll(".formData div")
  console.log (elt)
  // if (elt !== null) {
  //   elt.textContent = ""
  // }else {}
  // console.log(elt)
  // // elt[0].innerText = ""
  // // console.log(elt)
  // elt.textContent = ""
  // console.log(elt)
  // // elt.remove()
  


 let First_Status = validateName(FirstName_value, FirstName_id)
 let Name_Status = validateName(LastName_value, LastName_id)
 let Email_Status = validateEmail(Email)
 let Quantity_Status = validateNumber(Quantity)
 let Choice_Status = validateChoice(Choice)
  // Terms



  if (
    First_Status && Name_Status && Email_Status && Quantity_Status && Choice_Status && Terms
  ) {
   return true
  }return false

  // console.log(validateName(FirstName))
  // console.log(validateName(LastName))
  // console.log(validateEmail(Email))
  // console.log(validateNumber(Quantity))
  // console.log(validateChoice(Choice))
  // console.log(FirstName)
  // console.log(LastName)
  // console.log(Email)
  // console.log(Quantity)
  // console.log(Choice)
  // console.log(Terms)
  // console.log(NextEvent)

}

function validate(event){
  //On empêche le comporte par défaut de submit. Dans le html,on ajoute l'event dans les paramètres de la fonction lors de l'appel
  event.preventDefault(event);

//Ici, on récupère toutes les données du formulaire
const FirstName = document.getElementById("first")
const LastName = document.getElementById("last")
const Email = document.getElementById("email").value
const BirthDate = document.getElementById("birthdate").value
const Quantity = document.getElementById("quantity").value
const Choice = document.querySelector("input[name='location']:checked")
const Terms = document.getElementById("checkbox1").checked
const  NextEvent= document.getElementById("checkbox2").checked

//Je regarde dans la console ce que j'ai au moment du click
  // console.log(FirstName)
  // console.log(LastName)
  // console.log(Email)
  // console.log(Quantity)
  // console.log(Choice)
  // console.log(Terms)
  // console.log("firstname:", validateName(FirstName))
  // console.log("Name:",validateName(LastName))
  // console.log("Email:",validateEmail(Email))
  // console.log("Quantity:",validateEmail(Quantity))
  // console.log("Choice:",validateChoice(Choice))
  // console.log("ValidateButton:",validateButton(FirstName, LastName, Email, Quantity, Choice, Terms))
  
  if (validateButton(FirstName.value, FirstName.id, LastName.value, LastName.id,  Email, Quantity, Choice, Terms)) {
    console.log("les conditions sont réunies, le bouton est actif")
  } else {
    console.log("les conditions ne sont pas réunies, le bouton est désactivé")
  }
}
