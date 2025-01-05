function getRectangleArea(width, height) {
  return width * height;
}

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

function getAverage(value1, value2) {
  return (value1 + value2) / 2;
}

function getDistanceBetweenPoints(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function getLinearEquationRoot(a, b) {
  return -b / a;
}

function getAngleBetweenVectors(x1, y1, x2, y2) {
  const dotProduct = x1 * x2 + y1 * y2;
  const magnitude1 = Math.sqrt(x1 * x1 + y1 * y1);
  const magnitude2 = Math.sqrt(x2 * x2 + y2 * y2);
  return Math.acos(dotProduct / (magnitude1 * magnitude2));
}

function getLastDigit(value) {
  return value % 10;
}

function parseNumberFromString(value) {
  return Number(value);
}

function getParallelepipedDiagonal(a, b, c) {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
}

function roundToPowerOfTen(num, pow) {
  return Math.round(num / Math.pow(10, pow)) * Math.pow(10, pow);
}

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function toNumber(value, def) {
  const num = Number(value);
  return isNaN(num) ? def : num;
}

function getCube(num) {
  return Math.pow(num, 3);
}

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

function getSumToN(n) {
  return (n * (n + 1)) / 2;
}

function getSumOfDigits(num) {
  return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
}

function isPowerOfTwo(num) {
  return num > 0 && (num & (num - 1)) === 0;
}

function getSine(num) {
  return Math.sin(num);
}

function numberToStringInBase(number, base) {
  return number.toString(base);
}

function toExponential(number, fractionDigits) {
  return number.toExponential(fractionDigits);
}

function toFixed(number, fractionDigits) {
  return number.toFixed(fractionDigits);
}

function toPrecision(number, precision) {
  return number.toPrecision(precision);
}

function getNumberValue(number) {
  return number.valueOf();
}

function isNumber(number) {
  return !isNaN(number) && typeof number === 'number';
}

function isInteger(number) {
  return Number.isInteger(number);
}

function getFloatOnString(str) {
  return parseFloat(str);
}

function getIntegerOnString(str, base) {
  return parseInt(str, base);
}
