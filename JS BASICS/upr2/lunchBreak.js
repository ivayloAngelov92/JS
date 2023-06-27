function lunchBreak(input){
    let seriesName = input[0];
    let episode= Number(input[1]);
    let breakDuration = Number(input[2]);
    let lunchDuration = (1/8) * breakDuration;
    let leisureDuration = (1/4) * breakDuration;
    let totalBusyTime = lunchDuration + leisureDuration;
    let timeLeft = breakDuration - totalBusyTime;

    if (timeLeft>=episode){
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft - episode)} minutes free time.`);
    }else{
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episode - timeLeft)} more minutes.`);
    }
}
lunchBreak(["Game of Thrones",

"60",

"96"])