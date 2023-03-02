// Class: openfl.display3D.IndexBuffer3D

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function openfl_utils__$ByteArray_ByteArray_$Impl_$() {return require("./../../openfl/utils/_ByteArray/ByteArray_Impl_");}
function lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$() {return require("./../../lime/graphics/_WebGLRenderContext/WebGLRenderContext_Impl_");}

// Constructor

var IndexBuffer3D = function(context3D,numIndices,bufferUsage) {
	this.__context = context3D;
	this.__numIndices = numIndices;
	var gl = this.__context.gl;
	this.__id = gl.createBuffer();
	this.__usage = bufferUsage == "dynamicDraw" ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
}

// Meta

IndexBuffer3D.__name__ = "openfl.display3D.IndexBuffer3D";
IndexBuffer3D.__isInterface__ = false;
IndexBuffer3D.prototype = {
	dispose: function() {
		var gl = this.__context.gl;
		gl.deleteBuffer(this.__id);
	},
	uploadFromByteArray: function(data,byteArrayOffset,startOffset,count) {
		var offset = byteArrayOffset + startOffset * 2;
		var elements = null;
		var array = null;
		var view = null;
		var buffer = (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).toArrayBuffer(data);
		var byteoffset = offset;
		if(byteoffset == null) {
			byteoffset = 0;
		}
		var this1;
		if(elements != null) {
			this1 = new Uint16Array(elements);
		} else if(array != null) {
			this1 = new Uint16Array(array);
		} else if(view != null) {
			this1 = new Uint16Array(view);
		} else if(buffer != null) {
			if(count == null) {
				this1 = new Uint16Array(buffer,byteoffset);
			} else {
				this1 = new Uint16Array(buffer,byteoffset,count);
			}
		} else {
			this1 = null;
		}
		this.uploadFromTypedArray(this1);
	},
	uploadFromTypedArray: function(data,byteLength) {
		if(byteLength == null) {
			byteLength = -1;
		}
		if(data == null) {
			return;
		}
		var gl = this.__context.gl;
		this.__context.__bindGLElementArrayBuffer(this.__id);
		(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).bufferData(gl,gl.ELEMENT_ARRAY_BUFFER,data,this.__usage);
	},
	uploadFromVector: function(data,startOffset,count) {
		if(data == null) {
			return;
		}
		var gl = this.__context.gl;
		var length = startOffset + count;
		var existingUInt16Array = this.__tempUInt16Array;
		if(this.__tempUInt16Array == null || this.__tempUInt16Array.length < count) {
			var array = null;
			var view = null;
			var buffer = null;
			var len = null;
			var this1;
			if(count != null) {
				this1 = new Uint16Array(count);
			} else if(array != null) {
				this1 = new Uint16Array(array);
			} else if(view != null) {
				this1 = new Uint16Array(view);
			} else if(buffer != null) {
				if(len == null) {
					this1 = new Uint16Array(buffer,0);
				} else {
					this1 = new Uint16Array(buffer,0,len);
				}
			} else {
				this1 = null;
			}
			this.__tempUInt16Array = this1;
			if(existingUInt16Array != null) {
				this.__tempUInt16Array.set(existingUInt16Array);
			}
		}
		var _g = startOffset;
		var _g1 = length;
		while(_g < _g1) {
			var i = _g++;
			this.__tempUInt16Array[i - startOffset] = data[i];
		}
		this.uploadFromTypedArray(this.__tempUInt16Array);
	}
};
IndexBuffer3D.prototype.__class__ = IndexBuffer3D.prototype.constructor = $hxClasses["openfl.display3D.IndexBuffer3D"] = IndexBuffer3D;

// Init



// Statics




// Export

exports.default = IndexBuffer3D;