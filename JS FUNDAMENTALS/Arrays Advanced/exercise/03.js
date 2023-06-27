function houseParty(arr){
    let guestList=[]
    for(let guest of arr){
            let command=guest.split(' ')
            let name= command[0]
        if(command.length===3){
            if(guestList.includes(name)){
                console.log(`${name} is already in the list!`);
            }else{
                guestList.push(name)
            }
        }else{
            if(!guestList.includes(name)){
                console.log(`${name} is not in the list!`);
            }else{
                let index=guestList.indexOf(name)
                guestList.splice(index,1)
            }
        }
    }
    console.log(guestList.join('\n'));
}

houseParty (['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!'])