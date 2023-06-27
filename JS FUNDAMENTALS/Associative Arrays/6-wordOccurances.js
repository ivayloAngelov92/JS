function solve (array){
    let words={}
    for(let word of array){
        if(!words[word]){
            words[word]=0
        }
        words[word]++
    }
    let sorted=Object.entries(words).sort((a,b)=>b[1]-a[1])
    for(let [word, count]of sorted){
        console.log(`${word} -> ${count} times`);
    }
}

solve (["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])