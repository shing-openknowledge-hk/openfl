// Class: openfl.display.DisplayObject

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_display_IBitmapDrawable() {return require("./../../openfl/display/IBitmapDrawable");}
function openfl_events_EventDispatcher() {return require("./../../openfl/events/EventDispatcher");}
function openfl_events_RenderEvent() {return require("./../../openfl/events/RenderEvent");}
function openfl_geom_ColorTransform() {return require("./../../openfl/geom/ColorTransform");}
function openfl_geom_Matrix() {return require("./../../openfl/geom/Matrix");}
function openfl_events_MouseEvent() {return require("./../../openfl/events/MouseEvent");}
function openfl_events_TouchEvent() {return require("./../../openfl/events/TouchEvent");}
function openfl_geom_Rectangle() {return require("./../../openfl/geom/Rectangle");}
function openfl_geom_Point() {return require("./../../openfl/geom/Point");}
function HxOverrides() {return require("./../../HxOverrides");}
function openfl__$Vector_Vector_$Impl_$() {return require("./../../openfl/_Vector/Vector_Impl_");}
function openfl__$internal_renderer_canvas_CanvasBitmap() {return require("./../../openfl/_internal/renderer/canvas/CanvasBitmap");}
function openfl__$internal_renderer_canvas_CanvasDisplayObject() {return require("./../../openfl/_internal/renderer/canvas/CanvasDisplayObject");}
function openfl__$internal_renderer_canvas_CanvasGraphics() {return require("./../../openfl/_internal/renderer/canvas/CanvasGraphics");}
function openfl__$internal_renderer_dom_DOMBitmap() {return require("./../../openfl/_internal/renderer/dom/DOMBitmap");}
function openfl__$internal_renderer_dom_DOMDisplayObject() {return require("./../../openfl/_internal/renderer/dom/DOMDisplayObject");}
function openfl__$internal_renderer_context3D_Context3DBitmap() {return require("./../../openfl/_internal/renderer/context3D/Context3DBitmap");}
function openfl__$internal_renderer_context3D_Context3DDisplayObject() {return require("./../../openfl/_internal/renderer/context3D/Context3DDisplayObject");}
function openfl__$internal_renderer_context3D_Context3DShape() {return require("./../../openfl/_internal/renderer/context3D/Context3DShape");}
function openfl__$internal_renderer_context3D_Context3DGraphics() {return require("./../../openfl/_internal/renderer/context3D/Context3DGraphics");}
function openfl_display_BitmapData() {return require("./../../openfl/display/BitmapData");}
function openfl_display_Bitmap() {return require("./../../openfl/display/Bitmap");}
function openfl_display_OpenGLRenderer() {return require("./../../openfl/display/OpenGLRenderer");}
function js_Boot() {return require("./../../js/Boot");}
function lime__$internal_graphics_ImageCanvasUtil() {return require("./../../lime/_internal/graphics/ImageCanvasUtil");}
function openfl_display_CanvasRenderer() {return require("./../../openfl/display/CanvasRenderer");}
function openfl__$internal_Lib() {return require("./../../openfl/_internal/Lib");}
function openfl_geom_Transform() {return require("./../../openfl/geom/Transform");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function openfl_errors_TypeError() {return require("./../../openfl/errors/TypeError");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function lime_utils_ObjectPool() {return require("./../../lime/utils/ObjectPool");}

// Constructor

var DisplayObject = function() {
	(openfl_events_EventDispatcher().default).call(this);
	this.__alpha = 1;
	this.__blendMode = "normal";
	this.__cacheAsBitmap = false;
	this.__transform = new (openfl_geom_Matrix().default)();
	this.__visible = true;
	this.__rotation = 0;
	this.__rotationSine = 0;
	this.__rotationCosine = 1;
	this.__scaleX = 1;
	this.__scaleY = 1;
	this.__worldAlpha = 1;
	this.__worldBlendMode = "normal";
	this.__worldTransform = new (openfl_geom_Matrix().default)();
	this.__worldColorTransform = new (openfl_geom_ColorTransform().default)();
	this.__renderTransform = new (openfl_geom_Matrix().default)();
	this.__worldVisible = true;
	this.set_name("instance" + ++DisplayObject.__instanceCount);
	if(DisplayObject.__initStage != null) {
		this.stage = DisplayObject.__initStage;
		DisplayObject.__initStage = null;
		this.stage.addChild(this);
	}
}

// Meta

DisplayObject.__name__ = "openfl.display.DisplayObject";
DisplayObject.__isInterface__ = false;
DisplayObject.__interfaces__ = [(openfl_display_IBitmapDrawable().default)];
DisplayObject.__super__ = (openfl_events_EventDispatcher().default);
DisplayObject.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) {
			useWeakReference = false;
		}
		if(priority == null) {
			priority = 0;
		}
		if(useCapture == null) {
			useCapture = false;
		}
		switch(type) {
		case "activate":case "deactivate":case "enterFrame":case "exitFrame":case "frameConstructed":case "render":
			if(!DisplayObject.__broadcastEvents.exists(type)) {
				DisplayObject.__broadcastEvents.set(type,[]);
			}
			var dispatchers = DisplayObject.__broadcastEvents.get(type);
			if(dispatchers.indexOf(this) == -1) {
				dispatchers.push(this);
			}
			break;
		case "clearDOM":case "renderCairo":case "renderCanvas":case "renderDOM":case "renderOpenGL":
			if(this.__customRenderEvent == null) {
				this.__customRenderEvent = new (openfl_events_RenderEvent().default)(null);
				this.__customRenderEvent.objectColorTransform = new (openfl_geom_ColorTransform().default)();
				this.__customRenderEvent.objectMatrix = new (openfl_geom_Matrix().default)();
				this.__customRenderClear = true;
			}
			break;
		default:
		}
		(openfl_events_EventDispatcher().default).prototype.addEventListener.call(this,type,listener,useCapture,priority,useWeakReference);
	},
	dispatchEvent: function(event) {
		if(((event) instanceof (openfl_events_MouseEvent().default))) {
			var mouseEvent = event;
			mouseEvent.stageX = this.__getRenderTransform().__transformX(mouseEvent.localX,mouseEvent.localY);
			mouseEvent.stageY = this.__getRenderTransform().__transformY(mouseEvent.localX,mouseEvent.localY);
		} else if(((event) instanceof (openfl_events_TouchEvent().default))) {
			var touchEvent = event;
			touchEvent.stageX = this.__getRenderTransform().__transformX(touchEvent.localX,touchEvent.localY);
			touchEvent.stageY = this.__getRenderTransform().__transformY(touchEvent.localX,touchEvent.localY);
		}
		event.target = this;
		return this.__dispatchWithCapture(event);
	},
	getBounds: function(targetCoordinateSpace) {
		var matrix = (openfl_geom_Matrix().default).__pool.get();
		if(targetCoordinateSpace != null && targetCoordinateSpace != this) {
			matrix.copyFrom(this.__getWorldTransform());
			var targetMatrix = (openfl_geom_Matrix().default).__pool.get();
			targetMatrix.copyFrom(targetCoordinateSpace.__getWorldTransform());
			targetMatrix.invert();
			matrix.concat(targetMatrix);
			(openfl_geom_Matrix().default).__pool.release(targetMatrix);
		} else {
			matrix.identity();
		}
		var bounds = new (openfl_geom_Rectangle().default)();
		this.__getBounds(bounds,matrix);
		(openfl_geom_Matrix().default).__pool.release(matrix);
		return bounds;
	},
	getRect: function(targetCoordinateSpace) {
		return this.getBounds(targetCoordinateSpace);
	},
	globalToLocal: function(pos) {
		return this.__globalToLocal(pos,new (openfl_geom_Point().default)());
	},
	hitTestObject: function(obj) {
		if(obj != null && obj.parent != null && this.parent != null) {
			var currentBounds = this.getBounds(this);
			var targetBounds = obj.getBounds(this);
			return currentBounds.intersects(targetBounds);
		}
		return false;
	},
	hitTestPoint: function(x,y,shapeFlag) {
		if(shapeFlag == null) {
			shapeFlag = false;
		}
		if(this.stage != null) {
			return this.__hitTest(x,y,shapeFlag,null,false,this);
		} else {
			return false;
		}
	},
	invalidate: function() {
		this.__setRenderDirty();
	},
	localToGlobal: function(point) {
		return this.__getRenderTransform().transformPoint(point);
	},
	removeEventListener: function(type,listener,useCapture) {
		if(useCapture == null) {
			useCapture = false;
		}
		(openfl_events_EventDispatcher().default).prototype.removeEventListener.call(this,type,listener,useCapture);
		switch(type) {
		case "activate":case "deactivate":case "enterFrame":case "exitFrame":case "frameConstructed":case "render":
			if(!this.hasEventListener(type)) {
				if(DisplayObject.__broadcastEvents.exists(type)) {
					(HxOverrides().default).remove(DisplayObject.__broadcastEvents.get(type),this);
				}
			}
			break;
		case "clearDOM":case "renderCairo":case "renderCanvas":case "renderDOM":case "renderOpenGL":
			if(!this.hasEventListener("clearDOM") && !this.hasEventListener("renderCairo") && !this.hasEventListener("renderCanvas") && !this.hasEventListener("renderDOM") && !this.hasEventListener("renderOpenGL")) {
				this.__customRenderEvent = null;
			}
			break;
		default:
		}
	},
	__cleanup: function() {
		this.__cairo = null;
		this.__canvas = null;
		this.__context = null;
		if(this.__graphics != null) {
			this.__graphics.__cleanup();
		}
		if(this.__cacheBitmap != null) {
			this.__cacheBitmap.__cleanup();
			this.__cacheBitmap = null;
		}
		if(this.__cacheBitmapData != null) {
			this.__cacheBitmapData.dispose();
			this.__cacheBitmapData = null;
		}
	},
	__dispatch: function(event) {
		if(this.__eventMap != null && this.hasEventListener(event.type)) {
			var result = (openfl_events_EventDispatcher().default).prototype.__dispatchEvent.call(this,event);
			if(event.__isCanceled) {
				return true;
			}
			return result;
		}
		return true;
	},
	__dispatchChildren: function(event) {
	},
	__dispatchEvent: function(event) {
		var parent = event.bubbles ? this.parent : null;
		var result = (openfl_events_EventDispatcher().default).prototype.__dispatchEvent.call(this,event);
		if(event.__isCanceled) {
			return true;
		}
		if(parent != null && parent != this) {
			event.eventPhase = 3;
			if(event.target == null) {
				event.target = this;
			}
			parent.__dispatchEvent(event);
		}
		return result;
	},
	__dispatchWithCapture: function(event) {
		if(event.target == null) {
			event.target = this;
		}
		if(this.parent != null) {
			event.eventPhase = 1;
			if(this.parent == this.stage) {
				this.parent.__dispatch(event);
			} else {
				var stack = DisplayObject.__tempStack.get();
				var parent = this.parent;
				var i = 0;
				while(parent != null) {
					(openfl__$Vector_Vector_$Impl_$().default).set(stack,i,parent);
					parent = parent.parent;
					++i;
				}
				var _g = 0;
				var _g1 = i;
				while(_g < _g1) {
					var j = _g++;
					stack[i - j - 1].__dispatch(event);
				}
				DisplayObject.__tempStack.release(stack);
			}
		}
		event.eventPhase = 2;
		return this.__dispatchEvent(event);
	},
	__enterFrame: function(deltaTime) {
	},
	__getBounds: function(rect,matrix) {
		if(this.__graphics != null) {
			this.__graphics.__getBounds(rect,matrix);
		}
	},
	__getCursor: function() {
		return null;
	},
	__getFilterBounds: function(rect,matrix) {
		this.__getRenderBounds(rect,matrix);
		if(this.__filters != null) {
			var extension = (openfl_geom_Rectangle().default).__pool.get();
			var _g = 0;
			var _g1 = this.__filters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				extension.__expand(-filter.__leftExtension,-filter.__topExtension,filter.__leftExtension + filter.__rightExtension,filter.__topExtension + filter.__bottomExtension);
			}
			rect.width += extension.width;
			rect.height += extension.height;
			rect.x += extension.x;
			rect.y += extension.y;
			(openfl_geom_Rectangle().default).__pool.release(extension);
		}
	},
	__getInteractive: function(stack) {
		return false;
	},
	__getLocalBounds: function(rect) {
		this.__getBounds(rect,this.__transform);
		rect.x -= this.__transform.tx;
		rect.y -= this.__transform.ty;
	},
	__getRenderBounds: function(rect,matrix) {
		if(this.__scrollRect == null) {
			this.__getBounds(rect,matrix);
		} else {
			var r = (openfl_geom_Rectangle().default).__pool.get();
			r.copyFrom(this.__scrollRect);
			r.__transform(r,matrix);
			rect.__expand(r.x,r.y,r.width,r.height);
			(openfl_geom_Rectangle().default).__pool.release(r);
		}
	},
	__getRenderTransform: function() {
		this.__getWorldTransform();
		return this.__renderTransform;
	},
	__getWorldTransform: function() {
		var transformDirty = this.__transformDirty || this.__worldTransformInvalid;
		if(transformDirty) {
			var list = [];
			var current = this;
			if(this.parent == null) {
				this.__update(true,false);
			} else {
				while(current != this.stage) {
					list.push(current);
					current = current.parent;
					if(current == null) {
						break;
					}
				}
			}
			var i = list.length;
			while(--i >= 0) {
				current = list[i];
				current.__update(true,false);
			}
		}
		return this.__worldTransform;
	},
	__globalToLocal: function(global,local) {
		this.__getRenderTransform();
		if(global == local) {
			this.__renderTransform.__transformInversePoint(global);
		} else {
			local.x = this.__renderTransform.__transformInverseX(global.x,global.y);
			local.y = this.__renderTransform.__transformInverseY(global.x,global.y);
		}
		return local;
	},
	__hitTest: function(x,y,shapeFlag,stack,interactiveOnly,hitObject) {
		if(this.__graphics != null) {
			if(!hitObject.__visible || this.__isMask) {
				return false;
			}
			if(this.get_mask() != null && !this.get_mask().__hitTestMask(x,y)) {
				return false;
			}
			if(this.__graphics.__hitTest(x,y,shapeFlag,this.__getRenderTransform())) {
				if(stack != null && !interactiveOnly) {
					stack.push(hitObject);
				}
				return true;
			}
		}
		return false;
	},
	__hitTestMask: function(x,y) {
		if(this.__graphics != null) {
			if(this.__graphics.__hitTest(x,y,true,this.__getRenderTransform())) {
				return true;
			}
		}
		return false;
	},
	__readGraphicsData: function(graphicsData,recurse) {
		if(this.__graphics != null) {
			this.__graphics.__readGraphicsData(graphicsData);
		}
	},
	__renderCairo: function(renderer) {
	},
	__renderCairoMask: function(renderer) {
	},
	__renderCanvas: function(renderer) {
		if(this.get_mask() == null || this.get_mask().get_width() > 0 && this.get_mask().get_height() > 0) {
			this.__updateCacheBitmap(renderer,false);
			if(this.__cacheBitmap != null && !this.__isCacheBitmapRender) {
				(openfl__$internal_renderer_canvas_CanvasBitmap().default).render(this.__cacheBitmap,renderer);
			} else {
				(openfl__$internal_renderer_canvas_CanvasDisplayObject().default).render(this,renderer);
			}
		}
		this.__renderEvent(renderer);
	},
	__renderCanvasMask: function(renderer) {
		if(this.__graphics != null) {
			(openfl__$internal_renderer_canvas_CanvasGraphics().default).renderMask(this.__graphics,renderer);
		}
	},
	__renderDOM: function(renderer) {
		this.__updateCacheBitmap(renderer,false);
		if(this.__cacheBitmap != null && !this.__isCacheBitmapRender) {
			this.__renderDOMClear(renderer);
			this.__cacheBitmap.stage = this.stage;
			(openfl__$internal_renderer_dom_DOMBitmap().default).render(this.__cacheBitmap,renderer);
		} else {
			(openfl__$internal_renderer_dom_DOMDisplayObject().default).render(this,renderer);
		}
		this.__renderEvent(renderer);
	},
	__renderDOMClear: function(renderer) {
		(openfl__$internal_renderer_dom_DOMDisplayObject().default).clear(this,renderer);
	},
	__renderEvent: function(renderer) {
		if(this.__customRenderEvent != null && this.__renderable) {
			this.__customRenderEvent.allowSmoothing = renderer.__allowSmoothing;
			this.__customRenderEvent.objectMatrix.copyFrom(this.__renderTransform);
			this.__customRenderEvent.objectColorTransform.__copyFrom(this.__worldColorTransform);
			this.__customRenderEvent.renderer = renderer;
			switch(renderer.__type) {
			case "cairo":
				this.__customRenderEvent.type = "renderCairo";
				break;
			case "canvas":
				this.__customRenderEvent.type = "renderCanvas";
				break;
			case "dom":
				if(this.stage != null && this.__worldVisible) {
					this.__customRenderEvent.type = "renderDOM";
				} else {
					this.__customRenderEvent.type = "clearDOM";
				}
				break;
			case "opengl":
				if(!renderer.__cleared) {
					renderer.__clear();
				}
				var renderer1 = renderer;
				renderer1.setShader(this.__worldShader);
				renderer1.__context3D.__flushGL();
				this.__customRenderEvent.type = "renderOpenGL";
				break;
			default:
				return;
			}
			renderer.__setBlendMode(this.__worldBlendMode);
			renderer.__pushMaskObject(this);
			this.dispatchEvent(this.__customRenderEvent);
			renderer.__popMaskObject(this);
			if(renderer.__type == "opengl") {
				var renderer2 = renderer;
				renderer2.setViewport();
			}
		}
	},
	__renderGL: function(renderer) {
		this.__updateCacheBitmap(renderer,false);
		if(this.__cacheBitmap != null && !this.__isCacheBitmapRender) {
			(openfl__$internal_renderer_context3D_Context3DBitmap().default).render(this.__cacheBitmap,renderer);
		} else {
			(openfl__$internal_renderer_context3D_Context3DDisplayObject().default).render(this,renderer);
		}
		this.__renderEvent(renderer);
	},
	__renderGLMask: function(renderer) {
		if(this.__graphics != null) {
			(openfl__$internal_renderer_context3D_Context3DShape().default).renderMask(this,renderer);
		}
	},
	__setParentRenderDirty: function() {
		var renderParent = this.__renderParent != null ? this.__renderParent : this.parent;
		if(renderParent != null && !renderParent.__renderDirty) {
			renderParent.__renderDirty = true;
			renderParent.__setParentRenderDirty();
		}
	},
	__setRenderDirty: function() {
		if(!this.__renderDirty) {
			this.__renderDirty = true;
			this.__setParentRenderDirty();
		}
	},
	__setStageReference: function(stage) {
		this.stage = stage;
	},
	__setTransformDirty: function() {
		if(!this.__transformDirty) {
			this.__transformDirty = true;
			this.__setWorldTransformInvalid();
			this.__setParentRenderDirty();
		}
	},
	__setWorldTransformInvalid: function() {
		this.__worldTransformInvalid = true;
	},
	__shouldCacheHardware: function(value) {
		if(value == true || this.__filters != null) {
			return true;
		}
		if(value == false || this.__graphics != null && !(openfl__$internal_renderer_context3D_Context3DGraphics().default).isCompatible(this.__graphics)) {
			return false;
		}
		return null;
	},
	__stopAllMovieClips: function() {
	},
	__update: function(transformOnly,updateChildren) {
		var renderParent = this.__renderParent != null ? this.__renderParent : this.parent;
		if(this.__isMask && renderParent == null) {
			renderParent = this.__maskTarget;
		}
		this.__renderable = this.__visible && this.__scaleX != 0 && this.__scaleY != 0 && !this.__isMask && (renderParent == null || !renderParent.__isMask);
		this.__updateTransforms();
		this.__transformDirty = false;
		this.__worldTransformInvalid = false;
		if(!transformOnly) {
			if(DisplayObject.__supportDOM) {
				this.__renderTransformChanged = !this.__renderTransform.equals(this.__renderTransformCache);
				if(this.__renderTransformCache == null) {
					this.__renderTransformCache = this.__renderTransform.clone();
				} else {
					this.__renderTransformCache.copyFrom(this.__renderTransform);
				}
			}
			if(renderParent != null) {
				if(DisplayObject.__supportDOM) {
					var worldVisible = renderParent.__worldVisible && this.__visible;
					this.__worldVisibleChanged = this.__worldVisible != worldVisible;
					this.__worldVisible = worldVisible;
					var worldAlpha = this.get_alpha() * renderParent.__worldAlpha;
					this.__worldAlphaChanged = this.__worldAlpha != worldAlpha;
					this.__worldAlpha = worldAlpha;
				} else {
					this.__worldAlpha = this.get_alpha() * renderParent.__worldAlpha;
				}
				if(this.__objectTransform != null) {
					this.__worldColorTransform.__copyFrom(this.__objectTransform.get_colorTransform());
					this.__worldColorTransform.__combine(renderParent.__worldColorTransform);
				} else {
					this.__worldColorTransform.__copyFrom(renderParent.__worldColorTransform);
				}
				if(this.__blendMode == null || this.__blendMode == "normal") {
					this.__worldBlendMode = renderParent.__worldBlendMode;
				} else {
					this.__worldBlendMode = this.__blendMode;
				}
				if(this.__shader == null) {
					this.__worldShader = renderParent.__shader;
				} else {
					this.__worldShader = this.__shader;
				}
				if(this.__scale9Grid == null) {
					this.__worldScale9Grid = renderParent.__scale9Grid;
				} else {
					this.__worldScale9Grid = this.__scale9Grid;
				}
			} else {
				this.__worldAlpha = this.get_alpha();
				if(DisplayObject.__supportDOM) {
					this.__worldVisibleChanged = this.__worldVisible != this.__visible;
					this.__worldVisible = this.__visible;
					this.__worldAlphaChanged = this.__worldAlpha != this.get_alpha();
				}
				if(this.__objectTransform != null) {
					this.__worldColorTransform.__copyFrom(this.__objectTransform.get_colorTransform());
				} else {
					this.__worldColorTransform.__identity();
				}
				this.__worldBlendMode = this.__blendMode;
				this.__worldShader = this.__shader;
				this.__worldScale9Grid = this.__scale9Grid;
			}
		}
		if(updateChildren && this.get_mask() != null) {
			this.get_mask().__update(transformOnly,true);
		}
	},
	__updateCacheBitmap: function(renderer,force) {
		if(this.__isCacheBitmapRender) {
			return false;
		}
		var colorTransform = (openfl_geom_ColorTransform().default).__pool.get();
		colorTransform.__copyFrom(this.__worldColorTransform);
		if(renderer.__worldColorTransform != null) {
			colorTransform.__combine(renderer.__worldColorTransform);
		}
		var updated = false;
		if(this.get_cacheAsBitmap() || renderer.__type != "opengl" && !colorTransform.__isDefault(true)) {
			var rect = null;
			var needRender = this.__cacheBitmap == null || this.__renderDirty && (force || this.__children != null && this.__children.length > 0) || this.opaqueBackground != this.__cacheBitmapBackground;
			var softwareDirty = needRender || this.__graphics != null && this.__graphics.__softwareDirty || !this.__cacheBitmapColorTransform.__equals(colorTransform,true);
			var hardwareDirty = needRender || this.__graphics != null && this.__graphics.__hardwareDirty;
			var renderType = renderer.__type;
			if(softwareDirty || hardwareDirty) {
				if(renderType == "opengl") {
					if(this.__shouldCacheHardware(null) == false) {
						renderType = "canvas";
					}
				}
				if(softwareDirty && (renderType == "canvas" || renderType == "cairo")) {
					needRender = true;
				}
				if(hardwareDirty && renderType == "opengl") {
					needRender = true;
				}
			}
			var updateTransform = needRender || !this.__cacheBitmap.__worldTransform.equals(this.__worldTransform);
			var hasFilters = this.__filters != null;
			if(hasFilters && !needRender) {
				var _g = 0;
				var _g1 = this.__filters;
				while(_g < _g1.length) {
					var filter = _g1[_g];
					++_g;
					if(filter.__renderDirty) {
						needRender = true;
						break;
					}
				}
			}
			if(this.__cacheBitmapMatrix == null) {
				this.__cacheBitmapMatrix = new (openfl_geom_Matrix().default)();
			}
			var bitmapMatrix = this.__cacheAsBitmapMatrix != null ? this.__cacheAsBitmapMatrix : this.__renderTransform;
			if(!needRender && (bitmapMatrix.a != this.__cacheBitmapMatrix.a || bitmapMatrix.b != this.__cacheBitmapMatrix.b || bitmapMatrix.c != this.__cacheBitmapMatrix.c || bitmapMatrix.d != this.__cacheBitmapMatrix.d)) {
				needRender = true;
			}
			if(!needRender && renderer.__type != "opengl" && this.__cacheBitmapData != null && this.__cacheBitmapData.image != null && this.__cacheBitmapData.image.version < this.__cacheBitmapData.__textureVersion) {
				needRender = true;
			}
			this.__cacheBitmapMatrix.copyFrom(bitmapMatrix);
			this.__cacheBitmapMatrix.tx = 0;
			this.__cacheBitmapMatrix.ty = 0;
			var bitmapWidth = 0;
			var bitmapHeight = 0;
			var filterWidth = 0;
			var filterHeight = 0;
			var offsetX = 0.;
			var offsetY = 0.;
			if(updateTransform || needRender) {
				rect = (openfl_geom_Rectangle().default).__pool.get();
				this.__getFilterBounds(rect,this.__cacheBitmapMatrix);
				filterWidth = Math.ceil(rect.width);
				filterHeight = Math.ceil(rect.height);
				offsetX = rect.x > 0 ? Math.ceil(rect.x) : Math.floor(rect.x);
				offsetY = rect.y > 0 ? Math.ceil(rect.y) : Math.floor(rect.y);
				if(this.__cacheBitmapData != null) {
					if(filterWidth > this.__cacheBitmapData.width || filterHeight > this.__cacheBitmapData.height) {
						bitmapWidth = Math.ceil(Math.max(filterWidth * 1.25,this.__cacheBitmapData.width));
						bitmapHeight = Math.ceil(Math.max(filterHeight * 1.25,this.__cacheBitmapData.height));
						needRender = true;
					} else {
						bitmapWidth = this.__cacheBitmapData.width;
						bitmapHeight = this.__cacheBitmapData.height;
					}
				} else {
					bitmapWidth = filterWidth;
					bitmapHeight = filterHeight;
				}
			}
			if(needRender) {
				updateTransform = true;
				this.__cacheBitmapBackground = this.opaqueBackground;
				if(filterWidth >= 0.5 && filterHeight >= 0.5) {
					var needsFill = this.opaqueBackground != null && (bitmapWidth != filterWidth || bitmapHeight != filterHeight);
					var fillColor = this.opaqueBackground != null ? -16777216 | this.opaqueBackground : 0;
					var bitmapColor = needsFill ? 0 : fillColor;
					var allowFramebuffer = renderer.__type == "opengl";
					if(this.__cacheBitmapData == null || bitmapWidth > this.__cacheBitmapData.width || bitmapHeight > this.__cacheBitmapData.height) {
						this.__cacheBitmapData = new (openfl_display_BitmapData().default)(bitmapWidth,bitmapHeight,true,bitmapColor);
						if(this.__cacheBitmap == null) {
							this.__cacheBitmap = new (openfl_display_Bitmap().default)();
						}
						this.__cacheBitmap.__bitmapData = this.__cacheBitmapData;
						this.__cacheBitmapRenderer = null;
					} else {
						this.__cacheBitmapData.__fillRect(this.__cacheBitmapData.rect,bitmapColor,allowFramebuffer);
					}
					if(needsFill) {
						rect.setTo(0,0,filterWidth,filterHeight);
						this.__cacheBitmapData.__fillRect(rect,fillColor,allowFramebuffer);
					}
				} else {
					(openfl_geom_ColorTransform().default).__pool.release(colorTransform);
					this.__cacheBitmap = null;
					this.__cacheBitmapData = null;
					this.__cacheBitmapData2 = null;
					this.__cacheBitmapData3 = null;
					this.__cacheBitmapRenderer = null;
					return true;
				}
			} else {
				this.__cacheBitmapData = this.__cacheBitmap.get_bitmapData();
				this.__cacheBitmapData2 = null;
				this.__cacheBitmapData3 = null;
			}
			if(updateTransform || needRender) {
				this.__cacheBitmap.__worldTransform.copyFrom(this.__worldTransform);
				if(bitmapMatrix == this.__renderTransform) {
					this.__cacheBitmap.__renderTransform.identity();
					this.__cacheBitmap.__renderTransform.tx = this.__renderTransform.tx + offsetX;
					this.__cacheBitmap.__renderTransform.ty = this.__renderTransform.ty + offsetY;
				} else {
					this.__cacheBitmap.__renderTransform.copyFrom(this.__cacheBitmapMatrix);
					this.__cacheBitmap.__renderTransform.invert();
					this.__cacheBitmap.__renderTransform.concat(this.__renderTransform);
					this.__cacheBitmap.__renderTransform.tx += offsetX;
					this.__cacheBitmap.__renderTransform.ty += offsetY;
				}
			}
			this.__cacheBitmap.smoothing = renderer.__allowSmoothing;
			this.__cacheBitmap.__renderable = this.__renderable;
			this.__cacheBitmap.__worldAlpha = this.__worldAlpha;
			this.__cacheBitmap.__worldBlendMode = this.__worldBlendMode;
			this.__cacheBitmap.__worldShader = this.__worldShader;
			this.__cacheBitmap.set_mask(this.__mask);
			if(needRender) {
				if(this.__cacheBitmapRenderer == null || renderType != this.__cacheBitmapRenderer.__type) {
					if(renderType == "opengl") {
						this.__cacheBitmapRenderer = new (openfl_display_OpenGLRenderer().default)(((js_Boot().default).__cast(renderer , (openfl_display_OpenGLRenderer().default))).__context3D,this.__cacheBitmapData);
					} else {
						if(this.__cacheBitmapData.image == null) {
							var color = this.opaqueBackground != null ? -16777216 | this.opaqueBackground : 0;
							this.__cacheBitmapData = new (openfl_display_BitmapData().default)(bitmapWidth,bitmapHeight,true,color);
							this.__cacheBitmap.__bitmapData = this.__cacheBitmapData;
						}
						(lime__$internal_graphics_ImageCanvasUtil().default).convertToCanvas(this.__cacheBitmapData.image);
						this.__cacheBitmapRenderer = new (openfl_display_CanvasRenderer().default)(this.__cacheBitmapData.image.buffer.__srcContext);
					}
					this.__cacheBitmapRenderer.__worldTransform = new (openfl_geom_Matrix().default)();
					this.__cacheBitmapRenderer.__worldColorTransform = new (openfl_geom_ColorTransform().default)();
				}
				if(this.__cacheBitmapColorTransform == null) {
					this.__cacheBitmapColorTransform = new (openfl_geom_ColorTransform().default)();
				}
				this.__cacheBitmapRenderer.__stage = this.stage;
				this.__cacheBitmapRenderer.__allowSmoothing = renderer.__allowSmoothing;
				this.__cacheBitmapRenderer.__setBlendMode("normal");
				this.__cacheBitmapRenderer.__worldAlpha = 1 / this.__worldAlpha;
				this.__cacheBitmapRenderer.__worldTransform.copyFrom(this.__renderTransform);
				this.__cacheBitmapRenderer.__worldTransform.invert();
				this.__cacheBitmapRenderer.__worldTransform.concat(this.__cacheBitmapMatrix);
				this.__cacheBitmapRenderer.__worldTransform.tx -= offsetX;
				this.__cacheBitmapRenderer.__worldTransform.ty -= offsetY;
				this.__cacheBitmapRenderer.__worldColorTransform.__copyFrom(colorTransform);
				this.__cacheBitmapRenderer.__worldColorTransform.__invert();
				this.__isCacheBitmapRender = true;
				if(this.__cacheBitmapRenderer.__type == "opengl") {
					var parentRenderer = renderer;
					var childRenderer = this.__cacheBitmapRenderer;
					var context = childRenderer.__context3D;
					var cacheRTT = context.__state.renderToTexture;
					var cacheRTTDepthStencil = context.__state.renderToTextureDepthStencil;
					var cacheRTTAntiAlias = context.__state.renderToTextureAntiAlias;
					var cacheRTTSurfaceSelector = context.__state.renderToTextureSurfaceSelector;
					var cacheBlendMode = parentRenderer.__blendMode;
					parentRenderer.__suspendClipAndMask();
					childRenderer.__copyShader(parentRenderer);
					this.__cacheBitmapData.__setUVRect(context,0,0,filterWidth,filterHeight);
					childRenderer.__setRenderTarget(this.__cacheBitmapData);
					if(this.__cacheBitmapData.image != null) {
						this.__cacheBitmapData.__textureVersion = this.__cacheBitmapData.image.version + 1;
					}
					this.__cacheBitmapData.__drawGL(this,childRenderer);
					if(hasFilters) {
						var needSecondBitmapData = true;
						var needCopyOfOriginal = false;
						var _g2 = 0;
						var _g11 = this.__filters;
						while(_g2 < _g11.length) {
							var filter1 = _g11[_g2];
							++_g2;
							if(filter1.__preserveObject) {
								needCopyOfOriginal = true;
							}
						}
						var bitmap = this.__cacheBitmapData;
						var bitmap2 = null;
						var bitmap3 = null;
						if(this.__cacheBitmapData2 == null || bitmapWidth > this.__cacheBitmapData2.width || bitmapHeight > this.__cacheBitmapData2.height) {
							this.__cacheBitmapData2 = new (openfl_display_BitmapData().default)(bitmapWidth,bitmapHeight,true,0);
						} else {
							this.__cacheBitmapData2.fillRect(this.__cacheBitmapData2.rect,0);
							if(this.__cacheBitmapData2.image != null) {
								this.__cacheBitmapData2.__textureVersion = this.__cacheBitmapData2.image.version + 1;
							}
						}
						this.__cacheBitmapData2.__setUVRect(context,0,0,filterWidth,filterHeight);
						bitmap2 = this.__cacheBitmapData2;
						if(needCopyOfOriginal) {
							if(this.__cacheBitmapData3 == null || bitmapWidth > this.__cacheBitmapData3.width || bitmapHeight > this.__cacheBitmapData3.height) {
								this.__cacheBitmapData3 = new (openfl_display_BitmapData().default)(bitmapWidth,bitmapHeight,true,0);
							} else {
								this.__cacheBitmapData3.fillRect(this.__cacheBitmapData3.rect,0);
								if(this.__cacheBitmapData3.image != null) {
									this.__cacheBitmapData3.__textureVersion = this.__cacheBitmapData3.image.version + 1;
								}
							}
							this.__cacheBitmapData3.__setUVRect(context,0,0,filterWidth,filterHeight);
							bitmap3 = this.__cacheBitmapData3;
						}
						childRenderer.__setBlendMode("normal");
						childRenderer.__worldAlpha = 1;
						childRenderer.__worldTransform.identity();
						childRenderer.__worldColorTransform.__identity();
						var shader;
						var cacheBitmap;
						var _g21 = 0;
						var _g3 = this.__filters;
						while(_g21 < _g3.length) {
							var filter2 = _g3[_g21];
							++_g21;
							if(filter2.__preserveObject) {
								childRenderer.__setRenderTarget(bitmap3);
								childRenderer.__renderFilterPass(bitmap,childRenderer.__defaultDisplayShader,filter2.__smooth);
							}
							var _g22 = 0;
							var _g31 = filter2.__numShaderPasses;
							while(_g22 < _g31) {
								var i = _g22++;
								shader = filter2.__initShader(childRenderer,i);
								childRenderer.__setBlendMode(filter2.__shaderBlendMode);
								childRenderer.__setRenderTarget(bitmap2);
								childRenderer.__renderFilterPass(bitmap,shader,filter2.__smooth);
								cacheBitmap = bitmap;
								bitmap = bitmap2;
								bitmap2 = cacheBitmap;
							}
							if(filter2.__preserveObject) {
								childRenderer.__setBlendMode("normal");
								childRenderer.__setRenderTarget(bitmap);
								childRenderer.__renderFilterPass(bitmap3,childRenderer.__defaultDisplayShader,filter2.__smooth,false);
							}
							filter2.__renderDirty = false;
						}
						this.__cacheBitmap.__bitmapData = bitmap;
					}
					parentRenderer.__blendMode = "normal";
					parentRenderer.__setBlendMode(cacheBlendMode);
					parentRenderer.__copyShader(childRenderer);
					if(cacheRTT != null) {
						context.setRenderToTexture(cacheRTT,cacheRTTDepthStencil,cacheRTTAntiAlias,cacheRTTSurfaceSelector);
					} else {
						context.setRenderToBackBuffer();
					}
					parentRenderer.__resumeClipAndMask(childRenderer);
					parentRenderer.setViewport();
					this.__cacheBitmapColorTransform.__copyFrom(colorTransform);
				} else {
					this.__cacheBitmapData.__drawCanvas(this,this.__cacheBitmapRenderer);
					if(hasFilters) {
						var needSecondBitmapData1 = false;
						var needCopyOfOriginal1 = false;
						var _g4 = 0;
						var _g12 = this.__filters;
						while(_g4 < _g12.length) {
							var filter3 = _g12[_g4];
							++_g4;
							if(filter3.__needSecondBitmapData) {
								needSecondBitmapData1 = true;
							}
							if(filter3.__preserveObject) {
								needCopyOfOriginal1 = true;
							}
						}
						var bitmap1 = this.__cacheBitmapData;
						var bitmap21 = null;
						var bitmap31 = null;
						if(needSecondBitmapData1) {
							if(this.__cacheBitmapData2 == null || this.__cacheBitmapData2.image == null || bitmapWidth > this.__cacheBitmapData2.width || bitmapHeight > this.__cacheBitmapData2.height) {
								this.__cacheBitmapData2 = new (openfl_display_BitmapData().default)(bitmapWidth,bitmapHeight,true,0);
							} else {
								this.__cacheBitmapData2.fillRect(this.__cacheBitmapData2.rect,0);
							}
							bitmap21 = this.__cacheBitmapData2;
						} else {
							bitmap21 = bitmap1;
						}
						if(needCopyOfOriginal1) {
							if(this.__cacheBitmapData3 == null || this.__cacheBitmapData3.image == null || bitmapWidth > this.__cacheBitmapData3.width || bitmapHeight > this.__cacheBitmapData3.height) {
								this.__cacheBitmapData3 = new (openfl_display_BitmapData().default)(bitmapWidth,bitmapHeight,true,0);
							} else {
								this.__cacheBitmapData3.fillRect(this.__cacheBitmapData3.rect,0);
							}
							bitmap31 = this.__cacheBitmapData3;
						}
						if(this.__tempPoint == null) {
							this.__tempPoint = new (openfl_geom_Point().default)();
						}
						var destPoint = this.__tempPoint;
						var cacheBitmap1;
						var lastBitmap;
						var _g23 = 0;
						var _g32 = this.__filters;
						while(_g23 < _g32.length) {
							var filter4 = _g32[_g23];
							++_g23;
							if(filter4.__preserveObject) {
								bitmap31.copyPixels(bitmap1,bitmap1.rect,destPoint);
							}
							lastBitmap = filter4.__applyFilter(bitmap21,bitmap1,bitmap1.rect,destPoint);
							if(filter4.__preserveObject) {
								lastBitmap.draw(bitmap31,null,this.__objectTransform != null ? this.__objectTransform.get_colorTransform() : null);
							}
							filter4.__renderDirty = false;
							if(needSecondBitmapData1 && lastBitmap == bitmap21) {
								cacheBitmap1 = bitmap1;
								bitmap1 = bitmap21;
								bitmap21 = cacheBitmap1;
							}
						}
						if(this.__cacheBitmapData != bitmap1) {
							cacheBitmap1 = this.__cacheBitmapData;
							this.__cacheBitmapData = bitmap1;
							this.__cacheBitmapData2 = cacheBitmap1;
							this.__cacheBitmap.__bitmapData = this.__cacheBitmapData;
							this.__cacheBitmapRenderer = null;
						}
						this.__cacheBitmap.__imageVersion = this.__cacheBitmapData.__textureVersion;
					}
					this.__cacheBitmapColorTransform.__copyFrom(colorTransform);
					if(!this.__cacheBitmapColorTransform.__isDefault(true)) {
						this.__cacheBitmapColorTransform.alphaMultiplier = 1;
						this.__cacheBitmapData.colorTransform(this.__cacheBitmapData.rect,this.__cacheBitmapColorTransform);
					}
				}
				this.__isCacheBitmapRender = false;
			}
			if(updateTransform || needRender) {
				(openfl_geom_Rectangle().default).__pool.release(rect);
			}
			updated = updateTransform;
		} else if(this.__cacheBitmap != null) {
			if(renderer.__type == "dom") {
				this.__cacheBitmap.__renderDOMClear(renderer);
			}
			this.__cacheBitmap = null;
			this.__cacheBitmapData = null;
			this.__cacheBitmapData2 = null;
			this.__cacheBitmapData3 = null;
			this.__cacheBitmapColorTransform = null;
			this.__cacheBitmapRenderer = null;
			updated = true;
		}
		(openfl_geom_ColorTransform().default).__pool.release(colorTransform);
		return updated;
	},
	__updateTransforms: function(overrideTransform) {
		var overrided = overrideTransform != null;
		var local = overrided ? overrideTransform : this.__transform;
		if(this.__worldTransform == null) {
			this.__worldTransform = new (openfl_geom_Matrix().default)();
		}
		if(this.__renderTransform == null) {
			this.__renderTransform = new (openfl_geom_Matrix().default)();
		}
		var renderParent = this.__renderParent != null ? this.__renderParent : this.parent;
		if(!overrided && this.parent != null) {
			DisplayObject.__calculateAbsoluteTransform(local,this.parent.__worldTransform,this.__worldTransform);
		} else {
			this.__worldTransform.copyFrom(local);
		}
		if(!overrided && renderParent != null) {
			DisplayObject.__calculateAbsoluteTransform(local,renderParent.__renderTransform,this.__renderTransform);
		} else {
			this.__renderTransform.copyFrom(local);
		}
		if(this.__scrollRect != null) {
			this.__renderTransform.__translateTransformed(-this.__scrollRect.x,-this.__scrollRect.y);
		}
	},
	get_alpha: function() {
		return this.__alpha;
	},
	set_alpha: function(value) {
		if(value > 1.0) {
			value = 1.0;
		}
		if(value < 0.0) {
			value = 0.0;
		}
		if(value != this.__alpha && !this.get_cacheAsBitmap()) {
			this.__setRenderDirty();
		}
		return this.__alpha = value;
	},
	get_blendMode: function() {
		return this.__blendMode;
	},
	set_blendMode: function(value) {
		if(value == null) {
			value = "normal";
		}
		if(value != this.__blendMode) {
			this.__setRenderDirty();
		}
		return this.__blendMode = value;
	},
	get_cacheAsBitmap: function() {
		if(this.__filters == null) {
			return this.__cacheAsBitmap;
		} else {
			return true;
		}
	},
	set_cacheAsBitmap: function(value) {
		if(value != this.__cacheAsBitmap) {
			this.__setRenderDirty();
		}
		return this.__cacheAsBitmap = value;
	},
	get_cacheAsBitmapMatrix: function() {
		return this.__cacheAsBitmapMatrix;
	},
	set_cacheAsBitmapMatrix: function(value) {
		this.__setRenderDirty();
		return this.__cacheAsBitmapMatrix = value != null ? value.clone() : value;
	},
	get_filters: function() {
		if(this.__filters == null) {
			return [];
		} else {
			return this.__filters.slice();
		}
	},
	set_filters: function(value) {
		if(value != null && value.length > 0) {
			this.__filters = value;
			this.__setRenderDirty();
		} else if(this.__filters != null) {
			this.__filters = null;
			this.__setRenderDirty();
		}
		return value;
	},
	get_height: function() {
		var rect = (openfl_geom_Rectangle().default).__pool.get();
		this.__getLocalBounds(rect);
		var height = rect.height;
		(openfl_geom_Rectangle().default).__pool.release(rect);
		return height;
	},
	set_height: function(value) {
		var rect = (openfl_geom_Rectangle().default).__pool.get();
		var matrix = (openfl_geom_Matrix().default).__pool.get();
		matrix.identity();
		this.__getBounds(rect,matrix);
		if(value != rect.height) {
			this.set_scaleY(value / rect.height);
		} else {
			this.set_scaleY(1);
		}
		(openfl_geom_Rectangle().default).__pool.release(rect);
		(openfl_geom_Matrix().default).__pool.release(matrix);
		return value;
	},
	get_loaderInfo: function() {
		if(this.stage != null) {
			return (openfl__$internal_Lib().default).current.__loaderInfo;
		}
		return null;
	},
	get_mask: function() {
		return this.__mask;
	},
	set_mask: function(value) {
		if(value == this.__mask) {
			return value;
		}
		if(value != this.__mask) {
			this.__setTransformDirty();
			this.__setRenderDirty();
		}
		if(this.__mask != null) {
			this.__mask.__isMask = false;
			this.__mask.__maskTarget = null;
			this.__mask.__setTransformDirty();
			this.__mask.__setRenderDirty();
		}
		if(value != null) {
			value.__isMask = true;
			value.__maskTarget = this;
			value.__setWorldTransformInvalid();
		}
		if(this.__cacheBitmap != null && this.__cacheBitmap.get_mask() != value) {
			this.__cacheBitmap.set_mask(value);
		}
		return this.__mask = value;
	},
	get_mouseX: function() {
		var mouseX = this.stage != null ? this.stage.__mouseX : (openfl__$internal_Lib().default).current.stage.__mouseX;
		var mouseY = this.stage != null ? this.stage.__mouseY : (openfl__$internal_Lib().default).current.stage.__mouseY;
		return this.__getRenderTransform().__transformInverseX(mouseX,mouseY);
	},
	get_mouseY: function() {
		var mouseX = this.stage != null ? this.stage.__mouseX : (openfl__$internal_Lib().default).current.stage.__mouseX;
		var mouseY = this.stage != null ? this.stage.__mouseY : (openfl__$internal_Lib().default).current.stage.__mouseY;
		return this.__getRenderTransform().__transformInverseY(mouseX,mouseY);
	},
	get_name: function() {
		return this.__name;
	},
	set_name: function(value) {
		return this.__name = value;
	},
	get_root: function() {
		if(this.stage != null) {
			return (openfl__$internal_Lib().default).current;
		}
		return null;
	},
	get_rotation: function() {
		return this.__rotation;
	},
	set_rotation: function(value) {
		if(value != this.__rotation) {
			this.__rotation = value;
			var radians = this.__rotation * (Math.PI / 180);
			this.__rotationSine = Math.sin(radians);
			this.__rotationCosine = Math.cos(radians);
			this.__transform.a = this.__rotationCosine * this.__scaleX;
			this.__transform.b = this.__rotationSine * this.__scaleX;
			this.__transform.c = -this.__rotationSine * this.__scaleY;
			this.__transform.d = this.__rotationCosine * this.__scaleY;
			this.__setTransformDirty();
		}
		return value;
	},
	get_scale9Grid: function() {
		if(this.__scale9Grid == null) {
			return null;
		}
		return this.__scale9Grid.clone();
	},
	set_scale9Grid: function(value) {
		if(value == null && this.__scale9Grid == null) {
			return value;
		}
		if(value != null && this.__scale9Grid != null && this.__scale9Grid.equals(value)) {
			return value;
		}
		if(value != null) {
			if(this.__scale9Grid == null) {
				this.__scale9Grid = new (openfl_geom_Rectangle().default)();
			}
			this.__scale9Grid.copyFrom(value);
		} else {
			this.__scale9Grid = null;
		}
		this.__setRenderDirty();
		return value;
	},
	get_scaleX: function() {
		return this.__scaleX;
	},
	set_scaleX: function(value) {
		if(value != this.__scaleX) {
			this.__scaleX = value;
			if(this.__transform.b == 0) {
				if(value != this.__transform.a) {
					this.__setTransformDirty();
				}
				this.__transform.a = value;
			} else {
				var a = this.__rotationCosine * value;
				var b = this.__rotationSine * value;
				if(this.__transform.a != a || this.__transform.b != b) {
					this.__setTransformDirty();
				}
				this.__transform.a = a;
				this.__transform.b = b;
			}
		}
		return value;
	},
	get_scaleY: function() {
		return this.__scaleY;
	},
	set_scaleY: function(value) {
		if(value != this.__scaleY) {
			this.__scaleY = value;
			if(this.__transform.c == 0) {
				if(value != this.__transform.d) {
					this.__setTransformDirty();
				}
				this.__transform.d = value;
			} else {
				var c = -this.__rotationSine * value;
				var d = this.__rotationCosine * value;
				if(this.__transform.d != d || this.__transform.c != c) {
					this.__setTransformDirty();
				}
				this.__transform.c = c;
				this.__transform.d = d;
			}
		}
		return value;
	},
	get_scrollRect: function() {
		if(this.__scrollRect == null) {
			return null;
		}
		return this.__scrollRect.clone();
	},
	set_scrollRect: function(value) {
		if(value == null && this.__scrollRect == null) {
			return value;
		}
		if(value != null && this.__scrollRect != null && this.__scrollRect.equals(value)) {
			return value;
		}
		if(value != null) {
			if(this.__scrollRect == null) {
				this.__scrollRect = new (openfl_geom_Rectangle().default)();
			}
			this.__scrollRect.copyFrom(value);
		} else {
			this.__scrollRect = null;
		}
		this.__setTransformDirty();
		if(DisplayObject.__supportDOM) {
			this.__setRenderDirty();
		}
		return value;
	},
	get_shader: function() {
		return this.__shader;
	},
	set_shader: function(value) {
		this.__shader = value;
		this.__setRenderDirty();
		return value;
	},
	get_transform: function() {
		if(this.__objectTransform == null) {
			this.__objectTransform = new (openfl_geom_Transform().default)(this);
		}
		return this.__objectTransform;
	},
	set_transform: function(value) {
		if(value == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_TypeError().default)("Parameter transform must be non-null."));
		}
		if(this.__objectTransform == null) {
			this.__objectTransform = new (openfl_geom_Transform().default)(this);
		}
		this.__setTransformDirty();
		this.__objectTransform.set_matrix(value.get_matrix());
		if(!this.__objectTransform.get_colorTransform().__equals(value.get_colorTransform(),true) || !this.get_cacheAsBitmap() && this.__objectTransform.get_colorTransform().alphaMultiplier != value.get_colorTransform().alphaMultiplier) {
			this.__objectTransform.get_colorTransform().__copyFrom(value.get_colorTransform());
			this.__setRenderDirty();
		}
		return this.__objectTransform;
	},
	get_visible: function() {
		return this.__visible;
	},
	set_visible: function(value) {
		if(value != this.__visible) {
			this.__setRenderDirty();
		}
		return this.__visible = value;
	},
	get_width: function() {
		var rect = (openfl_geom_Rectangle().default).__pool.get();
		this.__getLocalBounds(rect);
		var width = rect.width;
		(openfl_geom_Rectangle().default).__pool.release(rect);
		return width;
	},
	set_width: function(value) {
		var rect = (openfl_geom_Rectangle().default).__pool.get();
		var matrix = (openfl_geom_Matrix().default).__pool.get();
		matrix.identity();
		this.__getBounds(rect,matrix);
		if(value != rect.width) {
			this.set_scaleX(value / rect.width);
		} else {
			this.set_scaleX(1);
		}
		(openfl_geom_Rectangle().default).__pool.release(rect);
		(openfl_geom_Matrix().default).__pool.release(matrix);
		return value;
	},
	get_x: function() {
		return this.__transform.tx;
	},
	set_x: function(value) {
		if(value != this.__transform.tx) {
			this.__setTransformDirty();
		}
		return this.__transform.tx = value;
	},
	get_y: function() {
		return this.__transform.ty;
	},
	set_y: function(value) {
		if(value != this.__transform.ty) {
			this.__setTransformDirty();
		}
		return this.__transform.ty = value;
	}
});
DisplayObject.prototype.__class__ = DisplayObject.prototype.constructor = $hxClasses["openfl.display.DisplayObject"] = DisplayObject;

// Init

Object.defineProperties(DisplayObject.prototype,{ alpha : { get : function () { return this.get_alpha (); }, set : function (v) { return this.set_alpha (v); }}, blendMode : { get : function () { return this.get_blendMode (); }, set : function (v) { return this.set_blendMode (v); }}, cacheAsBitmap : { get : function () { return this.get_cacheAsBitmap (); }, set : function (v) { return this.set_cacheAsBitmap (v); }}, cacheAsBitmapMatrix : { get : function () { return this.get_cacheAsBitmapMatrix (); }, set : function (v) { return this.set_cacheAsBitmapMatrix (v); }}, filters : { get : function () { return this.get_filters (); }, set : function (v) { return this.set_filters (v); }}, height : { get : function () { return this.get_height (); }, set : function (v) { return this.set_height (v); }}, loaderInfo : { get : function () { return this.get_loaderInfo (); }}, mask : { get : function () { return this.get_mask (); }, set : function (v) { return this.set_mask (v); }}, mouseX : { get : function () { return this.get_mouseX (); }}, mouseY : { get : function () { return this.get_mouseY (); }}, name : { get : function () { return this.get_name (); }, set : function (v) { return this.set_name (v); }}, root : { get : function () { return this.get_root (); }}, rotation : { get : function () { return this.get_rotation (); }, set : function (v) { return this.set_rotation (v); }}, scaleX : { get : function () { return this.get_scaleX (); }, set : function (v) { return this.set_scaleX (v); }}, scaleY : { get : function () { return this.get_scaleY (); }, set : function (v) { return this.set_scaleY (v); }}, scrollRect : { get : function () { return this.get_scrollRect (); }, set : function (v) { return this.set_scrollRect (v); }}, shader : { get : function () { return this.get_shader (); }, set : function (v) { return this.set_shader (v); }}, transform : { get : function () { return this.get_transform (); }, set : function (v) { return this.set_transform (v); }}, visible : { get : function () { return this.get_visible (); }, set : function (v) { return this.set_visible (v); }}, width : { get : function () { return this.get_width (); }, set : function (v) { return this.set_width (v); }}, x : { get : function () { return this.get_x (); }, set : function (v) { return this.set_x (v); }}, y : { get : function () { return this.get_y (); }, set : function (v) { return this.set_y (v); }}});

// Statics

DisplayObject.__calculateAbsoluteTransform = function(local,parentTransform,target) {
	target.a = local.a * parentTransform.a + local.b * parentTransform.c;
	target.b = local.a * parentTransform.b + local.b * parentTransform.d;
	target.c = local.c * parentTransform.a + local.d * parentTransform.c;
	target.d = local.c * parentTransform.b + local.d * parentTransform.d;
	target.tx = local.tx * parentTransform.a + local.ty * parentTransform.c + parentTransform.tx;
	target.ty = local.tx * parentTransform.b + local.ty * parentTransform.d + parentTransform.ty;
}
DisplayObject.__meta__ = { fields : { __cairo : { SuppressWarnings : ["checkstyle:Dynamic"]}, addEventListener : { SuppressWarnings : ["checkstyle:Dynamic"]}, removeEventListener : { SuppressWarnings : ["checkstyle:Dynamic"]}}}
DisplayObject.__broadcastEvents = new (haxe_ds_StringMap().default)()
DisplayObject.__instanceCount = 0
DisplayObject.__tempStack = new (lime_utils_ObjectPool().default)(function() {
	return (openfl__$Vector_Vector_$Impl_$().default)._new();
},function(stack) {
	stack.set_length(0);
})

// Export

exports.default = DisplayObject;