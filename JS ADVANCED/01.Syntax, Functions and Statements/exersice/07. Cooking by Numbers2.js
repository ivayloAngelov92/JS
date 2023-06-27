function solve(num, ...actions) {
    num = Number(num);
    const operations = {
        'chop': (num) => num / 2,
        'dice': (num) => Math.sqrt(num),
        'spice': (num) => ++num,
        'bake': (num) => num * 3,
        'fillet': (num) => num * 0.8
    }
    for(let action of actions) {
        num = operations[action](num);
        console.log(num);
    }
}
solve ('32', 'chop', 'chop', 'chop', 'chop', 'chop')