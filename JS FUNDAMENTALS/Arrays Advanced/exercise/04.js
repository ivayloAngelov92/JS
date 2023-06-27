function sorting(arr){
    let sorted=arr.sort((a,b)=> a-b)
    let copyArr=sorted.slice(0)
    let res=[]
    for(let i=0; i<arr.length;i++){
        if(i%2==0){
            res.push(copyArr.pop())
        }else{
            res.push(copyArr.shift())
        }
    }
    console.log(res.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])