// Class: openfl.display.FPS

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_text_TextField() {return require("./../../openfl/text/TextField");}
function openfl_text_TextFormat() {return require("./../../openfl/text/TextFormat");}

// Constructor

var FPS = function(x,y,color) {
	if(color == null) {
		color = 0;
	}
	if(y == null) {
		y = 10;
	}
	if(x == null) {
		x = 10;
	}
	(openfl_text_TextField().default).call(this);
	this.set_x(x);
	this.set_y(y);
	this.currentFPS = 0;
	this.set_selectable(false);
	this.mouseEnabled = false;
	this.set_defaultTextFormat(new (openfl_text_TextFormat().default)("_sans",12,color));
	this.set_text("FPS: ");
	this.cacheCount = 0;
	this.currentTime = 0;
	this.times = [];
}

// Meta

FPS.__name__ = "openfl.display.FPS";
FPS.__isInterface__ = false;
FPS.__super__ = (openfl_text_TextField().default);
FPS.prototype = $extend((openfl_text_TextField().default).prototype, {
	__enterFrame: function(deltaTime) {
		this.currentTime += deltaTime;
		this.times.push(this.currentTime);
		while(this.times[0] < this.currentTime - 1000) this.times.shift();
		var currentCount = this.times.length;
		this.currentFPS = Math.round((currentCount + this.cacheCount) / 2);
		if(currentCount != this.cacheCount) {
			this.set_text("FPS: " + this.currentFPS);
		}
		this.cacheCount = currentCount;
	}
});
FPS.prototype.__class__ = FPS.prototype.constructor = $hxClasses["openfl.display.FPS"] = FPS;

// Init



// Statics




// Export

exports.default = FPS;