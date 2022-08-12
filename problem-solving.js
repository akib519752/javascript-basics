// case conversion
let userName = 'blackPink';
let userInput = 'blackPinK';
let newName = userName.toLowerCase();
// console.log(newName)


// search
let lyrics = 'here is a song';
// let doesExist = lyrics.includes('sog')
// console.log(doesExist)
let searchString = 'sOng'
// let doesExist = lyrics.includes(searchString);
let newLyrics = lyrics.toLowerCase()
let searchStringLower = searchString.toLowerCase()
let doesExist = newLyrics.includes(searchStringLower)

let doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());

// console.log(doesExistOneLine)



// index 0ff
if (lyrics.indexOf('song') !== -1) {
    // console.log('Exist')
}
else {
    // console.log('cannot find it')
}

//startsWith
// console.log(lyrics.startsWith('here'))



let song = 'What is this song To use SoundHound to identify a song, simply download the app from its official website and install it. Then open the app, tap the big orange SoundHound button and hold your phone near the music. SoundHound will then identify the song.'
const parts = song.slice(15, 200)
const partial = song.substring(15, 200)
console.log(partial)


