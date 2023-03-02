// Class: Lambda

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $hxEnums = require("./hxEnums_stub").default;
var $getIterator = require("./getIterator_stub").default;

// Constructor

var Lambda = function(){}

// Meta

Lambda.__name__ = "Lambda";
Lambda.__isInterface__ = false;
Lambda.prototype = {
	
};
Lambda.prototype.__class__ = Lambda.prototype.constructor = $hxClasses["Lambda"] = Lambda;

// Init



// Statics

Lambda.array = function(it) {
	var a = [];
	var i = $getIterator(it);
	while(i.hasNext()) {
		var i1 = i.next();
		a.push(i1);
	}
	return a;
}
Lambda.map = function(it,f) {
	var _g = [];
	var x = $getIterator(it);
	while(x.hasNext()) {
		var x1 = x.next();
		_g.push(f(x1));
	}
	return _g;
}
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var _ = $getIterator(it);
		while(_.hasNext()) {
			var _1 = _.next();
			++n;
		}
	} else {
		var x = $getIterator(it);
		while(x.hasNext()) {
			var x1 = x.next();
			if(pred(x1)) {
				++n;
			}
		}
	}
	return n;
}


// Export

exports.default = Lambda;