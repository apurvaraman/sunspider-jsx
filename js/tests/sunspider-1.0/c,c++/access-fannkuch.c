/* The Great Computer Language Shootout
   http://shootout.alioth.debian.org/
   contributed by Isaac Gouy */

int main() {
    int n = 8;
    int check = 0;
    int perm[n];
    int perm1[n];
    int count[n];
    int maxPerm[n];
    int maxFlipsCount = 0;
    int m = n - 1;
    int i;

    for (i = 0; i < n; i++) {
        perm1[i] = i;
    }
    int r = n;

    while (1) {

        // SKIPPED: writing the permutations
        // write-out the first 30 permutations
        // if (check < 30){
        //     var s = "";
        //     for(var i=0; i<n; i++) s += (perm1[i]+1).toString();
        //     check++;
        // }

        while (r != 1) { count[r - 1] = r; r--; }
        if (!(perm1[0] == 0 || perm1[m] == m)) {
            int i;
            for (i = 0; i < n; i++) {
                perm[i] = perm1[i];
                }

            int flipsCount = 0;
            int k;

            while (!((k = perm[0]) == 0)) {
            int k2 = (k + 1) >> 1;
            for (i = 0; i < k2; i++) {
                int temp = perm[i]; perm[i] = perm[k - i]; perm[k - i] = temp;
            }
            flipsCount++;
            }

            if (flipsCount > maxFlipsCount) {
            maxFlipsCount = flipsCount;
            for (int i = 0; i < n; i++) {
                maxPerm[i] = perm1[i];
            }
            }
        }

        while (1) {
            if (r == n) {
                return maxFlipsCount;
            }
            int perm0 = perm1[0];
            int i = 0;
            while (i < r) {
                int j = i + 1;
                perm1[i] = perm1[j];
                i = j;
            }
            perm1[r] = perm0;

            count[r] = count[r] - 1;
            if (count[r] > 0) {
                break;
            }
            r++;
        }
    }
}

