function serializeString(input) {
    let letters = {};
    let data = input[0];

    for (let i = 0; i < data.length; i++) {
        let char = data[i];
        if (!letters[char]) {
            letters[char] = [];
        } 
            letters[char].push(i);
    }
    for (let letter in letters) {
        console.log(`${letter}:${letters[letter].join("/")}`);
    }
}

solve (["abababa"])