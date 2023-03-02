// Class: openfl._internal.renderer.dom.DOMTextField

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function EReg() {return require("./../../../../EReg");}
function openfl__$internal_text_TextEngine() {return require("./../../../../openfl/_internal/text/TextEngine");}
function Std() {return require("./../../../../Std");}
function StringTools() {return require("./../../../../StringTools");}
function HxOverrides() {return require("./../../../../HxOverrides");}

// Constructor

var DOMTextField = function(){}

// Meta

DOMTextField.__name__ = "openfl._internal.renderer.dom.DOMTextField";
DOMTextField.__isInterface__ = false;
DOMTextField.prototype = {
	
};
DOMTextField.prototype.__class__ = DOMTextField.prototype.constructor = $hxClasses["openfl._internal.renderer.dom.DOMTextField"] = DOMTextField;

// Init



// Statics

DOMTextField.clear = function(textField,renderer) {
	if(textField.__div != null) {
		renderer.element.removeChild(textField.__div);
		textField.__div = null;
		textField.__style = null;
	}
}
DOMTextField.measureText = function(textField) {
	var textEngine = textField.__textEngine;
	var div = textField.__div;
	if(div == null) {
		div = window.document.createElement("div");
		div.innerHTML = new (EReg().default)("\n","g").replace(textEngine.text,"<br>");
		div.style.setProperty("font",(openfl__$internal_text_TextEngine().default).getFont(textField.__textFormat),null);
		div.style.setProperty("pointer-events","none",null);
		div.style.position = "absolute";
		div.style.top = "110%";
		window.document.body.appendChild(div);
	}
	textEngine.__measuredWidth = div.clientWidth;
	if(textField.__div == null) {
		div.style.width = (Std().default).string(textEngine.width - 4) + "px";
	}
	textEngine.__measuredHeight = div.clientHeight;
	if(textField.__div == null) {
		window.document.body.removeChild(div);
	}
}
DOMTextField.render = function(textField,renderer) {
	var textEngine = textField.__textEngine;
	if(textField.stage != null && textField.__worldVisible && textField.__renderable) {
		if(textField.__dirty || textField.__renderTransformChanged || textField.__div == null) {
			if(textEngine.text != "" || textEngine.background || textEngine.border || textEngine.type == "input") {
				if(textField.__div == null) {
					textField.__div = window.document.createElement("div");
					renderer.__initializeElement(textField,textField.__div);
					textField.__style.setProperty("outline","none",null);
					textField.__div.addEventListener("input",function(event) {
						event.preventDefault();
						if(textField.get_htmlText() != textField.__div.innerHTML) {
							textField.set_htmlText(textField.__div.innerHTML);
							var textField1 = textField.__displayAsPassword;
							textField.__dirty = false;
						}
					},true);
				}
				if(!textEngine.wordWrap) {
					textField.__style.setProperty("white-space","nowrap",null);
				} else {
					textField.__style.setProperty("word-wrap","break-word",null);
				}
				textField.__style.setProperty("overflow","hidden",null);
				if(textEngine.selectable) {
					textField.__style.setProperty("cursor","text",null);
					textField.__style.setProperty("-webkit-user-select","text",null);
					textField.__style.setProperty("-moz-user-select","text",null);
					textField.__style.setProperty("-ms-user-select","text",null);
					textField.__style.setProperty("-o-user-select","text",null);
				} else {
					textField.__style.setProperty("cursor","inherit",null);
				}
				var div = textField.__div;
				div.contentEditable = textEngine.type == "input";
				var style = textField.__style;
				if(textEngine.background) {
					style.setProperty("background-color","#" + (StringTools().default).hex(textEngine.backgroundColor & 16777215,6),null);
				} else {
					style.removeProperty("background-color");
				}
				var w = textEngine.width;
				var h = textEngine.height;
				var scale = 1;
				var unscaledSize = textField.__textFormat.size;
				var scaledSize = unscaledSize;
				var t = textField.__renderTransform;
				if(t.a != 1.0 || t.d != 1.0) {
					if(t.a == t.d) {
						scale = t.a;
						t.a = t.d = 1.0;
					} else if(t.a > t.d) {
						scale = t.a;
						t.d /= t.a;
						t.a = 1.0;
					} else {
						scale = t.d;
						t.a /= t.d;
						t.d = 1.0;
					}
					scaledSize *= scale;
					w = Math.ceil(w * scale);
					h = Math.ceil(h * scale);
				}
				textField.__textFormat.size = scaledSize;
				var text = textEngine.text;
				var adjustment = 0;
				if(!textField.__isHTML) {
					text = (StringTools().default).htmlEscape(text);
				} else {
					var matchText = text;
					while(DOMTextField.__regexFont.match(matchText)) {
						var fontText = DOMTextField.__regexFont.matched(0);
						var style1 = "";
						if(DOMTextField.__regexFace.match(fontText)) {
							style1 += "font-family:'" + DOMTextField.__getAttributeMatch(DOMTextField.__regexFace) + "';";
						}
						if(DOMTextField.__regexColor.match(fontText)) {
							style1 += "color:#" + DOMTextField.__getAttributeMatch(DOMTextField.__regexColor) + ";";
						}
						if(DOMTextField.__regexSize.match(fontText)) {
							var sizeAttr = DOMTextField.__getAttributeMatch(DOMTextField.__regexSize);
							var firstChar = (HxOverrides().default).cca(sizeAttr,0);
							var size;
							adjustment = (Std().default).parseFloat(sizeAttr) * scale;
							if(firstChar == 43 || firstChar == 45) {
								size = scaledSize + adjustment;
							} else {
								size = adjustment;
							}
							style1 += "font-size:" + size + "px;";
						}
						text = (StringTools().default).replace(text,fontText,"<span style='" + style1 + "'>");
						matchText = DOMTextField.__regexFont.matchedRight();
					}
					text = DOMTextField.__regexCloseFont.replace(text,"</span>");
				}
				text = (StringTools().default).replace(text,"<p ","<p style='margin-top:0; margin-bottom:0;' ");
				var unscaledLeading = textField.__textFormat.leading;
				textField.__textFormat.leading += (Std().default).int(adjustment);
				textField.__div.innerHTML = new (EReg().default)("\r\n","g").replace(text,"<br>");
				textField.__div.innerHTML = new (EReg().default)("\n","g").replace(textField.__div.innerHTML,"<br>");
				textField.__div.innerHTML = new (EReg().default)("\r","g").replace(textField.__div.innerHTML,"<br>");
				style.setProperty("font",(openfl__$internal_text_TextEngine().default).getFont(textField.__textFormat),null);
				textField.__textFormat.size = unscaledSize;
				textField.__textFormat.leading = unscaledLeading;
				style.setProperty("top","3px",null);
				if(textEngine.border) {
					style.setProperty("border","solid 1px #" + (StringTools().default).hex(textEngine.borderColor & 16777215,6),null);
					textField.__renderTransform.translate(-1,-1);
					textField.__renderTransformChanged = true;
					textField.__transformDirty = true;
				} else if(style.border != "") {
					style.removeProperty("border");
					textField.__renderTransformChanged = true;
				}
				style.setProperty("color","#" + (StringTools().default).hex(textField.__textFormat.color & 16777215,6),null);
				style.setProperty("width",w + "px",null);
				style.setProperty("height",h + "px",null);
				switch(textField.__textFormat.align) {
				case "center":
					style.setProperty("text-align","center",null);
					break;
				case "right":
					style.setProperty("text-align","right",null);
					break;
				default:
					style.setProperty("text-align","left",null);
				}
				textField.__dirty = false;
			} else if(textField.__div != null) {
				renderer.element.removeChild(textField.__div);
				textField.__div = null;
			}
		}
		if(textField.__div != null) {
			var old = renderer.__roundPixels;
			renderer.__roundPixels = true;
			renderer.__updateClip(textField);
			renderer.__applyStyle(textField,true,true,true);
			renderer.__roundPixels = old;
		}
	} else {
		DOMTextField.clear(textField,renderer);
	}
}
DOMTextField.__getAttributeMatch = function(regex) {
	if(regex.matched(2) != null) {
		return regex.matched(2);
	} else {
		return regex.matched(3);
	}
}
DOMTextField.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}
DOMTextField.__regexColor = new (EReg().default)("color=(\"#([^\"]+)\"|'#([^']+)')","i")
DOMTextField.__regexFace = new (EReg().default)("face=(\"([^\"]+)\"|'([^']+)')","i")
DOMTextField.__regexFont = new (EReg().default)("<font ([^>]+)>","gi")
DOMTextField.__regexCloseFont = new (EReg().default)("</font>","gi")
DOMTextField.__regexSize = new (EReg().default)("size=(\"([^\"]+)\"|'([^']+)')","i")

// Export

exports.default = DOMTextField;