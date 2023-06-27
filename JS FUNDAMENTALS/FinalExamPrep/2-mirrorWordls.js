function solve (input){
     let pattern=/([@#])(?<wordOne>[A-Za-z]{3,})\1\1(?<wordTwo>[A-Za-z]{3,})\1/g
     let match=pattern.exec(input)
     let counter=0
     let validParis=[]
     while (match!==null){
        counter++
        let firstWord=match.groups.wordOne
        let secondWord=match.groups.wordTwo
        if(firstWord===secondWord.split('').reverse().join('')){
            validParis.push(`${firstWord} <=> ${secondWord}`)
        }
        match=pattern.exec(input)
     }
     if(counter==0){
        console.log(`No word pairs found!`);
    }else{console.log(`${counter} word pairs found!`);}
     if(validParis.length==0){
        console.log("No mirror words!");
     }else{
        console.log(`The mirror words are:\n${validParis.join(', ')}`);
     }
}

solve ([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    )