function heartDelivery(inputData) {
    let numArray = inputData.slice(0, 1).join('').split('@').map(Number);
    let commands = inputData.slice(1);
    let arrIndex = 0;
    let target = arrIndex;
    let counter = 0;
    for (let command of commands) {
        let [jump, index] = command.split(' ');
  
        //IF reached last command
        if (jump === "Love!") {
            console.log(`Cupid's last position was ${target}.`);
            for (let el of numArray) {
                el > 0 ? counter++ : null;
            }
            counter > 0 ? console.log(`Cupid has failed ${counter} places.`) : console.log('Mission was successful.');
            return;
        }
        index = Number(index);
        target = arrIndex + index;
  
        //IF target is outside the array
        if (target >= numArray.length) {
            target = 0;
        }
  
        arrIndex = target;
        if (numArray[target] > 0) {
            numArray[target] -= 2;
  
            //IF array element = 0 
            if (numArray[target] <= 0) {    
                console.log(`Place ${target} has Valentine's day.`);
            }
        } else {
            console.log(`Place ${target} already had Valentine's day.`);
        }
    }
  }

hearthDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])