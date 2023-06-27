function repainting(input){
    let plasticRequired = Number(input[0]);
    let paintRequired = Number(input[1]);
    let spiritRequired = Number(input[2]);
    let hoursWork = Number(input[3]);
    let additionalPlastic = Number(2);
    let materials = (paintRequired * 1.1 * 14.5) + ((plasticRequired + additionalPlastic) * 1.5) + (spiritRequired * 5) + 0.4;
    let workerPay = materials * 0.3 * hoursWork;
    let total = workerPay + materials;
    console.log(total);
}

repainting(["10 ",

"11 ",

"4 ",

"8 "])