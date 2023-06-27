function solve(input){
    let n=Number(input[0])
    let index=1
    let command=input[index]
    
    let money=0
    let winCount=0
    let lostCount=0
    for(let i=0; i<n; i++){
        let winCountDay=0
        let lostCountDay=0
        let moneyForTheDay=0
        while(command!=="Finish"){
            index++;
            command=input[index]
            if(command==="win"){
                moneyForTheDay+=20
                winCount++
                winCountDay++
            }else {
                lostCount++
                lostCountDay++
            }
            index++;
            command=input[index]
        }
        
        if(winCountDay>lostCountDay){
            moneyForTheDay=moneyForTheDay*1.1
        }
        money+=moneyForTheDay
        index++;
        command=input[index]
    }
    if(winCount>lostCount){
        money=money*1.2
        console.log(`You won the tournament! Total raised money: ${money.toFixed(2)}`);
    }else{
        console.log(`You lost the tournament! Total raised money: ${money.toFixed(2)}`);
    }
    
}

solve (["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose","swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])


