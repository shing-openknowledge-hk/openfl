// Class: openfl.display.InteractiveObject

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_display_DisplayObject() {return require("./../../openfl/display/DisplayObject");}
function openfl__$internal_Lib() {return require("./../../openfl/_internal/Lib");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function openfl_errors_RangeError() {return require("./../../openfl/errors/RangeError");}

// Constructor

var InteractiveObject = function() {
	(openfl_display_DisplayObject().default).call(this);
	this.doubleClickEnabled = false;
	this.mouseEnabled = true;
	this.needsSoftKeyboard = false;
	this.__tabEnabled = null;
	this.__tabIndex = -1;
}

// Meta

InteractiveObject.__name__ = "openfl.display.InteractiveObject";
InteractiveObject.__isInterface__ = false;
InteractiveObject.__super__ = (openfl_display_DisplayObject().default);
InteractiveObject.prototype = $extend((openfl_display_DisplayObject().default).prototype, {
	requestSoftKeyboard: function() {
		(openfl__$internal_Lib().default).notImplemented({ fileName : "../src/openfl/display/InteractiveObject.hx", lineNumber : 1251, className : "openfl.display.InteractiveObject", methodName : "requestSoftKeyboard"});
		return false;
	},
	__allowMouseFocus: function() {
		return this.get_tabEnabled();
	},
	__getInteractive: function(stack) {
		if(stack != null) {
			stack.push(this);
			if(this.parent != null) {
				this.parent.__getInteractive(stack);
			}
		}
		return true;
	},
	__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(!hitObject.get_visible() || this.__isMask || interactiveOnly && !this.mouseEnabled) {
			return false;
		}
		return (openfl_display_DisplayObject().default).prototype.__hitTest.call(this,x,y,shapeFlag,stack,interactiveOnly,hitObject);
	},
	__tabTest: function(stack) {
		if(this.get_tabEnabled()) {
			stack.push(this);
		}
	},
	get_tabEnabled: function() {
		if(this.__tabEnabled == true) {
			return true;
		} else {
			return false;
		}
	},
	set_tabEnabled: function(value) {
		if(this.__tabEnabled != value) {
			this.__tabEnabled = value;
			this.dispatchEvent(new (openfl_events_Event().default)("tabEnabledChange",true,false));
		}
		return this.__tabEnabled;
	},
	get_tabIndex: function() {
		return this.__tabIndex;
	},
	set_tabIndex: function(value) {
		if(this.__tabIndex != value) {
			if(value < -1) {
				throw new (js__$Boot_HaxeError().default)(new (openfl_errors_RangeError().default)("Parameter tabIndex must be a non-negative number; got " + value));
			}
			this.__tabIndex = value;
			this.dispatchEvent(new (openfl_events_Event().default)("tabIndexChange",true,false));
		}
		return this.__tabIndex;
	}
});
InteractiveObject.prototype.__class__ = InteractiveObject.prototype.constructor = $hxClasses["openfl.display.InteractiveObject"] = InteractiveObject;

// Init

Object.defineProperties(InteractiveObject.prototype,{ tabEnabled : { get : function () { return this.get_tabEnabled (); }, set : function (v) { return this.set_tabEnabled (v); }}, tabIndex : { get : function () { return this.get_tabIndex (); }, set : function (v) { return this.set_tabIndex (v); }}});

// Statics




// Export

exports.default = InteractiveObject;