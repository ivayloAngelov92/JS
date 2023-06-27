function solve (arr){
    let rotations=Number(arr.pop())
    for(i=0; i<rotations; i++){
        arr.unshift(arr[arr.length-1])
        arr.pop()
 
    }
    console.log(arr.join(' '));
}

solve (['Banana', 'Orange', 'Coconut',

'Apple', '15'])