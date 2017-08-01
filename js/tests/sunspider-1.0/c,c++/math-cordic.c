/*
 * Copyright (C) Rich Moore.  All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY CONTRIBUTORS ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE COMPUTER, INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
 */

/////. Start CORDIC

float AG_CONST = 0.6072529350;

float FIXED(float X)
{
  return (X * 65536.0);
}

int FLOAT(int X)
{
  return (X / 65536);
}

float DEG2RAD(float X)
{
  return (0.017453 * (X));
}


float Angles[12] = {(45.0* 65536.0),(26.565* 65536.0),(14.0362* 65536.0), (7.12502* 65536.0),
  (3.57633* 65536.0), (1.78991* 65536.0), (0.895174* 65536.0), (0.447614* 65536.0), (0.223811* 65536.0), (0.111906* 65536.0), (0.055953* 65536.0),(0.027977* 65536.0) };

float Target = 28.027;

int cordicsincos(float Target) {
    int X;
    int Y;
    float TargetAngle;
    float CurrAngle;
    int Step;
 
    X = FIXED(AG_CONST);         /* AG_CONST * cos(0) */
    Y = 0;                       /* AG_CONST * sin(0) */

    TargetAngle = FIXED(Target);
    CurrAngle = 0;
    for (Step = 0; Step < 12; Step++) {
        float NewX;
        if (TargetAngle > CurrAngle) {
            NewX = X - (Y >> Step);
            Y = (X >> Step) + Y;
            X = NewX;
            CurrAngle += Angles[Step];
        } else {
            NewX = X + (Y >> Step);
            Y = -(X >> Step) + Y;
            X = NewX;
            CurrAngle -= Angles[Step];
        }
    }

    return FLOAT(X) * FLOAT(Y);
}

///// End CORDIC

int total = 0;

int main(){
    int i;
    int runs = 25000;
    for (i = 0; i <runs; i++){
        total += cordicsincos(Target);
    } 
    return total;
    // total not returned in original, time elapsed returned instead.
}
