let cotDolar = parseFloat(prompt('Antes de qualquer coisa. Quanto está a cotação do dolar agora?'))
let btn = document.querySelector("button");
let resp1 = document.querySelector("h2");
let resp2 = document.querySelector("p")



btn.addEventListener('click', () => {
    let valor = parseFloat(prompt("Quantos R$ você gostaria de converter?"));

    let convertido = valor / cotDolar;

    resp1.innerText = `${valor.toLocaleString('pt-BR', { style: "currency", currency: 'BRL' })} corresponde a...`
    resp2.innerText = `${convertido.toLocaleString('pt-BR', { style: "currency", currency: 'USD' })}`
})