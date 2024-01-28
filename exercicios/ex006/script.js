let div = document.querySelector('div#area');
div.style.cursor = 'pointer';
div.addEventListener('click', () => {
    div.innerText = 'Clicou';
    div.style.background = 'purple';
});

div.addEventListener('mouseenter', () => {
    div.innerText = 'Entrou (la ele)';
});

div.addEventListener('mouseout', () => {
    div.innerText = 'Saiu (la ele)';
    div.style.background = 'green' 
});
