const town = document.getElementById("town");
const battleField = document.getElementById("battleField");
const shop = document.getElementById("shop");
const house = document.getElementById("house");

const goBattle = document.getElementById("goBattle");
const goShop = document.getElementById("goShop");
const goBackInShop = document.getElementById("goBackInShop");
const goHouse = document.getElementById("goHouse");
const goBackInHouse = document.getElementById("goBackInHouse");

const character = document.getElementById("character");
const enemy = document.getElementById("enemy");
const btnAttack = document.getElementById("btnAttack");
const btnSuperAttack = document.getElementById("btnSuperAttack");
const myHealth = document.getElementById("myHealth");
const enemyHealth = document.getElementById("enemyHealth");

const btnBuyBasicAttack = document.getElementById("btnBuyBasicAttack");
const btnBuyHealth = document.getElementById("btnBuyHealth");
const btnBuySuperAttack = document.getElementById("btnBuySuperAttack");
const btnBuySuperPowerCouldown = document.getElementById("btnBuySuperPowerCouldown");

const attackLevel = document.getElementById("attackLevel");
const healthLevel = document.getElementById("healthLevel");
const superAttackLevel = document.getElementById("superAttackLevel");
const couldownLevel = document.getElementById("couldownLevel");

const attackPrice = document.getElementById("attackPrice");
const healthPrice = document.getElementById("healthPrice");
const superAttackPrice = document.getElementById("superAttackPrice");
const couldownPrice = document.getElementById("couldownPrice");
const infoCoins = document.getElementById("infoCoins");

goBattle.onclick = () =>{
    town.style.display = "none";
    battleField.style.display = "block";
}

goShop.onclick = () =>{
    town.style.display = "none";
    shop.style.display = "block";
}

goBackInShop.onclick = () =>{
    town.style.display = "block";
    shop.style.display = "none";
}

goHouse.onclick = () =>{
    house.style.display = "block";
    shop.style.display = "none";
infoCoins.innerHTML = `Coins: 10`;
}

goBackInHouse.onclick = () =>{
    shop.style.display = "block";
    house.style.display = "none";
}
