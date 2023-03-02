// Class: openfl._internal.renderer.flash.FlashRenderer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function openfl_utils__$Dictionary_Dictionary_$Impl_$() {return require("./../../../../openfl/utils/_Dictionary/Dictionary_Impl_");}
function openfl_Lib() {return require("./../../../../openfl/Lib");}
function Reflect() {return require("./../../../../Reflect");}
function HxOverrides() {return require("./../../../../HxOverrides");}

// Constructor

var FlashRenderer = function(){}

// Meta

FlashRenderer.__name__ = "openfl._internal.renderer.flash.FlashRenderer";
FlashRenderer.__isInterface__ = false;
FlashRenderer.prototype = {
	
};
FlashRenderer.prototype.__class__ = FlashRenderer.prototype.constructor = $hxClasses["openfl._internal.renderer.flash.FlashRenderer"] = FlashRenderer;

// Init



// Statics

FlashRenderer.register = function(renderObject) {
	if(FlashRenderer.instances == null) {
		FlashRenderer.instances = (openfl_utils__$Dictionary_Dictionary_$Impl_$().default)._new(true);
		(openfl_Lib().default).get_current().stage.addEventListener("enterFrame",FlashRenderer.render,false,-2147483648);
	}
	(Reflect().default).setField(FlashRenderer.instances,renderObject,true);
}
FlashRenderer.render = function(_) {
	var fields = (Reflect().default).fields(FlashRenderer.instances);
	var instance = fields != null ? (HxOverrides().default).iter(fields) : null;
	while(instance.hasNext()) {
		var instance1 = instance.next();
		instance1.__renderFlash();
	}
}
FlashRenderer.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = FlashRenderer;