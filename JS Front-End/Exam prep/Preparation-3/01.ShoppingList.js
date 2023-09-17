function solve(array) {
    let products = array.shift().split('!')
    let commands = {
        Urgent: urgent,
        Unnecessary: unnecessary,
        Correct: correct,
        Rearrange: rearrange
    }
    let line = array.shift()

    while (line != 'Go Shopping!') {
        let [command, ...rest] = line.split(' ')
        commands[command](rest)
        line = array.shift()
    }

    function urgent([item]) {
        !products.includes(item) ?
            products.unshift(item) : null;
    }
    function unnecessary([item]) {
        if (products.includes(item)) {
         let index= products.indexOf(item);
         products.splice(index, 1);
        }
    }
    function correct([oldItem, newItem]) {
        if (products.includes(oldItem)) {
            products=products.join(' ').replace(oldItem, newItem).split(' ');
        }
    }
    function rearrange([item]) {
        let index = products.indexOf(item)
        if (products.includes(item)) {
            products.splice(index, 1)
            products.push(item)
        }
    }
    console.log(products.join(', '));
}
solve(["Milk!Pepper!Salt!Water!Banana",
    "Unnecessary Milk",
    "Go Shopping!"])
