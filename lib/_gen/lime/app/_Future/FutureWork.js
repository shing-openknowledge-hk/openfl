// Class: lime.app._Future.FutureWork

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime_system_ThreadPool() {return require("./../../../lime/system/ThreadPool");}
function haxe_CallStack() {return require("./../../../haxe/CallStack");}
function js__$Boot_HaxeError() {return require("./../../../js/_Boot/HaxeError");}

// Constructor

var FutureWork = function(){}

// Meta

FutureWork.__name__ = "lime.app._Future.FutureWork";
FutureWork.__isInterface__ = false;
FutureWork.prototype = {
	
};
FutureWork.prototype.__class__ = FutureWork.prototype.constructor = $hxClasses["lime.app._Future.FutureWork"] = FutureWork;

// Init



// Statics

FutureWork.queue = function(state) {
	if(FutureWork.threadPool == null) {
		FutureWork.threadPool = new (lime_system_ThreadPool().default)();
		FutureWork.threadPool.doWork.add(FutureWork.threadPool_doWork);
		FutureWork.threadPool.onComplete.add(FutureWork.threadPool_onComplete);
		FutureWork.threadPool.onError.add(FutureWork.threadPool_onError);
	}
	FutureWork.threadPool.queue(state);
}
FutureWork.threadPool_doWork = function(state) {
	try {
		var result = state.work();
		FutureWork.threadPool.sendComplete({ promise : state.promise, result : result});
	} catch( e ) {
		(haxe_CallStack().default).lastException = e;
		FutureWork.threadPool.sendError({ promise : state.promise, error : ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e});
	}
}
FutureWork.threadPool_onComplete = function(state) {
	state.promise.complete(state.result);
}
FutureWork.threadPool_onError = function(state) {
	state.promise.error(state.error);
}


// Export

exports.default = FutureWork;