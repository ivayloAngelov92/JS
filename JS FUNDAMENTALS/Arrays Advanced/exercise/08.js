function arrayManipulation(numArr,commandArr){   
    for(let i=0;i<commandArr.length;i++){
        let copy=commandArr.slice(0)
        let command=copy[i].split(' ')
        if(command.includes('print')){
            break
        }
        switch(command.shift()){
            case'add': numArr.splice(Number(command[0]),0,Number(command[1])); break;
            case'addMany': let start=Number(command.shift()); command.reverse();for(let el of command){numArr.splice(start,0,Number(el))} ; break
            case'contains':console.log(numArr.indexOf(Number(command[0])));break
            case'remove':numArr.splice(Number(command[0]),1) ;break;
            case'shift': for(let j=0 ;j<Number(command[0]); j++){numArr.push(Number(numArr[0]));numArr.shift()};break;
            case'sumPairs':
            let newArr=[]
            for(let i=0;i<numArr.length; i+=2){
                newArr.push(Number(numArr[i])+Number(numArr[i+1]))
            }numArr=newArr.slice(0) ;break;
        }
    }
    console.log(`[ ${numArr.join(', ')} ]`);
}

arrayManipulation([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print'])

