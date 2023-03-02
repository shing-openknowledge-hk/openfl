// Class: openfl.geom.Matrix

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function openfl_geom_Point() {return require("./../../openfl/geom/Point");}
function Std() {return require("./../../Std");}
function lime_utils_ObjectPool() {return require("./../../lime/utils/ObjectPool");}
function lime_math_Matrix3() {return require("./../../lime/math/Matrix3");}

// Constructor

var Matrix = function(a,b,c,d,tx,ty) {
	if(ty == null) {
		ty = 0;
	}
	if(tx == null) {
		tx = 0;
	}
	if(d == null) {
		d = 1;
	}
	if(c == null) {
		c = 0;
	}
	if(b == null) {
		b = 0;
	}
	if(a == null) {
		a = 1;
	}
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = tx;
	this.ty = ty;
}

// Meta

Matrix.__name__ = "openfl.geom.Matrix";
Matrix.__isInterface__ = false;
Matrix.prototype = {
	clone: function() {
		return new Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
	},
	concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.ty = this.tx * m.b + this.ty * m.d + m.ty;
		this.tx = tx1;
	},
	copyColumnFrom: function(column,vector3D) {
		if(column > 2) {
			throw new (js__$Boot_HaxeError().default)("Column " + column + " out of bounds (2)");
		} else if(column == 0) {
			this.a = vector3D.x;
			this.b = vector3D.y;
		} else if(column == 1) {
			this.c = vector3D.x;
			this.d = vector3D.y;
		} else {
			this.tx = vector3D.x;
			this.ty = vector3D.y;
		}
	},
	copyColumnTo: function(column,vector3D) {
		if(column > 2) {
			throw new (js__$Boot_HaxeError().default)("Column " + column + " out of bounds (2)");
		} else if(column == 0) {
			vector3D.x = this.a;
			vector3D.y = this.b;
			vector3D.z = 0;
		} else if(column == 1) {
			vector3D.x = this.c;
			vector3D.y = this.d;
			vector3D.z = 0;
		} else {
			vector3D.x = this.tx;
			vector3D.y = this.ty;
			vector3D.z = 1;
		}
	},
	copyFrom: function(sourceMatrix) {
		this.a = sourceMatrix.a;
		this.b = sourceMatrix.b;
		this.c = sourceMatrix.c;
		this.d = sourceMatrix.d;
		this.tx = sourceMatrix.tx;
		this.ty = sourceMatrix.ty;
	},
	copyRowFrom: function(row,vector3D) {
		if(row > 2) {
			throw new (js__$Boot_HaxeError().default)("Row " + row + " out of bounds (2)");
		} else if(row == 0) {
			this.a = vector3D.x;
			this.c = vector3D.y;
			this.tx = vector3D.z;
		} else if(row == 1) {
			this.b = vector3D.x;
			this.d = vector3D.y;
			this.ty = vector3D.z;
		}
	},
	copyRowTo: function(row,vector3D) {
		if(row > 2) {
			throw new (js__$Boot_HaxeError().default)("Row " + row + " out of bounds (2)");
		} else if(row == 0) {
			vector3D.x = this.a;
			vector3D.y = this.c;
			vector3D.z = this.tx;
		} else if(row == 1) {
			vector3D.x = this.b;
			vector3D.y = this.d;
			vector3D.z = this.ty;
		} else {
			vector3D.setTo(0,0,1);
		}
	},
	createBox: function(scaleX,scaleY,rotation,tx,ty) {
		if(ty == null) {
			ty = 0;
		}
		if(tx == null) {
			tx = 0;
		}
		if(rotation == null) {
			rotation = 0;
		}
		if(rotation != 0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.a = cos * scaleX;
			this.b = sin * scaleY;
			this.c = -sin * scaleX;
			this.d = cos * scaleY;
		} else {
			this.a = scaleX;
			this.b = 0;
			this.c = 0;
			this.d = scaleY;
		}
		this.tx = tx;
		this.ty = ty;
	},
	createGradientBox: function(width,height,rotation,tx,ty) {
		if(ty == null) {
			ty = 0;
		}
		if(tx == null) {
			tx = 0;
		}
		if(rotation == null) {
			rotation = 0;
		}
		this.a = width / 1638.4;
		this.d = height / 1638.4;
		if(rotation != 0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.b = sin * this.d;
			this.c = -sin * this.a;
			this.a *= cos;
			this.d *= cos;
		} else {
			this.b = 0;
			this.c = 0;
		}
		this.tx = tx + width / 2;
		this.ty = ty + height / 2;
	},
	deltaTransformPoint: function(point) {
		return new (openfl_geom_Point().default)(point.x * this.a + point.y * this.c,point.x * this.b + point.y * this.d);
	},
	equals: function(matrix) {
		if(matrix != null && this.tx == matrix.tx && this.ty == matrix.ty && this.a == matrix.a && this.b == matrix.b && this.c == matrix.c) {
			return this.d == matrix.d;
		} else {
			return false;
		}
	},
	identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.tx = 0;
		this.ty = 0;
	},
	invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.tx = -this.tx;
			this.ty = -this.ty;
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.ty = -this.b * this.tx - this.d * this.ty;
			this.tx = tx1;
		}
		return this;
	},
	rotate: function(theta) {
		var cos = Math.cos(theta);
		var sin = Math.sin(theta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.ty = this.tx * sin + this.ty * cos;
		this.tx = tx1;
	},
	scale: function(sx,sy) {
		this.a *= sx;
		this.b *= sy;
		this.c *= sx;
		this.d *= sy;
		this.tx *= sx;
		this.ty *= sy;
	},
	setRotation: function(theta,scale) {
		if(scale == null) {
			scale = 1;
		}
		this.a = Math.cos(theta) * scale;
		this.c = Math.sin(theta) * scale;
		this.b = -this.c;
		this.d = this.a;
	},
	setTo: function(a,b,c,d,tx,ty) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
	},
	to3DString: function(roundPixels) {
		if(roundPixels == null) {
			roundPixels = false;
		}
		if(roundPixels) {
			return "matrix3d(" + this.a + ", " + this.b + ", 0, 0, " + this.c + ", " + this.d + ", 0, 0, 0, 0, 1, 0, " + (Std().default).int(this.tx) + ", " + (Std().default).int(this.ty) + ", 0, 1)";
		} else {
			return "matrix3d(" + this.a + ", " + this.b + ", 0, 0, " + this.c + ", " + this.d + ", 0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", 0, 1)";
		}
	},
	toMozString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + "px, " + this.ty + "px)";
	},
	toString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	},
	transformPoint: function(pos) {
		return new (openfl_geom_Point().default)(this.__transformX(pos.x,pos.y),this.__transformY(pos.x,pos.y));
	},
	translate: function(dx,dy) {
		this.tx += dx;
		this.ty += dy;
	},
	toArray: function(transpose) {
		if(transpose == null) {
			transpose = false;
		}
		if(this.__array == null) {
			var array = null;
			var view = null;
			var buffer = null;
			var len = null;
			var this1 = new Float32Array(9);
			this.__array = this1;
		}
		if(transpose) {
			this.__array[0] = this.a;
			this.__array[1] = this.b;
			this.__array[2] = 0;
			this.__array[3] = this.c;
			this.__array[4] = this.d;
			this.__array[5] = 0;
			this.__array[6] = this.tx;
			this.__array[7] = this.ty;
			this.__array[8] = 1;
		} else {
			this.__array[0] = this.a;
			this.__array[1] = this.c;
			this.__array[2] = this.tx;
			this.__array[3] = this.b;
			this.__array[4] = this.d;
			this.__array[5] = this.ty;
			this.__array[6] = 0;
			this.__array[7] = 0;
			this.__array[8] = 1;
		}
		return this.__array;
	},
	__cleanValues: function() {
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.tx = Math.round(this.tx * 10) / 10;
		this.ty = Math.round(this.ty * 10) / 10;
	},
	__toMatrix3: function() {
		Matrix.__matrix3.setTo(this.a,this.b,this.c,this.d,this.tx,this.ty);
		return Matrix.__matrix3;
	},
	__transformInversePoint: function(point) {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			point.x = -this.tx;
			point.y = -this.ty;
		} else {
			var px = 1.0 / norm * (this.c * (this.ty - point.y) + this.d * (point.x - this.tx));
			point.y = 1.0 / norm * (this.a * (point.y - this.ty) + this.b * (this.tx - point.x));
			point.x = px;
		}
	},
	__transformInverseX: function(px,py) {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			return -this.tx;
		} else {
			return 1.0 / norm * (this.c * (this.ty - py) + this.d * (px - this.tx));
		}
	},
	__transformInverseY: function(px,py) {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			return -this.ty;
		} else {
			return 1.0 / norm * (this.a * (py - this.ty) + this.b * (this.tx - px));
		}
	},
	__transformPoint: function(point) {
		var px = point.x;
		var py = point.y;
		point.x = this.__transformX(px,py);
		point.y = this.__transformY(px,py);
	},
	__transformX: function(px,py) {
		return px * this.a + py * this.c + this.tx;
	},
	__transformY: function(px,py) {
		return px * this.b + py * this.d + this.ty;
	},
	__translateTransformed: function(px,py) {
		this.tx = this.__transformX(px,py);
		this.ty = this.__transformY(px,py);
	}
};
Matrix.prototype.__class__ = Matrix.prototype.constructor = $hxClasses["openfl.geom.Matrix"] = Matrix;

// Init



// Statics


Matrix.__meta__ = { fields : { equals : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, to3DString : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, toMozString : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}}
Matrix.__identity = new Matrix()
Matrix.__pool = new (lime_utils_ObjectPool().default)(function() {
	return new Matrix();
},function(m) {
	m.identity();
})
Matrix.__matrix3 = new (lime_math_Matrix3().default)()

// Export

exports.default = Matrix;