const characters = [
      { name: "Mario", img: "../assets/img/char/mario.png", landSpeed: 2, waterSpeed: 1, airSpeed: 0, acceleration: 4, weight: 4, landHandling: 1, waterHandling: 1, airHandling: 1, offRoad: 1, miniTurbo: 2, stability: 1, drift: 4 },
      { name: "Luigi", img: "../assets/img/char/luigi.png", landSpeed: 2, waterSpeed: 1, airSpeed: 0, acceleration: 4, weight: 4, landHandling: 1, waterHandling: 1, airHandling: 1, offRoad: 1, miniTurbo: 2, stability: 1, drift: 4 },
      { name: "Peach", img: "../assets/img/char/peach.png", landSpeed: 1, waterSpeed: 2, airSpeed: 0, acceleration: 6, weight: 2, landHandling: 2, waterHandling: 2, airHandling: 2, offRoad: 1, miniTurbo: 2, stability: 1, drift: 4 },
      { name: "Yoshi", img: "../assets/img/char/yoshi.png", landSpeed: 1, waterSpeed: 2, airSpeed: 0, acceleration: 6, weight: 2, landHandling: 2, waterHandling: 2, airHandling: 2, offRoad: 1, miniTurbo: 2, stability: 1, drift: 4 },
      { name: "Bowser", img: "../assets/img/char/bowser.png", landSpeed: 4, waterSpeed: 0, airSpeed: 0, acceleration: 0, weight: 8, landHandling: 0, waterHandling: 0, airHandling: 0, offRoad: 0, miniTurbo: 1, stability: 1, drift: 0 },
      { name: "Donkey Kong", img: "../assets/img/char/dk.png", landSpeed: 3, waterSpeed: 0, airSpeed: 0, acceleration: 2, weight: 6, landHandling: 0, waterHandling: 0, airHandling: 0, offRoad: 1, miniTurbo: 1, stability: 1, drift: 0 },
      { name: "Toad", img: "../assets/img/char/toad.png", landSpeed: 0, waterSpeed: 2, airSpeed: 0, acceleration: 8, weight: 0, landHandling: 2, waterHandling: 2, airHandling: 2, offRoad: 2, miniTurbo: 3, stability: 1, drift: 8 },
      { name: "Koopa Troopa", img: "../assets/img/char/koopa.png", landSpeed: 0, waterSpeed: 2, airSpeed: 0, acceleration: 8, weight: 0, landHandling: 2, waterHandling: 2, airHandling: 2, offRoad: 2, miniTurbo: 3, stability: 1, drift: 8 },
      { name: "Daisy", img: "../assets/img/char/daisy.png", landSpeed: 1, waterSpeed: 2, airSpeed: 0, acceleration: 6, weight: 2, landHandling: 2, waterHandling: 2, airHandling: 2, offRoad: 1, miniTurbo: 2, stability: 1, drift: 4 },
      { name: "Wario", img: "../assets/img/char/wario.png", landSpeed: 4, waterSpeed: 0, airSpeed: 0, acceleration: 0, weight: 8, landHandling: 0, waterHandling: 0, airHandling: 0, offRoad: 0, miniTurbo: 1, stability: 1, drift: 0 },
      { name: "Rosalina", img: "../assets/img/char/rosalina.png", landSpeed: 3, waterSpeed: 0, airSpeed: 0, acceleration: 2, weight: 6, landHandling: 0, waterHandling: 0, airHandling: 0, offRoad: 1, miniTurbo: 1, stability: 1, drift: 0 },
      { name: "Metal Mario", img: "../assets/img/char/metal.png", landSpeed: 4, waterSpeed: 0, airSpeed: 0, acceleration: 0, weight: 8, landHandling: 0, waterHandling: 0, airHandling: 0, offRoad: 0, miniTurbo: 1, stability: 1, drift: 0 },
      { name: "Shy Guy", img: "../assets/img/char/shy.png", landSpeed: 0, waterSpeed: 2, airSpeed: 0, acceleration: 8, weight: 0, landHandling: 2, waterHandling: 2, airHandling: 2, offRoad: 2, miniTurbo: 3, stability: 1, drift: 8 },
      { name: "Honey Queen", img: "../assets/img/char/queen.png", landSpeed: 4, waterSpeed: 0, airSpeed: 0, acceleration: 0, weight: 8, landHandling: 0, waterHandling: 0, airHandling: 0, offRoad: 0, miniTurbo: 1, stability: 1, drift: 0 },
      { name: "Wiggler", img: "../assets/img/char/wiggler.png", landSpeed: 3, waterSpeed: 0, airSpeed: 0, acceleration: 2, weight: 6, landHandling: 0, waterHandling: 0, airHandling: 0, offRoad: 1, miniTurbo: 1, stability: 1, drift: 0 },
      { name: "Lakitu", img: "../assets/img/char/lakitu.png", landSpeed: 0, waterSpeed: 2, airSpeed: 0, acceleration: 8, weight: 0, landHandling: 2, waterHandling: 2, airHandling: 2, offRoad: 2, miniTurbo: 3, stability: 1, drift: 8 },
      { name: "Mii", img: "../assets/img/char/mii.png", landSpeed: 2, waterSpeed: 1, airSpeed: 0, acceleration: 4, weight: 4, landHandling: 1, waterHandling: 1, airHandling: 1, offRoad: 1, miniTurbo: 2, stability: 1, drift: 0 }
];

const karts = [
      { name: "Standard Kart", img: "../assets/img/kart/standard.png", landSpeed: 6, waterSpeed: 4, airSpeed: 2, acceleration: 3, weight: 2, landHandling: 3, waterHandling: 1, airHandling: 1, offRoad: 2, miniTurbo: 2, stability: 0, drift: 2 },
      { name: "Pipe Frame", img: "../assets/img/kart/pipe.png", landSpeed: 5, waterSpeed: 8, airSpeed: 4, acceleration: 4, weight: 1, landHandling: 3, waterHandling: 1, airHandling: 1, offRoad: 3, miniTurbo: 4, stability: 0, drift: 3 },
      { name: "Bolt Buggy", img: "../assets/img/kart/buggy.png", landSpeed: 7, waterSpeed: 2, airSpeed: 1, acceleration: 1, weight: 3, landHandling: 2, waterHandling: 1, airHandling: 1, offRoad: 3, miniTurbo: 4, stability: 0, drift: 3 },
      { name: "Blue Seven", img: "../assets/img/kart/blue.png", landSpeed: 8, waterSpeed: 4, airSpeed: 1, acceleration: 1, weight: 3, landHandling: 2, waterHandling: 1, airHandling: 1, offRoad: 2, miniTurbo: 0, stability: 0, drift: 1 },
      { name: "Zucchini", img: "../assets/img/kart/zucchini.png", landSpeed: 6, waterSpeed: 4, airSpeed: 2, acceleration: 3, weight: 2, landHandling: 3, waterHandling: 1, airHandling: 1, offRoad: 2, miniTurbo: 2, stability: 0, drift: 2 },
      { name: "Cloud 9", img: "../assets/img/kart/cloud.png", landSpeed: 4, waterSpeed: 8, airSpeed: 4, acceleration: 4, weight: 1, landHandling: 5, waterHandling: 3, airHandling: 2, offRoad: 2, miniTurbo: 4, stability: 0, drift: 3 },
      { name: "Koopa Clown", img: "../assets/img/kart/koopa.png", landSpeed: 6, waterSpeed: 4, airSpeed: 2, acceleration: 2, weight: 2, landHandling: 5, waterHandling: 2, airHandling: 2, offRoad: 1, miniTurbo: 8, stability: 0, drift: 2 },
      { name: "Cact-X", img: "../assets/img/kart/cactx.png", landSpeed: 5, waterSpeed: 6, airSpeed: 1, acceleration: 2, weight: 2, landHandling: 4, waterHandling: 1, airHandling: 1, offRoad: 3, miniTurbo: 0, stability: 0, drift: 2 },
      { name: "Tiny Tug", img: "../assets/img/kart/tug.png", landSpeed: 4, waterSpeed: 10, airSpeed: 1, acceleration: 3, weight: 3, landHandling: 3, waterHandling: 3, airHandling: 1, offRoad: 3, miniTurbo: 0, stability: 0, drift: 1 },
      { name: "Barrel Train", img: "../assets/img/kart/train.png", landSpeed: 7, waterSpeed: 1, airSpeed: 1, acceleration: 3, weight: 3, landHandling: 1, waterHandling: 1, airHandling: 1, offRoad: 2, miniTurbo: 8, stability: 0, drift: 1 },
      { name: "Egg 1", img: "../assets/img/kart/egg.png", landSpeed: 5, waterSpeed: 10, airSpeed: 4, acceleration: 5, weight: 1, landHandling: 3, waterHandling: 1, airHandling: 1, offRoad: 2, miniTurbo: 4, stability: 0, drift: 3 },
      { name: "B Dasher", img: "../assets/img/kart/dasher.png", landSpeed: 8, waterSpeed: 2, airSpeed: 2, acceleration: 1, weight: 2, landHandling: 4, waterHandling: 1, airHandling: 1, offRoad: 1, miniTurbo: 2, stability: 0, drift: 2 },
      { name: "Soda Jet", img: "../assets/img/kart/jet.png", landSpeed: 7, waterSpeed: 2, airSpeed: 4, acceleration: 4, weight: 1, landHandling: 3, waterHandling: 1, airHandling: 2, offRoad: 1, miniTurbo: 4, stability: 0, drift: 3 },
      { name: "Bruiser", img: "../assets/img/kart/bruiser.png", landSpeed: 8, waterSpeed: 2, airSpeed: 1, acceleration: 2, weight: 3, landHandling: 1, waterHandling: 1, airHandling: 1, offRoad: 2, miniTurbo: 2, stability: 0, drift: 1 },
      { name: "Bumble V", img: "../assets/img/kart/bumble.png", landSpeed: 6, waterSpeed: 4, airSpeed: 4, acceleration: 5, weight: 1, landHandling: 1, waterHandling: 1, airHandling: 2, offRoad: 3, miniTurbo: 8, stability: 0, drift: 3 },
      { name: "Birthday Girl", img: "../assets/img/kart/birthday.png", landSpeed: 4, waterSpeed: 6, airSpeed: 4, acceleration: 5, weight: 1, landHandling: 5, waterHandling: 2, airHandling: 2, offRoad: 1, miniTurbo: 4, stability: 0, drift: 3 },
      { name: "Gold Kart", img: "../assets/img/kart/gold.png", landSpeed: 7, waterSpeed: 4, airSpeed: 1, acceleration: 2, weight: 3, landHandling: 3, waterHandling: 1, airHandling: 1, offRoad: 1, miniTurbo: 2, stability: 0, drift: 1 }
];

const wheels = [
      { name: "Standard Tires", img: "../assets/img/tire/standard.png", landSpeed: 4, waterSpeed: 4, airSpeed: 0, acceleration: 3, weight: 4, landHandling: 5, waterHandling: 5, airHandling: 4, offRoad: 10, miniTurbo: 4, stability: 4, drift: 4 },
      { name: "Monster Tires", img: "../assets/img/tire/monster.png", landSpeed: 7, waterSpeed: 0, airSpeed: 0, acceleration: 0, weight: 8, landHandling: 0, waterHandling: 0, airHandling: 0, offRoad: 15, miniTurbo: 4, stability: 0, drift: 4 },
      { name: "Red Monster Tires", img: "../assets/img/tire/red.png", landSpeed: 7, waterSpeed: 0, airSpeed: 0, acceleration: 1, weight: 7, landHandling: 0, waterHandling: 0, airHandling: 0, offRoad: 15, miniTurbo: 5, stability: 0, drift: 0 },
      { name: "Wood Tires", img: "../assets/img/tire/wood.png", landSpeed: 2, waterSpeed: 8, airSpeed: 4, acceleration: 5, weight: 2, landHandling: 10, waterHandling: 15, airHandling: 8, offRoad: 10, miniTurbo: 0, stability: 8, drift: 8 },
      { name: "Mushroom Tires", img: "../assets/img/tire/mushroom.png", landSpeed: 5, waterSpeed: 4, airSpeed: 0, acceleration: 2, weight: 2, landHandling: 10, waterHandling: 5, airHandling: 4, offRoad: 5, miniTurbo: 4, stability: 4, drift: 0 },
      { name: "Sponge Tires", img: "../assets/img/tire/sponge.png", landSpeed: 3, waterSpeed: 0, airSpeed: 4, acceleration: 5, weight: 1, landHandling: 5, waterHandling: 0, airHandling: 8, offRoad: 10, miniTurbo: 4, stability: 4, drift: 8 },
      { name: "Slick Tires", img: "../assets/img/tire/slick.png", landSpeed: 8, waterSpeed: 0, airSpeed: 0, acceleration: 2, weight: 5, landHandling: 0, waterHandling: 0, airHandling: 4, offRoad: 0, miniTurbo: 4, stability: 4, drift: 8 },
      { name: "Slim Tires", img: "../assets/img/tire/slim.png", landSpeed: 3, waterSpeed: 4, airSpeed: 0, acceleration: 4, weight: 3, landHandling: 10, waterHandling: 10, airHandling: 4, offRoad: 5, miniTurbo: 0, stability: 8, drift: 8 },
      { name: "Roller Tires", img: "../assets/img/tire/roller.png", landSpeed: 1, waterSpeed: 8, airSpeed: 4, acceleration: 6, weight: 0, landHandling: 13, waterHandling: 10, airHandling: 8, offRoad: 5, miniTurbo: 8, stability: 8, drift: 0 },
      { name: "Gold Tires", img: "../assets/img/tire/gold.png", landSpeed: 8, waterSpeed: 0, airSpeed: 0, acceleration: 1, weight: 6, landHandling: 0, waterHandling: 5, airHandling: 0, offRoad: 0, miniTurbo: 4, stability: 4, drift: 0 }
];

const gliders = [
      { name: "Standard Glider", img: "../assets/img/wing/standard.png", landSpeed: 0, waterSpeed: 0, airSpeed: 12, acceleration: 0, weight: 1, landHandling: 0, waterHandling: 0, airHandling: 0, offRoad: 0, miniTurbo: 0, stability: 0, drift: 1 },
      { name: "Paraglider", img: "../assets/img/wing/para.png", landSpeed: 0, waterSpeed: 0, airSpeed: 6, acceleration: 1, weight: 0, landHandling: 0, waterHandling: 0, airHandling: 4, offRoad: 0, miniTurbo: 1, stability: 0, drift: 0 },
      { name: "Swooper", img: "../assets/img/wing/swooper.png", landSpeed: 0, waterSpeed: 0, airSpeed: 6, acceleration: 1, weight: 0, landHandling: 0, waterHandling: 0, airHandling: 4, offRoad: 0, miniTurbo: 1, stability: 0, drift: 0 },
      { name: "Beast Glider", img: "../assets/img/wing/beast.png", landSpeed: 0, waterSpeed: 0, airSpeed: 12, acceleration: 0, weight: 1, landHandling: 0, waterHandling: 0, airHandling: 0, offRoad: 0, miniTurbo: 0, stability: 0, drift: 1 },
      { name: "Flower Glider", img: "../assets/img/wing/flower.png", landSpeed: 0, waterSpeed: 0, airSpeed: 0, acceleration: 1, weight: 0, landHandling: 0, waterHandling: 0, airHandling: 8, offRoad: 0, miniTurbo: 1, stability: 0, drift: 0 },
      { name: "Peach Parasol", img: "../assets/img/wing/umbrella.png", landSpeed: 0, waterSpeed: 0, airSpeed: 0, acceleration: 1, weight: 0, landHandling: 0, waterHandling: 0, airHandling: 8, offRoad: 0, miniTurbo: 1, stability: 0, drift: 0 },
      { name: "Gold Glider", img: "../assets/img/wing/gold.png", landSpeed: 0, waterSpeed: 0, airSpeed: 12, acceleration: 0, weight: 1, landHandling: 0, waterHandling: 0, airHandling: 0, offRoad: 0, miniTurbo: 0, stability: 0, drift: 1 }
];

function getCharacterStats(characterID, kartID, wheelsID, gliderID) {
      const selectedCharacter = characters[characterID];
      const selectedKart = karts[kartID];
      const selectedWheels = wheels[wheelsID];
      const selectedGlider = gliders[gliderID];
  
      let stats = {
            landSpeed: 0,
            waterSpeed: 0,
            airSpeed: 0,
            acceleration: 0,
            weight: 0,
            landHandling: 0,
            waterHandling: 0,
            airHandling: 0,
            offRoad: 0,
            miniTurbo: 0,
            stability: 0,
            drift: 0
      };
  
      stats.landSpeed = ((selectedCharacter.landSpeed + selectedKart.landSpeed + selectedWheels.landSpeed + selectedGlider.landSpeed) + 2) / 4;
      stats.waterSpeed = ((selectedCharacter.waterSpeed + selectedKart.waterSpeed + selectedWheels.waterSpeed + selectedGlider.waterSpeed) + 2) / 4;
      stats.airSpeed = ((selectedCharacter.airSpeed + selectedKart.airSpeed + selectedWheels.airSpeed + selectedGlider.airSpeed) + 2) / 4;
      stats.acceleration = ((selectedCharacter.acceleration + selectedKart.acceleration + selectedWheels.acceleration + selectedGlider.acceleration) + 2) / 4;
      stats.weight = ((selectedCharacter.weight + selectedKart.weight + selectedWheels.weight + selectedGlider.weight) + 2) / 4;
      stats.landHandling = ((selectedCharacter.landHandling + selectedKart.landHandling + selectedWheels.landHandling + selectedGlider.landHandling) + 2) / 4;
      stats.waterHandling = ((selectedCharacter.waterHandling + selectedKart.waterHandling + selectedWheels.waterHandling + selectedGlider.waterHandling) + 2) / 4;
      stats.airHandling = ((selectedCharacter.airHandling + selectedKart.airHandling + selectedWheels.airHandling + selectedGlider.airHandling) + 2) / 4;
      stats.offRoad = ((selectedCharacter.offRoad + selectedKart.offRoad + selectedWheels.offRoad + selectedGlider.offRoad) + 2) / 4;
      stats.miniTurbo = ((selectedCharacter.miniTurbo + selectedKart.miniTurbo + selectedWheels.miniTurbo + selectedGlider.miniTurbo) + 2) / 4;
      stats.stability = ((selectedCharacter.stability + selectedKart.stability + selectedWheels.stability + selectedGlider.stability) + 2) / 4;
      stats.drift = ((selectedCharacter.drift + selectedKart.drift + selectedWheels.drift + selectedGlider.drift) + 2) / 4;
  
      return stats;
}

function changeStat(action, slot) {

      let characterID = document.getElementById("selected-character").value;
      let kartID = document.getElementById("selected-kart").value;
      let wheelsID = document.getElementById("selected-wheels").value;
      let gliderID = document.getElementById("selected-glider").value;

      if(slot == "character") {
            let tempChar = document.getElementById("selected-character");
            if(action == "up") {
                  characterID = parseInt(tempChar.value) + 1;
                  tempChar.value = characterID;
                  if (characterID >= characters.length) {
                        characterID = 0;
                  }
            }
            else {
                  characterID = parseInt(tempChar.value) - 1;
                  tempChar.value = characterID;
                  if (characterID < 0) {
                        characterID = characters.length - 1;
                  }
            }
            tempChar.value = String(characterID);
            document.getElementById("character-img").src = characters[tempChar.value].img;
      }

      if(slot == "kart") {
            let tempKart = document.getElementById("selected-kart");
            if(action == "up") {
                  kartID = parseInt(tempKart.value) + 1;
                  tempKart.value = kartID;
                  if (kartID >= karts.length) {
                        kartID = 0;
                  }
            }
            else {
                  kartID = parseInt(tempKart.value) - 1;
                  tempKart.value = kartID;
                  if (kartID < 0) {
                        kartID = karts.length - 1;
                  }
            }
            tempKart.value = String(kartID);
            document.getElementById("kart-img").src = karts[tempKart.value].img;
      }

      if(slot == "wheels") {
            let tempWheels = document.getElementById("selected-wheels");
            if(action == "up") {
                  wheelsID = parseInt(tempWheels.value) + 1;
                  tempWheels.value = wheelsID;
                  if (wheelsID >= wheels.length) {
                        wheelsID = 0;
                  }
            }
            else {
                  wheelsID = parseInt(tempWheels.value) - 1;
                  tempWheels.value = wheelsID;
                  if (wheelsID < 0) {
                        wheelsID = wheels.length - 1;
                  }
            }
            tempWheels.value = String(wheelsID);
            document.getElementById("wheels-img").src = wheels[tempWheels.value].img;
      }

      if(slot == "glider") {
            let tempGlider = document.getElementById("selected-glider");
            if(action == "up") {
                  gliderID = parseInt(tempGlider.value) + 1;
                  tempGlider.value = gliderID;
                  if (gliderID >= gliders.length) {
                        gliderID = 0;
                  }
            }
            else {
                  gliderID = parseInt(tempGlider.value) - 1;
                  tempGlider.value = gliderID;
                  if (gliderID < 0) {
                        gliderID = gliders.length - 1;
                  }
            }
            tempGlider.value = String(gliderID);
            document.getElementById("glider-img").src = gliders[tempGlider.value].img;
      }
  
      const finalStats = getCharacterStats(characterID, kartID, wheelsID, gliderID);
  
      document.getElementById("landSpeed").value = finalStats.landSpeed;
      document.getElementById("waterSpeed").value = finalStats.waterSpeed;
      document.getElementById("airSpeed").value = finalStats.airSpeed;
      document.getElementById("acceleration").value = finalStats.acceleration;
      document.getElementById("weight").value = finalStats.weight;
      document.getElementById("landHandling").value = finalStats.landHandling;
      document.getElementById("waterHandling").value = finalStats.waterHandling;
      document.getElementById("airHandling").value = finalStats.airHandling;
      document.getElementById("off-road").value = finalStats.offRoad;
      document.getElementById("mini-turbo").value = finalStats.miniTurbo;
      document.getElementById("stability").value = finalStats.stability;
      document.getElementById("drift").value = finalStats.drift;
}