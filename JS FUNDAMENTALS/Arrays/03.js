function solve (n, inputArr){

    let output=''
    for(let i=n-1;i>=0;i-- ){
        output+=`${inputArr[i]} `
    }
    console.log(output);
}

solve (3, [10, 20, 30, 40, 50])