
double partial(int n)
{
    double a1,a2,a3,a6,a7,a8,a9 = 0.0;
    double twothirds = 2.0/3.0;
    double alt = -1.0;
    double k,k2,k3 = 0.0;
    double sum = 0;

    for (k=1; k<=n; k++)
    {
        k2 = k*k;
        k3 = k2*k;
        alt = -alt;

        a1 += pow(twothirds, k-1);
        a2 += pow(k, -0.5);
        a3 += 1.0/(k*(k+1.0));
        a6 += 1.0/k;
        a7 += 1.0/k2;
        a8 += alt/k;
        a9 += alt/(2*k -1);
    }
    
    sum = a1+a2+a3+a6+a7+a8+a9;
    return sum;
  
}

int main()
{
    int i;
    double sum;
    for (i = 1024; i <= 16384; i *= 2) 
    {
        sum += partial(i)/i;
    }
    return (int) sum;
}

double pow(double a, double b)
{
    double ans = 1.0;
    while(b>0)
    {
        ans *= a;
        b--;
    }
    return ans;
}