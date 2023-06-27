function foodForPets(input) {
    let days = Number(input[0]);
    let food = Number(input[1]);
    let dogsFood = 0;
    let catsFood = 0;
    let cookies = 0;
    let dayCount = 1;
    
    for (let i = 2; i <= days * 2; i += 2) {
        let dayFoodForDog = Number(input[i]);
        let dayFoodForCat = Number(input[i + 1]);
 
        if (dayCount % 3 === 0) {
            cookies += (dayFoodForDog + dayFoodForCat) / 10;
        }
        dogsFood += dayFoodForDog;
        catsFood += dayFoodForCat;
        dayCount++;
    }
 
    let totalFood = dogsFood + catsFood;
    console.log(`Total eaten biscuits: ${Math.round(cookies)}gr.`);
    console.log(`${(totalFood / food * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${(dogsFood / totalFood * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${(catsFood / totalFood * 100).toFixed(2)}% eaten from the cat.`);
}
solve (["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])

