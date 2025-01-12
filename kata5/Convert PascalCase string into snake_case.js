// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

function toUnderscore(string) {
  const result = string
    .toString()
    .split('')
    .map((char, index) => {
      if (char >= 'A' && char <= 'Z' && index !== 0) {
        return '_' + char.toLowerCase();
      }
      return char.toLowerCase();
    })
    .join('');

  return result;
}

toUnderscore('A123aaa123AAA123');
