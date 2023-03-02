// Class: openfl.display.DefaultPreloader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_display_Sprite() {return require("./../../openfl/display/Sprite");}
function openfl_Lib() {return require("./../../openfl/Lib");}
function Reflect() {return require("./../../Reflect");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function Std() {return require("./../../Std");}

// Constructor

var DefaultPreloader = function() {
	(openfl_display_Sprite().default).call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) {
		color = 16777215;
	}
	var x = 30;
	var height = 7;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 2;
	this.outline = new (openfl_display_Sprite().default)();
	this.outline.get_graphics().beginFill(color,0.07);
	this.outline.get_graphics().drawRect(0,0,width,height);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.outline.set_alpha(0);
	this.addChild(this.outline);
	this.progress = new (openfl_display_Sprite().default)();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.progress.set_alpha(0);
	this.addChild(this.progress);
	this.startAnimation = (openfl_Lib().default).getTimer() + 100;
	this.endAnimation = this.startAnimation + 1000;
	this.addEventListener("addedToStage",$bind(this,this.this_onAddedToStage));
}

// Meta

DefaultPreloader.__name__ = "openfl.display.DefaultPreloader";
DefaultPreloader.__isInterface__ = false;
DefaultPreloader.__super__ = (openfl_display_Sprite().default);
DefaultPreloader.prototype = $extend((openfl_display_Sprite().default).prototype, {
	getBackgroundColor: function() {
		var attributes = (openfl_Lib().default).get_current().stage.window.context.attributes;
		if((Reflect().default).hasField(attributes,"background") && attributes.background != null) {
			return attributes.background;
		} else {
			return 0;
		}
	},
	getHeight: function() {
		var height = (openfl_Lib().default).get_current().stage.window.get_height();
		if(height > 0) {
			return height;
		} else {
			return (openfl_Lib().default).get_current().stage.stageHeight;
		}
	},
	getWidth: function() {
		var width = (openfl_Lib().default).get_current().stage.window.get_width();
		if(width > 0) {
			return width;
		} else {
			return (openfl_Lib().default).get_current().stage.stageWidth;
		}
	},
	onInit: function() {
		this.addEventListener("enterFrame",$bind(this,this.this_onEnterFrame));
	},
	onLoaded: function() {
		this.removeEventListener("enterFrame",$bind(this,this.this_onEnterFrame));
		this.dispatchEvent(new (openfl_events_Event().default)("unload"));
	},
	onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = 0.0;
		if(bytesTotal > 0) {
			percentLoaded = bytesLoaded / bytesTotal;
			if(percentLoaded > 1) {
				percentLoaded = 1;
			}
		}
		this.progress.set_scaleX(percentLoaded);
	},
	this_onAddedToStage: function(event) {
		this.removeEventListener("addedToStage",$bind(this,this.this_onAddedToStage));
		this.onInit();
		this.onUpdate(this.get_loaderInfo().bytesLoaded,this.get_loaderInfo().bytesTotal);
		this.addEventListener("progress",$bind(this,this.this_onProgress));
		this.addEventListener("complete",$bind(this,this.this_onComplete));
	},
	this_onComplete: function(event) {
		event.preventDefault();
		this.removeEventListener("progress",$bind(this,this.this_onProgress));
		this.removeEventListener("complete",$bind(this,this.this_onComplete));
		this.onLoaded();
	},
	this_onEnterFrame: function(event) {
		var elapsed = (openfl_Lib().default).getTimer() - this.startAnimation;
		var total = this.endAnimation - this.startAnimation;
		var percent = elapsed / total;
		if(percent < 0) {
			percent = 0;
		}
		if(percent > 1) {
			percent = 1;
		}
		this.outline.set_alpha(percent);
		this.progress.set_alpha(percent);
	},
	this_onProgress: function(event) {
		this.onUpdate((Std().default).int(event.bytesLoaded),(Std().default).int(event.bytesTotal));
	}
});
DefaultPreloader.prototype.__class__ = DefaultPreloader.prototype.constructor = $hxClasses["openfl.display.DefaultPreloader"] = DefaultPreloader;

// Init



// Statics


DefaultPreloader.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = DefaultPreloader;