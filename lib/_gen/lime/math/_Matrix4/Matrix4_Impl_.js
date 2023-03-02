// Class: lime.math._Matrix4.Matrix4_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime_utils_Log() {return require("./../../../lime/utils/Log");}
function lime_math_Vector4() {return require("./../../../lime/math/Vector4");}

// Constructor

var Matrix4_Impl_ = function(){}

// Meta

Matrix4_Impl_.__name__ = "lime.math._Matrix4.Matrix4_Impl_";
Matrix4_Impl_.__isInterface__ = false;
Matrix4_Impl_.prototype = {
	
};
Matrix4_Impl_.prototype.__class__ = Matrix4_Impl_.prototype.constructor = $hxClasses["lime.math._Matrix4.Matrix4_Impl_"] = Matrix4_Impl_;

// Init



// Statics

Matrix4_Impl_._new = function(data) {
	var this1;
	if(data != null && data.length == 16) {
		this1 = data;
	} else {
		var elements = null;
		var array = Matrix4_Impl_.__identity;
		var view = null;
		var buffer = null;
		var len = null;
		var this2;
		if(elements != null) {
			this2 = new Float32Array(elements);
		} else if(array != null) {
			this2 = new Float32Array(array);
		} else if(view != null) {
			this2 = new Float32Array(view);
		} else if(buffer != null) {
			if(len == null) {
				this2 = new Float32Array(buffer,0);
			} else {
				this2 = new Float32Array(buffer,0,len);
			}
		} else {
			this2 = null;
		}
		this1 = this2;
	}
	return this1;
}
Matrix4_Impl_.append = function(this1,lhs) {
	var m111 = this1[0];
	var m121 = this1[4];
	var m131 = this1[8];
	var m141 = this1[12];
	var m112 = this1[1];
	var m122 = this1[5];
	var m132 = this1[9];
	var m142 = this1[13];
	var m113 = this1[2];
	var m123 = this1[6];
	var m133 = this1[10];
	var m143 = this1[14];
	var m114 = this1[3];
	var m124 = this1[7];
	var m134 = this1[11];
	var m144 = this1[15];
	var m211 = Matrix4_Impl_.get(lhs,0);
	var m221 = Matrix4_Impl_.get(lhs,4);
	var m231 = Matrix4_Impl_.get(lhs,8);
	var m241 = Matrix4_Impl_.get(lhs,12);
	var m212 = Matrix4_Impl_.get(lhs,1);
	var m222 = Matrix4_Impl_.get(lhs,5);
	var m232 = Matrix4_Impl_.get(lhs,9);
	var m242 = Matrix4_Impl_.get(lhs,13);
	var m213 = Matrix4_Impl_.get(lhs,2);
	var m223 = Matrix4_Impl_.get(lhs,6);
	var m233 = Matrix4_Impl_.get(lhs,10);
	var m243 = Matrix4_Impl_.get(lhs,14);
	var m214 = Matrix4_Impl_.get(lhs,3);
	var m224 = Matrix4_Impl_.get(lhs,7);
	var m234 = Matrix4_Impl_.get(lhs,11);
	var m244 = Matrix4_Impl_.get(lhs,15);
	this1[0] = m111 * m211 + m112 * m221 + m113 * m231 + m114 * m241;
	this1[1] = m111 * m212 + m112 * m222 + m113 * m232 + m114 * m242;
	this1[2] = m111 * m213 + m112 * m223 + m113 * m233 + m114 * m243;
	this1[3] = m111 * m214 + m112 * m224 + m113 * m234 + m114 * m244;
	this1[4] = m121 * m211 + m122 * m221 + m123 * m231 + m124 * m241;
	this1[5] = m121 * m212 + m122 * m222 + m123 * m232 + m124 * m242;
	this1[6] = m121 * m213 + m122 * m223 + m123 * m233 + m124 * m243;
	this1[7] = m121 * m214 + m122 * m224 + m123 * m234 + m124 * m244;
	this1[8] = m131 * m211 + m132 * m221 + m133 * m231 + m134 * m241;
	this1[9] = m131 * m212 + m132 * m222 + m133 * m232 + m134 * m242;
	this1[10] = m131 * m213 + m132 * m223 + m133 * m233 + m134 * m243;
	this1[11] = m131 * m214 + m132 * m224 + m133 * m234 + m134 * m244;
	this1[12] = m141 * m211 + m142 * m221 + m143 * m231 + m144 * m241;
	this1[13] = m141 * m212 + m142 * m222 + m143 * m232 + m144 * m242;
	this1[14] = m141 * m213 + m142 * m223 + m143 * m233 + m144 * m243;
	this1[15] = m141 * m214 + m142 * m224 + m143 * m234 + m144 * m244;
}
Matrix4_Impl_.appendRotation = function(this1,degrees,axis,pivotPoint) {
	var m = Matrix4_Impl_.__getAxisRotation(this1,axis.x,axis.y,axis.z,degrees);
	if(pivotPoint != null) {
		var p = pivotPoint;
		Matrix4_Impl_.appendTranslation(m,p.x,p.y,p.z);
	}
	Matrix4_Impl_.append(this1,m);
}
Matrix4_Impl_.appendScale = function(this1,xScale,yScale,zScale) {
	var elements = null;
	var array = [xScale,0.0,0.0,0.0,0.0,yScale,0.0,0.0,0.0,0.0,zScale,0.0,0.0,0.0,0.0,1.0];
	var view = null;
	var buffer = null;
	var len = null;
	var this2;
	if(elements != null) {
		this2 = new Float32Array(elements);
	} else if(array != null) {
		this2 = new Float32Array(array);
	} else if(view != null) {
		this2 = new Float32Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this2 = new Float32Array(buffer,0);
		} else {
			this2 = new Float32Array(buffer,0,len);
		}
	} else {
		this2 = null;
	}
	Matrix4_Impl_.append(this1,Matrix4_Impl_._new(this2));
}
Matrix4_Impl_.appendTranslation = function(this1,x,y,z) {
	this1[12] += x;
	this1[13] += y;
	this1[14] += z;
}
Matrix4_Impl_.clone = function(this1) {
	var elements = null;
	var array = null;
	var buffer = null;
	var len = null;
	var this2;
	if(elements != null) {
		this2 = new Float32Array(elements);
	} else if(array != null) {
		this2 = new Float32Array(array);
	} else if(this1 != null) {
		this2 = new Float32Array(this1);
	} else if(buffer != null) {
		if(len == null) {
			this2 = new Float32Array(buffer,0);
		} else {
			this2 = new Float32Array(buffer,0,len);
		}
	} else {
		this2 = null;
	}
	return Matrix4_Impl_._new(this2);
}
Matrix4_Impl_.copyColumnFrom = function(this1,column,vector) {
	switch(column) {
	case 0:
		this1[0] = vector.x;
		this1[1] = vector.y;
		this1[2] = vector.z;
		this1[3] = vector.w;
		break;
	case 1:
		this1[4] = vector.x;
		this1[5] = vector.y;
		this1[6] = vector.z;
		this1[7] = vector.w;
		break;
	case 2:
		this1[8] = vector.x;
		this1[9] = vector.y;
		this1[10] = vector.z;
		this1[11] = vector.w;
		break;
	case 3:
		this1[12] = vector.x;
		this1[13] = vector.y;
		this1[14] = vector.z;
		this1[15] = vector.w;
		break;
	default:
		(lime_utils_Log().default).error("Column " + column + " out of bounds [0, ..., 3]",{ fileName : "../node_modules/lime/src/lime/math/Matrix4.hx", lineNumber : 187, className : "lime.math._Matrix4.Matrix4_Impl_", methodName : "copyColumnFrom"});
	}
}
Matrix4_Impl_.copyColumnTo = function(this1,column,vector) {
	switch(column) {
	case 0:
		vector.x = this1[0];
		vector.y = this1[1];
		vector.z = this1[2];
		vector.w = this1[3];
		break;
	case 1:
		vector.x = this1[4];
		vector.y = this1[5];
		vector.z = this1[6];
		vector.w = this1[7];
		break;
	case 2:
		vector.x = this1[8];
		vector.y = this1[9];
		vector.z = this1[10];
		vector.w = this1[11];
		break;
	case 3:
		vector.x = this1[12];
		vector.y = this1[13];
		vector.z = this1[14];
		vector.w = this1[15];
		break;
	default:
		(lime_utils_Log().default).error("Column " + column + " out of bounds [0, ..., 3]",{ fileName : "../node_modules/lime/src/lime/math/Matrix4.hx", lineNumber : 225, className : "lime.math._Matrix4.Matrix4_Impl_", methodName : "copyColumnTo"});
	}
}
Matrix4_Impl_.copyFrom = function(this1,other) {
	this1.set(other);
}
Matrix4_Impl_.copyRowFrom = function(this1,row,vector) {
	switch(row) {
	case 0:
		this1[0] = vector.x;
		this1[4] = vector.y;
		this1[8] = vector.z;
		this1[12] = vector.w;
		break;
	case 1:
		this1[1] = vector.x;
		this1[5] = vector.y;
		this1[9] = vector.z;
		this1[13] = vector.w;
		break;
	case 2:
		this1[2] = vector.x;
		this1[6] = vector.y;
		this1[10] = vector.z;
		this1[14] = vector.w;
		break;
	case 3:
		this1[3] = vector.x;
		this1[7] = vector.y;
		this1[11] = vector.z;
		this1[15] = vector.w;
		break;
	default:
		(lime_utils_Log().default).error("Row " + row + " out of bounds [0, ..., 3]",{ fileName : "../node_modules/lime/src/lime/math/Matrix4.hx", lineNumber : 272, className : "lime.math._Matrix4.Matrix4_Impl_", methodName : "copyRowFrom"});
	}
}
Matrix4_Impl_.copyRowTo = function(this1,row,vector) {
	switch(row) {
	case 0:
		vector.x = this1[0];
		vector.y = this1[4];
		vector.z = this1[8];
		vector.w = this1[12];
		break;
	case 1:
		vector.x = this1[1];
		vector.y = this1[5];
		vector.z = this1[9];
		vector.w = this1[13];
		break;
	case 2:
		vector.x = this1[2];
		vector.y = this1[6];
		vector.z = this1[10];
		vector.w = this1[14];
		break;
	case 3:
		vector.x = this1[3];
		vector.y = this1[7];
		vector.z = this1[11];
		vector.w = this1[15];
		break;
	default:
		(lime_utils_Log().default).error("Row " + row + " out of bounds [0, ..., 3]",{ fileName : "../node_modules/lime/src/lime/math/Matrix4.hx", lineNumber : 310, className : "lime.math._Matrix4.Matrix4_Impl_", methodName : "copyRowTo"});
	}
}
Matrix4_Impl_.create2D = function(this1,a,b,c,d,tx,ty) {
	if(ty == null) {
		ty = 0;
	}
	if(tx == null) {
		tx = 0;
	}
	this1[0] = a;
	this1[1] = b;
	this1[2] = 0;
	this1[3] = 0;
	this1[4] = c;
	this1[5] = d;
	this1[6] = 0;
	this1[7] = 0;
	this1[8] = 0;
	this1[9] = 0;
	this1[10] = 1;
	this1[11] = 0;
	this1[12] = tx;
	this1[13] = ty;
	this1[14] = 0;
	this1[15] = 1;
}
Matrix4_Impl_.createOrtho = function(this1,left,right,bottom,top,zNear,zFar) {
	var sx = 1.0 / (right - left);
	var sy = 1.0 / (top - bottom);
	var sz = 1.0 / (zFar - zNear);
	this1[0] = 2 * sx;
	this1[1] = 0;
	this1[2] = 0;
	this1[3] = 0;
	this1[4] = 0;
	this1[5] = 2 * sy;
	this1[6] = 0;
	this1[7] = 0;
	this1[8] = 0;
	this1[9] = 0;
	this1[10] = -2 * sz;
	this1[11] = 0;
	this1[12] = -(left + right) * sx;
	this1[13] = -(bottom + top) * sy;
	this1[14] = -(zNear + zFar) * sz;
	this1[15] = 1;
}
Matrix4_Impl_.deltaTransformVector = function(this1,v,result) {
	if(result == null) {
		result = new (lime_math_Vector4().default)();
	}
	var x = v.x;
	var y = v.y;
	var z = v.z;
	result.x = x * this1[0] + y * this1[4] + z * this1[8] + this1[3];
	result.y = x * this1[1] + y * this1[5] + z * this1[9] + this1[7];
	result.z = x * this1[2] + y * this1[6] + z * this1[10] + this1[11];
	return result;
}
Matrix4_Impl_.fromMatrix3 = function(matrix3) {
	var mat = Matrix4_Impl_._new();
	Matrix4_Impl_.create2D(mat,matrix3.a,matrix3.b,matrix3.c,matrix3.d,matrix3.tx,matrix3.ty);
	return mat;
}
Matrix4_Impl_.identity = function(this1) {
	this1[0] = 1;
	this1[1] = 0;
	this1[2] = 0;
	this1[3] = 0;
	this1[4] = 0;
	this1[5] = 1;
	this1[6] = 0;
	this1[7] = 0;
	this1[8] = 0;
	this1[9] = 0;
	this1[10] = 1;
	this1[11] = 0;
	this1[12] = 0;
	this1[13] = 0;
	this1[14] = 0;
	this1[15] = 1;
}
Matrix4_Impl_.interpolate = function(thisMat,toMat,percent,result) {
	if(result == null) {
		result = Matrix4_Impl_._new();
	}
	var _g = 0;
	while(_g < 16) {
		var i = _g++;
		Matrix4_Impl_.set(result,i,Matrix4_Impl_.get(thisMat,i) + (Matrix4_Impl_.get(toMat,i) - Matrix4_Impl_.get(thisMat,i)) * percent);
	}
	return result;
}
Matrix4_Impl_.interpolateTo = function(this1,toMat,percent) {
	var _g = 0;
	while(_g < 16) {
		var i = _g++;
		this1[i] += (Matrix4_Impl_.get(toMat,i) - this1[i]) * percent;
	}
}
Matrix4_Impl_.invert = function(this1) {
	var d = Matrix4_Impl_.get_determinant(this1);
	var invertable = Math.abs(d) > 0.00000000001;
	if(invertable) {
		d = 1 / d;
		var m11 = this1[0];
		var m21 = this1[4];
		var m31 = this1[8];
		var m41 = this1[12];
		var m12 = this1[1];
		var m22 = this1[5];
		var m32 = this1[9];
		var m42 = this1[13];
		var m13 = this1[2];
		var m23 = this1[6];
		var m33 = this1[10];
		var m43 = this1[14];
		var m14 = this1[3];
		var m24 = this1[7];
		var m34 = this1[11];
		var m44 = this1[15];
		this1[0] = d * (m22 * (m33 * m44 - m43 * m34) - m32 * (m23 * m44 - m43 * m24) + m42 * (m23 * m34 - m33 * m24));
		this1[1] = -d * (m12 * (m33 * m44 - m43 * m34) - m32 * (m13 * m44 - m43 * m14) + m42 * (m13 * m34 - m33 * m14));
		this1[2] = d * (m12 * (m23 * m44 - m43 * m24) - m22 * (m13 * m44 - m43 * m14) + m42 * (m13 * m24 - m23 * m14));
		this1[3] = -d * (m12 * (m23 * m34 - m33 * m24) - m22 * (m13 * m34 - m33 * m14) + m32 * (m13 * m24 - m23 * m14));
		this1[4] = -d * (m21 * (m33 * m44 - m43 * m34) - m31 * (m23 * m44 - m43 * m24) + m41 * (m23 * m34 - m33 * m24));
		this1[5] = d * (m11 * (m33 * m44 - m43 * m34) - m31 * (m13 * m44 - m43 * m14) + m41 * (m13 * m34 - m33 * m14));
		this1[6] = -d * (m11 * (m23 * m44 - m43 * m24) - m21 * (m13 * m44 - m43 * m14) + m41 * (m13 * m24 - m23 * m14));
		this1[7] = d * (m11 * (m23 * m34 - m33 * m24) - m21 * (m13 * m34 - m33 * m14) + m31 * (m13 * m24 - m23 * m14));
		this1[8] = d * (m21 * (m32 * m44 - m42 * m34) - m31 * (m22 * m44 - m42 * m24) + m41 * (m22 * m34 - m32 * m24));
		this1[9] = -d * (m11 * (m32 * m44 - m42 * m34) - m31 * (m12 * m44 - m42 * m14) + m41 * (m12 * m34 - m32 * m14));
		this1[10] = d * (m11 * (m22 * m44 - m42 * m24) - m21 * (m12 * m44 - m42 * m14) + m41 * (m12 * m24 - m22 * m14));
		this1[11] = -d * (m11 * (m22 * m34 - m32 * m24) - m21 * (m12 * m34 - m32 * m14) + m31 * (m12 * m24 - m22 * m14));
		this1[12] = -d * (m21 * (m32 * m43 - m42 * m33) - m31 * (m22 * m43 - m42 * m23) + m41 * (m22 * m33 - m32 * m23));
		this1[13] = d * (m11 * (m32 * m43 - m42 * m33) - m31 * (m12 * m43 - m42 * m13) + m41 * (m12 * m33 - m32 * m13));
		this1[14] = -d * (m11 * (m22 * m43 - m42 * m23) - m21 * (m12 * m43 - m42 * m13) + m41 * (m12 * m23 - m22 * m13));
		this1[15] = d * (m11 * (m22 * m33 - m32 * m23) - m21 * (m12 * m33 - m32 * m13) + m31 * (m12 * m23 - m22 * m13));
	}
	return invertable;
}
Matrix4_Impl_.pointAt = function(this1,pos,at,up) {
	if(at == null) {
		at = new (lime_math_Vector4().default)(0,0,1);
	}
	if(up == null) {
		up = new (lime_math_Vector4().default)(0,1,0);
	}
	var dir = pos.subtract(at);
	var vup = up.clone();
	dir.normalize();
	vup.normalize();
	var dir2 = dir.clone();
	dir2.scaleBy(vup.dotProduct(dir));
	vup = vup.subtract(dir2);
	if(vup.get_length() > 0) {
		vup.normalize();
	} else if(dir.x != 0) {
		vup = new (lime_math_Vector4().default)(-dir.y,dir.x,0);
	} else {
		vup = new (lime_math_Vector4().default)(1,0,0);
	}
	var right = vup.crossProduct(dir);
	right.normalize();
	this1[0] = right.x;
	this1[4] = right.y;
	this1[8] = right.z;
	this1[12] = 0.0;
	this1[1] = vup.x;
	this1[5] = vup.y;
	this1[9] = vup.z;
	this1[13] = 0.0;
	this1[2] = dir.x;
	this1[6] = dir.y;
	this1[10] = dir.z;
	this1[14] = 0.0;
	this1[3] = pos.x;
	this1[7] = pos.y;
	this1[11] = pos.z;
	this1[15] = 1.0;
}
Matrix4_Impl_.prepend = function(this1,rhs) {
	var m111 = Matrix4_Impl_.get(rhs,0);
	var m121 = Matrix4_Impl_.get(rhs,4);
	var m131 = Matrix4_Impl_.get(rhs,8);
	var m141 = Matrix4_Impl_.get(rhs,12);
	var m112 = Matrix4_Impl_.get(rhs,1);
	var m122 = Matrix4_Impl_.get(rhs,5);
	var m132 = Matrix4_Impl_.get(rhs,9);
	var m142 = Matrix4_Impl_.get(rhs,13);
	var m113 = Matrix4_Impl_.get(rhs,2);
	var m123 = Matrix4_Impl_.get(rhs,6);
	var m133 = Matrix4_Impl_.get(rhs,10);
	var m143 = Matrix4_Impl_.get(rhs,14);
	var m114 = Matrix4_Impl_.get(rhs,3);
	var m124 = Matrix4_Impl_.get(rhs,7);
	var m134 = Matrix4_Impl_.get(rhs,11);
	var m144 = Matrix4_Impl_.get(rhs,15);
	var m211 = this1[0];
	var m221 = this1[4];
	var m231 = this1[8];
	var m241 = this1[12];
	var m212 = this1[1];
	var m222 = this1[5];
	var m232 = this1[9];
	var m242 = this1[13];
	var m213 = this1[2];
	var m223 = this1[6];
	var m233 = this1[10];
	var m243 = this1[14];
	var m214 = this1[3];
	var m224 = this1[7];
	var m234 = this1[11];
	var m244 = this1[15];
	this1[0] = m111 * m211 + m112 * m221 + m113 * m231 + m114 * m241;
	this1[1] = m111 * m212 + m112 * m222 + m113 * m232 + m114 * m242;
	this1[2] = m111 * m213 + m112 * m223 + m113 * m233 + m114 * m243;
	this1[3] = m111 * m214 + m112 * m224 + m113 * m234 + m114 * m244;
	this1[4] = m121 * m211 + m122 * m221 + m123 * m231 + m124 * m241;
	this1[5] = m121 * m212 + m122 * m222 + m123 * m232 + m124 * m242;
	this1[6] = m121 * m213 + m122 * m223 + m123 * m233 + m124 * m243;
	this1[7] = m121 * m214 + m122 * m224 + m123 * m234 + m124 * m244;
	this1[8] = m131 * m211 + m132 * m221 + m133 * m231 + m134 * m241;
	this1[9] = m131 * m212 + m132 * m222 + m133 * m232 + m134 * m242;
	this1[10] = m131 * m213 + m132 * m223 + m133 * m233 + m134 * m243;
	this1[11] = m131 * m214 + m132 * m224 + m133 * m234 + m134 * m244;
	this1[12] = m141 * m211 + m142 * m221 + m143 * m231 + m144 * m241;
	this1[13] = m141 * m212 + m142 * m222 + m143 * m232 + m144 * m242;
	this1[14] = m141 * m213 + m142 * m223 + m143 * m233 + m144 * m243;
	this1[15] = m141 * m214 + m142 * m224 + m143 * m234 + m144 * m244;
}
Matrix4_Impl_.prependRotation = function(this1,degrees,axis,pivotPoint) {
	var m = Matrix4_Impl_.__getAxisRotation(this1,axis.x,axis.y,axis.z,degrees);
	if(pivotPoint != null) {
		var p = pivotPoint;
		Matrix4_Impl_.appendTranslation(m,p.x,p.y,p.z);
	}
	Matrix4_Impl_.prepend(this1,m);
}
Matrix4_Impl_.prependScale = function(this1,xScale,yScale,zScale) {
	var elements = null;
	var array = [xScale,0.0,0.0,0.0,0.0,yScale,0.0,0.0,0.0,0.0,zScale,0.0,0.0,0.0,0.0,1.0];
	var view = null;
	var buffer = null;
	var len = null;
	var this2;
	if(elements != null) {
		this2 = new Float32Array(elements);
	} else if(array != null) {
		this2 = new Float32Array(array);
	} else if(view != null) {
		this2 = new Float32Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this2 = new Float32Array(buffer,0);
		} else {
			this2 = new Float32Array(buffer,0,len);
		}
	} else {
		this2 = null;
	}
	Matrix4_Impl_.prepend(this1,Matrix4_Impl_._new(this2));
}
Matrix4_Impl_.prependTranslation = function(this1,x,y,z) {
	var m = Matrix4_Impl_._new();
	Matrix4_Impl_.set_position(m,new (lime_math_Vector4().default)(x,y,z));
	Matrix4_Impl_.prepend(this1,m);
}
Matrix4_Impl_.transformVector = function(this1,v,result) {
	if(result == null) {
		result = new (lime_math_Vector4().default)();
	}
	var x = v.x;
	var y = v.y;
	var z = v.z;
	result.x = x * this1[0] + y * this1[4] + z * this1[8] + this1[12];
	result.y = x * this1[1] + y * this1[5] + z * this1[9] + this1[13];
	result.z = x * this1[2] + y * this1[6] + z * this1[10] + this1[14];
	result.w = x * this1[3] + y * this1[7] + z * this1[11] + this1[15];
	return result;
}
Matrix4_Impl_.transformVectors = function(this1,ain,aout) {
	var i = 0;
	var x;
	var y;
	var z;
	while(i + 3 <= ain.length) {
		x = ain[i];
		y = ain[i + 1];
		z = ain[i + 2];
		aout[i] = x * this1[0] + y * this1[4] + z * this1[8] + this1[12];
		aout[i + 1] = x * this1[1] + y * this1[5] + z * this1[9] + this1[13];
		aout[i + 2] = x * this1[2] + y * this1[6] + z * this1[10] + this1[14];
		i += 3;
	}
}
Matrix4_Impl_.transpose = function(this1) {
	var temp = this1[1];
	this1[1] = this1[4];
	this1[4] = temp;
	var temp1 = this1[2];
	this1[2] = this1[8];
	this1[8] = temp1;
	var temp2 = this1[3];
	this1[3] = this1[12];
	this1[12] = temp2;
	var temp3 = this1[6];
	this1[6] = this1[9];
	this1[9] = temp3;
	var temp4 = this1[7];
	this1[7] = this1[13];
	this1[13] = temp4;
	var temp5 = this1[11];
	this1[11] = this1[14];
	this1[14] = temp5;
}
Matrix4_Impl_.__getAxisRotation = function(this1,x,y,z,degrees) {
	var m = Matrix4_Impl_._new();
	var a1 = new (lime_math_Vector4().default)(x,y,z);
	var rad = -degrees * (Math.PI / 180);
	var c = Math.cos(rad);
	var s = Math.sin(rad);
	var t = 1.0 - c;
	Matrix4_Impl_.set(m,0,c + a1.x * a1.x * t);
	Matrix4_Impl_.set(m,5,c + a1.y * a1.y * t);
	Matrix4_Impl_.set(m,10,c + a1.z * a1.z * t);
	var tmp1 = a1.x * a1.y * t;
	var tmp2 = a1.z * s;
	Matrix4_Impl_.set(m,4,tmp1 + tmp2);
	Matrix4_Impl_.set(m,1,tmp1 - tmp2);
	tmp1 = a1.x * a1.z * t;
	tmp2 = a1.y * s;
	Matrix4_Impl_.set(m,8,tmp1 - tmp2);
	Matrix4_Impl_.set(m,2,tmp1 + tmp2);
	tmp1 = a1.y * a1.z * t;
	tmp2 = a1.x * s;
	Matrix4_Impl_.set(m,9,tmp1 + tmp2);
	Matrix4_Impl_.set(m,6,tmp1 - tmp2);
	return m;
}
Matrix4_Impl_.__swap = function(this1,a,b) {
	var temp = this1[a];
	this1[a] = this1[b];
	this1[b] = temp;
}
Matrix4_Impl_.get_determinant = function(this1) {
	return (this1[0] * this1[5] - this1[4] * this1[1]) * (this1[10] * this1[15] - this1[14] * this1[11]) - (this1[0] * this1[9] - this1[8] * this1[1]) * (this1[6] * this1[15] - this1[14] * this1[7]) + (this1[0] * this1[13] - this1[12] * this1[1]) * (this1[6] * this1[11] - this1[10] * this1[7]) + (this1[4] * this1[9] - this1[8] * this1[5]) * (this1[2] * this1[15] - this1[14] * this1[3]) - (this1[4] * this1[13] - this1[12] * this1[5]) * (this1[2] * this1[11] - this1[10] * this1[3]) + (this1[8] * this1[13] - this1[12] * this1[9]) * (this1[2] * this1[7] - this1[6] * this1[3]);
}
Matrix4_Impl_.get_position = function(this1) {
	return new (lime_math_Vector4().default)(this1[12],this1[13],this1[14]);
}
Matrix4_Impl_.set_position = function(this1,val) {
	this1[12] = val.x;
	this1[13] = val.y;
	this1[14] = val.z;
	return val;
}
Matrix4_Impl_.get = function(this1,index) {
	return this1[index];
}
Matrix4_Impl_.set = function(this1,index,value) {
	this1[index] = value;
	return value;
}
Matrix4_Impl_.__identity = [1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0]

// Export

exports.default = Matrix4_Impl_;