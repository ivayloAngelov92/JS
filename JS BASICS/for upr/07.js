function solve(input){
    let groups= Number(input[0])
    let top1=0
    let top2=0
    let top3=0
    let top4=0
    let top5=0
    
    for(let i=1; i<=input.length; i++){
        let peoplePerGroup = Number(input[i])
        if (peoplePerGroup<=5){
            top1+=peoplePerGroup
        }else if (peoplePerGroup<=12){
            top2+=peoplePerGroup
        }else if(peoplePerGroup <=25){
            top3+=peoplePerGroup
        }else if(peoplePerGroup<=40){
            top4+=peoplePerGroup
        }else if (peoplePerGroup>=41) {
            top5+=peoplePerGroup
        }        
    }
    let totalPeople= top1+top2+top3+top4+top5

    let percentageTop1= ((top1/totalPeople)*100)
    let percentageTop2= ((top2/totalPeople)*100)
    let percentageTop3= ((top3/totalPeople)*100)
    let percentageTop4= ((top4/totalPeople)*100)
    let percentageTop5= ((top5/totalPeople)*100)

    console.log(`${percentageTop1.toFixed(2)}%`);
    console.log(`${percentageTop2.toFixed(2)}%`);
    console.log(`${percentageTop3.toFixed(2)}%`);
    console.log(`${percentageTop4.toFixed(2)}%`);
    console.log(`${percentageTop5.toFixed(2)}%`);

}

solve (["10",

"10",

"5",

"1",

"100",

"12","26", "17", "37", "40", "78"])