function solve(a){
    let textSolve=String(a)
    let transition=textSolve.length
    let result=''
    for(let i=transition; i>0; i--){
        result+=textSolve.charAt(i-1)+''
    }
    console.log(result);
}

solve ('1234')