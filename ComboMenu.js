const readLine = require('readline-sync');
order = [];
total = [];

sandwich = readLine.question('What Sandwich Do You Want? Chicken ($5.25), Beef ($6.25), or Tofu ($5.75)?: ');
if (sandwich === 'Chicken') {
    order.push('Chicken Sandwich');
    total.push(5.25)
} else if (sandwich === 'Beef') {
    order.push('Beef Sandwich');
    total.push(6.25)
} else if (sandwich === 'Tofu') {
    order.push('Tofu Sandwich');
    total.push(5.75)
}

drink = readLine.question('Do You Want A Drink? Yes or No?: ');
if (drink === 'Yes') {
    drinkSize = readLine.question('What Size Drink Do You Want? Small ($1.00), Medium ($1.75), or Large ($2.25)?: ');
    if (drinkSize === 'Small') {
        order.push(' Small Drink');
        total.push(1.00)
    } else if (drinkSize === 'Medium') {
        order.push(' Medium Drink');
        total.push(1.75)
    } else if (drinkSize === 'Large') {
        order.push(' Large Drink');
        total.push(2.25)
    }
}

fries = readLine.question('Do You Want Fires? Yes or No?: ');
if (fries === 'Yes') {
    friesSize = readLine.question('What Size Fries Do You Want? Small ($1.00), Medium ($1.50), or Large ($2.00)?: ');
    if (friesSize === 'Small') {
        friesSize2 = readLine.question('Would You Like to Mega-Size Your Fries For One More Dollar? Yes or No: ');
        if (friesSize2 === 'Yes') {
            order.push(' Large Fries');
            total.push(2.00)
        } else {
            order.push(' Small Fries');
            total.push(1.00)
        }
    } else if (friesSize === 'Medium') {
        order.push(' Medium Fries');
        total.push(1.50)
    } else if (friesSize === 'Large') {
        order.push(' Large Fries');
        total.push(2.00)
    }
}

let totalAmount = 0;
for(let i = 0; i < total.length; i++) {
    totalAmount += total[i];
}

console.log(`Your Order is: ${order}`);
console.log(`Your Total is: ${totalAmount}`);