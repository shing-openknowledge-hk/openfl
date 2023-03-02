// Class: lime.system.ThreadPool

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_app__$Event_$Dynamic_$Void() {return require("./../../lime/app/_Event_Dynamic_Void");}

// Constructor

var ThreadPool = function(minThreads,maxThreads) {
	if(maxThreads == null) {
		maxThreads = 1;
	}
	if(minThreads == null) {
		minThreads = 0;
	}
	this.onRun = new (lime_app__$Event_$Dynamic_$Void().default)();
	this.onProgress = new (lime_app__$Event_$Dynamic_$Void().default)();
	this.onError = new (lime_app__$Event_$Dynamic_$Void().default)();
	this.onComplete = new (lime_app__$Event_$Dynamic_$Void().default)();
	this.doWork = new (lime_app__$Event_$Dynamic_$Void().default)();
	this.minThreads = minThreads;
	this.maxThreads = maxThreads;
	this.currentThreads = 0;
}

// Meta

ThreadPool.__name__ = "lime.system.ThreadPool";
ThreadPool.__isInterface__ = false;
ThreadPool.prototype = {
	queue: function(state) {
		this.runWork(state);
	},
	sendComplete: function(state) {
		this.onComplete.dispatch(state);
	},
	sendError: function(state) {
		this.onError.dispatch(state);
	},
	sendProgress: function(state) {
		this.onProgress.dispatch(state);
	},
	runWork: function(state) {
		this.onRun.dispatch(state);
		this.doWork.dispatch(state);
	}
};
ThreadPool.prototype.__class__ = ThreadPool.prototype.constructor = $hxClasses["lime.system.ThreadPool"] = ThreadPool;

// Init



// Statics




// Export

exports.default = ThreadPool;