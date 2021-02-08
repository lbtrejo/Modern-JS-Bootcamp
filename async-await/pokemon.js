// Sequential requests

// async function get3Pokemon() {
//     const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
//     const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
//     const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
//     console.log(poke1.data);
//     console.log(poke2.data);
//     console.log(poke3.data);
// }

// get3Pokemon();


async function get3Pokemon() {
    // Make all 3 requests at the same time
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1'); // returns a PROMISE
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
    // console.log(prom1);
    // const poke1 = await prom1;  // Assign the resolved promise data to your var for reference
    // const poke2 = await prom2;
    // const poke3 = await prom3;
    // console.log(poke1.data);
    // console.log(poke2.data);
    // console.log(poke3.data);
    const results = await Promise.all([ prom1, prom2, prom3 ]);
    printPokemon(results);
}

const printPokemon = (results) => {
    results.forEach((pokemon) => {
        console.log(pokemon.data.name);
    }
)}

get3Pokemon();