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
  //Issue#4 on récupère le bouton créé pour fermer
const closeBtnThks = document.getElementById("close-btn-thks")


      //Issue#1 Fermer la modale, on récupère le bouton X pour fermer
const closeBtn = document.querySelector(".close");  

      //Issue#1 Fermer la modale, on écoute et on appelle sur le click la foncion closeModal
closeBtn.addEventListener("click", closeModal)

//Issue#4 On ferme la modale après les remerciements
closeBtnThks.addEventListener("click", emptyAndClose)

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

function emptyAndClose() {
  //On vide les champs
    document.getElementById("first").value = ''
    document.getElementById("last").value = ''
    document.getElementById("email").value = ''
    document.getElementById("birthdate").value = ''
    document.getElementById("quantity").value = ''
   
  // Trouve un moyen de décocher
  // let Choice = document.querySelector("input[name='location']:checked").value
  // let Terms = document.getElementById("checkbox1").checked
  
  
    

  //On cache la fenêtre de remerciement
  const divThks = document.getElementById("thanksContainer")
  divThks.classList.add("hidden")
  //On ferme la fenêtre
  closeModal()
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
    let ID
    if (id === "first") {
      formData = document.querySelectorAll(".formData")[0]
      contenuText = "Veuillez entrer 2 caractères ou plus pour le champ prénom"
      ID = "ID_first"
    } else {
      formData = document.querySelectorAll(".formData")[1]
      contenuText = "Veuillez entrer 2 caractères ou plus pour le champ nom"
      ID = "ID_name"
      }   
      let nouvelleDiv = document.createElement("div")
      formData.appendChild(nouvelleDiv)
      nouvelleDiv.id = ID
      nouvelleDiv.classList.add("error-message")
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
      nouvelleDivEmail.id = "ID_email"
      nouvelleDivEmail.classList.add("error-message")
      email.appendChild(nouvelleDivEmail)
      nouvelleDivEmail.textContent = "Veuillez entrer un email valide"
  }
  }  
  
  function validateBirthdate(Birthdate) {
    //Attention ici, on cherche à savoir si Birthdate est un ensemble vide, ce qui est différent de null
    if (Birthdate === "") {
        let BirthDate = document.querySelectorAll(".formData")[3]
        let nouvelleDivBirth = document.createElement("div")
        nouvelleDivBirth.id = "ID_birthdate"
        nouvelleDivBirth.classList.add("error-message")
        BirthDate.appendChild(nouvelleDivBirth)
        nouvelleDivBirth.textContent = "Veuillez saisir votre date de naissance"
    } return true
  }
  


    
// fonction de validation de la saisie du la valeur numérique pour le nombre de concours
function validateNumber(number) {
  let numberRegExp = new RegExp("[0-9]+")
  if (numberRegExp.test(number)) {
    return true } 
  else {
      let email = document.querySelectorAll(".formData")[4]
      let nouvelleDivQuantity = document.createElement("div")
      nouvelleDivQuantity.id = "ID_quantity"
      nouvelleDivQuantity.classList.add("error-message")
      email.appendChild(nouvelleDivQuantity)
      nouvelleDivQuantity.textContent = "Veuillez entrer un nombre entre 0 et 99"
  }
}

// fonction de validation de la présence d'un choix unique de tournoi
function validateChoice(choice) {
  if (choice === null) {
      let Choice = document.querySelectorAll(".formData")[5]
      let nouvelleDivChoice = document.createElement("div")
      nouvelleDivChoice.id = "ID_choice"
      nouvelleDivChoice.classList.add("error-message")
      Choice.appendChild(nouvelleDivChoice)
      nouvelleDivChoice.textContent = "Veuillez faire un choix"
  } return true
}

function validateTerms(Terms) {
  if (Terms === false) {
      let terms = document.querySelectorAll(".formData")[6]
      let nouvelleDivTerms = document.createElement("div")
      nouvelleDivTerms.id = "ID_Terms"
      nouvelleDivTerms.classList.add("error-message")
      terms.appendChild(nouvelleDivTerms)
      nouvelleDivTerms.textContent = "Veuillez accepter les conditions d'utilisation"
  } return true
}






//fonction de validation du fait que les conditions générales soient cochées
// Ici, on ne créé pas de function validateTerms(Terms) // Terms sera soir true (coché) soit false (non coché)



//On utilise la fonction validate appellée par Jason dans le html
// fonction de validation générale
function validateButton(FirstName_value, FirstName_id, LastName_value, LastName_id, Email, BirthDate, Quantity, Choice, Terms) {
  
  //Effacer les messages d'erreur précédents éventuels
  //Première méthode, on on manipule la NodeList créée par les formData List ECHEC
                // // let parent = document.querySelectorAll(".formData")[0] 
                // let elt = document.querySelectorAll(".formData div")
                // let tab_NodeList = Array.from(elt)
                // // console.log (elt)
                // if (tab_NodeList[0] !== null) {
                //   // console.log(elt)
                //   // // elt[0].textContent = ""
                //   // elt[0].innerText = ""
                //   console.log(tab_NodeList[0])
                // }
                //   elt.textContent = ""
                // }else {}
                // // elt[0].innerText = ""
                // // console.log(elt)
                // elt.textContent = ""
                // console.log(elt)
                // // elt.remove()
  
// Seconde méthode, on va vider les div créées précédemment (s'ils existent) et identifiées individuellement par des ID
  //Je récupère un à un tous les parents
  let node_Parent_First = document.querySelectorAll(".formData")[0]
  let node_Parent_Name = document.querySelectorAll(".formData")[1]
  let node_Parent_email = document.querySelectorAll(".formData")[2]
  let node_Parent_Birthdate = document.querySelectorAll(".formData")[3]
  let node_Parent_Quantity = document.querySelectorAll(".formData")[4]
  let node_Parent_Choice = document.querySelectorAll(".formData")[5]
  let node_Parent_Terms = document.querySelectorAll(".formData")[6]
  

  //Je récupère tous les enfants potentiellement créés précédemment
  let first_recovered = document.getElementById("ID_first")
  let name_recovered = document.getElementById("ID_name")
  let email_recovered = document.getElementById("ID_email")
  let birthdate_recovered = document.getElementById("ID_birthdate")
  let quantity_recovered = document.getElementById("ID_quantity")
  let choice_recovered = document.getElementById("ID_choice")
  let terms_recovered = document.getElementById("ID_Terms")

 

  //On retire les child s'ils existent
  if (first_recovered === null) {
  } else {    
    node_Parent_First.removeChild(first_recovered)
  }
  if (name_recovered === null) {
  } else {    
    node_Parent_Name.removeChild(name_recovered)
  }
  if (email_recovered === null) {
  } else {    
    node_Parent_email.removeChild(email_recovered)
  }
  if (birthdate_recovered === null) {
  } else {
    node_Parent_Birthdate.removeChild(birthdate_recovered)
  }
  if (quantity_recovered === null) {
  } else {
    node_Parent_Quantity.removeChild(quantity_recovered)
  }
  if (choice_recovered === null) {
  } else {
    node_Parent_Choice.removeChild(choice_recovered)
  }
  if (terms_recovered === null) {
  } else {
    node_Parent_Terms.removeChild(terms_recovered)
  }


 let First_Status = validateName(FirstName_value, FirstName_id)
 let Name_Status = validateName(LastName_value, LastName_id)
 let Email_Status = validateEmail(Email)
 let Birthdate_Status = validateBirthdate(BirthDate) 
 let Quantity_Status = validateNumber(Quantity)
 let Choice_Status = validateChoice(Choice)
 validateTerms(Terms) 




  if (
    First_Status && Name_Status && Email_Status && Birthdate_Status && Quantity_Status && Choice_Status && Terms
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
  //Ici, je récupère la donnée pour pouvoir l'envoyer  
const NextEvent = document.getElementById("checkbox2").checked
  
  //Issue#4 on va chercher le bouton C'est parti
const BtnValidate= document.querySelector("input[type=submit]")
  //Issue#4 On va chercher la div de remerciement qui va tout cacher
const divThks = document.getElementById("thanksContainer")
  
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
  
  if (validateButton(FirstName.value, FirstName.id, LastName.value, LastName.id,  Email, BirthDate, Quantity, Choice, Terms)) {
    BtnValidate.addEventListener("click", divThks.classList.remove("hidden"))
  } else {
    console.log("les conditions ne sont pas réunies, le bouton est désactivé")
  }
}
