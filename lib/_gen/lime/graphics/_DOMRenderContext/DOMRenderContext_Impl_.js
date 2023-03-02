// Class: lime.graphics._DOMRenderContext.DOMRenderContext_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var DOMRenderContext_Impl_ = function(){}

// Meta

DOMRenderContext_Impl_.__name__ = "lime.graphics._DOMRenderContext.DOMRenderContext_Impl_";
DOMRenderContext_Impl_.__isInterface__ = false;
DOMRenderContext_Impl_.prototype = {
	
};
DOMRenderContext_Impl_.prototype.__class__ = DOMRenderContext_Impl_.prototype.constructor = $hxClasses["lime.graphics._DOMRenderContext.DOMRenderContext_Impl_"] = DOMRenderContext_Impl_;

// Init



// Statics

DOMRenderContext_Impl_.fromRenderContext = function(context) {
	return context.dom;
}


// Export

exports.default = DOMRenderContext_Impl_;