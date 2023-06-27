function solve(array) {
    let values = array.shift().split(' ').map(Number)
    let commands = array.shift()
    while (commands != 'end') {
        let currentLine = commands.split(' ')
        let [index1, index2] = currentLine.slice(1, 3).map(Number)
        switch (currentLine.shift()) {
            case 'swap':
                let buffer = values[index1]
                values[index1] = values[index2]
                values[index2] = buffer
                break
            case 'multiply': values[index1] *= values[index2];break
            case 'decrease': let decrease = values.map(x => x - 1);
            values=decrease.slice(0);break
        }
        commands=array.shift()
    }
    console.log(values.join(', '));
}
solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ])