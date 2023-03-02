// Class: openfl.display.Stage

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
var $extend = require("./../../extend_stub").default;
function lime_app_IModule() {return require("./../../lime/app/IModule");}
function openfl_display_DisplayObjectContainer() {return require("./../../openfl/display/DisplayObjectContainer");}
function openfl_display_DisplayObject() {return require("./../../openfl/display/DisplayObject");}
function haxe_CallStack() {return require("./../../haxe/CallStack");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function Std() {return require("./../../Std");}
function openfl_display_CanvasRenderer() {return require("./../../openfl/display/CanvasRenderer");}
function js_Boot() {return require("./../../js/Boot");}
function openfl_display_DOMRenderer() {return require("./../../openfl/display/DOMRenderer");}
function openfl_display3D_Context3D() {return require("./../../openfl/display3D/Context3D");}
function openfl_display_OpenGLRenderer() {return require("./../../openfl/display/OpenGLRenderer");}
function openfl_events_UncaughtErrorEvent() {return require("./../../openfl/events/UncaughtErrorEvent");}
function openfl_Lib() {return require("./../../openfl/Lib");}
function Reflect() {return require("./../../Reflect");}
function openfl_events_MouseEvent() {return require("./../../openfl/events/MouseEvent");}
function lime_ui__$KeyModifier_KeyModifier_$Impl_$() {return require("./../../lime/ui/_KeyModifier/KeyModifier_Impl_");}
function openfl_ui_Keyboard() {return require("./../../openfl/ui/Keyboard");}
function openfl_events_KeyboardEvent() {return require("./../../openfl/events/KeyboardEvent");}
function haxe_ds_ArraySort() {return require("./../../haxe/ds/ArraySort");}
function openfl_events_FocusEvent() {return require("./../../openfl/events/FocusEvent");}
function openfl_ui_GameInput() {return require("./../../openfl/ui/GameInput");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function lime_ui_MouseWheelMode() {return require("./../../lime/ui/MouseWheelMode");}
function openfl__$Vector_VectorIterator() {return require("./../../openfl/_Vector/VectorIterator");}
function openfl_events_TextEvent() {return require("./../../openfl/events/TextEvent");}
function openfl_events_FullScreenEvent() {return require("./../../openfl/events/FullScreenEvent");}
function openfl_geom_Point() {return require("./../../openfl/geom/Point");}
function openfl_display_InteractiveObject() {return require("./../../openfl/display/InteractiveObject");}
function openfl_ui_Mouse() {return require("./../../openfl/ui/Mouse");}
function openfl_ui__$MouseCursor_MouseCursor_$Impl_$() {return require("./../../openfl/ui/_MouseCursor/MouseCursor_Impl_");}
function lime_ui_MouseCursor() {return require("./../../lime/ui/MouseCursor");}
function HxOverrides() {return require("./../../HxOverrides");}
function openfl__$internal_utils_TouchData() {return require("./../../openfl/_internal/utils/TouchData");}
function openfl_events_TouchEvent() {return require("./../../openfl/events/TouchEvent");}
function lime_ui_Gamepad() {return require("./../../lime/ui/Gamepad");}
function lime_ui_Touch() {return require("./../../lime/ui/Touch");}
function openfl_geom_Rectangle() {return require("./../../openfl/geom/Rectangle");}
function StringTools() {return require("./../../StringTools");}
function openfl_errors_IllegalOperationError() {return require("./../../openfl/errors/IllegalOperationError");}
function openfl_geom_Matrix() {return require("./../../openfl/geom/Matrix");}
function openfl__$Vector_Vector_$Impl_$() {return require("./../../openfl/_Vector/Vector_Impl_");}
function openfl_display_Stage3D() {return require("./../../openfl/display/Stage3D");}
function haxe_ds_IntMap() {return require("./../../haxe/ds/IntMap");}
function openfl_display_LoaderInfo() {return require("./../../openfl/display/LoaderInfo");}
function openfl_display_Application() {return require("./../../openfl/display/Application");}
function Type() {return require("./../../Type");}

// Constructor

var Stage = function(width,height,color,documentClass,windowAttributes) {
	if(height == null) {
		height = 0;
	}
	if(width == null) {
		width = 0;
	}
	(openfl_display_DisplayObjectContainer().default).call(this);
	this.set_name(null);
	this.__color = -1;
	this.__colorSplit = [255,255,255];
	this.__colorString = "#FFFFFF";
	this.__contentsScaleFactor = 1;
	this.__currentTabOrderIndex = 0;
	this.__deltaTime = 0;
	this.__displayState = "normal";
	this.__mouseX = 0;
	this.__mouseY = 0;
	this.__lastClickTime = 0;
	this.__logicalWidth = 0;
	this.__logicalHeight = 0;
	this.__displayMatrix = new (openfl_geom_Matrix().default)();
	this.__displayRect = new (openfl_geom_Rectangle().default)();
	this.__renderDirty = true;
	this.stage3Ds = (openfl__$Vector_Vector_$Impl_$().default)._new();
	(openfl__$Vector_Vector_$Impl_$().default).push(this.stage3Ds,new (openfl_display_Stage3D().default)(this));
	(openfl__$Vector_Vector_$Impl_$().default).push(this.stage3Ds,new (openfl_display_Stage3D().default)(this));
	(openfl__$Vector_Vector_$Impl_$().default).push(this.stage3Ds,new (openfl_display_Stage3D().default)(this));
	(openfl__$Vector_Vector_$Impl_$().default).push(this.stage3Ds,new (openfl_display_Stage3D().default)(this));
	this.stage = this;
	this.align = "topLeft";
	this.allowsFullScreen = true;
	this.allowsFullScreenInteractive = true;
	this.__quality = "high";
	this.__scaleMode = "noScale";
	this.showDefaultContextMenu = true;
	this.softKeyboardRect = new (openfl_geom_Rectangle().default)();
	this.stageFocusRect = true;
	this.__macKeyboard = /AppleWebKit/.test (navigator.userAgent) && /Mobile\/\w+/.test (navigator.userAgent) || /Mac/.test (navigator.platform);
	this.__clearBeforeRender = true;
	this.__forceRender = false;
	this.__stack = [];
	this.__rollOutStack = [];
	this.__mouseOutStack = [];
	this.__touchData = new (haxe_ds_IntMap().default)();
	if(windowAttributes == null) {
		windowAttributes = { };
	}
	var app = null;
	if(!isNaN(width)) {
		if((openfl_Lib().default).get_current().__loaderInfo == null) {
			(openfl_Lib().default).get_current().__loaderInfo = (openfl_display_LoaderInfo().default).create(null);
			(openfl_Lib().default).get_current().__loaderInfo.content = (openfl_Lib().default).get_current();
		}
		var resizable = width == 0 && width == 0;
		this.element = window.document.createElement("div");
		if(resizable) {
			this.element.style.width = "100%";
			this.element.style.height = "100%";
		}
		windowAttributes.width = width;
		windowAttributes.height = height;
		windowAttributes.element = this.element;
		windowAttributes.resizable = resizable;
		windowAttributes.stage = this;
		if(!(Reflect().default).hasField(windowAttributes,"context")) {
			windowAttributes.context = { };
		}
		var contextAttributes = windowAttributes.context;
		if((Reflect().default).hasField(windowAttributes,"renderer")) {
			var type = (Std().default).string(windowAttributes.renderer);
			if(type == "webgl1") {
				contextAttributes.type = "webgl";
				contextAttributes.version = "1";
			} else if(type == "webgl2") {
				contextAttributes.type = "webgl";
				contextAttributes.version = "2";
			} else {
				(Reflect().default).setField(contextAttributes,"type",windowAttributes.renderer);
			}
		}
		if(!(Reflect().default).hasField(contextAttributes,"stencil")) {
			contextAttributes.stencil = true;
		}
		if(!(Reflect().default).hasField(contextAttributes,"depth")) {
			contextAttributes.depth = true;
		}
		if(!(Reflect().default).hasField(contextAttributes,"background")) {
			contextAttributes.background = null;
		}
		app = new (openfl_display_Application().default)();
		this.window = app.createWindow(windowAttributes);
		this.set_color(color);
	} else {
		this.window = width;
		this.set_color(height);
	}
	this.__contentsScaleFactor = this.window.get_scale();
	this.__wasFullscreen = this.window.get_fullscreen();
	this.__resize();
	if((openfl_Lib().default).get_current().stage == null) {
		this.stage.addChild((openfl_Lib().default).get_current());
	}
	if(documentClass != null) {
		(openfl_display_DisplayObject().default).__initStage = this;
		var sprite = (Type().default).createInstance(documentClass,[]);
		sprite.dispatchEvent(new (openfl_events_Event().default)("addedToStage",false,false));
	}
	if(app != null) {
		app.addModule(this);
		app.exec();
	}
}

// Meta

Stage.__name__ = "openfl.display.Stage";
Stage.__isInterface__ = false;
Stage.__interfaces__ = [(lime_app_IModule().default)];
Stage.__super__ = (openfl_display_DisplayObjectContainer().default);
Stage.prototype = $extend((openfl_display_DisplayObjectContainer().default).prototype, {
	invalidate: function() {
		this.__invalidated = true;
		this.__renderDirty = true;
	},
	localToGlobal: function(pos) {
		return pos.clone();
	},
	__broadcastEvent: function(event) {
		if((openfl_display_DisplayObject().default).__broadcastEvents.exists(event.type)) {
			var dispatchers = (openfl_display_DisplayObject().default).__broadcastEvents.get(event.type);
			var _g = 0;
			while(_g < dispatchers.length) {
				var dispatcher = dispatchers[_g];
				++_g;
				if(dispatcher.stage == this || dispatcher.stage == null) {
					try {
						dispatcher.__dispatch(event);
					} catch( e ) {
						(haxe_CallStack().default).lastException = e;
						this.__handleError(((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e);
					}
				}
			}
		}
	},
	__createRenderer: function() {
		var pixelRatio = 1;
		if(this.window.get_scale() > 1) {
			pixelRatio = this.window.devicePixelRatio || 1;
		}
		var windowWidth = (Std().default).int(this.window.get_width() * this.window.get_scale());
		var windowHeight = (Std().default).int(this.window.get_height() * this.window.get_scale());
		switch(this.window.context.type) {
		case "cairo":
			break;
		case "canvas":
			this.__renderer = new (openfl_display_CanvasRenderer().default)(this.window.context.canvas2D);
			((js_Boot().default).__cast(this.__renderer , (openfl_display_CanvasRenderer().default))).pixelRatio = pixelRatio;
			break;
		case "dom":
			this.__renderer = new (openfl_display_DOMRenderer().default)(this.window.context.dom);
			((js_Boot().default).__cast(this.__renderer , (openfl_display_DOMRenderer().default))).pixelRatio = pixelRatio;
			break;
		case "opengl":case "opengles":case "webgl":
			this.context3D = new (openfl_display3D_Context3D().default)(this);
			this.context3D.configureBackBuffer(windowWidth,windowHeight,0,true,true,true);
			this.context3D.present();
			this.__renderer = new (openfl_display_OpenGLRenderer().default)(this.context3D);
			break;
		default:
		}
		if(this.__renderer != null) {
			var tmp = this.get_quality();
			this.__renderer.__allowSmoothing = tmp != "low";
			this.__renderer.__worldTransform = this.__displayMatrix;
			this.__renderer.__stage = this;
			this.__renderer.__resize(windowWidth,windowHeight);
		}
	},
	__dispatchEvent: function(event) {
		try {
			return (openfl_display_DisplayObjectContainer().default).prototype.__dispatchEvent.call(this,event);
		} catch( e ) {
			(haxe_CallStack().default).lastException = e;
			this.__handleError(((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e);
			return false;
		}
	},
	__dispatchPendingMouseEvent: function() {
		if(this.__pendingMouseEvent) {
			this.__onMouse("mouseMove",this.__pendingMouseX,this.__pendingMouseY,0);
			this.__pendingMouseEvent = false;
		}
	},
	__dispatchStack: function(event,stack) {
		try {
			var target;
			var length = stack.length;
			if(length == 0) {
				event.eventPhase = 2;
				target = event.target;
				target.__dispatch(event);
			} else {
				event.eventPhase = 1;
				event.target = stack[stack.length - 1];
				var _g = 0;
				var _g1 = length - 1;
				while(_g < _g1) {
					var i = _g++;
					stack[i].__dispatch(event);
					if(event.__isCanceled) {
						return;
					}
				}
				event.eventPhase = 2;
				target = event.target;
				target.__dispatch(event);
				if(event.__isCanceled) {
					return;
				}
				if(event.bubbles) {
					event.eventPhase = 3;
					var i1 = length - 2;
					while(i1 >= 0) {
						stack[i1].__dispatch(event);
						if(event.__isCanceled) {
							return;
						}
						--i1;
					}
				}
			}
		} catch( e ) {
			(haxe_CallStack().default).lastException = e;
			this.__handleError(((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e);
		}
	},
	__dispatchTarget: function(target,event) {
		try {
			return target.__dispatchEvent(event);
		} catch( e ) {
			(haxe_CallStack().default).lastException = e;
			this.__handleError(((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e);
			return false;
		}
	},
	__drag: function(mouse) {
		var parent = this.__dragObject.parent;
		if(parent != null) {
			parent.__getWorldTransform().__transformInversePoint(mouse);
		}
		var x = mouse.x + this.__dragOffsetX;
		var y = mouse.y + this.__dragOffsetY;
		if(this.__dragBounds != null) {
			if(x < this.__dragBounds.x) {
				x = this.__dragBounds.x;
			} else if(x > this.__dragBounds.get_right()) {
				x = this.__dragBounds.get_right();
			}
			if(y < this.__dragBounds.y) {
				y = this.__dragBounds.y;
			} else if(y > this.__dragBounds.get_bottom()) {
				y = this.__dragBounds.get_bottom();
			}
		}
		this.__dragObject.set_x(x);
		this.__dragObject.set_y(y);
	},
	__getInteractive: function(stack) {
		if(stack != null) {
			stack.push(this);
		}
		return true;
	},
	__globalToLocal: function(global,local) {
		if(global != local) {
			local.copyFrom(global);
		}
		return local;
	},
	__handleError: function(e) {
		var event = new (openfl_events_UncaughtErrorEvent().default)("uncaughtError",true,true,e);
		try {
			(openfl_Lib().default).get_current().__loaderInfo.uncaughtErrorEvents.dispatchEvent(event);
		} catch( e1 ) {
			(haxe_CallStack().default).lastException = e1;
			var e2 = ((e1) instanceof (js__$Boot_HaxeError().default)) ? e1.val : e1;
		}
		if(!event.__preventDefault) {
			try {
				var exc = (haxe_CallStack().default).lastException;
				if(exc != null && (Reflect().default).hasField(exc,"stack") && exc.stack != null && exc.stack != "") {
					console.log(exc.stack);
					e.stack = exc.stack;
				} else {
					var msg = (haxe_CallStack().default).toString((haxe_CallStack().default).callStack());
					console.log(msg);
				}
			} catch( e21 ) {
				(haxe_CallStack().default).lastException = e21;
				var e22 = ((e21) instanceof (js__$Boot_HaxeError().default)) ? e21.val : e21;
			}
			throw e;
		}
	},
	__onKey: function(type,keyCode,modifier) {
		this.__dispatchPendingMouseEvent();
		(openfl_events_MouseEvent().default).__altKey = (lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_altKey(modifier);
		(openfl_events_MouseEvent().default).__commandKey = (lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_metaKey(modifier);
		(openfl_events_MouseEvent().default).__ctrlKey = (lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_ctrlKey(modifier);
		(openfl_events_MouseEvent().default).__shiftKey = (lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_shiftKey(modifier);
		var stack = [];
		if(this.__focus == null) {
			this.__getInteractive(stack);
		} else {
			this.__focus.__getInteractive(stack);
		}
		if(stack.length > 0) {
			var keyLocation = (openfl_ui_Keyboard().default).__getKeyLocation(keyCode);
			var keyCode1 = (openfl_ui_Keyboard().default).__convertKeyCode(keyCode);
			var charCode = (openfl_ui_Keyboard().default).__getCharCode(keyCode1,(lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_shiftKey(modifier));
			var event = new (openfl_events_KeyboardEvent().default)(type,true,true,charCode,keyCode1,keyLocation,this.__macKeyboard ? (lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_ctrlKey(modifier) || (lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_metaKey(modifier) : (lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_ctrlKey(modifier),(lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_altKey(modifier),(lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_shiftKey(modifier),(lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_ctrlKey(modifier),(lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_metaKey(modifier));
			stack.reverse();
			this.__dispatchStack(event,stack);
			if(event.__preventDefault) {
				if(type == "keyDown") {
					this.window.onKeyDown.cancel();
				} else {
					this.window.onKeyUp.cancel();
				}
			} else if(type == "keyDown" && keyCode1 == 9) {
				var tabStack = [];
				this.__tabTest(tabStack);
				var nextIndex = -1;
				var nextObject = null;
				var nextOffset = (lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_shiftKey(modifier) ? -1 : 1;
				if(tabStack.length > 1) {
					(haxe_ds_ArraySort().default).sort(tabStack,function(a,b) {
						return a.get_tabIndex() - b.get_tabIndex();
					});
					if(tabStack[tabStack.length - 1].get_tabIndex() == -1) {
						if(this.get_focus() != null) {
							nextIndex = 0;
						} else {
							nextIndex = this.__currentTabOrderIndex;
						}
					} else {
						var i = 0;
						while(i < tabStack.length) {
							if(tabStack[i].get_tabIndex() > -1) {
								if(i > 0) {
									tabStack.splice(0,i);
								}
								break;
							}
							++i;
						}
						if(this.get_focus() != null) {
							var index = tabStack.indexOf(this.get_focus());
							if(index < 0) {
								nextIndex = 0;
							} else {
								nextIndex = index + nextOffset;
							}
						} else {
							nextIndex = this.__currentTabOrderIndex;
						}
					}
				} else if(tabStack.length == 1) {
					nextObject = tabStack[0];
					if(this.get_focus() == nextObject) {
						nextObject = null;
					}
				}
				if(tabStack.length == 1 || tabStack.length == 0 && this.get_focus() != null) {
					nextIndex = 0;
				} else if(tabStack.length > 1) {
					if(nextIndex < 0) {
						nextIndex += tabStack.length;
					}
					nextIndex %= tabStack.length;
					nextObject = tabStack[nextIndex];
					if(nextObject == this.get_focus()) {
						nextIndex += nextOffset;
						if(nextIndex < 0) {
							nextIndex += tabStack.length;
						}
						nextIndex %= tabStack.length;
						nextObject = tabStack[nextIndex];
					}
				}
				var focusEvent = null;
				if(this.get_focus() != null) {
					focusEvent = new (openfl_events_FocusEvent().default)("keyFocusChange",true,true,nextObject,(lime_ui__$KeyModifier_KeyModifier_$Impl_$().default).get_shiftKey(modifier),0);
					stack = [];
					this.get_focus().__getInteractive(stack);
					stack.reverse();
					this.__dispatchStack(focusEvent,stack);
				}
				if(focusEvent == null || !focusEvent.isDefaultPrevented()) {
					this.__currentTabOrderIndex = nextIndex;
					if(nextObject != null) {
						this.set_focus(nextObject);
					}
				}
			}
		}
	},
	__onLimeCreateWindow: function($window) {
		if(this.window != $window) {
			return;
		}
		var f = $bind(this,this.__onLimeWindowActivate);
		var window1 = $window;
		var tmp = function() {
			f(window1);
		};
		$window.onActivate.add(tmp);
		var f1 = $bind(this,this.__onLimeWindowClose);
		var window2 = $window;
		var tmp1 = function() {
			f1(window2);
		};
		$window.onClose.add(tmp1,false,-9000);
		var f2 = $bind(this,this.__onLimeWindowDeactivate);
		var window3 = $window;
		var tmp2 = function() {
			f2(window3);
		};
		$window.onDeactivate.add(tmp2);
		var f3 = $bind(this,this.__onLimeWindowDropFile);
		var window4 = $window;
		var tmp3 = function(file) {
			f3(window4,file);
		};
		$window.onDropFile.add(tmp3);
		var f4 = $bind(this,this.__onLimeWindowEnter);
		var window5 = $window;
		var tmp4 = function() {
			f4(window5);
		};
		$window.onEnter.add(tmp4);
		var f5 = $bind(this,this.__onLimeWindowExpose);
		var window6 = $window;
		var tmp5 = function() {
			f5(window6);
		};
		$window.onExpose.add(tmp5);
		var f6 = $bind(this,this.__onLimeWindowFocusIn);
		var window7 = $window;
		var tmp6 = function() {
			f6(window7);
		};
		$window.onFocusIn.add(tmp6);
		var f7 = $bind(this,this.__onLimeWindowFocusOut);
		var window8 = $window;
		var tmp7 = function() {
			f7(window8);
		};
		$window.onFocusOut.add(tmp7);
		var f8 = $bind(this,this.__onLimeWindowFullscreen);
		var window9 = $window;
		var tmp8 = function() {
			f8(window9);
		};
		$window.onFullscreen.add(tmp8);
		var f9 = $bind(this,this.__onLimeKeyDown);
		var window10 = $window;
		var tmp9 = function(keyCode,modifier) {
			f9(window10,keyCode,modifier);
		};
		$window.onKeyDown.add(tmp9);
		var f10 = $bind(this,this.__onLimeKeyUp);
		var window11 = $window;
		var tmp10 = function(keyCode1,modifier1) {
			f10(window11,keyCode1,modifier1);
		};
		$window.onKeyUp.add(tmp10);
		var f11 = $bind(this,this.__onLimeWindowLeave);
		var window12 = $window;
		var tmp11 = function() {
			f11(window12);
		};
		$window.onLeave.add(tmp11);
		var f12 = $bind(this,this.__onLimeWindowMinimize);
		var window13 = $window;
		var tmp12 = function() {
			f12(window13);
		};
		$window.onMinimize.add(tmp12);
		var f13 = $bind(this,this.__onLimeMouseDown);
		var window14 = $window;
		var tmp13 = function(x,y,button) {
			f13(window14,x,y,button);
		};
		$window.onMouseDown.add(tmp13);
		var f14 = $bind(this,this.__onLimeMouseMove);
		var window15 = $window;
		var tmp14 = function(x1,y1) {
			f14(window15,x1,y1);
		};
		$window.onMouseMove.add(tmp14);
		var f15 = $bind(this,this.__onLimeMouseMoveRelative);
		var window16 = $window;
		var tmp15 = function(x2,y2) {
			f15(window16,x2,y2);
		};
		$window.onMouseMoveRelative.add(tmp15);
		var f16 = $bind(this,this.__onLimeMouseUp);
		var window17 = $window;
		var tmp16 = function(x3,y3,button1) {
			f16(window17,x3,y3,button1);
		};
		$window.onMouseUp.add(tmp16);
		var f17 = $bind(this,this.__onLimeMouseWheel);
		var window18 = $window;
		var tmp17 = function(deltaX,deltaY,deltaMode) {
			f17(window18,deltaX,deltaY,deltaMode);
		};
		$window.onMouseWheel.add(tmp17);
		var f18 = $bind(this,this.__onLimeWindowMove);
		var window19 = $window;
		var tmp18 = function(x4,y4) {
			f18(window19,x4,y4);
		};
		$window.onMove.add(tmp18);
		$window.onRender.add($bind(this,this.__onLimeRender));
		$window.onRenderContextLost.add($bind(this,this.__onLimeRenderContextLost));
		$window.onRenderContextRestored.add($bind(this,this.__onLimeRenderContextRestored));
		var f19 = $bind(this,this.__onLimeWindowResize);
		var window20 = $window;
		var tmp19 = function(width,height) {
			f19(window20,width,height);
		};
		$window.onResize.add(tmp19);
		var f20 = $bind(this,this.__onLimeWindowRestore);
		var window21 = $window;
		var tmp20 = function() {
			f20(window21);
		};
		$window.onRestore.add(tmp20);
		var f21 = $bind(this,this.__onLimeTextEdit);
		var window22 = $window;
		var tmp21 = function(text,start,length) {
			f21(window22,text,start,length);
		};
		$window.onTextEdit.add(tmp21);
		var f22 = $bind(this,this.__onLimeTextInput);
		var window23 = $window;
		var tmp22 = function(text1) {
			f22(window23,text1);
		};
		$window.onTextInput.add(tmp22);
		this.__onLimeWindowCreate($window);
	},
	__onLimeGamepadAxisMove: function(gamepad,axis,value) {
		try {
			(openfl_ui_GameInput().default).__onGamepadAxisMove(gamepad,axis,value);
		} catch( e ) {
			(haxe_CallStack().default).lastException = e;
			this.__handleError(((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e);
		}
	},
	__onLimeGamepadButtonDown: function(gamepad,button) {
		try {
			(openfl_ui_GameInput().default).__onGamepadButtonDown(gamepad,button);
		} catch( e ) {
			(haxe_CallStack().default).lastException = e;
			this.__handleError(((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e);
		}
	},
	__onLimeGamepadButtonUp: function(gamepad,button) {
		try {
			(openfl_ui_GameInput().default).__onGamepadButtonUp(gamepad,button);
		} catch( e ) {
			(haxe_CallStack().default).lastException = e;
			this.__handleError(((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e);
		}
	},
	__onLimeGamepadConnect: function(gamepad) {
		try {
			(openfl_ui_GameInput().default).__onGamepadConnect(gamepad);
		} catch( e ) {
			(haxe_CallStack().default).lastException = e;
			this.__handleError(((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e);
		}
		var f = $bind(this,this.__onLimeGamepadAxisMove);
		var gamepad1 = gamepad;
		var tmp = function(axis,value) {
			f(gamepad1,axis,value);
		};
		gamepad.onAxisMove.add(tmp);
		var f1 = $bind(this,this.__onLimeGamepadButtonDown);
		var gamepad2 = gamepad;
		var tmp1 = function(button) {
			f1(gamepad2,button);
		};
		gamepad.onButtonDown.add(tmp1);
		var f2 = $bind(this,this.__onLimeGamepadButtonUp);
		var gamepad3 = gamepad;
		var tmp2 = function(button1) {
			f2(gamepad3,button1);
		};
		gamepad.onButtonUp.add(tmp2);
		var f3 = $bind(this,this.__onLimeGamepadDisconnect);
		var gamepad4 = gamepad;
		var tmp3 = function() {
			f3(gamepad4);
		};
		gamepad.onDisconnect.add(tmp3);
	},
	__onLimeGamepadDisconnect: function(gamepad) {
		try {
			(openfl_ui_GameInput().default).__onGamepadDisconnect(gamepad);
		} catch( e ) {
			(haxe_CallStack().default).lastException = e;
			this.__handleError(((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e);
		}
	},
	__onLimeKeyDown: function($window,keyCode,modifier) {
		if(this.window == null || this.window != $window) {
			return;
		}
		this.__onKey("keyDown",keyCode,modifier);
	},
	__onLimeKeyUp: function($window,keyCode,modifier) {
		if(this.window == null || this.window != $window) {
			return;
		}
		this.__onKey("keyUp",keyCode,modifier);
	},
	__onLimeModuleExit: function(code) {
		if(this.window != null) {
			var event = null;
			event = new (openfl_events_Event().default)("deactivate");
			this.__broadcastEvent(event);
		}
	},
	__onLimeMouseDown: function($window,x,y,button) {
		if(this.window == null || this.window != $window) {
			return;
		}
		this.__dispatchPendingMouseEvent();
		var type;
		switch(button) {
		case 1:
			type = "middleMouseDown";
			break;
		case 2:
			type = "rightMouseDown";
			break;
		default:
			type = "mouseDown";
		}
		this.__onMouse(type,(Std().default).int(x * $window.get_scale()),(Std().default).int(y * $window.get_scale()),button);
		if(!this.showDefaultContextMenu && button == 2) {
			$window.onMouseDown.cancel();
		}
	},
	__onLimeMouseMove: function($window,x,y) {
		if(this.window == null || this.window != $window) {
			return;
		}
		this.__pendingMouseEvent = true;
		this.__pendingMouseX = (Std().default).int(x * $window.get_scale());
		this.__pendingMouseY = (Std().default).int(y * $window.get_scale());
	},
	__onLimeMouseMoveRelative: function($window,x,y) {
	},
	__onLimeMouseUp: function($window,x,y,button) {
		if(this.window == null || this.window != $window) {
			return;
		}
		this.__dispatchPendingMouseEvent();
		var type;
		switch(button) {
		case 1:
			type = "middleMouseUp";
			break;
		case 2:
			type = "rightMouseUp";
			break;
		default:
			type = "mouseUp";
		}
		this.__onMouse(type,(Std().default).int(x * $window.get_scale()),(Std().default).int(y * $window.get_scale()),button);
		if(!this.showDefaultContextMenu && button == 2) {
			$window.onMouseUp.cancel();
		}
	},
	__onLimeMouseWheel: function($window,deltaX,deltaY,deltaMode) {
		if(this.window == null || this.window != $window) {
			return;
		}
		this.__dispatchPendingMouseEvent();
		if(deltaMode == (lime_ui_MouseWheelMode().default).PIXELS) {
			this.__onMouseWheel((Std().default).int(deltaX * $window.get_scale()),(Std().default).int(deltaY * $window.get_scale()),deltaMode);
		} else {
			this.__onMouseWheel((Std().default).int(deltaX),(Std().default).int(deltaY),deltaMode);
		}
	},
	__onLimeRender: function(context) {
		if(this.__rendering) {
			return;
		}
		this.__rendering = true;
		var event = null;
		this.__broadcastEvent(new (openfl_events_Event().default)("enterFrame"));
		this.__broadcastEvent(new (openfl_events_Event().default)("frameConstructed"));
		this.__broadcastEvent(new (openfl_events_Event().default)("exitFrame"));
		this.__renderable = true;
		this.__enterFrame(this.__deltaTime);
		this.__deltaTime = 0;
		var shouldRender = this.__renderer != null && (this.__renderDirty || this.__forceRender);
		if(this.__invalidated && shouldRender) {
			this.__invalidated = false;
			event = new (openfl_events_Event().default)("render");
			this.__broadcastEvent(event);
		}
		this.__update(false,true);
		if(this.__renderer != null) {
			if(this.context3D != null) {
				var stage3D = new (openfl__$Vector_VectorIterator().default)(this.stage3Ds);
				while(stage3D.hasNext()) {
					var stage3D1 = stage3D.next();
					this.context3D.__renderStage3D(stage3D1);
				}
				if(this.context3D.__present) {
					shouldRender = true;
				}
			}
			if(shouldRender) {
				var tmp = this.__renderer.__type == "cairo";
				if(this.context3D == null) {
					this.__renderer.__clear();
				}
				this.__renderer.__render(this);
			} else if(this.context3D == null) {
				this.window.onRender.cancel();
			}
			if(this.context3D != null) {
				if(!this.context3D.__present) {
					this.window.onRender.cancel();
				} else {
					if(!this.__renderer.__cleared) {
						this.__renderer.__clear();
					}
					this.context3D.__present = false;
					this.context3D.__cleared = false;
				}
			}
			this.__renderer.__cleared = false;
		}
		this.__rendering = false;
	},
	__onLimeRenderContextLost: function() {
		this.__renderer = null;
		this.context3D = null;
		var stage3D = new (openfl__$Vector_VectorIterator().default)(this.stage3Ds);
		while(stage3D.hasNext()) {
			var stage3D1 = stage3D.next();
			stage3D1.__lostContext();
		}
	},
	__onLimeRenderContextRestored: function(context) {
		this.__createRenderer();
		var stage3D = new (openfl__$Vector_VectorIterator().default)(this.stage3Ds);
		while(stage3D.hasNext()) {
			var stage3D1 = stage3D.next();
			stage3D1.__restoreContext();
		}
	},
	__onLimeTextEdit: function($window,text,start,length) {
	},
	__onLimeTextInput: function($window,text) {
		if(this.window == null || this.window != $window) {
			return;
		}
		var stack = [];
		if(this.__focus == null) {
			this.__getInteractive(stack);
		} else {
			this.__focus.__getInteractive(stack);
		}
		var event = new (openfl_events_TextEvent().default)("textInput",true,true,text);
		if(stack.length > 0) {
			stack.reverse();
			this.__dispatchStack(event,stack);
		} else {
			this.__dispatchEvent(event);
		}
		if(event.isDefaultPrevented()) {
			$window.onTextInput.cancel();
		}
	},
	__onLimeTouchCancel: function(touch) {
		if(this.__primaryTouch == touch) {
			this.__primaryTouch = null;
		}
		this.__onTouch("touchEnd",touch);
	},
	__onLimeTouchMove: function(touch) {
		this.__onTouch("touchMove",touch);
	},
	__onLimeTouchEnd: function(touch) {
		if(this.__primaryTouch == touch) {
			this.__primaryTouch = null;
		}
		this.__onTouch("touchEnd",touch);
	},
	__onLimeTouchStart: function(touch) {
		if(this.__primaryTouch == null) {
			this.__primaryTouch = touch;
		}
		this.__onTouch("touchBegin",touch);
	},
	__onLimeUpdate: function(deltaTime) {
		this.__deltaTime = deltaTime;
		this.__dispatchPendingMouseEvent();
	},
	__onLimeWindowActivate: function($window) {
		if(this.window == null || this.window != $window) {
			return;
		}
	},
	__onLimeWindowClose: function($window) {
		if(this.window == $window) {
			this.window = null;
		}
		this.__primaryTouch = null;
		var event = null;
		event = new (openfl_events_Event().default)("deactivate");
		this.__broadcastEvent(event);
	},
	__onLimeWindowCreate: function($window) {
		if(this.window == null || this.window != $window) {
			return;
		}
		if($window.context != null) {
			this.__createRenderer();
		}
	},
	__onLimeWindowDeactivate: function($window) {
		if(this.window == null || this.window != $window) {
			return;
		}
	},
	__onLimeWindowDropFile: function($window,file) {
	},
	__onLimeWindowEnter: function($window) {
	},
	__onLimeWindowExpose: function($window) {
		if(this.window == null || this.window != $window) {
			return;
		}
		this.__renderDirty = true;
	},
	__onLimeWindowFocusIn: function($window) {
		if(this.window == null || this.window != $window) {
			return;
		}
		this.__renderDirty = true;
		var event = null;
		event = new (openfl_events_Event().default)("activate");
		this.__broadcastEvent(event);
		this.set_focus(this.__cacheFocus);
	},
	__onLimeWindowFocusOut: function($window) {
		if(this.window == null || this.window != $window) {
			return;
		}
		this.__primaryTouch = null;
		var event = null;
		event = new (openfl_events_Event().default)("deactivate");
		this.__broadcastEvent(event);
		var currentFocus = this.get_focus();
		this.set_focus(null);
		this.__cacheFocus = currentFocus;
		(openfl_events_MouseEvent().default).__altKey = false;
		(openfl_events_MouseEvent().default).__commandKey = false;
		(openfl_events_MouseEvent().default).__ctrlKey = false;
		(openfl_events_MouseEvent().default).__shiftKey = false;
	},
	__onLimeWindowFullscreen: function($window) {
		if(this.window == null || this.window != $window) {
			return;
		}
		this.__resize();
		if(!this.__wasFullscreen) {
			this.__wasFullscreen = true;
			if(this.__displayState == "normal") {
				this.__displayState = "fullScreenInteractive";
			}
			this.__dispatchEvent(new (openfl_events_FullScreenEvent().default)("fullScreen",false,false,true,true));
		}
	},
	__onLimeWindowLeave: function($window) {
		if(this.window == null || this.window != $window || (openfl_events_MouseEvent().default).__buttonDown) {
			return;
		}
		this.__dispatchPendingMouseEvent();
		var event = null;
		event = new (openfl_events_Event().default)("mouseLeave");
		this.__dispatchEvent(event);
	},
	__onLimeWindowMinimize: function($window) {
		if(this.window == null || this.window != $window) {
			return;
		}
	},
	__onLimeWindowMove: function($window,x,y) {
	},
	__onLimeWindowResize: function($window,width,height) {
		if(this.window == null || this.window != $window) {
			return;
		}
		this.__resize();
		if(this.__wasFullscreen && !$window.get_fullscreen()) {
			this.__wasFullscreen = false;
			this.__displayState = "normal";
			this.__dispatchEvent(new (openfl_events_FullScreenEvent().default)("fullScreen",false,false,false,true));
		}
	},
	__onLimeWindowRestore: function($window) {
		if(this.window == null || this.window != $window) {
			return;
		}
		if(this.__wasFullscreen && !$window.get_fullscreen()) {
			this.__wasFullscreen = false;
			this.__displayState = "normal";
			this.__dispatchEvent(new (openfl_events_FullScreenEvent().default)("fullScreen",false,false,false,true));
		}
	},
	__onMouse: function(type,x,y,button) {
		if(button > 2) {
			return;
		}
		var targetPoint = (openfl_geom_Point().default).__pool.get();
		targetPoint.setTo(x,y);
		this.__displayMatrix.__transformInversePoint(targetPoint);
		this.__mouseX = targetPoint.x;
		this.__mouseY = targetPoint.y;
		var stack = [];
		var target = null;
		if(this.__hitTest(this.__mouseX,this.__mouseY,true,stack,true,this)) {
			target = stack[stack.length - 1];
		} else {
			target = this;
			stack = [this];
		}
		if(target == null) {
			target = this;
		}
		var clickType = null;
		switch(type) {
		case "middleMouseDown":
			this.__mouseDownMiddle = target;
			break;
		case "middleMouseUp":
			if(this.__mouseDownMiddle == target) {
				clickType = "middleClick";
			}
			this.__mouseDownMiddle = null;
			break;
		case "mouseDown":
			if(target.__allowMouseFocus()) {
				if(this.get_focus() != null) {
					var focusEvent = new (openfl_events_FocusEvent().default)("mouseFocusChange",true,true,target,false,0);
					this.__dispatchStack(focusEvent,stack);
					if(!focusEvent.isDefaultPrevented()) {
						this.set_focus(target);
					}
				} else {
					this.set_focus(target);
				}
			} else {
				this.set_focus(null);
			}
			this.__mouseDownLeft = target;
			(openfl_events_MouseEvent().default).__buttonDown = true;
			break;
		case "mouseUp":
			if(this.__mouseDownLeft != null) {
				(openfl_events_MouseEvent().default).__buttonDown = false;
				if(this.__mouseDownLeft == target) {
					clickType = "click";
				} else {
					var event = null;
					event = (openfl_events_MouseEvent().default).__create("releaseOutside",1,this.__mouseX,this.__mouseY,new (openfl_geom_Point().default)(this.__mouseX,this.__mouseY),this);
					this.__mouseDownLeft.dispatchEvent(event);
				}
				this.__mouseDownLeft = null;
			}
			break;
		case "rightMouseDown":
			this.__mouseDownRight = target;
			break;
		case "rightMouseUp":
			if(this.__mouseDownRight == target) {
				clickType = "rightClick";
			}
			this.__mouseDownRight = null;
			break;
		default:
		}
		var localPoint = (openfl_geom_Point().default).__pool.get();
		var event1 = null;
		event1 = (openfl_events_MouseEvent().default).__create(type,button,this.__mouseX,this.__mouseY,target.__globalToLocal(targetPoint,localPoint),target);
		this.__dispatchStack(event1,stack);
		if(clickType != null) {
			event1 = (openfl_events_MouseEvent().default).__create(clickType,button,this.__mouseX,this.__mouseY,target.__globalToLocal(targetPoint,localPoint),target);
			this.__dispatchStack(event1,stack);
			if(type == "mouseUp" && ((js_Boot().default).__cast(target , (openfl_display_InteractiveObject().default))).doubleClickEnabled) {
				var currentTime = (openfl_Lib().default).getTimer();
				if(currentTime - this.__lastClickTime < 500) {
					event1 = (openfl_events_MouseEvent().default).__create("doubleClick",button,this.__mouseX,this.__mouseY,target.__globalToLocal(targetPoint,localPoint),target);
					this.__dispatchStack(event1,stack);
					this.__lastClickTime = 0;
				} else {
					this.__lastClickTime = currentTime;
				}
			}
		}
		if((openfl_ui_Mouse().default).__cursor == "auto" && !(openfl_ui_Mouse().default).__hidden) {
			var cursor = null;
			if(this.__mouseDownLeft != null) {
				cursor = this.__mouseDownLeft.__getCursor();
			} else {
				var _g = 0;
				while(_g < stack.length) {
					var target1 = stack[_g];
					++_g;
					cursor = target1.__getCursor();
					if(cursor != null) {
						this.window.set_cursor((openfl_ui__$MouseCursor_MouseCursor_$Impl_$().default).toLimeCursor(cursor));
						break;
					}
				}
			}
			if(cursor == null) {
				this.window.set_cursor((lime_ui_MouseCursor().default).ARROW);
			}
		}
		var event2;
		if(target != this.__mouseOverTarget) {
			if(this.__mouseOverTarget != null) {
				event2 = (openfl_events_MouseEvent().default).__create("mouseOut",button,this.__mouseX,this.__mouseY,this.__mouseOverTarget.__globalToLocal(targetPoint,localPoint),this.__mouseOverTarget);
				this.__dispatchStack(event2,this.__mouseOutStack);
			}
		}
		var item;
		var i = 0;
		while(i < this.__rollOutStack.length) {
			item = this.__rollOutStack[i];
			if(stack.indexOf(item) == -1) {
				(HxOverrides().default).remove(this.__rollOutStack,item);
				event2 = (openfl_events_MouseEvent().default).__create("rollOut",button,this.__mouseX,this.__mouseY,this.__mouseOverTarget.__globalToLocal(targetPoint,localPoint),this.__mouseOverTarget);
				event2.bubbles = false;
				this.__dispatchTarget(item,event2);
			} else {
				++i;
			}
		}
		var _g1 = 0;
		while(_g1 < stack.length) {
			var item1 = stack[_g1];
			++_g1;
			if(this.__rollOutStack.indexOf(item1) == -1 && this.__mouseOverTarget != null) {
				if(item1.hasEventListener("rollOver")) {
					event2 = (openfl_events_MouseEvent().default).__create("rollOver",button,this.__mouseX,this.__mouseY,this.__mouseOverTarget.__globalToLocal(targetPoint,localPoint),item1);
					event2.bubbles = false;
					this.__dispatchTarget(item1,event2);
				}
				if(item1.hasEventListener("rollOut") || item1.hasEventListener("rollOver")) {
					this.__rollOutStack.push(item1);
				}
			}
		}
		if(target != this.__mouseOverTarget) {
			if(target != null) {
				event2 = (openfl_events_MouseEvent().default).__create("mouseOver",button,this.__mouseX,this.__mouseY,target.__globalToLocal(targetPoint,localPoint),target);
				this.__dispatchStack(event2,stack);
			}
			this.__mouseOverTarget = target;
			this.__mouseOutStack = stack;
		}
		if(this.__dragObject != null) {
			this.__drag(targetPoint);
			var dropTarget = null;
			if(this.__mouseOverTarget == this.__dragObject) {
				var cacheMouseEnabled = this.__dragObject.mouseEnabled;
				var cacheMouseChildren = this.__dragObject.mouseChildren;
				this.__dragObject.mouseEnabled = false;
				this.__dragObject.mouseChildren = false;
				var stack1 = [];
				if(this.__hitTest(this.__mouseX,this.__mouseY,true,stack1,true,this)) {
					dropTarget = stack1[stack1.length - 1];
				}
				this.__dragObject.mouseEnabled = cacheMouseEnabled;
				this.__dragObject.mouseChildren = cacheMouseChildren;
			} else if(this.__mouseOverTarget != this) {
				dropTarget = this.__mouseOverTarget;
			}
			this.__dragObject.dropTarget = dropTarget;
		}
		(openfl_geom_Point().default).__pool.release(targetPoint);
		(openfl_geom_Point().default).__pool.release(localPoint);
	},
	__onMouseWheel: function(deltaX,deltaY,deltaMode) {
		var x = this.__mouseX;
		var y = this.__mouseY;
		var stack = [];
		var target = null;
		if(this.__hitTest(this.__mouseX,this.__mouseY,true,stack,true,this)) {
			target = stack[stack.length - 1];
		} else {
			target = this;
			stack = [this];
		}
		if(target == null) {
			target = this;
		}
		var targetPoint = (openfl_geom_Point().default).__pool.get();
		targetPoint.setTo(x,y);
		this.__displayMatrix.__transformInversePoint(targetPoint);
		var delta = (Std().default).int(deltaY);
		var event = (openfl_events_MouseEvent().default).__create("mouseWheel",0,this.__mouseX,this.__mouseY,target.__globalToLocal(targetPoint,targetPoint),target,delta);
		event.cancelable = true;
		this.__dispatchStack(event,stack);
		if(event.isDefaultPrevented()) {
			this.window.onMouseWheel.cancel();
		}
		(openfl_geom_Point().default).__pool.release(targetPoint);
	},
	__onTouch: function(type,touch) {
		var targetPoint = (openfl_geom_Point().default).__pool.get();
		targetPoint.setTo(Math.round(touch.x * this.window.get_width() * this.window.get_scale()),Math.round(touch.y * this.window.get_height() * this.window.get_scale()));
		this.__displayMatrix.__transformInversePoint(targetPoint);
		var touchX = targetPoint.x;
		var touchY = targetPoint.y;
		var stack = [];
		var target = null;
		if(this.__hitTest(touchX,touchY,false,stack,true,this)) {
			target = stack[stack.length - 1];
		} else {
			target = this;
			stack = [this];
		}
		if(target == null) {
			target = this;
		}
		var touchId = touch.id;
		var touchData = null;
		if(this.__touchData.exists(touchId)) {
			touchData = this.__touchData.get(touchId);
		} else {
			touchData = (openfl__$internal_utils_TouchData().default).__pool.get();
			touchData.reset();
			touchData.touch = touch;
			this.__touchData.set(touchId,touchData);
		}
		var touchType = null;
		var releaseTouchData = false;
		switch(type) {
		case "touchBegin":
			touchData.touchDownTarget = target;
			break;
		case "touchEnd":
			if(touchData.touchDownTarget == target) {
				touchType = "touchTap";
			}
			touchData.touchDownTarget = null;
			releaseTouchData = true;
			break;
		default:
		}
		var localPoint = (openfl_geom_Point().default).__pool.get();
		var isPrimaryTouchPoint = this.__primaryTouch == touch;
		var touchEvent = (openfl_events_TouchEvent().default).__create(type,null,touchX,touchY,target.__globalToLocal(targetPoint,localPoint),target);
		touchEvent.touchPointID = touchId;
		touchEvent.isPrimaryTouchPoint = isPrimaryTouchPoint;
		touchEvent.pressure = touch.pressure;
		this.__dispatchStack(touchEvent,stack);
		if(touchType != null) {
			touchEvent = (openfl_events_TouchEvent().default).__create(touchType,null,touchX,touchY,target.__globalToLocal(targetPoint,localPoint),target);
			touchEvent.touchPointID = touchId;
			touchEvent.isPrimaryTouchPoint = isPrimaryTouchPoint;
			touchEvent.pressure = touch.pressure;
			this.__dispatchStack(touchEvent,stack);
		}
		var touchOverTarget = touchData.touchOverTarget;
		if(target != touchOverTarget && touchOverTarget != null) {
			touchEvent = (openfl_events_TouchEvent().default).__create("touchOut",null,touchX,touchY,touchOverTarget.__globalToLocal(targetPoint,localPoint),touchOverTarget);
			touchEvent.touchPointID = touchId;
			touchEvent.isPrimaryTouchPoint = isPrimaryTouchPoint;
			touchEvent.pressure = touch.pressure;
			this.__dispatchTarget(touchOverTarget,touchEvent);
		}
		var touchOutStack = touchData.rollOutStack;
		var item;
		var i = 0;
		while(i < touchOutStack.length) {
			item = touchOutStack[i];
			if(stack.indexOf(item) == -1) {
				(HxOverrides().default).remove(touchOutStack,item);
				touchEvent = (openfl_events_TouchEvent().default).__create("touchRollOut",null,touchX,touchY,touchOverTarget.__globalToLocal(targetPoint,localPoint),touchOverTarget);
				touchEvent.touchPointID = touchId;
				touchEvent.isPrimaryTouchPoint = isPrimaryTouchPoint;
				touchEvent.bubbles = false;
				touchEvent.pressure = touch.pressure;
				this.__dispatchTarget(item,touchEvent);
			} else {
				++i;
			}
		}
		var _g = 0;
		while(_g < stack.length) {
			var item1 = stack[_g];
			++_g;
			if(touchOutStack.indexOf(item1) == -1) {
				if(item1.hasEventListener("touchRollOver")) {
					touchEvent = (openfl_events_TouchEvent().default).__create("touchRollOver",null,touchX,touchY,touchOverTarget.__globalToLocal(targetPoint,localPoint),item1);
					touchEvent.touchPointID = touchId;
					touchEvent.isPrimaryTouchPoint = isPrimaryTouchPoint;
					touchEvent.bubbles = false;
					touchEvent.pressure = touch.pressure;
					this.__dispatchTarget(item1,touchEvent);
				}
				if(item1.hasEventListener("touchRollOut")) {
					touchOutStack.push(item1);
				}
			}
		}
		if(target != touchOverTarget) {
			if(target != null) {
				touchEvent = (openfl_events_TouchEvent().default).__create("touchOver",null,touchX,touchY,target.__globalToLocal(targetPoint,localPoint),target);
				touchEvent.touchPointID = touchId;
				touchEvent.isPrimaryTouchPoint = isPrimaryTouchPoint;
				touchEvent.bubbles = true;
				touchEvent.pressure = touch.pressure;
				this.__dispatchTarget(target,touchEvent);
			}
			touchData.touchOverTarget = target;
		}
		(openfl_geom_Point().default).__pool.release(targetPoint);
		(openfl_geom_Point().default).__pool.release(localPoint);
		if(releaseTouchData) {
			this.__touchData.remove(touchId);
			touchData.reset();
			(openfl__$internal_utils_TouchData().default).__pool.release(touchData);
		}
	},
	__registerLimeModule: function(application) {
		application.onCreateWindow.add($bind(this,this.__onLimeCreateWindow));
		application.onUpdate.add($bind(this,this.__onLimeUpdate));
		application.onExit.add($bind(this,this.__onLimeModuleExit),false,0);
		var gamepad = (lime_ui_Gamepad().default).devices.iterator();
		while(gamepad.hasNext()) {
			var gamepad1 = gamepad.next();
			this.__onLimeGamepadConnect(gamepad1);
		}
		(lime_ui_Gamepad().default).onConnect.add($bind(this,this.__onLimeGamepadConnect));
		(lime_ui_Touch().default).onStart.add($bind(this,this.__onLimeTouchStart));
		(lime_ui_Touch().default).onMove.add($bind(this,this.__onLimeTouchMove));
		(lime_ui_Touch().default).onEnd.add($bind(this,this.__onLimeTouchEnd));
		(lime_ui_Touch().default).onCancel.add($bind(this,this.__onLimeTouchCancel));
	},
	__resize: function() {
		var cacheWidth = this.stageWidth;
		var cacheHeight = this.stageHeight;
		var windowWidth = (Std().default).int(this.window.get_width() * this.window.get_scale());
		var windowHeight = (Std().default).int(this.window.get_height() * this.window.get_scale());
		this.__logicalWidth = windowWidth;
		this.__logicalHeight = windowHeight;
		this.__displayMatrix.identity();
		if(this.get_fullScreenSourceRect() != null && this.window.get_fullscreen()) {
			this.stageWidth = (Std().default).int(this.get_fullScreenSourceRect().width);
			this.stageHeight = (Std().default).int(this.get_fullScreenSourceRect().height);
			var displayScaleX = windowWidth / this.stageWidth;
			var displayScaleY = windowHeight / this.stageHeight;
			this.__displayMatrix.translate(-this.get_fullScreenSourceRect().x,-this.get_fullScreenSourceRect().y);
			this.__displayMatrix.scale(displayScaleX,displayScaleY);
			this.__displayRect.setTo(this.get_fullScreenSourceRect().get_left(),this.get_fullScreenSourceRect().get_right(),this.get_fullScreenSourceRect().get_top(),this.get_fullScreenSourceRect().get_bottom());
		} else {
			if(this.__logicalWidth == 0 && this.__logicalHeight == 0) {
				this.stageWidth = windowWidth;
				this.stageHeight = windowHeight;
			} else {
				this.stageWidth = this.__logicalWidth;
				this.stageHeight = this.__logicalHeight;
				var scaleX = windowWidth / this.stageWidth;
				var scaleY = windowHeight / this.stageHeight;
				var targetScale = Math.min(scaleX,scaleY);
				var offsetX = Math.round((windowWidth - this.stageWidth * targetScale) / 2);
				var offsetY = Math.round((windowHeight - this.stageHeight * targetScale) / 2);
				this.__displayMatrix.scale(targetScale,targetScale);
				this.__displayMatrix.translate(offsetX,offsetY);
			}
			this.__displayRect.setTo(0,0,this.stageWidth,this.stageHeight);
		}
		if(this.context3D != null) {
			this.context3D.configureBackBuffer(windowWidth,windowHeight,0,true,true,true);
		}
		var stage3D = new (openfl__$Vector_VectorIterator().default)(this.stage3Ds);
		while(stage3D.hasNext()) {
			var stage3D1 = stage3D.next();
			stage3D1.__resize(windowWidth,windowHeight);
		}
		if(this.__renderer != null) {
			this.__renderer.__resize(windowWidth,windowHeight);
		}
		if(this.stageWidth != cacheWidth || this.stageHeight != cacheHeight) {
			this.__renderDirty = true;
			this.__setTransformDirty();
			var event = null;
			event = new (openfl_events_Event().default)("resize");
			this.__dispatchEvent(event);
		}
	},
	__setLogicalSize: function(width,height) {
		this.__logicalWidth = width;
		this.__logicalHeight = height;
		this.__resize();
	},
	__startDrag: function(sprite,lockCenter,bounds) {
		if(bounds == null) {
			this.__dragBounds = null;
		} else {
			this.__dragBounds = new (openfl_geom_Rectangle().default)();
			var right = bounds.get_right();
			var bottom = bounds.get_bottom();
			this.__dragBounds.x = right < bounds.x ? right : bounds.x;
			this.__dragBounds.y = bottom < bounds.y ? bottom : bounds.y;
			this.__dragBounds.width = Math.abs(bounds.width);
			this.__dragBounds.height = Math.abs(bounds.height);
		}
		this.__dragObject = sprite;
		if(this.__dragObject != null) {
			if(lockCenter) {
				this.__dragOffsetX = 0;
				this.__dragOffsetY = 0;
			} else {
				var mouse = (openfl_geom_Point().default).__pool.get();
				mouse.setTo(this.get_mouseX(),this.get_mouseY());
				var parent = this.__dragObject.parent;
				if(parent != null) {
					parent.__getWorldTransform().__transformInversePoint(mouse);
				}
				this.__dragOffsetX = this.__dragObject.get_x() - mouse.x;
				this.__dragOffsetY = this.__dragObject.get_y() - mouse.y;
				(openfl_geom_Point().default).__pool.release(mouse);
			}
		}
	},
	__stopDrag: function(sprite) {
		this.__dragBounds = null;
		this.__dragObject = null;
	},
	__unregisterLimeModule: function(application) {
		application.onCreateWindow.remove($bind(this,this.__onLimeCreateWindow));
		application.onUpdate.remove($bind(this,this.__onLimeUpdate));
		application.onExit.remove($bind(this,this.__onLimeModuleExit));
		(lime_ui_Gamepad().default).onConnect.remove($bind(this,this.__onLimeGamepadConnect));
		(lime_ui_Touch().default).onStart.remove($bind(this,this.__onLimeTouchStart));
		(lime_ui_Touch().default).onMove.remove($bind(this,this.__onLimeTouchMove));
		(lime_ui_Touch().default).onEnd.remove($bind(this,this.__onLimeTouchEnd));
		(lime_ui_Touch().default).onCancel.remove($bind(this,this.__onLimeTouchCancel));
	},
	__update: function(transformOnly,updateChildren) {
		if(transformOnly) {
			if(this.__transformDirty) {
				(openfl_display_DisplayObjectContainer().default).prototype.__update.call(this,true,updateChildren);
				if(updateChildren) {
					this.__transformDirty = false;
				}
			}
		} else if(this.__transformDirty || this.__renderDirty) {
			(openfl_display_DisplayObjectContainer().default).prototype.__update.call(this,false,updateChildren);
			if(updateChildren) {
				if((openfl_display_DisplayObject().default).__supportDOM) {
					this.__wasDirty = true;
				}
			}
		} else if(!this.__renderDirty && this.__wasDirty) {
			(openfl_display_DisplayObjectContainer().default).prototype.__update.call(this,false,updateChildren);
			if(updateChildren) {
				this.__wasDirty = false;
			}
		}
	},
	get_color: function() {
		return this.__color;
	},
	set_color: function(value) {
		if(value == null) {
			this.__transparent = true;
			value = 0;
		} else {
			this.__transparent = false;
		}
		if(this.__color != value) {
			var r = (value & 16711680) >>> 16;
			var g = (value & 65280) >>> 8;
			var b = value & 255;
			this.__colorSplit[0] = r / 255;
			this.__colorSplit[1] = g / 255;
			this.__colorSplit[2] = b / 255;
			this.__colorString = "#" + (StringTools().default).hex(value & 16777215,6);
			this.__renderDirty = true;
			this.__color = -16777216 | value & 16777215;
		}
		return value;
	},
	get_contentsScaleFactor: function() {
		return this.__contentsScaleFactor;
	},
	get_displayState: function() {
		return this.__displayState;
	},
	set_displayState: function(value) {
		if(this.window != null) {
			if(value == "normal") {
				if(this.window.get_fullscreen()) {
					this.window.set_fullscreen(false);
				}
			} else if(!this.window.get_fullscreen()) {
				this.window.set_fullscreen(true);
			}
		}
		return this.__displayState = value;
	},
	get_focus: function() {
		return this.__focus;
	},
	set_focus: function(value) {
		if(value != this.__focus) {
			var oldFocus = this.__focus;
			this.__focus = value;
			this.__cacheFocus = value;
			if(oldFocus != null) {
				var event = new (openfl_events_FocusEvent().default)("focusOut",true,false,value,false,0);
				var stack = [];
				oldFocus.__getInteractive(stack);
				stack.reverse();
				this.__dispatchStack(event,stack);
			}
			if(value != null) {
				var event1 = new (openfl_events_FocusEvent().default)("focusIn",true,false,oldFocus,false,0);
				var stack1 = [];
				value.__getInteractive(stack1);
				stack1.reverse();
				this.__dispatchStack(event1,stack1);
			}
		}
		return value;
	},
	get_frameRate: function() {
		if(this.window != null) {
			return this.window.get_frameRate();
		}
		return 0;
	},
	set_frameRate: function(value) {
		if(this.window != null) {
			return this.window.set_frameRate(value);
		}
		return value;
	},
	get_fullScreenHeight: function() {
		return Math.ceil(this.window.get_display().currentMode.height * this.window.get_scale());
	},
	get_fullScreenSourceRect: function() {
		if(this.__fullScreenSourceRect == null) {
			return null;
		} else {
			return this.__fullScreenSourceRect.clone();
		}
	},
	set_fullScreenSourceRect: function(value) {
		if(value == null) {
			if(this.__fullScreenSourceRect != null) {
				this.__fullScreenSourceRect = null;
				this.__resize();
			}
		} else if(!value.equals(this.__fullScreenSourceRect)) {
			this.__fullScreenSourceRect = value.clone();
			this.__resize();
		}
		return value;
	},
	get_fullScreenWidth: function() {
		return Math.ceil(this.window.get_display().currentMode.width * this.window.get_scale());
	},
	set_height: function(value) {
		return this.get_height();
	},
	get_mouseX: function() {
		return this.__mouseX;
	},
	get_mouseY: function() {
		return this.__mouseY;
	},
	get_quality: function() {
		return this.__quality;
	},
	set_quality: function(value) {
		this.__quality = value;
		if(this.__renderer != null) {
			var tmp = this.get_quality();
			this.__renderer.__allowSmoothing = tmp != "low";
		}
		return value;
	},
	set_rotation: function(value) {
		return 0;
	},
	get_scaleMode: function() {
		return this.__scaleMode;
	},
	set_scaleMode: function(value) {
		return this.__scaleMode = value;
	},
	set_scaleX: function(value) {
		return 0;
	},
	set_scaleY: function(value) {
		return 0;
	},
	get_tabEnabled: function() {
		return false;
	},
	set_tabEnabled: function(value) {
		throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)("Error: The Stage class does not implement this property or method."));
	},
	get_tabIndex: function() {
		return -1;
	},
	set_tabIndex: function(value) {
		throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IllegalOperationError().default)("Error: The Stage class does not implement this property or method."));
	},
	set_transform: function(value) {
		return this.get_transform();
	},
	set_width: function(value) {
		return this.get_width();
	},
	set_x: function(value) {
		return 0;
	},
	set_y: function(value) {
		return 0;
	}
});
Stage.prototype.__class__ = Stage.prototype.constructor = $hxClasses["openfl.display.Stage"] = Stage;

// Init

Object.defineProperties(Stage.prototype,{ color : { get : function () { return this.get_color (); }, set : function (v) { return this.set_color (v); }}, contentsScaleFactor : { get : function () { return this.get_contentsScaleFactor (); }}, displayState : { get : function () { return this.get_displayState (); }, set : function (v) { return this.set_displayState (v); }}, focus : { get : function () { return this.get_focus (); }, set : function (v) { return this.set_focus (v); }}, frameRate : { get : function () { return this.get_frameRate (); }, set : function (v) { return this.set_frameRate (v); }}, fullScreenHeight : { get : function () { return this.get_fullScreenHeight (); }}, fullScreenWidth : { get : function () { return this.get_fullScreenWidth (); }}, quality : { get : function () { return this.get_quality (); }, set : function (v) { return this.set_quality (v); }}, scaleMode : { get : function () { return this.get_scaleMode (); }, set : function (v) { return this.set_scaleMode (v); }}});

// Statics


Stage.__meta__ = { fields : { __broadcastEvent : { SuppressWarnings : ["checkstyle:Dynamic"]}, __dispatchEvent : { SuppressWarnings : [["checkstyle:Dynamic","checkstyle:LeftCurly"]]}, __dispatchStack : { SuppressWarnings : [["checkstyle:Dynamic","checkstyle:LeftCurly"]]}, __dispatchTarget : { SuppressWarnings : ["checkstyle:Dynamic"]}, __handleError : { SuppressWarnings : ["checkstyle:Dynamic"]}}}

// Export

exports.default = Stage;