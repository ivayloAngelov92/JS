function solve(input) {
    let initialStop = input.shift()
    let command = input.shift()

    while (command != 'Travel') {
        if (command.includes('Add Stop')) {
            let [action, index, string] = command.split(':')
            index = Number(index)
            if (initialStop[index]) {
                let start = initialStop.substring(0, index)
                let end = initialStop.substring(index)
                initialStop = start + string + end
            }
            console.log(initialStop)
        } else if (command.includes('Remove Stop')) {
            let [action, startIndex, endIndex] = command.split(':')
            startIndex = Number(startIndex)
            endIndex = Number(endIndex)
            if (initialStop[startIndex] && initialStop[endIndex]) {
                let start = initialStop.substring(0, startIndex)
                let end = initialStop.substring(endIndex + 1)
                initialStop = start + end
            }
            console.log(initialStop)
        } else if (command.includes('Switch')) {
            let [action, oldString, newString] = command.split(':')
            if (initialStop.includes(oldString)) {
                initialStop = initialStop.split(oldString).join(newString)
            }
            console.log(initialStop)
        }

        command = input.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${initialStop}`);
}

solve(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    'Remove Stop:4:88',
    "Switch:Albania: Azərbaycan",
    "Travel"])