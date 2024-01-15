function antDep(){
    var numero = parseInt(prompt('Digite um número inteiro qualquer'));
    
    // * Enquanto o numero não for Inteiro, exibe um alert até a pessoa digitar esse numero inteiro
    do{
        alert('Por favor insira um número');
        numero = parseInt(prompt('Digite um número: '));
    }
    while(isNaN(numero));

    var antecessor = numero - 1;
    var sucessor = numero + 1 ;

    alert(`Antes de ${numero}, temos o ${antecessor}. \nDepois do ${numero}, temos o numero ${sucessor}`);
        
};