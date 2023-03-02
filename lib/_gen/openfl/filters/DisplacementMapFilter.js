// Class: openfl.filters.DisplacementMapFilter

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_filters_BitmapFilter() {return require("./../../openfl/filters/BitmapFilter");}
function lime__$internal_graphics_ImageCanvasUtil() {return require("./../../lime/_internal/graphics/ImageCanvasUtil");}
function lime__$internal_graphics_ImageDataUtil() {return require("./../../lime/_internal/graphics/ImageDataUtil");}
function lime_math_Vector2() {return require("./../../lime/math/Vector2");}
function lime_math_Vector4() {return require("./../../lime/math/Vector4");}
function openfl_filters__$DisplacementMapFilter_DisplacementMapShader() {return require("./../../openfl/filters/_DisplacementMapFilter/DisplacementMapShader");}
function openfl_geom_Point() {return require("./../../openfl/geom/Point");}

// Constructor

var DisplacementMapFilter = function(mapBitmap,mapPoint,componentX,componentY,scaleX,scaleY,mode,color,alpha) {
	if(alpha == null) {
		alpha = 0.0;
	}
	if(color == null) {
		color = 0;
	}
	if(mode == null) {
		mode = "wrap";
	}
	if(scaleY == null) {
		scaleY = 0.0;
	}
	if(scaleX == null) {
		scaleX = 0.0;
	}
	if(componentY == null) {
		componentY = 0;
	}
	if(componentX == null) {
		componentX = 0;
	}
	(openfl_filters_BitmapFilter().default).call(this);
	this.__mapBitmap = mapBitmap;
	this.__mapPoint = mapPoint != null ? mapPoint : new (openfl_geom_Point().default)();
	this.__componentX = componentX;
	this.__componentY = componentY;
	this.__scaleX = scaleX;
	this.__scaleY = scaleY;
	this.__mode = mode;
	this.__color = color;
	this.__alpha = alpha;
	this.__needSecondBitmapData = true;
	this.__preserveObject = false;
	this.__renderDirty = true;
	this.__numShaderPasses = 1;
}

// Meta

DisplacementMapFilter.__name__ = "openfl.filters.DisplacementMapFilter";
DisplacementMapFilter.__isInterface__ = false;
DisplacementMapFilter.__super__ = (openfl_filters_BitmapFilter().default);
DisplacementMapFilter.prototype = $extend((openfl_filters_BitmapFilter().default).prototype, {
	clone: function() {
		return new DisplacementMapFilter(this.__mapBitmap,this.__mapPoint.clone(),this.__componentX,this.__componentY,this.__scaleX,this.__scaleY,this.__mode,this.__color,this.__alpha);
	},
	__applyFilter: function(bitmapData,sourceBitmapData,sourceRect,destPoint) {
		this.__updateMapMatrix();
		(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(bitmapData.image);
		(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(sourceBitmapData.image);
		(lime__$internal_graphics_ImageCanvasUtil().default).convertToData(this.__mapBitmap.image);
		(lime__$internal_graphics_ImageDataUtil().default).displaceMap(bitmapData.image,sourceBitmapData.image,this.__mapBitmap.image,new (lime_math_Vector2().default)(this.__mapPoint.x / this.__mapBitmap.width,this.__mapPoint.y / this.__mapBitmap.height),new (lime_math_Vector4().default)(DisplacementMapFilter.__matrixData[0],DisplacementMapFilter.__matrixData[4],DisplacementMapFilter.__matrixData[8],DisplacementMapFilter.__matrixData[12]),new (lime_math_Vector4().default)(DisplacementMapFilter.__matrixData[1],DisplacementMapFilter.__matrixData[5],DisplacementMapFilter.__matrixData[9],DisplacementMapFilter.__matrixData[13]),this.__smooth);
		return bitmapData;
	},
	__initShader: function(renderer,pass) {
		this.__updateMapMatrix();
		DisplacementMapFilter.__displacementMapShader.uOffsets.value = DisplacementMapFilter.__offset;
		DisplacementMapFilter.__displacementMapShader.uDisplacements.value = DisplacementMapFilter.__matrixData;
		var tmp = this.get_mapPoint().x / this.__mapBitmap.width;
		var tmp1 = this.get_mapPoint().y / this.__mapBitmap.height;
		DisplacementMapFilter.__displacementMapShader.mapTextureCoordsOffset.value = [tmp,tmp1];
		DisplacementMapFilter.__displacementMapShader.mapTexture.input = this.__mapBitmap;
		return DisplacementMapFilter.__displacementMapShader;
	},
	__updateMapMatrix: function() {
		var columnX;
		var columnY;
		var scale = 1.0;
		var textureWidth = this.__mapBitmap.width;
		var textureHeight = this.__mapBitmap.height;
		DisplacementMapFilter.__matrixData[0] = 0;
		DisplacementMapFilter.__matrixData[1] = 0;
		DisplacementMapFilter.__matrixData[2] = 0;
		DisplacementMapFilter.__matrixData[3] = 0;
		DisplacementMapFilter.__matrixData[4] = 0;
		DisplacementMapFilter.__matrixData[5] = 0;
		DisplacementMapFilter.__matrixData[6] = 0;
		DisplacementMapFilter.__matrixData[7] = 0;
		DisplacementMapFilter.__matrixData[8] = 0;
		DisplacementMapFilter.__matrixData[9] = 0;
		DisplacementMapFilter.__matrixData[10] = 0;
		DisplacementMapFilter.__matrixData[11] = 0;
		DisplacementMapFilter.__matrixData[12] = 0;
		DisplacementMapFilter.__matrixData[13] = 0;
		DisplacementMapFilter.__matrixData[14] = 0;
		DisplacementMapFilter.__matrixData[15] = 0;
		if(this.__componentX == 1) {
			columnX = 0;
		} else if(this.__componentX == 2) {
			columnX = 1;
		} else if(this.__componentX == 4) {
			columnX = 2;
		} else {
			columnX = 3;
		}
		if(this.__componentY == 1) {
			columnY = 0;
		} else if(this.__componentY == 2) {
			columnY = 1;
		} else if(this.__componentY == 4) {
			columnY = 2;
		} else {
			columnY = 3;
		}
		DisplacementMapFilter.__matrixData[columnX * 4] = this.__scaleX * scale / textureWidth;
		DisplacementMapFilter.__matrixData[columnY * 4 + 1] = this.__scaleY * scale / textureHeight;
	},
	get_alpha: function() {
		return this.__alpha;
	},
	set_alpha: function(value) {
		if(value != this.__alpha) {
			this.__renderDirty = true;
		}
		return this.__alpha = value;
	},
	get_componentX: function() {
		return this.__componentX;
	},
	set_componentX: function(value) {
		if(value != this.__componentX) {
			this.__renderDirty = true;
		}
		return this.__componentX = value;
	},
	get_componentY: function() {
		return this.__componentY;
	},
	set_componentY: function(value) {
		if(value != this.__componentY) {
			this.__renderDirty = true;
		}
		return this.__componentY = value;
	},
	get_color: function() {
		return this.__color;
	},
	set_color: function(value) {
		if(value != this.__color) {
			this.__renderDirty = true;
		}
		return this.__color = value;
	},
	get_scaleX: function() {
		return this.__scaleX;
	},
	set_scaleX: function(value) {
		if(value != this.__scaleX) {
			this.__renderDirty = true;
		}
		return this.__scaleX = value;
	},
	get_scaleY: function() {
		return this.__scaleY;
	},
	set_scaleY: function(value) {
		if(value != this.__scaleY) {
			this.__renderDirty = true;
		}
		return this.__scaleY = value;
	},
	get_mapBitmap: function() {
		return this.__mapBitmap;
	},
	set_mapBitmap: function(value) {
		if(value != this.__mapBitmap) {
			this.__renderDirty = true;
		}
		return this.__mapBitmap = value;
	},
	get_mapPoint: function() {
		return this.__mapPoint;
	},
	set_mapPoint: function(value) {
		if(value != this.__mapPoint) {
			this.__renderDirty = true;
		}
		return this.__mapPoint = value;
	},
	get_mode: function() {
		return this.__mode;
	},
	set_mode: function(value) {
		if(value != this.__mode) {
			this.__renderDirty = true;
		}
		return this.__mode = value;
	}
});
DisplacementMapFilter.prototype.__class__ = DisplacementMapFilter.prototype.constructor = $hxClasses["openfl.filters.DisplacementMapFilter"] = DisplacementMapFilter;

// Init



// Statics


DisplacementMapFilter.__displacementMapShader = new (openfl_filters__$DisplacementMapFilter_DisplacementMapShader().default)()
DisplacementMapFilter.__matrixData = [0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]
DisplacementMapFilter.__offset = [0.5,0.5,0.0,0.0]

// Export

exports.default = DisplacementMapFilter;