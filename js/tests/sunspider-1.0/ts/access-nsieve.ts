function nsieve(m: int, isPrime: int[]): int{
   let i: int;
   let k: int;
   let count: int;

   for (i=2; i<=m; i++) { 
       isPrime[i] = 1; //changed from boolean to int
   }
   count = 0;

   for (i=2; i<=m; i++){
      if (isPrime[i]) {
         for (k=i+i; k<=m; k+=i){
            isPrime[k] = 0;
         } 
         count++;
      }
   }
   return count;
}

export function main(): int {
    let sum: int = 0;
    for (let i: int = 1; i <= 3; i++ ) {
        let m: int = (1<<i)*100;
        let flags: int[] = new Array(m+1);
        sum = sum + nsieve(m, flags);
    }
    return sum; //returns 263
}

