function solve(array) {
    let seqEl = array.shift().split(' ')
    let commandLine = array.shift()
    let moves = 0
    while (commandLine !== 'end') {

        moves++
        let indexes = commandLine.split(' ').map(Number)
        let first = indexes[0]
        let second = indexes[1]
        if (seqEl[first] && seqEl[second]&&first!=second) {
            if (seqEl[first] != seqEl[second]) {
                console.log("Try again!");
            }
            if (seqEl[first] == seqEl[second]) {
                let element = seqEl[first]
                let removedSeqEl = seqEl.filter(x => x != seqEl[first])
                seqEl = removedSeqEl.slice(0)
                console.log(`Congrats! You have found matching elements - ${element}!`);
            }
        } else{
            console.log("Invalid input! Adding additional elements to the board");
            let addIndex = seqEl.length / 2
            let addElement = `-${moves}a`
            seqEl.splice(addIndex, 0, addElement, addElement)
        }
        if (seqEl.length == 0) {
            console.log(`You have won in ${moves} turns!`); return
        }

        commandLine = array.shift()
    }
    if (seqEl.length > 0) {
        console.log("Sorry you lose :(");
        console.log(`${seqEl.join(' ')}`);
    }
}

solve([
    "a 2 4 a 2 4", 
    "4 4", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ])