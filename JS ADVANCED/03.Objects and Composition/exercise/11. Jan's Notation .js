function janNotations (arr){
     let numbers=[]
     let operations={
        '+':(a,b)=>b+a,
        '-':(a,b)=>b-a,
        '*':(a,b)=>b*a,
        '/':(a,b)=>b/a
     }
     for( let el of arr){
        if(typeof el==='number'){
            numbers.push(el)
        }else{
            if(numbers.length<2){
                return 'Error: not enough operands!'
            }
            numbers.push(operations[el](numbers.pop(),numbers.pop()))
        }
     }
     if(numbers.length !==1){
        return 'Error: too many operands!'
     }
     return numbers[0]
}

console.log(janNotations([3, 4, '+']));
console.log(janNotations([5, 3, 4, '*', '-']));
console.log(janNotations([7, 33, 8, '-']));
console.log(janNotations([15, '/']));