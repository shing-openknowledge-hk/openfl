// Class: openfl._internal.formats.html.HTMLParser

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function EReg() {return require("./../../../../EReg");}
function openfl_VectorData() {return require("./../../../../openfl/VectorData");}
function HxOverrides() {return require("./../../../../HxOverrides");}
function lime_utils_Log() {return require("./../../../../lime/utils/Log");}
function openfl__$Vector_Vector_$Impl_$() {return require("./../../../../openfl/_Vector/Vector_Impl_");}
function openfl__$internal_text_TextFormatRange() {return require("./../../../../openfl/_internal/text/TextFormatRange");}
function Std() {return require("./../../../../Std");}

// Constructor

var HTMLParser = function(){}

// Meta

HTMLParser.__name__ = "openfl._internal.formats.html.HTMLParser";
HTMLParser.__isInterface__ = false;
HTMLParser.prototype = {
	
};
HTMLParser.prototype.__class__ = HTMLParser.prototype.constructor = $hxClasses["openfl._internal.formats.html.HTMLParser"] = HTMLParser;

// Init



// Statics

HTMLParser.parse = function(value,textFormat,textFormatRanges) {
	value = HTMLParser.__regexBreakTag.replace(value,"\n");
	value = HTMLParser.__regexEntities[0].replace(value,"\"");
	value = HTMLParser.__regexEntities[1].replace(value,"'");
	value = HTMLParser.__regexEntities[2].replace(value,"&");
	value = HTMLParser.__regexEntities[5].replace(value," ");
	var segments = value.split("<");
	if(segments.length == 1) {
		value = HTMLParser.__regexHTMLTag.replace(value,"");
		if(textFormatRanges.get_length() > 1) {
			var len = textFormatRanges.get_length() - 1;
			(openfl_VectorData().default).ofArray(Array.prototype.splice.call(textFormatRanges,1,len));
		}
		value = HTMLParser.__regexEntities[3].replace(value,"<");
		value = HTMLParser.__regexEntities[4].replace(value,">");
		var range = textFormatRanges[0];
		range.format = textFormat;
		range.start = 0;
		range.end = value.length;
		return value;
	} else {
		var len1 = textFormatRanges.get_length();
		(openfl_VectorData().default).ofArray(Array.prototype.splice.call(textFormatRanges,0,len1));
		value = "";
		var segment;
		var _g = 0;
		var _g1 = segments.length;
		while(_g < _g1) {
			var i = _g++;
			segment = segments[i];
			segment = HTMLParser.__regexEntities[3].replace(segment,"<");
			segment = HTMLParser.__regexEntities[4].replace(segment,">");
			segments[i] = segment;
		}
		var formatStack = [textFormat.clone()];
		var tagStack = [];
		var sub;
		var noLineBreak = false;
		var _g2 = 0;
		while(_g2 < segments.length) {
			var segment1 = segments[_g2];
			++_g2;
			if(segment1 == "") {
				continue;
			}
			var isClosingTag = (HxOverrides().default).substr(segment1,0,1) == "/";
			var tagEndIndex = segment1.indexOf(">");
			var start = tagEndIndex + 1;
			var spaceIndex = segment1.indexOf(" ");
			var tagName = segment1.substring(isClosingTag ? 1 : 0,spaceIndex > -1 && spaceIndex < tagEndIndex ? spaceIndex : tagEndIndex);
			var format;
			if(isClosingTag) {
				if(tagStack.length == 0 || tagName.toLowerCase() != tagStack[tagStack.length - 1].toLowerCase()) {
					(lime_utils_Log().default).info("Invalid HTML, unexpected closing tag ignored: " + tagName,{ fileName : "../src/openfl/_internal/formats/html/HTMLParser.hx", lineNumber : 97, className : "openfl._internal.formats.html.HTMLParser", methodName : "parse"});
					continue;
				}
				tagStack.pop();
				formatStack.pop();
				format = formatStack[formatStack.length - 1].clone();
				if(tagName.toLowerCase() == "p" && textFormatRanges.get_length() > 0) {
					value += "\n";
					noLineBreak = true;
					var tmp = textFormatRanges[textFormatRanges.get_length() - 1];
					tmp.end++;
				}
				if(start < segment1.length) {
					sub = (HxOverrides().default).substr(segment1,start,null);
					(openfl__$Vector_Vector_$Impl_$().default).push(textFormatRanges,new (openfl__$internal_text_TextFormatRange().default)(format,value.length,value.length + sub.length));
					value += sub;
					noLineBreak = false;
				}
			} else {
				format = formatStack[formatStack.length - 1].clone();
				if(tagEndIndex > -1) {
					switch(tagName.toLowerCase()) {
					case "a":
						if(HTMLParser.__regexHref.match(segment1)) {
							format.url = HTMLParser.__getAttributeMatch(HTMLParser.__regexHref);
						}
						break;
					case "b":
						format.bold = true;
						break;
					case "em":case "i":
						format.italic = true;
						break;
					case "font":
						if(HTMLParser.__regexFace.match(segment1)) {
							format.font = HTMLParser.__getAttributeMatch(HTMLParser.__regexFace);
						}
						if(HTMLParser.__regexColor.match(segment1)) {
							format.color = (Std().default).parseInt("0x" + HTMLParser.__getAttributeMatch(HTMLParser.__regexColor));
						}
						if(HTMLParser.__regexSize.match(segment1)) {
							var sizeAttr = HTMLParser.__getAttributeMatch(HTMLParser.__regexSize);
							var firstChar = (HxOverrides().default).cca(sizeAttr,0);
							if(firstChar == 43 || firstChar == 45) {
								var parentFormat = formatStack.length >= 2 ? formatStack[formatStack.length - 2] : textFormat;
								format.size = parentFormat.size + (Std().default).parseInt(sizeAttr);
							} else {
								format.size = (Std().default).parseInt(sizeAttr);
							}
						}
						break;
					case "p":
						if(textFormatRanges.get_length() > 0 && !noLineBreak) {
							value += "\n";
						}
						if(HTMLParser.__regexAlign.match(segment1)) {
							var align = HTMLParser.__getAttributeMatch(HTMLParser.__regexAlign).toLowerCase();
							format.align = align;
						}
						break;
					case "textformat":
						if(HTMLParser.__regexBlockIndent.match(segment1)) {
							format.blockIndent = (Std().default).parseInt(HTMLParser.__getAttributeMatch(HTMLParser.__regexBlockIndent));
						}
						if(HTMLParser.__regexIndent.match(segment1)) {
							format.indent = (Std().default).parseInt(HTMLParser.__getAttributeMatch(HTMLParser.__regexIndent));
						}
						if(HTMLParser.__regexLeading.match(segment1)) {
							format.leading = (Std().default).parseInt(HTMLParser.__getAttributeMatch(HTMLParser.__regexLeading));
						}
						if(HTMLParser.__regexLeftMargin.match(segment1)) {
							format.leftMargin = (Std().default).parseInt(HTMLParser.__getAttributeMatch(HTMLParser.__regexLeftMargin));
						}
						if(HTMLParser.__regexRightMargin.match(segment1)) {
							format.rightMargin = (Std().default).parseInt(HTMLParser.__getAttributeMatch(HTMLParser.__regexRightMargin));
						}
						if(HTMLParser.__regexTabStops.match(segment1)) {
							var values = HTMLParser.__getAttributeMatch(HTMLParser.__regexTabStops).split(" ");
							var tabStops = [];
							var _g21 = 0;
							while(_g21 < values.length) {
								var stop = values[_g21];
								++_g21;
								tabStops.push((Std().default).parseInt(stop));
							}
							format.tabStops = tabStops;
						}
						break;
					case "u":
						format.underline = true;
						break;
					}
					formatStack.push(format);
					tagStack.push(tagName);
					if(start < segment1.length) {
						sub = segment1.substring(start);
						(openfl__$Vector_Vector_$Impl_$().default).push(textFormatRanges,new (openfl__$internal_text_TextFormatRange().default)(format,value.length,value.length + sub.length));
						value += sub;
						noLineBreak = false;
					} else if(textFormatRanges.get_length() > 0) {
						var tmp1 = textFormatRanges[textFormatRanges.get_length() - 1];
						tmp1.end++;
					}
				} else {
					(openfl__$Vector_Vector_$Impl_$().default).push(textFormatRanges,new (openfl__$internal_text_TextFormatRange().default)(format,value.length,value.length + segment1.length));
					value += segment1;
					noLineBreak = false;
				}
			}
		}
		if(textFormatRanges.get_length() == 0) {
			(openfl__$Vector_Vector_$Impl_$().default).push(textFormatRanges,new (openfl__$internal_text_TextFormatRange().default)(formatStack[0],0,0));
		}
	}
	return value;
}
HTMLParser.__getAttributeMatch = function(regex) {
	if(regex.matched(2) != null) {
		return regex.matched(2);
	} else {
		return regex.matched(3);
	}
}
HTMLParser.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}
HTMLParser.__regexAlign = new (EReg().default)("align\\s?=\\s?(\"([^\"]+)\"|'([^']+)')","i")
HTMLParser.__regexBreakTag = new (EReg().default)("<br\\s*/?>","gi")
HTMLParser.__regexBlockIndent = new (EReg().default)("blockindent\\s?=\\s?(\"([^\"]+)\"|'([^']+)')","i")
HTMLParser.__regexColor = new (EReg().default)("color\\s?=\\s?(\"#([^\"]+)\"|'#([^']+)')","i")
HTMLParser.__regexEntities = [new (EReg().default)("&quot;","g"),new (EReg().default)("&apos;","g"),new (EReg().default)("&amp;","g"),new (EReg().default)("&lt;","g"),new (EReg().default)("&gt;","g"),new (EReg().default)("&nbsp;","g")]
HTMLParser.__regexFace = new (EReg().default)("face\\s?=\\s?(\"([^\"]+)\"|'([^']+)')","i")
HTMLParser.__regexHTMLTag = new (EReg().default)("<.*?>","g")
HTMLParser.__regexHref = new (EReg().default)("href\\s?=\\s?(\"([^\"]+)\"|'([^']+)')","i")
HTMLParser.__regexIndent = new (EReg().default)(" indent\\s?=\\s?(\"([^\"]+)\"|'([^']+)')","i")
HTMLParser.__regexLeading = new (EReg().default)("leading\\s?=\\s?(\"([^\"]+)\"|'([^']+)')","i")
HTMLParser.__regexLeftMargin = new (EReg().default)("leftmargin\\s?=\\s?(\"([^\"]+)\"|'([^']+)')","i")
HTMLParser.__regexRightMargin = new (EReg().default)("rightmargin\\s?=\\s?(\"([^\"]+)\"|'([^']+)')","i")
HTMLParser.__regexSize = new (EReg().default)("size\\s?=\\s?(\"([^\"]+)\"|'([^']+)')","i")
HTMLParser.__regexTabStops = new (EReg().default)("tabstops\\s?=\\s?(\"([^\"]+)\"|'([^']+)')","i")

// Export

exports.default = HTMLParser;