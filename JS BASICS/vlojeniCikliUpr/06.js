function solve(input){
    let index=0
    let command= input[index]
    index++

    let kidTickets=0
    let studentTickets=0
    let standardTickets=0
    

    while(command!=='Finish'){
        let freeSpaces= Number(input[index])
        index++
        let ticketType= input[index]
        index++

        let spacesTaken=0
        while (ticketType!=='End'){
            spacesTaken++

            if(ticketType==='student'){
                studentTickets++
            }else if(ticketType==='standard'){
                standardTickets++
            }else {
                kidTickets++
            }
            if(spacesTaken=== freeSpaces){
                break;
            }
            ticketType=input[index]
            index++
        }
        let spacesTakenPercent= (spacesTaken/freeSpaces)*100;
        console.log(`${command} - ${spacesTakenPercent.toFixed(2)}% full.`);

        command=input[index]
        index++
    }

    let ticketCounter=studentTickets + standardTickets+ kidTickets
    let studentticketsPercent=(studentTickets/ticketCounter*100).toFixed(2)
    let standardTicketsPercent= (standardTickets/ticketCounter*100).toFixed(2)
    let kidTicketsPercent= (kidTickets/ticketCounter*100).toFixed(2)
    console.log(`Total tickets: ${ticketCounter}`);
    console.log(`${studentticketsPercent}% student tickets.`);
    console.log(`${standardTicketsPercent}% standard tickets.`);
    console.log(`${kidTicketsPercent}% kids tickets.`);
}

solve (["The Matrix",

"20",

"student",

"standard",

"kid",

"kid",

"student",

"student",

"standard",

"student",

"End",

"The Green Mile",

"17",

"student",

"standard",

"standard",

"student",

"standard",

"student",

"End",

"Amadeus",

"3",

"standard",

"standard",

"standard",

"Finish"])