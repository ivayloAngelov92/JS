function solve(input) {
    let string = input[0].toString()
    let letter = input.shift().toString().split(' ')
    let words = input.shift()
    for (let hole of letter) {
        if (hole.includes('_')) {
            if (hole[-1] === '.' || hole[-1] === ',') {
                hole = hole.slice(0, -1)
            }
            let word = words.filter(el => el.length === hole.length).join('')
            string = string.replace(hole, word)
        }
    }
    console.log(string);
}
solve(
    ['Hi, grandma! I\'m so ____, to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
        ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)