/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const splited1 = s1.split('');
  const splited2 = s2.split('');

  let count = 0;
  for (let i = 0; i < splited1.length; i++) {
    for (let j = 0; j < splited2.length; j++) {
      if (splited1[i] === splited2[j]) {
        count += 1;
        splited2.splice(splited2[j], 1);
        j = splited2.length;
      }
    }
  }
  z;
  console.log(count);
}

module.exports = getCommonCharacterCount;
