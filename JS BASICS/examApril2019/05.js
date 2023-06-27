function solve(input){
    let moviesCount=Number(input[0])
    let lowestRate=Number.MAX_SAFE_INTEGER
    let highestRate=Number.MIN_SAFE_INTEGER
    let averageSum=0
    let currentHighest=""
    let currentLowest=""
    for(let i=1; i<=moviesCount*2; i+=2){
           let score=Number(input[i+1]) 
           if(score>highestRate){
            highestRate=score;
            currentHighest=input[i]
            averageSum+=score
           }else if(score<lowestRate){
            lowestRate=score
            currentLowest=input[i];
            averageSum+=score
           }else{
            averageSum+=score;
           }
           
        }
    let average=averageSum/moviesCount
    console.log(`${currentHighest} is with highest rating: ${highestRate}`)
    console.log(`${currentLowest} is with lowest rating: ${lowestRate}`);
    console.log(`Average rating: ${average.toFixed(1)}`);

   }   
solve (["3",
"Interstellar",
"8.5",
"Dangal",
"8.3",
"Green Book",
"8.2"])
