// Class: openfl._internal.renderer._DrawCommandReader.BeginBitmapFillView_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;

// Constructor

var BeginBitmapFillView_Impl_ = function(){}

// Meta

BeginBitmapFillView_Impl_.__name__ = "openfl._internal.renderer._DrawCommandReader.BeginBitmapFillView_Impl_";
BeginBitmapFillView_Impl_.__isInterface__ = false;
BeginBitmapFillView_Impl_.prototype = {
	
};
BeginBitmapFillView_Impl_.prototype.__class__ = BeginBitmapFillView_Impl_.prototype.constructor = $hxClasses["openfl._internal.renderer._DrawCommandReader.BeginBitmapFillView_Impl_"] = BeginBitmapFillView_Impl_;

// Init



// Statics

BeginBitmapFillView_Impl_._new = function(d) {
	var this1 = d;
	return this1;
}
BeginBitmapFillView_Impl_.get_bitmap = function(this1) {
	return this1.obj(0);
}
BeginBitmapFillView_Impl_.get_matrix = function(this1) {
	return this1.obj(1);
}
BeginBitmapFillView_Impl_.get_repeat = function(this1) {
	return this1.bool(0);
}
BeginBitmapFillView_Impl_.get_smooth = function(this1) {
	return this1.bool(1);
}


// Export

exports.default = BeginBitmapFillView_Impl_;