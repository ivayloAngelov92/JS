function solve(day){
    let days={
        'Monday':1,
        'Tuesday':2,
        'Wednesday':3,
        'Thursday':4,
        'Friday':5,
        'Saturday':6,
        'Sunday':7,
    }
    days[day]? console.log(days[day]): console.log('error');;
}

solve ('Monday')
solve ('Friday')
solve ('Invalid')