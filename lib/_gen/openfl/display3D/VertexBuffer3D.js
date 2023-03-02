// Class: openfl.display3D.VertexBuffer3D

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

var VertexBuffer3D = function(context3D,numVertices,dataPerVertex,bufferUsage) {
	this.__context = context3D;
	this.__numVertices = numVertices;
	this.__vertexSize = dataPerVertex;
	var gl = this.__context.gl;
	this.__id = gl.createBuffer();
	this.__stride = this.__vertexSize * 4;
	this.__usage = bufferUsage == "dynamicDraw" ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW;
}

// Meta

VertexBuffer3D.__name__ = "openfl.display3D.VertexBuffer3D";
VertexBuffer3D.__isInterface__ = false;
VertexBuffer3D.prototype = {
	dispose: function() {
		var gl = this.__context.gl;
		gl.deleteBuffer(this.__id);
	},
	uploadFromByteArray: function(data,byteArrayOffset,startVertex,numVertices) {
		var offset = byteArrayOffset + startVertex * this.__stride;
		var length = numVertices * this.__vertexSize;
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
			this1 = new Float32Array(elements);
		} else if(array != null) {
			this1 = new Float32Array(array);
		} else if(view != null) {
			this1 = new Float32Array(view);
		} else if(buffer != null) {
			if(length == null) {
				this1 = new Float32Array(buffer,byteoffset);
			} else {
				this1 = new Float32Array(buffer,byteoffset,length);
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
		this.__context.__bindGLArrayBuffer(this.__id);
		(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).bufferData(gl,gl.ARRAY_BUFFER,data,this.__usage);
	},
	uploadFromVector: function(data,startVertex,numVertices) {
		if(data == null) {
			return;
		}
		var gl = this.__context.gl;
		var start = startVertex * this.__vertexSize;
		var count = numVertices * this.__vertexSize;
		var length = start + count;
		var existingFloat32Array = this.__tempFloat32Array;
		if(this.__tempFloat32Array == null || this.__tempFloat32Array.length < count) {
			var array = null;
			var view = null;
			var buffer = null;
			var len = null;
			var this1;
			if(count != null) {
				this1 = new Float32Array(count);
			} else if(array != null) {
				this1 = new Float32Array(array);
			} else if(view != null) {
				this1 = new Float32Array(view);
			} else if(buffer != null) {
				if(len == null) {
					this1 = new Float32Array(buffer,0);
				} else {
					this1 = new Float32Array(buffer,0,len);
				}
			} else {
				this1 = null;
			}
			this.__tempFloat32Array = this1;
			if(existingFloat32Array != null) {
				this.__tempFloat32Array.set(existingFloat32Array);
			}
		}
		var _g = start;
		var _g1 = length;
		while(_g < _g1) {
			var i = _g++;
			this.__tempFloat32Array[i - start] = data[i];
		}
		this.uploadFromTypedArray(this.__tempFloat32Array);
	}
};
VertexBuffer3D.prototype.__class__ = VertexBuffer3D.prototype.constructor = $hxClasses["openfl.display3D.VertexBuffer3D"] = VertexBuffer3D;

// Init



// Statics




// Export

exports.default = VertexBuffer3D;