// Class: openfl.display.SimpleButton

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_display_InteractiveObject() {return require("./../../openfl/display/InteractiveObject");}
function openfl_geom_Matrix() {return require("./../../openfl/geom/Matrix");}
function openfl_display_DisplayObject() {return require("./../../openfl/display/DisplayObject");}
function openfl__$Vector_VectorIterator() {return require("./../../openfl/_Vector/VectorIterator");}
function openfl_media_SoundTransform() {return require("./../../openfl/media/SoundTransform");}
function openfl__$Vector_Vector_$Impl_$() {return require("./../../openfl/_Vector/Vector_Impl_");}
function openfl_VectorData() {return require("./../../openfl/VectorData");}

// Constructor

var SimpleButton = function(upState,overState,downState,hitTestState) {
	(openfl_display_InteractiveObject().default).call(this);
	this.enabled = true;
	this.trackAsMenu = false;
	this.useHandCursor = true;
	this.__upState = upState != null ? upState : new (openfl_display_DisplayObject().default)();
	this.__overState = overState;
	this.__downState = downState;
	this.set_hitTestState(hitTestState != null ? hitTestState : new (openfl_display_DisplayObject().default)());
	this.addEventListener("mouseDown",$bind(this,this.__this_onMouseDown));
	this.addEventListener("mouseOut",$bind(this,this.__this_onMouseOut));
	this.addEventListener("mouseOver",$bind(this,this.__this_onMouseOver));
	this.addEventListener("mouseUp",$bind(this,this.__this_onMouseUp));
	this.__tabEnabled = true;
	this.set___currentState(this.__upState);
	if(SimpleButton.__initSymbol != null) {
		var swf = SimpleButton.__initSWF;
		this.__symbol = SimpleButton.__initSymbol;
		SimpleButton.__initSWF = null;
		SimpleButton.__initSymbol = null;
		this.__fromSymbol(swf,this.__symbol);
	}
}

// Meta

SimpleButton.__name__ = "openfl.display.SimpleButton";
SimpleButton.__isInterface__ = false;
SimpleButton.__super__ = (openfl_display_InteractiveObject().default);
SimpleButton.prototype = $extend((openfl_display_InteractiveObject().default).prototype, {
	__fromSymbol: function(swf,symbol) {
		this.__symbol = symbol;
		if(symbol.downState != null) {
			this.set_downState(symbol.downState.__createObject(swf));
		}
		if(symbol.hitState != null) {
			this.set_hitTestState(symbol.hitState.__createObject(swf));
		}
		if(symbol.overState != null) {
			this.set_overState(symbol.overState.__createObject(swf));
		}
		if(symbol.upState != null) {
			this.set_upState(symbol.upState.__createObject(swf));
		}
	},
	__getBounds: function(rect,matrix) {
		(openfl_display_InteractiveObject().default).prototype.__getBounds.call(this,rect,matrix);
		var childWorldTransform = (openfl_geom_Matrix().default).__pool.get();
		(openfl_display_DisplayObject().default).__calculateAbsoluteTransform(this.__currentState.__transform,matrix,childWorldTransform);
		this.__currentState.__getBounds(rect,childWorldTransform);
		(openfl_geom_Matrix().default).__pool.release(childWorldTransform);
	},
	__getRenderBounds: function(rect,matrix) {
		if(this.__scrollRect != null) {
			(openfl_display_InteractiveObject().default).prototype.__getRenderBounds.call(this,rect,matrix);
			return;
		} else {
			(openfl_display_InteractiveObject().default).prototype.__getBounds.call(this,rect,matrix);
		}
		var childWorldTransform = (openfl_geom_Matrix().default).__pool.get();
		(openfl_display_DisplayObject().default).__calculateAbsoluteTransform(this.__currentState.__transform,matrix,childWorldTransform);
		this.__currentState.__getRenderBounds(rect,childWorldTransform);
		(openfl_geom_Matrix().default).__pool.release(childWorldTransform);
	},
	__getCursor: function() {
		if(this.useHandCursor && !this.__ignoreEvent && this.enabled) {
			return "button";
		} else {
			return null;
		}
	},
	__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		var hitTest = false;
		if(this.get_hitTestState() != null) {
			if(this.get_hitTestState().__hitTest(x,y,shapeFlag,stack,interactiveOnly,hitObject)) {
				if(stack != null) {
					if(stack.length == 0) {
						stack[0] = hitObject;
					} else {
						stack[stack.length - 1] = hitObject;
					}
				}
				hitTest = !interactiveOnly || this.mouseEnabled;
			}
		} else if(this.__currentState != null) {
			if(!hitObject.get_visible() || this.__isMask || interactiveOnly && !this.mouseEnabled) {
				return false;
			}
			if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) {
				return false;
			}
			if(this.__currentState.__hitTest(x,y,shapeFlag,stack,interactiveOnly,hitObject)) {
				hitTest = interactiveOnly;
			}
		}
		if(stack != null) {
			while(stack.length > 1 && stack[stack.length - 1] == stack[stack.length - 2]) stack.pop();
		}
		return hitTest;
	},
	__hitTestMask: function(x,y) {
		var hitTest = false;
		if(this.__currentState.__hitTestMask(x,y)) {
			hitTest = true;
		}
		return hitTest;
	},
	__renderCairo: function(renderer) {
		if(!this.__renderable || this.__worldAlpha <= 0 || this.__currentState == null) {
			return;
		}
		renderer.__pushMaskObject(this);
		this.__currentState.__renderCairo(renderer);
		renderer.__popMaskObject(this);
		this.__renderEvent(renderer);
	},
	__renderCairoMask: function(renderer) {
		this.__currentState.__renderCairoMask(renderer);
	},
	__renderCanvas: function(renderer) {
		if(!this.__renderable || this.__worldAlpha <= 0 || this.__currentState == null) {
			return;
		}
		renderer.__pushMaskObject(this);
		this.__currentState.__renderCanvas(renderer);
		renderer.__popMaskObject(this);
		this.__renderEvent(renderer);
	},
	__renderCanvasMask: function(renderer) {
		this.__currentState.__renderCanvasMask(renderer);
	},
	__renderDOM: function(renderer) {
		renderer.__pushMaskObject(this);
		var previousState = new (openfl__$Vector_VectorIterator().default)(this.__previousStates);
		while(previousState.hasNext()) {
			var previousState1 = previousState.next();
			previousState1.__renderDOM(renderer);
		}
		this.__previousStates.set_length(0);
		if(this.__currentState != null) {
			if(this.__currentState.stage != this.stage) {
				this.__currentState.__setStageReference(this.stage);
			}
			this.__currentState.__renderDOM(renderer);
		}
		renderer.__popMaskObject(this);
		this.__renderEvent(renderer);
	},
	__renderGL: function(renderer) {
		if(!this.__renderable || this.__worldAlpha <= 0 || this.__currentState == null) {
			return;
		}
		renderer.__pushMaskObject(this);
		this.__currentState.__renderGL(renderer);
		renderer.__popMaskObject(this);
		this.__renderEvent(renderer);
	},
	__renderGLMask: function(renderer) {
		if(this.__currentState == null) {
			return;
		}
		this.__currentState.__renderGLMask(renderer);
	},
	__setStageReference: function(stage) {
		(openfl_display_InteractiveObject().default).prototype.__setStageReference.call(this,stage);
		if(this.__currentState != null) {
			this.__currentState.__setStageReference(stage);
		}
		if(this.get_hitTestState() != null && this.get_hitTestState() != this.__currentState) {
			this.get_hitTestState().__setStageReference(stage);
		}
	},
	__setTransformDirty: function() {
		(openfl_display_InteractiveObject().default).prototype.__setTransformDirty.call(this);
		if(this.__currentState != null) {
			this.__currentState.__setTransformDirty();
		}
		if(this.get_hitTestState() != null && this.get_hitTestState() != this.__currentState) {
			this.get_hitTestState().__setTransformDirty();
		}
	},
	__update: function(transformOnly,updateChildren) {
		(openfl_display_InteractiveObject().default).prototype.__update.call(this,transformOnly,updateChildren);
		if(updateChildren) {
			if(this.__currentState != null) {
				this.__currentState.__update(transformOnly,true);
			}
			if(this.get_hitTestState() != null && this.get_hitTestState() != this.__currentState) {
				this.get_hitTestState().__update(transformOnly,true);
			}
		}
	},
	__updateTransforms: function(overrideTransform) {
		(openfl_display_InteractiveObject().default).prototype.__updateTransforms.call(this,overrideTransform);
		if(this.__currentState != null) {
			this.__currentState.__updateTransforms();
		}
		if(this.get_hitTestState() != null && this.get_hitTestState() != this.__currentState) {
			this.get_hitTestState().__updateTransforms();
		}
	},
	get_downState: function() {
		return this.__downState;
	},
	set_downState: function(downState) {
		if(this.__downState != null && this.__currentState == this.__downState) {
			this.set___currentState(this.__downState);
		}
		return this.__downState = downState;
	},
	get_hitTestState: function() {
		return this.__hitTestState;
	},
	set_hitTestState: function(hitTestState) {
		if(this.__hitTestState != null && this.__hitTestState != hitTestState) {
			if(this.__hitTestState != this.get_downState() && this.__hitTestState != this.get_upState() && this.__hitTestState != this.get_overState()) {
				this.__hitTestState.__renderParent = null;
			}
		}
		if(hitTestState != null) {
			hitTestState.__renderParent = this;
			hitTestState.__setRenderDirty();
		}
		return this.__hitTestState = hitTestState;
	},
	get_overState: function() {
		return this.__overState;
	},
	set_overState: function(overState) {
		if(this.__overState != null && this.__currentState == this.__overState) {
			this.set___currentState(overState);
		}
		return this.__overState = overState;
	},
	get_soundTransform: function() {
		if(this.__soundTransform == null) {
			this.__soundTransform = new (openfl_media_SoundTransform().default)();
		}
		return new (openfl_media_SoundTransform().default)(this.__soundTransform.volume,this.__soundTransform.pan);
	},
	set_soundTransform: function(value) {
		this.__soundTransform = new (openfl_media_SoundTransform().default)(value.volume,value.pan);
		return value;
	},
	get_upState: function() {
		return this.__upState;
	},
	set_upState: function(upState) {
		if(this.__upState != null && this.__currentState == this.__upState) {
			this.set___currentState(upState);
		}
		return this.__upState = upState;
	},
	set___currentState: function(value) {
		if(this.__currentState != null && this.__currentState != this.get_hitTestState()) {
			this.__currentState.__renderParent = null;
		}
		if(value != null && value.parent != null) {
			value.parent.removeChild(value);
		}
		if((openfl_display_DisplayObject().default).__supportDOM && this.__previousStates == null) {
			this.__previousStates = (openfl__$Vector_Vector_$Impl_$().default)._new();
		}
		if(value != this.__currentState) {
			if((openfl_display_DisplayObject().default).__supportDOM) {
				if(this.__currentState != null) {
					this.__currentState.__setStageReference(null);
					(openfl__$Vector_Vector_$Impl_$().default).push(this.__previousStates,this.__currentState);
				}
				var this1 = this.__previousStates;
				var index = Array.prototype.indexOf.call(this1,value,0);
				if(index > -1) {
					var this2 = this.__previousStates;
					(openfl_VectorData().default).ofArray(Array.prototype.splice.call(this2,index,1));
				}
			}
			if(value != null) {
				value.__renderParent = this;
				value.__setRenderDirty();
			}
			this.__setRenderDirty();
		}
		this.__currentState = value;
		return value;
	},
	__this_onMouseDown: function(event) {
		if(this.enabled) {
			this.set___currentState(this.get_downState());
		}
	},
	__this_onMouseOut: function(event) {
		this.__ignoreEvent = false;
		if(this.get_upState() != this.__currentState) {
			this.set___currentState(this.get_upState());
		}
	},
	__this_onMouseOver: function(event) {
		if(event.buttonDown) {
			this.__ignoreEvent = true;
		}
		if(this.get_overState() != this.__currentState && this.get_overState() != null && !this.__ignoreEvent && this.enabled) {
			this.set___currentState(this.get_overState());
		}
	},
	__this_onMouseUp: function(event) {
		this.__ignoreEvent = false;
		if(this.enabled && this.get_overState() != null) {
			this.set___currentState(this.get_overState());
		} else {
			this.set___currentState(this.get_upState());
		}
	}
});
SimpleButton.prototype.__class__ = SimpleButton.prototype.constructor = $hxClasses["openfl.display.SimpleButton"] = SimpleButton;

// Init

Object.defineProperties(SimpleButton.prototype,{ downState : { get : function () { return this.get_downState (); }, set : function (v) { return this.set_downState (v); }}, hitTestState : { get : function () { return this.get_hitTestState (); }, set : function (v) { return this.set_hitTestState (v); }}, overState : { get : function () { return this.get_overState (); }, set : function (v) { return this.set_overState (v); }}, soundTransform : { get : function () { return this.get_soundTransform (); }, set : function (v) { return this.set_soundTransform (v); }}, upState : { get : function () { return this.get_upState (); }, set : function (v) { return this.set_upState (v); }}});

// Statics




// Export

exports.default = SimpleButton;