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
//battle info
const myHealthInfo = document.getElementById("myHealthInfo");
const enemyHealthInfo = document.getElementById("enemyHealthInfo");
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
const coinsInfo = document.getElementById("coinsInfo");

let enemyAttackInterval;

//my attack
let myAttackDamage = 3;
let enemyAttackDamage = 1;
//my health
let myHealth = 20;
let enemyHealth = 20;

let addedMoney = 10;
let numberOfCoins = 0;

//move buttons
goBattle.onclick = () => {
  town.style.display = "none";
  battleField.style.display = "block";
  enemyHealthInfo.innerHTML= 20;
  myHealthInfo.innerHTML = 20;

//enemy attack
  enemyAttackInterval = setInterval(() => {
    myHealthInfo.innerHTML -= enemyAttackDamage;
    if (myHealthInfo.innerHTML <= 0) {
      loseInfo.style.display = "flex";
      myHealthInfo.innerHTML = 0;
      clearInterval(enemyAttackInterval);
    }
  }, 500);
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
  if (enemyHealthInfo.innerHTML > 0 && myHealthInfo.innerHTML > 0) {
    player.style.left = "350px";
    enemyHealthInfo.innerHTML-= myAttackDamage;
    btnAttack.style.backgroundColor = "#f10000";
  }
  if (enemyHealthInfo.innerHTML <= 0) {
    winInfo.style.display = "flex";
    enemyHealthInfo.innerHTML = 0;
    addedMoneyInfo.innerHTML = `+${addedMoney}`;
    numberOfCoins += addedMoney;
    coinsInfo.innerHTML = numberOfCoins;
    clearInterval(enemyAttackInterval);
  }
};
btnAttack.onmouseup = () => {
  player.style.left = "100px";
  btnAttack.style.backgroundColor = "#ff4343";
};

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
