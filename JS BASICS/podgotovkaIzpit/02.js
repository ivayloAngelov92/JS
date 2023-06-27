function solve(input){
    let record=Number(input[0])
    let distance=Number(input[1])
    let secondsPerMeter=Number(input[2])

    let result=distance*secondsPerMeter
    let slow=Math.floor(distance/50)
    let extraTime=slow*30

    result=result+extraTime
    if(result<record){
        console.log(`Yes! The new record is ${result.toFixed(2)} seconds.`);
    }else{
        console.log(`No! He was ${(result-record).toFixed(2)} seconds slower.`);
    }
}

solve (["1377",

"389",

"3"])