// Class: openfl.display3D.UniformMap

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function Reflect() {return require("./../../Reflect");}
function openfl__$Vector_Vector_$Impl_$() {return require("./../../openfl/_Vector/Vector_Impl_");}

// Constructor

var UniformMap = function(list) {
	this.__uniforms = list;
	this.__uniforms.sort(function(a,b) {
		return (Reflect().default).compare(a.regIndex,b.regIndex);
	});
	var total = 0;
	var _g = 0;
	var _g1 = this.__uniforms;
	while(_g < _g1.length) {
		var uniform = _g1[_g];
		++_g;
		if(uniform.regIndex + uniform.regCount > total) {
			total = uniform.regIndex + uniform.regCount;
		}
	}
	this.__registerLookup = (openfl__$Vector_Vector_$Impl_$().default)._new(total);
	var _g2 = 0;
	var _g3 = this.__uniforms;
	while(_g2 < _g3.length) {
		var uniform1 = _g3[_g2];
		++_g2;
		var _g21 = 0;
		var _g31 = uniform1.regCount;
		while(_g21 < _g31) {
			var i = _g21++;
			(openfl__$Vector_Vector_$Impl_$().default).set(this.__registerLookup,uniform1.regIndex + i,uniform1);
		}
	}
	this.__anyDirty = this.__allDirty = true;
}

// Meta

UniformMap.__name__ = "openfl.display3D.UniformMap";
UniformMap.__isInterface__ = false;
UniformMap.prototype = {
	flush: function() {
		if(this.__anyDirty) {
			var _g = 0;
			var _g1 = this.__uniforms;
			while(_g < _g1.length) {
				var uniform = _g1[_g];
				++_g;
				if(this.__allDirty || uniform.isDirty) {
					uniform.flush();
					uniform.isDirty = false;
				}
			}
			this.__anyDirty = this.__allDirty = false;
		}
	},
	markAllDirty: function() {
		this.__allDirty = true;
		this.__anyDirty = true;
	},
	markDirty: function(start,count) {
		if(this.__allDirty) {
			return;
		}
		var end = start + count;
		if(end > this.__registerLookup.get_length()) {
			end = this.__registerLookup.get_length();
		}
		var index = start;
		while(index < end) {
			var uniform = this.__registerLookup[index];
			if(uniform != null) {
				uniform.isDirty = true;
				this.__anyDirty = true;
				index = uniform.regIndex + uniform.regCount;
			} else {
				++index;
			}
		}
	}
};
UniformMap.prototype.__class__ = UniformMap.prototype.constructor = $hxClasses["openfl.display3D.UniformMap"] = UniformMap;

// Init



// Statics


UniformMap.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = UniformMap;