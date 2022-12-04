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
//battle info
const winInfo = document.getElementById("winInfo");
const loseInfo = document.getElementById("loseInfo");
const addedMoneyInfo = document.getElementById("addedMoneyInfo");
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
goBattle.onclick = () => {
  town.style.display = "none";
  battleField.style.display = "block";
};

goShop.onclick = () => {
  town.style.display = "none";
  shop.style.display = "block";
};

goBackInShop.onclick = () => {
  town.style.display = "block";
  shop.style.display = "none";
};

goHouse.onclick = () => {
  house.style.display = "block";
  shop.style.display = "none";
};

goBackInHouse.onclick = () => {
  shop.style.display = "block";
  house.style.display = "none";
};

//battle
//my attack
btnAttack.onmousedown = () => {
  if (enemyHealth.innerHTML > 0 && myHealth.innerHTML > 0) {
    player.style.left = "350px";
    enemyHealth.innerHTML--;
  }
  if (enemyHealth.innerHTML <= 0) {
    winInfo.style.display = "flex";
    clearInterval(enemyAttackInterval);
  }
};
btnAttack.onmouseup = () => {
  player.style.left = "100px";
};

//enemy attack
const enemyAttackInterval = setInterval(() => {
  myHealth.innerHTML--;
  if (myHealth.innerHTML <= 0) {
    loseInfo.style.display = "flex";
    clearInterval(enemyAttackInterval);
  }
}, 500);

btnEndWinBattle.onclick = () => {
  battleField.style.display = "none";
  town.style.display = "block";
  winInfo.style.display = "none";
};
btnEndLoseBattle.onclick = () => {
  battleField.style.display = "none";
  town.style.display = "block";
  loseInfo.style.display = "none";
};
