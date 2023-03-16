const readLine = require('readLine-sync');

//Question 1
function nameSwapper(){
    let firstname = readLine.question('First Name:');
    let lastname = readLine.question('Last Name:');
    return(`Your New Name is ${lastname} ${firstname}`)
}
let myName = nameSwapper ();
console.log(myName);

//Question 2
function numberGen() {
    let numberone = Number(readline.question('First Number Between 0-9:'));
    let numbertwo = Number(readline.question('Second Number Between 0-9:'));
}