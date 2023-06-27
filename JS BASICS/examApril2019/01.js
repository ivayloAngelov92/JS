function solve(input){
    let rent= Number(input[0])

    let statues=rent*0.7
    let catering=statues*0.85
    let sound= catering*0.5
    let total = rent+statues+catering+sound
    console.log(total.toFixed(2));
}

solve (["3500"]) 