function timePlus15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let hoursIntoMinutes = hours * 60;
    let timePlus15Minutes = hoursIntoMinutes + minutes + 15;
    let endHours = Math.floor(timePlus15Minutes/60);
    let endMinutes= timePlus15Minutes % 60;
    if (endHours>23){
        endHours = 0;
    }
    if (endMinutes <10){
        endMinutes= "0" + endMinutes;
    }
    console.log(`${endHours}:${endMinutes}`);
}
timePlus15Minutes(["1", "46"])