function solve (input){
    let object={}
    for(let line of input){
        let [name, cards]=line.split(': ')
        cards=cards.split(', ')
        if(!object[name]){object[name]=[]}        
        for(let card of cards){
            if(!object[name].includes(card)){
                object[name].push(card)
            }
        }
    }
    for(let [player, cards] of Object.entries(object)){
        let sum=0
        for(let card of cards){
            card=card.split('')
            let type=card.pop()
            let power=card.join()

            let a,b;
            type==="S"? a=4:
            type==="H"? a=3:
            type==="D"? a=2:
            type==="C"? a=1: null;

            power[0]==="1"? b=10:
            power==='J'? b=11:
            power==='Q'? b=12:
            power==='K'? b=13:
            power==="A"? b=14:
            b=Number(power)
            sum+=a*b
        }
        console.log(`${player}: ${sum}`);
    }

}

solve([

    'Peter: 2C, 4H, 9H, AS, QS',
    
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    
    'Andrea: QH, QC, QS, QD',
    
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    
    'Andrea: QH, QC, JS, JD, JC',
    
    'Peter: JD, JD, JD, JD, JD, JD'
    
    ])