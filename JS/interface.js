const nomePoke = document.querySelector('.nomePoke');
const habiPoke = document.querySelector('.habiPoke');
const tipoPoke = document.querySelector('.tipoPoke');


function coletaDados(pokemon){
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
    let numCard;
    if(tipoPoke.firstChild !== null){
        numCard = 2;
        card.classList.add('cardType2');
    }else{
        numCard = 1;
        card.classList.add('cardType1');
    }
    card.innerHTML = tipo;
    tipoPoke.appendChild(card);
    colorType(tipo.toLowerCase(), numCard);
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

function colorType(type, numCard){
    let local = `.cardType${numCard}`
    const cardType = document.querySelector(local);
    let corBorda;
    let corBg;
    let corFonte;
    
    if(type === "grass"){
        corBorda = "#204000";
        corBg = "#67F70A";
        corFonte = "#000";
    }else if(type === "fire"){
        corBorda = "#FC0C0B";
        corBg = "#F8B80E";
        corFonte = "#000";
    }
    else if(type === "water"){
        corBorda = "#0A7ABC";
        corBg = "#36AFF6";
        corFonte = "#fff";
    }
    else if(type === "normal"){
        corBorda = "#ACA974";
        corBg = "#EAEADE";
        corFonte = "#000";
    }
    else if(type === "flying"){
        corBorda = "#085764";
        corBg = "#DCE5EA";
        corFonte = "#000";
    }
    else if(type === "bug"){
        corBorda = "#91BA2E";
        corBg = "#D9FE9E";
        corFonte = "#000";
    }
    else if(type === "poison"){
        corBorda = "#611380";
        corBg = "#CA72EC";
        corFonte = "#fff";
    }     
    else if(type === "electric"){
        corBorda = "#969101";
        corBg = "#F7FF85";
        corFonte = "#000";
    }     
    else if(type === "ground"){
        corBorda = "#BFAC21";
        corBg = "#EDE293";
        corFonte = "#000";
    }     
    else if(type === "fighting"){
        corBorda = "#800B11";
        corBg = "#D36063";
        corFonte = "#fff";
    }     
    else if(type === "psychic"){
        corBorda = "#8A0532";
        corBg = "#F55792";
        corFonte = "#fff";
    }     
    else if(type === "rock"){
        corBorda = "#474026";
        corBg = "#B4A270";
        corFonte = "#fff";
    }     
    else if(type === "ice"){
        corBorda = "#103D43";
        corBg = "#66D1E5";
        corFonte = "#fff";
    }     
    else if(type === "ghost"){
        corBorda = "#472B53";
        corBg = "#BD98CB";
        corFonte = "";
    }     
    else if(type === "dragon"){
        corBorda = "#29036A";
        corBg = "#D6B1FE";
        corFonte = "#fff";
    }     
    else if(type === "dark"){
        corBorda = "#2D221C";
        corBg = "#916852";
        corFonte = "#fff";
    }     
    else if(type === "steel"){
        corBorda = "#454545";
        corBg = "#BBC5C4";
        corFonte = "#000";
    }     
    else if(type === "fairy"){
        corBorda = "#FFA0C2";
        corBg = "#FDD1E0";
        corFonte = "#000";
    }

    cardType.style.borderColor = `${corBorda}`;
    cardType.style.backgroundColor = `${corBg}`;
    cardType.style.color = `${corFonte}`;    
}