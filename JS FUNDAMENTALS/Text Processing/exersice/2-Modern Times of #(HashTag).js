function solve(inputString) {
    let sentence = inputString.split(' ');
    for (let word of sentence) {
        if (word.startsWith('#') && word.length > 1) {
            word = word.slice(1);
            isOnlyLetters = true;
            for (let letter of word) {
                letter = letter.toLowerCase().charCodeAt();
                if (letter < 97 || letter > 122) {
                    isOnlyLetters = false;
                    break;
                }
            }
            isOnlyLetters ? console.log(word) : null;
        }
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')