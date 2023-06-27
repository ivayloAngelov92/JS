function solve() {
    for (let hours = 0; hours <= 23; hours++) {
        for (let min = 0; min <=59; min++) {
            if (hours < 10) {
                if (min < 10) {
                    console.log(`0${hours}:0${min}`)
                } else {
                    console.log(`0${hours}:${min}`)
                }
            } else {
                if (min < 10) {
                    console.log(`${hours}:0${min}`)
                } else {
                    console.log(`${hours}:${min}`);
                }
            }

        }
    }
}

solve()