// Class: openfl.geom.PerspectiveProjection

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function openfl__$Vector_Vector_$Impl_$() {return require("./../../openfl/_Vector/Vector_Impl_");}
function openfl_geom_Matrix3D() {return require("./../../openfl/geom/Matrix3D");}
function openfl_geom_Point() {return require("./../../openfl/geom/Point");}
function openfl_Lib() {return require("./../../openfl/Lib");}

// Constructor

var PerspectiveProjection = function() {
	this.__fieldOfView = 0;
	this.focalLength = 0;
	this.matrix3D = new (openfl_geom_Matrix3D().default)();
	this.projectionCenter = new (openfl_geom_Point().default)((openfl_Lib().default).get_current().stage.stageWidth / 2,(openfl_Lib().default).get_current().stage.stageHeight / 2);
}

// Meta

PerspectiveProjection.__name__ = "openfl.geom.PerspectiveProjection";
PerspectiveProjection.__isInterface__ = false;
PerspectiveProjection.prototype = {
	toMatrix3D: function() {
		if(this.projectionCenter == null) {
			return null;
		}
		var _mp = this.matrix3D.rawData;
		(openfl__$Vector_Vector_$Impl_$().default).set(_mp,0,this.focalLength);
		(openfl__$Vector_Vector_$Impl_$().default).set(_mp,5,this.focalLength);
		(openfl__$Vector_Vector_$Impl_$().default).set(_mp,11,1.0);
		(openfl__$Vector_Vector_$Impl_$().default).set(_mp,15,0);
		return this.matrix3D;
	},
	get_fieldOfView: function() {
		return this.__fieldOfView;
	},
	set_fieldOfView: function(fieldOfView) {
		this.__fieldOfView = fieldOfView * 0.01745329251994329577;
		this.focalLength = 250.0 * (1.0 / Math.tan(this.__fieldOfView * 0.5));
		return this.__fieldOfView;
	}
};
PerspectiveProjection.prototype.__class__ = PerspectiveProjection.prototype.constructor = $hxClasses["openfl.geom.PerspectiveProjection"] = PerspectiveProjection;

// Init

Object.defineProperty(PerspectiveProjection.prototype,"fieldOfView",{ get : function () { return this.get_fieldOfView (); }, set : function (v) { return this.set_fieldOfView (v); }});

// Statics


PerspectiveProjection.__meta__ = { statics : { TO_RADIAN : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}}
PerspectiveProjection.TO_RADIAN = 0.01745329251994329577

// Export

exports.default = PerspectiveProjection;