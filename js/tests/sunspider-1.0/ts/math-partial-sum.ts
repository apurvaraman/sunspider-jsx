// The Computer Language Shootout
// http://shootout.alioth.debian.org/
// contributed by Isaac Gouy
type double = number;

function partial(n){
    let a1: double, a2, a3, a4, a5, a6, a7, a8, a9 = 0.0;
    let twothirds: double = 2.0/3.0;
    let alt: double = -1.0;
    let k2: double, k3, sk, ck = 0.0;
    
    for (let k: double = 1; k <= n; k++){
        k2 = k*k;
        k3 = k2*k;
        alt = -alt;
        
        a1 += pow(twothirds,k-1);
        a2 += pow(k,-0.5);
        a3 += 1.0/(k*(k+1.0));
        a6 += 1.0/k;
        a7 += 1.0/k2;
        a8 += alt/k;
        a9 += alt/(2*k -1);
    }
}
for (let i: double = 1024; i <= 16384; i *= 2) {
    partial(i);
}

function pow(val1: number, var2: number): number{
    let ans: number = 1;
    while(var2 > 0){
        ans = ans * val1;
        var2--;
    }
    return ans;
}

