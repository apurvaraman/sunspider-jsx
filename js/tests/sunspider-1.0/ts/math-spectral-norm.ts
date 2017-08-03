// Edit here and press "Compile"

function A(i: int,j: int): double {
    let i2: double = i*1.0;
    let j2: double = j*1.0;
  return 1/((i2+j2)*(i2+j2+1)/2+i2+1);
}

function Au(u: double[],v: double[],n: int): int {
  for (let i: int=0; i<n; ++i) {
    let t: double = 0.0;
    for (let j: int=0; j<n; ++j)
      t += A(i,j) * u[j];
    v[i] = t;
  }
  return 1;
}

function AtAu(u: double[],v: double[],n: int): int {
  for (let i: int=0; i<n; ++i) {
    let t: double = 0.0;
    for (let j: int=0; j<n; ++j)
      t += A(j,i) * u[j];
    v[i] = t;
  }
  return 1;
}

export function main(): int {
    let sum: int = 0;
    for (let i: int = 6; i <= 48; i *= 2) {
     sum = sum + (spectralnorm(i) as int);
    }
    return sum;
}

function spectralnorm(n: int) : double{
   let i: int, u: double[] = new Array(n), v: double[]= new Array(n), vv: double=0, vBv:double=0;
  for (i=0; i<n; ++i) {
    u[i] = 1; v[i] = i;
  }
  for (i=0; i<10; ++i) {
    Au(v,u,n);
    AtAu(v,u,n);
  }
  for (i=0; i<n; ++i) {
    vBv += u[i]*v[i];
    vv  += v[i]*v[i];
  }
  return sqrt(vBv/vv);
}