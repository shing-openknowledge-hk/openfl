// Class: openfl.display.DOMElement

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_display_DisplayObject() {return require("./../../openfl/display/DisplayObject");}

// Constructor

var DOMElement = function(element) {
	(openfl_display_DisplayObject().default).call(this);
	this.__element = element;
}

// Meta

DOMElement.__name__ = "openfl.display.DOMElement";
DOMElement.__isInterface__ = false;
DOMElement.__super__ = (openfl_display_DisplayObject().default);
DOMElement.prototype = $extend((openfl_display_DisplayObject().default).prototype, {
	__renderDOM: function(renderer) {
		if(this.stage != null && this.__worldVisible && this.__renderable) {
			if(!this.__active) {
				renderer.__initializeElement(this,this.__element);
				this.__active = true;
			}
			renderer.__updateClip(this);
			renderer.__applyStyle(this,true,true,true);
		} else if(this.__active) {
			renderer.element.removeChild(this.__element);
			this.__active = false;
		}
		(openfl_display_DisplayObject().default).prototype.__renderDOM.call(this,renderer);
	}
});
DOMElement.prototype.__class__ = DOMElement.prototype.constructor = $hxClasses["openfl.display.DOMElement"] = DOMElement;

// Init



// Statics


DOMElement.__meta__ = { fields : { __element : { SuppressWarnings : ["checkstyle:Dynamic"]}, _ : { SuppressWarnings : ["checkstyle:Dynamic"]}}}

// Export

exports.default = DOMElement;