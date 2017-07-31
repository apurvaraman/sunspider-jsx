int ack(int m, int n){
   if (m==0) { return n+1; }
   if (n==0) { return ack(m-1,1); }
   return (ack(m-1, ack(m,n-1)));
}

float fib(int n) {
    if (n < 2){ return 1; }
    return (fib(n-2) + fib(n-1));
}

int tak(int x, int y, int z) {
    if (y >= x) return z;
    return (tak(tak(x-1,y,z), tak(y-1,z,x), tak(z-1,x,y)));
}

int main(){
    int i;
    // setting return values of functions and summing them added so that binaryen does not optimize away function calls
    int a, b, c; 
    for (i = 3; i <=5; i++){
        a += ack(3, i);
        b += fib(17.0+i);
        c += tak(3*i+3, 2*i+2, i+1);
    }
    return a + b + c;
}