function solve(input){
    let string=input.shift()
    while(input[0]!=='Done'){
        let command=input.shift().split(' ')
        if(command[0]==='TakeOdd'){
            let newPass=''
            for(let i=0; i<string.length;i++){
                if(i%2===1){
                    newPass+=string[i]
                }
            }
            string=newPass
            console.log(string);
        }else if(command[0]==='Cut'){
            let index=Number(command[1])
            let length=Number(command[2])
            let start=string.substring(0,index)
            let end=string.substring(index+length)
            string=start+end
            console.log(string);
        }else if(command[0]==='Substitute'){
            let substring=command[1]
            let substitute=command[2]
            if(string.includes(substring)){
                string=string.split(substring).join(substitute)
                console.log(string);
            }else{console.log(`Nothing to replace!`);}
        }
    }
    console.log(`Your password is: ${string}`);

}

solve (["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])

