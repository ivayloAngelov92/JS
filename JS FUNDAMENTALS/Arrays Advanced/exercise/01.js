function train(arr){
    let currentWagonCapacity=arr.shift().split(' ').map(Number)
    let maxWagonCapacity=Number(arr.shift())
    for(let i=0; i<arr.length; i++){
        let currentRow=arr[i].split(' ')
        if(currentRow[0]=='Add'){
            currentWagonCapacity.push(Number(currentRow[1]))
        }else{
            for(let x=0; x<currentWagonCapacity.length;x++){
                let fit=currentWagonCapacity[x]+Number(currentRow)
                if(fit<=maxWagonCapacity){
                    currentWagonCapacity[x]+=Number(currentRow[0])
                    break;
                }
            }
        }
    }
    console.log(currentWagonCapacity.join(' '));
}

train(['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75'])