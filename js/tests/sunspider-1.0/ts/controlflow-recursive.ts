// The Computer Language Shootout
// http://shootout.alioth.debian.org/
// contributed by Isaac Gouy    

function ack(m: int,n: int): int{
    if (m == 0) { 
       return n + 1;
    }

    if (n == 0) {
        return ack(m-1,1);
    }

    return ack(m-1, ack(m,n-1) );
}

function fib(n: int): int {
    if (n < 2){
        return 1;
    }
    return fib(n-2) + fib(n-1);
}

function tak(x: int,y: int,z: int): int {
    if (y >= x) {
        return z;
    }
    return tak(tak(x-1,y,z), tak(y-1,z,x), tak(z-1,x,y));
}

export function main(): int {
    let a: int = 0;
    let b: int = 0;
    let c: int = 0;
    for (let i: int = 3; i <= 5; i++ ) {
        a = a + ack(3,i);
        b = b + fib(17+i);
        c = c + tak(3*i+3,2*i+2,i+1);
    }
    return a + b + c;
}

