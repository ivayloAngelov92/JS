function solve (year){
    let isLeapYear= (year%4===0 && year%100!==0) ||year%400===0

    if(isLeapYear){
        console.log('yes');
    }else{
        console.log('no');
    }
    // if(year%400==0){
    //     console.log('yes');
    // }else if(year%4==0 && year%100!==0){
    //     console.log('yes');
    // }else{
    //     console.log('no');
    // }
}

solve (2000)