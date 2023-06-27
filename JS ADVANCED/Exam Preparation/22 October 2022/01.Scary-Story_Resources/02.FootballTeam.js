class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName
        this.country = country
        this.invitedPlayers = []
    }
    newAdditions(footballPlayers) {
        let uniqueNames = []
        footballPlayers.forEach((line) => {
            let [name, age, playerValue] = line.split('/')
            let currentPlayer = this.invitedPlayers.find((p) => p.name === name)
            if (currentPlayer) {
                if (currentPlayer.playerValue < playerValue) {
                    currentPlayer.playerValue = playerValue
                }
            } else {
                this.invitedPlayers.push({ name, age, playerValue })
            }
            if (!uniqueNames.includes(name)) { uniqueNames.push(name) }
        })
        return `You successfully invite ${uniqueNames.join(', ')}.`
    }
    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/')
        let currentPlayer = this.invitedPlayers.find((p) => p.name === name)
        if (!currentPlayer) { throw Error(`${name} is not invited to the selection list!`) }
        if (playerOffer < currentPlayer.playerValue) {
            throw Error(`The manager's offer is not enough to sign a contract with ${name}, ${currentPlayer.playerValue - playerOffer} million more are needed to sign the contract!`)
        }
        currentPlayer.playerValue = "Bought"
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }
    ageLimit(name, age) {
        let currentPlayer = this.invitedPlayers.find((p) => p.name === name)
        if (!currentPlayer) { throw Error(`${name} is not invited to the selection list!`) }
        if (currentPlayer.age < age) {
            let ageDifference = age - currentPlayer.age
            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
            }
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }
        return `${name} is above age limit!`
    }
    transferWindowResult() {
        let result = []
        result.push("Players list:")
        let sorted = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name))
        sorted.forEach((player) => result.push(`Player ${player.name}-${player.playerValue}`))
        return result.join('\n')
    }

}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
