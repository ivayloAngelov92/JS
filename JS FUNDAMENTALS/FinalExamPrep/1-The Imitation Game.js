function solve(input) {
    let message = input.shift()
    let command = input.shift()
    while (command !== 'Decode') {
        if (command.includes('Move')) {
            let lettersToMove = Number(command.split('|')[1])
            let start = message.substring(lettersToMove)
            let end = message.substring(0, lettersToMove)
            message = start + end
        } else if (command.includes('Insert')) {
            let insert = command.split('|')
            let index = Number(insert[1])
            let value = insert[2]
            let start = message.substring(0, index)
            let end = message.substring(index)
            message = start + value + end
        } else if (command.includes('ChangeAll')) {
            let [words, string, replacement] = command.split('|')
            message = message.split(string).join(replacement)
        }
        command = input.shift()
    }
    console.log(`The decrypted message is: ${message}`);
}

solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
])
