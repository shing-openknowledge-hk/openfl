// Class: openfl.geom.Transform

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function openfl_geom_Matrix3D() {return require("./../../openfl/geom/Matrix3D");}
function openfl__$Vector_Vector_$Impl_$() {return require("./../../openfl/_Vector/Vector_Impl_");}
function openfl_geom_ColorTransform() {return require("./../../openfl/geom/ColorTransform");}
function openfl_geom_Rectangle() {return require("./../../openfl/geom/Rectangle");}

// Constructor

var Transform = function(displayObject) {
	this.__colorTransform = new (openfl_geom_ColorTransform().default)();
	this.concatenatedColorTransform = new (openfl_geom_ColorTransform().default)();
	this.pixelBounds = new (openfl_geom_Rectangle().default)();
	this.__displayObject = displayObject;
	this.__hasMatrix = true;
}

// Meta

Transform.__name__ = "openfl.geom.Transform";
Transform.__isInterface__ = false;
Transform.prototype = {
	get_colorTransform: function() {
		return this.__colorTransform;
	},
	set_colorTransform: function(value) {
		if(!this.__colorTransform.__equals(value,false)) {
			this.__colorTransform.__copyFrom(value);
			if(value != null) {
				this.__displayObject.set_alpha(value.alphaMultiplier);
			}
			this.__displayObject.__setRenderDirty();
		}
		return this.__colorTransform;
	},
	get_concatenatedMatrix: function() {
		if(this.__hasMatrix) {
			return this.__displayObject.__getWorldTransform().clone();
		}
		return null;
	},
	get_matrix: function() {
		if(this.__hasMatrix) {
			return this.__displayObject.__transform.clone();
		}
		return null;
	},
	set_matrix: function(value) {
		if(value == null) {
			this.__hasMatrix = false;
			return null;
		}
		this.__hasMatrix = true;
		this.__hasMatrix3D = false;
		if(this.__displayObject != null) {
			this.__setTransform(value.a,value.b,value.c,value.d,value.tx,value.ty);
		}
		return value;
	},
	get_matrix3D: function() {
		if(this.__hasMatrix3D) {
			var matrix = this.__displayObject.__transform;
			return new (openfl_geom_Matrix3D().default)((openfl__$Vector_Vector_$Impl_$().default)._new(null,null,[matrix.a,matrix.b,0.0,0.0,matrix.c,matrix.d,0.0,0.0,0.0,0.0,1.0,0.0,matrix.tx,matrix.ty,0.0,1.0]));
		}
		return null;
	},
	set_matrix3D: function(value) {
		if(value == null) {
			this.__hasMatrix3D = false;
			return null;
		}
		this.__hasMatrix = false;
		this.__hasMatrix3D = true;
		this.__setTransform(value.rawData[0],value.rawData[1],value.rawData[5],value.rawData[6],value.rawData[12],value.rawData[13]);
		return value;
	},
	__setTransform: function(a,b,c,d,tx,ty) {
		if(this.__displayObject != null) {
			var transform = this.__displayObject.__transform;
			if(transform.a == a && transform.b == b && transform.c == c && transform.d == d && transform.tx == tx && transform.ty == ty) {
				return;
			}
			var scaleX = 0.0;
			var scaleY = 0.0;
			if(b == 0) {
				scaleX = a;
			} else {
				scaleX = Math.sqrt(a * a + b * b);
			}
			if(c == 0) {
				scaleY = d;
			} else {
				scaleY = Math.sqrt(c * c + d * d);
			}
			this.__displayObject.__scaleX = scaleX;
			this.__displayObject.__scaleY = scaleY;
			var rotation = 180 / Math.PI * Math.atan2(d,c) - 90;
			if(rotation != this.__displayObject.__rotation) {
				this.__displayObject.__rotation = rotation;
				var radians = rotation * (Math.PI / 180);
				this.__displayObject.__rotationSine = Math.sin(radians);
				this.__displayObject.__rotationCosine = Math.cos(radians);
			}
			transform.a = a;
			transform.b = b;
			transform.c = c;
			transform.d = d;
			transform.tx = tx;
			transform.ty = ty;
			this.__displayObject.__setTransformDirty();
		}
	}
};
Transform.prototype.__class__ = Transform.prototype.constructor = $hxClasses["openfl.geom.Transform"] = Transform;

// Init

Object.defineProperties(Transform.prototype,{ colorTransform : { get : function () { return this.get_colorTransform (); }, set : function (v) { return this.set_colorTransform (v); }}, concatenatedMatrix : { get : function () { return this.get_concatenatedMatrix (); }, set : function (v) { return this.set_concatenatedMatrix (v); }}, matrix : { get : function () { return this.get_matrix (); }, set : function (v) { return this.set_matrix (v); }}, matrix3D : { get : function () { return this.get_matrix3D (); }, set : function (v) { return this.set_matrix3D (v); }}});

// Statics




// Export

exports.default = Transform;