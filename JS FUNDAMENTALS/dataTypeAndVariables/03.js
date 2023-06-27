function solve(a,b,c){
    let res=a.replace('_',b)
    
    if(res===c){
        console.log("Matched");
    }else{
        console.log("Not Matched");
    }
}

solve ('Str_ng', 'I',

'Strong')