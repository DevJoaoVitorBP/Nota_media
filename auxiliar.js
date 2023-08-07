const nota1 = 4;
const nota2 = 6;
const nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;

function gets(){
    return media;
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};