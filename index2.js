async function getPokemonTeam(teamSize){
    try{
        for (let i = 0; i < teamSize; i++){
                let respones = await fetch(getRandomPokeUrl())
                let pokemon = await Response.json()
                ShowPokemon(pokemon)
        }
    } catch(error){
        console.log(error)
    }
}