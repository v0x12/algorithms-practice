const tribonacci = (signature, n) => {
  // n need to be more than 3
  if (n - 1 <= signature.length - 1) {
    return signature[n - 1] ? signature.slice(0, n) : [];
  }

  const base = signature.length - 3;
  let calculatedTribonacci = null;

  for (let i = signature.length - 1; i >= base; --i) {
    calculatedTribonacci += signature[i];
  }

  signature.push(calculatedTribonacci);

  if (signature.length < n) return tribonacci(signature, n);
  return signature;
};
console.log(tribonacci([1, 1, 1], 2));
