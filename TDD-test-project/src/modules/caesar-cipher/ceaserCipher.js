let alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

function ceaserCipher(string, shiftFactor) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    const wasUpperCase = isUpperCase(string[i]);
    let letter = string[i].toLowerCase();
    let alphabetIndex = alphabet.indexOf(letter);
    if (alphabetIndex < 0) {
      newString += letter;
      continue;
    }
    let newIndex = calcIndex(alphabetIndex, shiftFactor);
    if (wasUpperCase) {
      newString += alphabet[newIndex].toUpperCase();
      continue;
    }
    newString += alphabet[newIndex];
  }
  return newString;
}

function calcIndex(i, shiftFactor) {
  let index = i + shiftFactor;
  return index > 25 ? index - 26 : index;
}
function isUpperCase(x) {
  if (x === x.toUpperCase()) {
    return true;
  }
  return false;
}
export { ceaserCipher };
