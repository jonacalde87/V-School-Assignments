// 1a) Write a function that returns the sum of two numbers. 
// Throw an error if either argument is not of the data type number:

try {
    function sum(x, y) {
      if (typeof x !== Number || typeof y !== Number) {
        throw new Error(`Error Error Error`);
      } else if (typeof x === Number && typeof y === Number) {
        return x + y;
      }
    }
  } catch (err) {
    console.log(err);
  } finally {
    console.log(`Running no matter what`);
  }
  
  console.log(sum(5, 3));