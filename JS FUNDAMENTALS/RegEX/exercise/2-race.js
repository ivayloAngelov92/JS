function solve(input){
    let racers=input.shift().split(', ')
    let racersObj={}
    const patternName=/[A-Za-z]+/g
    const patternDigit=/[\d]/g

    let command=input.shift()
    while(command!=='end of race'){
        let currentName=command.match(patternName).join('')
        if(racers.includes(currentName)){
            let distance=command.match(patternDigit).map(Number).reduce((a,b)=>a+b,0)
            if(!racersObj[currentName]){
                racersObj[currentName]=0
            }
            racersObj[currentName]+=distance
        }
        command=input.shift()
    }
    let sorted=Object.keys(racersObj).sort((a,b)=>racersObj[b]-racersObj[a])
    console.log(`1st place: ${sorted[0]}`);
    console.log(`2nd place: ${sorted[1]}`);
    console.log(`3rd place: ${sorted[2]}`);
}

solve (['George, Peter, Bill, Tom',

'G4e@55or%6g6!68e!!@ ',

'R1@!3a$y4456@',

'B5@i@#123ll',

'G@e54o$r6ge#',

'7P%et^#e5346r',

'T$o553m&6',

'end of race'])