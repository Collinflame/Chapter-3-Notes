//2.4.1 Intro to Arrays

//Create Arrays
let students = ['Alex','Eve','George','Kyle'];
let values = [1, 2, 3, 4];

//Accessing Items in Array
// console.log(students);
// console.log(students[0]); //The Beginning Item
// console.log(students[1]); //1 After Beginning Item
// console.log(students[2]);
// console.log(students[3]);
// console.log(students[4]); //Error, New 4th Item After Beginning Item
// console.log(students[4-2]);

//Formatting Items in Array
// console.log('Student: ' + students[1]);
// console.log(`Student 2: ${students[3]}`);

//Changing an Item
// students[3]='Stephanie';
// console.log(students);

//Push Adds to the End
// students.push('Steve');
// console.log(students);
// students.push('Tyler', 'Zach'); //You Can Push More Than 1 Item at a Time
// console.log(students);

//Pop Removes the Last Item From the End
// students.pop();
// console.log(students);

//Shift Removes the Beginning Item
// students.shift();
// console.log(students);

//Unshift Adds an Item to the Beginning
// students.unshift('Zeke');
// console.log(students);
// students.unshift('Yvonne', 'Xavier'); //You Can Unshift More Than 1 item
// console.log(students);

//Length of Array = Number of Items in it
// console.log('the number of items in the array:');
// console.log(students.length);
// console.log('to access the LAST item in an array, use index: length-1');
// console.log(students[students.length-1]);

//Slice up a Piece of the Original Array
// let fruits = ['apple', 'banana', 'orange', 'lemon', 'grape'];
// let citrus = fruits.slice(2, 4);
//First Number is the Starting Index, Which we Include
//Second Number is the Index we Stop BEFORE. Does not Include.