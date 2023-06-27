function solve(input){
    let startNum=Number(input[0]);
    let endNum=Number(input[1]);
    let result= "";
    for(let i=startNum; i<=endNum ; i++){
        let iString= "" + i;
        let evenSum= 0;
        let oddSum=0

        for (let index=0; index<iString.length; index++){
            let currentDigit= Number(iString.charAt(index));
            let position= index+1;

            if(position%2===0){
                evenSum+= currentDigit
            }else{
                oddSum+=currentDigit;
            }
        }
        if(evenSum===oddSum){
            result+= `${iString} `;
        }
    }
    console.log(result);
}

solve (["100000",

"100050"])