
// * Função auxiliar para obter um valor válido, exibindo um prompt personalizado
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
// * função para calcular o troco 
function calcTroco(){
    // * solicitando o nome do produto
    var nomeProduto = prompt('Que produto você está comprando?');

    // * solicitando os valores através da função auxiliar que vai impedir que um outro tipo de dado seja preenchido, aceitando apenas numeros
    var valorProduto = obterValor(`Quanto custa ${nomeProduto} que você está comprando?`);
    var valorPago = obterValor(`Qual foi o valor que você deu para pagar ${nomeProduto}?`);

    // * calculo simples de troco
    var troco = valorPago - valorProduto;

    // * se o valor pago for menor que o valor do produto, retora uma mensagem
    if(valorPago < valorProduto){
        alert(`Valor insuficiente para realizar a compra do ${nomeProduto}`);
    } // * se não, se o troco for menor que zero, retorna outra mensagem 
    else if(troco <= 0){
        alert(`Você comprou ${nomeProduto} que custou ${valorProduto.toFixed(2)}. \nDeu ${valorPago.toFixed(2)} em dinheiro e não terá troco. \nVolte Sempre!`);
        
    } // * se não, exibe a mensagem com o valor do troco a ser recebido 
    else{
        alert(`Você comprou ${nomeProduto} que custou ${valorProduto.toFixed(2)}. \nDeu ${valorPago.toFixed(2)} em dinheiro e vai receber ${troco.toFixed(2)} de troco. \nVolte Sempre!`);
    }

}