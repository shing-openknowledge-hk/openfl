// Class: openfl.display.Application

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
var $extend = require("./../../extend_stub").default;
function lime_app_Application() {return require("./../../lime/app/Application");}
function openfl_display_Window() {return require("./../../openfl/display/Window");}
function openfl__$internal_Lib() {return require("./../../openfl/_internal/Lib");}
function openfl_display_MovieClip() {return require("./../../openfl/display/MovieClip");}
function openfl_display_LoaderInfo() {return require("./../../openfl/display/LoaderInfo");}

// Constructor

var Application = function() {
	(lime_app_Application().default).call(this);
	if((openfl__$internal_Lib().default).application == null) {
		(openfl__$internal_Lib().default).application = this;
	}
	if((openfl__$internal_Lib().default).current == null) {
		(openfl__$internal_Lib().default).current = new (openfl_display_MovieClip().default)();
	}
	(openfl__$internal_Lib().default).current.__loaderInfo = (openfl_display_LoaderInfo().default).create(null);
	(openfl__$internal_Lib().default).current.__loaderInfo.content = (openfl__$internal_Lib().default).current;
}

// Meta

Application.__name__ = "openfl.display.Application";
Application.__isInterface__ = false;
Application.__super__ = (lime_app_Application().default);
Application.prototype = $extend((lime_app_Application().default).prototype, {
	createWindow: function(attributes) {
		var $window = new (openfl_display_Window().default)(this,attributes);
		this.__windows.push($window);
		this.__windowByID.set($window.id,$window);
		var f = $bind(this,this.__onWindowClose);
		var window1 = $window;
		var tmp = function() {
			f(window1);
		};
		$window.onClose.add(tmp,false,-10000);
		if(this.__window == null) {
			this.__window = $window;
			$window.onActivate.add($bind(this,this.onWindowActivate));
			$window.onRenderContextLost.add($bind(this,this.onRenderContextLost));
			$window.onRenderContextRestored.add($bind(this,this.onRenderContextRestored));
			$window.onDeactivate.add($bind(this,this.onWindowDeactivate));
			$window.onDropFile.add($bind(this,this.onWindowDropFile));
			$window.onEnter.add($bind(this,this.onWindowEnter));
			$window.onExpose.add($bind(this,this.onWindowExpose));
			$window.onFocusIn.add($bind(this,this.onWindowFocusIn));
			$window.onFocusOut.add($bind(this,this.onWindowFocusOut));
			$window.onFullscreen.add($bind(this,this.onWindowFullscreen));
			$window.onKeyDown.add($bind(this,this.onKeyDown));
			$window.onKeyUp.add($bind(this,this.onKeyUp));
			$window.onLeave.add($bind(this,this.onWindowLeave));
			$window.onMinimize.add($bind(this,this.onWindowMinimize));
			$window.onMouseDown.add($bind(this,this.onMouseDown));
			$window.onMouseMove.add($bind(this,this.onMouseMove));
			$window.onMouseMoveRelative.add($bind(this,this.onMouseMoveRelative));
			$window.onMouseUp.add($bind(this,this.onMouseUp));
			$window.onMouseWheel.add($bind(this,this.onMouseWheel));
			$window.onMove.add($bind(this,this.onWindowMove));
			$window.onRender.add($bind(this,this.render));
			$window.onResize.add($bind(this,this.onWindowResize));
			$window.onRestore.add($bind(this,this.onWindowRestore));
			$window.onTextEdit.add($bind(this,this.onTextEdit));
			$window.onTextInput.add($bind(this,this.onTextInput));
			this.onWindowCreate();
		}
		this.onCreateWindow.dispatch($window);
		return $window;
	}
});
Application.prototype.__class__ = Application.prototype.constructor = $hxClasses["openfl.display.Application"] = Application;

// Init



// Statics


Application.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = Application;