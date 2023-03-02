// Class: lime._internal.backend.html5.HTML5Window

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
var $bind = require("./../../../../bind_stub").default;
function js_Browser() {return require("./../../../../js/Browser");}
function lime_graphics_RenderContext() {return require("./../../../../lime/graphics/RenderContext");}
function Reflect() {return require("./../../../../Reflect");}
function lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$() {return require("./../../../../lime/graphics/_WebGLRenderContext/WebGLRenderContext_Impl_");}
function lime_graphics_opengl_GL() {return require("./../../../../lime/graphics/opengl/GL");}
function lime_system_System() {return require("./../../../../lime/system/System");}
function lime_system_Clipboard() {return require("./../../../../lime/system/Clipboard");}
function js_Boot() {return require("./../../../../js/Boot");}
function haxe_Timer() {return require("./../../../../haxe/Timer");}
function lime_ui_Joystick() {return require("./../../../../lime/ui/Joystick");}
function lime_ui_Gamepad() {return require("./../../../../lime/ui/Gamepad");}
function StringTools() {return require("./../../../../StringTools");}
function lime_ui_MouseWheelMode() {return require("./../../../../lime/ui/MouseWheelMode");}
function lime_ui_Touch() {return require("./../../../../lime/ui/Touch");}
function lime_math_Rectangle() {return require("./../../../../lime/math/Rectangle");}
function Std() {return require("./../../../../Std");}
function lime_graphics_Image() {return require("./../../../../lime/graphics/Image");}
function lime__$internal_graphics_ImageCanvasUtil() {return require("./../../../../lime/_internal/graphics/ImageCanvasUtil");}
function EReg() {return require("./../../../../EReg");}
function haxe_ds_List() {return require("./../../../../haxe/ds/List");}
function haxe_ds_IntMap() {return require("./../../../../haxe/ds/IntMap");}
function lime_ui_MouseCursor() {return require("./../../../../lime/ui/MouseCursor");}

// Constructor

var HTML5Window = function(parent) {
	this.unusedTouchesPool = new (haxe_ds_List().default)();
	this.scale = 1.0;
	this.currentTouches = new (haxe_ds_IntMap().default)();
	this.parent = parent;
	this.cursor = (lime_ui_MouseCursor().default).DEFAULT;
	this.cacheMouseX = 0;
	this.cacheMouseY = 0;
	var attributes = parent.__attributes;
	if(!(Reflect().default).hasField(attributes,"context")) {
		attributes.context = { };
	}
	this.renderType = attributes.context.type;
	if((Reflect().default).hasField(attributes,"element")) {
		parent.element = attributes.element;
	}
	var element = parent.element;
	if((Reflect().default).hasField(attributes,"allowHighDPI") && attributes.allowHighDPI && this.renderType != "dom") {
		this.scale = window.devicePixelRatio;
	}
	parent.__scale = this.scale;
	this.setWidth = (Reflect().default).hasField(attributes,"width") ? attributes.width : 0;
	this.setHeight = (Reflect().default).hasField(attributes,"height") ? attributes.height : 0;
	parent.__width = this.setWidth;
	parent.__height = this.setHeight;
	parent.id = HTML5Window.windowID++;
	if(((element) instanceof HTMLCanvasElement)) {
		this.canvas = element;
	} else if(this.renderType == "dom") {
		this.div = window.document.createElement("div");
	} else {
		this.canvas = window.document.createElement("canvas");
	}
	if(this.canvas != null) {
		var style = this.canvas.style;
		style.setProperty("-webkit-transform","translateZ(0)",null);
		style.setProperty("transform","translateZ(0)",null);
	} else if(this.div != null) {
		var style1 = this.div.style;
		style1.setProperty("-webkit-transform","translate3D(0,0,0)",null);
		style1.setProperty("transform","translate3D(0,0,0)",null);
		style1.position = "relative";
		style1.overflow = "hidden";
		style1.setProperty("-webkit-user-select","none",null);
		style1.setProperty("-moz-user-select","none",null);
		style1.setProperty("-ms-user-select","none",null);
		style1.setProperty("-o-user-select","none",null);
	}
	if(parent.__width == 0 && parent.__height == 0) {
		if(element != null) {
			parent.__width = element.clientWidth;
			parent.__height = element.clientHeight;
		} else {
			parent.__width = window.innerWidth;
			parent.__height = window.innerHeight;
		}
		this.cacheElementWidth = parent.__width;
		this.cacheElementHeight = parent.__height;
		this.resizeElement = true;
	}
	if(this.canvas != null) {
		this.canvas.width = Math.round(parent.__width * this.scale);
		this.canvas.height = Math.round(parent.__height * this.scale);
		this.canvas.style.width = parent.__width + "px";
		this.canvas.style.height = parent.__height + "px";
	} else {
		this.div.style.width = parent.__width + "px";
		this.div.style.height = parent.__height + "px";
	}
	if((Reflect().default).hasField(attributes,"resizable") && attributes.resizable || !(Reflect().default).hasField(attributes,"width") && this.setWidth == 0 && this.setHeight == 0) {
		parent.__resizable = true;
	}
	this.updateSize();
	if(element != null) {
		if(this.canvas != null) {
			if(element != this.canvas) {
				element.appendChild(this.canvas);
			}
		} else {
			element.appendChild(this.div);
		}
		var events = ["mousedown","mouseenter","mouseleave","mousemove","mouseup","wheel"];
		var _g = 0;
		while(_g < events.length) {
			var event = events[_g];
			++_g;
			element.addEventListener(event,$bind(this,this.handleMouseEvent),true);
		}
		element.addEventListener("contextmenu",$bind(this,this.handleContextMenuEvent),true);
		element.addEventListener("dragstart",$bind(this,this.handleDragEvent),true);
		element.addEventListener("dragover",$bind(this,this.handleDragEvent),true);
		element.addEventListener("drop",$bind(this,this.handleDragEvent),true);
		element.addEventListener("touchstart",$bind(this,this.handleTouchEvent),true);
		element.addEventListener("touchmove",$bind(this,this.handleTouchEvent),true);
		element.addEventListener("touchend",$bind(this,this.handleTouchEvent),true);
		element.addEventListener("touchcancel",$bind(this,this.handleTouchEvent),true);
		element.addEventListener("gamepadconnected",$bind(this,this.handleGamepadEvent),true);
		element.addEventListener("gamepaddisconnected",$bind(this,this.handleGamepadEvent),true);
	}
	this.createContext();
	if(parent.context.type == "webgl") {
		this.canvas.addEventListener("webglcontextlost",$bind(this,this.handleContextEvent),false);
		this.canvas.addEventListener("webglcontextrestored",$bind(this,this.handleContextEvent),false);
	}
}

// Meta

HTML5Window.__name__ = "lime._internal.backend.html5.HTML5Window";
HTML5Window.__isInterface__ = false;
HTML5Window.prototype = {
	alert: function(message,title) {
		if(message != null) {
			(js_Browser().default).alert(message);
		}
	},
	close: function() {
		this.parent.application.__removeWindow(this.parent);
	},
	createContext: function() {
		var context = new (lime_graphics_RenderContext().default)();
		var contextAttributes = this.parent.__attributes.context;
		context.window = this.parent;
		context.attributes = contextAttributes;
		if(this.div != null) {
			context.dom = this.div;
			context.type = "dom";
			context.version = "";
		} else if(this.canvas != null) {
			var webgl = null;
			var forceCanvas = this.renderType == "canvas";
			var forceWebGL = this.renderType == "opengl" || this.renderType == "opengles" || this.renderType == "webgl";
			var allowWebGL2 = false;
			var isWebGL2 = false;
			if(forceWebGL || !forceCanvas && (!(Reflect().default).hasField(contextAttributes,"hardware") || contextAttributes.hardware)) {
				var transparentBackground = (Reflect().default).hasField(contextAttributes,"background") && contextAttributes.background == null;
				var colorDepth = (Reflect().default).hasField(contextAttributes,"colorDepth") ? contextAttributes.colorDepth : 16;
				var options = { alpha : transparentBackground || colorDepth > 16, antialias : (Reflect().default).hasField(contextAttributes,"antialiasing") && contextAttributes.antialiasing > 0, depth : (Reflect().default).hasField(contextAttributes,"depth") ? contextAttributes.depth : true, premultipliedAlpha : true, stencil : (Reflect().default).hasField(contextAttributes,"stencil") && contextAttributes.stencil, preserveDrawingBuffer : false, failIfMajorPerformanceCaveat : true};
				var glContextType = ["webgl","experimental-webgl"];
				if(allowWebGL2) {
					glContextType.unshift("webgl2");
				}
				var _g = 0;
				while(_g < glContextType.length) {
					var name = glContextType[_g];
					++_g;
					webgl = this.canvas.getContext(name,options);
					if(webgl != null && name == "webgl2") {
						isWebGL2 = true;
					}
					if(webgl != null) {
						break;
					}
				}
			}
			if(webgl == null) {
				context.canvas2D = this.canvas.getContext("2d");
				context.type = "canvas";
				context.version = "";
			} else {
				context.webgl = (lime_graphics__$WebGLRenderContext_WebGLRenderContext_$Impl_$().default).fromWebGL2RenderContext(webgl);
				if(isWebGL2) {
					context.webgl2 = webgl;
				}
				if((lime_graphics_opengl_GL().default).context == null) {
					(lime_graphics_opengl_GL().default).context = webgl;
					(lime_graphics_opengl_GL().default).type = "webgl";
					(lime_graphics_opengl_GL().default).version = isWebGL2 ? 2 : 1;
				}
				context.type = "webgl";
				context.version = isWebGL2 ? "2" : "1";
			}
		}
		this.parent.context = context;
	},
	focus: function() {
	},
	getCursor: function() {
		return this.cursor;
	},
	getDisplay: function() {
		return (lime_system_System().default).getDisplay(0);
	},
	getDisplayMode: function() {
		return (lime_system_System().default).getDisplay(0).currentMode;
	},
	getFrameRate: function() {
		if(this.parent.application == null) {
			return 0;
		}
		if(this.parent.application.__backend.framePeriod < 0) {
			return 60;
		} else if(this.parent.application.__backend.framePeriod == 1000) {
			return 0;
		} else {
			return 1000 / this.parent.application.__backend.framePeriod;
		}
	},
	getMouseLock: function() {
		return false;
	},
	getTextInputEnabled: function() {
		return this.textInputEnabled;
	},
	handleContextEvent: function(event) {
		switch(event.type) {
		case "webglcontextlost":
			if(event.cancelable) {
				event.preventDefault();
			}
			var tmp = (lime_graphics_opengl_GL().default).context != null;
			this.parent.context = null;
			this.parent.onRenderContextLost.dispatch();
			break;
		case "webglcontextrestored":
			this.createContext();
			this.parent.onRenderContextRestored.dispatch(this.parent.context);
			break;
		default:
		}
	},
	handleContextMenuEvent: function(event) {
		if((this.parent.onMouseUp.canceled || this.parent.onMouseDown.canceled) && event.cancelable) {
			event.preventDefault();
		}
	},
	handleCutOrCopyEvent: function(event) {
		event.clipboardData.setData("text/plain",(lime_system_Clipboard().default).get_text());
		if(event.cancelable) {
			event.preventDefault();
		}
	},
	handleDragEvent: function(event) {
		switch(event.type) {
		case "dragover":
			event.preventDefault();
			return false;
		case "dragstart":
			if(((js_Boot().default).__cast(event.target , HTMLElement)).nodeName.toLowerCase() == "img" && event.cancelable) {
				event.preventDefault();
				return false;
			}
			break;
		case "drop":
			if(event.dataTransfer != null && event.dataTransfer.files.length > 0) {
				this.parent.onDropFile.dispatch(event.dataTransfer.files);
				event.preventDefault();
				return false;
			}
			break;
		}
		return true;
	},
	handleFocusEvent: function(event) {
		var _gthis = this;
		if(this.textInputEnabled) {
			if(event.relatedTarget == null || this.isDescendent(event.relatedTarget)) {
				(haxe_Timer().default).delay(function() {
					if(_gthis.textInputEnabled) {
						HTML5Window.textInput.focus();
					}
				},20);
			}
		}
	},
	handleFullscreenEvent: function(event) {
		var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
		if(fullscreenElement != null) {
			this.isFullscreen = true;
			this.parent.__fullscreen = true;
			if(this.requestedFullscreen) {
				this.requestedFullscreen = false;
				this.parent.onFullscreen.dispatch();
			}
		} else {
			this.isFullscreen = false;
			this.parent.__fullscreen = false;
			this.parent.onRestore.dispatch();
			var changeEvents = ["fullscreenchange","mozfullscreenchange","webkitfullscreenchange","MSFullscreenChange"];
			var errorEvents = ["fullscreenerror","mozfullscreenerror","webkitfullscreenerror","MSFullscreenError"];
			var _g = 0;
			var _g1 = changeEvents.length;
			while(_g < _g1) {
				var i = _g++;
				window.document.removeEventListener(changeEvents[i],$bind(this,this.handleFullscreenEvent),false);
				window.document.removeEventListener(errorEvents[i],$bind(this,this.handleFullscreenEvent),false);
			}
		}
	},
	handleGamepadEvent: function(event) {
		switch(event.type) {
		case "gamepadconnected":
			(lime_ui_Joystick().default).__connect(event.gamepad.index);
			if(event.gamepad.mapping == "standard") {
				(lime_ui_Gamepad().default).__connect(event.gamepad.index);
			}
			break;
		case "gamepaddisconnected":
			(lime_ui_Joystick().default).__disconnect(event.gamepad.index);
			(lime_ui_Gamepad().default).__disconnect(event.gamepad.index);
			break;
		default:
		}
	},
	handleInputEvent: function(event) {
		if(HTML5Window.textInput.value != HTML5Window.dummyCharacter) {
			var value = (StringTools().default).replace(HTML5Window.textInput.value,HTML5Window.dummyCharacter,"");
			if(value.length > 0) {
				this.parent.onTextInput.dispatch(value);
			}
			HTML5Window.textInput.value = HTML5Window.dummyCharacter;
		}
	},
	handleMouseEvent: function(event) {
		var x = 0.0;
		var y = 0.0;
		if(event.type != "wheel") {
			if(this.parent.element != null) {
				if(this.canvas != null) {
					var rect = this.canvas.getBoundingClientRect();
					x = (event.clientX - rect.left) * (this.parent.__width / rect.width);
					y = (event.clientY - rect.top) * (this.parent.__height / rect.height);
				} else if(this.div != null) {
					var rect1 = this.div.getBoundingClientRect();
					x = event.clientX - rect1.left;
					y = event.clientY - rect1.top;
				} else {
					var rect2 = this.parent.element.getBoundingClientRect();
					x = (event.clientX - rect2.left) * (this.parent.__width / rect2.width);
					y = (event.clientY - rect2.top) * (this.parent.__height / rect2.height);
				}
			} else {
				x = event.clientX;
				y = event.clientY;
			}
			switch(event.type) {
			case "mousedown":
				if(event.currentTarget == this.parent.element) {
					window.addEventListener("mouseup",$bind(this,this.handleMouseEvent));
				}
				this.parent.onMouseDown.dispatch(x,y,event.button);
				if(this.parent.onMouseDown.canceled && event.cancelable) {
					event.preventDefault();
				}
				break;
			case "mouseenter":
				if(event.target == this.parent.element) {
					this.parent.onEnter.dispatch();
					if(this.parent.onEnter.canceled && event.cancelable) {
						event.preventDefault();
					}
				}
				break;
			case "mouseleave":
				if(event.target == this.parent.element) {
					this.parent.onLeave.dispatch();
					if(this.parent.onLeave.canceled && event.cancelable) {
						event.preventDefault();
					}
				}
				break;
			case "mousemove":
				if(x != this.cacheMouseX || y != this.cacheMouseY) {
					this.parent.onMouseMove.dispatch(x,y);
					this.parent.onMouseMoveRelative.dispatch(x - this.cacheMouseX,y - this.cacheMouseY);
					if((this.parent.onMouseMove.canceled || this.parent.onMouseMoveRelative.canceled) && event.cancelable) {
						event.preventDefault();
					}
				}
				break;
			case "mouseup":
				window.removeEventListener("mouseup",$bind(this,this.handleMouseEvent));
				if(event.currentTarget == this.parent.element) {
					event.stopPropagation();
				}
				this.parent.onMouseUp.dispatch(x,y,event.button);
				if(this.parent.onMouseUp.canceled && event.cancelable) {
					event.preventDefault();
				}
				break;
			default:
			}
			this.cacheMouseX = x;
			this.cacheMouseY = y;
		} else {
			var deltaMode;
			switch(event.deltaMode) {
			case 0:
				deltaMode = (lime_ui_MouseWheelMode().default).PIXELS;
				break;
			case 1:
				deltaMode = (lime_ui_MouseWheelMode().default).LINES;
				break;
			case 2:
				deltaMode = (lime_ui_MouseWheelMode().default).PAGES;
				break;
			default:
				deltaMode = (lime_ui_MouseWheelMode().default).UNKNOWN;
			}
			this.parent.onMouseWheel.dispatch(event.deltaX,-event.deltaY,deltaMode);
			if(this.parent.onMouseWheel.canceled && event.cancelable) {
				event.preventDefault();
			}
		}
	},
	handlePasteEvent: function(event) {
		if(event.clipboardData.types.indexOf("text/plain") > -1) {
			var text = event.clipboardData.getData("text/plain");
			(lime_system_Clipboard().default).set_text(text);
			if(this.textInputEnabled) {
				this.parent.onTextInput.dispatch(text);
			}
			if(event.cancelable) {
				event.preventDefault();
			}
		}
	},
	handleResizeEvent: function(event) {
		this.primaryTouch = null;
		this.updateSize();
	},
	handleTouchEvent: function(event) {
		if(event.cancelable) {
			event.preventDefault();
		}
		var rect = null;
		if(this.parent.element != null) {
			if(this.canvas != null) {
				rect = this.canvas.getBoundingClientRect();
			} else if(this.div != null) {
				rect = this.div.getBoundingClientRect();
			} else {
				rect = this.parent.element.getBoundingClientRect();
			}
		}
		var windowWidth = this.setWidth;
		var windowHeight = this.setHeight;
		if(windowWidth == 0 || windowHeight == 0) {
			if(rect != null) {
				windowWidth = rect.width;
				windowHeight = rect.height;
			} else {
				windowWidth = 1;
				windowHeight = 1;
			}
		}
		var touch;
		var x;
		var y;
		var cacheX;
		var cacheY;
		var _g = 0;
		var _g1 = event.changedTouches;
		while(_g < _g1.length) {
			var data = _g1[_g];
			++_g;
			x = 0.0;
			y = 0.0;
			if(rect != null) {
				x = (data.clientX - rect.left) * (windowWidth / rect.width);
				y = (data.clientY - rect.top) * (windowHeight / rect.height);
			} else {
				x = data.clientX;
				y = data.clientY;
			}
			if(event.type == "touchstart") {
				touch = this.unusedTouchesPool.pop();
				if(touch == null) {
					touch = new (lime_ui_Touch().default)(x / windowWidth,y / windowHeight,data.identifier,0,0,data.force,this.parent.id);
				} else {
					touch.x = x / windowWidth;
					touch.y = y / windowHeight;
					touch.id = data.identifier;
					touch.dx = 0;
					touch.dy = 0;
					touch.pressure = data.force;
					touch.device = this.parent.id;
				}
				this.currentTouches.set(data.identifier,touch);
				(lime_ui_Touch().default).onStart.dispatch(touch);
				if(this.primaryTouch == null) {
					this.primaryTouch = touch;
				}
				if(touch == this.primaryTouch) {
					this.parent.onMouseDown.dispatch(x,y,0);
				}
			} else {
				touch = this.currentTouches.get(data.identifier);
				if(touch != null) {
					cacheX = touch.x;
					cacheY = touch.y;
					touch.x = x / windowWidth;
					touch.y = y / windowHeight;
					touch.dx = touch.x - cacheX;
					touch.dy = touch.y - cacheY;
					touch.pressure = data.force;
					switch(event.type) {
					case "touchcancel":
						(lime_ui_Touch().default).onCancel.dispatch(touch);
						this.currentTouches.remove(data.identifier);
						this.unusedTouchesPool.add(touch);
						if(touch == this.primaryTouch) {
							this.primaryTouch = null;
						}
						break;
					case "touchend":
						(lime_ui_Touch().default).onEnd.dispatch(touch);
						this.currentTouches.remove(data.identifier);
						this.unusedTouchesPool.add(touch);
						if(touch == this.primaryTouch) {
							this.parent.onMouseUp.dispatch(x,y,0);
							this.primaryTouch = null;
						}
						break;
					case "touchmove":
						(lime_ui_Touch().default).onMove.dispatch(touch);
						if(touch == this.primaryTouch) {
							this.parent.onMouseMove.dispatch(x,y);
						}
						break;
					default:
					}
				}
			}
		}
	},
	isDescendent: function(node) {
		if(node == this.parent.element) {
			return true;
		}
		while(node != null) {
			if(node.parentNode == this.parent.element) {
				return true;
			}
			node = node.parentNode;
		}
		return false;
	},
	move: function(x,y) {
	},
	readPixels: function(rect) {
		if(this.canvas != null) {
			var stageRect = new (lime_math_Rectangle().default)(0,0,this.canvas.width,this.canvas.height);
			if(rect == null) {
				rect = stageRect;
			} else {
				rect.intersection(stageRect,rect);
			}
			if(rect.width > 0 && rect.height > 0) {
				var canvas2 = window.document.createElement("canvas");
				canvas2.width = (Std().default).int(rect.width);
				canvas2.height = (Std().default).int(rect.height);
				var context = canvas2.getContext("2d");
				context.drawImage(this.canvas,-rect.x,-rect.y);
				return (lime_graphics_Image().default).fromCanvas(canvas2);
			}
		}
		return null;
	},
	resize: function(width,height) {
	},
	setBorderless: function(value) {
		return value;
	},
	setClipboard: function(value) {
		if(HTML5Window.textArea == null) {
			HTML5Window.textArea = window.document.createElement("textarea");
			HTML5Window.textArea.style.height = "0px";
			HTML5Window.textArea.style.left = "-100px";
			HTML5Window.textArea.style.opacity = "0";
			HTML5Window.textArea.style.position = "fixed";
			HTML5Window.textArea.style.top = "-100px";
			HTML5Window.textArea.style.width = "0px";
			window.document.body.appendChild(HTML5Window.textArea);
		}
		HTML5Window.textArea.value = value;
		HTML5Window.textArea.focus();
		HTML5Window.textArea.select();
		if(window.document.queryCommandEnabled("copy")) {
			window.document.execCommand("copy");
		}
	},
	setCursor: function(value) {
		if(this.cursor != value) {
			if(value == null) {
				this.parent.element.style.cursor = "none";
			} else {
				var tmp;
				switch(value._hx_index) {
				case 0:
					tmp = "default";
					break;
				case 1:
					tmp = "crosshair";
					break;
				case 3:
					tmp = "move";
					break;
				case 4:
					tmp = "pointer";
					break;
				case 5:
					tmp = "nesw-resize";
					break;
				case 6:
					tmp = "ns-resize";
					break;
				case 7:
					tmp = "nwse-resize";
					break;
				case 8:
					tmp = "ew-resize";
					break;
				case 9:
					tmp = "text";
					break;
				case 10:
					tmp = "wait";
					break;
				case 11:
					tmp = "wait";
					break;
				default:
					tmp = "auto";
				}
				this.parent.element.style.cursor = tmp;
			}
			this.cursor = value;
		}
		return this.cursor;
	},
	setDisplayMode: function(value) {
		return value;
	},
	setFrameRate: function(value) {
		if(this.parent.application != null) {
			if(value >= 60) {
				if(this.parent == this.parent.application.get_window()) {
					this.parent.application.__backend.framePeriod = -1;
				}
			} else if(value > 0) {
				if(this.parent == this.parent.application.get_window()) {
					this.parent.application.__backend.framePeriod = 1000 / value;
				}
			} else if(this.parent == this.parent.application.get_window()) {
				this.parent.application.__backend.framePeriod = 1000;
			}
		}
		return value;
	},
	setFullscreen: function(value) {
		if(value) {
			if(!this.requestedFullscreen && !this.isFullscreen) {
				this.requestedFullscreen = true;
				if(($_=this.parent.element,$bind($_,$_.requestFullscreen))) {
					document.addEventListener("fullscreenchange",$bind(this,this.handleFullscreenEvent),false);
					document.addEventListener("fullscreenerror",$bind(this,this.handleFullscreenEvent),false);
					this.parent.element.requestFullscreen();
				} else if(this.parent.element.mozRequestFullScreen) {
					document.addEventListener("mozfullscreenchange",$bind(this,this.handleFullscreenEvent),false);
					document.addEventListener("mozfullscreenerror",$bind(this,this.handleFullscreenEvent),false);
					this.parent.element.mozRequestFullScreen();
				} else if(this.parent.element.webkitRequestFullscreen) {
					document.addEventListener("webkitfullscreenchange",$bind(this,this.handleFullscreenEvent),false);
					document.addEventListener("webkitfullscreenerror",$bind(this,this.handleFullscreenEvent),false);
					this.parent.element.webkitRequestFullscreen();
				} else if(this.parent.element.msRequestFullscreen) {
					document.addEventListener("MSFullscreenChange",$bind(this,this.handleFullscreenEvent),false);
					document.addEventListener("MSFullscreenError",$bind(this,this.handleFullscreenEvent),false);
					this.parent.element.msRequestFullscreen();
				}
			}
		} else if(this.isFullscreen) {
			this.requestedFullscreen = false;
			if(document.exitFullscreen) {
				document.exitFullscreen();
			} else if(document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if(document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if(document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
		return value;
	},
	setIcon: function(image) {
		(lime__$internal_graphics_ImageCanvasUtil().default).convertToCanvas(image);
		var link = window.document.querySelector("link[rel*='icon']");
		if(link == null) {
			link = window.document.createElement("link");
		}
		link.type = "image/x-icon";
		link.rel = "shortcut icon";
		link.href = image.buffer.get_src().toDataURL("image/x-icon");
		window.document.getElementsByTagName("head")[0].appendChild(link);
	},
	setMaximized: function(value) {
		return false;
	},
	setMinimized: function(value) {
		return false;
	},
	setMouseLock: function(value) {
	},
	setResizable: function(value) {
		return value;
	},
	setTextInputEnabled: function(value) {
		if(value) {
			if(HTML5Window.textInput == null) {
				HTML5Window.textInput = window.document.createElement("input");
				HTML5Window.textInput.type = "text";
				HTML5Window.textInput.style.position = "absolute";
				HTML5Window.textInput.style.opacity = "0";
				HTML5Window.textInput.style.color = "transparent";
				HTML5Window.textInput.value = HTML5Window.dummyCharacter;
				HTML5Window.textInput.autocapitalize = "off";
				HTML5Window.textInput.autocorrect = "off";
				HTML5Window.textInput.autocomplete = "off";
				HTML5Window.textInput.style.left = "0px";
				HTML5Window.textInput.style.top = "50%";
				if(new (EReg().default)("(iPad|iPhone|iPod).*OS 8_","gi").match(window.navigator.userAgent)) {
					HTML5Window.textInput.style.fontSize = "0px";
					HTML5Window.textInput.style.width = "0px";
					HTML5Window.textInput.style.height = "0px";
				} else {
					HTML5Window.textInput.style.width = "1px";
					HTML5Window.textInput.style.height = "1px";
				}
				HTML5Window.textInput.style.pointerEvents = "none";
				HTML5Window.textInput.style.zIndex = "-10000000";
			}
			if(HTML5Window.textInput.parentNode == null) {
				this.parent.element.appendChild(HTML5Window.textInput);
			}
			if(!this.textInputEnabled) {
				HTML5Window.textInput.addEventListener("input",$bind(this,this.handleInputEvent),true);
				HTML5Window.textInput.addEventListener("blur",$bind(this,this.handleFocusEvent),true);
				HTML5Window.textInput.addEventListener("cut",$bind(this,this.handleCutOrCopyEvent),true);
				HTML5Window.textInput.addEventListener("copy",$bind(this,this.handleCutOrCopyEvent),true);
				HTML5Window.textInput.addEventListener("paste",$bind(this,this.handlePasteEvent),true);
			}
			HTML5Window.textInput.focus();
			HTML5Window.textInput.select();
		} else if(HTML5Window.textInput != null) {
			HTML5Window.textInput.removeEventListener("input",$bind(this,this.handleInputEvent),true);
			HTML5Window.textInput.removeEventListener("blur",$bind(this,this.handleFocusEvent),true);
			HTML5Window.textInput.removeEventListener("cut",$bind(this,this.handleCutOrCopyEvent),true);
			HTML5Window.textInput.removeEventListener("copy",$bind(this,this.handleCutOrCopyEvent),true);
			HTML5Window.textInput.removeEventListener("paste",$bind(this,this.handlePasteEvent),true);
			HTML5Window.textInput.blur();
		}
		return this.textInputEnabled = value;
	},
	setTitle: function(value) {
		if(value != null) {
			window.document.title = value;
		}
		return value;
	},
	updateSize: function() {
		if(!this.parent.__resizable) {
			return;
		}
		var elementWidth;
		var elementHeight;
		if(this.parent.element != null) {
			elementWidth = this.parent.element.clientWidth;
			elementHeight = this.parent.element.clientHeight;
		} else {
			elementWidth = window.innerWidth;
			elementHeight = window.innerHeight;
		}
		if(elementWidth != this.cacheElementWidth || elementHeight != this.cacheElementHeight) {
			this.cacheElementWidth = elementWidth;
			this.cacheElementHeight = elementHeight;
			var stretch = this.resizeElement || this.setWidth == 0 && this.setHeight == 0;
			if(this.parent.element != null && (this.div == null || this.div != null && stretch)) {
				if(stretch) {
					if(this.parent.__width != elementWidth || this.parent.__height != elementHeight) {
						this.parent.__width = elementWidth;
						this.parent.__height = elementHeight;
						if(this.canvas != null) {
							if(this.parent.element != this.canvas) {
								this.canvas.width = Math.round(elementWidth * this.scale);
								this.canvas.height = Math.round(elementHeight * this.scale);
								this.canvas.style.width = elementWidth + "px";
								this.canvas.style.height = elementHeight + "px";
							}
						} else {
							this.div.style.width = elementWidth + "px";
							this.div.style.height = elementHeight + "px";
						}
						this.parent.onResize.dispatch(elementWidth,elementHeight);
					}
				} else {
					var scaleX = this.setWidth != 0 ? elementWidth / this.setWidth : 1;
					var scaleY = this.setHeight != 0 ? elementHeight / this.setHeight : 1;
					var targetWidth = elementWidth;
					var targetHeight = elementHeight;
					var marginLeft = 0;
					var marginTop = 0;
					if(scaleX < scaleY) {
						targetHeight = Math.floor(this.setHeight * scaleX);
						marginTop = Math.floor((elementHeight - targetHeight) / 2);
					} else {
						targetWidth = Math.floor(this.setWidth * scaleY);
						marginLeft = Math.floor((elementWidth - targetWidth) / 2);
					}
					if(this.canvas != null) {
						if(this.parent.element != this.canvas) {
							this.canvas.style.width = targetWidth + "px";
							this.canvas.style.height = targetHeight + "px";
							this.canvas.style.marginLeft = marginLeft + "px";
							this.canvas.style.marginTop = marginTop + "px";
						}
					} else {
						this.div.style.width = targetWidth + "px";
						this.div.style.height = targetHeight + "px";
						this.div.style.marginLeft = marginLeft + "px";
						this.div.style.marginTop = marginTop + "px";
					}
				}
			}
		}
	},
	warpMouse: function(x,y) {
	}
};
HTML5Window.prototype.__class__ = HTML5Window.prototype.constructor = $hxClasses["lime._internal.backend.html5.HTML5Window"] = HTML5Window;

// Init



// Statics


HTML5Window.dummyCharacter = ""
HTML5Window.windowID = 0

// Export

exports.default = HTML5Window;