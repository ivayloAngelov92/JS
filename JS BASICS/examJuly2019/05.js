function solve(input){
    let n=Number(input[0])
    let Hearthstone=0
    let fornite=0
    let Overwatch=0
    let others=0

    for(let i=1; i<=n; i++){
        if(input[i]=="Hearthstone"){
            Hearthstone++
        }else if (input[i]=="Fornite"){
            fornite++
        }else if (input[i]=="Overwatch"){
            Overwatch++
        }else{
            others++
        }

    }
    console.log(`Hearthstone - ${(Hearthstone/n*100).toFixed(2)}%`);
    console.log(`Fornite - ${(fornite/n*100).toFixed(2)}%`);
    console.log(`Overwatch - ${(Overwatch/n*100).toFixed(2)}%`);
    console.log(`Others - ${(others/n*100).toFixed(2)}%`);

}

solve (["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])

