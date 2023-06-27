function solve(input){
    let vowels=["a",'e', "i", 'o','u' ]
    let [firstWord, secondWord,word]=input
    let theWord=firstWord.concat(secondWord).toLowerCase()
        word=word.toUpperCase()
    
    let x=0
    for(let i=0; i<theWord.length;i++){
        if(vowels.includes(theWord[i])){
            theWord=theWord.replace(theWord[i],word[x])
            x++
            if(x===word.length){x=0}
        }
    }
    console.log(`Your generated password is ${theWord.split('').reverse().join('')}`);
}

solve ([

    'ilovepizza',
    
    'ihatevegetables',
    
    'orange'
    
    ])