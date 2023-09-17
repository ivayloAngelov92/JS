function solve (number, ...commands){
    let sum=Number(number)
    commands.forEach(command=>{
        switch(command){
            case 'chop': sum/=2 ; break;
            case 'dice': sum= Math.sqrt(sum); break;
            case 'spice': sum+=1 ; break;
            case 'bake': sum*=3; break;
            case 'fillet': sum-=sum*0.2 ; break;
        }
        console.log(sum);
    })

}

solve ('9', 'dice', 'spice', 'chop', 'bake', 
'fillet' )