// Class: lime.system.JNI

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function Reflect() {return require("./../../Reflect");}
function haxe_Log() {return require("./../../haxe/Log");}

// Constructor

var JNI = function(){}

// Meta

JNI.__name__ = "lime.system.JNI";
JNI.__isInterface__ = false;
JNI.prototype = {
	
};
JNI.prototype.__class__ = JNI.prototype.constructor = $hxClasses["lime.system.JNI"] = JNI;

// Init



// Statics

JNI.callMember = function(method,jobject,a) {
	switch(a.length) {
	case 0:
		return method(jobject);
	case 1:
		return method(jobject,a[0]);
	case 2:
		return method(jobject,a[0],a[1]);
	case 3:
		return method(jobject,a[0],a[1],a[2]);
	case 4:
		return method(jobject,a[0],a[1],a[2],a[3]);
	case 5:
		return method(jobject,a[0],a[1],a[2],a[3],a[4]);
	case 6:
		return method(jobject,a[0],a[1],a[2],a[3],a[4],a[5]);
	case 7:
		return method(jobject,a[0],a[1],a[2],a[3],a[4],a[5],a[6]);
	default:
		return null;
	}
}
JNI.callStatic = function(method,a) {
	switch(a.length) {
	case 0:
		return method();
	case 1:
		return method(a[0]);
	case 2:
		return method(a[0],a[1]);
	case 3:
		return method(a[0],a[1],a[2]);
	case 4:
		return method(a[0],a[1],a[2],a[3]);
	case 5:
		return method(a[0],a[1],a[2],a[3],a[4]);
	case 6:
		return method(a[0],a[1],a[2],a[3],a[4],a[5]);
	case 7:
		return method(a[0],a[1],a[2],a[3],a[4],a[5],a[6]);
	default:
		return null;
	}
}
JNI.createMemberField = function(className,memberName,signature) {
	JNI.init();
	return null;
}
JNI.createMemberMethod = function(className,memberName,signature,useArray,quietFail) {
	if(quietFail == null) {
		quietFail = false;
	}
	if(useArray == null) {
		useArray = false;
	}
	JNI.init();
	return null;
}
JNI.createStaticField = function(className,memberName,signature) {
	JNI.init();
	return null;
}
JNI.createStaticMethod = function(className,memberName,signature,useArray,quietFail) {
	if(quietFail == null) {
		quietFail = false;
	}
	if(useArray == null) {
		useArray = false;
	}
	JNI.init();
	return null;
}
JNI.getEnv = function() {
	JNI.init();
	return null;
}
JNI.init = function() {
	if(!JNI.initialized) {
		JNI.initialized = true;
	}
}
JNI.onCallback = function(object,method,args) {
	var field = (Reflect().default).field(object,method);
	if(field != null) {
		if(args == null) {
			args = [];
		}
		return (Reflect().default).callMethod(object,field,args);
	}
	(haxe_Log().default).trace("onCallback - unknown field " + method,{ fileName : "../node_modules/lime/src/lime/system/JNI.hx", lineNumber : 173, className : "lime.system.JNI", methodName : "onCallback"});
	return null;
}
JNI.postUICallback = function(callback) {
	callback();
}
JNI.alreadyCreated = new (haxe_ds_StringMap().default)()
JNI.initialized = false

// Export

exports.default = JNI;