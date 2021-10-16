const maskWords = function (cc) {
  return cc.replace(/.(?=.{4})/g, "#");
};

console.log(maskWords("asd33"));
