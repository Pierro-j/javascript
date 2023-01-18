// // Récupération du formulaire grâce à son ID.
// const contactForm = document.getElementById('contactForm');

// // Ajout d'un écouteur d'évènement qui execute sa fonction quand le formulaire est envoyé (bouton submit pressé) : Evènement 'submit'.
// contactForm.addEventListener('submit', (event) => {
//     // On annule la fonction de base du formulaire qui actualise la page et envoi le formulaire.
//     event.preventDefault();

//     // On récupère chaque champs un à un grâce à leurs ids.
//     const firstNameInput = document.getElementById("firstName");
//     const lastNameInput = document.getElementById("lastName");
//     const emailInput = document.getElementById("email");
//     const phoneInput = document.getElementById("phone");
//     const messageInput = document.getElementById("message");

//     // On crée une liste de clés valeurs pour récupérer les valeurs des champs récupérés ci-dessus.
//     const formData = {
//         firstName: firstNameInput.value,
//         lastName: lastNameInput.value,
//         email: emailInput.value,
//         phone: phoneInput.value,
//         message: messageInput.value,
//     }

//     // On crée une liste d'erreurs avec comme valeur par défaut 'false', qui veut dire que l'élément n'est pas en erreur.
//     // La liste sera remise sur false automatiquement à chaque renvoi du formulaire.
//     const errors = {
//         firstName: false,
//         lastName: false,
//         email: false,
//         phone: false,
//         message: false
//     }

//     // On récupère ici les messages d'erreur dans le html grâce à leurs ids.
//     const firstNameError = document.getElementById('firstNameError');
//     const lastNameError = document.getElementById('lastNameError');
//     const emailError = document.getElementById('emailError');
//     const phoneError = document.getElementById('phoneError');
//     const messageError = document.getElementById('messageError');

//     // On redéfini nos label comme non visible.
//     firstNameError.style.display = 'none';
//     lastNameError.style.display = 'none';
//     emailError.style.display = 'none';
//     phoneError.style.display = 'none';
//     messageError.style.display = 'none';

//     // On vérifie si tous les champs sont rempli ou non, si ce n'est pas le cas, on entre dans la condition.
//     if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
//         const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
//         const nameRegex = /^[a-zA-Z ]+$/
//         const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
//         // On vérifie chaque champs l'un après l'autre pour savoir le(s)quel(s) est/sont vide ou non valide.
//         if (!formData.firstName || !nameRegex.test(formData.firstName)) {
//             // Si le champs est invalide on défini l'erreur correspondante sur true.
//             errors.firstName = true;
//             firstNameError.style.display = 'block';
//         }
//         if (!formData.lastName || !nameRegex.test(formData.lastName)) {
//             errors.lastName = true;
//             lastNameError.style.display = 'block';
//         }
//         if (!formData.email || !emailRegex.test(formData.email)) {
//             errors.email = true;
//             emailError.style.display = 'block';
//         }
//         if (!formData.phone || !phoneRegex.test(formData.phone)) {
//             errors.phone = true;
//             phoneError.style.display = 'block';
//         }
//         if (!formData.message || formData.message.length < 4) {
//             errors.message = true;
//             messageError.style.display = 'block';
//         }
//     }


//     // On vérifie si un élément est en erreur dans notre liste d'erreurs.
//     // if (Object.values(errors).includes(true)) {
//     // On fait un forEach de notre liste d'erreur pour afficher les messages d'erreurs correspondants.
//     // Object.entries(errors).forEach(function (error) {
//     //     const key = error[0];
//     //     const value = error[1];

//     //     if (value) {
//     //         if (key === 'firstName') {
//     //             firstNameError.style.display = 'block';
//     //         } else if (key === 'lastName') {
//     //             lastNameError.style.display = 'block';
//     //         } else if (key === 'email') {
//     //             emailError.style.display = 'block';
//     //         } else if (key === 'phone') {
//     //             phoneError.style.display = 'block';
//     //         } else if (key === 'message') {
//     //             messageError.style.display = 'block';
//     //         }
//     //     }
//     // })
//     // } else {
//     // Si aucune erreur n'est déclarée alors on affiche les données du formulaire dans un console.log().
//     // console.log(formData);
//     // }
//     if (!Object.values(errors).includes(true)) {
//         console.log(formData)
//     }


// })


const name = document.getElementById("nom");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");

name.addEventListener("input", function() {
  validateName();
});
email.addEventListener("input", function() {
  validateEmail();
});
phone.addEventListener("input", function() {
  validatePhone();
});
password.addEventListener("input", function() {
  validatePassword();
});

function validateName() {
  if (name.value.length < 3) {
    nameError.textContent = "Le nom doit comporter au moins 3 caractères";
    nameError.style.display = "block";
    return false;
  } else {
    nameError.style.display = "none";
    return true;
  }
}

function validateEmail() {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    emailError.textContent = "Entrez une adresse électronique valide";
    emailError.style.display = "block";
    return false;
  } else {
    emailError.style.display = "none";
    return true;
  }
}


//! wtf le code 
function validatePhone() {
    if (!/^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/.test(phone.value)) {
      phoneError.textContent = "Entrez un numéro de téléphone valide (exemple : 06 07 08 09 10)";
      phoneError.style.display = "block";
      return false;
    } else {
      phoneError.style.display = "none";
      return true;
    }
}
  

function validatePassword() {
  if (password.value.length < 8) {
    passwordError.textContent = "Le mot de passe doit comporter au moins 8 caractères";
    passwordError.style.display = "block";
    return false;
  } else {
    passwordError.style.display = "none";
    return true;
  }
}

function validateForm() {
  if (validateName() && validateEmail() && validatePhone() && validatePassword()) {
    console.log("Nom: " + name.value);
    console.log("Adresse électronique: " + email.value);
    console.log("Numéro de téléphone: " + phone.value);
    console.log("Mot de passe: " + password.value);
    clearForm();
    return true;
  } else {
    return false;
  }
}

function clearForm() {
  name.value = "";
  email.value = "";
  phone.value = "";
  password.value = "";
}