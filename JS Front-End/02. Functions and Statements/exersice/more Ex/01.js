function solve(commands){
    let clean=0
    while(commands.length){
        let command=commands.shift()
        switch(command){
            case 'soap': clean+=10;break
            case 'water': clean*=1.2;break
            case 'vacuum cleaner':clean*=1.25;break
            case 'mud':	clean*=0.9;break
        }
        if(clean>100){return}
    }
    console.log(`The car is ${clean.toFixed(2)}% clean.`);
}

solve (['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 
'water']
)