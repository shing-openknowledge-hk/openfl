// Class: lime.system.BackgroundWorker

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_app__$Event_$Dynamic_$Void() {return require("./../../lime/app/_Event_Dynamic_Void");}

// Constructor

var BackgroundWorker = function() {
	this.onProgress = new (lime_app__$Event_$Dynamic_$Void().default)();
	this.onError = new (lime_app__$Event_$Dynamic_$Void().default)();
	this.onComplete = new (lime_app__$Event_$Dynamic_$Void().default)();
	this.doWork = new (lime_app__$Event_$Dynamic_$Void().default)();
}

// Meta

BackgroundWorker.__name__ = "lime.system.BackgroundWorker";
BackgroundWorker.__isInterface__ = false;
BackgroundWorker.prototype = {
	cancel: function() {
		this.canceled = true;
	},
	run: function(message) {
		this.canceled = false;
		this.completed = false;
		this.__runMessage = message;
		this.__doWork();
	},
	sendComplete: function(message) {
		this.completed = true;
		if(!this.canceled) {
			this.canceled = true;
			this.onComplete.dispatch(message);
		}
	},
	sendError: function(message) {
		if(!this.canceled) {
			this.canceled = true;
			this.onError.dispatch(message);
		}
	},
	sendProgress: function(message) {
		if(!this.canceled) {
			this.onProgress.dispatch(message);
		}
	},
	__doWork: function() {
		this.doWork.dispatch(this.__runMessage);
	},
	__update: function(deltaTime) {
	}
};
BackgroundWorker.prototype.__class__ = BackgroundWorker.prototype.constructor = $hxClasses["lime.system.BackgroundWorker"] = BackgroundWorker;

// Init



// Statics


BackgroundWorker.MESSAGE_COMPLETE = "__COMPLETE__"
BackgroundWorker.MESSAGE_ERROR = "__ERROR__"

// Export

exports.default = BackgroundWorker;