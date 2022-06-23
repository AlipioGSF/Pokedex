const input = document.querySelector('#pesquisa')

document.addEventListener('keypress', e => {
    console.log(input.value.toLowerCase());
});


document.addEventListener('click', e => {
    e.preventDefault();
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'button'){
        const poke = document.querySelector('#pesquisa');
        coletaDados(poke.value.toLowerCase());
    }
    input.value = '';
})