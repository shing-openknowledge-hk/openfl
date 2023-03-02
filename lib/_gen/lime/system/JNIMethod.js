// Class: lime.system.JNIMethod

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
function Reflect() {return require("./../../Reflect");}

// Constructor

var JNIMethod = function(method) {
	this.method = method;
}

// Meta

JNIMethod.__name__ = "lime.system.JNIMethod";
JNIMethod.__isInterface__ = false;
JNIMethod.prototype = {
	callMember: function(args) {
		return null;
	},
	callStatic: function(args) {
		return null;
	},
	getMemberMethod: function(useArray) {
		if(useArray) {
			return $bind(this,this.callMember);
		} else {
			return (Reflect().default).makeVarArgs($bind(this,this.callMember));
		}
	},
	getStaticMethod: function(useArray) {
		if(useArray) {
			return $bind(this,this.callStatic);
		} else {
			return (Reflect().default).makeVarArgs($bind(this,this.callStatic));
		}
	}
};
JNIMethod.prototype.__class__ = JNIMethod.prototype.constructor = $hxClasses["lime.system.JNIMethod"] = JNIMethod;

// Init



// Statics




// Export

exports.default = JNIMethod;