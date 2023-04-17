const readLine = require('readline-sync');

let answers = ['yes', 'no', 'maybe', 'whatever you want the answer to be that is the answer', 'i am not sure', 'nope', 'yup', '100% incorrect', 'yes, definitely, absolutely'];
let randomnum = Math.floor(Math.random()*answers.length);
console.log('Welcome to My Magical 8-Ball. Remember this one rule. Only yes or no questions.');
readLine.question('What is your question?: ');
console.log(answers[randomnum]);

