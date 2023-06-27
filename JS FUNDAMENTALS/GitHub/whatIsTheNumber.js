
function whatIsTheNumber() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    let computerGuess = Math.floor(Math.random() * 100)
    let guess;

    let recursiveAsyncReadline = function () {
        readline.question('What Is the Number (0-100):', number => {
            guess=Number(number)

            if (guess <= 100 && guess >= 0) {
                if (guess == computerGuess) {
                    console.log('You guess it!');
                    return readline.close
                } else if (guess < computerGuess) {
                    console.log('that is Low, try higher!');
                    recursiveAsyncReadline()
                } else if (guess > computerGuess) {
                    console.log('that is too high, try lower!');
                    recursiveAsyncReadline()
                }
            }else{
                console.log('Invalid Input! try again...');
                recursiveAsyncReadline()
            }
        })
    }
    recursiveAsyncReadline()
}

whatIsTheNumber()