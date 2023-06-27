function solve(array){
    let perHour=array.slice(0,3).map(Number).reduce((a,b)=>a+b)
    let students=Number(array[3])
    let hoursNeeded=0
    let currentHours=0
    while(students>0){
        hoursNeeded++
        currentHours++
        if(currentHours%4==0){
        currentHours=0    ;continue
        }
        students-=perHour
    }
    console.log(`Time needed: ${hoursNeeded}h.`);
}

solve (['1','2','3','45'])