let p1 = document.getElementsByTagName('p')[0];
let div = document.getElementById('msg');

// brincando de manipular o dom pelo js
div.style.background = 'green';
div.style.height = '40px';
div.style.textAlign = 'center'
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
div.style.cursor = 'pointer';

div.addEventListener('click', () => {
    div.innerText = 'Clicou hehe';
    div.style.background = 'purple';
});