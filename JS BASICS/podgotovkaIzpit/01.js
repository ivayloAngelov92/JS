function solve(input){
    let rent=Number(input[0])
    let statues=rent*0.7
    let keturing=statues*0.85
    let sound= 0.5*keturing

    let expenses=rent+statues+keturing+sound
    console.log(expenses.toFixed(2));
}

solve (["3500"])