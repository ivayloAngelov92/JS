function solve(arr) {
    let res = []
    arr.map((command, number) => command === "add" ? res.push(++number) : res.pop());
    res.length === 0 ? console.log("Empty") : console.log(res.join("\n"));
    // let num = 1
    // let res = []
    // for (let command of arr) {
    //     command === 'add' ? res.push(num) : res.pop();
    //     num++
    // }
    // res.length === 0 ? console.log('Empty') : console.log(res.join('\n')); 
}

solve(['add',

    'add',

    'add',

    'add'])
