function solve (a,b,c){
    let operators={
        '+': (a,b)=>a+b,
        '-': (a,b)=>a-b,
        '*': (a,b)=>a*b,
        '/': (a,b)=>a/b,
        '%': (a,b)=>a%b,
        '**': (a,b)=>a**b,
    }
    console.log(operators[c](a,b));
}

solve (5, 6, '+')
solve (3, 5.5, '*')