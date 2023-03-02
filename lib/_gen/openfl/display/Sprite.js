// Class: openfl.display.Sprite

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_display_DisplayObjectContainer() {return require("./../../openfl/display/DisplayObjectContainer");}
function openfl_geom_Point() {return require("./../../openfl/geom/Point");}
function openfl_display_Graphics() {return require("./../../openfl/display/Graphics");}

// Constructor

var Sprite = function() {
	(openfl_display_DisplayObjectContainer().default).call(this);
	this.__buttonMode = false;
	this.useHandCursor = true;
}

// Meta

Sprite.__name__ = "openfl.display.Sprite";
Sprite.__isInterface__ = false;
Sprite.__super__ = (openfl_display_DisplayObjectContainer().default);
Sprite.prototype = $extend((openfl_display_DisplayObjectContainer().default).prototype, {
	startDrag: function(lockCenter,bounds) {
		if(lockCenter == null) {
			lockCenter = false;
		}
		if(this.stage != null) {
			this.stage.__startDrag(this,lockCenter,bounds);
		}
	},
	stopDrag: function() {
		if(this.stage != null) {
			this.stage.__stopDrag(this);
		}
	},
	__getCursor: function() {
		if(this.__buttonMode && this.useHandCursor) {
			return "button";
		} else {
			return null;
		}
	},
	__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(interactiveOnly && !this.mouseEnabled && !this.mouseChildren) {
			return false;
		}
		if(!hitObject.get_visible() || this.__isMask) {
			return this.__hitTestHitArea(x,y,shapeFlag,stack,interactiveOnly,hitObject);
		}
		if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) {
			return this.__hitTestHitArea(x,y,shapeFlag,stack,interactiveOnly,hitObject);
		}
		if(this.__scrollRect != null) {
			var point = (openfl_geom_Point().default).__pool.get();
			point.setTo(x,y);
			this.__getRenderTransform().__transformInversePoint(point);
			if(!this.__scrollRect.containsPoint(point)) {
				(openfl_geom_Point().default).__pool.release(point);
				return this.__hitTestHitArea(x,y,shapeFlag,stack,true,hitObject);
			}
			(openfl_geom_Point().default).__pool.release(point);
		}
		if((openfl_display_DisplayObjectContainer().default).prototype.__hitTest.call(this,x,y,shapeFlag,stack,interactiveOnly,hitObject)) {
			if(stack != null) {
				return interactiveOnly;
			} else {
				return true;
			}
		} else if(this.hitArea == null && this.__graphics != null && this.__graphics.__hitTest(x,y,shapeFlag,this.__getRenderTransform())) {
			if(stack != null && (!interactiveOnly || this.mouseEnabled)) {
				stack.push(hitObject);
			}
			return true;
		}
		return this.__hitTestHitArea(x,y,shapeFlag,stack,interactiveOnly,hitObject);
	},
	__hitTestHitArea: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(this.hitArea != null) {
			if(!this.hitArea.mouseEnabled) {
				this.hitArea.mouseEnabled = true;
				var hitTest = this.hitArea.__hitTest(x,y,shapeFlag,null,true,hitObject);
				this.hitArea.mouseEnabled = false;
				if(stack != null && hitTest) {
					stack[stack.length] = hitObject;
				}
				return hitTest;
			}
		}
		return false;
	},
	__hitTestMask: function(x,y) {
		if((openfl_display_DisplayObjectContainer().default).prototype.__hitTestMask.call(this,x,y)) {
			return true;
		} else if(this.__graphics != null && this.__graphics.__hitTest(x,y,true,this.__getRenderTransform())) {
			return true;
		}
		return false;
	},
	get_graphics: function() {
		if(this.__graphics == null) {
			this.__graphics = new (openfl_display_Graphics().default)(this);
		}
		return this.__graphics;
	},
	get_tabEnabled: function() {
		if(this.__tabEnabled == null) {
			return this.__buttonMode;
		} else {
			return this.__tabEnabled;
		}
	},
	get_buttonMode: function() {
		return this.__buttonMode;
	},
	set_buttonMode: function(value) {
		return this.__buttonMode = value;
	}
});
Sprite.prototype.__class__ = Sprite.prototype.constructor = $hxClasses["openfl.display.Sprite"] = Sprite;

// Init

Object.defineProperties(Sprite.prototype,{ buttonMode : { get : function () { return this.get_buttonMode (); }, set : function (v) { return this.set_buttonMode (v); }}, graphics : { get : function () { return this.get_graphics (); }}});

// Statics




// Export

exports.default = Sprite;