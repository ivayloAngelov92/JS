function solve(input){
    let people=Number(input[0])
    let season=input[1]

    let result=0
    switch(season){
        case "spring":
            if(people<=5){
                result+=50*people
            }else{
                result+=48*people
            }break
        case "summer":
            if(people<=5){
                result+=48.5*people*0.85
            }else{
                result+=45*people*0.85
            }break
        case "autumn":
            if(people<=5){
                result+=60*people
            }else{
                result+=49.5*people
            }break
        case "winter":
            if(people<=5){
                result+=86*people*1.08
            }else{
                result+=85*people*1.08
            }break
    }
    console.log(`${result.toFixed(2)} leva.`);
}

solve (["20",
"winter"])

