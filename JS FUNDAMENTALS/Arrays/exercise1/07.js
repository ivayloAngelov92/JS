function solve (arr){
    let longestSequence=[]
    for(let i=0;i<arr.length; i++){
        let currentSequence=[arr[i]]
        for(j=i+1;j<=arr.length;j++){
            if(arr[j]==arr[j-1]){
                currentSequence.push(arr[j])
            }else{
                break
            }
        }
        if(currentSequence.length>longestSequence.length){
            longestSequence=currentSequence
        }
    }
    console.log(longestSequence.join(' '));
}

solve ([0, 1, 1, 5, 2, 2, 6, 3, 3])