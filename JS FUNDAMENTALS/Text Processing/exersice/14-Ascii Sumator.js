function solve(input){
    let a=input[0].charCodeAt()
    let b=input[1].charCodeAt()
    let string=input[2]
    let result=0
    for(let el of string){
        let currentLetter=el.charCodeAt()
        if(currentLetter>a&&currentLetter<b&&a<b){
            result+=currentLetter
        }else if(a>b&&currentLetter<a&&currentLetter>b){
            result+=currentLetter
        }
    }
    console.log(result);
}

solve (['?',

'E',

'@ABCEF'])