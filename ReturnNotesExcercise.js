const readLine = require('readLine-sync');

//Question 1
// function nameSwapper(){
//     let firstname = readLine.question('First Name:');
//     let lastname = readLine.question('Last Name:');
//     return(`Your New Name is ${lastname} ${firstname}`)
// }
// let myName = nameSwapper ();
// console.log(myName);

//Question 2
// function numberGen() {
//     let numberone = readLine.question('First Number Between 0-9:');
//     let numbertwo = readLine.question('Second Number Between 0-9:');
//     return (`You Number is ${numberone}${numbertwo}`)
// }
// console.log(numberGen());

//Question 3
// function temps() {
//     let temp1 = Number(readLine.question('Monday Temperature: '));
//     let temp2 = Number(readLine.question('Tuesday Temperature: '));
//     let temp3 = Number(readLine.question('Wednesday Temperature: '));
//     let temp4 = Number(readLine.question('Thursday Temperature: '));
//     let temp5 = Number(readLine.question('Friday Temperature: '));
//     let temp6 = Number(readLine.question('Saturday Temperature: '));
//     let temp7 = Number(readLine.question('Sunday Temperature: '));
//     let totaltemp = temp1 + temp2 + temp3 + temp4 + temp5 + temp6 + temp7;
//     let average = totaltemp / 7;
//     return (average.toFixed(2));
// }
// let aveTemp = temps();
// console.log(`The Average Temperature of the Week is ${aveTemp}`);

//Question 4
// function charity () {
//     let NumofDonators = Number(readLine.question('Number of Donators: '));
//     let donations = 0;
//     let bank = 0;
//     while (NumofDonators > 0) {
//         donations = Number(readLine.question('How Much Money Did You Donate: '));
//         bank += donations;
//         NumofDonators --;
//     }
//     let total = bank;
//     if (bank >= 1000 && bank <= 2000) {
//         console.log (`We earned $${bank} in donations so now it will be doubled so we have gotten donations of $${bank + bank}!`)
//     } else if (bank > 2000) {
//         console.log (`We earned $${bank} in donations so now it will be plsu $2000 so we have gotten donations of $${2000 + bank}!`)
//     } else {
//         console.log (`We earned $${bank} in donations plus a $100 bonus means re reached $${bank + 100}!`)
//     }
//     return (total)
// }
// console.log(charity());

//Question 5
// function DartGame() {
//     let Round1 = Number(readLine.question('Points Earned in Round One (0-180 Points): '));
//     let Round2 = Number(readLine.question('Points Earned in Round Two (0-180 Points): '));
//     let Round3 = Number(readLine.question('Points Earned in Round Three (0-180 Points): '));
//     let Total = Round1 + Round2 + Round3;
//     return (`Points Earned This Game is ${Total}`)
// }
// console.log(DartGame());

//Question 6
// function DartGame() {
//     let Round11 = Number(readLine.question('Player One: Points Earned in Round One (0-180 Points): '));
//     let Round12 = Number(readLine.question('Player One: Points Earned in Round Two (0-180 Points): '));
//     let Round13 = Number(readLine.question('Player One: Points Earned in Round Three (0-180 Points): '));
//     let Round21 = Number(readLine.question('Player Two: Points Earned in Round One (0-180 Points): '));
//     let Round22 = Number(readLine.question('Player Two: Points Earned in Round Two (0-180 Points): '));
//     let Round23 = Number(readLine.question('Player Two: Points Earned in Round Three (0-180 Points): '));
//     if (Round11 + Round12 + Round13 > Round21 + Round22 + Round23) {
//         return ('Player1Wins')
//     } else if (Round11 + Round12 + Round13 < Round21 + Round22 + Round23) {
//         return ('Player2Wins')
//     } else {
//         return (`Its a Tie`)
//     }
// }
// console.log(DartGame());

//Question 7
function linear () {
    let rise = Number(readLine.question('Rise of the slope: '));
    let run = Number(readLine.question('Run of the slope: '));
    let b = Number(readLine.question('Y-Intercept: '));
    let m = (`${rise}/${run}`);
    return (`The linear equation is y=${m}x+${b}`)
}
console.log(linear());

//Question 8
// function slope () {
//     let x1 = Number(readLine.question('First X Point: '));
//     let y1 = Number(readLine.question('First Y Point: '));
//     let x2 = Number(readLine.question('Second X Point: '));
//     let y2 = Number(readLine.question('Second Y Point: '));
//     let rise = y2 - y1;
//     let run = x2 - x1;
//     let slope = (`${rise}/${run}`);
//     return (`Your Slope is ${slope}`)
// }
// console.log(slope());