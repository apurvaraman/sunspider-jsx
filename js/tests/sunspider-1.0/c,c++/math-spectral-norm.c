#include <math.h>
// Edit here and press "Compile"

double A(int i,int j){
    double i2 = i*1.0;
    double j2 = j*1.0;
  return 1/((i2+j2)*(i2+j2+1)/2+i2+1);
}

int Au(double u[], double v[], int n) {
  int i;
  int j;
  for (i=0; i<n; ++i) {
    double t = 0.0;
    for (j=0; j<n; ++j)
      t += A(i,j) * u[j];
    v[i] = t;
  }
  return 1;
}

int AtAu(double u[], double v[], int n) {
  int i,j;
  for (i=0; i<n; ++i) {
    double t = 0.0;
    for (j=0; j<n; ++j)
      t += A(j,i) * u[j];
    v[i] = t;
  }
  return 1;
}

double spectralnorm(int n) {
   int i;  double u[n]; double v[n]; double vv=0; double vBv=0;
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

int main(){
    int sum = 0;
    int i;
    for (i = 6; i <= 48; i *= 2) {
     sum = sum + spectralnorm(i);
    }
    return sum;
}

