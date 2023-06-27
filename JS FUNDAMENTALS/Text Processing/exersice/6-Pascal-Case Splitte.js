function solve (input){
    let result=input[0]
    for(let i=1; i<input.length;i++){
        let letter= input[i]
        if(letter===letter.toUpperCase()){
            result+=`, ${letter}`
        }else{result+=letter}
    }
    console.log(result)
}

solve ('SplitMeIfYouCanHaHaYouCantOrYouCan')