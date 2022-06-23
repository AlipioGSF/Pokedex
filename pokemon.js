const nomePoke = document.querySelector('.nomePoke');
const habiPoke = document.querySelector('.habiPoke');
const tipoPoke = document.querySelector('.tipoPoke');
const listaPoke = document.querySelector('.listaPoke')
const midia = document.querySelector('.midia');
const testeLista = document.querySelector('.testeLista');

function coletaDados(pokemon){
    listaPoke.innerHTML = '';
    nomePoke.innerHTML = '';
    tipoPoke.innerHTML = '';
    habiPoke.innerHTML = '';
    axios(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(json => info = json.data)
    .catch(e => console.log(e));    
    carregaNome(info.name, info.id);
    carregaFoto(info.id);

    const tipos = info.types
    for(let tipo of tipos){
       carregaTipo(tipo.type.name.toUpperCase());
    }

    const habilidades = info.moves
    for(let move of habilidades){
        carregaHabilidades(move.move.name);
    }
}

function carregaHabilidades(move){
    const moves = document.createElement('div');
    moves.classList.add('ability');
    moves.innerHTML = move;

    habiPoke.appendChild(moves);
}

function carregaTipo(tipo){
    const card = document.createElement('div');
    card.classList.add('cardType');
    card.innerHTML = tipo;

    tipoPoke.appendChild(card);
}

function carregaNome(nome, id){
    const name = document.createElement('div');
    const ids = document.createElement('div');

    name.classList.add('identify');
    ids.classList.add('identify');

    name.innerHTML = nome.toUpperCase();
    ids.innerHTML = id;

    nomePoke.appendChild(name);
    nomePoke.appendChild(ids);
}

function carregaFoto(id){
    if(id < 10){
        id = `00${id}`
    } else if (id < 100) {
        id = `0${id}`
    }

    const fotoPoke = document.querySelector('.fotoPoke');
    fotoPoke.style.backgroundImage = `url("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png")`;
}

function criaLista(){
    axios(`https://pokeapi.co/api/v2/pokemon/22/`)
    .then(json => info = json.data)
    .catch(e => console.log(e));

}