const readLine = require('readline-sync');
order = [];
total = [];

sandwich = readLine.question('What Sandwich Do You Want? Chicken ($5.25), Beef ($6.25), or Tofu ($5.75)?: ');
if (sandwich === 'Chicken') {
    order.push('Chicken Sandwich');
    total.push(5.25);
    yesSandwich = 1
} else if (sandwich === 'Beef') {
    order.push('Beef Sandwich');
    total.push(6.25);
    yesSandwich = 1
} else if (sandwich === 'Tofu') {
    order.push('Tofu Sandwich');
    total.push(5.75);
    yesSandwich = 1
}

drink = readLine.question('Do You Want A Drink? Yes or No?: ');
if (drink === 'Yes') {
    drinkSize = readLine.question('What Size Drink Do You Want? Small ($1.00), Medium ($1.75), or Large ($2.25)?: ');
    if (drinkSize === 'Small') {
        order.push(' Small Drink');
        total.push(1.00);
        yesDrink = 1
    } else if (drinkSize === 'Medium') {
        order.push(' Medium Drink');
        total.push(1.75);
        yesDrink = 1
    } else if (drinkSize === 'Large') {
        order.push(' Large Drink');
        total.push(2.25);
        yesDrink = 1
    }
}

fries = readLine.question('Do You Want Fires? Yes or No?: ');
if (fries === 'Yes') {
    friesSize = readLine.question('What Size Fries Do You Want? Small ($1.00), Medium ($1.50), or Large ($2.00)?: ');
    if (friesSize === 'Small') {
        friesSize2 = readLine.question('Would You Like to Mega-Size Your Fries For One More Dollar? Yes or No: ');
        if (friesSize2 === 'Yes') {
            order.push(' Large Fries');
            total.push(2.00);
            yesFries = 1
        } else {
            order.push(' Small Fries');
            total.push(1.00);
            yesFries = 1
        }
    } else if (friesSize === 'Medium') {
        order.push(' Medium Fries');
        total.push(1.50);
        yesFries = 1
    } else if (friesSize === 'Large') {
        order.push(' Large Fries');
        total.push(2.00);
        yesFries = 1
    }
}

ketchup = readLine.question('Do You Want Ketchup? Yes or No?: ');
if (ketchup === 'Yes') {
    ketchupAmount = readLine.question('How Many Ketchup Packets Do You Want? Its 25 Cents Each: ');
    order.push(` Ketchup x${ketchupAmount}`);
    total.push(ketchupAmount * .25)
}

bbq = readLine.question('Do You Want Barbecue? Yes or No?: ');
if (bbq === 'Yes') {
    bbqAmount = readLine.question('How Many Barbecue Containers Do You Want? Its 30 Cents Each: ');
    order.push(` Barbecue x${bbqAmount}`);
    total.push(bbqAmount * .35)
}

mustard = readLine.question('Do You Want Mustard? Yes or No?: ');
if (mustard === 'Yes') {
    mustardAmount = readLine.question('How Many Mustard Packets Do You Want? Its 20 Cents Each: ');
    order.push(` Mustard x${mustardAmount}`);
    total.push(mustardAmount * .20)
}

sauce = readLine.question('Do You Want Collinflame Sauce? Yes or No?: ');
if (sauce === 'Yes') {
    sauceAmount = readLine.question('How Many Collinflame Sauce Containers Do You Want? Its 35 Cents Each: ');
    order.push(` Collinflame Sauce x${sauceAmount}`);
    total.push(sauceAmount * .35)
}

let totalAmount = 0;
for(let i = 0; i < total.length; i++) {
    totalAmount += total[i];
}

if (yesSandwich + yesFries + yesDrink === 3) {
    totalAmount = totalAmount - 1
}

totalAmount = totalAmount + (totalAmount * 0.07);
totalAmount = totalAmount.toFixed(2);

console.log(`Your Order is: ${order}`);
console.log(`Your Total is: $${totalAmount}`);