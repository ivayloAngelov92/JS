function solve(input) {
    let accountBalance = input[0].split(" ")
    let index = 1
    let command = input[index]
    while (command !== 'Play!') {
        let commandArr = command.split(" ")
        let game = commandArr[1]
        if (command.includes("Install")) {
            if(accountBalance.includes(game)){

            }else{
                accountBalance.push(game)
            }
        }else if (command.includes('Uninstall')){
            if(accountBalance.includes(game)){
                let gamePosition=accountBalance.indexOf(game)
                accountBalance.splice(gamePosition,1)
            }
        }else if (command.includes('Update')){
            if(accountBalance.includes(game)){
                let gamePosition=accountBalance.indexOf(game)
                accountBalance.push(game)
                accountBalance.splice(gamePosition,1)
            }
        }else if (command.includes('Expansion')){
            let gameArr=game.split("-")
            if(accountBalance.includes(gameArr[0])){
                let gamePosition=accountBalance.indexOf(gameArr[0])
                accountBalance.splice(gamePosition+1,0,`${gameArr[0]}:${gameArr[1]}`)
            }
        }
        index++
        command = input[index]
    }
    console.log(accountBalance.join(" "));
}

solve(['CS WoW Diablo',

'Uninstall XCOM',

'Update PeshoGame',

'Update WoW',

'Expansion Civ-V',

'Play!'])