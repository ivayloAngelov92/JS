function solve(base, increment){
    // increment- high of each step
    let stone=0
    let marble=0
    let lapisLazuli=0
    let gold=0
    let stepCounter=1

    for(let i=base; i>=1; i-=2){
        if(i==2||i==1){
            gold+=i*i*increment; break
        }
        if(stepCounter%5==0){
            stone+=(i-2)*(i-2)*increment
            lapisLazuli+=((i*4)-4)*increment
        }else{
            stone+=(i-2)*(i-2)*increment
            marble+=((i*4)-4)*increment
        }


        stepCounter++
    }
    let calcHeight= increment*stepCounter
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(calcHeight)}`);
}
solve (11, 1)