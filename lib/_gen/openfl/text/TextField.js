// Class: openfl.text.TextField

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_display_InteractiveObject() {return require("./../../openfl/display/InteractiveObject");}
function openfl_geom_Rectangle() {return require("./../../openfl/geom/Rectangle");}
function openfl__$Vector_VectorIterator() {return require("./../../openfl/_Vector/VectorIterator");}
function openfl_text_TextLineMetrics() {return require("./../../openfl/text/TextLineMetrics");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function openfl_errors_RangeError() {return require("./../../openfl/errors/RangeError");}
function openfl_text_TextFormat() {return require("./../../openfl/text/TextFormat");}
function openfl__$internal_text_TextFormatRange() {return require("./../../openfl/_internal/text/TextFormatRange");}
function openfl__$Vector_Vector_$Impl_$() {return require("./../../openfl/_Vector/Vector_Impl_");}
function Std() {return require("./../../Std");}
function StringTools() {return require("./../../StringTools");}
function openfl_events_TextEvent() {return require("./../../openfl/events/TextEvent");}
function HxOverrides() {return require("./../../HxOverrides");}
function openfl_Lib() {return require("./../../openfl/Lib");}
function openfl_net_URLRequest() {return require("./../../openfl/net/URLRequest");}
function openfl_text_Font() {return require("./../../openfl/text/Font");}
function EReg() {return require("./../../EReg");}
function lime_utils_Log() {return require("./../../lime/utils/Log");}
function haxe_CallStack() {return require("./../../haxe/CallStack");}
function openfl__$internal_formats_html_HTMLParser() {return require("./../../openfl/_internal/formats/html/HTMLParser");}
function openfl__$internal_renderer_canvas_CanvasBitmap() {return require("./../../openfl/_internal/renderer/canvas/CanvasBitmap");}
function openfl__$internal_renderer_canvas_CanvasTextField() {return require("./../../openfl/_internal/renderer/canvas/CanvasTextField");}
function openfl__$internal_renderer_canvas_CanvasDisplayObject() {return require("./../../openfl/_internal/renderer/canvas/CanvasDisplayObject");}
function openfl__$internal_renderer_dom_DOMBitmap() {return require("./../../openfl/_internal/renderer/dom/DOMBitmap");}
function openfl__$internal_renderer_dom_DOMTextField() {return require("./../../openfl/_internal/renderer/dom/DOMTextField");}
function openfl__$internal_renderer_context3D_Context3DBitmap() {return require("./../../openfl/_internal/renderer/context3D/Context3DBitmap");}
function openfl__$internal_renderer_context3D_Context3DTextField() {return require("./../../openfl/_internal/renderer/context3D/Context3DTextField");}
function openfl__$internal_renderer_context3D_Context3DDisplayObject() {return require("./../../openfl/_internal/renderer/context3D/Context3DDisplayObject");}
function js_Boot() {return require("./../../js/Boot");}
function openfl_VectorData() {return require("./../../openfl/VectorData");}
function haxe_Timer() {return require("./../../haxe/Timer");}
function openfl_display_DisplayObject() {return require("./../../openfl/display/DisplayObject");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function lime_system_Clipboard() {return require("./../../lime/system/Clipboard");}
function lime_ui__$KeyModifier_KeyModifier_$Impl_$() {return require("./../../lime/ui/_KeyModifier/KeyModifier_Impl_");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function openfl_display_Graphics() {return require("./../../openfl/display/Graphics");}
function openfl__$internal_text_TextEngine() {return require("./../../openfl/_internal/text/TextEngine");}

// Constructor

var TextField = function() {
	this.__forceCachedBitmapUpdate = false;
	this.__renderedOnCanvasWhileOnDOM = false;
	(openfl_display_InteractiveObject().default).call(this);
	this.__caretIndex = -1;
	this.__displayAsPassword = false;
	this.__graphics = new (openfl_display_Graphics().default)(this);
	this.__textEngine = new (openfl__$internal_text_TextEngine().default)(this);
	this.__layoutDirty = true;
	this.__offsetX = 0;
	this.__offsetY = 0;
	this.__mouseWheelEnabled = true;
	this.__text = "";
	if(TextField.__defaultTextFormat == null) {
		TextField.__defaultTextFormat = new (openfl_text_TextFormat().default)("Times New Roman",12,0,false,false,false,"","","left",0,0,0,0);
		TextField.__defaultTextFormat.blockIndent = 0;
		TextField.__defaultTextFormat.bullet = false;
		TextField.__defaultTextFormat.letterSpacing = 0;
		TextField.__defaultTextFormat.kerning = false;
	}
	this.__textFormat = TextField.__defaultTextFormat.clone();
	(openfl__$Vector_Vector_$Impl_$().default).push(this.__textEngine.textFormatRanges,new (openfl__$internal_text_TextFormatRange().default)(this.__textFormat,0,0));
	this.addEventListener("mouseDown",$bind(this,this.this_onMouseDown));
	this.addEventListener("focusIn",$bind(this,this.this_onFocusIn));
	this.addEventListener("focusOut",$bind(this,this.this_onFocusOut));
	this.addEventListener("keyDown",$bind(this,this.this_onKeyDown));
	this.addEventListener("mouseWheel",$bind(this,this.this_onMouseWheel));
}

// Meta

TextField.__name__ = "openfl.text.TextField";
TextField.__isInterface__ = false;
TextField.__super__ = (openfl_display_InteractiveObject().default);
TextField.prototype = $extend((openfl_display_InteractiveObject().default).prototype, {
	appendText: function(text) {
		if(text == null || text == "") {
			return;
		}
		this.__dirty = true;
		this.__layoutDirty = true;
		this.__setRenderDirty();
		this.__updateText(this.__text + text);
		this.__textEngine.textFormatRanges[this.__textEngine.textFormatRanges.get_length() - 1].end = this.__text.length;
		this.__updateScrollV();
		this.__updateScrollH();
	},
	getCharBoundaries: function(charIndex) {
		if(charIndex < 0 || charIndex > this.__text.length - 1) {
			return null;
		}
		var rect = new (openfl_geom_Rectangle().default)();
		if(this.__getCharBoundaries(charIndex,rect)) {
			return rect;
		} else {
			return null;
		}
	},
	getCharIndexAtPoint: function(x,y) {
		if(x <= 2 || x > this.get_width() + 4 || y <= 0 || y > this.get_height() + 4) {
			return -1;
		}
		this.__updateLayout();
		x += this.get_scrollH();
		var _g = 0;
		var _g1 = this.get_scrollV() - 1;
		while(_g < _g1) {
			var i = _g++;
			y += this.__textEngine.lineHeights[i];
		}
		var group = new (openfl__$Vector_VectorIterator().default)(this.__textEngine.layoutGroups);
		while(group.hasNext()) {
			var group1 = group.next();
			if(y >= group1.offsetY && y <= group1.offsetY + group1.height) {
				if(x >= group1.offsetX && x <= group1.offsetX + group1.width) {
					var advance = 0.0;
					var _g3 = 0;
					var _g4 = group1.positions.length;
					while(_g3 < _g4) {
						var i1 = _g3++;
						advance += group1.getAdvance(i1);
						if(x <= group1.offsetX + advance) {
							return group1.startIndex + i1;
						}
					}
					return group1.endIndex;
				}
			}
		}
		return -1;
	},
	getFirstCharInParagraph: function(charIndex) {
		if(charIndex < 0 || charIndex > this.get_text().length) {
			return -1;
		}
		var index = this.__textEngine.getLineBreakIndex();
		var startIndex = 0;
		while(index > -1) {
			if(index < charIndex) {
				startIndex = index + 1;
			} else if(index >= charIndex) {
				break;
			}
			index = this.__textEngine.getLineBreakIndex(index + 1);
		}
		return startIndex;
	},
	getLineIndexAtPoint: function(x,y) {
		this.__updateLayout();
		if(x <= 2 || x > this.get_width() + 4 || y <= 0 || y > this.get_height() + 4) {
			return -1;
		}
		var _g = 0;
		var _g1 = this.get_scrollV() - 1;
		while(_g < _g1) {
			var i = _g++;
			y += this.__textEngine.lineHeights[i];
		}
		var group = new (openfl__$Vector_VectorIterator().default)(this.__textEngine.layoutGroups);
		while(group.hasNext()) {
			var group1 = group.next();
			if(y >= group1.offsetY && y <= group1.offsetY + group1.height) {
				return group1.lineIndex;
			}
		}
		return -1;
	},
	getLineIndexOfChar: function(charIndex) {
		if(charIndex < 0 || charIndex > this.__text.length) {
			return -1;
		}
		this.__updateLayout();
		var group = new (openfl__$Vector_VectorIterator().default)(this.__textEngine.layoutGroups);
		while(group.hasNext()) {
			var group1 = group.next();
			if(group1.startIndex <= charIndex && group1.endIndex >= charIndex) {
				return group1.lineIndex;
			}
		}
		return -1;
	},
	getLineLength: function(lineIndex) {
		this.__updateLayout();
		if(lineIndex < 0 || lineIndex > this.__textEngine.numLines - 1) {
			return 0;
		}
		var startIndex = -1;
		var endIndex = -1;
		var group = new (openfl__$Vector_VectorIterator().default)(this.__textEngine.layoutGroups);
		while(group.hasNext()) {
			var group1 = group.next();
			if(group1.lineIndex == lineIndex) {
				if(startIndex == -1) {
					startIndex = group1.startIndex;
				}
			} else if(group1.lineIndex == lineIndex + 1) {
				endIndex = group1.startIndex;
				break;
			}
		}
		if(endIndex == -1) {
			endIndex = this.__text.length;
		}
		return endIndex - startIndex;
	},
	getLineMetrics: function(lineIndex) {
		this.__updateLayout();
		var ascender = this.__textEngine.lineAscents[lineIndex];
		var descender = this.__textEngine.lineDescents[lineIndex];
		var leading = this.__textEngine.lineLeadings[lineIndex];
		var lineHeight = this.__textEngine.lineHeights[lineIndex];
		var lineWidth = this.__textEngine.lineWidths[lineIndex];
		var margin;
		switch(this.__textFormat.align) {
		case "center":
			margin = (this.__textEngine.width - lineWidth) / 2;
			break;
		case "end":case "right":
			margin = this.__textEngine.width - lineWidth - 2;
			break;
		case "justify":case "left":case "start":
			margin = 2;
			break;
		}
		return new (openfl_text_TextLineMetrics().default)(margin,lineWidth,lineHeight,ascender,descender,leading);
	},
	getLineOffset: function(lineIndex) {
		this.__updateLayout();
		if(lineIndex < 0 || lineIndex > this.__textEngine.numLines - 1) {
			return -1;
		}
		var group = new (openfl__$Vector_VectorIterator().default)(this.__textEngine.layoutGroups);
		while(group.hasNext()) {
			var group1 = group.next();
			if(group1.lineIndex == lineIndex) {
				return group1.startIndex;
			}
		}
		return 0;
	},
	getLineText: function(lineIndex) {
		this.__updateLayout();
		if(lineIndex < 0 || lineIndex > this.__textEngine.numLines - 1) {
			return null;
		}
		var startIndex = -1;
		var endIndex = -1;
		var group = new (openfl__$Vector_VectorIterator().default)(this.__textEngine.layoutGroups);
		while(group.hasNext()) {
			var group1 = group.next();
			if(group1.lineIndex == lineIndex) {
				if(startIndex == -1) {
					startIndex = group1.startIndex;
				}
			} else if(group1.lineIndex == lineIndex + 1) {
				endIndex = group1.startIndex;
				break;
			}
		}
		if(endIndex == -1) {
			endIndex = this.__text.length;
		}
		return this.__textEngine.text.substring(startIndex,endIndex);
	},
	getParagraphLength: function(charIndex) {
		if(charIndex < 0 || charIndex > this.get_text().length) {
			return -1;
		}
		var startIndex = this.getFirstCharInParagraph(charIndex);
		if(charIndex >= this.get_text().length) {
			return this.get_text().length - startIndex + 1;
		}
		var endIndex = this.__textEngine.getLineBreakIndex(charIndex) + 1;
		if(endIndex == 0) {
			endIndex = this.__text.length;
		}
		return endIndex - startIndex;
	},
	getTextFormat: function(beginIndex,endIndex) {
		if(endIndex == null) {
			endIndex = -1;
		}
		if(beginIndex == null) {
			beginIndex = -1;
		}
		var format = null;
		if(beginIndex >= this.get_text().length || beginIndex < -1 || endIndex > this.get_text().length || endIndex < -1) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_RangeError().default)("The supplied index is out of bounds"));
		}
		if(beginIndex == -1) {
			beginIndex = 0;
		}
		if(endIndex == -1) {
			endIndex = this.get_text().length;
		}
		if(beginIndex >= endIndex) {
			return new (openfl_text_TextFormat().default)();
		}
		var group = new (openfl__$Vector_VectorIterator().default)(this.__textEngine.textFormatRanges);
		while(group.hasNext()) {
			var group1 = group.next();
			if(group1.start <= beginIndex && group1.end > beginIndex || group1.start < endIndex && group1.end >= endIndex) {
				if(format == null) {
					format = group1.format.clone();
				} else {
					if(group1.format.font != format.font) {
						format.font = null;
					}
					if(group1.format.size != format.size) {
						format.size = null;
					}
					if(group1.format.color != format.color) {
						format.color = null;
					}
					if(group1.format.bold != format.bold) {
						format.bold = null;
					}
					if(group1.format.italic != format.italic) {
						format.italic = null;
					}
					if(group1.format.underline != format.underline) {
						format.underline = null;
					}
					if(group1.format.url != format.url) {
						format.url = null;
					}
					if(group1.format.target != format.target) {
						format.target = null;
					}
					if(group1.format.align != format.align) {
						format.align = null;
					}
					if(group1.format.leftMargin != format.leftMargin) {
						format.leftMargin = null;
					}
					if(group1.format.rightMargin != format.rightMargin) {
						format.rightMargin = null;
					}
					if(group1.format.indent != format.indent) {
						format.indent = null;
					}
					if(group1.format.leading != format.leading) {
						format.leading = null;
					}
					if(group1.format.blockIndent != format.blockIndent) {
						format.blockIndent = null;
					}
					if(group1.format.bullet != format.bullet) {
						format.bullet = null;
					}
					if(group1.format.kerning != format.kerning) {
						format.kerning = null;
					}
					if(group1.format.letterSpacing != format.letterSpacing) {
						format.letterSpacing = null;
					}
					if(group1.format.tabStops != format.tabStops) {
						format.tabStops = null;
					}
				}
			}
		}
		if(format == null) {
			format = new (openfl_text_TextFormat().default)();
		}
		return format;
	},
	replaceSelectedText: function(value) {
		this.__replaceSelectedText(value,false);
	},
	replaceText: function(beginIndex,endIndex,newText) {
		this.__replaceText(beginIndex,endIndex,newText,false);
	},
	setSelection: function(beginIndex,endIndex) {
		this.__selectionIndex = beginIndex;
		this.__caretIndex = endIndex;
		this.__updateScrollV();
		this.__stopCursorTimer();
		this.__startCursorTimer();
	},
	setTextFormat: function(format,beginIndex,endIndex) {
		if(endIndex == null) {
			endIndex = 0;
		}
		if(beginIndex == null) {
			beginIndex = 0;
		}
		var max = this.get_text().length;
		var range;
		if(beginIndex < 0) {
			beginIndex = 0;
		}
		if(endIndex < 0) {
			endIndex = 0;
		}
		if(endIndex == 0) {
			if(beginIndex == 0) {
				endIndex = max;
			} else {
				endIndex = beginIndex + 1;
			}
		}
		if(endIndex < beginIndex) {
			return;
		}
		if(beginIndex == 0 && endIndex >= max) {
			this.__textFormat.__merge(format);
			var _g = 0;
			var _g1 = this.__textEngine.textFormatRanges.get_length();
			while(_g < _g1) {
				var i = _g++;
				range = this.__textEngine.textFormatRanges[i];
				range.format.__merge(format);
			}
		} else {
			var index = 0;
			var newRange;
			while(index < this.__textEngine.textFormatRanges.get_length()) {
				range = this.__textEngine.textFormatRanges[index];
				if(range.start == beginIndex && range.end == endIndex) {
					range.format.__merge(format);
					break;
				} else if(range.start >= beginIndex && range.end <= endIndex) {
					range.format.__merge(format);
				} else if(range.start >= beginIndex && range.start < endIndex && range.end > beginIndex) {
					newRange = new (openfl__$internal_text_TextFormatRange().default)(range.format.clone(),range.start,endIndex);
					newRange.format.__merge(format);
					(openfl__$Vector_Vector_$Impl_$().default).insertAt(this.__textEngine.textFormatRanges,index,newRange);
					range.start = endIndex;
					++index;
				} else if(range.start < beginIndex && range.end > beginIndex && range.end >= endIndex) {
					newRange = new (openfl__$internal_text_TextFormatRange().default)(range.format.clone(),beginIndex,range.end);
					newRange.format.__merge(format);
					(openfl__$Vector_Vector_$Impl_$().default).insertAt(this.__textEngine.textFormatRanges,index + 1,newRange);
					range.end = beginIndex;
					++index;
				}
				++index;
			}
		}
		this.__dirty = true;
		this.__layoutDirty = true;
		this.__setRenderDirty();
	},
	__allowMouseFocus: function() {
		if(!(this.__textEngine.type == "input" || this.get_tabEnabled())) {
			return this.get_selectable();
		} else {
			return true;
		}
	},
	__caretBeginningOfLine: function() {
		if(this.__selectionIndex == this.__caretIndex || this.__caretIndex < this.__selectionIndex) {
			this.__caretIndex = this.getLineOffset(this.getLineIndexOfChar(this.__caretIndex));
		} else {
			this.__selectionIndex = this.getLineOffset(this.getLineIndexOfChar(this.__selectionIndex));
		}
	},
	__caretEndOfLine: function() {
		var lineIndex;
		if(this.__selectionIndex == this.__caretIndex) {
			lineIndex = this.getLineIndexOfChar(this.__caretIndex);
		} else {
			lineIndex = this.getLineIndexOfChar((Std().default).int(Math.max(this.__caretIndex,this.__selectionIndex)));
		}
		if(lineIndex < this.__textEngine.numLines - 1) {
			this.__caretIndex = this.getLineOffset(lineIndex + 1) - 1;
		} else {
			this.__caretIndex = this.__text.length;
		}
	},
	__caretNextCharacter: function() {
		if(this.__caretIndex < this.__text.length) {
			this.__caretIndex++;
		}
	},
	__caretNextLine: function(lineIndex,caretIndex) {
		if(lineIndex == null) {
			lineIndex = this.getLineIndexOfChar(this.__caretIndex);
		}
		if(lineIndex < this.__textEngine.numLines - 1) {
			if(caretIndex == null) {
				caretIndex = this.__caretIndex;
			}
			this.__caretIndex = this.__getCharIndexOnDifferentLine(caretIndex,lineIndex + 1);
		} else {
			this.__caretIndex = this.__text.length;
		}
	},
	__caretPreviousCharacter: function() {
		if(this.__caretIndex > 0) {
			this.__caretIndex--;
		}
	},
	__caretPreviousLine: function(lineIndex,caretIndex) {
		if(lineIndex == null) {
			lineIndex = this.getLineIndexOfChar(this.__caretIndex);
		}
		if(lineIndex > 0) {
			if(caretIndex == null) {
				caretIndex = this.__caretIndex;
			}
			this.__caretIndex = this.__getCharIndexOnDifferentLine(caretIndex,lineIndex - 1);
		} else {
			this.__caretIndex = 0;
		}
	},
	__disableInput: function() {
		if(this.__inputEnabled && this.stage != null) {
			this.stage.window.set_textInputEnabled(false);
			this.stage.window.onTextInput.remove($bind(this,this.window_onTextInput));
			this.stage.window.onKeyDown.remove($bind(this,this.window_onKeyDown));
			this.__inputEnabled = false;
			this.__stopCursorTimer();
		}
	},
	__dispatch: function(event) {
		if(event.eventPhase == 2 && event.type == "mouseUp") {
			var event1 = event;
			var group = this.__getGroup(this.get_mouseX(),this.get_mouseY(),true);
			if(group != null) {
				var url = group.format.url;
				if(url != null && url != "") {
					if((StringTools().default).startsWith(url,"event:")) {
						this.dispatchEvent(new (openfl_events_TextEvent().default)("link",false,false,(HxOverrides().default).substr(url,6,null)));
					} else {
						(openfl_Lib().default).getURL(new (openfl_net_URLRequest().default)(url));
					}
				}
			}
		}
		return (openfl_display_InteractiveObject().default).prototype.__dispatch.call(this,event);
	},
	__enableInput: function() {
		if(this.stage != null) {
			this.stage.window.set_textInputEnabled(true);
			if(!this.__inputEnabled) {
				this.stage.window.set_textInputEnabled(true);
				if(!this.stage.window.onTextInput.has($bind(this,this.window_onTextInput))) {
					this.stage.window.onTextInput.add($bind(this,this.window_onTextInput));
					this.stage.window.onKeyDown.add($bind(this,this.window_onKeyDown));
				}
				this.__inputEnabled = true;
				this.__startCursorTimer();
			}
		}
	},
	__fromSymbol: function(swf,symbol) {
		this.__symbol = symbol;
		this.set_width(symbol.width);
		this.set_height(symbol.height);
		this.__offsetX = symbol.x;
		this.__offsetY = symbol.y;
		this.set_multiline(symbol.multiline);
		this.set_wordWrap(symbol.wordWrap);
		this.set_displayAsPassword(symbol.password);
		if(symbol.border) {
			this.set_border(true);
			this.set_background(true);
		}
		this.set_selectable(symbol.selectable);
		if(symbol.input) {
			this.set_type("input");
		}
		var format = new (openfl_text_TextFormat().default)();
		if(symbol.color != null) {
			format.color = symbol.color & 16777215;
		}
		format.size = Math.round(symbol.fontHeight / 20);
		var font = swf.symbols.get(symbol.fontID);
		if(font != null) {
			format.__ascent = font.ascent / 20 / 1024;
			format.__descent = font.descent / 20 / 1024;
		}
		format.font = symbol.fontName;
		var found = false;
		var _g = format.font;
		if(_g == null) {
			found = true;
		} else {
			switch(_g) {
			case "":case "_sans":case "_serif":case "_typewriter":
				found = true;
				break;
			default:
				var _g1 = 0;
				var _g11 = (openfl_text_Font().default).enumerateFonts();
				while(_g1 < _g11.length) {
					var font1 = _g11[_g1];
					++_g1;
					if(font1.get_fontName() == format.font) {
						found = true;
						break;
					}
				}
			}
		}
		if(!found) {
			var alpha = new (EReg().default)("[^a-zA-Z]+","g");
			var _g12 = 0;
			var _g2 = (openfl_text_Font().default).enumerateFonts();
			while(_g12 < _g2.length) {
				var font2 = _g2[_g12];
				++_g12;
				if((HxOverrides().default).substr(alpha.replace(font2.get_fontName(),""),0,symbol.fontName.length) == symbol.fontName) {
					format.font = font2.get_fontName();
					found = true;
					break;
				}
			}
		}
		if(found) {
			this.set_embedFonts(true);
		} else if(!TextField.__missingFontWarning.exists(format.font)) {
			TextField.__missingFontWarning.set(format.font,true);
			(lime_utils_Log().default).warn("Could not find required font \"" + format.font + "\", it has not been embedded",{ fileName : "../src/openfl/text/TextField.hx", lineNumber : 1773, className : "openfl.text.TextField", methodName : "__fromSymbol"});
		}
		if(symbol.align != null) {
			if(symbol.align == "center") {
				format.align = "center";
			} else if(symbol.align == "right") {
				format.align = "right";
			} else if(symbol.align == "justify") {
				format.align = "justify";
			}
			format.leftMargin = (Std().default).int(symbol.leftMargin / 20);
			format.rightMargin = (Std().default).int(symbol.rightMargin / 20);
			format.indent = (Std().default).int(symbol.indent / 20);
			format.leading = (Std().default).int(symbol.leading / 20);
		}
		this.set_defaultTextFormat(format);
		if(symbol.text != null) {
			if(symbol.html) {
				this.set_htmlText(symbol.text);
			} else {
				this.set_text(symbol.text);
			}
		}
	},
	__getAdvance: function(position) {
		return position;
	},
	__getBounds: function(rect,matrix) {
		this.__updateLayout();
		var bounds = (openfl_geom_Rectangle().default).__pool.get();
		bounds.copyFrom(this.__textEngine.bounds);
		matrix.tx += this.__offsetX;
		matrix.ty += this.__offsetY;
		bounds.__transform(bounds,matrix);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
		(openfl_geom_Rectangle().default).__pool.release(bounds);
	},
	__getCharBoundaries: function(charIndex,rect) {
		if(charIndex < 0 || charIndex > this.__text.length - 1) {
			return false;
		}
		this.__updateLayout();
		var group = new (openfl__$Vector_VectorIterator().default)(this.__textEngine.layoutGroups);
		while(group.hasNext()) {
			var group1 = group.next();
			if(charIndex >= group1.startIndex && charIndex < group1.endIndex) {
				try {
					var x = group1.offsetX;
					var _g1 = 0;
					var _g2 = charIndex - group1.startIndex;
					while(_g1 < _g2) {
						var i = _g1++;
						x += group1.getAdvance(i);
					}
					var lastPosition = group1.getAdvance(charIndex - group1.startIndex);
					rect.setTo(x,group1.offsetY,lastPosition,group1.ascent + group1.descent);
					return true;
				} catch( e ) {
					(haxe_CallStack().default).lastException = e;
					var e1 = ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e;
				}
			}
		}
		return false;
	},
	__getCharIndexOnDifferentLine: function(charIndex,lineIndex) {
		if(charIndex < 0 || charIndex > this.__text.length) {
			return -1;
		}
		if(lineIndex < 0 || lineIndex > this.__textEngine.numLines - 1) {
			return -1;
		}
		var x = null;
		var y = null;
		var group = new (openfl__$Vector_VectorIterator().default)(this.__textEngine.layoutGroups);
		while(group.hasNext()) {
			var group1 = group.next();
			if(charIndex >= group1.startIndex && charIndex <= group1.endIndex) {
				x = group1.offsetX;
				var _g1 = 0;
				var _g2 = charIndex - group1.startIndex;
				while(_g1 < _g2) {
					var i = _g1++;
					x += group1.getAdvance(i);
				}
				if(y != null) {
					return this.__getPosition(x,y);
				}
			}
			if(group1.lineIndex == lineIndex) {
				y = group1.offsetY + group1.height / 2;
				var _g11 = 0;
				var _g21 = this.get_scrollV() - 1;
				while(_g11 < _g21) {
					var i1 = _g11++;
					y -= this.__textEngine.lineHeights[i1];
				}
				if(x != null) {
					return this.__getPosition(x,y);
				}
			}
		}
		return -1;
	},
	__getCursor: function() {
		var group = this.__getGroup(this.get_mouseX(),this.get_mouseY(),true);
		if(group != null && group.format.url != "") {
			return "button";
		} else if(this.__textEngine.selectable) {
			return "ibeam";
		}
		return null;
	},
	__getGroup: function(x,y,precise) {
		if(precise == null) {
			precise = false;
		}
		this.__updateLayout();
		x += this.get_scrollH();
		var _g = 0;
		var _g1 = this.get_scrollV() - 1;
		while(_g < _g1) {
			var i = _g++;
			y += this.__textEngine.lineHeights[i];
		}
		if(!precise && y > this.__textEngine.textHeight) {
			y = this.__textEngine.textHeight;
		}
		var firstGroup = true;
		var group;
		var nextGroup;
		var _g2 = 0;
		var _g3 = this.__textEngine.layoutGroups.get_length();
		while(_g2 < _g3) {
			var i1 = _g2++;
			group = this.__textEngine.layoutGroups[i1];
			if(i1 < this.__textEngine.layoutGroups.get_length() - 1) {
				nextGroup = this.__textEngine.layoutGroups[i1 + 1];
			} else {
				nextGroup = null;
			}
			if(firstGroup) {
				if(y < group.offsetY) {
					y = group.offsetY;
				}
				if(x < group.offsetX) {
					x = group.offsetX;
				}
				firstGroup = false;
			}
			if(y >= group.offsetY && y <= group.offsetY + group.height || !precise && nextGroup == null) {
				if(x >= group.offsetX && x <= group.offsetX + group.width || !precise && (nextGroup == null || nextGroup.lineIndex != group.lineIndex)) {
					return group;
				}
			}
		}
		return null;
	},
	__getPosition: function(x,y) {
		var group = this.__getGroup(x,y);
		if(group == null) {
			return this.__text.length;
		}
		var advance = 0.0;
		var _g = 0;
		var _g1 = group.positions.length;
		while(_g < _g1) {
			var i = _g++;
			advance += group.getAdvance(i);
			if(x <= group.offsetX + advance) {
				if(x <= group.offsetX + (advance - group.getAdvance(i)) + group.getAdvance(i) / 2) {
					return group.startIndex + i;
				} else if(group.startIndex + i < group.endIndex) {
					return group.startIndex + i + 1;
				} else {
					return group.endIndex;
				}
			}
		}
		return group.endIndex;
	},
	__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(!hitObject.get_visible() || this.__isMask || interactiveOnly && !this.mouseEnabled) {
			return false;
		}
		if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) {
			return false;
		}
		this.__getRenderTransform();
		this.__updateLayout();
		var px = this.__renderTransform.__transformInverseX(x,y);
		var py = this.__renderTransform.__transformInverseY(x,y);
		if(this.__textEngine.bounds.contains(px,py)) {
			if(stack != null) {
				stack.push(hitObject);
			}
			return true;
		}
		return false;
	},
	__hitTestMask: function(x,y) {
		this.__getRenderTransform();
		this.__updateLayout();
		var px = this.__renderTransform.__transformInverseX(x,y);
		var py = this.__renderTransform.__transformInverseY(x,y);
		if(this.__textEngine.bounds.contains(px,py)) {
			return true;
		}
		return false;
	},
	__renderCairo: function(renderer) {
	},
	__renderCanvas: function(renderer) {
		if(renderer.__isDOM && !this.__renderedOnCanvasWhileOnDOM) {
			this.__renderedOnCanvasWhileOnDOM = true;
			if(this.get_type() == "input") {
				this.replaceText(0,this.__text.length,this.__text);
			}
			if(this.__isHTML) {
				this.__updateText((openfl__$internal_formats_html_HTMLParser().default).parse(this.__text,this.__textFormat,this.__textEngine.textFormatRanges));
			}
			this.__dirty = true;
			this.__layoutDirty = true;
			this.__setRenderDirty();
		}
		if(this.get_mask() == null || this.get_mask().get_width() > 0 && this.get_mask().get_height() > 0) {
			this.__updateCacheBitmap(renderer,false);
			if(this.__cacheBitmap != null && !this.__isCacheBitmapRender) {
				(openfl__$internal_renderer_canvas_CanvasBitmap().default).render(this.__cacheBitmap,renderer);
			} else {
				(openfl__$internal_renderer_canvas_CanvasTextField().default).render(this,renderer,this.__worldTransform);
				var smoothingEnabled = false;
				if(this.__textEngine.antiAliasType == "advanced" && this.__textEngine.gridFitType == "pixel") {
					smoothingEnabled = renderer.context.imageSmoothingEnabled;
					if(smoothingEnabled) {
						renderer.context.imageSmoothingEnabled = false;
					}
				}
				(openfl__$internal_renderer_canvas_CanvasDisplayObject().default).render(this,renderer);
				if(smoothingEnabled) {
					renderer.context.imageSmoothingEnabled = true;
				}
			}
		}
	},
	__renderDOM: function(renderer) {
		this.__domRender = true;
		this.__updateCacheBitmap(renderer,this.__forceCachedBitmapUpdate);
		this.__forceCachedBitmapUpdate = false;
		this.__domRender = false;
		if(this.__cacheBitmap != null && !this.__isCacheBitmapRender) {
			this.__renderDOMClear(renderer);
			this.__cacheBitmap.stage = this.stage;
			(openfl__$internal_renderer_dom_DOMBitmap().default).render(this.__cacheBitmap,renderer);
		} else {
			if(this.__renderedOnCanvasWhileOnDOM) {
				this.__renderedOnCanvasWhileOnDOM = false;
				if(this.__isHTML && this.__rawHtmlText != null) {
					this.__updateText(this.__rawHtmlText);
					this.__dirty = true;
					this.__layoutDirty = true;
					this.__setRenderDirty();
				}
			}
			(openfl__$internal_renderer_dom_DOMTextField().default).render(this,renderer);
		}
		this.__renderEvent(renderer);
	},
	__renderDOMClear: function(renderer) {
		(openfl__$internal_renderer_dom_DOMTextField().default).clear(this,renderer);
	},
	__renderGL: function(renderer) {
		this.__updateCacheBitmap(renderer,false);
		if(this.__cacheBitmap != null && !this.__isCacheBitmapRender) {
			(openfl__$internal_renderer_context3D_Context3DBitmap().default).render(this.__cacheBitmap,renderer);
		} else {
			(openfl__$internal_renderer_context3D_Context3DTextField().default).render(this,renderer);
			(openfl__$internal_renderer_context3D_Context3DDisplayObject().default).render(this,renderer);
		}
		this.__renderEvent(renderer);
	},
	__renderGLMask: function(renderer) {
		(openfl__$internal_renderer_context3D_Context3DTextField().default).renderMask(this,renderer);
		(openfl_display_InteractiveObject().default).prototype.__renderGLMask.call(this,renderer);
	},
	__replaceSelectedText: function(value,restrict) {
		if(restrict == null) {
			restrict = true;
		}
		if(value == null) {
			value = "";
		}
		if(value == "" && this.__selectionIndex == this.__caretIndex) {
			return;
		}
		var startIndex = this.__caretIndex < this.__selectionIndex ? this.__caretIndex : this.__selectionIndex;
		var endIndex = this.__caretIndex > this.__selectionIndex ? this.__caretIndex : this.__selectionIndex;
		if(startIndex == endIndex && this.__textEngine.maxChars > 0 && this.__text.length == this.__textEngine.maxChars) {
			return;
		}
		if(startIndex > this.__text.length) {
			startIndex = this.__text.length;
		}
		if(endIndex > this.__text.length) {
			endIndex = this.__text.length;
		}
		if(endIndex < startIndex) {
			var cache = endIndex;
			endIndex = startIndex;
			startIndex = cache;
		}
		if(startIndex < 0) {
			startIndex = 0;
		}
		this.__replaceText(startIndex,endIndex,value,restrict);
		var i = startIndex + ((js_Boot().default).__cast(value , String)).length;
		if(i > this.__text.length) {
			i = this.__text.length;
		}
		this.setSelection(i,i);
		this.__updateScrollH();
	},
	__replaceText: function(beginIndex,endIndex,newText,restrict) {
		if(endIndex < beginIndex || beginIndex < 0 || endIndex > this.__text.length || newText == null) {
			return;
		}
		if(restrict) {
			newText = this.__textEngine.restrictText(newText);
			if(this.__textEngine.maxChars > 0) {
				var removeLength = endIndex - beginIndex;
				var maxLength = this.__textEngine.maxChars - this.__text.length + removeLength;
				if(maxLength <= 0) {
					newText = "";
				} else if(maxLength < newText.length) {
					newText = (HxOverrides().default).substr(newText,0,maxLength);
				}
			}
		}
		this.__updateText(this.__text.substring(0,beginIndex) + newText + this.__text.substring(endIndex));
		if(endIndex > this.__text.length) {
			endIndex = this.__text.length;
		}
		var offset = newText.length - (endIndex - beginIndex);
		var i = 0;
		var range;
		while(i < this.__textEngine.textFormatRanges.get_length()) {
			range = this.__textEngine.textFormatRanges[i];
			if(range.start <= beginIndex && range.end >= endIndex) {
				range.end += offset;
				++i;
			} else if(range.start >= beginIndex && range.end <= endIndex) {
				if(i > 0) {
					var this1 = this.__textEngine.textFormatRanges;
					(openfl_VectorData().default).ofArray(Array.prototype.splice.call(this1,i,1));
				} else {
					range.start = 0;
					range.end = beginIndex + newText.length;
					++i;
				}
				offset -= range.end - range.start;
			} else if(range.start > beginIndex && range.start <= endIndex) {
				range.start += offset;
				++i;
			} else {
				++i;
			}
		}
		this.__updateScrollV();
		this.__updateScrollH();
		this.__dirty = true;
		this.__layoutDirty = true;
		this.__setRenderDirty();
	},
	__shouldCacheHardware: function(value) {
		if(value == true) {
			return true;
		} else {
			return false;
		}
	},
	__startCursorTimer: function() {
		this.__cursorTimer = (haxe_Timer().default).delay($bind(this,this.__startCursorTimer),600);
		this.__showCursor = !this.__showCursor;
		this.__dirty = true;
		this.__setRenderDirty();
	},
	__startTextInput: function() {
		if(this.__caretIndex < 0) {
			this.__caretIndex = this.__text.length;
			this.__selectionIndex = this.__caretIndex;
		}
		var enableInput = (openfl_display_DisplayObject().default).__supportDOM ? this.__renderedOnCanvasWhileOnDOM : true;
		if(enableInput) {
			this.__enableInput();
		}
	},
	__stopCursorTimer: function() {
		if(this.__cursorTimer != null) {
			this.__cursorTimer.stop();
			this.__cursorTimer = null;
		}
		if(this.__showCursor) {
			this.__showCursor = false;
			this.__dirty = true;
			this.__setRenderDirty();
		}
	},
	__stopTextInput: function() {
		var disableInput = (openfl_display_DisplayObject().default).__supportDOM ? this.__renderedOnCanvasWhileOnDOM : true;
		if(disableInput) {
			this.__disableInput();
		}
	},
	__updateCacheBitmap: function(renderer,force) {
		if(this.__filters == null && renderer.__type == "opengl" && this.__cacheBitmap == null && !this.__domRender) {
			return false;
		}
		if((openfl_display_InteractiveObject().default).prototype.__updateCacheBitmap.call(this,renderer,force || this.__dirty)) {
			if(this.__cacheBitmap != null) {
				this.__cacheBitmap.__renderTransform.tx -= this.__offsetX;
				this.__cacheBitmap.__renderTransform.ty -= this.__offsetY;
			}
			return true;
		}
		return false;
	},
	__updateLayout: function() {
		if(this.__layoutDirty) {
			var cacheWidth = this.__textEngine.width;
			this.__textEngine.update();
			if(this.__textEngine.autoSize != "none") {
				if(this.__textEngine.width != cacheWidth) {
					switch(this.__textEngine.autoSize) {
					case "center":
						var _g = this;
						_g.set_x(_g.get_x() + (cacheWidth - this.__textEngine.width) / 2);
						break;
					case "right":
						var _g1 = this;
						_g1.set_x(_g1.get_x() + (cacheWidth - this.__textEngine.width));
						break;
					default:
					}
				}
				this.__textEngine.getBounds();
			}
			this.__layoutDirty = false;
		}
	},
	__updateScrollH: function() {
		if(!this.get_multiline() && this.get_type() == "input") {
			this.__layoutDirty = true;
			this.__updateLayout();
			var offsetX = this.__textEngine.textWidth - this.__textEngine.width + 4;
			if(offsetX > 0) {
				if(this.__caretIndex >= this.get_text().length) {
					this.set_scrollH(Math.ceil(offsetX));
				} else {
					var caret = (openfl_geom_Rectangle().default).__pool.get();
					this.__getCharBoundaries(this.__caretIndex,caret);
					if(caret.x < this.get_scrollH()) {
						this.set_scrollH(Math.floor(caret.x - 2));
					} else if(caret.x > this.get_scrollH() + this.__textEngine.width) {
						this.set_scrollH(Math.ceil(caret.x - this.__textEngine.width - 2));
					}
					(openfl_geom_Rectangle().default).__pool.release(caret);
				}
			} else {
				this.set_scrollH(0);
			}
		}
	},
	__updateScrollV: function() {
		this.__layoutDirty = true;
		this.__updateLayout();
		var lineIndex = this.getLineIndexOfChar(this.__caretIndex);
		if(lineIndex == -1 && this.__caretIndex > 0) {
			lineIndex = this.getLineIndexOfChar(this.__caretIndex - 1) + 1;
		}
		if(lineIndex + 1 < this.get_scrollV()) {
			this.set_scrollV(lineIndex + 1);
		} else if(lineIndex + 1 > this.get_bottomScrollV()) {
			var i = lineIndex;
			var tempHeight = 0.0;
			while(i >= 0) if(tempHeight + this.__textEngine.lineHeights[i] <= this.get_height() - 4) {
				tempHeight += this.__textEngine.lineHeights[i];
				--i;
			} else {
				break;
			}
			this.set_scrollV(i + 2);
		} else {
			this.set_scrollV(this.get_scrollV());
		}
	},
	__updateText: function(value) {
		if((openfl_display_DisplayObject().default).__supportDOM && this.__renderedOnCanvasWhileOnDOM) {
			this.__forceCachedBitmapUpdate = this.__text != value;
		}
		this.__textEngine.set_text(value);
		this.__text = this.__textEngine.text;
		if(this.__text.length < this.__caretIndex) {
			this.__selectionIndex = this.__caretIndex = this.__text.length;
		}
		if(!this.__displayAsPassword || (openfl_display_DisplayObject().default).__supportDOM && !this.__renderedOnCanvasWhileOnDOM) {
			this.__textEngine.set_text(this.__text);
		} else {
			var length = this.get_text().length;
			var mask = "";
			var _g = 0;
			var _g1 = length;
			while(_g < _g1) {
				var i = _g++;
				mask += "*";
			}
			this.__textEngine.set_text(mask);
		}
	},
	__updateTransforms: function(overrideTransform) {
		(openfl_display_InteractiveObject().default).prototype.__updateTransforms.call(this,overrideTransform);
		this.__renderTransform.__translateTransformed(this.__offsetX,this.__offsetY);
	},
	get_antiAliasType: function() {
		return this.__textEngine.antiAliasType;
	},
	set_antiAliasType: function(value) {
		var tmp = value != this.__textEngine.antiAliasType;
		return this.__textEngine.antiAliasType = value;
	},
	get_autoSize: function() {
		return this.__textEngine.autoSize;
	},
	set_autoSize: function(value) {
		if(value != this.__textEngine.autoSize) {
			this.__dirty = true;
			this.__layoutDirty = true;
			this.__setRenderDirty();
		}
		return this.__textEngine.autoSize = value;
	},
	get_background: function() {
		return this.__textEngine.background;
	},
	set_background: function(value) {
		if(value != this.__textEngine.background) {
			this.__dirty = true;
			this.__setRenderDirty();
		}
		return this.__textEngine.background = value;
	},
	get_backgroundColor: function() {
		return this.__textEngine.backgroundColor;
	},
	set_backgroundColor: function(value) {
		if(value != this.__textEngine.backgroundColor) {
			this.__dirty = true;
			this.__setRenderDirty();
		}
		return this.__textEngine.backgroundColor = value;
	},
	get_border: function() {
		return this.__textEngine.border;
	},
	set_border: function(value) {
		if(value != this.__textEngine.border) {
			this.__dirty = true;
			this.__setRenderDirty();
		}
		return this.__textEngine.border = value;
	},
	get_borderColor: function() {
		return this.__textEngine.borderColor;
	},
	set_borderColor: function(value) {
		if(value != this.__textEngine.borderColor) {
			this.__dirty = true;
			this.__setRenderDirty();
		}
		return this.__textEngine.borderColor = value;
	},
	get_bottomScrollV: function() {
		this.__updateLayout();
		return this.__textEngine.get_bottomScrollV();
	},
	get_caretIndex: function() {
		return this.__caretIndex;
	},
	get_defaultTextFormat: function() {
		return this.__textFormat.clone();
	},
	set_defaultTextFormat: function(value) {
		this.__textFormat.__merge(value);
		this.__layoutDirty = true;
		this.__dirty = true;
		this.__setRenderDirty();
		return value;
	},
	get_displayAsPassword: function() {
		return this.__displayAsPassword;
	},
	set_displayAsPassword: function(value) {
		if(value != this.__displayAsPassword) {
			this.__dirty = true;
			this.__layoutDirty = true;
			this.__setRenderDirty();
			this.__displayAsPassword = value;
			this.__updateText(this.__text);
		}
		return value;
	},
	get_embedFonts: function() {
		return this.__textEngine.embedFonts;
	},
	set_embedFonts: function(value) {
		return this.__textEngine.embedFonts = value;
	},
	get_gridFitType: function() {
		return this.__textEngine.gridFitType;
	},
	set_gridFitType: function(value) {
		return this.__textEngine.gridFitType = value;
	},
	get_height: function() {
		this.__updateLayout();
		return this.__textEngine.height * Math.abs(this.get_scaleY());
	},
	set_height: function(value) {
		if(value != this.__textEngine.height) {
			this.__setTransformDirty();
			this.__dirty = true;
			this.__layoutDirty = true;
			this.__setRenderDirty();
			this.__textEngine.height = value;
		}
		return this.__textEngine.height * Math.abs(this.get_scaleY());
	},
	get_htmlText: function() {
		if(this.__isHTML) {
			return this.__rawHtmlText;
		} else {
			return this.__text;
		}
	},
	set_htmlText: function(value) {
		if(!this.__isHTML || this.__text != value) {
			this.__dirty = true;
			this.__layoutDirty = true;
			this.__setRenderDirty();
		}
		this.__isHTML = true;
		this.__rawHtmlText = value;
		value = (openfl__$internal_formats_html_HTMLParser().default).parse(value,this.__textFormat,this.__textEngine.textFormatRanges);
		if((openfl_display_DisplayObject().default).__supportDOM) {
			if(this.__textEngine.textFormatRanges.get_length() > 1) {
				var this1 = this.__textEngine.textFormatRanges;
				var len = this.__textEngine.textFormatRanges.get_length() - 1;
				(openfl_VectorData().default).ofArray(Array.prototype.splice.call(this1,1,len));
			}
			var range = this.__textEngine.textFormatRanges[0];
			range.format = this.__textFormat;
			range.start = 0;
			if(this.__renderedOnCanvasWhileOnDOM) {
				range.end = value.length;
				this.__updateText(value);
			} else {
				range.end = this.__rawHtmlText.length;
				this.__updateText(this.__rawHtmlText);
			}
		} else {
			this.__updateText(value);
		}
		this.__updateScrollV();
		return value;
	},
	get_length: function() {
		if(this.__text != null) {
			return this.__text.length;
		}
		return 0;
	},
	get_maxChars: function() {
		return this.__textEngine.maxChars;
	},
	set_maxChars: function(value) {
		if(value != this.__textEngine.maxChars) {
			this.__textEngine.maxChars = value;
			this.__dirty = true;
			this.__layoutDirty = true;
			this.__setRenderDirty();
		}
		return value;
	},
	get_maxScrollH: function() {
		this.__updateLayout();
		return this.__textEngine.maxScrollH;
	},
	get_maxScrollV: function() {
		this.__updateLayout();
		return this.__textEngine.get_maxScrollV();
	},
	get_mouseWheelEnabled: function() {
		return this.__mouseWheelEnabled;
	},
	set_mouseWheelEnabled: function(value) {
		return this.__mouseWheelEnabled = value;
	},
	get_multiline: function() {
		return this.__textEngine.multiline;
	},
	set_multiline: function(value) {
		if(value != this.__textEngine.multiline) {
			this.__dirty = true;
			this.__layoutDirty = true;
			this.__updateText(this.__text);
			this.__updateScrollH();
			this.__setRenderDirty();
		}
		return this.__textEngine.multiline = value;
	},
	get_numLines: function() {
		this.__updateLayout();
		return this.__textEngine.numLines;
	},
	get_restrict: function() {
		return this.__textEngine.restrict;
	},
	set_restrict: function(value) {
		if(this.__textEngine.restrict != value) {
			this.__textEngine.set_restrict(value);
			this.__updateText(this.__text);
		}
		return value;
	},
	get_scrollH: function() {
		return this.__textEngine.scrollH;
	},
	set_scrollH: function(value) {
		this.__updateLayout();
		if(value > this.__textEngine.maxScrollH) {
			value = this.__textEngine.maxScrollH;
		}
		if(value < 0) {
			value = 0;
		}
		if(value != this.__textEngine.scrollH) {
			this.__dirty = true;
			this.__setRenderDirty();
			this.dispatchEvent(new (openfl_events_Event().default)("scroll"));
		}
		return this.__textEngine.scrollH = value;
	},
	get_scrollV: function() {
		return this.__textEngine.get_scrollV();
	},
	set_scrollV: function(value) {
		this.__updateLayout();
		if(value != this.__textEngine.get_scrollV()) {
			this.__dirty = true;
			this.__setRenderDirty();
			this.dispatchEvent(new (openfl_events_Event().default)("scroll"));
		}
		return this.__textEngine.set_scrollV(value);
	},
	get_selectable: function() {
		return this.__textEngine.selectable;
	},
	set_selectable: function(value) {
		if(value != this.__textEngine.selectable && this.get_type() == "input") {
			if(this.stage != null && this.stage.get_focus() == this) {
				this.__startTextInput();
			} else if(!value) {
				this.__stopTextInput();
			}
		}
		return this.__textEngine.selectable = value;
	},
	get_selectionBeginIndex: function() {
		return (Std().default).int(Math.min(this.__caretIndex,this.__selectionIndex));
	},
	get_selectionEndIndex: function() {
		return (Std().default).int(Math.max(this.__caretIndex,this.__selectionIndex));
	},
	get_sharpness: function() {
		return this.__textEngine.sharpness;
	},
	set_sharpness: function(value) {
		if(value != this.__textEngine.sharpness) {
			this.__dirty = true;
			this.__setRenderDirty();
		}
		return this.__textEngine.sharpness = value;
	},
	get_tabEnabled: function() {
		if(this.__tabEnabled == null) {
			return this.__textEngine.type == "input";
		} else {
			return this.__tabEnabled;
		}
	},
	get_text: function() {
		return this.__text;
	},
	set_text: function(value) {
		if(this.__isHTML || this.__text != value) {
			this.__dirty = true;
			this.__layoutDirty = true;
			this.__setRenderDirty();
		} else {
			return value;
		}
		if(this.__textEngine.textFormatRanges.get_length() > 1) {
			var this1 = this.__textEngine.textFormatRanges;
			var len = this.__textEngine.textFormatRanges.get_length() - 1;
			(openfl_VectorData().default).ofArray(Array.prototype.splice.call(this1,1,len));
		}
		var utfValue = value;
		var range = this.__textEngine.textFormatRanges[0];
		range.format = this.__textFormat;
		range.start = 0;
		range.end = utfValue.length;
		this.__isHTML = false;
		this.__updateText(value);
		this.__updateScrollV();
		return value;
	},
	get_textColor: function() {
		return this.__textFormat.color;
	},
	set_textColor: function(value) {
		if(value != this.__textFormat.color) {
			this.__dirty = true;
			this.__setRenderDirty();
		}
		var range = new (openfl__$Vector_VectorIterator().default)(this.__textEngine.textFormatRanges);
		while(range.hasNext()) {
			var range1 = range.next();
			range1.format.color = value;
		}
		return this.__textFormat.color = value;
	},
	get_textWidth: function() {
		this.__updateLayout();
		return this.__textEngine.textWidth;
	},
	get_textHeight: function() {
		this.__updateLayout();
		return this.__textEngine.textHeight;
	},
	get_type: function() {
		return this.__textEngine.type;
	},
	set_type: function(value) {
		if(value != this.__textEngine.type) {
			if(value == "input") {
				this.addEventListener("addedToStage",$bind(this,this.this_onAddedToStage));
				this.this_onFocusIn(null);
				this.__textEngine.__useIntAdvances = true;
			} else {
				this.removeEventListener("addedToStage",$bind(this,this.this_onAddedToStage));
				this.__stopTextInput();
				this.__textEngine.__useIntAdvances = null;
			}
			this.__dirty = true;
			this.__layoutDirty = true;
			this.__setRenderDirty();
		}
		return this.__textEngine.type = value;
	},
	get_width: function() {
		this.__updateLayout();
		return this.__textEngine.width * Math.abs(this.__scaleX);
	},
	set_width: function(value) {
		if(value != this.__textEngine.width) {
			this.__setTransformDirty();
			this.__dirty = true;
			this.__layoutDirty = true;
			this.__setRenderDirty();
			this.__textEngine.width = value;
		}
		return this.__textEngine.width * Math.abs(this.__scaleX);
	},
	get_wordWrap: function() {
		return this.__textEngine.wordWrap;
	},
	set_wordWrap: function(value) {
		if(value != this.__textEngine.wordWrap) {
			this.__dirty = true;
			this.__layoutDirty = true;
			this.__setRenderDirty();
		}
		return this.__textEngine.wordWrap = value;
	},
	get_x: function() {
		return this.__transform.tx + this.__offsetX;
	},
	set_x: function(value) {
		if(value != this.__transform.tx + this.__offsetX) {
			this.__setTransformDirty();
		}
		return this.__transform.tx = value - this.__offsetX;
	},
	get_y: function() {
		return this.__transform.ty + this.__offsetY;
	},
	set_y: function(value) {
		if(value != this.__transform.ty + this.__offsetY) {
			this.__setTransformDirty();
		}
		return this.__transform.ty = value - this.__offsetY;
	},
	stage_onMouseMove: function(event) {
		if(this.stage == null) {
			return;
		}
		if(this.__textEngine.selectable && this.__selectionIndex >= 0) {
			this.__updateLayout();
			var position = this.__getPosition(this.get_mouseX() + this.get_scrollH(),this.get_mouseY());
			if(position != this.__caretIndex) {
				this.__caretIndex = position;
				if((openfl_display_DisplayObject().default).__supportDOM) {
					if(this.__renderedOnCanvasWhileOnDOM) {
						this.__forceCachedBitmapUpdate = true;
					}
				} else {
					this.__dirty = true;
					this.__setRenderDirty();
				}
			}
		}
	},
	stage_onMouseUp: function(event) {
		if(this.stage == null) {
			return;
		}
		this.stage.removeEventListener("mouseMove",$bind(this,this.stage_onMouseMove));
		this.stage.removeEventListener("mouseUp",$bind(this,this.stage_onMouseUp));
		if(this.stage.get_focus() == this) {
			this.__getWorldTransform();
			this.__updateLayout();
			var upPos = this.__getPosition(this.get_mouseX() + this.get_scrollH(),this.get_mouseY());
			var leftPos = (Std().default).int(Math.min(this.__selectionIndex,upPos));
			var rightPos = (Std().default).int(Math.max(this.__selectionIndex,upPos));
			this.__selectionIndex = leftPos;
			this.__caretIndex = rightPos;
			if(this.__inputEnabled) {
				this.this_onFocusIn(null);
				this.__stopCursorTimer();
				this.__startCursorTimer();
				if((openfl_display_DisplayObject().default).__supportDOM && this.__renderedOnCanvasWhileOnDOM) {
					this.__forceCachedBitmapUpdate = true;
				}
			}
		}
	},
	this_onAddedToStage: function(event) {
		this.this_onFocusIn(null);
	},
	this_onFocusIn: function(event) {
		if(this.get_type() == "input" && this.stage != null && this.stage.get_focus() == this) {
			this.__startTextInput();
		}
	},
	this_onFocusOut: function(event) {
		this.__stopCursorTimer();
		if(event.relatedObject == null || !((event.relatedObject) instanceof TextField)) {
			this.__stopTextInput();
		} else {
			if(this.stage != null) {
				this.stage.window.onTextInput.remove($bind(this,this.window_onTextInput));
				this.stage.window.onKeyDown.remove($bind(this,this.window_onKeyDown));
			}
			this.__inputEnabled = false;
		}
		if(this.__selectionIndex != this.__caretIndex) {
			this.__selectionIndex = this.__caretIndex;
			this.__dirty = true;
			this.__setRenderDirty();
		}
	},
	this_onKeyDown: function(event) {
		if(this.get_selectable() && this.get_type() != "input" && event.keyCode == 67 && (event.commandKey || event.ctrlKey)) {
			if(this.__caretIndex != this.__selectionIndex) {
				(lime_system_Clipboard().default).set_text(this.__text.substring(this.__caretIndex,this.__selectionIndex));
			}
		}
	},
	this_onMouseDown: function(event) {
		if(!this.get_selectable() && this.get_type() != "input") {
			return;
		}
		this.__updateLayout();
		this.__caretIndex = this.__getPosition(this.get_mouseX() + this.get_scrollH(),this.get_mouseY());
		this.__selectionIndex = this.__caretIndex;
		if(!(openfl_display_DisplayObject().default).__supportDOM) {
			this.__dirty = true;
			this.__setRenderDirty();
		}
		this.stage.addEventListener("mouseMove",$bind(this,this.stage_onMouseMove));
		this.stage.addEventListener("mouseUp",$bind(this,this.stage_onMouseUp));
	},
	this_onMouseWheel: function(event) {
		if(this.get_mouseWheelEnabled()) {
			var _g = this;
			_g.set_scrollV(_g.get_scrollV() - event.delta);
		}
	},
	window_onKeyDown: function(key,modifier) {
		switch(key) {
		case 8:
			if(this.__selectionIndex == this.__caretIndex && this.__caretIndex > 0) {
				this.__selectionIndex = this.__caretIndex - 1;
			}
			if(this.__selectionIndex != this.__caretIndex) {
				this.replaceSelectedText("");
				this.__selectionIndex = this.__caretIndex;
				this.dispatchEvent(new (openfl_events_Event().default)("change",true));
			}
			break;
		case 97:
			if(this.get_selectable()) {
				if((lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_metaKey(modifier) || (lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_ctrlKey(modifier)) {
					this.__caretIndex = this.__text.length;
					this.__selectionIndex = 0;
				}
			}
			break;
		case 99:
			if((lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_metaKey(modifier) || (lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_ctrlKey(modifier)) {
				if(this.__caretIndex != this.__selectionIndex) {
					(lime_system_Clipboard().default).set_text(this.__text.substring(this.__caretIndex,this.__selectionIndex));
				}
			}
			break;
		case 120:
			if((lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_metaKey(modifier) || (lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_ctrlKey(modifier)) {
				if(this.__caretIndex != this.__selectionIndex) {
					(lime_system_Clipboard().default).set_text(this.__text.substring(this.__caretIndex,this.__selectionIndex));
					this.replaceSelectedText("");
					this.dispatchEvent(new (openfl_events_Event().default)("change",true));
				}
			}
			break;
		case 127:
			if(this.__selectionIndex == this.__caretIndex && this.__caretIndex < this.__text.length) {
				this.__selectionIndex = this.__caretIndex + 1;
			}
			if(this.__selectionIndex != this.__caretIndex) {
				this.replaceSelectedText("");
				this.__selectionIndex = this.__caretIndex;
				this.dispatchEvent(new (openfl_events_Event().default)("change",true));
			}
			break;
		case 1073741898:
			if(this.get_selectable()) {
				this.__caretBeginningOfLine();
				this.__stopCursorTimer();
				this.__startCursorTimer();
			}
			break;
		case 1073741901:
			if(this.get_selectable()) {
				this.__caretEndOfLine();
				this.__stopCursorTimer();
				this.__startCursorTimer();
			}
			break;
		case 1073741903:
			if(this.get_selectable()) {
				if((lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_metaKey(modifier)) {
					this.__caretEndOfLine();
					if(!(lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_shiftKey(modifier)) {
						this.__selectionIndex = this.__caretIndex;
					}
				} else if((lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_shiftKey(modifier)) {
					this.__caretNextCharacter();
				} else {
					if(this.__selectionIndex == this.__caretIndex) {
						this.__caretNextCharacter();
					} else {
						this.__caretIndex = (Std().default).int(Math.max(this.__caretIndex,this.__selectionIndex));
					}
					this.__selectionIndex = this.__caretIndex;
				}
				this.__updateScrollH();
				this.__updateScrollV();
				this.__stopCursorTimer();
				this.__startCursorTimer();
			}
			break;
		case 1073741904:
			if(this.get_selectable()) {
				if((lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_metaKey(modifier)) {
					this.__caretBeginningOfLine();
					if(!(lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_shiftKey(modifier)) {
						this.__selectionIndex = this.__caretIndex;
					}
				} else if((lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_shiftKey(modifier)) {
					this.__caretPreviousCharacter();
				} else {
					if(this.__selectionIndex == this.__caretIndex) {
						this.__caretPreviousCharacter();
					} else {
						this.__caretIndex = (Std().default).int(Math.min(this.__caretIndex,this.__selectionIndex));
					}
					this.__selectionIndex = this.__caretIndex;
				}
				this.__updateScrollH();
				this.__updateScrollV();
				this.__stopCursorTimer();
				this.__startCursorTimer();
			}
			break;
		case 1073741905:
			if(this.get_selectable()) {
				if(!this.__textEngine.multiline) {
					return;
				}
				if((lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_shiftKey(modifier)) {
					this.__caretNextLine();
				} else {
					if(this.__selectionIndex == this.__caretIndex) {
						this.__caretNextLine();
					} else {
						var lineIndex = this.getLineIndexOfChar((Std().default).int(Math.max(this.__caretIndex,this.__selectionIndex)));
						this.__caretNextLine(lineIndex,(Std().default).int(Math.min(this.__caretIndex,this.__selectionIndex)));
					}
					this.__selectionIndex = this.__caretIndex;
				}
				this.__updateScrollV();
				this.__stopCursorTimer();
				this.__startCursorTimer();
			}
			break;
		case 1073741906:
			if(this.get_selectable()) {
				if(!this.__textEngine.multiline) {
					return;
				}
				if((lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_shiftKey(modifier)) {
					this.__caretPreviousLine();
				} else {
					if(this.__selectionIndex == this.__caretIndex) {
						this.__caretPreviousLine();
					} else {
						var lineIndex1 = this.getLineIndexOfChar((Std().default).int(Math.min(this.__caretIndex,this.__selectionIndex)));
						this.__caretPreviousLine(lineIndex1,(Std().default).int(Math.min(this.__caretIndex,this.__selectionIndex)));
					}
					this.__selectionIndex = this.__caretIndex;
				}
				this.__updateScrollV();
				this.__stopCursorTimer();
				this.__startCursorTimer();
			}
			break;
		case 13:case 1073741912:
			if(this.__textEngine.multiline) {
				var te = new (openfl_events_TextEvent().default)("textInput",true,true,"\n");
				this.dispatchEvent(te);
				if(!te.isDefaultPrevented()) {
					this.__replaceSelectedText("\n",true);
					this.dispatchEvent(new (openfl_events_Event().default)("change",true));
				}
			}
			break;
		default:
		}
	},
	window_onTextInput: function(value) {
		this.__replaceSelectedText(value,true);
		this.dispatchEvent(new (openfl_events_Event().default)("change",true));
	}
});
TextField.prototype.__class__ = TextField.prototype.constructor = $hxClasses["openfl.text.TextField"] = TextField;

// Init

Object.defineProperties(TextField.prototype,{ antiAliasType : { get : function () { return this.get_antiAliasType (); }, set : function (v) { return this.set_antiAliasType (v); }}, autoSize : { get : function () { return this.get_autoSize (); }, set : function (v) { return this.set_autoSize (v); }}, background : { get : function () { return this.get_background (); }, set : function (v) { return this.set_background (v); }}, backgroundColor : { get : function () { return this.get_backgroundColor (); }, set : function (v) { return this.set_backgroundColor (v); }}, border : { get : function () { return this.get_border (); }, set : function (v) { return this.set_border (v); }}, borderColor : { get : function () { return this.get_borderColor (); }, set : function (v) { return this.set_borderColor (v); }}, bottomScrollV : { get : function () { return this.get_bottomScrollV (); }}, defaultTextFormat : { get : function () { return this.get_defaultTextFormat (); }, set : function (v) { return this.set_defaultTextFormat (v); }}, displayAsPassword : { get : function () { return this.get_displayAsPassword (); }, set : function (v) { return this.set_displayAsPassword (v); }}, embedFonts : { get : function () { return this.get_embedFonts (); }, set : function (v) { return this.set_embedFonts (v); }}, gridFitType : { get : function () { return this.get_gridFitType (); }, set : function (v) { return this.set_gridFitType (v); }}, htmlText : { get : function () { return this.get_htmlText (); }, set : function (v) { return this.set_htmlText (v); }}, length : { get : function () { return this.get_length (); }}, maxChars : { get : function () { return this.get_maxChars (); }, set : function (v) { return this.set_maxChars (v); }}, maxScrollH : { get : function () { return this.get_maxScrollH (); }}, maxScrollV : { get : function () { return this.get_maxScrollV (); }}, mouseWheelEnabled : { get : function () { return this.get_mouseWheelEnabled (); }, set : function (v) { return this.set_mouseWheelEnabled (v); }}, multiline : { get : function () { return this.get_multiline (); }, set : function (v) { return this.set_multiline (v); }}, numLines : { get : function () { return this.get_numLines (); }}, restrict : { get : function () { return this.get_restrict (); }, set : function (v) { return this.set_restrict (v); }}, scrollH : { get : function () { return this.get_scrollH (); }, set : function (v) { return this.set_scrollH (v); }}, scrollV : { get : function () { return this.get_scrollV (); }, set : function (v) { return this.set_scrollV (v); }}, selectable : { get : function () { return this.get_selectable (); }, set : function (v) { return this.set_selectable (v); }}, selectionBeginIndex : { get : function () { return this.get_selectionBeginIndex (); }}, selectionEndIndex : { get : function () { return this.get_selectionEndIndex (); }}, sharpness : { get : function () { return this.get_sharpness (); }, set : function (v) { return this.set_sharpness (v); }}, text : { get : function () { return this.get_text (); }, set : function (v) { return this.set_text (v); }}, textColor : { get : function () { return this.get_textColor (); }, set : function (v) { return this.set_textColor (v); }}, textHeight : { get : function () { return this.get_textHeight (); }}, textWidth : { get : function () { return this.get_textWidth (); }}, type : { get : function () { return this.get_type (); }, set : function (v) { return this.set_type (v); }}, wordWrap : { get : function () { return this.get_wordWrap (); }, set : function (v) { return this.set_wordWrap (v); }}});

// Statics


TextField.__missingFontWarning = new (haxe_ds_StringMap().default)()

// Export

exports.default = TextField;