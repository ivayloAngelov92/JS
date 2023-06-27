function smallestTwoNum(arr){
    let res=arr.sort((a,b)=> a-b).slice(0,2)
    console.log(res.join(' '));
}

smallestTwoNum([30, 15, 50, 5])