function solve (input, word){
    let words= input.split(' ')
    let counter=0
    words.forEach(w=> {
        if(w===word){counter++}
    })
    console.log(counter);
}

solve ('This is a word and it also is a sentence',

'is')