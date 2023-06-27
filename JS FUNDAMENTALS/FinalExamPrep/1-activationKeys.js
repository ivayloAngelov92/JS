function solve(input) {
    let activationKey = input.shift()
    while (input[0] !== 'Generate') {
        let instructions = input.shift().split('>>>')
        let command = instructions[0]
        if (command === 'Contains') {
            let substring = instructions[1]
            if (activationKey.includes(substring)) {
                console.log(`${activationKey} contains ${substring}`);
            } else { console.log("Substring not found!"); }
        } else if (command === 'Flip') {
            let cases = instructions[1]
            let startIndex = Number(instructions[2])
            let endIndex = Number(instructions[3])
            if (cases === 'Upper') {
                let cut = activationKey.substring(startIndex, endIndex).toLocaleUpperCase()
                activationKey = activationKey.substring(0, startIndex) + cut + activationKey.substring(endIndex)
            } else {
                let cut = activationKey.substring(startIndex, endIndex).toLocaleLowerCase()
                activationKey = activationKey.substring(0, startIndex) + cut + activationKey.substring(endIndex)
            }
            console.log(activationKey);
        } else if (command === 'Slice') {
            let startIndex = Number(instructions[1])
            let endIndex = Number(instructions[2])
            let a = activationKey.substring(0, startIndex)
            let b = activationKey.substring(endIndex)
            activationKey = a + b
            console.log(activationKey);
        }
    }
    console.log(`Your activation key is: ${activationKey}`);
}

solve(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
