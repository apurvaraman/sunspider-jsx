/* The Great Computer Language Shootout
   http://shootout.alioth.debian.org/
   contributed by Isaac Gouy */

function fannkuch(n: int): int {
   let check: int = 0;
   var perm: int[] = new Array(n);
   var perm1: int[] = new Array(n);
   var count: int[] = new Array(n);
   var maxPerm: int[] = new Array(n);
   var maxFlipsCount: int = 0;
   var m: int = n - 1;

   for (let i: int = 0; i < n; i++){
       perm1[i] = i;
   }
   var r: int = n;

   while (true) {

      while (r != 1) {
           count[r - 1] = r;
            r--;
      }
      if (!(perm1[0] == 0 || perm1[m] == m)) {
         for (let i: int = 0; i < n; i++){
            perm[i] = perm1[i];
         } 

         var flipsCount: int = 0;
         var k: int;

         while (!((k = perm[0]) == 0)) {
            var k2: int = (k + 1) >> 1;
            for (let i: int = 0; i < k2; i++) {
               var temp: int = perm[i];
                perm[i] = perm[k - i]; 
                perm[k - i] = temp;
            }
            flipsCount++;
         }

         if (flipsCount > maxFlipsCount) {
            maxFlipsCount = flipsCount;
            for (let i: int = 0; i < n; i++){
                maxPerm[i] = perm1[i];
            } 
         }
      }

      while (true) {
         if (r == n){
            return maxFlipsCount;
         } 
         var perm0: int = perm1[0];
         let i: int = 0;
         while (i < r) {
            let j: int = i + 1;
            perm1[i] = perm1[j];
            i = j;
         }
         perm1[r] = perm0;

         count[r] = count[r] - 1;
         if (count[r] > 0){
            break;
         }
         r++;
      }
   }
}

export function main(): int{
    return fannkuch(10); //CHANGED THIS CAUSE 8 WAS TOO FAST // returns 38
}

