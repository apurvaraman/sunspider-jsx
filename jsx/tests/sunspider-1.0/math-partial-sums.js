var JSX = {};
(function () {

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		Object.defineProperty(obj, prop, {
			value: value, 
			enumerable: true,
			writable: true,
			configurable: true
		});
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

/*
 * global functions called by JSX as Number.* (renamed so that they do not conflict with local variable names)
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
var $__jsx_isNaN = isNaN;
var $__jsx_isFinite = isFinite;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
}
/**
 * class Main extends Object
 * @constructor
 */
function Main() {
}

Main.prototype = new Object;
/**
 * @constructor
 */
function Main$() {
};

Main$.prototype = new Main;

/**
 * @param {!number} n
 */
Main.partial$N = function (n) {
	/** @type {!number} */
	var a1;
	/** @type {!number} */
	var a2;
	/** @type {!number} */
	var a3;
	/** @type {!number} */
	var a4;
	/** @type {!number} */
	var a5;
	/** @type {!number} */
	var a6;
	/** @type {!number} */
	var a7;
	/** @type {!number} */
	var a8;
	/** @type {!number} */
	var a9;
	/** @type {!number} */
	var twothirds;
	/** @type {!number} */
	var alt;
	/** @type {!number} */
	var k2;
	/** @type {!number} */
	var k3;
	/** @type {!number} */
	var sk;
	/** @type {!number} */
	var ck;
	/** @type {!number} */
	var k;
	a1 = 0.0;
	a2 = 0.0;
	a3 = 0.0;
	a4 = 0.0;
	a5 = 0.0;
	a6 = 0.0;
	a7 = 0.0;
	a8 = 0.0;
	a9 = 0.0;
	twothirds = 0.6666666666666666;
	alt = -1;
	k2 = 0.0;
	k3 = 0.0;
	sk = 0.0;
	ck = 0.0;
	for (k = 1; k <= n; k++) {
		k2 = k * k;
		k3 = k2 * k;
		sk = Math.sin(k);
		ck = Math.cos(k);
		alt = - alt;
		a1 += Math.pow(twothirds, k - 1);
		a2 += Math.pow(k, -0.5);
		a3 += 1.0 / (k * (k + 1.0));
		a4 += 1.0 / (k3 * sk * sk);
		a5 += 1.0 / (k3 * ck * ck);
		a6 += 1.0 / k;
		a7 += 1.0 / k2;
		a8 += alt / k;
		a9 += alt / (2 * k - 1);
	}
};

Main$partial$N = Main.partial$N;

/**
 */
Main.main$ = function () {
	/** @type {!number} */
	var i;
	for (i = 1024; i <= 16384; i *= 2) {
		Main$partial$N(i);
	}
};

Main$main$ = Main.main$;

var $__jsx_classMap = {
	"math-partial-sums.jsx": {
		Main: Main,
		Main$: Main$
	}
};


}());
