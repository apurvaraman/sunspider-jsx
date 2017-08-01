
function primes(isPrime: int[], n: int): int {
  let i: int = 0;
  let count: int = 0
  let m: int = 10000<<n
  let size: int = m+31>>5;

  for (i=0; i<size; i++){
    isPrime[i] = 0xfffffff;
  }

  for (i=2; i<m; i++){
    if (isPrime[i>>5] & 1<<(i&31)) {
      for (let j: int = i+i; j<m; j+=i){
        isPrime[j>>5] &= ~(1<<(j&31));
      }
      count++;
    }
  }
  return count;
}

export function main(): int {
    let sum: int = 0;
    for (let i: int = 4; i <= 4; i++) {
        let isPrime: int[] = new Array((10000<<i)+31>>5);
        sum += primes(isPrime, i);
    }
    return sum;
}
