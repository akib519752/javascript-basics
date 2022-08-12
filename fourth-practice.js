// let myInch = 64;
// let myFeet = myInch / 12;
// console.log(myFeet)

// function inchToFeet(inches) {
//     const height = inches / 12;
//     return height;
// }
// let dadaInches = 69;
// let dadaFeet = inchToFeet(dadaInches);
// console.log(dadaFeet)

// let dadiInches = 59;
// let dadiFeet = inchToFeet(dadiInches);
// console.log(dadiFeet)


// function milesToKm(miles) {
//     let km = miles * 1.609;
//     return km;
// }
// let distance = 14;
// let myDistance = milesToKm(distance);
// console.log(myDistance)

// function IsEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// let checkNum = 29;
// let result = IsEven(checkNum);
// console.log(result)

// function isLeapYear(year) {
//     let reminder = year % 4;
//     if (reminder === 0) {
//         return true;
//     }
//     return false;

// }
// let yourYear = 1953;
// let leapYear = isLeapYear(yourYear);
// console.log('leap Year', leapYear)

function getSum(numbers) {
    3
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        sum = sum + element;
        console.log(element, sum)
    }
}

function getOddNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element % 2 === 0) {

        }
    }
}

let myNumbers = [12, 25, 35, 45, 25, 56, 75, 55]
getOddNumbers(myNumbers);
getSum(myNumbers);
