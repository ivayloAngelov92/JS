function solve (input){
    let pieces=Number(input.shift())
    let commandLine=input.shift()
    let songs={}
    for(let i=0; i<pieces; i++){
        let [song,composer,key]=commandLine.split('|')
        songs[song]={composer,key}
        commandLine=input.shift()
    }
    while(commandLine!=='Stop'){
        if(commandLine.includes('Add')){
            let [command,song,composer,key]=commandLine.split("|")
            if(songs[song]){
                console.log(`${song} is already in the collection!`);
            }else{
                console.log(`${song} by ${composer} in ${key} added to the collection!`);
                songs[song]={composer,key}
            }
        }else if(commandLine.includes('Remove')){
            let [command,song]=commandLine.split('|')
            if(songs[song]){
                console.log(`Successfully removed ${song}!`);
                delete songs[song]
            }else{console.log(`Invalid operation! ${song} does not exist in the collection.`)}
        }else if(commandLine.includes('ChangeKey')){
            let [command,song,newKey]=commandLine.split('|')
            if(songs[song]){
                console.log(`Changed the key of ${song} to ${newKey}!`);
                songs[song].key=newKey
            }else{console.log(`Invalid operation! ${song} does not exist in the collection.`);}
        }
        commandLine=input.shift()
    }
    for(let [key,value] of Object.entries(songs)){
        console.log(`${key} -> Composer: ${value.composer}, Key: ${value.key}`)
    }
}

solve ([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  
)