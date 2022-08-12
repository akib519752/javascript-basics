for (i = 1; i <= 39; i++) {
    // console.log("Ajke amar mon valo ney")
}

for (i = 58; i <= 98; i++) {
    // console.log(i)
}

// even numbers 
for (i = 412; i <= 456; i += 2) {
    // console.log(i)
}
// odd numbers 
for (i = 581; i <= 623; i += 2) {
    // console.log(i)
}
// what i learned 
var array = ['HTML', 'CSS', 'Bootstrap', 'Tailwind', 'Javascript']
for (i = 0; i < array.length; i++) {
    var learned = array[i];
    // console.log(learned);
}
// how many phone i have used 
var mobile = ['Nokia', 'Symphony', 'Grameen', 'Walton', 'Samsung', 'Xiomi', 'Iphone']
var i = 0;
while (i < mobile.length) {
    var used = mobile[i];
    i++;
    // console.log(used);

}
//
for (var i = 30; i <= 86; i++) {
    if (i > 44) {
        break;
    }
    // console.log(i);
}

// books
var booksPrice = [150, 250, 250, 180, 170, 240, 250, 190, 175, 150, 200, 150]
for (var i = 0; i < booksPrice.length; i++) {
    var newPrice = booksPrice[i];
    if (newPrice > 200) {
        continue;
    }
    console.log(newPrice)
}