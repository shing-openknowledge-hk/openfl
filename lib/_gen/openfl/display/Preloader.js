// Class: openfl.display.Preloader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
function openfl_Lib() {return require("./../../openfl/Lib");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function openfl_events_ProgressEvent() {return require("./../../openfl/events/ProgressEvent");}
function lime_app__$Event_$Void_$Void() {return require("./../../lime/app/_Event_Void_Void");}

// Constructor

var Preloader = function(display) {
	this.onComplete = new (lime_app__$Event_$Void_$Void().default)();
	this.display = display;
	if(display != null) {
		display.addEventListener("unload",$bind(this,this.display_onUnload));
		(openfl_Lib().default).get_current().addChild(display);
	}
}

// Meta

Preloader.__name__ = "openfl.display.Preloader";
Preloader.__isInterface__ = false;
Preloader.prototype = {
	start: function() {
		this.ready = true;
		(openfl_Lib().default).get_current().get_loaderInfo().__complete();
		if(this.display != null) {
			var complete = new (openfl_events_Event().default)("complete",true,true);
			this.display.dispatchEvent(complete);
			if(!complete.isDefaultPrevented()) {
				this.display.dispatchEvent(new (openfl_events_Event().default)("unload"));
			}
		} else if(!this.complete) {
			this.complete = true;
			this.onComplete.dispatch();
		}
	},
	update: function(loaded,total) {
		(openfl_Lib().default).get_current().get_loaderInfo().__update(loaded,total);
		if(this.display != null) {
			this.display.dispatchEvent(new (openfl_events_ProgressEvent().default)("progress",true,true,loaded,total));
		}
	},
	display_onUnload: function(event) {
		if(this.display != null) {
			this.display.removeEventListener("unload",$bind(this,this.display_onUnload));
			if(this.display.parent == (openfl_Lib().default).get_current()) {
				(openfl_Lib().default).get_current().removeChild(this.display);
			}
			(openfl_Lib().default).get_current().stage.set_focus(null);
			this.display = null;
		}
		if(this.ready) {
			if(!this.complete) {
				this.complete = true;
				this.onComplete.dispatch();
			}
		}
	}
};
Preloader.prototype.__class__ = Preloader.prototype.constructor = $hxClasses["openfl.display.Preloader"] = Preloader;

// Init



// Statics


Preloader.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, fields : { onComplete : { SuppressWarnings : ["checkstyle:Dynamic"]}}}

// Export

exports.default = Preloader;