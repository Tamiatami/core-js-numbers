// 1. Returns the area of a rectangle
function getRectangleArea(width, height) {
  return width * height;
}

// 2. Returns the circumference of a circle
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

// 3. Returns the average of two numbers
function getAverage(value1, value2) {
  return (value1 + value2) / 2;
}

// 4. Returns the distance between two points in the Cartesian plane
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// 5. Returns the root of a linear equation a*x + b = 0
function getLinearEquationRoot(a, b) {
  return -b / a;
}

// 6. Returns the angle in radians between two vectors
function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dotProduct = x1 * x2 + y1 * y2;
  const magnitude1 = Math.sqrt(x1 * x1 + y1 * y1);
  const magnitude2 = Math.sqrt(x2 * x2 + y2 * y2);
  return Math.acos(dotProduct / (magnitude1 * magnitude2));
}

// 7. Returns the last digit of an integer
function getLastDigit(value) {
  return value % 10;
}

// 8. Returns the number from a string representation
function parseNumberFromString(value) {
  return parseFloat(value);
}

// 9. Returns the diagonal length of a rectangular parallelepiped
function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
}

// 10. Returns the number rounded to the specified power of 10
function roundToPowerOfTen(num, pow) {
  return Math.round(num / Math.pow(10, pow)) * Math.pow(10, pow);
}

// 11. Returns true if the number is prime
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 12. Converts value to a number, or returns a default value if conversion fails
function toNumber(value, def) {
  const num = Number(value);
  return isNaN(num) ? def : num;
}

// 13. Returns the cube of the given number
function getCube(num) {
  return Math.pow(num, 3);
}

// 14. Returns the Fibonacci number at the given index
function getFibonacciNumber(index) {
  if (index === 0) return 0;
  if (index === 1) return 1;
  let a = 0, b = 1, c;
  for (let i = 2; i <= index; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// 15. Returns the sum of all numbers from 1 to n
function getSumToN(n) {
  return (n * (n + 1)) / 2;
}

// 16. Returns the sum of the digits of a given number
function getSumOfDigits(num) {
  return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
}

// 17. Returns true if the number is a power of two
function isPowerOfTwo(num) {
  return num > 0 && (num & (num - 1)) === 0;
}

// 18. Returns the sine of a number
function getSine(num) {
  return Math.sin(num);
}

// 19. Converts a number to a string in a specified base (radix)
function numberToStringInBase(number, base) {
  return number.toString(base);
}

// 20. Returns a string representation of a number in exponential notation
function toExponential(number, fractionDigits) {
  return number.toExponential(fractionDigits);
}

// 21. Returns a string representation of a number in fixed-point notation
function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}

// 22. Returns a string representation of a number in normal notation
function toPrecision(number, precision) {
  return number.toPrecision(precision);
}

// 23. Returns the primitive value of a Number object
function getNumberValue(number) {
  return number.valueOf();
}

// 24. Returns a boolean indicating whether the parameter is a number
function isNumber(number) {
  return !isNaN(number) && typeof number === 'number';
}

// 25. Returns a boolean indicating whether a number is an integer
function isInteger(number) {
  return Number.isInteger(number);
}

// 26. Returns a floating point number from a string
function getFloatOnString(str) {
  return parseFloat(str);
}

// 27. Returns an integer from a string of a specified base
function getIntegerOnString(str, base) {
  return parseInt(str, base);
}
