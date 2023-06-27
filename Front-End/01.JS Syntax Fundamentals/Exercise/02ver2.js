function solve (people, type, day){
    let prices ={
        Students:{
            Friday: 8.45,
            Saturday: 9.8,
            Sunday: 10.46,
        },
        Business:{
            Friday: 10.90,
            Saturday: 15.60 ,
            Sunday: 16,
        },
        Regular:{
            Friday: 15,
            Saturday: 20,
            Sunday: 22.50,
        }
    }
    let cost= prices[type][day]
    let sum= cost*people
    if(type=="Business"){
        people>=100? sum-= 10*cost: null
    }
    if(type=="Students"){ people>=30? sum*=0.85: null;}
    if(type=="Regular"){ people>=10&& people<=20? sum*=0.95: null;}
    console.log( `Total price: ${sum.toFixed(2)}`);
}

solve (30,
    "Students",
    "Sunday"
    )