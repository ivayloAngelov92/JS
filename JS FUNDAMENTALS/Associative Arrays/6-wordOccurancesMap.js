function solve (array){
    let words=new Map()
    for(let word of array){
        if(!words.has(word)){
            words.set(word, 0)
        }
            let currentCount=words.get(word)
            currentCount++
            words.set(word,currentCount)
    }
    let sorted=Array.from(words).sort((a,b)=>b[1]-a[1])
    for(let [word, count] of sorted){
        console.log(`${word} -> ${count} times`);
    }

}

solve (["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])