function messageDecrypter(input) {
    let n = Number(input.shift())
    let pattern = /^([$%])(?<tag>[A-Z][a-z]{2,})\1: \[(?<one>\d+)\]\|\[(?<two>\d+)\]\|\[(?<three>\d+)\]\|$/
    for (let i = 0; i < n; i++) {
        let match = pattern.exec(input[i])
        if (match === null) {
            console.log("Valid message not found!");
        } else {
            let one = Number(match.groups.one)
            let two = Number(match.groups.two)
            let three = Number(match.groups.three)
            let res = String.fromCharCode(one, two, three)
            console.log(`${match.groups.tag}: ${res}`);
        }
    }
}

messageDecrypter(["4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"])

