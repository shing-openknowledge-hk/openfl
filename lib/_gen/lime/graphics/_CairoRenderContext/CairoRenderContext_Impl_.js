// Class: lime.graphics._CairoRenderContext.CairoRenderContext_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var CairoRenderContext_Impl_ = function(){}

// Meta

CairoRenderContext_Impl_.__name__ = "lime.graphics._CairoRenderContext.CairoRenderContext_Impl_";
CairoRenderContext_Impl_.__isInterface__ = false;
CairoRenderContext_Impl_.prototype = {
	
};
CairoRenderContext_Impl_.prototype.__class__ = CairoRenderContext_Impl_.prototype.constructor = $hxClasses["lime.graphics._CairoRenderContext.CairoRenderContext_Impl_"] = CairoRenderContext_Impl_;

// Init



// Statics

CairoRenderContext_Impl_.fromRenderContext = function(context) {
	return context.cairo;
}


// Export

exports.default = CairoRenderContext_Impl_;