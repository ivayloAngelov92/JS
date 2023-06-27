function solve(input){
    let projection= input[0]
    let rows = Number(input[1])
    let cols = Number(input[2])
    let totalSeats= rows*cols
    let income = 0;
    switch (projection){
        case "Premiere" : income = totalSeats* 12; break
        case "Normal" : income=totalSeats* 7.5; break
        case "Discount": income= totalSeats* 5; break
    }console.log(`${income.toFixed(2)} leva`);
}

solve (["Premiere",

"10",

"12"])