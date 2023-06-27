function solve (words, input){
    let wordsArray=words.split(', ')
    wordsArray.forEach(word=>{
        let match= '*'.repeat(word.length)
        input=input.replace(match, word)
    })
    console.log(input);
}

solve ('great',

'softuni is ***** place for learning new programming languages')