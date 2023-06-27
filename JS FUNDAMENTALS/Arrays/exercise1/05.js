function solve (arr){
    let newArr=[]
    for(let i=0 ; i<arr.length;i++){
        let isBigger=true
        let currentNum=arr[i]
        for(let k=i+1; k<arr.length; k++){
            if (currentNum<=arr[k]){
                isBigger=false
            }
        }
        if(isBigger){
            newArr.push(arr[i])
        }
    }
    console.log(newArr.join(' '));
}
solve ([14, 24, 3, 19, 15, 17])