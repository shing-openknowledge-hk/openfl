// Class: openfl.display.Stage3D

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_EventDispatcher() {return require("./../../openfl/events/EventDispatcher");}
function haxe_Timer() {return require("./../../haxe/Timer");}
function openfl_display3D_Context3D() {return require("./../../openfl/display3D/Context3D");}
function Reflect() {return require("./../../Reflect");}
function js_html__$CanvasElement_CanvasUtil() {return require("./../../js/html/_CanvasElement/CanvasUtil");}
function openfl_events_ErrorEvent() {return require("./../../openfl/events/ErrorEvent");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function openfl__$Vector_Vector_$Impl_$() {return require("./../../openfl/_Vector/Vector_Impl_");}
function openfl_geom_Matrix3D() {return require("./../../openfl/geom/Matrix3D");}

// Constructor

var Stage3D = function(stage) {
	(openfl_events_EventDispatcher().default).call(this);
	this.__stage = stage;
	this.__height = 0;
	this.__projectionTransform = new (openfl_geom_Matrix3D().default)();
	this.__renderTransform = new (openfl_geom_Matrix3D().default)();
	this.__width = 0;
	this.__x = 0;
	this.__y = 0;
	this.visible = true;
	if(stage.stageWidth > 0 && stage.stageHeight > 0) {
		this.__resize(stage.stageWidth,stage.stageHeight);
	}
}

// Meta

Stage3D.__name__ = "openfl.display.Stage3D";
Stage3D.__isInterface__ = false;
Stage3D.__super__ = (openfl_events_EventDispatcher().default);
Stage3D.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	requestContext3D: function(context3DRenderMode,profile) {
		if(profile == null) {
			profile = "baseline";
		}
		if(context3DRenderMode == null) {
			context3DRenderMode = "auto";
		}
		if(this.__contextLost) {
			this.__contextRequested = true;
			return;
		}
		if(this.context3D != null) {
			this.__contextRequested = true;
			(haxe_Timer().default).delay($bind(this,this.__dispatchCreate),1);
		} else if(!this.__contextRequested) {
			this.__contextRequested = true;
			(haxe_Timer().default).delay($bind(this,this.__createContext),1);
		}
	},
	requestContext3DMatchingProfiles: function(profiles) {
		this.requestContext3D();
	},
	__createContext: function() {
		var stage = this.__stage;
		var renderer = stage.__renderer;
		if(renderer.__type == "cairo" || renderer.__type == "canvas") {
			this.__dispatchError();
			return;
		}
		if(renderer.__type == "opengl") {
			this.context3D = new (openfl_display3D_Context3D().default)(stage,stage.context3D.__contextState,this);
			this.__dispatchCreate();
		} else if(renderer.__type == "dom") {
			this.__canvas = window.document.createElement("canvas");
			this.__canvas.width = stage.stageWidth;
			this.__canvas.height = stage.stageHeight;
			var $window = stage.window;
			var attributes = renderer.__context.attributes;
			var transparentBackground = (Reflect().default).hasField(attributes,"background") && attributes.background == null;
			var colorDepth = (Reflect().default).hasField(attributes,"colorDepth") ? attributes.colorDepth : 32;
			var options = { alpha : transparentBackground || colorDepth > 16, antialias : (Reflect().default).hasField(attributes,"antialiasing") && attributes.antialiasing > 0, depth : true, premultipliedAlpha : true, stencil : true, preserveDrawingBuffer : false};
			this.__webgl = (js_html__$CanvasElement_CanvasUtil().default).getContextWebGL(this.__canvas,options);
			if(this.__webgl != null) {
				this.__dispatchError();
			} else {
				this.__dispatchError();
			}
		}
	},
	__dispatchError: function() {
		this.__contextRequested = false;
		this.dispatchEvent(new (openfl_events_ErrorEvent().default)("error",false,false,"Context3D not available"));
	},
	__dispatchCreate: function() {
		if(this.__contextRequested) {
			this.__contextRequested = false;
			this.dispatchEvent(new (openfl_events_Event().default)("context3DCreate"));
		}
	},
	__lostContext: function() {
		this.__contextLost = true;
		if(this.context3D != null) {
			this.context3D.__dispose();
			this.__contextRequested = true;
		}
	},
	__resize: function(width,height) {
		if(width != this.__width || height != this.__height) {
			if(this.__canvas != null) {
				this.__canvas.width = width;
				this.__canvas.height = height;
			}
			this.__projectionTransform.copyRawDataFrom((openfl__$Vector_Vector_$Impl_$().default)._new(null,null,[2.0 / (width > 0 ? width : 1),0.0,0.0,0.0,0.0,-2.0 / (height > 0 ? height : 1),0.0,0.0,0.0,0.0,-0.001,0.0,-1.0,1.0,0.0,1.0]));
			this.__renderTransform.identity();
			this.__renderTransform.appendTranslation(this.__x,this.__y,0);
			this.__renderTransform.append(this.__projectionTransform);
			this.__width = width;
			this.__height = height;
		}
	},
	__restoreContext: function() {
		this.__contextLost = false;
		this.__createContext();
	},
	get_x: function() {
		return this.__x;
	},
	set_x: function(value) {
		if(this.__x == value) {
			return value;
		}
		this.__x = value;
		this.__renderTransform.identity();
		this.__renderTransform.appendTranslation(this.__x,this.__y,0);
		this.__renderTransform.append(this.__projectionTransform);
		return value;
	},
	get_y: function() {
		return this.__y;
	},
	set_y: function(value) {
		if(this.__y == value) {
			return value;
		}
		this.__y = value;
		this.__renderTransform.identity();
		this.__renderTransform.appendTranslation(this.__x,this.__y,0);
		this.__renderTransform.append(this.__projectionTransform);
		return value;
	}
});
Stage3D.prototype.__class__ = Stage3D.prototype.constructor = $hxClasses["openfl.display.Stage3D"] = Stage3D;

// Init

Object.defineProperties(Stage3D.prototype,{ x : { get : function () { return this.get_x (); }, set : function (v) { return this.set_x (v); }}, y : { get : function () { return this.get_y (); }, set : function (v) { return this.set_y (v); }}});

// Statics




// Export

exports.default = Stage3D;