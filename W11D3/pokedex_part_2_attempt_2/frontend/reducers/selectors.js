export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}
  

export const selectPokemonMoves = (state) =>{
  return Object.values(state.entities.moves).map( move => move.name);
}