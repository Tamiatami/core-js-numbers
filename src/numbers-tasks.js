// 1. Returns the area of a rectangle
/**
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @returns {number} - The area of the rectangle.
 */
function getRectangleArea(width, height) {
  return width * height;
}

// 2. Returns the circumference of a circle
/**
 * @param {number} radius - The radius of the circle.
 * @returns {number} - The circumference of the circle.
 */
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

// 3. Returns the average of two numbers
/**
 * @param {number} value1 - The first number.
 * @param {number} value2 - The second number.
 * @returns {number} - The average of the two numbers.
 */
function getAverage(value1, value2) {
  return (value1 + value2) / 2;
}

// 4. Returns the distance between two points in the Cartesian plane
/**
 * @param {number} x1 - The x-coordinate of the first point.
 * @param {number} y1 - The y-coordinate of the first point.
 * @param {number} x2 - The x-coordinate of the second point.
 * @param {number} y2 - The y-coordinate of the second point.
 * @returns {number} - The distance between the two points.
 */
function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// 5. Returns the root of a linear equation a*x + b = 0
/**
 * @param {number} a - The coefficient of x.
 * @param {number} b - The constant term.
 * @returns {number} - The root of the linear equation.
 */
function getLinearEquationRoot(a, b) {
  return -b / a;
}

// 6. Returns the angle in radians between two vectors
/**
 * @param {number} x1 - The x-component of the first vector.
 * @param {number} y1 - The y-component of the first vector.
 * @param {number} x2 - The x-component of the second vector.
 * @param {number} y2 - The y-component of the second vector.
 * @returns {number} - The angle in radians between the two vectors.
 */
function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dotProduct = x1 * x2 + y1 * y2;
  const magnitude1 = Math.sqrt(x1 * x1 + y1 * y1);
  const magnitude2 = Math.sqrt(x2 * x2 + y2 * y2);
  return Math.acos(dotProduct / (magnitude1 * magnitude2));
}

// 7. Returns the last digit of an integer
/**
 * @param {number} value - The integer.
 * @returns {number} - The last digit of the integer.
 */
function getLastDigit(value) {
  return value % 10;
}

// 8. Returns the number from a string representation
/**
 * @param {string} value - The string representation of the number.
 * @returns {number} - The parsed number.
 */
function parseNumberFromString(value) {
  return Number(value);
}

// 9. Returns the diagonal length of a rectangular parallelepiped
/**
 * @param {number} a - The length of the parallelepiped.
 * @param {number} b - The width of the parallelepiped.
 * @param {number} c - The height of the parallelepiped.
 * @returns {number} - The diagonal length of the parallelepiped.
 */
function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
}

// 10. Returns the number rounded to the specified power of 10
/**
 * @param {number} num - The number to round.
 * @param {number} pow - The power of 10 to round to.
 * @returns {number} - The number rounded to the specified power of 10.
 */
function roundToPowerOfTen(num, pow) {
  return Math.round(num / Math.pow(10, pow)) * Math.pow(10, pow);
}

// 11. Returns true if the number is prime
/**
 * @param {number} n - The number to check.
 * @returns {boolean} - True if the number is prime, false otherwise.
 */
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 12. Converts value to a number, or returns a default value if conversion fails
/**
 * @param {string} value - The value to convert.
 * @param {number} def - The default value to return if conversion fails.
 * @returns {number} - The converted number or the default value.
 */
function toNumber(value, def) {
  const num = Number(value);
  return isNaN(num) ? def : num;
}

// 13. Returns the cube of the given number
/**
 * @param {number} num - The number to cube.
 * @returns {number} - The cube of the number.
 */
function getCube(num) {
  return Math.pow(num, 3);
}

// 14. Returns the Fibonacci number at the given index
/**
 * @param {number} index - The index of the Fibonacci number.
 * @returns {number} - The Fibonacci number at the given index.
 */
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
/**
 * @param {number} n - The number to sum up to.
 * @returns {number} - The sum of all numbers from 1 to n.
 */
function getSumToN(n) {
  return (n * (n + 1)) / 2;
}

// 16. Returns the sum of the digits of a given number
/**
 * @param {number} num - The number whose digits to sum.
 * @returns {number} - The sum of the digits.
 */
function getSumOfDigits(num) {
  return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
}

// 17. Returns true if the number is a power of two
/**
 * @param {number} num - The number to check.
 * @returns {boolean} - True if the number is a power of two, false otherwise.
 */
function isPowerOfTwo(num) {
  return num > 0 && (num & (num - 1)) === 0;
}

// 18. Returns the sine of a number
/**
 * @param {number} num - The number to find the sine of.
 * @returns {number} - The sine of the number.
 */
function getSine(num) {
  return Math.sin(num);
}

// 19. Converts a number to a string in a specified base (radix)
/**
 * @param {number} number - The number to convert.
 * @param {number} base - The base to convert the number to.
 * @returns {string} - The string representation of the number in the specified base.
 */
function numberToStringInBase(number, base) {
  return number.toString(base);
}

// 20. Returns a string representation of a number in exponential notation
/**
 * @param {number} number - The number to convert.
 * @param {number} fractionDigits - The number of digits after the decimal point.
 * @returns {string} - The number in exponential notation.
 */
function toExponential(number, fractionDigits) {
  return number.toExponential(fractionDigits);
}

// 21. Returns a string representation of a number in fixed-point notation
/**
 * @param {number} number - The number to convert.
 * @param {number} fractionDigits - The number of digits after the decimal point.
 * @returns {string} - The number in fixed-point notation.
 */
function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}

// 22. Returns a string representation of a number in normal notation
/**
 * @param {number} number - The number to convert.
 * @param {number} precision - The precision to use.
 * @returns {string} - The number in normal notation.
 */
function toPrecision(number, precision) {
  return number.toPrecision(precision);
}

// 23. Returns the primitive value of a Number object
/**
 * @param {number} number - The number object.
 * @returns {number} - The primitive value of the number object.
 */
function getNumberValue(number) {
  return number.valueOf();
}

// 24. Returns a boolean indicating whether the parameter is a number
/**
 * @param {*} number - The value to check.
 * @returns {boolean} - True if the parameter is a number, false otherwise.
 */
function isNumber(number) {
  return !isNaN(number) && typeof number === 'number';
}

// 25. Returns a boolean indicating whether a number is an integer
/**
 * @param {number} number - The number to check.
 * @returns {boolean} - True if the number is an integer, false otherwise.
 */
function isInteger(number) {
  return Number.isInteger(number);
}

// 26. Returns a floating point number from a string
/**
 * @param {string} str - The string to convert.
 * @returns {number} - The floating point number.
 */
function getFloatOnString(str) {
  return parseFloat(str);
}

// 27. Returns an integer from a string of a specified base
/**
 * @param {string} str - The string to convert.
 * @param {number} base - The base of the string.
 * @returns {number} - The integer value from the string.
 */
function getIntegerOnString(str, base) {
  return parseInt(str, base);
}
