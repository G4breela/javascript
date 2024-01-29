let n1 = document.querySelector('input#txtn1'); 
let n2 = document.querySelector('input#txtn2'); 
let res = document.querySelector('div#res');

function soma(){
    let in1 = Number(n1.value);
    let in2 = Number(n2.value);
    res.innerText = `O Resultado da soma entre ${in1} e ${in2} é: ${in1+in2}`
}
