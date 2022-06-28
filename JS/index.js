const input = document.querySelector('#pesquisa');
const botao = document.querySelector('button');


document.addEventListener('keyup', e => {
    if(e.key === 'Enter'){
        coletaDados(input.value.toLowerCase());
        input.value = '';
    }

    if(display.firstChild !== null){
        display.innerHTML = '';
    }
    for(let nomepoke of nomesPokes){
        if(String(nomepoke).includes(input.value)){
            const div = document.createElement('div');
            div.classList.add('pokesList')
            div.innerHTML = nomepoke;
            display.appendChild(div);
        }
    }


});
document.addEventListener('click', e => {
    const el = e.target;
    if(el.classList.contains('pokesList')){
        coletaDados(el.innerHTML.toLowerCase());
    }
});


botao.addEventListener('click', e => {
    coletaDados(input.value.toLowerCase());
    input.value = '';
})