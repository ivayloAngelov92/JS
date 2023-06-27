function solve (year,month, date){
    let day=new Date(year,month-1,date-1)
    let newYear=day.getFullYear()
    let newMonth=day.getMonth()+1
    let newDay=day.getDate()
    console.log(`${newYear}-${newMonth}-${newDay}`);
}

solve (2016, 9, 30)