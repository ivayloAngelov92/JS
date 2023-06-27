function solve(array){
    let sequence=array.split(' ').map(Number).sort((a,b)=>b-a)
    let copy=sequence.slice(0)
    let average=copy.reduce((a,b)=>a+b)/sequence.length
    let numsAboveAv=sequence.filter(x=>x>average)

    let res=[]
    if(numsAboveAv.length<1){
        console.log('No');return;
    }
    for(let i=0;i<numsAboveAv.length;i++){
        res.push(numsAboveAv[i])
        if(res.length==5){break}
    }
    console.log(res.sort((a,b)=>b-a).join(' '));

}

solve ('-1 -2 -3 -4 -5 -6')