function solve(text) {
    let initialHealth = 100
    let currentHealth = 100
    let commands = text.split('|')
    let roomPassed = 0
    let bitcoins = 0

    for (let i = 0; i < commands.length; i++) {
        let currentLine = commands[i].split(' ')
        roomPassed++
        if (currentLine[0] == 'potion') {
            if (currentHealth + Number(currentLine[1]) > 100) {
                let toHeal = initialHealth - currentHealth
                console.log(`You healed for ${toHeal} hp.`);
                currentHealth = 100
            } else {
                currentHealth += Number(currentLine[1])
                console.log(`You healed for ${currentLine[1]} hp.`);
            }
            console.log(`Current health: ${currentHealth} hp.`);
        }else if(currentLine[0]=='chest'){
            console.log(`You found ${currentLine[1]} bitcoins.`);
            bitcoins+=Number(currentLine[1])
        }else{
            currentHealth-=Number(currentLine[1])
            if(currentHealth>0){
                console.log(`You slayed ${currentLine[0]}.`);
            }else{
                console.log(`You died! Killed by ${currentLine[0]}.`);
                console.log(`Best room: ${roomPassed}`);break
            }
        }
    }
    if(currentHealth>0){
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${currentHealth}`);
    }
}

solve("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")