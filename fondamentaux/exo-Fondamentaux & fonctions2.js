let number = parseInt('Ton nombre...');

do{
  number = parseInt(prompt('Ton nombre bg...'));

} while (isNaN(Number(number)) || number < 1 || number > 10);

for (let i = 0; i < 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

function tableDeMultiplication (number) {
  console.log("Fonction de tableDeMultiplication");
  for (let i = 0; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

tableDeMultiplication(number)