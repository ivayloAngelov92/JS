function solve(input) {
  const target = input.shift();
  while (input.length) {
    let cut = 0;
    let lap = 0;
    let grind = 0;
    let etch = 0;
    let xRay = 0;
    let chunk = input.shift();
    console.log(`Processing chunk ${chunk} microns`);
    if (chunk >= target * 4) {
      while (chunk >= target * 4) {
        chunk /= 4;
        cut++;
      }
      console.log(`Cut x${cut}`);
      chunk = Math.floor(chunk);
      console.log("Transporting and washing");
    }
    if (chunk >= target * 1.2) {
      while (chunk >= target * 1.2) {
        chunk *=0.8;
        lap++;
      }
      console.log(`Lap x${lap}`);
      console.log("Transporting and washing");
      chunk = Math.floor(chunk);
    }
    if (chunk >= target + 20) {
      while (chunk >= target + 20) {
        chunk -= 20;
        grind++;
      }
      console.log(`Grind x${grind}`);
      console.log("Transporting and washing");
      chunk = Math.floor(chunk);
    }
    if (chunk > target) {
      while (chunk > target) {
        chunk -= 2;
        etch++;
      }
      console.log(`Etch x${etch}`);
      console.log("Transporting and washing");
      chunk = Math.floor(chunk);
    }
    if (chunk < target) {
      chunk += 1;
      xRay++;
      console.log(`X-ray x${xRay}`);
    }
    chunk == target ? console.log(`Finished crystal ${chunk} microns`) : null;
  }
}

solve([1000, 4000, 8100]);
