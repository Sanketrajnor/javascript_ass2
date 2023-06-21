function findMax(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      return undefined; // Return undefined for invalid input
    }
  
    let max = numbers[0]; // Assume the first element as the maximum
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i]; // Update max if a larger number is found
      }
    }
  
    return max;
  }
  const numbers = [3, 9, 1, 7, 2, 5];
  const maximum = findMax(numbers);
  console.log(maximum); // Output: 9
    