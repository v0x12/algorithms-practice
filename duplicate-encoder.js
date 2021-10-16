const duplicateEncoder = (word) => {
  word = word.toLowerCase();

  const countNumbers = {};

  for (let i = 0; i < word.length; i++) {
    const key = word[i];
    countNumbers.hasOwnProperty(key)
      ? countNumbers[key]++
      : (countNumbers[key] = 1);
  }

  let encodedWord = "";

  for (let i = 0; i < word.length; i++) {
    const key = word[i];
    if (countNumbers[key] > 1) encodedWord += ")";
    else encodedWord += "(";
  }

  return encodedWord;
};

duplicateEncoder("Success");
