// Class: lime.app.Application

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
var $extend = require("./../../extend_stub").default;
function lime_app_Module() {return require("./../../lime/app/Module");}
function HxOverrides() {return require("./../../HxOverrides");}
function lime_ui_Window() {return require("./../../lime/ui/Window");}
function lime_ui_Gamepad() {return require("./../../lime/ui/Gamepad");}
function lime_ui_Joystick() {return require("./../../lime/ui/Joystick");}
function lime_ui_Touch() {return require("./../../lime/ui/Touch");}
function lime_system_System() {return require("./../../lime/system/System");}
function lime_app__$Event_$lime_$ui_$Window_$Void() {return require("./../../lime/app/_Event_lime_ui_Window_Void");}
function lime_app__$Event_$Int_$Void() {return require("./../../lime/app/_Event_Int_Void");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function haxe_ds_IntMap() {return require("./../../haxe/ds/IntMap");}
function lime__$internal_backend_html5_HTML5Application() {return require("./../../lime/_internal/backend/html5/HTML5Application");}
function lime_utils_Preloader() {return require("./../../lime/utils/Preloader");}

// Constructor

var Application = function() {
	this.onCreateWindow = new (lime_app__$Event_$lime_$ui_$Window_$Void().default)();
	this.onUpdate = new (lime_app__$Event_$Int_$Void().default)();
	(lime_app_Module().default).call(this);
	if(Application.current == null) {
		Application.current = this;
	}
	this.meta = new (haxe_ds_StringMap().default)();
	this.modules = [];
	this.__windowByID = new (haxe_ds_IntMap().default)();
	this.__windows = [];
	this.__backend = new (lime__$internal_backend_html5_HTML5Application().default)(this);
	this.__registerLimeModule(this);
	this.__preloader = new (lime_utils_Preloader().default)();
	this.__preloader.onProgress.add($bind(this,this.onPreloadProgress));
	this.__preloader.onComplete.add($bind(this,this.onPreloadComplete));
}

// Meta

Application.__name__ = "lime.app.Application";
Application.__isInterface__ = false;
Application.__super__ = (lime_app_Module().default);
Application.prototype = $extend((lime_app_Module().default).prototype, {
	addModule: function(module) {
		module.__registerLimeModule(this);
		this.modules.push(module);
	},
	createWindow: function(attributes) {
		var $window = this.__createWindow(attributes);
		this.__addWindow($window);
		return $window;
	},
	exec: function() {
		Application.current = this;
		return this.__backend.exec();
	},
	onGamepadAxisMove: function(gamepad,axis,value) {
	},
	onGamepadButtonDown: function(gamepad,button) {
	},
	onGamepadButtonUp: function(gamepad,button) {
	},
	onGamepadConnect: function(gamepad) {
	},
	onGamepadDisconnect: function(gamepad) {
	},
	onJoystickAxisMove: function(joystick,axis,value) {
	},
	onJoystickButtonDown: function(joystick,button) {
	},
	onJoystickButtonUp: function(joystick,button) {
	},
	onJoystickConnect: function(joystick) {
	},
	onJoystickDisconnect: function(joystick) {
	},
	onJoystickHatMove: function(joystick,hat,position) {
	},
	onJoystickTrackballMove: function(joystick,trackball,x,y) {
	},
	onKeyDown: function(keyCode,modifier) {
	},
	onKeyUp: function(keyCode,modifier) {
	},
	onModuleExit: function(code) {
	},
	onMouseDown: function(x,y,button) {
	},
	onMouseMove: function(x,y) {
	},
	onMouseMoveRelative: function(x,y) {
	},
	onMouseUp: function(x,y,button) {
	},
	onMouseWheel: function(deltaX,deltaY,deltaMode) {
	},
	onPreloadComplete: function() {
	},
	onPreloadProgress: function(loaded,total) {
	},
	onRenderContextLost: function() {
	},
	onRenderContextRestored: function(context) {
	},
	onTextEdit: function(text,start,length) {
	},
	onTextInput: function(text) {
	},
	onTouchCancel: function(touch) {
	},
	onTouchEnd: function(touch) {
	},
	onTouchMove: function(touch) {
	},
	onTouchStart: function(touch) {
	},
	onWindowActivate: function() {
	},
	onWindowClose: function() {
	},
	onWindowCreate: function() {
	},
	onWindowDeactivate: function() {
	},
	onWindowDropFile: function(file) {
	},
	onWindowEnter: function() {
	},
	onWindowExpose: function() {
	},
	onWindowFocusIn: function() {
	},
	onWindowFocusOut: function() {
	},
	onWindowFullscreen: function() {
	},
	onWindowLeave: function() {
	},
	onWindowMove: function(x,y) {
	},
	onWindowMinimize: function() {
	},
	onWindowResize: function(width,height) {
	},
	onWindowRestore: function() {
	},
	removeModule: function(module) {
		if(module != null) {
			module.__unregisterLimeModule(this);
			(HxOverrides().default).remove(this.modules,module);
		}
	},
	render: function(context) {
	},
	update: function(deltaTime) {
	},
	__addWindow: function($window) {
		if($window != null) {
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
		}
	},
	__createWindow: function(attributes) {
		var $window = new (lime_ui_Window().default)(this,attributes);
		if($window.id == -1) {
			return null;
		}
		return $window;
	},
	__registerLimeModule: function(application) {
		application.onUpdate.add($bind(this,this.update));
		application.onExit.add($bind(this,this.onModuleExit),false,0);
		application.onExit.add($bind(this,this.__onModuleExit),false,0);
		var gamepad = (lime_ui_Gamepad().default).devices.iterator();
		while(gamepad.hasNext()) {
			var gamepad1 = gamepad.next();
			this.__onGamepadConnect(gamepad1);
		}
		(lime_ui_Gamepad().default).onConnect.add($bind(this,this.__onGamepadConnect));
		var joystick = (lime_ui_Joystick().default).devices.iterator();
		while(joystick.hasNext()) {
			var joystick1 = joystick.next();
			this.__onJoystickConnect(joystick1);
		}
		(lime_ui_Joystick().default).onConnect.add($bind(this,this.__onJoystickConnect));
		(lime_ui_Touch().default).onCancel.add($bind(this,this.onTouchCancel));
		(lime_ui_Touch().default).onStart.add($bind(this,this.onTouchStart));
		(lime_ui_Touch().default).onMove.add($bind(this,this.onTouchMove));
		(lime_ui_Touch().default).onEnd.add($bind(this,this.onTouchEnd));
	},
	__removeWindow: function($window) {
		if($window != null && this.__windowByID.exists($window.id)) {
			if(this.__window == $window) {
				this.__window = null;
			}
			(HxOverrides().default).remove(this.__windows,$window);
			this.__windowByID.remove($window.id);
			$window.close();
			if(this.__windows.length == 0) {
				(lime_system_System().default).exit(0);
			}
		}
	},
	__onGamepadConnect: function(gamepad) {
		this.onGamepadConnect(gamepad);
		var f = $bind(this,this.onGamepadAxisMove);
		var gamepad1 = gamepad;
		var tmp = function(axis,value) {
			f(gamepad1,axis,value);
		};
		gamepad.onAxisMove.add(tmp);
		var f1 = $bind(this,this.onGamepadButtonDown);
		var gamepad2 = gamepad;
		var tmp1 = function(button) {
			f1(gamepad2,button);
		};
		gamepad.onButtonDown.add(tmp1);
		var f2 = $bind(this,this.onGamepadButtonUp);
		var gamepad3 = gamepad;
		var tmp2 = function(button1) {
			f2(gamepad3,button1);
		};
		gamepad.onButtonUp.add(tmp2);
		var f3 = $bind(this,this.onGamepadDisconnect);
		var gamepad4 = gamepad;
		var tmp3 = function() {
			f3(gamepad4);
		};
		gamepad.onDisconnect.add(tmp3);
	},
	__onJoystickConnect: function(joystick) {
		this.onJoystickConnect(joystick);
		var f = $bind(this,this.onJoystickAxisMove);
		var joystick1 = joystick;
		var tmp = function(axis,value) {
			f(joystick1,axis,value);
		};
		joystick.onAxisMove.add(tmp);
		var f1 = $bind(this,this.onJoystickButtonDown);
		var joystick2 = joystick;
		var tmp1 = function(button) {
			f1(joystick2,button);
		};
		joystick.onButtonDown.add(tmp1);
		var f2 = $bind(this,this.onJoystickButtonUp);
		var joystick3 = joystick;
		var tmp2 = function(button1) {
			f2(joystick3,button1);
		};
		joystick.onButtonUp.add(tmp2);
		var f3 = $bind(this,this.onJoystickDisconnect);
		var joystick4 = joystick;
		var tmp3 = function() {
			f3(joystick4);
		};
		joystick.onDisconnect.add(tmp3);
		var f4 = $bind(this,this.onJoystickHatMove);
		var joystick5 = joystick;
		var tmp4 = function(hat,position) {
			f4(joystick5,hat,position);
		};
		joystick.onHatMove.add(tmp4);
		var f5 = $bind(this,this.onJoystickTrackballMove);
		var joystick6 = joystick;
		var tmp5 = function(trackball,x,y) {
			f5(joystick6,trackball,x,y);
		};
		joystick.onTrackballMove.add(tmp5);
	},
	__onModuleExit: function(code) {
		this.__backend.exit();
	},
	__onWindowClose: function($window) {
		if(this.get_window() == $window) {
			this.onWindowClose();
		}
		this.__removeWindow($window);
	},
	__unregisterLimeModule: function(application) {
		application.onUpdate.remove($bind(this,this.update));
		application.onExit.remove($bind(this,this.__onModuleExit));
		application.onExit.remove($bind(this,this.onModuleExit));
		(lime_ui_Gamepad().default).onConnect.remove($bind(this,this.__onGamepadConnect));
		(lime_ui_Joystick().default).onConnect.remove($bind(this,this.__onJoystickConnect));
		(lime_ui_Touch().default).onCancel.remove($bind(this,this.onTouchCancel));
		(lime_ui_Touch().default).onStart.remove($bind(this,this.onTouchStart));
		(lime_ui_Touch().default).onMove.remove($bind(this,this.onTouchMove));
		(lime_ui_Touch().default).onEnd.remove($bind(this,this.onTouchEnd));
		this.onModuleExit(0);
	},
	get_preloader: function() {
		return this.__preloader;
	},
	get_window: function() {
		return this.__window;
	},
	get_windows: function() {
		return this.__windows;
	}
});
Application.prototype.__class__ = Application.prototype.constructor = $hxClasses["lime.app.Application"] = Application;

// Init

{
	var init = (lime__$internal_backend_html5_HTML5Application().default)
	var p = Application.prototype;
	Object.defineProperties(p,{ preloader : { get : p.get_preloader}, window : { get : p.get_window}, windows : { get : p.get_windows}});
};

// Statics




// Export

exports.default = Application;