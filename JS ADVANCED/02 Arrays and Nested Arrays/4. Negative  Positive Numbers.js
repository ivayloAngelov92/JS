function solve (arr){
    let result = [];
    arr.forEach(num => num < 0 ? result.unshift(num) : result.push(num));
    console.log(result.join("\n"));
}

solve ([3, -2, 0, -1])