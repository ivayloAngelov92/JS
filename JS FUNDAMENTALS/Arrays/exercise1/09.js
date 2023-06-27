function solve(input) {
    let arr = input[0].split("|")
    let [health, coins, counter] = [100, 0, 0,];
    for (let i = 0; i < arr.length; i++) {
        counter++
        let text = arr[i].split(" ")
        if (text[0] == "potion") {
            let deduction=0
            health += Number(text[1])
            if(health>100){
                deduction=health-100
                health=100
            }
            console.log(`You healed for ${Math.abs(Number(text[1])-deduction)} hp.`);
            console.log(`Current health: ${health} hp.`);           
        } else if (text[0] == "chest") {
            coins += Number(text[1])
            console.log(`You found ${text[1]} coins.`);
        } else {
            health -= Number(text[1])
            if (health > 0) {
                console.log(`You slayed ${text[0]}.`);
            } else {
                console.log(`You died! Killed by ${text[0]}.`);
                console.log(`Best room: ${counter}`);
                return
            }
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])