function validatePoints(points) {
    const [x1, y1, x2, y2] = points;
  
    // Function to calculate the distance between two points
    function calculateDistance(x1, y1, x2, y2) {
      return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }
  
    // Check the distances between points and origin
    const distance1 = calculateDistance(x1, y1, 0, 0);
    const distance2 = calculateDistance(x2, y2, 0, 0);
    const distance3 = calculateDistance(x1, y1, x2, y2);
  
    // Check if distances are integers
    const isValidDistance1 = Number.isInteger(distance1);
    const isValidDistance2 = Number.isInteger(distance2);
    const isValidDistance3 = Number.isInteger(distance3);
  
    // Print the result
    console.log(`{${x1}, ${y1}} to {0, 0} is ${isValidDistance1 ? 'valid' : 'invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${isValidDistance2 ? 'valid' : 'invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValidDistance3 ? 'valid' : 'invalid'}`);
  }
  validatePoints([2, 1, 1, 1])