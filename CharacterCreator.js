const readLine = require('readline-sync');

let diceRolled = [];
let character1 = {
    //empty for now
};

createChar(character1, diceRolled);

function rolld6 (){
    return Math.ceil(Math.random()*6)
}

function rollDice(amount, list){
    for (let i = 0; i<amount; i++) {
        let roll = rolld6();
        console.log(`You Rolled a ${roll}!`);
        list.push(roll);
    }
}

function sum (list) {
   let sum=0;
   for (let i=0; i<list.length; i++) {
       sum+=list[i]
   }
   console.log(`The Total Was: ${sum}`);
   return sum;
}

function rollStat(list) {
    list = [];
    rollDice(4, list);
    return sum(list);
}

function createChar(character, list){
    character.name = readLine.question('Enter Character Name:');
    console.log('Rolling Strength');
    character.strength = rollStat(diceRolled);
    console.log('Rolling Dexterity');
    character.dexterity = rollStat(diceRolled);
    console.log('Rolling Constitution');
    character.constitution = rollStat(diceRolled);
    console.log('Rolling Intelligence');
    character.intelligence = rollStat(diceRolled);
    console.log('Rolling Wisdom');
    character.wisdom = rollStat(diceRolled);
    console.log('Rolling Charisma');
    character.charisma = rollStat(diceRolled);
    displayChar(character);
}

function displayChar(char){
    console.log('----------------------------------');
    console.log(`Name: ${char.name}`);
    console.log(`Strength: ${char.strength}`);
    console.log(`Dexterity: ${char.dexterity}`);
    console.log(`Constitution: ${char.constitution}`);
    console.log(`Intelligence: ${char.intelligence}`);
    console.log(`Wisdom: ${char.wisdom}`);
    console.log(`Charisma: ${char.charisma}`);
    console.log('----------------------------------');
}