var fruits = ['Apple', 'Banana', 'Orange']
var bananaIndex = fruits.indexOf('Banana')
// console.log(bananaIndex);
fruits[1] = 'Mango';
// console.log(fruits);
fruits.pop();
// console.log(fruits);
fruits.push('Watermelon');
// console.log(fruits)


var marks = 65;
if (marks > 80) {
    // console.log("A-grade")
}
else if (marks > 60) {
    // console.log("B-grade")

}
else if (marks > 50) {
    // console.log("C-grade")
}
else if (marks > 40) {
    // console.log("D-grade")
}

else {
    // console.log("F-grade")
}

var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2) {
    if (num1 > num3) {
        // console.log(num1, 'largest number');
    }
    else {
        // console.log(num3, 'largest number')
    }
}
else {
    if (num2 > num3) {
        // console.log(num2, 'largest number')
    }
    else {
        // console.log(num3, 'largest number')
    }
}

var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2 || side1 == side3 || side2 == side3) {
    // console.log("isosceles")
}
else {
    // console.log("not isosceles")
}

// var i = 0;
// for (i = 0; i < 5; i++) { };
// console.log(i);



// var array = ['Mango', 'Tomato', 'Rice', 'Dal', 'Pizza', 'Burger'];
// for (var i = 0; i < array.length; i++) {
//     newArray = array[i];
//     console.log(newArray);
// }


var array = ['Mango', 'Tomato', 'Rice', 'Dal', 'Pizza', 'Burger', 'Kala Vuna', 'Licchi'];
var i = 0;
while (i < array.length) {
    newArray = array[i];
    i++;
    console.log(newArray);
}
