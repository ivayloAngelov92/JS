function solve (array){
    console.log(array.filter((x, i) => i % 2 === 0).join(" "));
}

solve (['20', '30', '40',

'50', '60'])