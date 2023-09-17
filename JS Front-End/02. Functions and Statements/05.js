function calc(numOne, numTwo, operator) {
  const operations = {
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
  };

  const operation = operations[operator];
  console.log(operation(numOne, numTwo));
}

calc(5, 5, "multiply");
