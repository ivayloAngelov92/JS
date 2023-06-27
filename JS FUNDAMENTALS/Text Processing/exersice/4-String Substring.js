function stringSubstring(word, text) {
    word = word.toLowerCase();
    let textArray = text.split(' ');

    for (let currentWord of textArray) {
        currentWord = currentWord.toLowerCase();
        if (currentWord === word) {
            return console.log(currentWord);
        }
    }
    console.log(`${word} not found!`);
}

solve ('javascript',

'JavaScript is the best programming language')