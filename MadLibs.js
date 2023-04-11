const readLine = require('readline-sync');
let words = [];


let one = readLine.question(`Give Me A Person: `);
if (one.length === 0){
    let one = 'my Mother';
    words.push(one);
} else {words.push(one);}
let two = readLine.question(`Give Me A Vehicle: `);
if (two.length === 0){
    let two = 'Ford F-150';
    words.push(two);
} else {words.push(two);}
let three = readLine.question(`Give Me A Noun: `);
if (three.length === 0){
    let three = 'football';
    words.push(three);
} else {words.push(three);}
let four = readLine.question(`Give Me An Adjective: `);
if (four.length === 0){
    let four = 'big';
    words.push(four);
} else {words.push(four);}
let five = readLine.question(`Give Me A Color: `);
if (five.length === 0){
    let five = 'white';
    words.push(five);
} else {words.push(five);}
let six = readLine.question(`Give Me An Adjective Ending With "est": `);
if (six.length === 0){
    let six = '';
    words.push(six);
} else {words.push(six);}
let seven = readLine.question(`Give Me A Person: `);
words.push(seven);
let eight = readLine.question(`Give Me An Adjective `);
words.push(eight);
let nine = readLine.question(`Give Me A Verb Ending With "ing": `);
words.push(nine);
let ten = readLine.question(`Give Me An Adjective: `);
words.push(ten);
let eleven = readLine.question("Give Me A Color: ");
words.push(eleven);
let twelve = readLine.question("Give Me A Plural Noun: ");
words.push(twelve);
let thirteen = readLine.question("Give Me A Number: ");
words.push(thirteen);
let fourteen = readLine.question("Give Me A Plural Noun: ");
words.push(fourteen);
let fifthteen = readLine.question("Give Me A Game: ");
words.push(fifthteen);
let sixteen = readLine.question("Give Me A Number: ");
words.push(sixteen);
let seventeen = readLine.question("Give Me A Food: ");
words.push(seventeen);
let eighteen = readLine.question("Give Me A Movie: ");
words.push(eighteen);
let nineteen = readLine.question("Give Me A Noun: ");
words.push(nineteen);
let twenty = readLine.question("Give Me An Adjective: ");
words.push(twenty);

console.log(`Here's Our Story "Visiting Efren's House"`);
console.log(`Today I am visiting Efren with ${words[0]}. 
As we rode in our ${words[1]} we see Efren’s house in the distance. 
We see that his ${words[2]} is in his front yard. 
His ${words[3]} ${words[4]} house is the ${words[5]} in the neighborhood. 
As ${words[6]} lets us in we go to Efren’s room. 
We bust into his room all ${words[7]} as we see that he is ${words[8]} and we are in shock. 
Efren gives us a tour of his ${words[9]} room. 
His room is ${words[10]} with ${words[11]} all over the place. 
He has at least ${words[12]} different ${words[13]}!  
After the tour we play ${words[14]} and eat ${words[15]} ${words[16]}. 
He was surprised at how much food we ate. 
We decided after that we were going to watch ${words[17]}. 
As we left, Efren gave us ${words[18]} as a goodbye gift. 
On our way home we thought about how fun his ${words[19]} home was.`);