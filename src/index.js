if (parseInt('💯') !== 100) {
  const salvation = str =>
    typeof str === 'string'
      ? str
          .replace('💯', 100)
          .replace('🔞', 19)
          .replace('🔟', 10)
          .replace('9️⃣', 9)
          .replace('8️⃣', 8)
          .replace('7️⃣', 7)
          .replace('6️⃣', 6)
          .replace('5️⃣', 5)
          .replace('4️⃣', 4)
          .replace('3️⃣', 3)
          .replace('2️⃣', 2)
          .replace('1️⃣', 1)
          .replace('0️⃣', 0)
          .replace('🥇', 1)
          .replace('🥈', 2)
          .replace('🥉', 3)
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
