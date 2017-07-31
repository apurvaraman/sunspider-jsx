// The Great Computer Language Shootout
// http://shootout.alioth.debian.org/
//
// contributed by Ian Osgood
type int = number;


function A(i: double,j: double): double {
  return 1/((i+j)*(i+j+1)/2+i+1);
}

function Au(u: double[],v: double[],n: int) {
  for (let i: int=0; i<n; ++i) {
    let t: double = 0;
    for (let j: int=0; j<n; ++j)
      t += A(i*1.0,j*1.0) * u[j];
    v[i] = t;
  }
}

function Atu(u: double[],v: double[],n: int) {
  for (let i: int=0; i<n; ++i) {
    let t: double = 0;
    for (let j: int=0; j<n; ++j)
      t += A(j*1.0,i*1.0) * u[j];
    v[i] = t;
  }
}

function AtAu(u: double[],v: double[],w: double[],n: int) {
  Au(u,w,n);
  Atu(w,v,n);
}

function spectralnorm(n: int) : double{
   let i: int, u: double[] = new Array(n), v: double[]= new Array(n), w: double[]=new Array(n), vv: double=0, vBv:double=0;
  for (i=0; i<n; ++i) {
    u[i] = 1; v[i] = w[i] = 0;
  }
  for (i=0; i<10; ++i) {
    AtAu(u,v,w,n);
    AtAu(v,u,w,n);
  }
  for (i=0; i<n; ++i) {
    vBv += u[i]*v[i];
    vv  += v[i]*v[i];
  }
  return sqrt(vBv/vv);
}

export function main() {
    for (let i: int = 6; i <= 48; i *= 2) {
     spectralnorm(i);
    }
}

