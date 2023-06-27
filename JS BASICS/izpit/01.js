function solve(input){
    let fatPercent=Number(input[0])/100
    let proteinPercent=Number(input[1])/100
    let carbPercent=Number(input[2])/100
    let totalCalories=Number(input[3])
    let waterPercent=Number(input[4])/100

    let fat=fatPercent*totalCalories/9
    let protein=proteinPercent*totalCalories/4
    let carb=carbPercent*totalCalories/4
    let food=fat+protein+carb
    let caloriesPerGram=totalCalories/food

    let calPerGram=(1-waterPercent)*caloriesPerGram
    console.log(calPerGram.toFixed(4));
}

solve(["40",
"40",
"20",
"3000",
"40"])

