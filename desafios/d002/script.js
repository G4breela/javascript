function obterValor(mensagem){
    // * variavel sem valor 
    var valor;

    // * Garante que o usuário insira o valor corretamente
    do{
        valor = Number(prompt(mensagem));

        // ! se o valor for NaN, ou seja, não for um numero, exibe um alerta e pede novamente
        if(isNaN(valor)){
            alert('Por favor, digite um valor válido.');
        }
    }while (isNaN(valor));

    // * retora o valor válido
    return valor;
}

function startChallenge(){
   var nome = prompt('Qual é o seu nome?');
   var idade = obterValor(`Olá, ${nome}! Quantos anos você tem?`);

    alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`);
};