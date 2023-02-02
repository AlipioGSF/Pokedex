const Pokemons = [];

class Pokemon{
    constructor(id, nome, tipos, habilidades){
        this.id = id,
        this.nome = nome,
        this.tipos = tipos,
        this.habilidades = habilidades;
    }
}

async function listarPokemons(){
    for(let i=1;i<=1008;i++){
        await axios(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then(response => {
            const poke = response.data;
            Pokemons.push(new Pokemon(poke.id, poke.name, poke.types,poke.moves));
        })
        .catch(e => console.log(e));
        if(i == 40||i==100||i==300||i==500||i==600||i==800||i==1008) atualizarLista();
    };
}
