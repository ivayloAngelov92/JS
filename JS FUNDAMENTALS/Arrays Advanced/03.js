function firstAndLastKNumbers(arr){
    let k=arr.shift()
    let firstEl= arr.slice(0,k)
    let lastEl=arr.slice(-k)
    console.log(firstEl.join(" "));
    console.log(lastEl.join(" "));
}

firstAndLastKNumbers([2, 7, 8, 9])