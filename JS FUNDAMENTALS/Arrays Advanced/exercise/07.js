function searchForNum(arr1, arr2) {
    let numsToTake = arr2[0]
    let specialNum = arr2[2]
    let numstoDelete = arr2[1]
    let res = arr1.slice(0, numsToTake)
    res.splice(0, numstoDelete)
    let counter = 0
    for (let number of res) {
        if (number == arr2[2]) {
            counter++
        }
    }
    console.log(`Number ${specialNum} occurs ${counter} times.`);

}

searchForNum([5, 2, 3, 4, 1, 6],

    [5, 2, 3])