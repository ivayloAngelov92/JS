function solve(input){
    let result
    let type= typeof(input)
    if(type != "number"){
       console.log(`We can not calculate the circle area, because we receive a ${type}.`); return 
    }
    result= Math.pow(input,2)*Math.PI
    console.log(result.toFixed(2));
}
solve ("name")