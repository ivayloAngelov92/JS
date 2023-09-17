function motoGp(inputs){
    const n=inputs.shift();
    const startPos=inputs.splice(0,n)

    let race={}
    startPos.forEach(input=>{
        let [rider,fuel,position]= input.split('|')
        if (Number(fuel)>100){
            fuel=100
        }
        race[rider]={fuel:Number(fuel),position:Number(position)}
    })
    
    
    let commands={
        StopForFuel:fuelFn,
        Overtaking: overtakingFn,
        EngineFail: engineFailFn
    }
    let line=inputs.shift()
    while(line!=='Finish'){
        let [command,...rest]=line.split(' - ')
        commands[command](...rest)
        line=inputs.shift()
    }

    function fuelFn(rider, minFuel, changedPosition){
        if(race[rider]["fuel"]< Number(minFuel)){
            console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
            race[rider]['position']=Number(changedPosition) // possible work
            race[rider]['fuel']=100
        }else{
            console.log(`${rider} does not need to stop for fuel!`);
        }
    }
    function overtakingFn(rider1,rider2){
        if(race[rider2]['position']>race[rider1]['position']){
            console.log(`${rider1} overtook ${rider2}!`);
            let buffer= race[rider1]['position']
            race[rider1]["position"] = race[rider2]["position"];
            race[rider2]["position"] = buffer;

        }
        
    }
    function engineFailFn(rider, lapsLeft){
        console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
        delete race[rider]
    }
    // let sorted= Object.entries(race).sort((a,b)=>a[1].position-b[1].position)
    // console.log(JSON.stringify(sorted, 2 , null) );
    for(let [rider,info]of Object.entries(race)){
        console.log(`${rider}\n  Final position: ${info.position}`);

    }
}

motoGp(["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])


