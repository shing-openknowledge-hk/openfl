// Class: openfl.display.GraphicsPath

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function openfl_display_IGraphicsPath() {return require("./../../openfl/display/IGraphicsPath");}
function openfl_display_IGraphicsData() {return require("./../../openfl/display/IGraphicsData");}
function openfl__$Vector_Vector_$Impl_$() {return require("./../../openfl/_Vector/Vector_Impl_");}

// Constructor

var GraphicsPath = function(commands,data,winding) {
	if(winding == null) {
		winding = "evenOdd";
	}
	this.commands = commands;
	this.data = data;
	this.winding = winding;
	this.__graphicsDataType = 3;
}

// Meta

GraphicsPath.__name__ = "openfl.display.GraphicsPath";
GraphicsPath.__isInterface__ = false;
GraphicsPath.__interfaces__ = [(openfl_display_IGraphicsPath().default),(openfl_display_IGraphicsData().default)];
GraphicsPath.prototype = {
	cubicCurveTo: function(controlX1,controlY1,controlX2,controlY2,anchorX,anchorY) {
		if(this.commands == null) {
			this.commands = (openfl__$Vector_Vector_$Impl_$().default)._new();
		}
		if(this.data == null) {
			this.data = (openfl__$Vector_Vector_$Impl_$().default)._new();
		}
		(openfl__$Vector_Vector_$Impl_$().default).push(this.commands,6);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.data,controlX1);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.data,controlY1);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.data,controlX2);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.data,controlY2);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.data,anchorX);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.data,anchorY);
	},
	curveTo: function(controlX,controlY,anchorX,anchorY) {
		if(this.commands == null) {
			this.commands = (openfl__$Vector_Vector_$Impl_$().default)._new();
		}
		if(this.data == null) {
			this.data = (openfl__$Vector_Vector_$Impl_$().default)._new();
		}
		(openfl__$Vector_Vector_$Impl_$().default).push(this.commands,3);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.data,controlX);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.data,controlY);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.data,anchorX);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.data,anchorY);
	},
	lineTo: function(x,y) {
		if(this.commands == null) {
			this.commands = (openfl__$Vector_Vector_$Impl_$().default)._new();
		}
		if(this.data == null) {
			this.data = (openfl__$Vector_Vector_$Impl_$().default)._new();
		}
		(openfl__$Vector_Vector_$Impl_$().default).push(this.commands,2);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.data,x);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.data,y);
	},
	moveTo: function(x,y) {
		if(this.commands == null) {
			this.commands = (openfl__$Vector_Vector_$Impl_$().default)._new();
		}
		if(this.data == null) {
			this.data = (openfl__$Vector_Vector_$Impl_$().default)._new();
		}
		(openfl__$Vector_Vector_$Impl_$().default).push(this.commands,1);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.data,x);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.data,y);
	},
	wideLineTo: function(x,y) {
		if(this.commands == null) {
			this.commands = (openfl__$Vector_Vector_$Impl_$().default)._new();
		}
		if(this.data == null) {
			this.data = (openfl__$Vector_Vector_$Impl_$().default)._new();
		}
		(openfl__$Vector_Vector_$Impl_$().default).push(this.commands,2);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.data,x);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.data,y);
	},
	wideMoveTo: function(x,y) {
		if(this.commands == null) {
			this.commands = (openfl__$Vector_Vector_$Impl_$().default)._new();
		}
		if(this.data == null) {
			this.data = (openfl__$Vector_Vector_$Impl_$().default)._new();
		}
		(openfl__$Vector_Vector_$Impl_$().default).push(this.commands,1);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.data,x);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.data,y);
	},
	__drawCircle: function(x,y,radius) {
		this.__drawRoundRect(x - radius,y - radius,radius * 2,radius * 2,radius * 2,radius * 2);
	},
	__drawEllipse: function(x,y,width,height) {
		this.__drawRoundRect(x,y,width,height,width,height);
	},
	__drawRect: function(x,y,width,height) {
		this.moveTo(x,y);
		this.lineTo(x + width,y);
		this.lineTo(x + width,y + height);
		this.lineTo(x,y + height);
		this.lineTo(x,y);
	},
	__drawRoundRect: function(x,y,width,height,ellipseWidth,ellipseHeight) {
		ellipseWidth *= 0.5;
		ellipseHeight *= 0.5;
		if(ellipseWidth > width / 2) {
			ellipseWidth = width / 2;
		}
		if(ellipseHeight > height / 2) {
			ellipseHeight = height / 2;
		}
		var xe = x + width;
		var ye = y + height;
		var cx1 = -ellipseWidth + ellipseWidth * 0.70710678118654752440084436210485;
		var cx2 = -ellipseWidth + ellipseWidth * 0.4142135623730950488016887242097;
		var cy1 = -ellipseHeight + ellipseHeight * 0.70710678118654752440084436210485;
		var cy2 = -ellipseHeight + ellipseHeight * 0.4142135623730950488016887242097;
		this.moveTo(xe,ye - ellipseHeight);
		this.curveTo(xe,ye + cy2,xe + cx1,ye + cy1);
		this.curveTo(xe + cx2,ye,xe - ellipseWidth,ye);
		this.lineTo(x + ellipseWidth,ye);
		this.curveTo(x - cx2,ye,x - cx1,ye + cy1);
		this.curveTo(x,ye + cy2,x,ye - ellipseHeight);
		this.lineTo(x,y + ellipseHeight);
		this.curveTo(x,y - cy2,x - cx1,y - cy1);
		this.curveTo(x - cx2,y,x + ellipseWidth,y);
		this.lineTo(xe - ellipseWidth,y);
		this.curveTo(xe + cx2,y,xe + cx1,y - cy1);
		this.curveTo(xe,y - cy2,xe,y + ellipseHeight);
		this.lineTo(xe,ye - ellipseHeight);
	}
};
GraphicsPath.prototype.__class__ = GraphicsPath.prototype.constructor = $hxClasses["openfl.display.GraphicsPath"] = GraphicsPath;

// Init



// Statics


GraphicsPath.SIN45 = 0.70710678118654752440084436210485
GraphicsPath.TAN22 = 0.4142135623730950488016887242097

// Export

exports.default = GraphicsPath;