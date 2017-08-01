//removed pad

int nsieve(int m, int*isPrime){
   int i, k, count;

   for (i=2; i<=m; i++) { isPrime[i] = 1; }
   count = 0;

   for (i=2; i<=m; i++){
      if (isPrime[i]) {
         for (k=i+i; k<=m; k+=i) {isPrime[k] = 0;};
         count++;
      }
   }
   return count;
}

int main() {
    int i;
    int retVal;
    for (i = 1; i <= 3; i++ ) {
        int m = (1<<i)*10000;
        int flags [m+1];
        retVal += nsieve(m, flags); // changed return value of main        
    }
    return retVal;
}
