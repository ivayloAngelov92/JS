function solve(a){    
    let englishName=String(a)
    let lastDigit=Number(englishName.length)
    let englishLastDigit=englishName.charAt(lastDigit-1)
    if(englishLastDigit==0){
        console.log('zero');
    }else if(englishLastDigit==1){
        console.log('one');
    }else if(englishLastDigit==2){
        console.log('two');
    }else if(englishLastDigit==3){
        console.log('three');
    }else if(englishLastDigit==4){
        console.log('four');
    }else if(englishLastDigit==5){
        console.log('five');
    }else if(englishLastDigit==6){
        console.log('six');
    }else if(englishLastDigit==7){
        console.log('seven');
    }else if(englishLastDigit==8){
        console.log('eight');
    }else if(englishLastDigit==9){
        console.log('nine');
    }
}

solve (1561561)