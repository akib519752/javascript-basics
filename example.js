// const country = 'Bangladesh';
// const age = 52;
// const isIndependent = true;
// const student = { id: 121, class: 11, name: 'Agun' };
// const friends = [13, 15, 45, 75, 25];

// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log(Array.isArray(student))
// console.log(friends.includes(45))
// const newFriends = [10, 20, 30, 40, 50, 60]
// const allFriends = newFriends.concat(friends);
// console.log(allFriends)

// const friends = [10, 20, 30, 40, 51, 30, 45, 45, 75, 95, 25, 35, 48]
// const partial = friends.slice(4, 10)
// console.log(partial)

// const friends = [10, 20, 30, 40, 51, 30, 45, 45, 75, 95, 25, 35, 48]
// const partial = friends.splice(4, 5, 5555, 77777);
// console.log(friends)
// console.log(partial)


// remove duplicate 
const names = ['Abul', 'Babul', 'Kabul', 'Nokib', 'Babul', 'Nokib', 'Sakib', 'Abul', 'Abul'];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}
const uniqueName = removeDuplicate(names)
// console.log(uniqueName);


for (let i = 0; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 == 0) {
        // console.log('Foo Bar')

    }
    else if (i % 3 === 0) {
        // console.log('Foo')
    }
    else if (i % 5 === 0) {
        // console.log('Bar')
    }

    // else { console.log(i) }
}


function woodCalculator(chair, table, bed) {
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;

    const chairWood = chair * perChair;
    const tableWood = table * perTable;
    const bedWood = bed * perBed;

    total = chairWood + tableWood + bedWood;
    return total;
}
const totalWood = woodCalculator(2, 2, 5)
// console.log(totalWood)


//////////////////////////////////////////////////////////////////////////
const phones = [
    { name: 'Samsung', camera: 12, storage: '32GB', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 10, storage: '32GB', price: 25000, color: 'silver' },
    { name: 'Nokia', camera: 5, storage: '32GB', price: 38000, color: 'silver' },
    { name: 'Oppo', camera: 24, storage: '32GB', price: 20000, color: 'silver' },
    { name: 'Xiomi', camera: 64, storage: '32GB', price: 22000, color: 'silver' },
    { name: 'Realme', camera: 64, storage: '32GB', price: 20000, color: 'silver' },
    { name: 'HTC', camera: 12, storage: '32GB', price: 20000, color: 'silver' },
    { name: 'Sony', camera: 20, storage: '32GB', price: 32000, color: 'silver' },
    { name: 'Symphony', camera: 12, storage: '32GB', price: 15000, color: 'silver' },
    { name: 'Iphone', camera: 5, storage: '32GB', price: 45000, color: 'silver' },
];
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
// console.log(mySelection)







//////////////////////////////////////////////////////////////////////////////////////////////////
const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 2 },
    { name: 'shirt', price: 2200, quantity: 5 },
    { name: 'pant', price: 3700, quantity: 4 },
    { name: 'belt', price: 600, quantity: 3 },

];
function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;

    }
    return sum;
}
const expense = totalCost(shoppingCart);
// console.log(expense)

////////////////////////////////////////////////////////////////////////////////////


function ticketPrice(quantity) {
    const firstRate = 100;
    const secondRate = 90;
    const restRate = 70;
    if (quantity <= 100) {
        const price = quantity * firstRate;
        return price;
    }
    else if (quantity <= 200) {
        const firstRatePrice = 100 * firstRate;
        const restTicket = quantity - 100;
        const restPrice = restTicket * secondRate;
        const total = firstRatePrice + restPrice;
        return total;
    }
    else {
        const firstRatePrice = 100 * firstRate;
        const secondRatePrice = 100 * secondRate;
        const restTicket = quantity - 200;
        const restPrice = restTicket * restRate;
        const total = firstRatePrice + secondRatePrice + restPrice;
        return total;
    }

}
const price = ticketPrice(220)
// console.log(price)
let sum = 0;
for (let i = 0; i <= 3; i++) {
    sum = sum + i;
}
// console.log(sum)

////////////////////////////////////////////////////////////////////////////////////////
function bestFriend(arr) {
    let bigFriend = arr[0];
    for (i = 0; i < arr.length; i++) {
        let friendName = arr[i];
        if (friendName.length > bigFriend.length) {
            bigFriend = friendName;
        }

    }
    return bigFriend;
}

let arr = ['Mosayeb', 'Nibir Ahmed', 'Showkat', 'Shakib', 'Sajjad', 'Mimu', 'Shakil', 'Adwitto']
// let friend = bestFriend(arr);
// console.log(friend)


let a = 'hi';
let b = 'there';
console.log(a + b)
