function solve(input){
    let pattern=/([\|#])(?<name>[A-za-z\s]+)\1(?<expDate>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d{1,5})\1/g
    let totalCal=0
    let match=pattern.exec(input)   
    let foodPrin=[]
    while(match){
        totalCal+=Number(match.groups.cal)
        foodPrin.push(`Item: ${match.groups.name}, Best before: ${match.groups.expDate}, Nutrition: ${match.groups.cal}`)
        match=pattern.exec(input)
    }
    console.log(`You have food to last you for: ${Math.floor(totalCal/2000)} days!`);
    foodPrin.forEach((food)=>console.log(food))
}

solve ('#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|')