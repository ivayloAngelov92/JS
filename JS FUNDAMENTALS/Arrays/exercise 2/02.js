function solve (arr){
    let number = 1;
    let result = [];
    while (arr.length > 0) {
        let command = arr.shift();
        if (command == "add") {
            result.push(number);
            number++;
        } else {
            result.pop();
            number++;
        }
    }
 
    if (result.length == 0) {
        console.log("Empty");
    } else {
        console.log(result.join(" "));
    }
}
solve (['add', 'add', 'remove', 'add', 'add'])