// Class: openfl.geom.Utils3D

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function openfl_geom_Vector3D() {return require("./../../openfl/geom/Vector3D");}
function openfl__$Vector_Vector_$Impl_$() {return require("./../../openfl/_Vector/Vector_Impl_");}

// Constructor

var Utils3D = function(){}

// Meta

Utils3D.__name__ = "openfl.geom.Utils3D";
Utils3D.__isInterface__ = false;
Utils3D.prototype = {
	
};
Utils3D.prototype.__class__ = Utils3D.prototype.constructor = $hxClasses["openfl.geom.Utils3D"] = Utils3D;

// Init



// Statics

Utils3D.projectVector = function(m,v) {
	var n = m.rawData;
	var l_oProj = new (openfl_geom_Vector3D().default)();
	l_oProj.x = v.x * n[0] + v.y * n[4] + v.z * n[8] + n[12];
	l_oProj.y = v.x * n[1] + v.y * n[5] + v.z * n[9] + n[13];
	l_oProj.z = v.x * n[2] + v.y * n[6] + v.z * n[10] + n[14];
	var w = v.x * n[3] + v.y * n[7] + v.z * n[11] + n[15];
	l_oProj.z /= w;
	l_oProj.x /= w;
	l_oProj.y /= w;
	return l_oProj;
}
Utils3D.projectVectors = function(m,verts,projectedVerts,uvts) {
	if(verts.get_length() % 3 != 0) {
		return;
	}
	var n = m.rawData;
	var x;
	var y;
	var z;
	var w;
	var x1;
	var y1;
	var z1;
	var w1;
	var i = 0;
	while(i < verts.get_length()) {
		x = verts[i];
		y = verts[i + 1];
		z = verts[i + 2];
		w = 1;
		x1 = x * n[0] + y * n[4] + z * n[8] + w * n[12];
		y1 = x * n[1] + y * n[5] + z * n[9] + w * n[13];
		z1 = x * n[2] + y * n[6] + z * n[10] + w * n[14];
		w1 = x * n[3] + y * n[7] + z * n[11] + w * n[15];
		(openfl__$Vector_Vector_$Impl_$().default).push(projectedVerts,x1 / w1);
		(openfl__$Vector_Vector_$Impl_$().default).push(projectedVerts,y1 / w1);
		(openfl__$Vector_Vector_$Impl_$().default).set(uvts,i + 2,1 / w1);
		i += 3;
	}
}


// Export

exports.default = Utils3D;