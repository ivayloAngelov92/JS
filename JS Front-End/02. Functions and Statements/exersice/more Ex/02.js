function solve(number) {
    let copy = number
    let digitsSum = 0;
    let digitCount = 0;

    while (copy > 0) {
      const digit = copy % 10;
      digitsSum += digit;
      digitCount++;
      copy = Math.floor(copy / 10);
    }
  
    let average = digitsSum / digitCount;
  
    while (average < 5) {
      number = number * 10 + 9;
      digitsSum += 9;
      digitCount++;
      average = digitsSum / digitCount;
    }
    console.log(number);
  }

solve(101)