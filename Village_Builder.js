console.log("Script.js loaded")

// Variables

let wood = 0;
let metal = 0;
let food = 0;
let house = 0;
let store = 0;
let villagers = 1;

//end

function addwood(){
  wood++;
  document.getElementById("woodcount").innerHTML = 'Wood: ' + wood;
};
function addmetal(){
  metal++;
  document.getElementById("metalcount").innerHTML = 'Metal: ' + metal;
};
function addfood(){
  food++;
  document.getElementById("foodcount").innerHTML = 'Food: ' + food;
};
function addhouse(){
  if (wood > 24 && metal > 4) {
    house++;
    villagers++;
    metal = metal - 5;
    wood = wood - 25;
    document.getElementById("metalcount").innerHTML = 'Metal: ' + metal;
    document.getElementById("woodcount").innerHTML = 'Wood: ' + wood;
    document.getElementById("housecount").innerHTML = 'Houses: ' + house;
    document.getElementById("villagercount").innerHTML = 'Villagers: ' + villagers;
  };
};
function addstore(){
  if (wood > 49 && metal > 14 && food > 19) {
    store++;
    villagers++;
    metal = metal - 15;
    wood = wood - 50;
    food = food - 20;
    document.getElementById("villagercount").innerHTML = 'Villagers: ' + villagers;
    document.getElementById("foodcount").innerHTML = 'Food: ' + food;
    document.getElementById("metalcount").innerHTML = 'Metal: ' + metal;
    document.getElementById("woodcount").innerHTML = 'Wood: ' + wood;
    document.getElementById("storecount").innerHTML = 'Stores: ' + store;
  };
};
