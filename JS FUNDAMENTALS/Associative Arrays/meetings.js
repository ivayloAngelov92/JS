function solve (array){
    let meetings={}
    for (let entry of array){
        let [day, name]=entry.split(' ')
        if(meetings[day]){
            console.log(`Conflict on ${day}!`);
        }else{
            meetings[day]=name
            console.log(`Scheduled for ${day}`);
        }
    }
    for(let day in meetings){
        console.log(`${day} -> ${meetings[day]}`);
    }

}

solve (['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])