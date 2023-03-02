// Class: openfl.desktop.Clipboard

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_system_Clipboard() {return require("./../../lime/system/Clipboard");}
function Std() {return require("./../../Std");}
function openfl__$internal_Lib() {return require("./../../openfl/_internal/Lib");}

// Constructor

var Clipboard = function() {
}

// Meta

Clipboard.__name__ = "openfl.desktop.Clipboard";
Clipboard.__isInterface__ = false;
Clipboard.prototype = {
	clear: function() {
		if(this.__systemClipboard) {
			(lime_system_Clipboard().default).set_text(null);
			return;
		}
		this.__htmlText = null;
		this.__richText = null;
		this.__text = null;
	},
	clearData: function(format) {
		if(this.__systemClipboard) {
			switch(format) {
			case "air:html":case "air:rtf":case "air:text":
				(lime_system_Clipboard().default).set_text(null);
				break;
			default:
			}
			return;
		}
		switch(format) {
		case "air:html":
			this.__htmlText = null;
			break;
		case "air:rtf":
			this.__richText = null;
			break;
		case "air:text":
			this.__text = null;
			break;
		default:
		}
	},
	getData: function(format,transferMode) {
		if(transferMode == null) {
			transferMode = "originalPreferred";
		}
		if(this.__systemClipboard) {
			switch(format) {
			case "air:html":case "air:rtf":case "air:text":
				return (lime_system_Clipboard().default).get_text();
			default:
				return null;
			}
		}
		switch(format) {
		case "air:html":
			return this.__htmlText;
		case "air:rtf":
			return this.__richText;
		case "air:text":
			return this.__text;
		default:
			return null;
		}
	},
	hasFormat: function(format) {
		if(this.__systemClipboard) {
			switch(format) {
			case "air:html":case "air:rtf":case "air:text":
				return (lime_system_Clipboard().default).get_text() != null;
			default:
				return false;
			}
		}
		switch(format) {
		case "air:html":
			return this.__htmlText != null;
		case "air:rtf":
			return this.__richText != null;
		case "air:text":
			return this.__text != null;
		default:
			return false;
		}
	},
	setData: function(format,data,serializable) {
		if(serializable == null) {
			serializable = true;
		}
		if(this.__systemClipboard) {
			switch(format) {
			case "air:html":case "air:rtf":case "air:text":
				(lime_system_Clipboard().default).set_text((Std().default).string(data));
				return true;
			default:
				return false;
			}
		}
		switch(format) {
		case "air:html":
			this.__htmlText = (Std().default).string(data);
			return true;
		case "air:rtf":
			this.__richText = (Std().default).string(data);
			return true;
		case "air:text":
			this.__text = (Std().default).string(data);
			return true;
		default:
			return false;
		}
	},
	setDataHandler: function(format,handler,serializable) {
		if(serializable == null) {
			serializable = true;
		}
		(openfl__$internal_Lib().default).notImplemented({ fileName : "../src/openfl/desktop/Clipboard.hx", lineNumber : 509, className : "openfl.desktop.Clipboard", methodName : "setDataHandler"});
		return false;
	},
	get_formats: function() {
		var formats = [];
		if(this.hasFormat("air:html")) {
			formats.push("air:html");
		}
		if(this.hasFormat("air:rtf")) {
			formats.push("air:rtf");
		}
		if(this.hasFormat("air:text")) {
			formats.push("air:text");
		}
		return formats;
	}
};
Clipboard.prototype.__class__ = Clipboard.prototype.constructor = $hxClasses["openfl.desktop.Clipboard"] = Clipboard;

// Init

{
	global.Object.defineProperty(Clipboard,"generalClipboard",{ get : function() {
		return Clipboard.get_generalClipboard();
	}});
	var tmp = Clipboard.prototype;
	var tmp1 = function () { return this.get_formats (); }
	global.Object.defineProperty(tmp,"formats",{ get : tmp1});
};

// Statics

Clipboard.get_generalClipboard = function() {
	if(Clipboard.__generalClipboard == null) {
		Clipboard.__generalClipboard = new Clipboard();
		Clipboard.__generalClipboard.__systemClipboard = true;
	}
	return Clipboard.__generalClipboard;
}
Clipboard.__meta__ = { fields : { setDataHandler : { SuppressWarnings : ["checkstyle:Dynamic"]}}}

// Export

exports.default = Clipboard;