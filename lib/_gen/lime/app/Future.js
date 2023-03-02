// Class: lime.app.Future

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
function lime_utils_Log() {return require("./../../lime/utils/Log");}
function lime_app_Promise() {return require("./../../lime/app/Promise");}
function lime_app__$Future_FutureWork() {return require("./../../lime/app/_Future/FutureWork");}
function haxe_CallStack() {return require("./../../haxe/CallStack");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}

// Constructor

var Future = function(work,async) {
	if(async == null) {
		async = false;
	}
	if(work != null) {
		if(async) {
			var promise = new (lime_app_Promise().default)();
			promise.future = this;
			(lime_app__$Future_FutureWork().default).queue({ promise : promise, work : work});
		} else {
			try {
				this.value = work();
				this.isComplete = true;
			} catch( e ) {
				(haxe_CallStack().default).lastException = e;
				this.error = ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e;
				this.isError = true;
			}
		}
	}
}

// Meta

Future.__name__ = "lime.app.Future";
Future.__isInterface__ = false;
Future.prototype = {
	onComplete: function(listener) {
		if(listener != null) {
			if(this.isComplete) {
				listener(this.value);
			} else if(!this.isError) {
				if(this.__completeListeners == null) {
					this.__completeListeners = [];
				}
				this.__completeListeners.push(listener);
			}
		}
		return this;
	},
	onError: function(listener) {
		if(listener != null) {
			if(this.isError) {
				listener(this.error);
			} else if(!this.isComplete) {
				if(this.__errorListeners == null) {
					this.__errorListeners = [];
				}
				this.__errorListeners.push(listener);
			}
		}
		return this;
	},
	onProgress: function(listener) {
		if(listener != null) {
			if(this.__progressListeners == null) {
				this.__progressListeners = [];
			}
			this.__progressListeners.push(listener);
		}
		return this;
	},
	ready: function(waitTime) {
		if(waitTime == null) {
			waitTime = -1;
		}
		if(this.isComplete || this.isError) {
			return this;
		} else {
			(lime_utils_Log().default).warn("Cannot block thread in JavaScript",{ fileName : "../node_modules/lime/src/lime/app/Future.hx", lineNumber : 209, className : "lime.app.Future", methodName : "ready"});
			return this;
		}
	},
	result: function(waitTime) {
		if(waitTime == null) {
			waitTime = -1;
		}
		this.ready(waitTime);
		if(this.isComplete) {
			return this.value;
		} else {
			return null;
		}
	},
	then: function(next) {
		if(this.isComplete) {
			return next(this.value);
		} else if(this.isError) {
			var future = new Future();
			future.isError = true;
			future.error = this.error;
			return future;
		} else {
			var promise = new (lime_app_Promise().default)();
			this.onError($bind(promise,promise.error));
			this.onProgress($bind(promise,promise.progress));
			this.onComplete(function(val) {
				var future1 = next(val);
				future1.onError($bind(promise,promise.error));
				future1.onComplete($bind(promise,promise.complete));
			});
			return promise.future;
		}
	}
};
Future.prototype.__class__ = Future.prototype.constructor = $hxClasses["lime.app.Future"] = Future;

// Init



// Statics

Future.ofEvents = function(onComplete,onError,onProgress) {
	var promise = new (lime_app_Promise().default)();
	onComplete.add(function(data) {
		promise.complete(data);
	},true);
	if(onError != null) {
		onError.add(function(error) {
			promise.error(error);
		},true);
	}
	if(onProgress != null) {
		onProgress.add(function(progress,total) {
			promise.progress(progress,total);
		},true);
	}
	return promise.future;
}
Future.withError = function(error) {
	var future = new Future();
	future.isError = true;
	future.error = error;
	return future;
}
Future.withValue = function(value) {
	var future = new Future();
	future.isComplete = true;
	future.value = value;
	return future;
}


// Export

exports.default = Future;