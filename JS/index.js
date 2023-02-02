const input = document.querySelector('#pesquisa');
const botao = document.querySelector('button');
const display = document.querySelector('.display');
const sync = document.querySelector('#sincronia');

document.addEventListener('keyup', e => {
    if(e.key === 'Enter'){
        coletaDados(input.value.toLowerCase());
        input.value = '';
    }

    if(display.firstChild !== null){
        display.innerHTML = '';
    }
    atualizarLista();
});

function atualizarLista(){
    display.innerHTML = '';
    for(let pokemon of Pokemons){
        if(String(pokemon.nome).includes(input.value) || String(pokemon.id).includes(input.value)){
            const div = document.createElement('div');
            div.classList.add('pokesList');
            div.innerHTML = pokemon.nome;
            display.appendChild(div);
        }
    }
}

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

async function start(){
    await listarPokemons();
}

start();