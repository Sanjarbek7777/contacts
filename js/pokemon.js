var pokemonsList = document.querySelector('.pokemons-list');
var pokemonsItemTemplate = document.querySelector('#pokemons-item-template').content;

var pokemonsListFragment = document.createDocumentFragment();

for (var pokemon of pokemons) {
  var elPokemon = pokemonsItemTemplate.cloneNode(true);

  elPokemon.querySelector('.pokemon__img').src = pokemon.img;
  elPokemon.querySelector('.pokemon__name').textContent = pokemon.name;
  elPokemon.querySelector('.pokemon__number').textContent = '#' + pokemon.num;


  pokemonsListFragment.appendChild(elPokemon);
}

pokemonsList.appendChild(pokemonsListFragment);