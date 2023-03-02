// Class: lime.system.System

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_ds_IntMap() {return require("./../../haxe/ds/IntMap");}
function Std() {return require("./../../Std");}
function Reflect() {return require("./../../Reflect");}
function StringTools() {return require("./../../StringTools");}
function lime_system_Display() {return require("./../../lime/system/Display");}
function lime_system_DisplayMode() {return require("./../../lime/system/DisplayMode");}
function lime_math_Rectangle() {return require("./../../lime/math/Rectangle");}
function lime_system_CFFI() {return require("./../../lime/system/CFFI");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function lime_system_Endian() {return require("./../../lime/system/Endian");}

// Constructor

var System = function(){}

// Meta

System.__name__ = "lime.system.System";
System.__isInterface__ = false;
System.prototype = {
	
};
System.prototype.__class__ = System.prototype.constructor = $hxClasses["lime.system.System"] = System;

// Init



// Statics

System.embed = function(projectName,element,width,height,config) {
	if(System.__applicationEntryPoint == null) {
		return;
	}
	if(System.__applicationEntryPoint.exists(projectName)) {
		var htmlElement = null;
		if(typeof(element) == "string") {
			htmlElement = window.document.getElementById(element);
		} else if(element == null) {
			htmlElement = window.document.createElement("div");
		} else {
			htmlElement = element;
		}
		if(htmlElement == null) {
			window.console.log("[lime.embed] ERROR: Cannot find target element: " + (Std().default).string(element));
			return;
		}
		if(width == null) {
			width = 0;
		}
		if(height == null) {
			height = 0;
		}
		if(config == null) {
			config = { };
		}
		if((Reflect().default).hasField(config,"background") && typeof(config.background) == "string") {
			var background = (StringTools().default).replace((Std().default).string(config.background),"#","");
			if(background.indexOf("0x") > -1) {
				config.background = (Std().default).parseInt(background);
			} else {
				config.background = (Std().default).parseInt("0x" + background);
			}
		}
		config.element = htmlElement;
		config.width = width;
		config.height = height;
		(System.__applicationEntryPoint.get(projectName))(config);
	}
}
System.exit = function(code) {
}
System.getDisplay = function(id) {
	if(id == 0) {
		var display = new (lime_system_Display().default)();
		display.id = 0;
		display.name = "Generic Display";
		display.dpi = 96 * window.devicePixelRatio;
		display.currentMode = new (lime_system_DisplayMode().default)(window.screen.width,window.screen.height,60,1);
		display.supportedModes = [display.currentMode];
		display.bounds = new (lime_math_Rectangle().default)(0,0,display.currentMode.width,display.currentMode.height);
		return display;
	}
	return null;
}
System.getTimer = function() {
	return (Std().default).int(window.performance.now());
}
System.load = function(library,method,args,lazy) {
	if(lazy == null) {
		lazy = false;
	}
	if(args == null) {
		args = 0;
	}
	return (lime_system_CFFI().default).load(library,method,args,lazy);
}
System.openFile = function(path) {
	if(path != null) {
		window.open(path,"_blank");
	}
}
System.openURL = function(url,target) {
	if(target == null) {
		target = "_blank";
	}
	if(url != null) {
		window.open(url,target);
	}
}
System.__copyMissingFields = function(target,source) {
	if(source == null || target == null) {
		return;
	}
	var _g = 0;
	var _g1 = (Reflect().default).fields(source);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		if(!(Reflect().default).hasField(target,field)) {
			(Reflect().default).setField(target,field,(Reflect().default).field(source,field));
		}
	}
}
System.__getDirectory = function(type) {
	return null;
}
System.__parseBool = function(value) {
	return value == "true";
}
System.__registerEntryPoint = function(projectName,entryPoint) {
	if(System.__applicationEntryPoint == null) {
		System.__applicationEntryPoint = new (haxe_ds_StringMap().default)();
	}
	System.__applicationEntryPoint.set(projectName,entryPoint);
}
System.__runProcess = function(command,args) {
	return null;
}
System.get_allowScreenTimeout = function() {
	return true;
}
System.set_allowScreenTimeout = function(value) {
	return true;
}
System.get_applicationDirectory = function() {
	if(System.__applicationDirectory == null) {
		System.__applicationDirectory = System.__getDirectory(0);
	}
	return System.__applicationDirectory;
}
System.get_applicationStorageDirectory = function() {
	if(System.__applicationStorageDirectory == null) {
		System.__applicationStorageDirectory = System.__getDirectory(1);
	}
	return System.__applicationStorageDirectory;
}
System.get_deviceModel = function() {
	var tmp = System.__deviceModel == null;
	return System.__deviceModel;
}
System.get_deviceVendor = function() {
	var tmp = System.__deviceVendor == null;
	return System.__deviceVendor;
}
System.get_desktopDirectory = function() {
	if(System.__desktopDirectory == null) {
		System.__desktopDirectory = System.__getDirectory(2);
	}
	return System.__desktopDirectory;
}
System.get_documentsDirectory = function() {
	if(System.__documentsDirectory == null) {
		System.__documentsDirectory = System.__getDirectory(3);
	}
	return System.__documentsDirectory;
}
System.get_endianness = function() {
	if(System.__endianness == null) {
		var arrayBuffer = new ArrayBuffer(2);
		var elements = null;
		var array = null;
		var view = null;
		var len = null;
		var this1;
		if(elements != null) {
			this1 = new Uint8Array(elements);
		} else if(array != null) {
			this1 = new Uint8Array(array);
		} else if(view != null) {
			this1 = new Uint8Array(view);
		} else if(arrayBuffer != null) {
			if(len == null) {
				this1 = new Uint8Array(arrayBuffer,0);
			} else {
				this1 = new Uint8Array(arrayBuffer,0,len);
			}
		} else {
			this1 = null;
		}
		var uint8Array = this1;
		var elements1 = null;
		var array1 = null;
		var view1 = null;
		var len1 = null;
		var this2;
		if(elements1 != null) {
			this2 = new Uint16Array(elements1);
		} else if(array1 != null) {
			this2 = new Uint16Array(array1);
		} else if(view1 != null) {
			this2 = new Uint16Array(view1);
		} else if(arrayBuffer != null) {
			if(len1 == null) {
				this2 = new Uint16Array(arrayBuffer,0);
			} else {
				this2 = new Uint16Array(arrayBuffer,0,len1);
			}
		} else {
			this2 = null;
		}
		var uint16array = this2;
		uint8Array[0] = 170;
		uint8Array[1] = 187;
		if(uint16array[0] == 43707) {
			System.__endianness = (lime_system_Endian().default).BIG_ENDIAN;
		} else {
			System.__endianness = (lime_system_Endian().default).LITTLE_ENDIAN;
		}
	}
	return System.__endianness;
}
System.get_fontsDirectory = function() {
	if(System.__fontsDirectory == null) {
		System.__fontsDirectory = System.__getDirectory(4);
	}
	return System.__fontsDirectory;
}
System.get_numDisplays = function() {
	return 1;
}
System.get_platformLabel = function() {
	if(System.__platformLabel == null) {
		var name = System.get_platformName();
		var version = System.get_platformVersion();
		if(name != null && version != null) {
			System.__platformLabel = name + " " + version;
		} else if(name != null) {
			System.__platformLabel = name;
		}
	}
	return System.__platformLabel;
}
System.get_platformName = function() {
	if(System.__platformName == null) {
		System.__platformName = "HTML5";
	}
	return System.__platformName;
}
System.get_platformVersion = function() {
	var tmp = System.__platformVersion == null;
	return System.__platformVersion;
}
System.get_userDirectory = function() {
	if(System.__userDirectory == null) {
		System.__userDirectory = System.__getDirectory(5);
	}
	return System.__userDirectory;
}
System.__directories = new (haxe_ds_IntMap().default)()

// Export

exports.default = System;