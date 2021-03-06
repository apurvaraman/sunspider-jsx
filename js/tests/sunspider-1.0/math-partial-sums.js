// The Computer Language Shootout
// http://shootout.alioth.debian.org/
// contributed by Isaac Gouy

function partial(n){
    var a1 = a2 = a3 = a4 = a5 = a6 = a7 = a8 = a9 = 0.0;
    var twothirds = 2.0/3.0;
    var alt = -1.0;
    var k2 = k3 = sk = ck = 0.0;
    
    for (var k = 1; k <= n; k++){
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
console.time("test");
for (var i = 1024; i <= 16384; i *= 2) {
    partial(i);
}
console.timeEnd("test");

function pow(val1, var2){
    var ans = 1;
    while(var2 > 0){
        ans = ans * val1;
        var2--;
    }
    return ans;
}

