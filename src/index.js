if (parseInt('ğŸ’¯') !== 100) {
  const salvation = str =>
    typeof str === 'string'
      ? str
          .replace('ğŸ’¯', '100')
          .replace('ğŸ”', '19')
          .replace('ğŸ”Ÿ', '10')
          .replace('9ï¸âƒ£', '9')
          .replace('9ï¸âƒ£', '9')
          .replace('8ï¸âƒ£', '8')
          .replace('7ï¸âƒ£', '7')
          .replace('6ï¸âƒ£', '6')
          .replace('5ï¸âƒ£', '5')
          .replace('4ï¸âƒ£', '4')
          .replace('3ï¸âƒ£', '3')
          .replace('2ï¸âƒ£', '2')
          .replace('1ï¸âƒ£', '1')
          .replace('0ï¸âƒ£', '0')
          .replace('9ï¸øŒŸ¸', '9')
          .replace('8ï¸øŒŸ¸', '8')
          .replace('7ï¸øŒŸ¸', '7')
          .replace('6ï¸øŒŸ¸', '6')
          .replace('5ï¸øŒŸ¸', '5')
          .replace('4ï¸øŒŸ¸', '4')
          .replace('3ï¸øŒŸ¸', '3')
          .replace('2ï¸øŒŸ¸', '2')
          .replace('1ï¸', '1')
          .replace('0ï¸', '0')
          .replace('ğŸ¥‡', '1')
          .replace('ğŸ¥ˆ', '2')
          .replace('ğŸ¥‰', '3')
      : str;

  const brokenParseInt = parseInt;
  const brokenParseFloat = parseFloat;

  parseInt = function(str, radix) {
    return brokenParseInt(salvation(str), radix);
  };

  parseFloat = function(str) {
    return brokenParseFloat(salvation(str));
  };
}
