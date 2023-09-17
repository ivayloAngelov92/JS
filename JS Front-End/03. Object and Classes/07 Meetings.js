function solve(arr){
    let meetings={}
    arr.forEach(input=>{
        let [day, person] = input.split(' ')
        if(meetings[day]){
        console.log(`Conflict on ${day}!`);
        }else{
            meetings[day] =person
            console.log(`Scheduled for ${day}`);
        }
        
    })
    for(let key in meetings){
        console.log(`${key} -> ${meetings[key]}`);
    } 
}

solve (['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
)