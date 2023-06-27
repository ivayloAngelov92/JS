function solve (input){
    let userName=input[0]
    userName=String(userName)
    let passLength=userName.length
    let correctPass=''
    for(let i=passLength; i>0; i--){
        correctPass+=userName.charAt(i-1)+''
    }
    let index=1
    let command=input[index]
    let counter=0
    for(let i=1; i<=3; i++){

        if(command===correctPass){
            console.log(`User ${userName} logged in.`); return
        }else{
            console.log('Incorrect password. Try again.');
        }
        counter++
        index++
        command=input[index]
    }
    if(command===correctPass){
        console.log(`User ${userName} logged in.`)
    }else
    console.log(`User ${userName} blocked!`);
}

solve (['Acer','login','go','let me in','recA'])