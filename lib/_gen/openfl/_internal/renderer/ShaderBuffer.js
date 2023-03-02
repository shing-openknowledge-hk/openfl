// Class: openfl._internal.renderer.ShaderBuffer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;

// Constructor

var ShaderBuffer = function() {
	this.inputRefs = [];
	this.inputFilter = [];
	this.inputMipFilter = [];
	this.inputs = [];
	this.inputWrap = [];
	this.overrideIntNames = [];
	this.overrideIntValues = [];
	this.overrideFloatNames = [];
	this.overrideFloatValues = [];
	this.overrideBoolNames = [];
	this.overrideBoolValues = [];
	this.paramLengths = [];
	this.paramPositions = [];
	this.paramRefs_Bool = [];
	this.paramRefs_Float = [];
	this.paramRefs_Int = [];
	this.paramTypes = [];
}

// Meta

ShaderBuffer.__name__ = "openfl._internal.renderer.ShaderBuffer";
ShaderBuffer.__isInterface__ = false;
ShaderBuffer.prototype = {
	addBoolOverride: function(name,values) {
		this.overrideBoolNames[this.overrideBoolCount] = name;
		this.overrideBoolValues[this.overrideBoolCount] = values;
		this.overrideBoolCount++;
	},
	addFloatOverride: function(name,values) {
		this.overrideFloatNames[this.overrideFloatCount] = name;
		this.overrideFloatValues[this.overrideFloatCount] = values;
		this.overrideFloatCount++;
	},
	addIntOverride: function(name,values) {
		this.overrideIntNames[this.overrideIntCount] = name;
		this.overrideIntValues[this.overrideIntCount] = values;
		this.overrideIntCount++;
	},
	clearOverride: function() {
		this.overrideIntCount = 0;
		this.overrideFloatCount = 0;
		this.overrideBoolCount = 0;
	},
	update: function(shader) {
		this.inputCount = 0;
		this.overrideIntCount = 0;
		this.overrideFloatCount = 0;
		this.overrideBoolCount = 0;
		this.paramBoolCount = 0;
		this.paramCount = 0;
		this.paramDataLength = 0;
		this.paramFloatCount = 0;
		this.paramIntCount = 0;
		this.shader = null;
		if(shader == null) {
			return;
		}
		shader.__init();
		this.inputCount = shader.__inputBitmapData.length;
		var input;
		var _g = 0;
		var _g1 = this.inputCount;
		while(_g < _g1) {
			var i = _g++;
			input = shader.__inputBitmapData[i];
			this.inputs[i] = input.input;
			this.inputFilter[i] = input.filter;
			this.inputMipFilter[i] = input.mipFilter;
			this.inputRefs[i] = input;
			this.inputWrap[i] = input.wrap;
		}
		var boolCount = shader.__paramBool.length;
		var floatCount = shader.__paramFloat.length;
		var intCount = shader.__paramInt.length;
		this.paramCount = boolCount + floatCount + intCount;
		this.paramBoolCount = boolCount;
		this.paramFloatCount = floatCount;
		this.paramIntCount = intCount;
		var length = 0;
		var p = 0;
		var param;
		var _g2 = 0;
		var _g3 = boolCount;
		while(_g2 < _g3) {
			var i1 = _g2++;
			param = shader.__paramBool[i1];
			this.paramPositions[p] = this.paramDataLength;
			length = param.value != null ? param.value.length : 0;
			this.paramLengths[p] = length;
			this.paramDataLength += length;
			this.paramTypes[p] = 0;
			this.paramRefs_Bool[i1] = param;
			++p;
		}
		var param1;
		var _g4 = 0;
		var _g5 = floatCount;
		while(_g4 < _g5) {
			var i2 = _g4++;
			param1 = shader.__paramFloat[i2];
			this.paramPositions[p] = this.paramDataLength;
			length = param1.value != null ? param1.value.length : 0;
			this.paramLengths[p] = length;
			this.paramDataLength += length;
			this.paramTypes[p] = 1;
			this.paramRefs_Float[i2] = param1;
			++p;
		}
		var param2;
		var _g6 = 0;
		var _g7 = intCount;
		while(_g6 < _g7) {
			var i3 = _g6++;
			param2 = shader.__paramInt[i3];
			this.paramPositions[p] = this.paramDataLength;
			length = param2.value != null ? param2.value.length : 0;
			this.paramLengths[p] = length;
			this.paramDataLength += length;
			this.paramTypes[p] = 2;
			this.paramRefs_Int[i3] = param2;
			++p;
		}
		if(this.paramDataLength > 0) {
			if(this.paramData == null) {
				var elements = this.paramDataLength;
				var array = null;
				var view = null;
				var buffer = null;
				var len = null;
				var this1;
				if(elements != null) {
					this1 = new Float32Array(elements);
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
				this.paramData = this1;
			} else if(this.paramDataLength > this.paramData.length) {
				var elements1 = this.paramDataLength;
				var array1 = null;
				var view1 = null;
				var buffer1 = null;
				var len1 = null;
				var this2;
				if(elements1 != null) {
					this2 = new Float32Array(elements1);
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
				var data = this2;
				data.set(this.paramData);
				this.paramData = data;
			}
		}
		var boolIndex = 0;
		var floatIndex = 0;
		var intIndex = 0;
		var paramPosition = 0;
		var boolParam;
		var floatParam;
		var intParam;
		var length1;
		var _g8 = 0;
		var _g9 = this.paramCount;
		while(_g8 < _g9) {
			var i4 = _g8++;
			length1 = this.paramLengths[i4];
			if(i4 < boolCount) {
				boolParam = this.paramRefs_Bool[boolIndex];
				++boolIndex;
				var _g81 = 0;
				var _g91 = length1;
				while(_g81 < _g91) {
					var j = _g81++;
					this.paramData[paramPosition] = boolParam.value[j] ? 1 : 0;
					++paramPosition;
				}
			} else if(i4 < boolCount + floatCount) {
				floatParam = this.paramRefs_Float[floatIndex];
				++floatIndex;
				var _g82 = 0;
				var _g92 = length1;
				while(_g82 < _g92) {
					var j1 = _g82++;
					this.paramData[paramPosition] = floatParam.value[j1];
					++paramPosition;
				}
			} else {
				intParam = this.paramRefs_Int[intIndex];
				++intIndex;
				var _g83 = 0;
				var _g93 = length1;
				while(_g83 < _g93) {
					var j2 = _g83++;
					this.paramData[paramPosition] = intParam.value[j2];
					++paramPosition;
				}
			}
		}
		this.shader = shader;
	}
};
ShaderBuffer.prototype.__class__ = ShaderBuffer.prototype.constructor = $hxClasses["openfl._internal.renderer.ShaderBuffer"] = ShaderBuffer;

// Init



// Statics


ShaderBuffer.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, fields : { overrideIntValues : { SuppressWarnings : ["checkstyle:Dynamic"]}}}

// Export

exports.default = ShaderBuffer;