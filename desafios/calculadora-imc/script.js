document.getElementById('calcForm').addEventListener('submit', function(event){
   event.preventDefault(); // * impede o envio padrão do formulário
   calc(); // * chama a função
})

function calc(){
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let imc = peso / (altura**2);

    let res = document.getElementById("res");
    res.textContent = imc.toFixed(2);
    
}




