function bitsinbyte(b: int): int{
    let m: int = 1, c = 0;
    while(m<0x100) {
        if(b & m) c++;
        m <<= 1;
    }
    return c;
}

export function main(): int {
    let x: int, y, t;
    let sum: int = 0;
    for(let x: int=0; x<350; x++){
        for(let y: int=0; y<256; y++){
         sum += bitsinbyte(y);
        }
    }
    return sum;
}
