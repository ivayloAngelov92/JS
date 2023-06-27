function calculator(numOne,numTwo,operator){
    let res=0
    switch(operator){
        case 'multiply': res=(numOne*numTwo);break
        case 'divide':res+=numOne/numTwo;break
        case 'add':res+=numOne+numTwo;break
        case 'subtract':res+=numOne-numTwo;break
    }
    console.log(res);
}

calculator(50,
    13,
    'subtract')