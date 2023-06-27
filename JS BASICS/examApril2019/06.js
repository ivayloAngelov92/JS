function solve(input){
    let index=0
    let command=input[index]

    let totalTickets=0
    let studentTickets=0
    let standardTickets=0
    let kidTickes=0


    while(command!=="Finish"){
        let movieTicketsCount=0
        let movieName=command
        index++;
        let seats=input[index]
        index++;
        command=input[index]
        while(command!=="End"&&command!=="Finish"){
            if (command==="standard") {
                standardTickets++                
            }else if(command==="student"){
                studentTickets++;         
            }else if (command==="kid"){
                kidTickes++               
            }
            totalTickets++
            movieTicketsCount++
            index++;
            command=input[index]
        }

        console.log(`${movieName} - ${(movieTicketsCount/seats*100).toFixed(2)}% full.`);
        if(command=="Finish"){
            break;
        }
        index++;
        command=input[index]
        
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTickets/totalTickets*100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets/totalTickets*100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickes/totalTickets*100).toFixed(2)}% kids tickets.`);
    

}

solve (["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])


