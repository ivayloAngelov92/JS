function solve (input){
    let object={}
    for( let i=0; i<input.length;i+=2){
        if(object[input[i]]){
            object[input[i]]+=Number(input[i+1])
        }else{
            object[input[i]]=Number(input[i+1])
        }
    }
    let result=Object.entries(object)
    for(let [resource, quantity]of result){
        console.log(`${resource} -> ${quantity}`);
    }
}

solve ([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])