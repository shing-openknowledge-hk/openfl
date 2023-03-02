// Class: openfl.geom.Matrix3D

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function openfl__$Vector_Vector_$Impl_$() {return require("./../../openfl/_Vector/Vector_Impl_");}
function openfl_VectorData() {return require("./../../openfl/VectorData");}
function openfl_geom_Vector3D() {return require("./../../openfl/geom/Vector3D");}

// Constructor

var Matrix3D = function(v) {
	if(v != null && v.get_length() == 16) {
		this.rawData = (openfl_VectorData().default).ofArray(Array.prototype.concat.call(v,null));
	} else {
		this.rawData = (openfl__$Vector_Vector_$Impl_$().default)._new(null,null,[1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0]);
	}
}

// Meta

Matrix3D.__name__ = "openfl.geom.Matrix3D";
Matrix3D.__isInterface__ = false;
Matrix3D.prototype = {
	append: function(lhs) {
		var m111 = this.rawData[0];
		var m121 = this.rawData[4];
		var m131 = this.rawData[8];
		var m141 = this.rawData[12];
		var m112 = this.rawData[1];
		var m122 = this.rawData[5];
		var m132 = this.rawData[9];
		var m142 = this.rawData[13];
		var m113 = this.rawData[2];
		var m123 = this.rawData[6];
		var m133 = this.rawData[10];
		var m143 = this.rawData[14];
		var m114 = this.rawData[3];
		var m124 = this.rawData[7];
		var m134 = this.rawData[11];
		var m144 = this.rawData[15];
		var m211 = lhs.rawData[0];
		var m221 = lhs.rawData[4];
		var m231 = lhs.rawData[8];
		var m241 = lhs.rawData[12];
		var m212 = lhs.rawData[1];
		var m222 = lhs.rawData[5];
		var m232 = lhs.rawData[9];
		var m242 = lhs.rawData[13];
		var m213 = lhs.rawData[2];
		var m223 = lhs.rawData[6];
		var m233 = lhs.rawData[10];
		var m243 = lhs.rawData[14];
		var m214 = lhs.rawData[3];
		var m224 = lhs.rawData[7];
		var m234 = lhs.rawData[11];
		var m244 = lhs.rawData[15];
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,0,m111 * m211 + m112 * m221 + m113 * m231 + m114 * m241);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,1,m111 * m212 + m112 * m222 + m113 * m232 + m114 * m242);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,2,m111 * m213 + m112 * m223 + m113 * m233 + m114 * m243);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,3,m111 * m214 + m112 * m224 + m113 * m234 + m114 * m244);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,4,m121 * m211 + m122 * m221 + m123 * m231 + m124 * m241);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,5,m121 * m212 + m122 * m222 + m123 * m232 + m124 * m242);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,6,m121 * m213 + m122 * m223 + m123 * m233 + m124 * m243);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,7,m121 * m214 + m122 * m224 + m123 * m234 + m124 * m244);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,8,m131 * m211 + m132 * m221 + m133 * m231 + m134 * m241);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,9,m131 * m212 + m132 * m222 + m133 * m232 + m134 * m242);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,10,m131 * m213 + m132 * m223 + m133 * m233 + m134 * m243);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,11,m131 * m214 + m132 * m224 + m133 * m234 + m134 * m244);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,12,m141 * m211 + m142 * m221 + m143 * m231 + m144 * m241);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,13,m141 * m212 + m142 * m222 + m143 * m232 + m144 * m242);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,14,m141 * m213 + m142 * m223 + m143 * m233 + m144 * m243);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,15,m141 * m214 + m142 * m224 + m143 * m234 + m144 * m244);
	},
	appendRotation: function(degrees,axis,pivotPoint) {
		var tz = 0;
		var ty = tz;
		var tx = ty;
		if(pivotPoint != null) {
			tx = pivotPoint.x;
			ty = pivotPoint.y;
			tz = pivotPoint.z;
		}
		var radian = degrees * Math.PI / 180;
		var cos = Math.cos(radian);
		var sin = Math.sin(radian);
		var x = axis.x;
		var y = axis.y;
		var z = axis.z;
		var x2 = x * x;
		var y2 = y * y;
		var z2 = z * z;
		var ls = x2 + y2 + z2;
		if(ls != 0) {
			var l = Math.sqrt(ls);
			x /= l;
			y /= l;
			z /= l;
			x2 /= ls;
			y2 /= ls;
			z2 /= ls;
		}
		var ccos = 1 - cos;
		var m = new Matrix3D();
		var d = m.rawData;
		(openfl__$Vector_Vector_$Impl_$().default).set(d,0,x2 + (y2 + z2) * cos);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,1,x * y * ccos + z * sin);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,2,x * z * ccos - y * sin);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,4,x * y * ccos - z * sin);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,5,y2 + (x2 + z2) * cos);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,6,y * z * ccos + x * sin);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,8,x * z * ccos + y * sin);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,9,y * z * ccos - x * sin);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,10,z2 + (x2 + y2) * cos);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,12,(tx * (y2 + z2) - x * (ty * y + tz * z)) * ccos + (ty * z - tz * y) * sin);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,13,(ty * (x2 + z2) - y * (tx * x + tz * z)) * ccos + (tz * x - tx * z) * sin);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,14,(tz * (x2 + y2) - z * (tx * x + ty * y)) * ccos + (tx * y - ty * x) * sin);
		this.append(m);
	},
	appendScale: function(xScale,yScale,zScale) {
		this.append(new Matrix3D((openfl__$Vector_Vector_$Impl_$().default)._new(null,null,[xScale,0.0,0.0,0.0,0.0,yScale,0.0,0.0,0.0,0.0,zScale,0.0,0.0,0.0,0.0,1.0])));
	},
	appendTranslation: function(x,y,z) {
		var _g = this.rawData;
		(openfl__$Vector_Vector_$Impl_$().default).set(_g,12,_g[12] + x);
		var _g1 = this.rawData;
		(openfl__$Vector_Vector_$Impl_$().default).set(_g1,13,_g1[13] + y);
		var _g2 = this.rawData;
		(openfl__$Vector_Vector_$Impl_$().default).set(_g2,14,_g2[14] + z);
	},
	clone: function() {
		return new Matrix3D((openfl_VectorData().default).ofArray(this.rawData));
	},
	copyColumnFrom: function(column,vector3D) {
		switch(column) {
		case 0:
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,0,vector3D.x);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,1,vector3D.y);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,2,vector3D.z);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,3,vector3D.w);
			break;
		case 1:
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,4,vector3D.x);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,5,vector3D.y);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,6,vector3D.z);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,7,vector3D.w);
			break;
		case 2:
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,8,vector3D.x);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,9,vector3D.y);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,10,vector3D.z);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,11,vector3D.w);
			break;
		case 3:
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,12,vector3D.x);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,13,vector3D.y);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,14,vector3D.z);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,15,vector3D.w);
			break;
		default:
		}
	},
	copyColumnTo: function(column,vector3D) {
		switch(column) {
		case 0:
			vector3D.x = this.rawData[0];
			vector3D.y = this.rawData[1];
			vector3D.z = this.rawData[2];
			vector3D.w = this.rawData[3];
			break;
		case 1:
			vector3D.x = this.rawData[4];
			vector3D.y = this.rawData[5];
			vector3D.z = this.rawData[6];
			vector3D.w = this.rawData[7];
			break;
		case 2:
			vector3D.x = this.rawData[8];
			vector3D.y = this.rawData[9];
			vector3D.z = this.rawData[10];
			vector3D.w = this.rawData[11];
			break;
		case 3:
			vector3D.x = this.rawData[12];
			vector3D.y = this.rawData[13];
			vector3D.z = this.rawData[14];
			vector3D.w = this.rawData[15];
			break;
		default:
		}
	},
	copyFrom: function(other) {
		this.rawData = (openfl_VectorData().default).ofArray(other.rawData);
	},
	copyRawDataFrom: function(vector,index,transpose) {
		if(transpose == null) {
			transpose = false;
		}
		if(index == null) {
			index = 0;
		}
		if(transpose) {
			this.transpose();
		}
		var length = vector.get_length() - index;
		var _g = 0;
		var _g1 = length;
		while(_g < _g1) {
			var i = _g++;
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,i,vector[i + index]);
		}
		if(transpose) {
			this.transpose();
		}
	},
	copyRawDataTo: function(vector,index,transpose) {
		if(transpose == null) {
			transpose = false;
		}
		if(index == null) {
			index = 0;
		}
		if(transpose) {
			this.transpose();
		}
		var _g = 0;
		var _g1 = this.rawData.get_length();
		while(_g < _g1) {
			var i = _g++;
			(openfl__$Vector_Vector_$Impl_$().default).set(vector,i + index,this.rawData[i]);
		}
		if(transpose) {
			this.transpose();
		}
	},
	copyRowFrom: function(row,vector3D) {
		switch(row) {
		case 0:
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,0,vector3D.x);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,4,vector3D.y);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,8,vector3D.z);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,12,vector3D.w);
			break;
		case 1:
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,1,vector3D.x);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,5,vector3D.y);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,9,vector3D.z);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,13,vector3D.w);
			break;
		case 2:
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,2,vector3D.x);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,6,vector3D.y);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,10,vector3D.z);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,14,vector3D.w);
			break;
		case 3:
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,3,vector3D.x);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,7,vector3D.y);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,11,vector3D.z);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,15,vector3D.w);
			break;
		default:
		}
	},
	copyRowTo: function(row,vector3D) {
		switch(row) {
		case 0:
			vector3D.x = this.rawData[0];
			vector3D.y = this.rawData[4];
			vector3D.z = this.rawData[8];
			vector3D.w = this.rawData[12];
			break;
		case 1:
			vector3D.x = this.rawData[1];
			vector3D.y = this.rawData[5];
			vector3D.z = this.rawData[9];
			vector3D.w = this.rawData[13];
			break;
		case 2:
			vector3D.x = this.rawData[2];
			vector3D.y = this.rawData[6];
			vector3D.z = this.rawData[10];
			vector3D.w = this.rawData[14];
			break;
		case 3:
			vector3D.x = this.rawData[3];
			vector3D.y = this.rawData[7];
			vector3D.z = this.rawData[11];
			vector3D.w = this.rawData[15];
			break;
		default:
		}
	},
	copyToMatrix3D: function(other) {
		other.rawData = (openfl_VectorData().default).ofArray(this.rawData);
	},
	decompose: function(orientationStyle) {
		if(orientationStyle == null) {
			orientationStyle = "eulerAngles";
		}
		var vec = (openfl__$Vector_Vector_$Impl_$().default)._new();
		var m = this.clone();
		var mr = (openfl_VectorData().default).ofArray(m.rawData);
		var pos = new (openfl_geom_Vector3D().default)(mr[12],mr[13],mr[14]);
		(openfl__$Vector_Vector_$Impl_$().default).set(mr,12,0);
		(openfl__$Vector_Vector_$Impl_$().default).set(mr,13,0);
		(openfl__$Vector_Vector_$Impl_$().default).set(mr,14,0);
		var scale = new (openfl_geom_Vector3D().default)();
		scale.x = Math.sqrt(mr[0] * mr[0] + mr[1] * mr[1] + mr[2] * mr[2]);
		scale.y = Math.sqrt(mr[4] * mr[4] + mr[5] * mr[5] + mr[6] * mr[6]);
		scale.z = Math.sqrt(mr[8] * mr[8] + mr[9] * mr[9] + mr[10] * mr[10]);
		if(mr[0] * (mr[5] * mr[10] - mr[6] * mr[9]) - mr[1] * (mr[4] * mr[10] - mr[6] * mr[8]) + mr[2] * (mr[4] * mr[9] - mr[5] * mr[8]) < 0) {
			scale.z = -scale.z;
		}
		var _g = mr;
		(openfl__$Vector_Vector_$Impl_$().default).set(_g,0,_g[0] / scale.x);
		var _g1 = mr;
		(openfl__$Vector_Vector_$Impl_$().default).set(_g1,1,_g1[1] / scale.x);
		var _g2 = mr;
		(openfl__$Vector_Vector_$Impl_$().default).set(_g2,2,_g2[2] / scale.x);
		var _g3 = mr;
		(openfl__$Vector_Vector_$Impl_$().default).set(_g3,4,_g3[4] / scale.y);
		var _g4 = mr;
		(openfl__$Vector_Vector_$Impl_$().default).set(_g4,5,_g4[5] / scale.y);
		var _g5 = mr;
		(openfl__$Vector_Vector_$Impl_$().default).set(_g5,6,_g5[6] / scale.y);
		var _g6 = mr;
		(openfl__$Vector_Vector_$Impl_$().default).set(_g6,8,_g6[8] / scale.z);
		var _g7 = mr;
		(openfl__$Vector_Vector_$Impl_$().default).set(_g7,9,_g7[9] / scale.z);
		var _g8 = mr;
		(openfl__$Vector_Vector_$Impl_$().default).set(_g8,10,_g8[10] / scale.z);
		var rot = new (openfl_geom_Vector3D().default)();
		switch(orientationStyle) {
		case "axisAngle":
			rot.w = Math.acos((mr[0] + mr[5] + mr[10] - 1) / 2);
			var len = Math.sqrt((mr[6] - mr[9]) * (mr[6] - mr[9]) + (mr[8] - mr[2]) * (mr[8] - mr[2]) + (mr[1] - mr[4]) * (mr[1] - mr[4]));
			if(len != 0) {
				rot.x = (mr[6] - mr[9]) / len;
				rot.y = (mr[8] - mr[2]) / len;
				rot.z = (mr[1] - mr[4]) / len;
			} else {
				rot.x = rot.y = rot.z = 0;
			}
			break;
		case "eulerAngles":
			rot.y = Math.asin(-mr[2]);
			if(mr[2] != 1 && mr[2] != -1) {
				rot.x = Math.atan2(mr[6],mr[10]);
				rot.z = Math.atan2(mr[1],mr[0]);
			} else {
				rot.z = 0;
				rot.x = Math.atan2(mr[4],mr[5]);
			}
			break;
		case "quaternion":
			var tr = mr[0] + mr[5] + mr[10];
			if(tr > 0) {
				rot.w = Math.sqrt(1 + tr) / 2;
				rot.x = (mr[6] - mr[9]) / (4 * rot.w);
				rot.y = (mr[8] - mr[2]) / (4 * rot.w);
				rot.z = (mr[1] - mr[4]) / (4 * rot.w);
			} else if(mr[0] > mr[5] && mr[0] > mr[10]) {
				rot.x = Math.sqrt(1 + mr[0] - mr[5] - mr[10]) / 2;
				rot.w = (mr[6] - mr[9]) / (4 * rot.x);
				rot.y = (mr[1] + mr[4]) / (4 * rot.x);
				rot.z = (mr[8] + mr[2]) / (4 * rot.x);
			} else if(mr[5] > mr[10]) {
				rot.y = Math.sqrt(1 + mr[5] - mr[0] - mr[10]) / 2;
				rot.x = (mr[1] + mr[4]) / (4 * rot.y);
				rot.w = (mr[8] - mr[2]) / (4 * rot.y);
				rot.z = (mr[6] + mr[9]) / (4 * rot.y);
			} else {
				rot.z = Math.sqrt(1 + mr[10] - mr[0] - mr[5]) / 2;
				rot.x = (mr[8] + mr[2]) / (4 * rot.z);
				rot.y = (mr[6] + mr[9]) / (4 * rot.z);
				rot.w = (mr[1] - mr[4]) / (4 * rot.z);
			}
			break;
		}
		(openfl__$Vector_Vector_$Impl_$().default).push(vec,pos);
		(openfl__$Vector_Vector_$Impl_$().default).push(vec,rot);
		(openfl__$Vector_Vector_$Impl_$().default).push(vec,scale);
		return vec;
	},
	deltaTransformVector: function(v) {
		var x = v.x;
		var y = v.y;
		var z = v.z;
		return new (openfl_geom_Vector3D().default)(x * this.rawData[0] + y * this.rawData[4] + z * this.rawData[8],x * this.rawData[1] + y * this.rawData[5] + z * this.rawData[9],x * this.rawData[2] + y * this.rawData[6] + z * this.rawData[10],x * this.rawData[3] + y * this.rawData[7] + z * this.rawData[11]);
	},
	identity: function() {
		this.rawData = (openfl__$Vector_Vector_$Impl_$().default)._new(null,null,[1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0]);
	},
	interpolateTo: function(toMat,percent) {
		var _g = 0;
		while(_g < 16) {
			var i = _g++;
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,i,this.rawData[i] + (toMat.rawData[i] - this.rawData[i]) * percent);
		}
	},
	invert: function() {
		var d = this.get_determinant();
		var invertable = Math.abs(d) > 0.00000000001;
		if(invertable) {
			d = 1 / d;
			var m11 = this.rawData[0];
			var m21 = this.rawData[4];
			var m31 = this.rawData[8];
			var m41 = this.rawData[12];
			var m12 = this.rawData[1];
			var m22 = this.rawData[5];
			var m32 = this.rawData[9];
			var m42 = this.rawData[13];
			var m13 = this.rawData[2];
			var m23 = this.rawData[6];
			var m33 = this.rawData[10];
			var m43 = this.rawData[14];
			var m14 = this.rawData[3];
			var m24 = this.rawData[7];
			var m34 = this.rawData[11];
			var m44 = this.rawData[15];
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,0,d * (m22 * (m33 * m44 - m43 * m34) - m32 * (m23 * m44 - m43 * m24) + m42 * (m23 * m34 - m33 * m24)));
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,1,-d * (m12 * (m33 * m44 - m43 * m34) - m32 * (m13 * m44 - m43 * m14) + m42 * (m13 * m34 - m33 * m14)));
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,2,d * (m12 * (m23 * m44 - m43 * m24) - m22 * (m13 * m44 - m43 * m14) + m42 * (m13 * m24 - m23 * m14)));
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,3,-d * (m12 * (m23 * m34 - m33 * m24) - m22 * (m13 * m34 - m33 * m14) + m32 * (m13 * m24 - m23 * m14)));
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,4,-d * (m21 * (m33 * m44 - m43 * m34) - m31 * (m23 * m44 - m43 * m24) + m41 * (m23 * m34 - m33 * m24)));
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,5,d * (m11 * (m33 * m44 - m43 * m34) - m31 * (m13 * m44 - m43 * m14) + m41 * (m13 * m34 - m33 * m14)));
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,6,-d * (m11 * (m23 * m44 - m43 * m24) - m21 * (m13 * m44 - m43 * m14) + m41 * (m13 * m24 - m23 * m14)));
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,7,d * (m11 * (m23 * m34 - m33 * m24) - m21 * (m13 * m34 - m33 * m14) + m31 * (m13 * m24 - m23 * m14)));
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,8,d * (m21 * (m32 * m44 - m42 * m34) - m31 * (m22 * m44 - m42 * m24) + m41 * (m22 * m34 - m32 * m24)));
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,9,-d * (m11 * (m32 * m44 - m42 * m34) - m31 * (m12 * m44 - m42 * m14) + m41 * (m12 * m34 - m32 * m14)));
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,10,d * (m11 * (m22 * m44 - m42 * m24) - m21 * (m12 * m44 - m42 * m14) + m41 * (m12 * m24 - m22 * m14)));
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,11,-d * (m11 * (m22 * m34 - m32 * m24) - m21 * (m12 * m34 - m32 * m14) + m31 * (m12 * m24 - m22 * m14)));
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,12,-d * (m21 * (m32 * m43 - m42 * m33) - m31 * (m22 * m43 - m42 * m23) + m41 * (m22 * m33 - m32 * m23)));
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,13,d * (m11 * (m32 * m43 - m42 * m33) - m31 * (m12 * m43 - m42 * m13) + m41 * (m12 * m33 - m32 * m13)));
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,14,-d * (m11 * (m22 * m43 - m42 * m23) - m21 * (m12 * m43 - m42 * m13) + m41 * (m12 * m23 - m22 * m13)));
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,15,d * (m11 * (m22 * m33 - m32 * m23) - m21 * (m12 * m33 - m32 * m13) + m31 * (m12 * m23 - m22 * m13)));
		}
		return invertable;
	},
	pointAt: function(pos,at,up) {
		if(at == null) {
			at = new (openfl_geom_Vector3D().default)(0,0,-1);
		}
		if(up == null) {
			up = new (openfl_geom_Vector3D().default)(0,-1,0);
		}
		var dir = at.subtract(pos);
		var vup = up.clone();
		dir.normalize();
		vup.normalize();
		var dir2 = dir.clone();
		dir2.scaleBy(vup.dotProduct(dir));
		vup = vup.subtract(dir2);
		if(vup.get_length() > 0) {
			vup.normalize();
		} else if(dir.x != 0) {
			vup = new (openfl_geom_Vector3D().default)(-dir.y,dir.x,0);
		} else {
			vup = new (openfl_geom_Vector3D().default)(1,0,0);
		}
		var right = vup.crossProduct(dir);
		right.normalize();
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,0,right.x);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,4,right.y);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,8,right.z);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,12,0.0);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,1,vup.x);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,5,vup.y);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,9,vup.z);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,13,0.0);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,2,dir.x);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,6,dir.y);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,10,dir.z);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,14,0.0);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,3,pos.x);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,7,pos.y);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,11,pos.z);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,15,1.0);
	},
	prepend: function(rhs) {
		var m111 = rhs.rawData[0];
		var m121 = rhs.rawData[4];
		var m131 = rhs.rawData[8];
		var m141 = rhs.rawData[12];
		var m112 = rhs.rawData[1];
		var m122 = rhs.rawData[5];
		var m132 = rhs.rawData[9];
		var m142 = rhs.rawData[13];
		var m113 = rhs.rawData[2];
		var m123 = rhs.rawData[6];
		var m133 = rhs.rawData[10];
		var m143 = rhs.rawData[14];
		var m114 = rhs.rawData[3];
		var m124 = rhs.rawData[7];
		var m134 = rhs.rawData[11];
		var m144 = rhs.rawData[15];
		var m211 = this.rawData[0];
		var m221 = this.rawData[4];
		var m231 = this.rawData[8];
		var m241 = this.rawData[12];
		var m212 = this.rawData[1];
		var m222 = this.rawData[5];
		var m232 = this.rawData[9];
		var m242 = this.rawData[13];
		var m213 = this.rawData[2];
		var m223 = this.rawData[6];
		var m233 = this.rawData[10];
		var m243 = this.rawData[14];
		var m214 = this.rawData[3];
		var m224 = this.rawData[7];
		var m234 = this.rawData[11];
		var m244 = this.rawData[15];
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,0,m111 * m211 + m112 * m221 + m113 * m231 + m114 * m241);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,1,m111 * m212 + m112 * m222 + m113 * m232 + m114 * m242);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,2,m111 * m213 + m112 * m223 + m113 * m233 + m114 * m243);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,3,m111 * m214 + m112 * m224 + m113 * m234 + m114 * m244);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,4,m121 * m211 + m122 * m221 + m123 * m231 + m124 * m241);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,5,m121 * m212 + m122 * m222 + m123 * m232 + m124 * m242);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,6,m121 * m213 + m122 * m223 + m123 * m233 + m124 * m243);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,7,m121 * m214 + m122 * m224 + m123 * m234 + m124 * m244);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,8,m131 * m211 + m132 * m221 + m133 * m231 + m134 * m241);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,9,m131 * m212 + m132 * m222 + m133 * m232 + m134 * m242);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,10,m131 * m213 + m132 * m223 + m133 * m233 + m134 * m243);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,11,m131 * m214 + m132 * m224 + m133 * m234 + m134 * m244);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,12,m141 * m211 + m142 * m221 + m143 * m231 + m144 * m241);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,13,m141 * m212 + m142 * m222 + m143 * m232 + m144 * m242);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,14,m141 * m213 + m142 * m223 + m143 * m233 + m144 * m243);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,15,m141 * m214 + m142 * m224 + m143 * m234 + m144 * m244);
	},
	prependRotation: function(degrees,axis,pivotPoint) {
		var tz = 0;
		var ty = tz;
		var tx = ty;
		if(pivotPoint != null) {
			tx = pivotPoint.x;
			ty = pivotPoint.y;
			tz = pivotPoint.z;
		}
		var radian = degrees * Math.PI / 180;
		var cos = Math.cos(radian);
		var sin = Math.sin(radian);
		var x = axis.x;
		var y = axis.y;
		var z = axis.z;
		var x2 = x * x;
		var y2 = y * y;
		var z2 = z * z;
		var ls = x2 + y2 + z2;
		if(ls != 0) {
			var l = Math.sqrt(ls);
			x /= l;
			y /= l;
			z /= l;
			x2 /= ls;
			y2 /= ls;
			z2 /= ls;
		}
		var ccos = 1 - cos;
		var m = new Matrix3D();
		var d = m.rawData;
		(openfl__$Vector_Vector_$Impl_$().default).set(d,0,x2 + (y2 + z2) * cos);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,1,x * y * ccos + z * sin);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,2,x * z * ccos - y * sin);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,4,x * y * ccos - z * sin);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,5,y2 + (x2 + z2) * cos);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,6,y * z * ccos + x * sin);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,8,x * z * ccos + y * sin);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,9,y * z * ccos - x * sin);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,10,z2 + (x2 + y2) * cos);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,12,(tx * (y2 + z2) - x * (ty * y + tz * z)) * ccos + (ty * z - tz * y) * sin);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,13,(ty * (x2 + z2) - y * (tx * x + tz * z)) * ccos + (tz * x - tx * z) * sin);
		(openfl__$Vector_Vector_$Impl_$().default).set(d,14,(tz * (x2 + y2) - z * (tx * x + ty * y)) * ccos + (tx * y - ty * x) * sin);
		this.prepend(m);
	},
	prependScale: function(xScale,yScale,zScale) {
		this.prepend(new Matrix3D((openfl__$Vector_Vector_$Impl_$().default)._new(null,null,[xScale,0.0,0.0,0.0,0.0,yScale,0.0,0.0,0.0,0.0,zScale,0.0,0.0,0.0,0.0,1.0])));
	},
	prependTranslation: function(x,y,z) {
		var m = new Matrix3D();
		m.set_position(new (openfl_geom_Vector3D().default)(x,y,z));
		this.prepend(m);
	},
	recompose: function(components,orientationStyle) {
		if(orientationStyle == null) {
			orientationStyle = "eulerAngles";
		}
		if(components.get_length() < 3 || components[2].x == 0 || components[2].y == 0 || components[2].z == 0) {
			return false;
		}
		this.identity();
		var scale = [];
		scale[0] = scale[1] = scale[2] = components[2].x;
		scale[4] = scale[5] = scale[6] = components[2].y;
		scale[8] = scale[9] = scale[10] = components[2].z;
		if(orientationStyle == "eulerAngles") {
			var cx = Math.cos(components[1].x);
			var cy = Math.cos(components[1].y);
			var cz = Math.cos(components[1].z);
			var sx = Math.sin(components[1].x);
			var sy = Math.sin(components[1].y);
			var sz = Math.sin(components[1].z);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,0,cy * cz * scale[0]);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,1,cy * sz * scale[1]);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,2,-sy * scale[2]);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,3,0);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,4,(sx * sy * cz - cx * sz) * scale[4]);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,5,(sx * sy * sz + cx * cz) * scale[5]);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,6,sx * cy * scale[6]);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,7,0);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,8,(cx * sy * cz + sx * sz) * scale[8]);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,9,(cx * sy * sz - sx * cz) * scale[9]);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,10,cx * cy * scale[10]);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,11,0);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,12,components[0].x);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,13,components[0].y);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,14,components[0].z);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,15,1);
		} else {
			var x = components[1].x;
			var y = components[1].y;
			var z = components[1].z;
			var w = components[1].w;
			if(orientationStyle == "axisAngle") {
				x *= Math.sin(w / 2);
				y *= Math.sin(w / 2);
				z *= Math.sin(w / 2);
				w = Math.cos(w / 2);
			}
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,0,(1 - 2 * y * y - 2 * z * z) * scale[0]);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,1,(2 * x * y + 2 * w * z) * scale[1]);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,2,(2 * x * z - 2 * w * y) * scale[2]);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,3,0);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,4,(2 * x * y - 2 * w * z) * scale[4]);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,5,(1 - 2 * x * x - 2 * z * z) * scale[5]);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,6,(2 * y * z + 2 * w * x) * scale[6]);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,7,0);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,8,(2 * x * z + 2 * w * y) * scale[8]);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,9,(2 * y * z - 2 * w * x) * scale[9]);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,10,(1 - 2 * x * x - 2 * y * y) * scale[10]);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,11,0);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,12,components[0].x);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,13,components[0].y);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,14,components[0].z);
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,15,1);
		}
		if(components[2].x == 0) {
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,0,1e-15);
		}
		if(components[2].y == 0) {
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,5,1e-15);
		}
		if(components[2].z == 0) {
			(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,10,1e-15);
		}
		return !(components[2].x == 0 || components[2].y == 0 || components[2].y == 0);
	},
	transformVector: function(v) {
		var x = v.x;
		var y = v.y;
		var z = v.z;
		return new (openfl_geom_Vector3D().default)(x * this.rawData[0] + y * this.rawData[4] + z * this.rawData[8] + this.rawData[12],x * this.rawData[1] + y * this.rawData[5] + z * this.rawData[9] + this.rawData[13],x * this.rawData[2] + y * this.rawData[6] + z * this.rawData[10] + this.rawData[14],x * this.rawData[3] + y * this.rawData[7] + z * this.rawData[11] + this.rawData[15]);
	},
	transformVectors: function(vin,vout) {
		var i = 0;
		var x;
		var y;
		var z;
		while(i + 3 <= vin.get_length()) {
			x = vin[i];
			y = vin[i + 1];
			z = vin[i + 2];
			(openfl__$Vector_Vector_$Impl_$().default).set(vout,i,x * this.rawData[0] + y * this.rawData[4] + z * this.rawData[8] + this.rawData[12]);
			(openfl__$Vector_Vector_$Impl_$().default).set(vout,i + 1,x * this.rawData[1] + y * this.rawData[5] + z * this.rawData[9] + this.rawData[13]);
			(openfl__$Vector_Vector_$Impl_$().default).set(vout,i + 2,x * this.rawData[2] + y * this.rawData[6] + z * this.rawData[10] + this.rawData[14]);
			i += 3;
		}
	},
	transpose: function() {
		var oRawData = (openfl_VectorData().default).ofArray(this.rawData);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,1,oRawData[4]);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,2,oRawData[8]);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,3,oRawData[12]);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,4,oRawData[1]);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,6,oRawData[9]);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,7,oRawData[13]);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,8,oRawData[2]);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,9,oRawData[6]);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,11,oRawData[14]);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,12,oRawData[3]);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,13,oRawData[7]);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,14,oRawData[11]);
	},
	get_determinant: function() {
		return (this.rawData[0] * this.rawData[5] - this.rawData[4] * this.rawData[1]) * (this.rawData[10] * this.rawData[15] - this.rawData[14] * this.rawData[11]) - (this.rawData[0] * this.rawData[9] - this.rawData[8] * this.rawData[1]) * (this.rawData[6] * this.rawData[15] - this.rawData[14] * this.rawData[7]) + (this.rawData[0] * this.rawData[13] - this.rawData[12] * this.rawData[1]) * (this.rawData[6] * this.rawData[11] - this.rawData[10] * this.rawData[7]) + (this.rawData[4] * this.rawData[9] - this.rawData[8] * this.rawData[5]) * (this.rawData[2] * this.rawData[15] - this.rawData[14] * this.rawData[3]) - (this.rawData[4] * this.rawData[13] - this.rawData[12] * this.rawData[5]) * (this.rawData[2] * this.rawData[11] - this.rawData[10] * this.rawData[3]) + (this.rawData[8] * this.rawData[13] - this.rawData[12] * this.rawData[9]) * (this.rawData[2] * this.rawData[7] - this.rawData[6] * this.rawData[3]);
	},
	get_position: function() {
		return new (openfl_geom_Vector3D().default)(this.rawData[12],this.rawData[13],this.rawData[14]);
	},
	set_position: function(val) {
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,12,val.x);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,13,val.y);
		(openfl__$Vector_Vector_$Impl_$().default).set(this.rawData,14,val.z);
		return val;
	}
};
Matrix3D.prototype.__class__ = Matrix3D.prototype.constructor = $hxClasses["openfl.geom.Matrix3D"] = Matrix3D;

// Init

Object.defineProperties(Matrix3D.prototype,{ determinant : { get : function () { return this.get_determinant (); }, set : function (v) { return this.set_determinant (v); }}, position : { get : function () { return this.get_position (); }, set : function (v) { return this.set_position (v); }}});

// Statics

Matrix3D.create2D = function(x,y,scale,rotation) {
	if(rotation == null) {
		rotation = 0;
	}
	if(scale == null) {
		scale = 1;
	}
	var theta = rotation * Math.PI / 180.0;
	var c = Math.cos(theta);
	var s = Math.sin(theta);
	return new Matrix3D((openfl__$Vector_Vector_$Impl_$().default)._new(null,null,[c * scale,-s * scale,0,0,s * scale,c * scale,0,0,0,0,1,0,x,y,0,1]));
}
Matrix3D.createABCD = function(a,b,c,d,tx,ty) {
	return new Matrix3D((openfl__$Vector_Vector_$Impl_$().default)._new(null,null,[a,b,0,0,c,d,0,0,0,0,1,0,tx,ty,0,1]));
}
Matrix3D.createOrtho = function(x0,x1,y0,y1,zNear,zFar) {
	var sx = 1.0 / (x1 - x0);
	var sy = 1.0 / (y1 - y0);
	var sz = 1.0 / (zFar - zNear);
	return new Matrix3D((openfl__$Vector_Vector_$Impl_$().default)._new(null,null,[2.0 * sx,0,0,0,0,2.0 * sy,0,0,0,0,-2.0 * sz,0,-(x0 + x1) * sx,-(y0 + y1) * sy,-(zNear + zFar) * sz,1]));
}
Matrix3D.interpolate = function(thisMat,toMat,percent) {
	var m = new Matrix3D();
	var _g = 0;
	while(_g < 16) {
		var i = _g++;
		(openfl__$Vector_Vector_$Impl_$().default).set(m.rawData,i,thisMat.rawData[i] + (toMat.rawData[i] - thisMat.rawData[i]) * percent);
	}
	return m;
}
Matrix3D.__getAxisRotation = function(x,y,z,degrees) {
	var m = new Matrix3D();
	var a1 = new (openfl_geom_Vector3D().default)(x,y,z);
	var rad = -degrees * (Math.PI / 180);
	var c = Math.cos(rad);
	var s = Math.sin(rad);
	var t = 1.0 - c;
	(openfl__$Vector_Vector_$Impl_$().default).set(m.rawData,0,c + a1.x * a1.x * t);
	(openfl__$Vector_Vector_$Impl_$().default).set(m.rawData,5,c + a1.y * a1.y * t);
	(openfl__$Vector_Vector_$Impl_$().default).set(m.rawData,10,c + a1.z * a1.z * t);
	var tmp1 = a1.x * a1.y * t;
	var tmp2 = a1.z * s;
	(openfl__$Vector_Vector_$Impl_$().default).set(m.rawData,4,tmp1 + tmp2);
	(openfl__$Vector_Vector_$Impl_$().default).set(m.rawData,1,tmp1 - tmp2);
	tmp1 = a1.x * a1.z * t;
	tmp2 = a1.y * s;
	(openfl__$Vector_Vector_$Impl_$().default).set(m.rawData,8,tmp1 - tmp2);
	(openfl__$Vector_Vector_$Impl_$().default).set(m.rawData,2,tmp1 + tmp2);
	tmp1 = a1.y * a1.z * t;
	tmp2 = a1.x * s;
	(openfl__$Vector_Vector_$Impl_$().default).set(m.rawData,9,tmp1 + tmp2);
	(openfl__$Vector_Vector_$Impl_$().default).set(m.rawData,6,tmp1 - tmp2);
	return m;
}
Matrix3D.__meta__ = { statics : { create2D : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, createABCD : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, createOrtho : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}}

// Export

exports.default = Matrix3D;