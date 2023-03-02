// Class: openfl.display3D.Uniform

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_graphics__$WebGL2RenderContext_WebGL2RenderContext_$Impl_$() {return require("./../../lime/graphics/_WebGL2RenderContext/WebGL2RenderContext_Impl_");}
function lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$() {return require("./../../lime/graphics/_WebGLRenderContext/WebGLRenderContext_Impl_");}
function lime_utils_BytePointerData() {return require("./../../lime/utils/BytePointerData");}

// Constructor

var Uniform = function(context) {
	this.context = context;
	this.isDirty = true;
	var this1 = new (lime_utils_BytePointerData().default)(null,0);
	this.regDataPointer = this1;
}

// Meta

Uniform.__name__ = "openfl.display3D.Uniform";
Uniform.__isInterface__ = false;
Uniform.prototype = {
	flush: function() {
		var gl = this.context.gl;
		var index = this.regIndex * 4;
		switch(this.type) {
		case 35664:
			(lime_graphics__$WebGL2RenderContext_WebGL2RenderContext_$Impl_$().default).uniform2fv(gl,this.location,this.__getUniformRegisters(index,this.regCount * 2));
			break;
		case 35665:
			var location = this.location;
			var data = this.__getUniformRegisters(index,this.regCount * 3);
			var srcOffset = null;
			if(srcOffset != null) {
				gl.uniform3fv(location,data,srcOffset,null);
			} else {
				gl.uniform3fv(location,data);
			}
			break;
		case 35666:
			var location1 = this.location;
			var data1 = this.__getUniformRegisters(index,this.regCount * 4);
			var srcOffset1 = null;
			if(srcOffset1 != null) {
				gl.uniform4fv(location1,data1,srcOffset1,null);
			} else {
				gl.uniform4fv(location1,data1);
			}
			break;
		case 35674:
			(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).uniformMatrix2fv(gl,this.location,false,this.__getUniformRegisters(index,this.size * 2 * 2));
			break;
		case 35675:
			(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).uniformMatrix3fv(gl,this.location,false,this.__getUniformRegisters(index,this.size * 3 * 3));
			break;
		case 35676:
			(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).uniformMatrix4fv(gl,this.location,false,this.__getUniformRegisters(index,this.size * 4 * 4));
			break;
		default:
			var location2 = this.location;
			var data2 = this.__getUniformRegisters(index,this.regCount * 4);
			var srcOffset2 = null;
			if(srcOffset2 != null) {
				gl.uniform4fv(location2,data2,srcOffset2,null);
			} else {
				gl.uniform4fv(location2,data2);
			}
		}
	},
	__getUniformRegisters: function(index,size) {
		return this.regData.subarray(index,index + size);
	}
};
Uniform.prototype.__class__ = Uniform.prototype.constructor = $hxClasses["openfl.display3D.Uniform"] = Uniform;

// Init



// Statics


Uniform.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = Uniform;