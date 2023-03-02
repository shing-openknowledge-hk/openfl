// Class: openfl._internal.symbols.StaticTextSymbol

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
var $extend = require("./../../../extend_stub").default;
function openfl__$internal_symbols_SWFSymbol() {return require("./../../../openfl/_internal/symbols/SWFSymbol");}
function openfl_text_StaticText() {return require("./../../../openfl/text/StaticText");}

// Constructor

var StaticTextSymbol = function() {
	(openfl__$internal_symbols_SWFSymbol().default).call(this);
}

// Meta

StaticTextSymbol.__name__ = "openfl._internal.symbols.StaticTextSymbol";
StaticTextSymbol.__isInterface__ = false;
StaticTextSymbol.__super__ = (openfl__$internal_symbols_SWFSymbol().default);
StaticTextSymbol.prototype = $extend((openfl__$internal_symbols_SWFSymbol().default).prototype, {
	__createObject: function(swf) {
		var staticText = new (openfl_text_StaticText().default)();
		var graphics = staticText.__graphics;
		if(this.rendered != null) {
			staticText.text = this.rendered.text;
			graphics.copyFrom(this.rendered.__graphics);
			return staticText;
		}
		var text = "";
		if(this.records != null) {
			var font = null;
			var color = 16777215;
			var offsetX = this.matrix.tx;
			var offsetY = this.matrix.ty;
			var scale;
			var index;
			var _g = 0;
			var _g1 = this.records;
			while(_g < _g1.length) {
				var record = _g1[_g];
				++_g;
				if(record.fontID != null) {
					font = swf.symbols.get(record.fontID);
				}
				if(record.offsetX != null) {
					offsetX = this.matrix.tx + record.offsetX * 0.05;
				}
				if(record.offsetY != null) {
					offsetY = this.matrix.ty + record.offsetY * 0.05;
				}
				if(record.color != null) {
					color = record.color;
				}
				if(font != null) {
					scale = record.fontHeight / 1024 * 0.05;
					var _g2 = 0;
					var _g11 = record.glyphs.length;
					while(_g2 < _g11) {
						var i = _g2++;
						index = record.glyphs[i];
						var code = font.codes[index];
						text += String.fromCodePoint(code);
						var _g3 = 0;
						var _g12 = font.glyphs[index];
						while(_g3 < _g12.length) {
							var command = _g12[_g3];
							++_g3;
							switch(command._hx_index) {
							case 1:
								var _g21 = command.color;
								var alpha = command.alpha;
								graphics.beginFill(color & 16777215,(color >> 24 & 255) / 255);
								break;
							case 3:
								var anchorY = command.anchorY;
								var anchorX = command.anchorX;
								var controlY = command.controlY;
								var controlX = command.controlX;
								graphics.curveTo(controlX * scale + offsetX,controlY * scale + offsetY,anchorX * scale + offsetX,anchorY * scale + offsetY);
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
									var tmp;
									if(scaleMode == null) {
										tmp = null;
									} else {
										switch(scaleMode) {
										case 0:
											tmp = "horizontal";
											break;
										case 1:
											tmp = "none";
											break;
										case 2:
											tmp = "normal";
											break;
										case 3:
											tmp = "vertical";
											break;
										default:
											tmp = null;
										}
									}
									var tmp1;
									if(caps == null) {
										tmp1 = null;
									} else {
										switch(caps) {
										case 0:
											tmp1 = "none";
											break;
										case 1:
											tmp1 = "round";
											break;
										case 2:
											tmp1 = "square";
											break;
										default:
											tmp1 = null;
										}
									}
									var tmp2;
									if(joints == null) {
										tmp2 = null;
									} else {
										switch(joints) {
										case 0:
											tmp2 = "bevel";
											break;
										case 1:
											tmp2 = "miter";
											break;
										case 2:
											tmp2 = "round";
											break;
										default:
											tmp2 = null;
										}
									}
									graphics.lineStyle(thickness,color1,alpha1,pixelHinting,tmp,tmp1,tmp2,miterLimit);
								} else {
									graphics.lineStyle();
								}
								break;
							case 6:
								var y = command.y;
								var x = command.x;
								graphics.lineTo(x * scale + offsetX,y * scale + offsetY);
								break;
							case 7:
								var y1 = command.y;
								var x1 = command.x;
								graphics.moveTo(x1 * scale + offsetX,y1 * scale + offsetY);
								break;
							default:
							}
						}
						offsetX += record.advances[i] * 0.05;
					}
				}
			}
		}
		staticText.text = text;
		this.records = null;
		this.rendered = new (openfl_text_StaticText().default)();
		this.rendered.text = text;
		this.rendered.__graphics.copyFrom(staticText.__graphics);
		return staticText;
	}
});
StaticTextSymbol.prototype.__class__ = StaticTextSymbol.prototype.constructor = $hxClasses["openfl._internal.symbols.StaticTextSymbol"] = StaticTextSymbol;

// Init



// Statics




// Export

exports.default = StaticTextSymbol;