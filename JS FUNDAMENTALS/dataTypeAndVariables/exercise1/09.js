function solve (lostFights,helmet,sword,shield,armor){
    let expenses=0
    let shiledBreakCount=1
    for(let i =1; i<=lostFights; i++){

        if(i%3==0&&i%2==0){
            expenses+=shield+sword+helmet
            shiledBreakCount++
        }else if(i%2==0){
            expenses+=helmet
        }else if(i%3==0){
            expenses+=sword
        }
        if(shiledBreakCount%3==0){
            expenses+=armor
            shiledBreakCount=1
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

solve (23,

    12.50,
    
    21.50,
    
    40,
    
    200)