// Class: lime.app.Promise

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $bind = require("./../../bind_stub").default;
var $import = require("./../../import_stub").default;
function lime_app_Future() {return require("./../../lime/app/Future");}

// Constructor

var Promise = function() {
	this.future = new (lime_app_Future().default)();
}

// Meta

Promise.__name__ = "lime.app.Promise";
Promise.__isInterface__ = false;
Promise.prototype = {
	complete: function(data) {
		if(!this.future.isError) {
			this.future.isComplete = true;
			this.future.value = data;
			if(this.future.__completeListeners != null) {
				var _g = 0;
				var _g1 = this.future.__completeListeners;
				while(_g < _g1.length) {
					var listener = _g1[_g];
					++_g;
					listener(data);
				}
				this.future.__completeListeners = null;
			}
		}
		return this;
	},
	completeWith: function(future) {
		future.onComplete($bind(this,this.complete));
		future.onError($bind(this,this.error));
		future.onProgress($bind(this,this.progress));
		return this;
	},
	error: function(msg) {
		if(!this.future.isComplete) {
			this.future.isError = true;
			this.future.error = msg;
			if(this.future.__errorListeners != null) {
				var _g = 0;
				var _g1 = this.future.__errorListeners;
				while(_g < _g1.length) {
					var listener = _g1[_g];
					++_g;
					listener(msg);
				}
				this.future.__errorListeners = null;
			}
		}
		return this;
	},
	progress: function(progress,total) {
		if(!this.future.isError && !this.future.isComplete) {
			if(this.future.__progressListeners != null) {
				var _g = 0;
				var _g1 = this.future.__progressListeners;
				while(_g < _g1.length) {
					var listener = _g1[_g];
					++_g;
					listener(progress,total);
				}
			}
		}
		return this;
	},
	get_isComplete: function() {
		return this.future.isComplete;
	},
	get_isError: function() {
		return this.future.isError;
	}
};
Promise.prototype.__class__ = Promise.prototype.constructor = $hxClasses["lime.app.Promise"] = Promise;

// Init

{
	var p = Promise.prototype;
	Object.defineProperties(p,{ isComplete : { get : p.get_isComplete}, isError : { get : p.get_isError}});
};

// Statics




// Export

exports.default = Promise;