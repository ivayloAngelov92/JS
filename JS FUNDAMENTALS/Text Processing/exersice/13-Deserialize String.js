function solve(input){
    let result=[]
    command=input.shift()

    while(command!=='end'){
        let [letter, indexes]=command.split(":")
        indexes=indexes.split('/').map(Number)
        for(let index of indexes){
            result[index]=letter
        }
        command=input.shift()
    }
    console.log(result.join(''));
}

solve(['a:0/3/5/11',

'v:1/4',

'j:2',

'm:6/9/15',

's:7/13',

'd:8/14',

'c:10',

'l:12',

'end'])