int primes(int* isPrime, int n) {
  int i, j, count = 0, m = 10000<<n, size = (m+31)>>5;

  for (i=0; i<size; i++){
    isPrime[i] = 0xfffffff; // changed this because in TS 8 'f' is too large
  } 

  for (i=2; i<m; i++){
    if (isPrime[i>>5] & 1<<(i&31)) {
      for (j=i+i; j<m; j+=i) {
        isPrime[j>>5] &= ~(1<<(j&31));
        }        
      count++;
    }
  }
  return count;  
}

int main() {
  int i;
  int sum = 0;
  int retVal = 0;
    for (i = 4; i <= 4; i++) {
        int isPrime [((10000<<i)+31)>>5];
        sum += primes(isPrime, i);
        retVal += isPrime[i];
    }
    return sum; // changed what main returns in both c and ts. returns 15000 something
}