// indice             [0]              [1]           [2]                [3]
var Neymar = ["jogador de futebol","joga no PSG","brasileiro","ja jogou no Santos"]

console.log(Neymar)
//apresenta um elemento especifico do array
console.log(Neymar[2])

// push acrescenta novos elementos no final do array

Neymar.push("milionario");
Neymar.push("vinicius Jr");
Neymar.push(("iPhone1000"));

console.log(Neymar)

//pop remove o ultimo elemento do array

Neymar.pop();
console.log(Neymar)

// exclui um elemento mais peranece com um espaço vazio no array

delete Neymar[3];
console.log(Neymar)

// deleta permanentemente do array

Neymar.splice(4,1);
console.log(Neymar)

// o [ ]permite trocar por um elemento especifico do array

Neymar[3]="Barcelona"
console.log(Neymar)




function setup() {
  createCanvas(400, 400);




}

function draw() {
  background(220);






}














