function radioCrystals(arr) {
    let wantedCristal = arr.shift()
    for (let i = 0; i < arr.length; i++) {
        let startProduct = arr[i]
        console.log(`Processing chunk ${startProduct} microns`);
        if (startProduct / 4 >= wantedCristal) {
            let cut = 0
            while (startProduct >= wantedCristal * 4) {
                startProduct /= 4
                cut++
            }
            console.log(`Cut x${cut}`);
            console.log(`Transporting and washing`);
        }
        startProduct=Math.floor(startProduct)
        if (startProduct >= wantedCristal * 1.2) {
            let lap = 0
            while (startProduct >= wantedCristal * 1.2) {
                startProduct *= 0.8
                lap++
            }
            console.log(`Lap x${lap}`);
            console.log(`Transporting and washing`);
        }
        startProduct=Math.floor(startProduct)
        if (startProduct >= wantedCristal + 20) {
            let grind = 0
            while (startProduct >= wantedCristal + 20) {
                startProduct -= 20
                grind++
            }
            console.log(`Grind x${grind}`);
            console.log(`Transporting and washing`);
        }
        startProduct=Math.floor(startProduct)
        if(startProduct>=wantedCristal+2){
            let etch=0
            while(startProduct>wantedCristal){
                startProduct-=2
                etch++
            }
            console.log(`Etch x${etch}`);
            console.log(`Transporting and washing`);
        }
        startProduct=Math.floor(startProduct)
        if(startProduct<wantedCristal){
            startProduct+=1
            console.log(`X-ray x1`);
        }
            console.log(`Finished crystal ${startProduct} microns`);
        
    }
}
radioCrystals([1000, 4000, 8100])