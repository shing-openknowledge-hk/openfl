// Class: lime.text.Font

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
function lime_app_Promise() {return require("./../../lime/app/Promise");}
function EReg() {return require("./../../EReg");}
function lime_utils_Log() {return require("./../../lime/utils/Log");}
function lime_app_Future() {return require("./../../lime/app/Future");}
function lime_net__$HTTPRequest_$lime_$text_$Font() {return require("./../../lime/net/_HTTPRequest_lime_text_Font");}
function lime_utils_Assets() {return require("./../../lime/utils/Assets");}

// Constructor

var Font = function(name) {
	if(name != null) {
		this.name = name;
	}
	if(!this.__init) {
		if(this.ascender == undefined) {
			this.ascender = 0;
		}
		if(this.descender == undefined) {
			this.descender = 0;
		}
		if(this.height == undefined) {
			this.height = 0;
		}
		if(this.numGlyphs == undefined) {
			this.numGlyphs = 0;
		}
		if(this.underlinePosition == undefined) {
			this.underlinePosition = 0;
		}
		if(this.underlineThickness == undefined) {
			this.underlineThickness = 0;
		}
		if(this.unitsPerEM == undefined) {
			this.unitsPerEM = 0;
		}
		if(this.__fontID != null) {
			if((lime_utils_Assets().default).isLocal(this.__fontID)) {
				this.__fromBytes((lime_utils_Assets().default).getBytes(this.__fontID));
			}
		} else if(this.__fontPath != null) {
			this.__fromFile(this.__fontPath);
		}
	}
}

// Meta

Font.__name__ = "lime.text.Font";
Font.__isInterface__ = false;
Font.prototype = {
	decompose: function() {
		return null;
	},
	getGlyph: function(character) {
		return -1;
	},
	getGlyphs: function(characters) {
		if(characters == null) {
			characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^`'\"/\\&*()[]{}<>|:;_-+=?,. ";
		}
		return null;
	},
	getGlyphMetrics: function(glyph) {
		return null;
	},
	renderGlyph: function(glyph,fontSize) {
		return null;
	},
	renderGlyphs: function(glyphs,fontSize) {
		return null;
	},
	__copyFrom: function(other) {
		if(other != null) {
			this.ascender = other.ascender;
			this.descender = other.descender;
			this.height = other.height;
			this.name = other.name;
			this.numGlyphs = other.numGlyphs;
			this.src = other.src;
			this.underlinePosition = other.underlinePosition;
			this.underlineThickness = other.underlineThickness;
			this.unitsPerEM = other.unitsPerEM;
			this.__fontID = other.__fontID;
			this.__fontPath = other.__fontPath;
			this.__init = true;
		}
	},
	__fromBytes: function(bytes) {
		this.__fontPath = null;
	},
	__fromFile: function(path) {
		this.__fontPath = path;
	},
	__initializeSource: function() {
		this.__init = true;
	},
	__loadFromName: function(name) {
		var _gthis = this;
		var promise = new (lime_app_Promise().default)();
		this.name = name;
		var userAgent = window.navigator.userAgent.toLowerCase();
		var isSafari = userAgent.indexOf(" safari/") >= 0 && userAgent.indexOf(" chrome/") < 0;
		var isUIWebView = new (EReg().default)("(iPhone|iPod|iPad).*AppleWebKit(?!.*Version)","i").match(userAgent);
		if(!isSafari && !isUIWebView && (window.document.fonts && ($_=window.document.fonts,$bind($_,$_.load)))) {
			window.document.fonts.load("1em '" + name + "'").then(function(_) {
				promise.complete(_gthis);
			},function(_1) {
				(lime_utils_Log().default).warn("Could not load web font \"" + name + "\"",{ fileName : "../node_modules/lime/src/lime/text/Font.hx", lineNumber : 513, className : "lime.text.Font", methodName : "__loadFromName"});
				promise.complete(_gthis);
			});
		} else {
			var node1 = Font.__measureFontNode("'" + name + "', sans-serif");
			var node2 = Font.__measureFontNode("'" + name + "', serif");
			var width1 = node1.offsetWidth;
			var width2 = node2.offsetWidth;
			var interval = -1;
			var timeout = 3000;
			var intervalLength = 50;
			var intervalCount = 0;
			var loaded;
			var timeExpired;
			var checkFont = function() {
				intervalCount += 1;
				loaded = node1.offsetWidth != width1 || node2.offsetWidth != width2;
				timeExpired = intervalCount * intervalLength >= timeout;
				if(loaded || timeExpired) {
					window.clearInterval(interval);
					node1.parentNode.removeChild(node1);
					node2.parentNode.removeChild(node2);
					node1 = null;
					node2 = null;
					if(timeExpired) {
						(lime_utils_Log().default).warn("Could not load web font \"" + name + "\"",{ fileName : "../node_modules/lime/src/lime/text/Font.hx", lineNumber : 548, className : "lime.text.Font", methodName : "__loadFromName"});
					}
					promise.complete(_gthis);
				}
			};
			interval = window.setInterval(checkFont,intervalLength);
		}
		return promise.future;
	},
	__setSize: function(size) {
	}
};
Font.prototype.__class__ = Font.prototype.constructor = $hxClasses["lime.text.Font"] = Font;

// Init



// Statics

Font.fromBytes = function(bytes) {
	if(bytes == null) {
		return null;
	}
	var font = new Font();
	font.__fromBytes(bytes);
	return font;
}
Font.fromFile = function(path) {
	if(path == null) {
		return null;
	}
	var font = new Font();
	font.__fromFile(path);
	return font;
}
Font.loadFromBytes = function(bytes) {
	return (lime_app_Future().default).withValue(Font.fromBytes(bytes));
}
Font.loadFromFile = function(path) {
	var request = new (lime_net__$HTTPRequest_$lime_$text_$Font().default)();
	return request.load(path).then(function(font) {
		if(font != null) {
			return (lime_app_Future().default).withValue(font);
		} else {
			return (lime_app_Future().default).withError("");
		}
	});
}
Font.loadFromName = function(path) {
	var font = new Font();
	return font.__loadFromName(path);
}
Font.__measureFontNode = function(fontFamily) {
	var node = window.document.createElement("span");
	node.setAttribute("aria-hidden","true");
	var text = window.document.createTextNode("BESbswy");
	node.appendChild(text);
	var style = node.style;
	style.display = "block";
	style.position = "absolute";
	style.top = "-9999px";
	style.left = "-9999px";
	style.fontSize = "300px";
	style.width = "auto";
	style.height = "auto";
	style.lineHeight = "normal";
	style.margin = "0";
	style.padding = "0";
	style.fontVariant = "normal";
	style.whiteSpace = "nowrap";
	style.fontFamily = fontFamily;
	window.document.body.appendChild(node);
	return node;
}


// Export

exports.default = Font;