//create an object of key-value pairs
let contacts = {
    bff: 1234567,
    mom: 3658356,
    bro: 5798237
};

//log all
console.log(contacts);

//access a specific entry by its key (name)
console.log(contacts.bff);

//can't access if the key doesn't exist
console.log(contacts.myself);

//add a new entry
contacts.sis = 4738754;
console.log(contacts.sis);

//update an entry
contacts.bff = 1111432;
console.log(contacts.bff);

//delete an entry
delete contacts.mom;
console.log(contacts);

//is there a key called __ in there?
console.log("bff" in contacts);
console.log("myself" in contacts);

//objects are like arrays - pass by reference (location) not calue
let a = {
    value: 20
};

let b = a;

let c = {
    value:20
};

console.log(a==b);//same object, as b points to a
console.log(a==c);//different object with same value
console.log(b==c);//different object with same value

console.log(a.value == c.value); //the value is the same, but not the object

//create 5 objects below:
let dog = {
    dogname: 'Zelda',
    breed: 'Terrier',
    age: 9,
    size: 'medium',
    barks: 'true'
};
console.log(dog);

let godofwar = {
    protag: 'Kratos',
    deuterag: 'Atreus',
    antag: 'Baldur',
    year: 2018,
    console: 'PlayStation'
};
console.log(godofwar);

let feruzzy = {
    human: true,
    age: 15,
    nerd: false,
    hight: 'tall',
    nice: true
};
console.log(feruzzy);

let whiplash = {
    type: 'movie',
    year: 2014,
    genre: 'drama',
    protag: 'Andrew Neiman',
    antag: 'Terrence Fletcher'
};
console.log(whiplash);

let theboys = {
    type: 'show',
    years: '2019-2022' ,
    genre: 'superhero',
    protag: 'Butcher and Hughie',
    antag: 'Homelander'
};
console.log(theboys);