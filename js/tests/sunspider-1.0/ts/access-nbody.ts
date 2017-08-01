/* The Great Computer Language Shootout
   http://shootout.alioth.debian.org/
   contributed by Isaac Gouy */

var PI: double = 3.141592653589793;
var SOLAR_MASS: double = 4 * PI * PI;
var DAYS_PER_YEAR: double = 365.24;

class Body {
    x: double;
    y: double;
    z: double;
    vx: double;
    vy: double;
    vz: double;
    mass: double;
    constructor(x: double, y: double, z: double, vx: double, vy: double, vz: double, mass: double) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.vx = vx;
        this.vy = vy;
        this.vz = vz;
        this.mass = mass;
    }
    offsetMomentum(px: double, py: double, pz: double): Body {
           this.vx = -px / SOLAR_MASS;
           this.vy = -py / SOLAR_MASS;
           this.vz = -pz / SOLAR_MASS;
           return this;
    }
}

function Jupiter(): Body{
   return new Body(
      4.84143144246472090e+00,
      -1.16032004402742839e+00,
      -1.03622044471123109e-01,
      1.66007664274403694e-03 * DAYS_PER_YEAR,
      7.69901118419740425e-03 * DAYS_PER_YEAR,
      -6.90460016972063023e-05 * DAYS_PER_YEAR,
      9.54791938424326609e-04 * SOLAR_MASS
   );
}

function Saturn(): Body{
   return new Body(
      8.34336671824457987e+00,
      4.12479856412430479e+00,
      -4.03523417114321381e-01,
      -2.76742510726862411e-03 * DAYS_PER_YEAR,
      4.99852801234917238e-03 * DAYS_PER_YEAR,
      2.30417297573763929e-05 * DAYS_PER_YEAR,
      2.85885980666130812e-04 * SOLAR_MASS
   );
}

function Uranus(): Body{
   return new Body(
      1.28943695621391310e+01,
      -1.51111514016986312e+01,
      -2.23307578892655734e-01,
      2.96460137564761618e-03 * DAYS_PER_YEAR,
      2.37847173959480950e-03 * DAYS_PER_YEAR,
      -2.96589568540237556e-05 * DAYS_PER_YEAR,
      4.36624404335156298e-05 * SOLAR_MASS
   );
}

function Neptune(): Body{
   return new Body(
      1.53796971148509165e+01,
      -2.59193146099879641e+01,
      1.79258772950371181e-01,
      2.68067772490389322e-03 * DAYS_PER_YEAR,
      1.62824170038242295e-03 * DAYS_PER_YEAR,
      -9.51592254519715870e-05 * DAYS_PER_YEAR,
      5.15138902046611451e-05 * SOLAR_MASS
   );
}

function Sun(): Body{
   return new Body(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, SOLAR_MASS);
}

class NBodySystem {
    px: double;
    py: double;
    pz: double;
    size: double;
    bodies: Body[];
    constructor(bodies: Body[]) {
        this.bodies = bodies;
        this.px = 0.0;
        this.py = 0.0;
        this.pz = 0.0;
        this.size = this.bodies.length;
        for (var i=0; i<size; i++){
            let b: Body = this.bodies[i];
            let m: double = b.mass;
            this.px += b.vx * m;
            this.py += b.vy * m;
            this.pz += b.vz * m;
        }
        this.bodies[0].offsetMomentum(this.px,this.py,this.pz);
    }
    advance(dt: double): void {
        let dx: double;
        let dy: double;
        let dz: double;
        let distance: double;
        let mag: double;
        let size: double = this.bodies.length;
        for (let i: int =0; i<size; i++) {
            let bodyi: Body = this.bodies[i];
            for (let j: int =i+1; j<size; j++) {
                let bodyj: Body = this.bodies[j];
                dx = bodyi.x - bodyj.x;
                dy = bodyi.y - bodyj.y;
                dz = bodyi.z - bodyj.z;

                distance = sqrt(dx*dx + dy*dy + dz*dz);
                mag = dt / (distance * distance * distance);

                bodyi.vx -= dx * bodyj.mass * mag;
                bodyi.vy -= dy * bodyj.mass * mag;
                bodyi.vz -= dz * bodyj.mass * mag;

                bodyj.vx += dx * bodyi.mass * mag;
                bodyj.vy += dy * bodyi.mass * mag;
                bodyj.vz += dz * bodyi.mass * mag;
            }
        }
        for (let i: int = 0; i<size; i++) {
            let body: Body = this.bodies[i];
            body.x += dt * body.vx;
            body.y += dt * body.vy;
            body.z += dt * body.vz;
        }
    }
    energy(): double {
        let dx: double;
        let dy: double;
        let dz: double;
        let distance: double;
        let e: double = 0.0;
        let size: double = this.bodies.length;
        for (let i: int=0; i<size; i++) {
            let bodyi: Body = this.bodies[i];

            e = e + 0.5 * bodyi.mass * (bodyi.vx * bodyi.vx + bodyi.vy * bodyi.vy + bodyi.vz * bodyi.vz);

            for (let j: int=i+1; j<size; j++) {
                let bodyj: Body = this.bodies[j];
                dx = bodyi.x - bodyj.x;
                dy = bodyi.y - bodyj.y;
                dz = bodyi.z - bodyj.z;

                distance = sqrt(dx*dx + dy*dy + dz*dz);
                e = e - (bodyi.mass * bodyj.mass) / distance;
            }
        }
        return e;
    }
}

export function main() {
    var ret;

    for ( var n = 3; n <= 24; n *= 2 ) {
        (function(){
            var bodies = new NBodySystem( Array(
                Sun(),Jupiter(),Saturn(),Uranus(),Neptune()
            ));
            var max = n * 100;
            
            ret = bodies.energy();
            for (var i=0; i<max; i++){
                bodies.advance(0.01);
            }
            ret = bodies.energy();
        })();
    }   
}
var ret;

for ( var n = 3; n <= 24; n *= 2 ) {
    (function(){
        var bodies = new NBodySystem( Array(
           Sun(),Jupiter(),Saturn(),Uranus(),Neptune()
        ));
        var max = n * 100;
        
        ret = bodies.energy();
        for (var i=0; i<max; i++){
            bodies.advance(0.01);
        }
        ret = bodies.energy();
    })();
}
