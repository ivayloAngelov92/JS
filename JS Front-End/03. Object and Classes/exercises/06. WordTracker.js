function findWords(input){
    let [searchedWords, ...words] = input;
    let wordOccurrences= searchedWords.split(" ").reduce((acc, curr)=>{
        acc[curr] = 0
        return acc
    },{});

    words.forEach(word=>{
        if(wordOccurrences.hasOwnProperty(word)){
            wordOccurrences[word]+=1
        }
    })
    let sorted= Object.entries(wordOccurrences).sort((a,b)=> b[1]-a[1])
    sorted.forEach(word=>{
        console.log(`${word[0]} - ${word[1]}`);
    })
}

findWords([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ])