function solve (text, searchWord){
    let counter=0
    let words=text.split(' ')
    for(let word of words){
        word==searchWord? counter+=1:null;
    }
    console.log(counter);
}

solve ('This is a word and it also is a sentence',
'is'
)