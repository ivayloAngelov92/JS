function solve (input, censored){
    input=input.replaceAll(censored, '*'.repeat(censored.length))
//    while(input.includes(censored)){
//     input=input.replace(censored, '*'.repeat(censored.length))
//    }
   console.log(input);
}

solve ('A small sentence with some words',

'small')