function solve(input){
    let filmName=input[0]
    let type=input[1]
    let tickets= Number(input[2])
    let total=0

    switch(filmName){
        case "A Star Is Born":
            if(type=="normal"){
                total=tickets*7.5
            }else if(type=="luxury"){
                total=tickets*10.5
            }else{
                total=tickets*13.5
            }break;
        case "Bohemian Rhapsody":
            if(type=="normal"){
                total=tickets*7.35
            }else if(type=="luxury"){
                total=tickets*9.45
            }else{
                total=tickets*12.75
            }break;
        case "Green Book":
            if(type=="normal"){
                total=tickets*8.15
            }else if(type=="luxury"){
                total=tickets*10.25
            }else{
                total=tickets*13.25
            }break; 
        case "The Favourite":
            if(type=="normal"){
                total=tickets*8.75
            }else if(type=="luxury"){
                total=tickets*11.55
            }else{
                total=tickets*13.95
            }break;
    }
    console.log(`${filmName} -> ${total.toFixed(2)} lv.`);
}

solve (["A Star Is Born",
"luxury",
"42"])
