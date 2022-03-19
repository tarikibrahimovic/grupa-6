//https://pokeapi.co/api/v2/pokemon/ditto

const form = document.querySelector('#forma');

let pokemonNiz = []
let pokemon = async () => {
  try {
    let res = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    for (let i = 0; i < res.data.results.length; i++) {
        let clan = await pokemonFetch(res.data.results[i].url);
        pokemonNiz.push(clan);
    }
    // res.data.results.forEach(async p => {
    //     let clan = await pokemonFetch(p.url);
    //     pokemonNiz.push(clan);
    // }); NE RADI!!!!
    console.log(pokemonNiz);
  } catch {
    console.log(greska);
  }
};
pokemon();


let pokemonFetch = async (url) => {
    try{
        let data = await axios.get(url);
        return data.data;
    }
    catch { 
        console.log("Greska");
    }
}


// form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     let pokemon = form.elements.query.value;
//     let data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
//     for (let i = 0; i < data.data.abilities.length; i++) {
//         console.log(data.data.abilities[i].ability.name);
//         // console.log(data);
//     }
// });

