function solve(array) {
    let horses = array.shift().split('|')

    let commands = {
        Retake: retakeFn,
        Trouble: troubleFn,
        Rage: rageFn,
        Miracle: miracleFn
    }

    let line = array.shift()
    while (line !== 'Finish') {
        let [command, ...rest] = line.split(' ')
        commands[command](rest)
        line = array.shift()
    }
    console.log(horses.join('->'));
    console.log(`The winner is: ${horses.pop()}`);

    function retakeFn([horse1, horse2]) {
        let horse1Position = horses.indexOf(horse1)
        let horse2Position = horses.indexOf(horse2)
        if (horse1Position < horse2Position) {
            horses.splice(horse1Position, 1, horse2)
            horses.splice(horse2Position, 1, horse1)
            console.log(`${horse1} retakes ${horse2}.`);
        }
    }
    function troubleFn([horse]) {
        let index = horses.indexOf(horse)
        if (index > 0) {
            horses.splice(index, 1)
            horses.splice(index - 1, 0, horse)
            console.log(`Trouble for ${horse} - drops one position.`);
        }
    }
    function rageFn([horse]) {
        let index = horses.indexOf(horse)
        if (index + 2 < horses.length) {
            horses.splice(index, 1)
            horses.splice(index + 2, 0, horse)
            
        }else if (index + 1 < horses.length){
            horses.splice(index, 1)
            horses.push(horse)
        }
        console.log(`${horse} rages 2 positions ahead.`);
    }
    function miracleFn(){
        let horse= horses.shift()
        horses.push(horse)
        console.log(`What a miracle - ${horse} becomes first.`);
    }
}

solve(['Fancy|Lilly',
'Retake Lilly Fancy',
'Trouble Lilly',
'Trouble Lilly',
'Finish',
'Rage Lilly'])