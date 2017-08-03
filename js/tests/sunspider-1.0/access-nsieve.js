// The Great Computer Language Shootout
// http://shootout.alioth.debian.org/
//
// modified by Isaac Gouy


function nsieve(m, isPrime){
   var i, k, count;

   for (i=2; i<=m; i++) { isPrime[i] = 1; }
   count = 0;

   for (i=2; i<=m; i++){
      if (isPrime[i]) {
         for (k=i+i; k<=m; k+=i) isPrime[k] = 0;
         count++;
      }
   }
   return count;
}

function main() {
    var sum = 0;
    for (var i = 1; i <= 3; i++ ) {
        var m = (1<<i)*100;
        var flags = Array(m+1);
        sum += nsieve(m, flags);
    }
    return sum; //returns 263
}

