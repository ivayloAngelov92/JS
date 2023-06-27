function solve(steps,metersPerStep,speed){
    let distanceM=steps*metersPerStep
    let speedInMPS=speed/3.6
    let rest=Math.floor(distanceM/500)
    let timeSeconds= distanceM/speedInMPS +rest*60
    let hours=Math.floor(timeSeconds/3600)
    let minutes=Math.floor(timeSeconds/60)
    let seconds=Math.round(timeSeconds%60)

    console.log(
        `${hours<10?'0': ""}${hours}:${minutes<10? "0":""}${minutes}:${seconds<10? "0":""}${seconds}`
    );
}

solve (4000, 0.60, 5)