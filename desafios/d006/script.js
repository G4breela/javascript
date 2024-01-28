let btn = document.querySelector("button");
let resp1 = document.querySelector('h2')
let resp2 = document.querySelector('p');

function clicou(){
    let celsius = parseFloat(prompt("Digite uma temperatura em °C (Celsius): "));

        let fahrenheit = (celsius * 1.8) + 32;
        let kelvin = celsius + 273.15;

        resp1.innerText = `A temperatura de ${celsius.toString().replace('.', ',')}°C, corresponde a...`;
        resp2.innerText = `${kelvin.toFixed(2).toString().replace('.', ',')}°K (Kelvin)
        ${fahrenheit.toFixed(2).toString().replace('.', ',')}°F (Fahrenheit)`; 
}