function solve(input){
    let food=Number(input[0])

    let index=1
    let command= input[index]
    let foodGr=food*1000
    let foodEaten=0
    while(command!=="Adopted"){
        foodEaten+=Number(command)
        index++;
        command=input[index]
    }
    let foodLeft=foodGr-foodEaten
    if(foodLeft>=0){
        console.log(`Food is enough! Leftovers: ${foodLeft} grams.`);
    }else{
        console.log(`Food is not enough. You need ${(foodEaten-foodGr)} grams more.`);
    }
}

solve (["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])
