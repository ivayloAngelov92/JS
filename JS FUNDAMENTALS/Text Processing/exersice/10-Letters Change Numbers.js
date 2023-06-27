function solve(input){
    let alphabet = {
        "a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8, "i": 9, "j": 10, "k": 11, "l": 12, "m": 13,
        "n": 14, "o": 15, "p": 16, "q": 17, "r": 18, "s": 19, "t": 20, "u": 21, "v": 22, "w": 23, "x": 24, "y": 25, "z": 26
    }
    let words=input.split(' ').filter(word=>word.length!==0)
    let finalSum=0
    for(let word of words){
        let firstLetter=word[0]
        let number=Number(word.substring(1,word.length-1))
        let lastLetter=word[word.length-1]
        if(firstLetter.toUpperCase()===firstLetter){
            number/=alphabet[firstLetter.toLowerCase()]
        }else{number*=alphabet[firstLetter.toLowerCase()]};
        if(lastLetter.toUpperCase()===lastLetter){
            number-=alphabet[lastLetter.toLowerCase()]
        }else{number+=alphabet[lastLetter.toLowerCase()]}
        finalSum+=number
    }
    console.log(finalSum.toFixed(2));
}

solve ('P34562Z q2576f    H456z')