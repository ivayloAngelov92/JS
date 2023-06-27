function solve(input){
    let index=0
    let userName= input[index]
    index++
    let pass= input[index]
    index++

    let currentPass= input[index]
    while(pass !==currentPass){
        currentPass= input[index]
        index++
    }
    console.log(`Welcome ${userName}!`);

}

solve (["Nakov",

"1234",

"Pass",

"1324",

"1234"])