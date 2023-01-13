let numNames = prompt("Combien de noms souhaitez-vous saisir ?")

let names = []

for (let i = 0; i < numNames; i++) {
  let name = prompt("Saisissez un nom :")
  names.push(name)
}

let message = "Vous avez saisi " + numNames + " noms : " + names.join(", ")

if (numNames > 3) {
  message += " C'est beaucoup de noms !"
}

console.log(message)

function displayNames(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i])
  }
}

displayNames(names)



