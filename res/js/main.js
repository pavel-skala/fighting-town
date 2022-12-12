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
const superAttackLoader = document.getElementById("superAttackLoader");
//continue button
const btnEndWinBattle = document.getElementById("btnEndWinBattle");
const btnEndLoseBattle = document.getElementById("btnEndLoseBattle");

const character = document.getElementsByClassName("character");

//buy buttons
const btnBuyBasicAttack = document.getElementById("btnBuyBasicAttack");
const btnBuyHealth = document.getElementById("btnBuyHealth");
const btnBuySuperAttack = document.getElementById("btnBuySuperAttack");
const btnBuySuperPowerCouldown = document.getElementById(
  "btnBuySuperPowerCouldown"
);

//level
const attackLevel = document.getElementById("attackLevel");
const healthLevel = document.getElementById("healthLevel");
const superAttackLevel = document.getElementById("superAttackLevel");
const couldownLevel = document.getElementById("couldownLevel");

//price
const attackPriceInfo = document.getElementById("attackPriceInfo");
const healthPriceInfo = document.getElementById("healthPriceInfo");
const superAttackPriceInfo = document.getElementById("superAttackPriceInfo");
const couldownPriceInfo = document.getElementById("couldownPriceInfo");
const coinsInfo = document.getElementById("coinsInfo");
const infoShop = document.getElementById("infoShop");
const noMoney = document.getElementById("noMoney");
const noMoneyContinue = document.getElementById("noMoneyContinue");
//house
const changeCharacterLeft = document.getElementById("changeCharacterLeft");
const changeCharacterRight = document.getElementById("changeCharacterRight");
const characterName = document.getElementById("characterName");
const characterStats = document.getElementById("characterStats");
const characterAbout = document.getElementById("characterAbout");
const btnBuyCharacter = document.getElementById("btnBuyCharacter");
const btnPickCharacter = document.getElementById("btnPickCharacter");
const characterPrice = document.getElementById("characterPrice");

let enemyAttackInterval;
let superAttackInterval;

//my attack
let myAttackDamage = 1;
let enemyAttackDamage = 1;
//my health
let myHealth = 20;
let enemyHealth = 20;
//super attack
let superAttackDamage = 5;
let superAttackLoadingNumber = 0;
let superAttackActivate = 100;
//money
let addedMoney = 100;
let numberOfCoins = 0;
//shop prices
let attackPrice = 20;
let healthPrice = 20;
let superAttackPrice = 20;
let couldownPrice = 20;

//move buttons

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
goBattle.onclick = () => {
  town.style.display = "none";
  battleField.style.display = "block";
  enemyHealthInfo.innerHTML = enemyHealth;
  myHealthInfo.innerHTML = myHealth;

  //enemy attack
  enemyAttackInterval = setInterval(() => {
    myHealthInfo.innerHTML -= enemyAttackDamage;
    if (myHealthInfo.innerHTML <= 0) {
      loseInfo.style.display = "flex";
      myHealthInfo.innerHTML = 0;
      clearInterval(enemyAttackInterval);
      clearInterval(superAttackInterval);
    }
  }, 500);
  //super attack
  btnSuperAttack.style.backgroundColor = "#ff5353";
  superAttackLoadingNumber = 0;
  superAttackLoader.style.width = "0%";
  superAttackInterval = setInterval(() => {
    console.log("loading");
    superAttackLoadingNumber += 20;
    superAttackLoader.style.width = `${superAttackLoadingNumber}%`;
    if (superAttackLoadingNumber >= superAttackActivate) {
      btnSuperAttack.style.backgroundColor = "#24db24";
      clearInterval(superAttackInterval);
    }
  }, 1000);
};

//my attack
btnAttack.onmousedown = () => {
  if (enemyHealthInfo.innerHTML > 0 && myHealthInfo.innerHTML > 0) {
    player.style.left = "350px";
    enemyHealthInfo.innerHTML -= myAttackDamage;
    btnAttack.style.backgroundColor = "rgb(17 95 255)";
  }
  if (enemyHealthInfo.innerHTML <= 0) {
    winInfo.style.display = "flex";
    enemyHealthInfo.innerHTML = 0;
    addedMoneyInfo.innerHTML = `+${addedMoney}`;

    clearInterval(enemyAttackInterval);
    clearInterval(superAttackInterval);
  }
};
btnAttack.onmouseup = () => {
  player.style.left = "100px";
  btnAttack.style.backgroundColor = "rgb(64, 185, 255)";
};
//super attack
btnSuperAttack.onclick = () => {
  if (superAttackLoadingNumber >= superAttackActivate) {
    console.log("utok");
    enemyHealthInfo.innerHTML -= 5;

    btnSuperAttack.style.backgroundColor = "#ff5353";
    superAttackLoadingNumber = 0;
    superAttackLoader.style.width = "0%";

    superAttackInterval = setInterval(() => {
      console.log("loading");
      superAttackLoadingNumber += 20;
      superAttackLoader.style.width = `${superAttackLoadingNumber}%`;
      if (superAttackLoadingNumber >= superAttackActivate) {
        btnSuperAttack.style.backgroundColor = "#24db24";
        clearInterval(superAttackInterval);
      }
    }, 1000);
    if (enemyHealthInfo.innerHTML <= 0) {
      winInfo.style.display = "flex";
      enemyHealthInfo.innerHTML = 0;
      addedMoneyInfo.innerHTML = `+${addedMoney}`;

      clearInterval(enemyAttackInterval);
      clearInterval(superAttackInterval);
    }
  }
};

btnEndWinBattle.onclick = () => {
  battleField.style.display = "none";
  town.style.display = "block";
  winInfo.style.display = "none";
  numberOfCoins += addedMoney;
  coinsInfo.innerHTML = numberOfCoins;
};
btnEndLoseBattle.onclick = () => {
  battleField.style.display = "none";
  town.style.display = "block";
  loseInfo.style.display = "none";
};

//shop buying items
btnBuyBasicAttack.onclick = () => {
  if (numberOfCoins >= attackPrice) {
    myAttackDamage++;

    numberOfCoins -= attackPrice;
    coinsInfo.innerHTML = numberOfCoins;
    attackLevel.innerHTML++;
    attackPrice += 10;
    attackPriceInfo.innerHTML = attackPrice;
  }
  else{
    noMoney.style.display = "flex";
  }
};
btnBuyHealth.onclick = () => {
  if (numberOfCoins >= healthPrice) {
    myHealth = Math.round(myHealth * 1.2);

    numberOfCoins -= healthPrice;
    coinsInfo.innerHTML = numberOfCoins;
    healthLevel.innerHTML++;
    healthPrice += 10;
    healthPriceInfo.innerHTML = healthPrice;
  }
  else{
    noMoney.style.display = "flex";
  }
};
btnBuySuperAttack.onclick = () => {
  if (numberOfCoins >= superAttackPrice) {
    numberOfCoins -= superAttackPrice;
    coinsInfo.innerHTML = numberOfCoins;
    superAttackLevel.innerHTML++;
    superAttackPrice += 10;
    superAttackPriceInfo.innerHTML = superAttackPrice;
  }
  else{
    noMoney.style.display = "flex";
  }
};
btnBuySuperPowerCouldown.onclick = () => {
  if (numberOfCoins >= couldownPrice) {
    numberOfCoins -= couldownPrice;
    coinsInfo.innerHTML = numberOfCoins;
    couldownLevel.innerHTML++;
    couldownPrice += 10;
    couldownPriceInfo.innerHTML = couldownPrice;
  }
  else{
    noMoney.style.display = "flex";
  }
};
noMoneyContinue.onclick = () =>{
  noMoney.style.display = "none";
}
