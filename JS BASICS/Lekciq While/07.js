function solve(input){
    let index= 0
    command= input[index]

    let minNumber= Number.MAX_SAFE_INTEGER

    while(command!== "Stop"){
        let num = Number(command)

        if(num<minNumber){
            minNumber=num
        }

        command=input[index]
        index++
    }
    console.log(minNumber);
}

solve (["100",

"99",

"80",

"70",

"Stop"])