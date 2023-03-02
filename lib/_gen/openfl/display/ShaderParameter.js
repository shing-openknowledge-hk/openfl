// Class: openfl.display.ShaderParameter

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$() {return require("./../../lime/graphics/_WebGLRenderContext/WebGLRenderContext_Impl_");}
function Std() {return require("./../../Std");}
function StringTools() {return require("./../../StringTools");}

// Constructor

var ShaderParameter = function() {
	this.index = 0;
}

// Meta

ShaderParameter.__name__ = "openfl.display.ShaderParameter";
ShaderParameter.__isInterface__ = false;
ShaderParameter.prototype = {
	__disableGL: function(context) {
		var gl = context.gl;
		if(!this.__isUniform) {
			var _g = 0;
			var _g1 = this.__arrayLength;
			while(_g < _g1) {
				var i = _g++;
				gl.disableVertexAttribArray(this.index + i);
			}
		}
	},
	__updateGL: function(context,overrideValue) {
		var gl = context.gl;
		var value = overrideValue != null ? overrideValue : this.value;
		var boolValue = this.__isBool ? value : null;
		var floatValue = this.__isFloat ? value : null;
		var intValue = this.__isInt ? value : null;
		if(this.__isUniform) {
			if(value != null && value.length >= this.__length) {
				switch(this.type) {
				case "bool":
					gl.uniform1i(this.index,boolValue[0] ? 1 : 0);
					break;
				case "bool2":
					gl.uniform2i(this.index,boolValue[0] ? 1 : 0,boolValue[1] ? 1 : 0);
					break;
				case "bool3":
					gl.uniform3i(this.index,boolValue[0] ? 1 : 0,boolValue[1] ? 1 : 0,boolValue[2] ? 1 : 0);
					break;
				case "bool4":
					gl.uniform4i(this.index,boolValue[0] ? 1 : 0,boolValue[1] ? 1 : 0,boolValue[2] ? 1 : 0,boolValue[3] ? 1 : 0);
					break;
				case "float":
					gl.uniform1f(this.index,floatValue[0]);
					break;
				case "float2":
					gl.uniform2f(this.index,floatValue[0],floatValue[1]);
					break;
				case "float3":
					gl.uniform3f(this.index,floatValue[0],floatValue[1],floatValue[2]);
					break;
				case "float4":
					gl.uniform4f(this.index,floatValue[0],floatValue[1],floatValue[2],floatValue[3]);
					break;
				case "int":
					gl.uniform1i(this.index,intValue[0]);
					break;
				case "int2":
					gl.uniform2i(this.index,intValue[0],intValue[1]);
					break;
				case "int3":
					gl.uniform3i(this.index,intValue[0],intValue[1],intValue[2]);
					break;
				case "int4":
					gl.uniform4i(this.index,intValue[0],intValue[1],intValue[2],intValue[3]);
					break;
				case "matrix2x2":
					this.__uniformMatrix[0] = floatValue[0];
					this.__uniformMatrix[1] = floatValue[1];
					this.__uniformMatrix[2] = floatValue[2];
					this.__uniformMatrix[3] = floatValue[3];
					(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).uniformMatrix2fv(gl,this.index,false,this.__uniformMatrix);
					break;
				case "matrix3x3":
					this.__uniformMatrix[0] = floatValue[0];
					this.__uniformMatrix[1] = floatValue[1];
					this.__uniformMatrix[2] = floatValue[2];
					this.__uniformMatrix[3] = floatValue[3];
					this.__uniformMatrix[4] = floatValue[4];
					this.__uniformMatrix[5] = floatValue[5];
					this.__uniformMatrix[6] = floatValue[6];
					this.__uniformMatrix[7] = floatValue[7];
					this.__uniformMatrix[8] = floatValue[8];
					(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).uniformMatrix3fv(gl,this.index,false,this.__uniformMatrix);
					break;
				case "matrix4x4":
					this.__uniformMatrix[0] = floatValue[0];
					this.__uniformMatrix[1] = floatValue[1];
					this.__uniformMatrix[2] = floatValue[2];
					this.__uniformMatrix[3] = floatValue[3];
					this.__uniformMatrix[4] = floatValue[4];
					this.__uniformMatrix[5] = floatValue[5];
					this.__uniformMatrix[6] = floatValue[6];
					this.__uniformMatrix[7] = floatValue[7];
					this.__uniformMatrix[8] = floatValue[8];
					this.__uniformMatrix[9] = floatValue[9];
					this.__uniformMatrix[10] = floatValue[10];
					this.__uniformMatrix[11] = floatValue[11];
					this.__uniformMatrix[12] = floatValue[12];
					this.__uniformMatrix[13] = floatValue[13];
					this.__uniformMatrix[14] = floatValue[14];
					this.__uniformMatrix[15] = floatValue[15];
					(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).uniformMatrix4fv(gl,this.index,false,this.__uniformMatrix);
					break;
				default:
				}
			} else {
				switch(this.type) {
				case "bool":case "int":
					gl.uniform1i(this.index,0);
					break;
				case "bool2":case "int2":
					gl.uniform2i(this.index,0,0);
					break;
				case "float":
					gl.uniform1f(this.index,0);
					break;
				case "float2":
					gl.uniform2f(this.index,0,0);
					break;
				case "float3":
					gl.uniform3f(this.index,0,0,0);
					break;
				case "float4":
					gl.uniform4f(this.index,0,0,0,0);
					break;
				case "bool3":case "int3":
					gl.uniform3i(this.index,0,0,0);
					break;
				case "bool4":case "int4":
					gl.uniform4i(this.index,0,0,0,0);
					break;
				case "matrix2x2":
					this.__uniformMatrix[0] = 0;
					this.__uniformMatrix[1] = 0;
					this.__uniformMatrix[2] = 0;
					this.__uniformMatrix[3] = 0;
					(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).uniformMatrix2fv(gl,this.index,false,this.__uniformMatrix);
					break;
				case "matrix3x3":
					this.__uniformMatrix[0] = 0;
					this.__uniformMatrix[1] = 0;
					this.__uniformMatrix[2] = 0;
					this.__uniformMatrix[3] = 0;
					this.__uniformMatrix[4] = 0;
					this.__uniformMatrix[5] = 0;
					this.__uniformMatrix[6] = 0;
					this.__uniformMatrix[7] = 0;
					this.__uniformMatrix[8] = 0;
					(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).uniformMatrix3fv(gl,this.index,false,this.__uniformMatrix);
					break;
				case "matrix4x4":
					this.__uniformMatrix[0] = 0;
					this.__uniformMatrix[1] = 0;
					this.__uniformMatrix[2] = 0;
					this.__uniformMatrix[3] = 0;
					this.__uniformMatrix[4] = 0;
					this.__uniformMatrix[5] = 0;
					this.__uniformMatrix[6] = 0;
					this.__uniformMatrix[7] = 0;
					this.__uniformMatrix[8] = 0;
					this.__uniformMatrix[9] = 0;
					this.__uniformMatrix[10] = 0;
					this.__uniformMatrix[11] = 0;
					this.__uniformMatrix[12] = 0;
					this.__uniformMatrix[13] = 0;
					this.__uniformMatrix[14] = 0;
					this.__uniformMatrix[15] = 0;
					(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).uniformMatrix4fv(gl,this.index,false,this.__uniformMatrix);
					break;
				default:
				}
			}
		} else if(!this.__useArray && (value == null || value.length == this.__length)) {
			var _g = 0;
			var _g1 = this.__arrayLength;
			while(_g < _g1) {
				var i = _g++;
				gl.disableVertexAttribArray(this.index + i);
			}
			if(value != null) {
				switch(this.type) {
				case "bool":
					gl.vertexAttrib1f(this.index,boolValue[0] ? 1 : 0);
					break;
				case "bool2":
					gl.vertexAttrib2f(this.index,boolValue[0] ? 1 : 0,boolValue[1] ? 1 : 0);
					break;
				case "bool3":
					gl.vertexAttrib3f(this.index,boolValue[0] ? 1 : 0,boolValue[1] ? 1 : 0,boolValue[2] ? 1 : 0);
					break;
				case "bool4":
					gl.vertexAttrib4f(this.index,boolValue[0] ? 1 : 0,boolValue[1] ? 1 : 0,boolValue[2] ? 1 : 0,boolValue[3] ? 1 : 0);
					break;
				case "float":
					gl.vertexAttrib1f(this.index,floatValue[0]);
					break;
				case "float2":
					gl.vertexAttrib2f(this.index,floatValue[0],floatValue[1]);
					break;
				case "float3":
					gl.vertexAttrib3f(this.index,floatValue[0],floatValue[1],floatValue[2]);
					break;
				case "float4":
					gl.vertexAttrib4f(this.index,floatValue[0],floatValue[1],floatValue[2],floatValue[3]);
					break;
				case "int":
					gl.vertexAttrib1f(this.index,intValue[0]);
					break;
				case "int2":
					gl.vertexAttrib2f(this.index,intValue[0],intValue[1]);
					break;
				case "int3":
					gl.vertexAttrib3f(this.index,intValue[0],intValue[1],intValue[2]);
					break;
				case "int4":
					gl.vertexAttrib4f(this.index,intValue[0],intValue[1],intValue[2],intValue[3]);
					break;
				case "matrix2x2":
					gl.vertexAttrib2f(this.index + 0,floatValue[0],floatValue[1]);
					gl.vertexAttrib2f(this.index + 1,floatValue[2],floatValue[3]);
					break;
				case "matrix3x3":
					gl.vertexAttrib3f(this.index + 0,floatValue[0],floatValue[1],floatValue[2]);
					gl.vertexAttrib3f(this.index + 1,floatValue[3],floatValue[4],floatValue[5]);
					gl.vertexAttrib3f(this.index + 2,floatValue[6],floatValue[7],floatValue[8]);
					break;
				case "matrix4x4":
					gl.vertexAttrib4f(this.index + 0,floatValue[0],floatValue[1],floatValue[2],floatValue[3]);
					gl.vertexAttrib4f(this.index + 1,floatValue[4],floatValue[5],floatValue[6],floatValue[7]);
					gl.vertexAttrib4f(this.index + 2,floatValue[8],floatValue[9],floatValue[10],floatValue[11]);
					gl.vertexAttrib4f(this.index + 3,floatValue[12],floatValue[13],floatValue[14],floatValue[15]);
					break;
				default:
				}
			} else {
				switch(this.type) {
				case "bool":case "float":case "int":
					gl.vertexAttrib1f(this.index,0);
					break;
				case "bool2":case "float2":case "int2":
					gl.vertexAttrib2f(this.index,0,0);
					break;
				case "bool3":case "float3":case "int3":
					gl.vertexAttrib3f(this.index,0,0,0);
					break;
				case "bool4":case "float4":case "int4":
					gl.vertexAttrib4f(this.index,0,0,0,0);
					break;
				case "matrix2x2":
					gl.vertexAttrib2f(this.index + 0,0,0);
					gl.vertexAttrib2f(this.index + 1,0,0);
					break;
				case "matrix3x3":
					gl.vertexAttrib3f(this.index + 0,0,0,0);
					gl.vertexAttrib3f(this.index + 1,0,0,0);
					gl.vertexAttrib3f(this.index + 2,0,0,0);
					break;
				case "matrix4x4":
					gl.vertexAttrib4f(this.index + 0,0,0,0,0);
					gl.vertexAttrib4f(this.index + 1,0,0,0,0);
					gl.vertexAttrib4f(this.index + 2,0,0,0,0);
					gl.vertexAttrib4f(this.index + 3,0,0,0,0);
					break;
				default:
				}
			}
		} else {
			var _g2 = 0;
			var _g11 = this.__arrayLength;
			while(_g2 < _g11) {
				var i1 = _g2++;
				gl.enableVertexAttribArray(this.index + i1);
			}
		}
	},
	__updateGLFromBuffer: function(context,buffer,position,length,bufferOffset) {
		var gl = context.gl;
		if(this.__isUniform) {
			if(length >= this.__length) {
				switch(this.type) {
				case "bool":case "int":
					gl.uniform1i(this.index,(Std().default).int(buffer[position]));
					break;
				case "bool2":case "int2":
					gl.uniform2i(this.index,(Std().default).int(buffer[position]),(Std().default).int(buffer[position + 1]));
					break;
				case "float":
					gl.uniform1f(this.index,buffer[position]);
					break;
				case "float2":
					gl.uniform2f(this.index,buffer[position],buffer[position + 1]);
					break;
				case "float3":
					gl.uniform3f(this.index,buffer[position],buffer[position + 1],buffer[position + 2]);
					break;
				case "float4":
					gl.uniform4f(this.index,buffer[position],buffer[position + 1],buffer[position + 2],buffer[position + 3]);
					break;
				case "bool3":case "int3":
					gl.uniform3i(this.index,(Std().default).int(buffer[position]),(Std().default).int(buffer[position + 1]),(Std().default).int(buffer[position + 2]));
					break;
				case "bool4":case "int4":
					gl.uniform4i(this.index,(Std().default).int(buffer[position]),(Std().default).int(buffer[position + 1]),(Std().default).int(buffer[position + 2]),(Std().default).int(buffer[position + 3]));
					break;
				case "matrix2x2":
					this.__uniformMatrix[0] = buffer[position];
					this.__uniformMatrix[1] = buffer[position + 1];
					this.__uniformMatrix[2] = buffer[position + 2];
					this.__uniformMatrix[3] = buffer[position + 3];
					(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).uniformMatrix2fv(gl,this.index,false,this.__uniformMatrix);
					break;
				case "matrix3x3":
					this.__uniformMatrix[0] = buffer[position];
					this.__uniformMatrix[1] = buffer[position + 1];
					this.__uniformMatrix[2] = buffer[position + 2];
					this.__uniformMatrix[3] = buffer[position + 3];
					this.__uniformMatrix[4] = buffer[position + 4];
					this.__uniformMatrix[5] = buffer[position + 5];
					this.__uniformMatrix[6] = buffer[position + 6];
					this.__uniformMatrix[7] = buffer[position + 7];
					this.__uniformMatrix[8] = buffer[position + 8];
					(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).uniformMatrix3fv(gl,this.index,false,this.__uniformMatrix);
					break;
				case "matrix4x4":
					this.__uniformMatrix[0] = buffer[position];
					this.__uniformMatrix[1] = buffer[position + 1];
					this.__uniformMatrix[2] = buffer[position + 2];
					this.__uniformMatrix[3] = buffer[position + 3];
					this.__uniformMatrix[4] = buffer[position + 4];
					this.__uniformMatrix[5] = buffer[position + 5];
					this.__uniformMatrix[6] = buffer[position + 6];
					this.__uniformMatrix[7] = buffer[position + 7];
					this.__uniformMatrix[8] = buffer[position + 8];
					this.__uniformMatrix[9] = buffer[position + 9];
					this.__uniformMatrix[10] = buffer[position + 10];
					this.__uniformMatrix[11] = buffer[position + 11];
					this.__uniformMatrix[12] = buffer[position + 12];
					this.__uniformMatrix[13] = buffer[position + 13];
					this.__uniformMatrix[14] = buffer[position + 14];
					this.__uniformMatrix[15] = buffer[position + 15];
					(lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).uniformMatrix4fv(gl,this.index,false,this.__uniformMatrix);
					break;
				default:
				}
			}
		} else if(!this.__internal && (length == 0 || length == this.__length)) {
			var _g = 0;
			var _g1 = this.__arrayLength;
			while(_g < _g1) {
				var i = _g++;
				gl.disableVertexAttribArray(this.index + i);
			}
			if(length > 0) {
				switch(this.type) {
				case "bool":case "float":case "int":
					gl.vertexAttrib1f(this.index,buffer[position]);
					break;
				case "bool2":case "float2":case "int2":
					gl.vertexAttrib2f(this.index,buffer[position],buffer[position + 1]);
					break;
				case "bool3":case "float3":case "int3":
					gl.vertexAttrib3f(this.index,buffer[position],buffer[position + 1],buffer[position + 2]);
					break;
				case "bool4":case "float4":case "int4":
					gl.vertexAttrib4f(this.index,buffer[position],buffer[position + 1],buffer[position + 2],buffer[position + 3]);
					break;
				case "matrix2x2":
					gl.vertexAttrib2f(this.index + 0,buffer[position],buffer[position + 1]);
					gl.vertexAttrib2f(this.index + 1,buffer[position + 2],buffer[position + 2 + 1]);
					break;
				case "matrix3x3":
					gl.vertexAttrib3f(this.index + 0,buffer[position],buffer[position + 1],buffer[position + 2]);
					gl.vertexAttrib3f(this.index + 1,buffer[position + 3],buffer[position + 3 + 1],buffer[position + 3 + 2]);
					gl.vertexAttrib3f(this.index + 2,buffer[position + 6],buffer[position + 6 + 1],buffer[position + 6 + 2]);
					break;
				case "matrix4x4":
					gl.vertexAttrib4f(this.index + 0,buffer[position],buffer[position + 1],buffer[position + 2],buffer[position + 3]);
					gl.vertexAttrib4f(this.index + 1,buffer[position + 4],buffer[position + 4 + 1],buffer[position + 4 + 2],buffer[position + 4 + 3]);
					gl.vertexAttrib4f(this.index + 2,buffer[position + 8],buffer[position + 8 + 1],buffer[position + 8 + 2],buffer[position + 8 + 3]);
					gl.vertexAttrib4f(this.index + 3,buffer[position + 12],buffer[position + 12 + 1],buffer[position + 12 + 2],buffer[position + 12 + 3]);
					break;
				default:
				}
			} else {
				switch(this.type) {
				case "bool":case "float":case "int":
					gl.vertexAttrib1f(this.index,0);
					break;
				case "bool2":case "float2":case "int2":
					gl.vertexAttrib2f(this.index,0,0);
					break;
				case "bool3":case "float3":case "int3":
					gl.vertexAttrib3f(this.index,0,0,0);
					break;
				case "bool4":case "float4":case "int4":
					gl.vertexAttrib4f(this.index,0,0,0,0);
					break;
				case "matrix2x2":
					gl.vertexAttrib2f(this.index + 0,0,0);
					gl.vertexAttrib2f(this.index + 1,0,0);
					break;
				case "matrix3x3":
					gl.vertexAttrib3f(this.index + 0,0,0,0);
					gl.vertexAttrib3f(this.index + 1,0,0,0);
					gl.vertexAttrib3f(this.index + 2,0,0,0);
					break;
				case "matrix4x4":
					gl.vertexAttrib4f(this.index + 0,0,0,0,0);
					gl.vertexAttrib4f(this.index + 1,0,0,0,0);
					gl.vertexAttrib4f(this.index + 2,0,0,0,0);
					gl.vertexAttrib4f(this.index + 3,0,0,0,0);
					break;
				default:
				}
			}
		} else {
			var type = gl.FLOAT;
			if(this.__isBool) {
				type = gl.INT;
			} else if(this.__isInt) {
				type = gl.INT;
			}
			var _g2 = 0;
			var _g11 = this.__arrayLength;
			while(_g2 < _g11) {
				var i1 = _g2++;
				gl.enableVertexAttribArray(this.index + i1);
			}
			if(length > 0) {
				var _g21 = 0;
				var _g3 = this.__arrayLength;
				while(_g21 < _g3) {
					var i2 = _g21++;
					gl.vertexAttribPointer(this.index + i2,this.__length,type,false,this.__length * 4,(position + bufferOffset * this.__length + i2 * this.__arrayLength) * 4);
				}
			}
		}
	},
	set_name: function(value) {
		this.__internal = (StringTools().default).startsWith(value,"openfl_");
		return this.name = value;
	}
};
ShaderParameter.prototype.__class__ = ShaderParameter.prototype.constructor = $hxClasses["openfl.display.ShaderParameter"] = ShaderParameter;

// Init



// Statics


ShaderParameter.__meta__ = { fields : { index : { SuppressWarnings : ["checkstyle:Dynamic"]}, name : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}}

// Export

exports.default = ShaderParameter;