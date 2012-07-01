// The Computer Language Shootout
// http://shootout.alioth.debian.org/
// contributed by Isaac Gouy

class _Main {
    static function partial(n : number) : void {
        var a1 = 0.0;
        var a2 = 0.0;
        var a3 = 0.0;
        var a4 = 0.0;
        var a5 = 0.0;
        var a6 = 0.0;
        var a7 = 0.0;
        var a8 = 0.0;
        var a9 = 0.0;
        var twothirds = 2.0/3.0;
        var alt = -1.0;
        var k2 = 0.0;
        var k3 = 0.0;
        var sk = 0.0;
        var ck = 0.0;

        for (var k = 1; k <= n; k++){
            k2 = k*k;
            k3 = k2*k;
            sk = Math.sin(k);
            ck = Math.cos(k);
            alt = -alt;

            a1 += Math.pow(twothirds,k-1);
            a2 += Math.pow(k,-0.5);
            a3 += 1.0/(k*(k+1.0));
            a4 += 1.0/(k3 * sk*sk);
            a5 += 1.0/(k3 * ck*ck);
            a6 += 1.0/k;
            a7 += 1.0/k2;
            a8 += alt/k;
            a9 += alt/(2*k -1);
        }
    }

    static function main(args : string[]) : void {
        for (var i = 1024; i <= 16384; i *= 2) {
            _Main.partial(i);
        }
    }
}