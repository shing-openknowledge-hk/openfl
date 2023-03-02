// Class: openfl._internal.renderer.canvas.CanvasTextField

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl_geom_Rectangle() {return require("./../../../../openfl/geom/Rectangle");}
function Std() {return require("./../../../../Std");}
function openfl_geom_Matrix() {return require("./../../../../openfl/geom/Matrix");}
function StringTools() {return require("./../../../../StringTools");}
function openfl__$Vector_VectorIterator() {return require("./../../../../openfl/_Vector/VectorIterator");}
function openfl__$internal_text_TextEngine() {return require("./../../../../openfl/_internal/text/TextEngine");}
function openfl_display_BitmapData() {return require("./../../../../openfl/display/BitmapData");}

// Constructor

var CanvasTextField = function(){}

// Meta

CanvasTextField.__name__ = "openfl._internal.renderer.canvas.CanvasTextField";
CanvasTextField.__isInterface__ = false;
CanvasTextField.prototype = {
	
};
CanvasTextField.prototype.__class__ = CanvasTextField.prototype.constructor = $hxClasses["openfl._internal.renderer.canvas.CanvasTextField"] = CanvasTextField;

// Init



// Statics

CanvasTextField.render = function(textField,renderer,transform) {
	var textEngine = textField.__textEngine;
	var bounds = textEngine.background || textEngine.border ? textEngine.bounds : textEngine.textBounds;
	var graphics = textField.__graphics;
	if(textField.__dirty) {
		textField.__updateLayout();
		if(graphics.__bounds == null) {
			graphics.__bounds = new (openfl_geom_Rectangle().default)();
		}
		graphics.__bounds.copyFrom(bounds);
	}
	graphics.__update(renderer.__worldTransform);
	if(textField.__dirty || graphics.__softwareDirty) {
		var width = graphics.__width;
		var height = graphics.__height;
		if((textEngine.text == null || textEngine.text == "") && !textEngine.background && !textEngine.border && !textEngine.__hasFocus && (textEngine.type != "input" || !textEngine.selectable) || (textEngine.width <= 0 || textEngine.height <= 0) && textEngine.autoSize != "none") {
			textField.__graphics.__canvas = null;
			textField.__graphics.__context = null;
			textField.__graphics.__bitmap = null;
			textField.__graphics.__softwareDirty = false;
			textField.__graphics.set___dirty(false);
			textField.__dirty = false;
		} else {
			if(textField.__graphics.__canvas == null) {
				textField.__graphics.__canvas = window.document.createElement("canvas");
				textField.__graphics.__context = textField.__graphics.__canvas.getContext("2d");
			}
			CanvasTextField.context = graphics.__context;
			var transform1 = graphics.__renderTransform;
			if(renderer.__isDOM) {
				var scale = renderer.pixelRatio;
				graphics.__canvas.width = (Std().default).int(width * scale);
				graphics.__canvas.height = (Std().default).int(height * scale);
				graphics.__canvas.style.width = width + "px";
				graphics.__canvas.style.height = height + "px";
				var matrix = (openfl_geom_Matrix().default).__pool.get();
				matrix.copyFrom(transform1);
				matrix.scale(scale,scale);
				renderer.setTransform(matrix,CanvasTextField.context);
				(openfl_geom_Matrix().default).__pool.release(matrix);
			} else {
				graphics.__canvas.width = width;
				graphics.__canvas.height = height;
				CanvasTextField.context.setTransform(transform1.a,transform1.b,transform1.c,transform1.d,transform1.tx,transform1.ty);
			}
			if(CanvasTextField.clearRect == null) {
				CanvasTextField.clearRect = (typeof navigator !== 'undefined' && typeof navigator['isCocoonJS'] !== 'undefined');
			}
			if(CanvasTextField.clearRect) {
				CanvasTextField.context.clearRect(0,0,graphics.__canvas.width,graphics.__canvas.height);
			}
			if(textEngine.text != null && textEngine.text != "" || textEngine.__hasFocus) {
				var text = textEngine.text;
				if(!renderer.__allowSmoothing || textEngine.antiAliasType == "advanced" && textEngine.sharpness == 400) {
					graphics.__context.imageSmoothingEnabled = false;
				} else {
					graphics.__context.imageSmoothingEnabled = true;
				}
				if(textEngine.border || textEngine.background) {
					CanvasTextField.context.rect(0.5,0.5,bounds.width - 1,bounds.height - 1);
					if(textEngine.background) {
						var tmp = (StringTools().default).hex(textEngine.backgroundColor & 16777215,6);
						CanvasTextField.context.fillStyle = "#" + tmp;
						CanvasTextField.context.fill();
					}
					if(textEngine.border) {
						CanvasTextField.context.lineWidth = 1;
						var tmp1 = (StringTools().default).hex(textEngine.borderColor & 16777215,6);
						CanvasTextField.context.strokeStyle = "#" + tmp1;
						CanvasTextField.context.stroke();
					}
				}
				CanvasTextField.context.textBaseline = "alphabetic";
				CanvasTextField.context.textAlign = "start";
				var scrollX = -textField.get_scrollH();
				var scrollY = 0.0;
				var _g = 0;
				var _g1 = textField.get_scrollV() - 1;
				while(_g < _g1) {
					var i = _g++;
					scrollY -= textEngine.lineHeights[i];
				}
				var advance;
				var group = new (openfl__$Vector_VectorIterator().default)(textEngine.layoutGroups);
				while(group.hasNext()) {
					var group1 = group.next();
					if(group1.lineIndex < textField.get_scrollV() - 1) {
						continue;
					}
					if(group1.lineIndex > textEngine.get_bottomScrollV() - 1) {
						break;
					}
					var color = "#" + (StringTools().default).hex(group1.format.color & 16777215,6);
					CanvasTextField.context.font = (openfl__$internal_text_TextEngine().default).getFont(group1.format);
					CanvasTextField.context.fillStyle = color;
					CanvasTextField.context.fillText(text.substring(group1.startIndex,group1.endIndex),group1.offsetX + scrollX - bounds.x,group1.offsetY + group1.ascent + scrollY - bounds.y);
					if(textField.__caretIndex > -1 && textEngine.selectable) {
						if(textField.__selectionIndex == textField.__caretIndex) {
							if(textField.__showCursor && group1.startIndex <= textField.__caretIndex && group1.endIndex >= textField.__caretIndex) {
								advance = 0.0;
								var _g3 = 0;
								var _g4 = textField.__caretIndex - group1.startIndex;
								while(_g3 < _g4) {
									var i1 = _g3++;
									if(group1.positions.length <= i1) {
										break;
									}
									advance += group1.getAdvance(i1);
								}
								var scrollY1 = 0.0;
								var _g5 = textField.get_scrollV();
								var _g6 = group1.lineIndex + 1;
								while(_g5 < _g6) {
									var i2 = _g5++;
									scrollY1 += textEngine.lineHeights[i2 - 1];
								}
								CanvasTextField.context.beginPath();
								var tmp2 = (StringTools().default).hex(group1.format.color & 16777215,6);
								CanvasTextField.context.strokeStyle = "#" + tmp2;
								CanvasTextField.context.moveTo(group1.offsetX + advance - textField.get_scrollH() - bounds.x,scrollY1 + 2 - bounds.y);
								CanvasTextField.context.lineWidth = 1;
								CanvasTextField.context.lineTo(group1.offsetX + advance - textField.get_scrollH() - bounds.x,scrollY1 + (openfl__$internal_text_TextEngine().default).getFormatHeight(textField.get_defaultTextFormat()) - 1 - bounds.y);
								CanvasTextField.context.stroke();
								CanvasTextField.context.closePath();
							}
						} else if(group1.startIndex <= textField.__caretIndex && group1.endIndex >= textField.__caretIndex || group1.startIndex <= textField.__selectionIndex && group1.endIndex >= textField.__selectionIndex || group1.startIndex > textField.__caretIndex && group1.endIndex < textField.__selectionIndex || group1.startIndex > textField.__selectionIndex && group1.endIndex < textField.__caretIndex) {
							var selectionStart = (Std().default).int(Math.min(textField.__selectionIndex,textField.__caretIndex));
							var selectionEnd = (Std().default).int(Math.max(textField.__selectionIndex,textField.__caretIndex));
							if(group1.startIndex > selectionStart) {
								selectionStart = group1.startIndex;
							}
							if(group1.endIndex < selectionEnd) {
								selectionEnd = group1.endIndex;
							}
							var end;
							var start = textField.getCharBoundaries(selectionStart);
							if(selectionEnd >= group1.endIndex) {
								end = textField.getCharBoundaries(group1.endIndex - 1);
								if(end != null) {
									end.x += end.width + 2;
								}
							} else {
								end = textField.getCharBoundaries(selectionEnd);
							}
							if(start != null && end != null) {
								CanvasTextField.context.fillStyle = "#000000";
								CanvasTextField.context.fillRect(start.x + scrollX,start.y + scrollY,end.x - start.x,group1.height);
								CanvasTextField.context.fillStyle = "#FFFFFF";
								CanvasTextField.context.fillText(text.substring(selectionStart,selectionEnd),scrollX + start.x,group1.offsetY + group1.ascent + scrollY);
							}
						}
					}
					if(group1.format.underline) {
						CanvasTextField.context.beginPath();
						CanvasTextField.context.strokeStyle = color;
						CanvasTextField.context.lineWidth = 1;
						var x = group1.offsetX + scrollX - bounds.x;
						var y = Math.floor(group1.offsetY + scrollY + group1.ascent - bounds.y) + 0.5;
						CanvasTextField.context.moveTo(x,y);
						CanvasTextField.context.lineTo(x + group1.width,y);
						CanvasTextField.context.stroke();
						CanvasTextField.context.closePath();
					}
				}
			} else {
				if(textEngine.border || textEngine.background) {
					if(textEngine.border) {
						CanvasTextField.context.rect(0.5,0.5,bounds.width - 1,bounds.height - 1);
					} else {
						CanvasTextField.context.rect(0,0,bounds.width,bounds.height);
					}
					if(textEngine.background) {
						var tmp3 = (StringTools().default).hex(textEngine.backgroundColor & 16777215,6);
						CanvasTextField.context.fillStyle = "#" + tmp3;
						CanvasTextField.context.fill();
					}
					if(textEngine.border) {
						CanvasTextField.context.lineWidth = 1;
						CanvasTextField.context.lineCap = "square";
						var tmp4 = (StringTools().default).hex(textEngine.borderColor & 16777215,6);
						CanvasTextField.context.strokeStyle = "#" + tmp4;
						CanvasTextField.context.stroke();
					}
				}
				if(textField.__caretIndex > -1 && textEngine.selectable && textField.__showCursor) {
					var scrollX1 = -textField.get_scrollH();
					var scrollY2 = 0.0;
					var _g2 = 0;
					var _g11 = textField.get_scrollV() - 1;
					while(_g2 < _g11) {
						var i3 = _g2++;
						scrollY2 += textEngine.lineHeights[i3];
					}
					CanvasTextField.context.beginPath();
					var tmp5 = (StringTools().default).hex(textField.get_defaultTextFormat().color & 16777215,6);
					CanvasTextField.context.strokeStyle = "#" + tmp5;
					CanvasTextField.context.moveTo(scrollX1 + 2.5,scrollY2 + 2.5);
					CanvasTextField.context.lineWidth = 1;
					CanvasTextField.context.lineTo(scrollX1 + 2.5,scrollY2 + (openfl__$internal_text_TextEngine().default).getFormatHeight(textField.get_defaultTextFormat()) - 1);
					CanvasTextField.context.stroke();
					CanvasTextField.context.closePath();
				}
			}
			graphics.__bitmap = (openfl_display_BitmapData().default).fromCanvas(textField.__graphics.__canvas);
			graphics.__visible = true;
			textField.__dirty = false;
			graphics.__softwareDirty = false;
			graphics.set___dirty(false);
		}
	}
}
CanvasTextField.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = CanvasTextField;