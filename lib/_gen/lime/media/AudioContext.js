// Class: lime.media.AudioContext

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_CallStack() {return require("./../../haxe/CallStack");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function lime_media_HTML5AudioContext() {return require("./../../lime/media/HTML5AudioContext");}

// Constructor

var AudioContext = function(type) {
	if(type != "custom") {
		if(type == null || type == "web") {
			try {
				window.AudioContext = window.AudioContext || window.webkitAudioContext;
				this.web = new window.AudioContext ();
				this.type = "web";
			} catch( e ) {
				(haxe_CallStack().default).lastException = e;
				var e1 = ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e;
			}
		}
		if(this.web == null && type != "web") {
			this.html5 = new (lime_media_HTML5AudioContext().default)();
			this.type = "html5";
		}
	} else {
		this.type = "custom";
	}
}

// Meta

AudioContext.__name__ = "lime.media.AudioContext";
AudioContext.__isInterface__ = false;
AudioContext.prototype = {
	
};
AudioContext.prototype.__class__ = AudioContext.prototype.constructor = $hxClasses["lime.media.AudioContext"] = AudioContext;

// Init



// Statics




// Export

exports.default = AudioContext;