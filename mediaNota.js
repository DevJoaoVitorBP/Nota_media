const {gets, print} = require('./auxiliar')

const nota = gets();

if (nota >= 7) {
    print('Aprovado')
} else if (nota >= 5) {
    print('Recuperação')
}
else{
    print('Reprovado')
}
