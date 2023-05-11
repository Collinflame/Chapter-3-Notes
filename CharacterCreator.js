const readLine = require('readline-sync');

let diceRolled = [];
let eyeColors = ['Blue', 'Green', 'Red', 'Black', 'Hazel',];
let godOf = ['War', 'Light', 'Wind', 'Fire', 'Water', 'Thunder', 'Gods'];
let ageNumber = [1000, 10, 1000000000, 838, 4573];
let killCount = [0, 29, 2849, 5479832, 23, 248935739875];
let character1 = {
    //empty for now
};
let character2 = {
    //empty for now
};
let character3 = {
    //empty for now
};

createChar(character1, diceRolled);
createChar2(character2, diceRolled);
createChar3(character3, diceRolled);

function rolld6 (){
    return Math.ceil(Math.random()*6)
}

function rollDice(amount, list){
    for (let i = 0; i<amount; i++) {
        let roll = rolld6();
        // console.log(`You Rolled a ${roll}!`);
        list.push(roll);
    }
}

function sum (list) {
   let sum=0;
   for (let i=0; i<list.length; i++) {
       sum+=list[i]
   }
   // console.log(`The Total Was: ${sum}`);
   return sum;
}

function rollStat(list) {
    list = [];
    rollDice(25, list);
    return sum(list);
}

function pickRandomChoice(choices) {
    let randomNum = Math.floor(Math.random()*choices.length);
    return choices[randomNum];
}


function createChar(character, list){
    character.name = readLine.question('Enter Character Name:');
    character.eyeColor = pickRandomChoice(eyeColors);
    character.god = pickRandomChoice(godOf);
    character.age = pickRandomChoice(ageNumber);
    character.bodyCount = pickRandomChoice (killCount);
    // console.log('Rolling Strength');
    character.strength = rollStat(diceRolled);
    // console.log('Rolling Dexterity');
    character.dexterity = rollStat(diceRolled);
    // console.log('Rolling Constitution');
    character.constitution = rollStat(diceRolled);
    // console.log('Rolling Intelligence');
    character.intelligence = rollStat(diceRolled);
    // console.log('Rolling Wisdom');
    character.wisdom = rollStat(diceRolled);
    // console.log('Rolling Charisma');
    character.charisma = rollStat(diceRolled);
    character.luck = rolld6();
    displayChar(character);
}

function createChar2(character2, list){
    character2.name2 = readLine.question('Enter Character Name:');
    character2.eyeColor2 = pickRandomChoice(eyeColors);
    character2.god2 = pickRandomChoice(godOf);
    character2.age2 = pickRandomChoice(ageNumber);
    character2.bodyCount2 = pickRandomChoice (killCount);
    // console.log('Rolling Strength');
    character2.strength2 = rollStat(diceRolled);
    // console.log('Rolling Dexterity');
    character2.dexterity2 = rollStat(diceRolled);
    // console.log('Rolling Constitution');
    character2.constitution2 = rollStat(diceRolled);
    // console.log('Rolling Intelligence');
    character2.intelligence2 = rollStat(diceRolled);
    // console.log('Rolling Wisdom');
    character2.wisdom2 = rollStat(diceRolled);
    // console.log('Rolling Charisma');
    character2.charisma2 = rollStat(diceRolled);
    character2.luck2 = rolld6();
    displayChar2(character2);
}

function createChar3(character3, list){
    character3.name3 = readLine.question('Enter Character Name:');
    character3.eyeColor3 = pickRandomChoice(eyeColors);
    character3.god3 = pickRandomChoice(godOf);
    character3.age3 = pickRandomChoice(ageNumber);
    character3.bodyCount3 = pickRandomChoice (killCount);
    // console.log('Rolling Strength');
    character3.strength3 = rollStat(diceRolled);
    // console.log('Rolling Dexterity');
    character3.dexterity3 = rollStat(diceRolled);
    // console.log('Rolling Constitution');
    character3.constitution3 = rollStat(diceRolled);
    // console.log('Rolling Intelligence');
    character3.intelligence3 = rollStat(diceRolled);
    // console.log('Rolling Wisdom');
    character3.wisdom3 = rollStat(diceRolled);
    // console.log('Rolling Charisma');
    character3.charisma3 = rollStat(diceRolled);
    character3.luck3 = rolld6();
    displayChar3(character3);
}

function displayChar(char){
    console.log('----------------------------------');
    console.log(`Name: ${char.name}`);
    console.log(`Eye Color: ${char.eyeColor}`);
    console.log(`God of ${char.god}`);
    console.log(`Age: ${char.age}`);
    console.log(`Kill Count: ${char.bodyCount}`);
    console.log(`Strength: ${char.strength}`);
    console.log(`Dexterity: ${char.dexterity}`);
    console.log(`Constitution: ${char.constitution}`);
    console.log(`Intelligence: ${char.intelligence}`);
    console.log(`Wisdom: ${char.wisdom}`);
    console.log(`Charisma: ${char.charisma}`);
    console.log(`Luck: ${char.luck}`);
    console.log('----------------------------------');
}

function displayChar2(char2){
    console.log('----------------------------------');
    console.log(`Name: ${char2.name2}`);
    console.log(`Eye Color: ${char2.eyeColor2}`);
    console.log(`God of ${char2.god2}`);
    console.log(`Age: ${char2.age2}`);
    console.log(`Kill Count: ${char2.bodyCount2}`);
    console.log(`Strength: ${char2.strength2}`);
    console.log(`Dexterity: ${char2.dexterity2}`);
    console.log(`Constitution: ${char2.constitution2}`);
    console.log(`Intelligence: ${char2.intelligence2}`);
    console.log(`Wisdom: ${char2.wisdom2}`);
    console.log(`Charisma: ${char2.charisma2}`);
    console.log(`Luck: ${char2.luck2}`);
    console.log('----------------------------------');
}
function displayChar3(char3){
    console.log('----------------------------------');
    console.log(`Name: ${char3.name3}`);
    console.log(`Eye Color: ${char3.eyeColor3}`);
    console.log(`God of ${char3.god3}`);
    console.log(`Age: ${char3.age3}`);
    console.log(`Kill Count: ${char3.bodyCount3}`);
    console.log(`Strength: ${char3.strength3}`);
    console.log(`Dexterity: ${char3.dexterity3}`);
    console.log(`Constitution: ${char3.constitution3}`);
    console.log(`Intelligence: ${char3.intelligence3}`);
    console.log(`Wisdom: ${char3.wisdom3}`);
    console.log(`Charisma: ${char3.charisma3}`);
    console.log(`Luck: ${char3.luck3}`);
    console.log('----------------------------------');
}



