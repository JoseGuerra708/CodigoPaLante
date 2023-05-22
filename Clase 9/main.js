//1era etapa agregar todos los pokemons con un array

let pokemons = [
    {   
        pokedex: '379',
        nombre: 'Registeel',
        tipo: 'Acero',
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/379.png'
    },
    {
        pokedex: '212',
        nombre: 'Scizor',
        tipo: 'Bicho/Acero',
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/212.png'
    },
    {
        pokedex: '248',
        nombre: 'Tyranitar',
        tipo: 'Roca/Siniestro',
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/248.png'
    },
      {
        pokedex: '130',
        nombre: 'Gyarados Shiny*',
        tipo: 'Agua/Volador',
        img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7f7c594b-4131-4a46-a947-7f51c8aafb29/defhxw2-fbc74b6c-6cc5-475c-9c9b-a4be86a4f5c7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdmN2M1OTRiLTQxMzEtNGE0Ni1hOTQ3LTdmNTFjOGFhZmIyOVwvZGVmaHh3Mi1mYmM3NGI2Yy02Y2M1LTQ3NWMtOWM5Yi1hNGJlODZhNGY1YzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.H6TC2Wl5cyRLdeputzqHWB0V6Zo6DKrlwoU6tZIoqxs'
    },
      {
        pokedex: '282',
        nombre: 'Gardevoir',
        tipo: 'Psíquico/Hada',
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png'
    },
];

//2da etapa armar el html con una function() para que muestre a los pokemons

function crearHTMLPokemon(pokemon) {
    let iconoPokedex = document.createElement('span');
    iconoPokedex.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/128/868/868596.png" alt="Pokedex Icono" class="pokedex-icono">';
  
    let pokedexList = document.createElement('span');
    pokedexList.innerText = pokemon.pokedex;

    let pokedexContainer = document.createElement('div');
    pokedexContainer.appendChild(iconoPokedex);
    pokedexContainer.appendChild(pokedexList);
  pokedexContainer.classList.add('pokedex-container');
  
    let nombrePokemon = document.createElement('h3');
    nombrePokemon.innerText = pokemon.nombre;
  
    let imagenPokemon = document.createElement('img');
    imagenPokemon.src = pokemon.img;
  
    let tipoPokemon = document.createElement('p');
    tipoPokemon.innerText = pokemon.tipo;
  
    let listItem = document.createElement('li')
    listItem.appendChild(pokedexContainer);
    listItem.appendChild(nombrePokemon);
    listItem.appendChild(imagenPokemon);
    listItem.appendChild(tipoPokemon);
    
    return listItem;
  }
//Aquí estamos "seleccionado" al <ul> con id "pokemon-list" para luego poder trabajar con este elemento.
const listaPokemons = document.querySelector('#pokemon-list');

//se crea un bucle para que recorra toda la lista los pokemones agregados
pokemons.forEach(function(pokemon) {
    //Escribir aquí la línea de código faltante
    let pokemonListItem = crearHTMLPokemon(pokemon);
    listaPokemons.appendChild(pokemonListItem);
  });