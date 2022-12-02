//locations
const town = document.getElementById("town");
const battleField = document.getElementById("battleField");
const shop = document.getElementById("shop");
const house = document.getElementById("house");

//move buttons
const goBattle = document.getElementById("goBattle");
const goShop = document.getElementById("goShop");
const goBackInShop = document.getElementById("goBackInShop");
const goHouse = document.getElementById("goHouse");
const goBackInHouse = document.getElementById("goBackInHouse");

//battle
const player = document.getElementById("player");
const enemy = document.getElementById("enemy");
const btnAttack = document.getElementById("btnAttack");
const btnSuperAttack = document.getElementById("btnSuperAttack");
const myHealth = document.getElementById("myHealth");
const enemyHealth = document.getElementById("enemyHealth");
//continue button
const btnEndWinBattle = document.getElementById("btnEndWinBattle");
const btnEndLoseBattle = document.getElementById("btnEndLoseBattle");

const character = document.getElementsByClassName("character");

//buy buttons
const btnBuyBasicAttack = document.getElementById("btnBuyBasicAttack");
const btnBuyHealth = document.getElementById("btnBuyHealth");
const btnBuySuperAttack = document.getElementById("btnBuySuperAttack");
const btnBuySuperPowerCouldown = document.getElementById("btnBuySuperPowerCouldown");

//level
const attackLevel = document.getElementById("attackLevel");
const healthLevel = document.getElementById("healthLevel");
const superAttackLevel = document.getElementById("superAttackLevel");
const couldownLevel = document.getElementById("couldownLevel");

//price
const attackPrice = document.getElementById("attackPrice");
const healthPrice = document.getElementById("healthPrice");
const superAttackPrice = document.getElementById("superAttackPrice");
const couldownPrice = document.getElementById("couldownPrice");
const infoCoins = document.getElementById("infoCoins");

//move buttons
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
}

goBackInHouse.onclick = () =>{
    shop.style.display = "block";
    house.style.display = "none";
}

//battle
btnAttack.onmousedown = () =>{
    player.style.left = "350px";
    enemyHealth.innerHTML --;
}
btnAttack.onmouseup = () => {
    player.style.left = "100px";
}
btnEndWinBattle.onclick = () => {
    battleField.style.display = "none";
    town.style.display = "block";
}
btnEndLoseBattle.onclick = () => {
    battleField.style.display = "none";
    town.style.display = "block";
}