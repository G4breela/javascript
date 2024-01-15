function conversor(){
    let metro = Number(window.prompt('Digite uma distância em metros (m)'))
    let saida = document.getElementById('resp')

    saida.innerHTML = `<h2>A distância de ${metro.toLocaleString('pt-BR')} metros, corresponde a...</h2>`
    saida.innerHTML += `<p>${(metro/1000).toLocaleString('pt-BR')} quilômetros (Km)</p>`
    saida.innerHTML += `<p>${(metro/100).toLocaleString('pt-BR')} hectômetros (Hm)</p>`
    saida.innerHTML += `<p>${(metro/10).toLocaleString('pt-BR')} decâmetros (Dam)</p>`
    saida.innerHTML += `<p>${(metro*10).toLocaleString('pt-BR')} decímetros (dm)</p>`
    saida.innerHTML += `<p>${(metro*100).toLocaleString('pt-BR')} centímetros (cm)</p>`
    saida.innerHTML += `<p>${(metro*1000).toLocaleString('pt-BR')} milímetros (mm)</p>`
}