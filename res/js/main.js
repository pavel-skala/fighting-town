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

const characters = document.getElementsByClassName("character");

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
const characterInHouse = document.getElementById("characterInHouse");
const characterName = document.getElementById("characterName");
const characterAttackDamageInfo = document.getElementById(
  "characterAttackDamageInfo"
);
const characterHealthInfo = document.getElementById("characterHealthInfo");
const characterSuperAttackDamageInfo = document.getElementById(
  "characterSuperAttackDamageInfo"
);
const characterAbout1 = document.getElementById("characterAbout1");
const characterAbout2 = document.getElementById("characterAbout2");
const characterAbout3 = document.getElementById("characterAbout3");
const characterAbout4 = document.getElementById("characterAbout4");
const characterAbout5 = document.getElementById("characterAbout5");
const btnBuyCharacter = document.getElementById("btnBuyCharacter");
const btnPickCharacter = document.getElementById("btnPickCharacter");
const pickCharacterInfo = document.getElementById("pickCharacterInfo");
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
let superAttackCouldown = 1000;
let superAttackDamage = 5;
let superAttackLoadingNumber = 0;
let superAttackActivate = 100;
//money
let addedMoney = 10;
let numberOfCoins = 0;
//shop prices
let attackPrice = 20;
let healthPrice = 20;
let superAttackPrice = 20;
let couldownPrice = 20;
//house
let numberOfCharacter = 1;
let character1PickStatus = true;
let character2PickStatus = false;
let character3PickStatus = false;
let character4PickStatus = false;

let character1BuyStatus = true;
let character2BuyStatus = false;
let character3BuyStatus = false;
let character4BuyStatus = false;
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
  houseChangingCharacter();
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
    superAttackLoadingNumber += 20;
    superAttackLoader.style.width = `${superAttackLoadingNumber}%`;
    if (superAttackLoadingNumber >= superAttackActivate) {
      btnSuperAttack.style.backgroundColor = "#24db24";
      clearInterval(superAttackInterval);
    }
  }, superAttackCouldown);
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
    enemyHealthInfo.innerHTML -= 5;

    btnSuperAttack.style.backgroundColor = "#ff5353";
    superAttackLoadingNumber = 0;
    superAttackLoader.style.width = "0%";

    superAttackInterval = setInterval(() => {
      superAttackLoadingNumber += 20;
      superAttackLoader.style.width = `${superAttackLoadingNumber}%`;
      if (superAttackLoadingNumber >= superAttackActivate) {
        btnSuperAttack.style.backgroundColor = "#24db24";
        clearInterval(superAttackInterval);
      }
    }, superAttackCouldown);
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
  
  enemyHealth = Math.round(enemyHealth * 1.2);
  console.log(enemyHealth);
  enemyAttackDamage += 0.5;
  console.log(enemyAttackDamage);
  addedMoney = Math.round(addedMoney * 1.3);
  console.log(addedMoney);

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
  } else {
    noMoney.style.display = "flex";
  }
};
btnBuyHealth.onclick = () => {
  if (numberOfCoins >= healthPrice) {
    myHealth = Math.round(myHealth * 1.4);

    numberOfCoins -= healthPrice;
    coinsInfo.innerHTML = numberOfCoins;
    healthLevel.innerHTML++;
    healthPrice += 10;
    healthPriceInfo.innerHTML = healthPrice;
  } else {
    noMoney.style.display = "flex";
  }
};
btnBuySuperAttack.onclick = () => {
  if (numberOfCoins >= superAttackPrice) {
    superAttackDamage +=3;

    numberOfCoins -= superAttackPrice;
    coinsInfo.innerHTML = numberOfCoins;
    superAttackLevel.innerHTML++;
    superAttackPrice += 10;
    superAttackPriceInfo.innerHTML = superAttackPrice;
  } else {
    noMoney.style.display = "flex";
  }
};
btnBuySuperPowerCouldown.onclick = () => {
  if (numberOfCoins >= couldownPrice) {
    superAttackCouldown-= (superAttackCouldown * 0.1);
    console.log(superAttackCouldown);
    numberOfCoins -= couldownPrice;
    coinsInfo.innerHTML = numberOfCoins;
    couldownLevel.innerHTML++;
    couldownPrice += 10;
    couldownPriceInfo.innerHTML = couldownPrice;
  } else {
    noMoney.style.display = "flex";
  }
};
noMoneyContinue.onclick = () => {
  noMoney.style.display = "none";
};

//house
const houseChangingCharacter = () => {
  switch (numberOfCharacter) {
    case 1: //wizard
      characterInHouse.style.backgroundImage = "url(./res/img/wizard.png)";
      characterName.innerHTML = "Fire Wizard";
      characterAttackDamageInfo.innerHTML = 10;
      characterHealthInfo.innerHTML = 30;
      characterSuperAttackDamageInfo.innerHTML = 40;
      characterInHouse.style.width = "400px";
      characterInHouse.style.height = "555px";
      characterAbout1.innerHTML =
        "<p>A Fire Wizard is a character who is able to use fire magic to destroy his enemies and protect his allies. He is a powerful and dangerous warrior.</p>";
      characterAbout2.innerHTML =
        "<p>Although the Fire Wizard may seem like an uncompromising and stubborn warrior, he is actually a very scholarly and thoughtful person who is willing to constantly educate himself and improve his skills.</p>";
      characterAbout3.innerHTML =
        "<p>His abilities are often stronger when he is around fire or when he is exposed to the elements.</p>";
      characterAbout4.innerHTML =
        "<p>Despite his strength and power, however, the fire wizard is also very humble and knows that his abilities are a gift that should be used with discretion and wisdom.</p>";
      characterPrice.innerHTML = "400";

      btnPickCharacter.onclick = () => {
        btnBuyCharacter.style.display = "none";
        btnPickCharacter.style.display = "none";
        pickCharacterInfo.style.display = "block";
        character1PickStatus = true;
        character2PickStatus = false;
        character3PickStatus = false;
        character4PickStatus = false;
      };
      if (character1BuyStatus == true && character1PickStatus == false) {
        btnPickCharacter.style.display = "block";
        btnBuyCharacter.style.display = "none";
        pickCharacterInfo.style.display = "none";
      }

      break;
    case 2: //knight
      characterInHouse.style.backgroundImage = "url(./res/img/warrior.png)";
      characterName.innerHTML = "Dark Knight";
      characterAttackDamageInfo.innerHTML = 5;
      characterHealthInfo.innerHTML = 40;
      characterSuperAttackDamageInfo.innerHTML = 30;
      characterInHouse.style.width = "400px";
      characterInHouse.style.height = "555px";
      characterAbout1.innerHTML =
        "<p>The Dark Knight is a powerful and mysterious warrior who is guided by dark forces and uses them to his advantage. His eyes are icy and his gaze chills the blood in the veins.</p>";
      characterAbout2.innerHTML =
        "<p>His armour is dark and impenetrable, protecting him from the attacks of his opponents. His sword is bladed, and when you touch it, you feel a chill run through your body.</p>";
      characterAbout3.innerHTML =
        "<p>The Dark Knight fears nothing and his courage is unknown. He is willing to risk everything to achieve his goal. He never gives up and his will is unbreakable.</p>";
      characterAbout4.innerHTML =
        "<p>The Dark Knight is always ready to fight and his abilities are incredible. His fighting skills are truly dangerous and few would want to face him.</p>";
      characterPrice.innerHTML = "500";

      btnBuyCharacter.onclick = () => {
        if (numberOfCoins > characterPrice.innerHTML) {
          numberOfCoins -= characterPrice.innerHTML;
          coinsInfo.innerHTML = numberOfCoins;
          btnBuyCharacter.style.display = "none";
          btnPickCharacter.style.display = "none";
          pickCharacterInfo.style.display = "block";
          character2PickStatus = true;
          character1PickStatus = false;
          character3PickStatus = false;
          character4PickStatus = false;
          character2BuyStatus = true;
        }
      };
      btnPickCharacter.onclick = () => {
        btnBuyCharacter.style.display = "none";
        btnPickCharacter.style.display = "none";
        pickCharacterInfo.style.display = "block";
        character2PickStatus = true;
        character1PickStatus = false;
        character3PickStatus = false;
        character4PickStatus = false;
      };
      if (character2BuyStatus == false) {
        btnBuyCharacter.style.display = "flex";
        btnPickCharacter.style.display = "none";
        pickCharacterInfo.style.display = "none";
      }
      if (character2BuyStatus == true && character2PickStatus == false) {
        btnPickCharacter.style.display = "block";
        btnBuyCharacter.style.display = "none";
        pickCharacterInfo.style.display = "none";
      }
      break;
    case 3: //werewolf
      characterInHouse.style.backgroundImage = "url(./res/img/werewolf.png)";
      characterName.innerHTML = "Bloodthirsty Werewolf";
      characterAttackDamageInfo.innerHTML = 15;
      characterHealthInfo.innerHTML = 20;
      characterSuperAttackDamageInfo.innerHTML = 30;
      characterInHouse.style.width = "400px";
      characterInHouse.style.height = "555px";
      characterAbout1.innerHTML =
        "<p>A bloodthirsty werewolf is a monster with brown fur and pointed fangs. It has a tall and powerful body with short legs and long claws, allowing it to move quickly and accurately.</p>";
      characterAbout2.innerHTML =
        "<p>The werewolf is very strong and fast, allowing it to attack its victims without warning and transform into its human form</p>";
      characterAbout3.innerHTML =
        "<p>The werewolf is also capable of transferring his werewolf form to other humans through bites. This process is painful and sometimes fatal, but it is no problem for the werewolf.</p>";
      characterAbout4.innerHTML =
        "<p>The Bloodthirsty Werewolf is thus a dangerous monster that fears nothing and is capable of killing almost anything that comes its way. Its hunger for blood and its thirst for power are insatiable.</p>";
      characterPrice.innerHTML = "600";

      btnBuyCharacter.onclick = () => {
        if (numberOfCoins > characterPrice.innerHTML) {
          numberOfCoins -= characterPrice.innerHTML;
          coinsInfo.innerHTML = numberOfCoins;
          btnBuyCharacter.style.display = "none";
          btnPickCharacter.style.display = "none";
          pickCharacterInfo.style.display = "block";
          character3PickStatus = true;
          character1PickStatus = false;
          character2PickStatus = false;
          character4PickStatus = false;
          character3BuyStatus = true;
        }
      };
      btnPickCharacter.onclick = () => {
        btnBuyCharacter.style.display = "none";
        btnPickCharacter.style.display = "none";
        pickCharacterInfo.style.display = "block";
        character3PickStatus = true;
        character1PickStatus = false;
        character2PickStatus = false;
        character4PickStatus = false;
      };
      if (character3BuyStatus == false) {
        btnBuyCharacter.style.display = "flex";
        btnPickCharacter.style.display = "none";
        pickCharacterInfo.style.display = "none";
      }
      if (character3BuyStatus == true && character3PickStatus == false) {
        btnPickCharacter.style.display = "block";
        btnBuyCharacter.style.display = "none";
        pickCharacterInfo.style.display = "none";
      }

      break;

  case 4: //waterwizard
      characterInHouse.style.backgroundImage = "url(./res/img/waterwizard.png)";
      characterName.innerHTML = "Water wizard";
      characterAttackDamageInfo.innerHTML = 20;
      characterHealthInfo.innerHTML = 15;
      characterSuperAttackDamageInfo.innerHTML = 40;
      characterInHouse.style.width = "500px";
      characterInHouse.style.height = "450px";
      characterAbout1.innerHTML =
        "<p>The water wizard is a powerful and mysterious figure who lives in the depths of the oceans and rivers. His strength comes from the element of water and he is able to manipulate its forms, such as waves, storms, and raindrops.</p>";
      characterAbout2.innerHTML =
        "<p>His skin is cool and wet, as if always in contact with his element. He has bright blue eyes, deep and clear like the ocean, and his hair is green and flowing like water.</p>";
      characterAbout3.innerHTML =
        "<p>He can also control the weather and summon storms and rain showers.</p>";
      characterAbout4.innerHTML =
        "<p>His power is immense, but he is also very sensitive to changes in nature and protects it in his element of water.</p>";
      characterPrice.innerHTML = "700";

      btnBuyCharacter.onclick = () => {
        if (numberOfCoins > characterPrice.innerHTML) {
          numberOfCoins -= characterPrice.innerHTML;
          coinsInfo.innerHTML = numberOfCoins;
          btnBuyCharacter.style.display = "none";
          btnPickCharacter.style.display = "none";
          pickCharacterInfo.style.display = "block";
          character4PickStatus = true;
          character1PickStatus = false;
          character2PickStatus = false;
          character3PickStatus = false;
          character4BuyStatus = true;
        }
      };
      btnPickCharacter.onclick = () => {
        btnBuyCharacter.style.display = "none";
        btnPickCharacter.style.display = "none";
        pickCharacterInfo.style.display = "block";
        character4PickStatus = true;
        character1PickStatus = false;
        character2PickStatus = false;
        character3PickStatus = false;
      };
      if (character4BuyStatus == false) {
        btnBuyCharacter.style.display = "flex";
        btnPickCharacter.style.display = "none";
        pickCharacterInfo.style.display = "none";
      }
      if (character4BuyStatus == true && character4PickStatus == false) {
        btnPickCharacter.style.display = "block";
        btnBuyCharacter.style.display = "none";
        pickCharacterInfo.style.display = "none";
      }

      break;}
};
changeCharacterRight.onclick = () => {
  if (numberOfCharacter == 4) {
    numberOfCharacter = 1;
  } else {
    numberOfCharacter++;
  }
  houseChangingCharacter();
};
changeCharacterLeft.onclick = () => {
  if (numberOfCharacter == 1) {
    numberOfCharacter = 4;
  } else {
    numberOfCharacter--;
  }
  houseChangingCharacter();
};
window.onload = () => {
  btnPickCharacter.style.display = "none";
  btnBuyCharacter.style.display = "none";
};
goBackInHouse.onclick = () => {
  shop.style.display = "block";
  house.style.display = "none";

  if (character1PickStatus == true) {
    [...characters].forEach((character) => {
      character.style.backgroundImage = "url(./res/img/wizard.png)";
      character.style.width = "400px";
      character.style.height = "555px";
    });
  }
  if (character2PickStatus == true) {
    [...characters].forEach((character) => {
      character.style.backgroundImage = "url(./res/img/warrior.png)";
      character.style.width = "400px";
      character.style.height = "555px";
    });
  }
  if (character3PickStatus == true) {
    [...characters].forEach((character) => {
      character.style.backgroundImage = "url(./res/img/werewolf.png)";
      character.style.width = "400px";
      character.style.height = "555px";
    });
  }
  if (character4PickStatus == true) {
    [...characters].forEach((character) => {
      character.style.backgroundImage = "url(./res/img/waterwizard.png)";
      character.style.width = "500px";
      character.style.height = "450px";
    });
  }
};
