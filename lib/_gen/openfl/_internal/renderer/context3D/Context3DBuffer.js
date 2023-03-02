// Class: openfl._internal.renderer.context3D.Context3DBuffer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function Std() {return require("./../../../../Std");}

// Constructor

var Context3DBuffer = function(context3D,elementType,elementCount,dataPerVertex) {
	this.context3D = context3D;
	this.elementType = elementType;
	this.dataPerVertex = dataPerVertex;
	this.indexCount = 0;
	this.vertexCount = 0;
	this.resize(elementCount);
}

// Meta

Context3DBuffer.__name__ = "openfl._internal.renderer.context3D.Context3DBuffer";
Context3DBuffer.__isInterface__ = false;
Context3DBuffer.prototype = {
	drawElements: function(start,length) {
		if(length == null) {
			length = -1;
		}
		if(this.indexCount == 0 || this.vertexCount == 0) {
			return;
		}
		if(this.elementType._hx_index == 0) {
			if(length == -1) {
				length = this.elementCount * 2;
			}
			if(start < 10922 && length - start < 10922) {
				this.context3D.drawTriangles(this.indexBuffers[0],start,length * 2);
			} else {
				var end = start + length;
				while(start < end) {
					var arrayBufferIndex = Math.floor(start / 10922);
					length = (Std().default).int(Math.min(end - start,10922));
					if(length <= 0) {
						break;
					}
					this.context3D.drawTriangles(this.indexBuffers[arrayBufferIndex],(start - arrayBufferIndex * 10922) * 3,length * 2);
					start += length;
				}
			}
		}
	},
	flushVertexBufferData: function() {
		if(this.vertexBufferData.length > this.vertexCount) {
			this.vertexCount = this.vertexBufferData.length;
			this.vertexBuffer = this.context3D.createVertexBuffer(this.vertexCount,this.dataPerVertex,"dynamicDraw");
		}
		this.vertexBuffer.uploadFromTypedArray(this.vertexBufferData);
	},
	resize: function(elementCount,dataPerVertex) {
		if(dataPerVertex == null) {
			dataPerVertex = -1;
		}
		this.elementCount = elementCount;
		if(dataPerVertex == -1) {
			dataPerVertex = this.dataPerVertex;
		}
		if(dataPerVertex != this.dataPerVertex) {
			this.vertexBuffer = null;
			this.vertexCount = 0;
			this.dataPerVertex = dataPerVertex;
		}
		var numVertices = 0;
		switch(this.elementType._hx_index) {
		case 0:
			numVertices = elementCount * 4;
			break;
		case 1:
			numVertices = elementCount * 3;
			break;
		case 2:
			numVertices = elementCount * 3;
			break;
		}
		var vertexLength = numVertices * dataPerVertex;
		if(this.vertexBufferData == null) {
			var array = null;
			var view = null;
			var buffer = null;
			var len = null;
			var this1;
			if(vertexLength != null) {
				this1 = new Float32Array(vertexLength);
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
			this.vertexBufferData = this1;
		} else if(vertexLength > this.vertexBufferData.length) {
			var cacheBufferData = this.vertexBufferData;
			var array1 = null;
			var view1 = null;
			var buffer1 = null;
			var len1 = null;
			var this2;
			if(vertexLength != null) {
				this2 = new Float32Array(vertexLength);
			} else if(array1 != null) {
				this2 = new Float32Array(array1);
			} else if(view1 != null) {
				this2 = new Float32Array(view1);
			} else if(buffer1 != null) {
				if(len1 == null) {
					this2 = new Float32Array(buffer1,0);
				} else {
					this2 = new Float32Array(buffer1,0,len1);
				}
			} else {
				this2 = null;
			}
			this.vertexBufferData = this2;
			this.vertexBufferData.set(cacheBufferData);
		}
	}
};
Context3DBuffer.prototype.__class__ = Context3DBuffer.prototype.constructor = $hxClasses["openfl._internal.renderer.context3D.Context3DBuffer"] = Context3DBuffer;

// Init



// Statics


Context3DBuffer.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}
Context3DBuffer.MAX_INDEX_BUFFER_LENGTH = 65535
Context3DBuffer.MAX_QUADS_PER_INDEX_BUFFER = 10922
Context3DBuffer.MAX_QUAD_INDEX_BUFFER_LENGTH = 65532

// Export

exports.default = Context3DBuffer;