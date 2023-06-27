function stringManipulator(input) {
    let string = input.shift()
    while (input[0] !== "End") {
        let line = input.shift().split(' ')
        let command = line[0]
        switch (command) {
            case "Translate":
                let char = line[1]; let replacement = line[2]
                string = string.split(char).join(replacement)
                console.log(string); break
            case "Includes":
                let substring = line[1]
                string.includes(substring) ? console.log('True') : console.log('False'); break
            case "Start":
                let substr = line[1]
                string.startsWith(substr) ? console.log('True') : console.log('False'); break
            case "Lowercase":
                string = string.toLowerCase()
                console.log(string); break
            case "Remove":
                let startIndex = Number(line[1])
                let count = Number(line[2])
                let start = string.substring(0, startIndex)
                let end = string.substring(startIndex + count)
                string = start + end
                console.log(string); break
            case "FindIndex":
                let character = line[1]
                console.log(string.lastIndexOf(character)); break
        }
    }
}

stringManipulator(["//Thi5 I5 MY 5trING!//",
"Translate 5 s",
"Includes string",
"Start //This",
"Lowercase",
"FindIndex i",
"Remove 0 10",
"End"])


