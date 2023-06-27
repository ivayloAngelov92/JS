class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName
        this.participants = {}
        this.listOfFinalists = []
    }
    addParticipant(participantName, participantGender) {
        if (this.participants[participantName]) { return `${participantName} has already been added to the list` }
        this.participants[participantName] = participantGender
        return `A new participant has been added - ${participantName}`
    }
    completeness(participantName, condition) {
        if (!this.participants[participantName]) { throw Error(`${participantName} is not in the current participants list`) }
        if (condition < 30) { throw Error(`${participantName} is not well prepared and cannot finish any discipline`) }
        let completedCount = Math.floor(condition / 30)
        let participantGender = this.participants[participantName]
        if (completedCount < 3) { return `${participantName} could only complete ${completedCount} of the disciplines` }
        this.listOfFinalists.push({ participantName, participantGender })
        delete this.participants[participantName]
        return `Congratulations, ${participantName} finished the whole competition`
    }
    rewarding(participantName) {
        let participant = this.listOfFinalists.find((p) => p.participantName === participantName)
        if (!participant) { return `${participantName} is not in the current finalists list` }
        return `${participantName} was rewarded with a trophy for his performance`
    }

    showRecord(criteria) {
        if (this.listOfFinalists.length === 0) { return `There are no finalists in this competition` }
        if (criteria !== 'all') {
            let participant = this.listOfFinalists.find((p) => p.participantGender === criteria)
            return `${participant.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        }
        let result = []
        result.push(`List of all ${this.competitionName} finalists:`)
        let sorted = this.listOfFinalists.sort((a, b) => a.participantName.localeCompare(b.participantName))
        sorted.forEach((line) => result.push(`${line.participantName}`))
        return result.join('\n')

    }
}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("Peter", "male"));







