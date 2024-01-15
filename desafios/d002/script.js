function startChallenge(){
   var nome = prompt('Qual é o seu nome?');
   var idade = parseInt(prompt(`Olá, ${nome}! Quantos anos você tem?`));

   // * Adicionei uma estrutura de repetição para caso a pessoa não digitar um numero
   do{
    alert('Por favor insira um numero');
    idade = parseInt(prompt(`Olá, ${nome}! Quantos anos você tem?`));
   }
   while(isNaN(idade));

    alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`);
};