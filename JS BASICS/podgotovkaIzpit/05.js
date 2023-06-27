function solve(input){
    let a=Number(input[0])
    let b=Number(input[1])
    let nonPaintable=Number(input[2])

    let toPaint=Math.ceil((a*b*4)* (1-(nonPaintable/100)))
    index=3
    command=input[index]

    while(command!=="Tired!"){
        let paint= Number(command)
        toPaint-=paint
        if(toPaint<=0){
            if(toPaint<0){
                console.log(`All walls are painted and you have ${Math.abs(toPaint)} l paint left!`);
            }else{
                console.log(`All walls are painted! Great job, Pesho!`);
            }
            return;
        }
        index++
        command=input[index]
    }
    console.log(`${toPaint} quadratic m left.`);
}

solve (["2",

"3",

"25",

"6",

"7",

"8"])