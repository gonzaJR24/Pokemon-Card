const btn = document.querySelector(".btn");
const pokemonName = document.querySelector(".name");
const img = document.querySelector("img");
const attack = document.querySelector(".attackStat");
const speed = document.querySelector(".speedStat");
const defense = document.querySelector(".defenseStat");
const hp = document.querySelector(".hp>span");
const url = "https://pokeapi.co/api/v2/pokemon/";
const type = document.querySelector(".type");

const colours = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

function showData(data) {
  pokemonName.textContent = data.name;
  img.src = data.sprites.other.dream_world.front_default;
  attack.textContent = data.stats[1].base_stat;
  defense.textContent = data.stats[2].base_stat;
  speed.textContent = data.stats[5].base_stat;
  hp.textContent = data.stats[0].base_stat;
  let imgURL = data.types.map((item) => item.type.name);
  let elem = imgURL.filter((element) => element !== undefined);

  type.textContent = "";
  elem.forEach((item) => {
    let nature = document.createElement("p");
    nature.textContent = item;
    let color = colours[item];
    img.style.background = `radial-gradient(circle at 60% 0%, ${color} 60%, #ffffff 36%)`;
    nature.style.backgroundColor = color;
    type.appendChild(nature);
  });
}

btn.addEventListener("click", async () => {
  let random = Math.floor(Math.random() * 550);
  try {
    let response = await fetch(url + random);
    let data = await response.json();
    console.log(data);

    while (data.sprites.other.dream_world.front_default == false) {
      random = Math.floor(Math.random() * 550);
      response = await fetch(url + random);
      data = await response.json();
    }
    showData(data);
  } catch (error) {
    console.log(error);
  }
});
