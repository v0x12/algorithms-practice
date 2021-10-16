export default function isSquare(n: number): boolean {
  const num = Math.sqrt(n);
  if (num % 1 === 0) return true;
  if (num % 1 !== 0) return false;
  return false;
}

isSquare(3);
