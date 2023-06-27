function dogSleep(){
    console.log('zzzz...');
}

let dog={
    name:'balkan',
    bark: function(){
        console.log('wofwof');
    },
    eat: ()=>console.log('ym'),
    slee: dogSleep,
    play(){
        console.log('playinh');
    }
}