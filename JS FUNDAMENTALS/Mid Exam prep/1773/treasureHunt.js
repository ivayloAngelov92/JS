function treasureHunt(lootArray) {
    let chest = lootArray.slice(0, 1).join('').split('|');
    let sum = 0;
    for (let i = 1; i < lootArray.length; i++) {
        let element = lootArray[i].split(' ');
        let command = element.shift();
        if (command === 'Yohoho!') {
            break;
        }
        if (command === 'Loot') {
            for (let el of element) {
                if (!chest.includes(el)) {
                    chest.unshift(el);
                }
            }
        } else if (command === 'Drop') {
            let index = Number(element);
            if (index >= 0 && index < chest.length) {
                let moveIt = chest.splice(index, 1).join('');
                chest.push(moveIt);
            }
        } else if (command === 'Steal') {
            let count = Number(element);
            let taken = chest.slice(-count);
            chest.splice(-count);
            console.log(taken.join(', '));

        }
    }
    for (let item of chest) {
        sum += item.length;
    }
    let average = sum / chest.length;

    if (chest.length > 0) {
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}
treasureHunt (["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])