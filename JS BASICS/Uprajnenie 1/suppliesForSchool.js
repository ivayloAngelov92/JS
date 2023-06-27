function suppliesForSchool(input){
    let penCount = Number(input[0]);
    let markers = Number(input[1]);
    let cleaningLiquid = Number(input[2]);
    let dicount = Number(input[3]/ 100);
    let total = ((penCount * 5.8)+(markers*7.2)+(cleaningLiquid*1.2))*(1-dicount);
    console.log(total);
}

suppliesForSchool(["2 ",

"3 ",

"4 ",

"25 "])