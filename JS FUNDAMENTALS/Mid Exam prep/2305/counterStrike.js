function counterStrike(array){
    let energy=Number(array.shift())
    let currentLine=(array.shift())
    let battlesWon=0
    while(currentLine!='End of battle'){
        if(currentLine>energy){
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`);return
        }else{
           energy-=currentLine
           battlesWon++
        }
        if(battlesWon%3==0){
            energy+=battlesWon
        }
        currentLine=(array.shift())
    }
    console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
}

counterStrike (["200",
"54",
"14",
"28",
"13",
"End of battle"])