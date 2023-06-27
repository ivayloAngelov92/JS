function solve (arr){
    // let calObj={}
    // for(let i=0; i<arr.length; i+=2){
    //     let [product, calories]= [arr[i], arr[i+1]]
    //     calObj[product]=+calories
    // }
    // console.log(calObj);
    return arr.reduce((acc,cur, index)=>{
        if(index%2===0) acc[cur]=Number(arr[index+1]) 
        return acc
    },{})
}


console.log(solve (['Yoghurt', '48', 'Rise', '138',

'Apple', '52']))