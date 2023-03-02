// Class: openfl._internal.symbols.ShapeSymbol

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function openfl__$internal_symbols_SWFSymbol() {return require("./../../../openfl/_internal/symbols/SWFSymbol");}
function openfl_display_Shape() {return require("./../../../openfl/display/Shape");}
function openfl_display_BitmapData() {return require("./../../../openfl/display/BitmapData");}

// Constructor

var ShapeSymbol = function() {
	(openfl__$internal_symbols_SWFSymbol().default).call(this);
}

// Meta

ShapeSymbol.__name__ = "openfl._internal.symbols.ShapeSymbol";
ShapeSymbol.__isInterface__ = false;
ShapeSymbol.__super__ = (openfl__$internal_symbols_SWFSymbol().default);
ShapeSymbol.prototype = $extend((openfl__$internal_symbols_SWFSymbol().default).prototype, {
	__createObject: function(swf) {
		var shape = new (openfl_display_Shape().default)();
		var graphics = shape.get_graphics();
		if(this.rendered != null) {
			graphics.copyFrom(this.rendered.get_graphics());
			return shape;
		}
		var _g = 0;
		var _g1 = this.commands;
		while(_g < _g1.length) {
			var command = _g1[_g];
			++_g;
			switch(command._hx_index) {
			case 0:
				var smooth = command.smooth;
				var repeat = command.repeat;
				var matrix = command.matrix;
				var bitmapID = command.bitmap;
				var bitmapSymbol = swf.symbols.get(bitmapID);
				var bitmap = swf.library.getImage(bitmapSymbol.path);
				if(bitmap != null) {
					graphics.beginBitmapFill((openfl_display_BitmapData().default).fromImage(bitmap),matrix,repeat,smooth);
				}
				break;
			case 1:
				var alpha = command.alpha;
				var color = command.color;
				graphics.beginFill(color,alpha);
				break;
			case 2:
				var focalPointRatio = command.focalPointRatio;
				var interpolationMethod = command.interpolationMethod;
				var spreadMethod = command.spreadMethod;
				var matrix1 = command.matrix;
				var ratios = command.ratios;
				var alphas = command.alphas;
				var colors = command.colors;
				var fillType = command.fillType;
				var tmp;
				if(fillType == null) {
					tmp = null;
				} else {
					switch(fillType) {
					case 0:
						tmp = "linear";
						break;
					case 1:
						tmp = "radial";
						break;
					default:
						tmp = null;
					}
				}
				var tmp1;
				if(spreadMethod == null) {
					tmp1 = null;
				} else {
					switch(spreadMethod) {
					case 0:
						tmp1 = "pad";
						break;
					case 1:
						tmp1 = "reflect";
						break;
					case 2:
						tmp1 = "repeat";
						break;
					default:
						tmp1 = null;
					}
				}
				var tmp2;
				if(interpolationMethod == null) {
					tmp2 = null;
				} else {
					switch(interpolationMethod) {
					case 0:
						tmp2 = "linearRGB";
						break;
					case 1:
						tmp2 = "rgb";
						break;
					default:
						tmp2 = null;
					}
				}
				graphics.beginGradientFill(tmp,colors,alphas,ratios,matrix1,tmp1,tmp2,focalPointRatio);
				break;
			case 3:
				var anchorY = command.anchorY;
				var anchorX = command.anchorX;
				var controlY = command.controlY;
				var controlX = command.controlX;
				graphics.curveTo(controlX,controlY,anchorX,anchorY);
				break;
			case 4:
				graphics.endFill();
				break;
			case 5:
				var miterLimit = command.miterLimit;
				var joints = command.joints;
				var caps = command.caps;
				var scaleMode = command.scaleMode;
				var pixelHinting = command.pixelHinting;
				var alpha1 = command.alpha;
				var color1 = command.color;
				var thickness = command.thickness;
				if(thickness != null) {
					var tmp3;
					if(scaleMode == null) {
						tmp3 = null;
					} else {
						switch(scaleMode) {
						case 0:
							tmp3 = "horizontal";
							break;
						case 1:
							tmp3 = "none";
							break;
						case 2:
							tmp3 = "normal";
							break;
						case 3:
							tmp3 = "vertical";
							break;
						default:
							tmp3 = null;
						}
					}
					var tmp4;
					if(caps == null) {
						tmp4 = null;
					} else {
						switch(caps) {
						case 0:
							tmp4 = "none";
							break;
						case 1:
							tmp4 = "round";
							break;
						case 2:
							tmp4 = "square";
							break;
						default:
							tmp4 = null;
						}
					}
					var tmp5;
					if(joints == null) {
						tmp5 = null;
					} else {
						switch(joints) {
						case 0:
							tmp5 = "bevel";
							break;
						case 1:
							tmp5 = "miter";
							break;
						case 2:
							tmp5 = "round";
							break;
						default:
							tmp5 = null;
						}
					}
					graphics.lineStyle(thickness,color1,alpha1,pixelHinting,tmp3,tmp4,tmp5,miterLimit);
				} else {
					graphics.lineStyle();
				}
				break;
			case 6:
				var y = command.y;
				var x = command.x;
				graphics.lineTo(x,y);
				break;
			case 7:
				var y1 = command.y;
				var x1 = command.x;
				graphics.moveTo(x1,y1);
				break;
			}
		}
		this.commands = null;
		this.rendered = new (openfl_display_Shape().default)();
		this.rendered.get_graphics().copyFrom(shape.get_graphics());
		return shape;
	}
});
ShapeSymbol.prototype.__class__ = ShapeSymbol.prototype.constructor = $hxClasses["openfl._internal.symbols.ShapeSymbol"] = ShapeSymbol;

// Init



// Statics




// Export

exports.default = ShapeSymbol;