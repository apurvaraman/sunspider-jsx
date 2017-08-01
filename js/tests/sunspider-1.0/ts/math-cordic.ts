var AG_CONST: float = 0.6072529350;

function FIXED(X: float): float {
  return X * 65536.0;
}

function FLOAT(X: int): int {
  return X / 65536;
}

function DEG2RAD(X: float): float {
  return 0.017453 * (X);
}

var Angles: float[] = [
  45.0 *65536.0, 26.565 * 65536.0, 14.0362 * 65536.0, 7.12502 * 65536.0,
  65536.0*3.57633, 65536.0*1.78991, 65536.0*0.895174, 65536.0*0.447614,
  65536.0*0.223811, 65536.0*0.111906, 65536.0*0.055953,
  65536.0*0.027977 
              ];

var Target: float = 28.027;

function cordicsincos(Target: float): int {
    var X: int;
    var Y: int;
    var TargetAngle: float;
    var CurrAngle: float;
    var Step: int;

    X = FIXED(AG_CONST) as int;         /* AG_CONST * cos(0) */
    Y = 0;                       /* AG_CONST * sin(0) */

    TargetAngle = FIXED(Target);
    CurrAngle = 0;
    for (Step = 0; Step < 12; Step++) {
        var NewX: int;
        if (TargetAngle > CurrAngle) {
            NewX = X - (Y >> Step); // can be done only for integers
            Y = (X >> Step) + Y;
            X = NewX;
            CurrAngle += Angles[Step];
        } else {
            NewX = X + (Y >> Step);
            Y = -(X >> Step) + Y;
            X = NewX;
            CurrAngle -= Angles[Step];
        }
        Step++;
    }

    return FLOAT(X) * FLOAT(Y);
}

///// End CORDIC

var total: int = 0;

export function main(): int {
  let runs: int = 25000;
  for ( var i: int = 0 ; i < runs ; i++ ) {
     total += cordicsincos(Target);
  }

  return total;
}

