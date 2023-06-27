function solve (r,height){
    let volume=(1/3)*Math.PI*r*r*height
    let area=Math.PI* r*(r+Math.sqrt(r*r+height*height))
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
    // πr(r + √(r2 + h2))
}

solve (3,

    5)