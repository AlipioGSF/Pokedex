const display = document.querySelector('.display');
const nomesPokes = [];

for(let i=1;i<=891;i++){
    axios(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    .then(html => {
        testeAPI(html.data);
        const poke = html.data;
        const div = document.createElement('div');
        div.classList.add('pokesList')
        div.innerHTML = poke.name;
        display.appendChild(div);
    })
    .catch(e => console.log(e));
    
};

function testeAPI(dado){
    nomesPokes.push(dado.name);
}