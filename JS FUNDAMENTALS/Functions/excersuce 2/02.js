function numberModification(num) {
    let average = 0
    let arr = num.toString().split('');
    while (average < 5) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += Number(arr[i])
        }
        average = sum / arr.length
        if (average >= 5) {
            return console.log(arr.join(''));
        } else {
            arr.push(9)
        }
    }
}

numberModification(5835)

