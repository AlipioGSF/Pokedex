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
    let i=1;
    let stop = false;
    while(true){
        await axios(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then(response => {
            const poke = response.data;
            Pokemons.push(new Pokemon(poke.id, poke.name, poke.types,poke.moves));
            if(i==1)coletaDados(i);
        })
        .catch(e => {
            stop=true;
            atualizarLista();
        });
        if(i%25==0)atualizarLista();
        if(stop === true)break;
        i++;
    };
}
