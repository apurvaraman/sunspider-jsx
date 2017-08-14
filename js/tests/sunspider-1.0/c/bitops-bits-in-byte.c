int bitsinbyte(int b){
    int m = 1, c = 0;
    while(m<0x100) {
        if(b & m) c++;
        m <<= 1;
    }
    return c;
}

int main() {
    int x, y, t;
    int sum = 0;
    for(x=0; x<350; x++){
        for(y=0; y<256; y++){
         sum += bitsinbyte(y);
        }
    }
    return sum;
}
