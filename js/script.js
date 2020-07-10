/*----- constants -----*/
const baseURL = "https://pokeapi.co/api/v2/pokemon";
/*----- app's state (variables) -----*/
let pokemon, pokemonDetail;
/*----- cached element references -----*/
const $ulEl = $(".collection");
/*----- event listeners -----*/
$ulEl.on("click", handleClick);
/*----- functions -----*/
function handleClick(event) {
  console.log(event);
}
// make the data available as soon as the app loads
getPokemon();
function getPokemon() {
  $.ajax(baseURL).then(
    function (data) {
      pokemon = data.results;
    },
    function (error) {
      console.log("Error: ", error);
    }
  );
}

function generateHTML() {
  return pokemon.map(function (p) {
    return `<li class="collection-item red-text"><div style="text-transform: capitalize;">${p.name}<span data-url="${p.url}" class="secondary-content blue-text">Detail</span></div</li>`;
  });
}

function render() {
  const html = generateHTML().join("");
  $ulEl.html(html);
}
