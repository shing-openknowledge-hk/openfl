// Class: openfl.display.LoaderInfo

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_EventDispatcher() {return require("./../../openfl/events/EventDispatcher");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function openfl_events_ProgressEvent() {return require("./../../openfl/events/ProgressEvent");}
function openfl_events_UncaughtErrorEvents() {return require("./../../openfl/events/UncaughtErrorEvents");}
function openfl_system_ApplicationDomain() {return require("./../../openfl/system/ApplicationDomain");}

// Constructor

var LoaderInfo = function() {
	(openfl_events_EventDispatcher().default).call(this);
	this.applicationDomain = (openfl_system_ApplicationDomain().default).currentDomain;
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
}

// Meta

LoaderInfo.__name__ = "openfl.display.LoaderInfo";
LoaderInfo.__isInterface__ = false;
LoaderInfo.__super__ = (openfl_events_EventDispatcher().default);
LoaderInfo.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	__complete: function() {
		if(!this.__completed) {
			if(this.bytesLoaded < this.bytesTotal) {
				this.bytesLoaded = this.bytesTotal;
			}
			this.__update(this.bytesLoaded,this.bytesTotal);
			this.__completed = true;
			this.dispatchEvent(new (openfl_events_Event().default)("complete"));
		}
	},
	__update: function(bytesLoaded,bytesTotal) {
		this.bytesLoaded = bytesLoaded;
		this.bytesTotal = bytesTotal;
		this.dispatchEvent(new (openfl_events_ProgressEvent().default)("progress",false,false,bytesLoaded,bytesTotal));
	}
});
LoaderInfo.prototype.__class__ = LoaderInfo.prototype.constructor = $hxClasses["openfl.display.LoaderInfo"] = LoaderInfo;

// Init



// Statics

LoaderInfo.create = function(loader) {
	var loaderInfo = new LoaderInfo();
	loaderInfo.uncaughtErrorEvents = new (openfl_events_UncaughtErrorEvents().default)();
	if(loader != null) {
		loaderInfo.loader = loader;
	} else {
		loaderInfo.url = LoaderInfo.__rootURL;
	}
	return loaderInfo;
}
LoaderInfo.__meta__ = { statics : { create : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}, fields : { parameters : { SuppressWarnings : ["checkstyle:Dynamic"]}}}
LoaderInfo.__rootURL = typeof(window) != "undefined" ? window.document.URL : ""

// Export

exports.default = LoaderInfo;