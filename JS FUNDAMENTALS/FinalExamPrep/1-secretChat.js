function solve (input){
    let message=input.shift()
    while(input[0]!=='Reveal'){
        let commandLine=input.shift().split(':|:')
        if(commandLine[0]==='InsertSpace'){
            let index=Number(commandLine[1])
            let start=message.substring(0,index)
            let end=message.substring(index)
            message=start+' '+end
            console.log(message);
        }else if(commandLine[0]==="Reverse"){
            let substring=commandLine[1]
            if(message.includes(substring)){
                let startindex=message.indexOf(substring)
                let endIndex=substring.length
                let start=message.substring(0,startindex)
                let end=message.substring(startindex+endIndex)
                let substringRev=substring.split('').reverse().join('')
                message=start+end+substringRev
                console.log(message);
            }else{console.log('error');}
        }else if (commandLine[0]==='ChangeAll'){
            let string=commandLine[1]
            let replacement=commandLine[2]
            message=message.split(string).join(replacement)
            console.log(message);
        }
    }
    console.log(`You have a new text message: ${message}`);
}

solve ([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])