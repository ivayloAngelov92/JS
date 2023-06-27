  function solve (arr){
        let newArr=[]
        let biggestNum=Number(arr[0])
        for(i=0; i<arr.length; i ++){
            let currentNum=arr[i]
            if(currentNum>=biggestNum){
                newArr.push(currentNum)
                biggestNum=currentNum
            }
        }
        console.log(newArr.join(' '));
    }
solve ([ 1, 2, 3, 4])