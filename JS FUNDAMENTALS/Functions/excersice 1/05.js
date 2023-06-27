function palindromeIntegers(array){

    for(let i= 0; i<array.length; i++){
        let string=array[i].toString()
        let reversed=string.split('').reverse().join('')
        console.log(reversed===string? true:false);
    }
}

palindromeIntegers([32,2,232,1010])