
// ²Show an allert when monBoutton clicked
monBouton.addEventListener("click", () => {
    alert("Button clicked");
})

monParagraphe.textContent = 'Je suis un paragraphe modifié'



const paragraph = document.querySelector('p');

// change le style du p
function mouseOver() {
  paragraph.style.fontSize = '20px';
  paragraph.style.color = 'red';
}
// style de base du p
function mouseOut() {
    paragraph.style.fontSize = '16px';
    paragraph.style.color = 'black';
  }

paragraph.addEventListener('mouseover', mouseOver);
paragraph.addEventListener('mouseout', mouseOut);




const button = document.getElementById('monBouton');
const paragraph2 = document.getElementById('monParagraphe');

button.addEventListener('click', function() {
  const newListItem = document.createElement('li');
  newListItem.textContent = 'Nouvel élément';
  const list = document.getElementById('maListe');
  list.appendChild(newListItem);
});