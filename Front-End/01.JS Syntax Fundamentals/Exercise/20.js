function solve(inputString) {
    const words = inputString.replace(/([A-Z])/g, ' $1')
    .trim()
    .split(' ');
    const result = words.join(', ');
    console.log(result);
  }

solve ('SplitMeIfYouCanHaHaYouCantOrYouCan')