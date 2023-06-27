function movingTarget(arr){
    let targets=arr.shift().split(' ').map(x=>Number(x))
    let currentLine=arr.shift()
    while(currentLine!='End'){
        let lineArg=currentLine.split(' ')
        let command=lineArg[0]
        let index=Number(lineArg[1])
        let power=Number(lineArg[2])
        switch(command){
            case 'Shoot':if(targets[index]){
                targets[index]-=power
            }  
                if(targets[index]<=0){
                    targets.splice(index,1)
                } ;break
            case 'Add':
                if(targets[index]){
                    targets.splice(index,0,power)
                }else{console.log("Invalid placement!")};break
            case 'Strike':
                let upper=index+power
                let lower=index-power
                if(targets[lower]&&targets[upper]){
                    targets.splice(lower,((power*2)+1))
                }else{
                    console.log('Strike missed!');
                };break
        }
        currentLine=arr.shift()
    }
    console.log(targets.join('|'));
}

movingTarget (["52 74 23 44 96 110",

"Shoot 5 10",

"Shoot 1 80",

"Strike 2 1",

"Add 22 3",

"End"])