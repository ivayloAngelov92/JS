function solve(inputs) {
    let n = Number(inputs.shift())
    let pieces = inputs.splice(0, n)
    let container = {}
    pieces.forEach(line => {
        let [piece, composer, key] = line.split("|")
        if (!container[piece]) {
            container[piece] = { composer, key }
        }
    })
    let commands = {
        Add: addFn,
        Remove: removeFn,
        ChangeKey: changeKeyFn,
    }
    let line = inputs.shift()
    while (line != 'Stop') {
        let [command, ...rest] = line.split('|')
        commands[command](rest)
        line = inputs.shift()
    }
    function addFn([piece, composer, key]) {
        if (container[piece]) {
            console.log(`${piece} is already in the collection!`);
            return
        }
        container[piece] = { composer, key }
        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
    }
    function removeFn([piece]) {
        if (container[piece]) {
            delete container[piece]
            console.log(`Successfully removed ${piece}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }
    function changeKeyFn([piece, newKey]) {
        if (container[piece]) {
            container[piece].key = newKey
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }
    for (let [key, value] of Object.entries(container)) {
        console.log(`${key} -> Composer: ${value.composer}, Key: ${value.key}`);
    }
    // console.log(JSON.stringify(container,null,2) );
}
solve(['3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'])