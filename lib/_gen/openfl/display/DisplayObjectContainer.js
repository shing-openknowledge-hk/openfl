// Class: openfl.display.DisplayObjectContainer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_display_InteractiveObject() {return require("./../../openfl/display/InteractiveObject");}
function openfl_errors_TypeError() {return require("./../../openfl/errors/TypeError");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function openfl_errors_ArgumentError() {return require("./../../openfl/errors/ArgumentError");}
function HxOverrides() {return require("./../../HxOverrides");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function openfl__$Vector_Vector_$Impl_$() {return require("./../../openfl/_Vector/Vector_Impl_");}
function openfl_errors_RangeError() {return require("./../../openfl/errors/RangeError");}
function openfl__$Vector_VectorIterator() {return require("./../../openfl/_Vector/VectorIterator");}
function openfl_geom_Matrix() {return require("./../../openfl/geom/Matrix");}
function openfl_display_DisplayObject() {return require("./../../openfl/display/DisplayObject");}
function openfl_geom_Point() {return require("./../../openfl/geom/Point");}
function openfl__$internal_renderer_canvas_CanvasGraphics() {return require("./../../openfl/_internal/renderer/canvas/CanvasGraphics");}
function openfl__$internal_renderer_context3D_Context3DShape() {return require("./../../openfl/_internal/renderer/context3D/Context3DShape");}

// Constructor

var DisplayObjectContainer = function() {
	(openfl_display_InteractiveObject().default).call(this);
	this.mouseChildren = true;
	this.__tabChildren = true;
	this.__children = [];
	this.__removedChildren = (openfl__$Vector_Vector_$Impl_$().default)._new();
}

// Meta

DisplayObjectContainer.__name__ = "openfl.display.DisplayObjectContainer";
DisplayObjectContainer.__isInterface__ = false;
DisplayObjectContainer.__super__ = (openfl_display_InteractiveObject().default);
DisplayObjectContainer.prototype = $extend((openfl_display_InteractiveObject().default).prototype, {
	addChild: function(child) {
		return this.addChildAt(child,this.get_numChildren());
	},
	addChildAt: function(child,index) {
		if(child == null) {
			var error = new (openfl_errors_TypeError().default)("Error #2007: Parameter child must be non-null.");
			error.errorID = 2007;
			throw new (js__$Boot_HaxeError().default)(error);
		} else if(child.stage == child) {
			var error1 = new (openfl_errors_ArgumentError().default)("Error #3783: A Stage object cannot be added as the child of another object.");
			error1.errorID = 3783;
			throw new (js__$Boot_HaxeError().default)(error1);
		}
		if(index > this.__children.length || index < 0) {
			throw new (js__$Boot_HaxeError().default)("Invalid index position " + index);
		}
		if(child.parent == this) {
			if(this.__children[index] != child) {
				(HxOverrides().default).remove(this.__children,child);
				this.__children.splice(index,0,child);
				this.__setRenderDirty();
			}
		} else {
			if(child.parent != null) {
				child.parent.removeChild(child);
			}
			this.__children.splice(index,0,child);
			child.parent = this;
			var addedToStage = this.stage != null && child.stage == null;
			if(addedToStage) {
				this.__setStageReference(this.stage);
			}
			child.__setTransformDirty();
			child.__setRenderDirty();
			this.__setRenderDirty();
			var event = (openfl_events_Event().default).__pool.get();
			event.type = "added";
			event.bubbles = true;
			event.target = child;
			child.__dispatchWithCapture(event);
			(openfl_events_Event().default).__pool.release(event);
			if(addedToStage) {
				event = new (openfl_events_Event().default)("addedToStage",false,false);
				child.__dispatchWithCapture(event);
				child.__dispatchChildren(event);
			}
		}
		return child;
	},
	areInaccessibleObjectsUnderPoint: function(point) {
		return false;
	},
	contains: function(child) {
		while(child != this && child != null) child = child.parent;
		return child == this;
	},
	getChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) {
			return this.__children[index];
		}
		return null;
	},
	getChildByName: function(name) {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_name() == name) {
				return child;
			}
		}
		return null;
	},
	getChildIndex: function(child) {
		var _g = 0;
		var _g1 = this.__children.length;
		while(_g < _g1) {
			var i = _g++;
			if(this.__children[i] == child) {
				return i;
			}
		}
		return -1;
	},
	getObjectsUnderPoint: function(point) {
		var stack = [];
		this.__hitTest(point.x,point.y,false,stack,false,this);
		stack.reverse();
		return stack;
	},
	removeChild: function(child) {
		if(child != null && child.parent == this) {
			child.__setTransformDirty();
			child.__setRenderDirty();
			this.__setRenderDirty();
			var event = new (openfl_events_Event().default)("removed",true);
			child.__dispatchWithCapture(event);
			if(this.stage != null) {
				if(child.stage != null && this.stage.get_focus() == child) {
					this.stage.set_focus(null);
				}
				var event1 = new (openfl_events_Event().default)("removedFromStage",false,false);
				child.__dispatchWithCapture(event1);
				child.__dispatchChildren(event1);
				child.__setStageReference(null);
			}
			child.parent = null;
			(HxOverrides().default).remove(this.__children,child);
			(openfl__$Vector_Vector_$Impl_$().default).push(this.__removedChildren,child);
			child.__setTransformDirty();
		}
		return child;
	},
	removeChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) {
			return this.removeChild(this.__children[index]);
		}
		return null;
	},
	removeChildren: function(beginIndex,endIndex) {
		if(endIndex == null) {
			endIndex = 2147483647;
		}
		if(beginIndex == null) {
			beginIndex = 0;
		}
		if(endIndex == 2147483647) {
			endIndex = this.__children.length - 1;
			if(endIndex < 0) {
				return;
			}
		}
		if(beginIndex > this.__children.length - 1) {
			return;
		} else if(endIndex < beginIndex || beginIndex < 0 || endIndex > this.__children.length) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_RangeError().default)("The supplied index is out of bounds."));
		}
		var numRemovals = endIndex - beginIndex;
		while(numRemovals >= 0) {
			this.removeChildAt(beginIndex);
			--numRemovals;
		}
	},
	resolve: function(fieldName) {
		if(this.__children == null) {
			return null;
		}
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_name() == fieldName) {
				return child;
			}
		}
		return null;
	},
	setChildIndex: function(child,index) {
		if(index >= 0 && index <= this.__children.length && child.parent == this) {
			(HxOverrides().default).remove(this.__children,child);
			this.__children.splice(index,0,child);
		}
	},
	stopAllMovieClips: function() {
		this.__stopAllMovieClips();
	},
	swapChildren: function(child1,child2) {
		if(child1.parent == this && child2.parent == this) {
			var index1 = this.__children.indexOf(child1);
			var index2 = this.__children.indexOf(child2);
			this.__children[index1] = child2;
			this.__children[index2] = child1;
			this.__setRenderDirty();
		}
	},
	swapChildrenAt: function(index1,index2) {
		var swap = this.__children[index1];
		this.__children[index1] = this.__children[index2];
		this.__children[index2] = swap;
		swap = null;
		this.__setRenderDirty();
	},
	__cleanup: function() {
		(openfl_display_InteractiveObject().default).prototype.__cleanup.call(this);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__cleanup();
		}
		this.__cleanupRemovedChildren();
	},
	__cleanupRemovedChildren: function() {
		var orphan = new (openfl__$Vector_VectorIterator().default)(this.__removedChildren);
		while(orphan.hasNext()) {
			var orphan1 = orphan.next();
			if(orphan1.stage == null) {
				orphan1.__cleanup();
			}
		}
		this.__removedChildren.set_length(0);
	},
	__dispatchChildren: function(event) {
		if(this.__children != null) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				event.target = child;
				if(!child.__dispatchWithCapture(event)) {
					break;
				}
				child.__dispatchChildren(event);
			}
		}
	},
	__enterFrame: function(deltaTime) {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__enterFrame(deltaTime);
		}
	},
	__getBounds: function(rect,matrix) {
		(openfl_display_InteractiveObject().default).prototype.__getBounds.call(this,rect,matrix);
		if(this.__children.length == 0) {
			return;
		}
		var childWorldTransform = (openfl_geom_Matrix().default).__pool.get();
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.__scaleX == 0 || child.__scaleY == 0) {
				continue;
			}
			(openfl_display_DisplayObject().default).__calculateAbsoluteTransform(child.__transform,matrix,childWorldTransform);
			child.__getBounds(rect,childWorldTransform);
		}
		(openfl_geom_Matrix().default).__pool.release(childWorldTransform);
	},
	__getFilterBounds: function(rect,matrix) {
		(openfl_display_InteractiveObject().default).prototype.__getFilterBounds.call(this,rect,matrix);
		if(this.__scrollRect != null) {
			return;
		}
		if(this.__children.length == 0) {
			return;
		}
		var childWorldTransform = (openfl_geom_Matrix().default).__pool.get();
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.__scaleX == 0 || child.__scaleY == 0 || child.__isMask) {
				continue;
			}
			(openfl_display_DisplayObject().default).__calculateAbsoluteTransform(child.__transform,matrix,childWorldTransform);
			child.__getFilterBounds(rect,childWorldTransform);
		}
		(openfl_geom_Matrix().default).__pool.release(childWorldTransform);
	},
	__getRenderBounds: function(rect,matrix) {
		if(this.__scrollRect != null) {
			(openfl_display_InteractiveObject().default).prototype.__getRenderBounds.call(this,rect,matrix);
			return;
		} else {
			(openfl_display_InteractiveObject().default).prototype.__getBounds.call(this,rect,matrix);
		}
		if(this.__children.length == 0) {
			return;
		}
		var childWorldTransform = (openfl_geom_Matrix().default).__pool.get();
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.__scaleX == 0 || child.__scaleY == 0 || child.__isMask) {
				continue;
			}
			(openfl_display_DisplayObject().default).__calculateAbsoluteTransform(child.__transform,matrix,childWorldTransform);
			child.__getRenderBounds(rect,childWorldTransform);
		}
		(openfl_geom_Matrix().default).__pool.release(childWorldTransform);
	},
	__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(!hitObject.get_visible() || this.__isMask || interactiveOnly && !this.mouseEnabled && !this.mouseChildren) {
			return false;
		}
		if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) {
			return false;
		}
		if(this.__scrollRect != null) {
			var point = (openfl_geom_Point().default).__pool.get();
			point.setTo(x,y);
			this.__getRenderTransform().__transformInversePoint(point);
			if(!this.__scrollRect.containsPoint(point)) {
				(openfl_geom_Point().default).__pool.release(point);
				return false;
			}
			(openfl_geom_Point().default).__pool.release(point);
		}
		var i = this.__children.length;
		if(interactiveOnly) {
			if(stack == null || !this.mouseChildren) {
				while(--i >= 0) if(this.__children[i].__hitTest(x,y,shapeFlag,null,true,this.__children[i])) {
					if(stack != null) {
						stack.push(hitObject);
					}
					return true;
				}
			} else if(stack != null) {
				var length = stack.length;
				var interactive = false;
				var hitTest = false;
				while(--i >= 0) {
					interactive = this.__children[i].__getInteractive(null);
					if(interactive || this.mouseEnabled && !hitTest) {
						if(this.__children[i].__hitTest(x,y,shapeFlag,stack,true,this.__children[i])) {
							hitTest = true;
							if(interactive && stack.length > length) {
								break;
							}
						}
					}
				}
				if(hitTest) {
					stack.splice(length,0,hitObject);
					return true;
				}
			}
		} else {
			var hitTest1 = false;
			while(--i >= 0) if(this.__children[i].__hitTest(x,y,shapeFlag,stack,false,this.__children[i])) {
				hitTest1 = true;
				if(stack == null) {
					break;
				}
			}
			return hitTest1;
		}
		return false;
	},
	__hitTestMask: function(x,y) {
		var i = this.__children.length;
		while(--i >= 0) if(this.__children[i].__hitTestMask(x,y)) {
			return true;
		}
		return false;
	},
	__readGraphicsData: function(graphicsData,recurse) {
		(openfl_display_InteractiveObject().default).prototype.__readGraphicsData.call(this,graphicsData,recurse);
		if(recurse) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__readGraphicsData(graphicsData,recurse);
			}
		}
	},
	__renderCairo: function(renderer) {
	},
	__renderCairoMask: function(renderer) {
	},
	__renderCanvas: function(renderer) {
		this.__cleanupRemovedChildren();
		if(!this.__renderable || this.__worldAlpha <= 0 || this.get_mask() != null && (this.get_mask().get_width() <= 0 || this.get_mask().get_height() <= 0)) {
			return;
		}
		(openfl_display_InteractiveObject().default).prototype.__renderCanvas.call(this,renderer);
		if(this.__cacheBitmap != null && !this.__isCacheBitmapRender) {
			return;
		}
		renderer.__pushMaskObject(this);
		if(renderer.__stage != null) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__renderCanvas(renderer);
				child.__renderDirty = false;
			}
			this.__renderDirty = false;
		} else {
			var _g2 = 0;
			var _g11 = this.__children;
			while(_g2 < _g11.length) {
				var child1 = _g11[_g2];
				++_g2;
				child1.__renderCanvas(renderer);
			}
		}
		renderer.__popMaskObject(this);
	},
	__renderCanvasMask: function(renderer) {
		this.__cleanupRemovedChildren();
		if(this.__graphics != null) {
			(openfl__$internal_renderer_canvas_CanvasGraphics().default).renderMask(this.__graphics,renderer);
		}
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderCanvasMask(renderer);
		}
	},
	__renderDOM: function(renderer) {
		var orphan = new (openfl__$Vector_VectorIterator().default)(this.__removedChildren);
		while(orphan.hasNext()) {
			var orphan1 = orphan.next();
			if(orphan1.stage == null) {
				orphan1.__renderDOM(renderer);
			}
		}
		this.__cleanupRemovedChildren();
		(openfl_display_InteractiveObject().default).prototype.__renderDOM.call(this,renderer);
		if(this.__cacheBitmap != null && !this.__isCacheBitmapRender) {
			return;
		}
		renderer.__pushMaskObject(this);
		if(renderer.__stage != null) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__renderDOM(renderer);
				child.__renderDirty = false;
			}
			this.__renderDirty = false;
		} else {
			var _g2 = 0;
			var _g11 = this.__children;
			while(_g2 < _g11.length) {
				var child1 = _g11[_g2];
				++_g2;
				child1.__renderDOM(renderer);
			}
		}
		renderer.__popMaskObject(this);
	},
	__renderDOMClear: function(renderer) {
		var orphan = new (openfl__$Vector_VectorIterator().default)(this.__removedChildren);
		while(orphan.hasNext()) {
			var orphan1 = orphan.next();
			if(orphan1.stage == null) {
				orphan1.__renderDOMClear(renderer);
			}
		}
		this.__cleanupRemovedChildren();
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderDOMClear(renderer);
		}
	},
	__renderGL: function(renderer) {
		this.__cleanupRemovedChildren();
		if(!this.__renderable || this.__worldAlpha <= 0) {
			return;
		}
		(openfl_display_InteractiveObject().default).prototype.__renderGL.call(this,renderer);
		if(this.__cacheBitmap != null && !this.__isCacheBitmapRender) {
			return;
		}
		if(this.__children.length > 0) {
			renderer.__pushMaskObject(this);
			if(renderer.__stage != null) {
				var _g = 0;
				var _g1 = this.__children;
				while(_g < _g1.length) {
					var child = _g1[_g];
					++_g;
					child.__renderGL(renderer);
					child.__renderDirty = false;
				}
				this.__renderDirty = false;
			} else {
				var _g2 = 0;
				var _g11 = this.__children;
				while(_g2 < _g11.length) {
					var child1 = _g11[_g2];
					++_g2;
					child1.__renderGL(renderer);
				}
			}
		}
		if(this.__children.length > 0) {
			renderer.__popMaskObject(this);
		}
	},
	__renderGLMask: function(renderer) {
		this.__cleanupRemovedChildren();
		if(this.__graphics != null) {
			(openfl__$internal_renderer_context3D_Context3DShape().default).renderMask(this,renderer);
		}
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderGLMask(renderer);
		}
	},
	__setStageReference: function(stage) {
		(openfl_display_InteractiveObject().default).prototype.__setStageReference.call(this,stage);
		if(this.__children != null) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__setStageReference(stage);
			}
		}
	},
	__setWorldTransformInvalid: function() {
		if(!this.__worldTransformInvalid) {
			this.__worldTransformInvalid = true;
			if(this.__children != null) {
				var _g = 0;
				var _g1 = this.__children;
				while(_g < _g1.length) {
					var child = _g1[_g];
					++_g;
					child.__setWorldTransformInvalid();
				}
			}
		}
	},
	__shouldCacheHardware: function(value) {
		if(value == true) {
			return true;
		}
		value = (openfl_display_InteractiveObject().default).prototype.__shouldCacheHardware.call(this,value);
		if(value == true) {
			return true;
		}
		if(this.__children != null) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				value = child.__shouldCacheHardware(value);
				if(value == true) {
					return true;
				}
			}
		}
		return value;
	},
	__stopAllMovieClips: function() {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__stopAllMovieClips();
		}
	},
	__tabTest: function(stack) {
		(openfl_display_InteractiveObject().default).prototype.__tabTest.call(this,stack);
		if(!this.get_tabChildren()) {
			return;
		}
		var interactive = false;
		var interactiveObject = null;
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			interactive = child.__getInteractive(null);
			if(interactive) {
				interactiveObject = child;
				interactiveObject.__tabTest(stack);
			}
		}
	},
	__update: function(transformOnly,updateChildren) {
		(openfl_display_InteractiveObject().default).prototype.__update.call(this,transformOnly,updateChildren);
		if(updateChildren) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__update(transformOnly,true);
			}
		}
	},
	get_numChildren: function() {
		return this.__children.length;
	},
	get_tabChildren: function() {
		return this.__tabChildren;
	},
	set_tabChildren: function(value) {
		if(this.__tabChildren != value) {
			this.__tabChildren = value;
			this.dispatchEvent(new (openfl_events_Event().default)("tabChildrenChange",true,false));
		}
		return this.__tabChildren;
	}
});
DisplayObjectContainer.prototype.__class__ = DisplayObjectContainer.prototype.constructor = $hxClasses["openfl.display.DisplayObjectContainer"] = DisplayObjectContainer;

// Init

Object.defineProperty(DisplayObjectContainer.prototype,"numChildren",{ get : function () { return this.get_numChildren (); }});

// Statics




// Export

exports.default = DisplayObjectContainer;