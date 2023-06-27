function convertor(input){
    let radians = Number(input[0]);
    //градус = радиан * 180 / π
    let degrees = radians * 180 / Math.PI;
    console.log(degrees);
}

convertor(["3.1416"])
