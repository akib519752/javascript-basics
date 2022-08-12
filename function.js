function money() {
    console.log("HEllo")
}
// money();

function singara(money) {
    console.log("mama singara den")
    console.log(money)
}
// singara(50);

function add(num1, num2) {
    // console.log(num1, num2);
    let sum = num1 + num2;
    return sum;
}
let total = add(15, 30);
// console.log('Total', total)


function getAverage(assignment1, assignment2, assignment3) {
    let total = assignment1 + assignment2 + assignment3;
    let average = total / 3;
    return average;
}
let assignment1Marks = 58;
let assignment2Marks = 58;
let assignment3Marks = 60;

// var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
// console.log('my average marks:', myAverage.toFixed(2));

var student = {
    id: 64,
    name: 'sakib'

}
// console.log(student.id);
// object 
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}
// let keys = Object.keys(shoppingCart);
// console.log(keys)
// let values = Object.values(shoppingCart)
// console.log(values)

// for (var i = 0; i < keys.length; i++) {
//     var propertyNAme = keys[i];
//     var propertyValue = shoppingCart[propertyNAme];
//     console.log(propertyNAme, propertyValue);
// }
var smartphone = { brand: "iPhone", model: "13" };
console.log(smartphone[brand]);
