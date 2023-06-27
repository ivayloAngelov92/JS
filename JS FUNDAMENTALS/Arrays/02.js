function solve (day){
    let daysOfWeek=["Monday","Tuesday","Wednesday","Thursday", "Friday", 'Saturday', "Sunday"]
    if(day>=1&&day<=7){
        console.log(daysOfWeek[day-1]);
    }else{
        console.log('Invalid day!');
    }
}

solve (3)