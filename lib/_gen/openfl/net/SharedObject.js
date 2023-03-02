// Class: openfl.net.SharedObject

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_EventDispatcher() {return require("./../../openfl/events/EventDispatcher");}
function js_Browser() {return require("./../../js/Browser");}
function haxe_CallStack() {return require("./../../haxe/CallStack");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function openfl__$internal_Lib() {return require("./../../openfl/_internal/Lib");}
function Reflect() {return require("./../../Reflect");}
function haxe_Serializer() {return require("./../../haxe/Serializer");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function openfl_errors_Error() {return require("./../../openfl/errors/Error");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function lime_app_Application() {return require("./../../lime/app/Application");}
function haxe_Unserializer() {return require("./../../haxe/Unserializer");}
function Type() {return require("./../../Type");}
function lime_system_System() {return require("./../../lime/system/System");}
function StringTools() {return require("./../../StringTools");}
function HxOverrides() {return require("./../../HxOverrides");}

// Constructor

var SharedObject = function() {
	(openfl_events_EventDispatcher().default).call(this);
	this.client = this;
	this.objectEncoding = SharedObject.defaultObjectEncoding;
}

// Meta

SharedObject.__name__ = "openfl.net.SharedObject";
SharedObject.__isInterface__ = false;
SharedObject.__super__ = (openfl_events_EventDispatcher().default);
SharedObject.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	clear: function() {
		this.data = { };
		try {
			var storage = (js_Browser().default).getLocalStorage();
			if(storage != null) {
				storage.removeItem(this.__localPath + ":" + this.__name);
			}
		} catch( e ) {
			(haxe_CallStack().default).lastException = e;
			var e1 = ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e;
		}
	},
	close: function() {
	},
	connect: function(myConnection,params) {
		(openfl__$internal_Lib().default).notImplemented({ fileName : "../src/openfl/net/SharedObject.hx", lineNumber : 392, className : "openfl.net.SharedObject", methodName : "connect"});
	},
	flush: function(minDiskSpace) {
		if(minDiskSpace == null) {
			minDiskSpace = 0;
		}
		if((Reflect().default).fields(this.data).length == 0) {
			return "flushed";
		}
		var encodedData = (haxe_Serializer().default).run(this.data);
		try {
			var storage = (js_Browser().default).getLocalStorage();
			if(storage != null) {
				storage.removeItem(this.__localPath + ":" + this.__name);
				storage.setItem(this.__localPath + ":" + this.__name,encodedData);
			}
		} catch( e ) {
			(haxe_CallStack().default).lastException = e;
			var e1 = ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e;
			return "pending";
		}
		return "flushed";
	},
	send: function(args) {
		(openfl__$internal_Lib().default).notImplemented({ fileName : "../src/openfl/net/SharedObject.hx", lineNumber : 824, className : "openfl.net.SharedObject", methodName : "send"});
	},
	setDirty: function(propertyName) {
	},
	setProperty: function(propertyName,value) {
		if(this.data != null) {
			(Reflect().default).setField(this.data,propertyName,value);
		}
	},
	get_size: function() {
		try {
			var d = (haxe_Serializer().default).run(this.data);
			return (haxe_io_Bytes().default).ofString(d).get_length();
		} catch( e ) {
			(haxe_CallStack().default).lastException = e;
			var e1 = ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e;
			return 0;
		}
	}
});
SharedObject.prototype.__class__ = SharedObject.prototype.constructor = $hxClasses["openfl.net.SharedObject"] = SharedObject;

// Init

{
	var tmp = SharedObject.prototype;
	var tmp1 = function () { return this.get_size (); }
	global.Object.defineProperty(tmp,"size",{ get : tmp1});
};

// Statics

SharedObject.getLocal = function(name,localPath,secure) {
	if(secure == null) {
		secure = false;
	}
	var illegalValues = [" ","~","%","&","\\",";",":","\"","'",",","<",">","?","#"];
	var allowed = true;
	if(name == null || name == "") {
		allowed = false;
	} else {
		var _g = 0;
		while(_g < illegalValues.length) {
			var value = illegalValues[_g];
			++_g;
			if(name.indexOf(value) > -1) {
				allowed = false;
				break;
			}
		}
	}
	if(!allowed) {
		throw new (js__$Boot_HaxeError().default)(new (openfl_errors_Error().default)("Error #2134: Cannot create SharedObject."));
	}
	if(SharedObject.__sharedObjects == null) {
		SharedObject.__sharedObjects = new (haxe_ds_StringMap().default)();
		if((lime_app_Application().default).current != null) {
			(lime_app_Application().default).current.onExit.add(SharedObject.application_onExit);
		}
	}
	var id = localPath + "/" + name;
	if(!SharedObject.__sharedObjects.exists(id)) {
		var encodedData = null;
		try {
			var storage = (js_Browser().default).getLocalStorage();
			if(localPath == null) {
				if(storage != null) {
					encodedData = storage.getItem(window.location.href + ":" + name);
					storage.removeItem(window.location.href + ":" + name);
				}
				localPath = window.location.pathname;
			}
			if(storage != null && encodedData == null) {
				encodedData = storage.getItem(localPath + ":" + name);
			}
		} catch( e ) {
			(haxe_CallStack().default).lastException = e;
			var e1 = ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e;
		}
		var sharedObject = new SharedObject();
		sharedObject.data = { };
		sharedObject.__localPath = localPath;
		sharedObject.__name = name;
		if(encodedData != null && encodedData != "") {
			try {
				var unserializer = new (haxe_Unserializer().default)(encodedData);
				unserializer.setResolver({ resolveEnum : (Type().default).resolveEnum, resolveClass : SharedObject.__resolveClass});
				sharedObject.data = unserializer.unserialize();
			} catch( e2 ) {
				(haxe_CallStack().default).lastException = e2;
				var e3 = ((e2) instanceof (js__$Boot_HaxeError().default)) ? e2.val : e2;
			}
		}
		SharedObject.__sharedObjects.set(id,sharedObject);
	}
	return SharedObject.__sharedObjects.get(id);
}
SharedObject.getRemote = function(name,remotePath,persistence,secure) {
	if(secure == null) {
		secure = false;
	}
	if(persistence == null) {
		persistence = false;
	}
	(openfl__$internal_Lib().default).notImplemented({ fileName : "../src/openfl/net/SharedObject.hx", lineNumber : 808, className : "openfl.net.SharedObject", methodName : "getRemote"});
	return null;
}
SharedObject.__getPath = function(localPath,name) {
	var path = (lime_system_System().default).get_applicationStorageDirectory() + "/" + localPath + "/";
	name = (StringTools().default).replace(name,"//","/");
	name = (StringTools().default).replace(name,"//","/");
	if((StringTools().default).startsWith(name,"/")) {
		name = (HxOverrides().default).substr(name,1,null);
	}
	if((StringTools().default).endsWith(name,"/")) {
		name = name.substring(0,name.length - 1);
	}
	if(name.indexOf("/") > -1) {
		var split = name.split("/");
		name = "";
		var _g = 0;
		var _g1 = split.length - 1;
		while(_g < _g1) {
			var i = _g++;
			name += "#" + split[i] + "/";
		}
		name += split[split.length - 1];
	}
	return path + name + ".sol";
}
SharedObject.__mkdir = function(directory) {
}
SharedObject.__resolveClass = function(name) {
	if(name != null) {
		if((StringTools().default).startsWith(name,"neash.")) {
			name = (StringTools().default).replace(name,"neash.","openfl.");
		}
		if((StringTools().default).startsWith(name,"native.")) {
			name = (StringTools().default).replace(name,"native.","openfl.");
		}
		if((StringTools().default).startsWith(name,"flash.")) {
			name = (StringTools().default).replace(name,"flash.","openfl.");
		}
		if((StringTools().default).startsWith(name,"openfl._v2.")) {
			name = (StringTools().default).replace(name,"openfl._v2.","openfl.");
		}
		if((StringTools().default).startsWith(name,"openfl._legacy.")) {
			name = (StringTools().default).replace(name,"openfl._legacy.","openfl.");
		}
		return (Type().default).resolveClass(name);
	}
	return null;
}
SharedObject.application_onExit = function(_) {
	var sharedObject = SharedObject.__sharedObjects.iterator();
	while(sharedObject.hasNext()) {
		var sharedObject1 = sharedObject.next();
		sharedObject1.flush();
	}
}
SharedObject.defaultObjectEncoding = 10

// Export

exports.default = SharedObject;