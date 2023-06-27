function solve (words){
    let pattern=/[A-Za-z0-9]+/g
    console.log(words.match(pattern).join(', ').toUpperCase());
}

solve ('Hi, how are you?')