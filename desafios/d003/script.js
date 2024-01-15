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


function antDep(){
    var numero = obterValor('Digite um número inteiro qualquer');

    var antecessor = numero - 1;
    var sucessor = numero + 1 ;

    alert(`Antes de ${numero}, temos o ${antecessor}. \nDepois do ${numero}, temos o numero ${sucessor}`);
        
};