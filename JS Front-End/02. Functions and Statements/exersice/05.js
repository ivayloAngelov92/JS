function solve (arr){
    while(arr.length){
        let forward=arr.shift().toString();
        let reverse=forward.split('').reverse().join('')
        if(forward== reverse){
            console.log('true');
        }else{console.log('false');}
    } 
}

solve([123,323,421,121])