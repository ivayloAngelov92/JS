function solve (input){
    let wantedWords=input.shift().split(' ')
    let result={}
    for(let word of wantedWords){
        result[word]=0
    }
    for(let word of input){
        if(result.hasOwnProperty(word)){
            result[word]++
        }
    }
    let sorted=Object.entries(result).sort((a,b)=>b[1]-a[1])
    for(let [word, count]of sorted){
        console.log(`${word} - ${count}`);
    }
}

solve ([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])