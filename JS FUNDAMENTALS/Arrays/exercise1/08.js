function solve (arr,magicSum){
    for(let i =0;i<arr.length; i++){
        let a=arr[i]
        for(let k=i+1;k<arr.length;k++){
            let b=arr[k]
            if(a+b===magicSum){
                let res=[a,b]
                console.log(res.join(' '));
            }
        }
    }
}
solve ([1, 2, 3, 4, 5, 6],

    6)