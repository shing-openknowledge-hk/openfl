// Class: openfl._internal.renderer._DrawCommandReader.DrawTrianglesView_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;

// Constructor

var DrawTrianglesView_Impl_ = function(){}

// Meta

DrawTrianglesView_Impl_.__name__ = "openfl._internal.renderer._DrawCommandReader.DrawTrianglesView_Impl_";
DrawTrianglesView_Impl_.__isInterface__ = false;
DrawTrianglesView_Impl_.prototype = {
	
};
DrawTrianglesView_Impl_.prototype.__class__ = DrawTrianglesView_Impl_.prototype.constructor = $hxClasses["openfl._internal.renderer._DrawCommandReader.DrawTrianglesView_Impl_"] = DrawTrianglesView_Impl_;

// Init



// Statics

DrawTrianglesView_Impl_._new = function(d) {
	var this1 = d;
	return this1;
}
DrawTrianglesView_Impl_.get_vertices = function(this1) {
	return this1.obj(0);
}
DrawTrianglesView_Impl_.get_indices = function(this1) {
	return this1.obj(1);
}
DrawTrianglesView_Impl_.get_uvtData = function(this1) {
	return this1.obj(2);
}
DrawTrianglesView_Impl_.get_culling = function(this1) {
	return this1.obj(3);
}


// Export

exports.default = DrawTrianglesView_Impl_;