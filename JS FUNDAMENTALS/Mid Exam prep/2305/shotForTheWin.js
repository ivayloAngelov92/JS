function shootForTheWin(array){
    let targets=array.shift().split(' ').map(Number)
    let currentLine=array.shift()
    let count=0
    while(currentLine!=='End'){
        currentLine=Number(currentLine)
        if(targets[currentLine]){
        let damage=targets[currentLine]
        targets[currentLine]=-1
        count++
        for(let i=0;i<targets.length;i++){
            if(targets[i]>-1&&targets[i]>damage){
                targets[i]-=damage
            }else if(targets[i]>-1&&targets[i]<=damage){
                targets[i]+=damage
            }
        }
    }
        currentLine=array.shift()
    }
    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
}

shootForTheWin (["30 30 12 60 54 66",
"-2",
"2",
"4",
"0",
"End"])