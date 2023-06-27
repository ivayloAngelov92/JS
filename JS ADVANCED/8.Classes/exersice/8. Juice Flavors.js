function juiceFlavours(arr) {
    let juices = {}
    let bottles = {}
    for (let line of arr) {
        let [flavour, quantity] = line.split(' => ')
        if (!juices[flavour]) {
            juices[flavour] = 0
        }
        juices[flavour] += +quantity

        if (juices[flavour] >= 1000) {
            if (!bottles[flavour]) {
                bottles[flavour] = 0
            }
            bottles[flavour] += Math.floor(juices[flavour] / 1000)
            juices[flavour] = juices[flavour] % 1000
        }
    }
    for (let bottle in bottles) {
        console.log(bottle + ' => ' + bottles[bottle]);
    }

}

juiceFlavours(['Kiwi => 234',

    'Pear => 2345',

    'Watermelon => 3456',

    'Kiwi => 4567',

    'Pear => 5678',

    'Watermelon => 6789'])



