const nota1 = 50;
const nota2 = 100;
const nota3 = 0;

let media = (nota1 + nota2 + nota3) / 3;

if (media > 70) {
    console.log('passou do semestre')
}
else if (media >=50){
    console.log('Recuperação')
}
else{
    console.log('reprovou')
}