const toJadenCase = function () {
  let str = "How can mirrors be real if our eyes aren't real";
  let words = str.split(" ");
  const capitalizedWords = words
    .map((x) => x[0].toUpperCase() + x.substring(1))
    .join(" ");

  return capitalizedWords;
};
console.log(toJadenCase());
