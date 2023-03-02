// Class: lime.ui.Window

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_app__$Event_$String_$Void() {return require("./../../lime/app/_Event_String_Void");}
function lime_app__$Event_$String_$Int_$Int_$Void() {return require("./../../lime/app/_Event_String_Int_Int_Void");}
function lime_app__$Event_$Void_$Void() {return require("./../../lime/app/_Event_Void_Void");}
function lime_app__$Event_$Int_$Int_$Void() {return require("./../../lime/app/_Event_Int_Int_Void");}
function lime_app__$Event_$lime_$graphics_$RenderContext_$Void() {return require("./../../lime/app/_Event_lime_graphics_RenderContext_Void");}
function lime_app__$Event_$Float_$Float_$Void() {return require("./../../lime/app/_Event_Float_Float_Void");}
function lime_app__$Event_$Float_$Float_$lime_$ui_$MouseWheelMode_$Void() {return require("./../../lime/app/_Event_Float_Float_lime_ui_MouseWheelMode_Void");}
function lime_app__$Event_$Float_$Float_$Int_$Void() {return require("./../../lime/app/_Event_Float_Float_Int_Void");}
function lime_app__$Event_$Float_$Float_$lime_$ui_$MouseButton_$Void() {return require("./../../lime/app/_Event_Float_Float_lime_ui_MouseButton_Void");}
function lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void() {return require("./../../lime/app/_Event_lime_ui_KeyCode_lime_ui_KeyModifier_Void");}
function Reflect() {return require("./../../Reflect");}
function lime__$internal_backend_html5_HTML5Window() {return require("./../../lime/_internal/backend/html5/HTML5Window");}

// Constructor

var Window = function(application,attributes) {
	this.onTextInput = new (lime_app__$Event_$String_$Void().default)();
	this.onTextEdit = new (lime_app__$Event_$String_$Int_$Int_$Void().default)();
	this.onRestore = new (lime_app__$Event_$Void_$Void().default)();
	this.onResize = new (lime_app__$Event_$Int_$Int_$Void().default)();
	this.onRenderContextRestored = new (lime_app__$Event_$lime_$graphics_$RenderContext_$Void().default)();
	this.onRenderContextLost = new (lime_app__$Event_$Void_$Void().default)();
	this.onRender = new (lime_app__$Event_$lime_$graphics_$RenderContext_$Void().default)();
	this.onMove = new (lime_app__$Event_$Float_$Float_$Void().default)();
	this.onMouseWheel = new (lime_app__$Event_$Float_$Float_$lime_$ui_$MouseWheelMode_$Void().default)();
	this.onMouseUp = new (lime_app__$Event_$Float_$Float_$Int_$Void().default)();
	this.onMouseMoveRelative = new (lime_app__$Event_$Float_$Float_$Void().default)();
	this.onMouseMove = new (lime_app__$Event_$Float_$Float_$Void().default)();
	this.onMouseDown = new (lime_app__$Event_$Float_$Float_$lime_$ui_$MouseButton_$Void().default)();
	this.onMinimize = new (lime_app__$Event_$Void_$Void().default)();
	this.onMaximize = new (lime_app__$Event_$Void_$Void().default)();
	this.onLeave = new (lime_app__$Event_$Void_$Void().default)();
	this.onKeyUp = new (lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void().default)();
	this.onKeyDown = new (lime_app__$Event_$lime_$ui_$KeyCode_$lime_$ui_$KeyModifier_$Void().default)();
	this.onFullscreen = new (lime_app__$Event_$Void_$Void().default)();
	this.onFocusOut = new (lime_app__$Event_$Void_$Void().default)();
	this.onFocusIn = new (lime_app__$Event_$Void_$Void().default)();
	this.onExpose = new (lime_app__$Event_$Void_$Void().default)();
	this.onEnter = new (lime_app__$Event_$Void_$Void().default)();
	this.onDropFile = new (lime_app__$Event_$String_$Void().default)();
	this.onDeactivate = new (lime_app__$Event_$Void_$Void().default)();
	this.onClose = new (lime_app__$Event_$Void_$Void().default)();
	this.onActivate = new (lime_app__$Event_$Void_$Void().default)();
	this.application = application;
	this.__attributes = attributes != null ? attributes : { };
	if((Reflect().default).hasField(this.__attributes,"parameters")) {
		this.parameters = this.__attributes.parameters;
	}
	this.__width = 0;
	this.__height = 0;
	this.__fullscreen = false;
	this.__scale = 1;
	this.__x = 0;
	this.__y = 0;
	this.__title = "";
	this.id = -1;
	this.__backend = new (lime__$internal_backend_html5_HTML5Window().default)(this);
}

// Meta

Window.__name__ = "lime.ui.Window";
Window.__isInterface__ = false;
Window.prototype = {
	alert: function(message,title) {
		this.__backend.alert(message,title);
	},
	close: function() {
		this.__backend.close();
	},
	focus: function() {
		this.__backend.focus();
	},
	move: function(x,y) {
		this.__backend.move(x,y);
		this.__x = x;
		this.__y = y;
	},
	readPixels: function(rect) {
		return this.__backend.readPixels(rect);
	},
	resize: function(width,height) {
		this.__backend.resize(width,height);
		this.__width = width;
		this.__height = height;
	},
	setIcon: function(image) {
		if(image == null) {
			return;
		}
		this.__backend.setIcon(image);
	},
	toString: function() {
		return "[object Window]";
	},
	warpMouse: function(x,y) {
		this.__backend.warpMouse(x,y);
	},
	get_cursor: function() {
		return this.__backend.getCursor();
	},
	set_cursor: function(value) {
		return this.__backend.setCursor(value);
	},
	get_display: function() {
		return this.__backend.getDisplay();
	},
	get_displayMode: function() {
		return this.__backend.getDisplayMode();
	},
	set_displayMode: function(value) {
		return this.__backend.setDisplayMode(value);
	},
	get_borderless: function() {
		return this.__borderless;
	},
	set_borderless: function(value) {
		return this.__borderless = this.__backend.setBorderless(value);
	},
	get_frameRate: function() {
		return this.__backend.getFrameRate();
	},
	set_frameRate: function(value) {
		return this.__backend.setFrameRate(value);
	},
	get_fullscreen: function() {
		return this.__fullscreen;
	},
	set_fullscreen: function(value) {
		return this.__fullscreen = this.__backend.setFullscreen(value);
	},
	get_height: function() {
		return this.__height;
	},
	set_height: function(value) {
		this.resize(this.__width,value);
		return this.__height;
	},
	get_hidden: function() {
		return this.__hidden;
	},
	get_maximized: function() {
		return this.__maximized;
	},
	set_maximized: function(value) {
		this.__minimized = false;
		return this.__maximized = this.__backend.setMaximized(value);
	},
	get_minimized: function() {
		return this.__minimized;
	},
	set_minimized: function(value) {
		this.__maximized = false;
		return this.__minimized = this.__backend.setMinimized(value);
	},
	get_mouseLock: function() {
		return this.__backend.getMouseLock();
	},
	set_mouseLock: function(value) {
		this.__backend.setMouseLock(value);
		return value;
	},
	get_resizable: function() {
		return this.__resizable;
	},
	set_resizable: function(value) {
		this.__resizable = this.__backend.setResizable(value);
		return this.__resizable;
	},
	get_scale: function() {
		return this.__scale;
	},
	get_textInputEnabled: function() {
		return this.__backend.getTextInputEnabled();
	},
	set_textInputEnabled: function(value) {
		return this.__backend.setTextInputEnabled(value);
	},
	get_title: function() {
		return this.__title;
	},
	set_title: function(value) {
		return this.__title = this.__backend.setTitle(value);
	},
	get_width: function() {
		return this.__width;
	},
	set_width: function(value) {
		this.resize(value,this.__height);
		return this.__width;
	},
	get_x: function() {
		return this.__x;
	},
	set_x: function(value) {
		this.move(value,this.__y);
		return this.__x;
	},
	get_y: function() {
		return this.__y;
	},
	set_y: function(value) {
		this.move(this.__x,value);
		return this.__y;
	}
};
Window.prototype.__class__ = Window.prototype.constructor = $hxClasses["lime.ui.Window"] = Window;

// Init

{
	var p = Window.prototype;
	Object.defineProperties(p,{ borderless : { get : p.get_borderless, set : p.set_borderless}, cursor : { get : p.get_cursor, set : p.set_cursor}, display : { get : p.get_display}, displayMode : { get : p.get_displayMode, set : p.set_displayMode}, frameRate : { get : p.get_frameRate, set : p.set_frameRate}, fullscreen : { get : p.get_fullscreen, set : p.set_fullscreen}, height : { get : p.get_height, set : p.set_height}, maximized : { get : p.get_maximized, set : p.set_maximized}, minimized : { get : p.get_minimized, set : p.set_minimized}, mouseLock : { get : p.get_mouseLock, set : p.set_mouseLock}, resizable : { get : p.get_resizable, set : p.set_resizable}, scale : { get : p.get_scale}, textInputEnabled : { get : p.get_textInputEnabled, set : p.set_textInputEnabled}, title : { get : p.get_title, set : p.set_title}, width : { get : p.get_width, set : p.set_width}, x : { get : p.get_x, set : p.set_y}, y : { get : p.get_x, set : p.set_y}});
};

// Statics




// Export

exports.default = Window;