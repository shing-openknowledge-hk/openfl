// Class: Type

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./hxClasses_stub").default;
var $hxEnums = require("./hxEnums_stub").default;
var $import = require("./import_stub").default;
function js_Boot() {return require("./js/Boot");}
function Reflect() {return require("./Reflect");}
function js__$Boot_HaxeError() {return require("./js/_Boot/HaxeError");}
function HxOverrides() {return require("./HxOverrides");}
function ValueType() {return require("./ValueType");}

// Constructor

var Type = function(){}

// Meta

Type.__name__ = "Type";
Type.__isInterface__ = false;
Type.prototype = {
	
};
Type.prototype.__class__ = Type.prototype.constructor = $hxClasses["Type"] = Type;

// Init



// Statics

Type.getClass = function(o) {
	return (js_Boot().default).getClass(o);
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	return c.__name__;
}
Type.getEnumName = function(e) {
	return e.__ename__;
}
Type.resolveClass = function(name) {
	return $hxClasses[name];
}
Type.resolveEnum = function(name) {
	return $hxEnums[name];
}
Type.createInstance = function(cl,args) {
	return new (Function.prototype.bind.apply(cl,[null].concat(args)));
}
Type.createEmptyInstance = function(cl) {
	return Object.create(cl.prototype);
}
Type.createEnum = function(e,constr,params) {
	var f = (Reflect().default).field(e,constr);
	if(f == null) {
		throw new (js__$Boot_HaxeError().default)("No such constructor " + constr);
	}
	if((Reflect().default).isFunction(f)) {
		if(params == null) {
			throw new (js__$Boot_HaxeError().default)("Constructor " + constr + " need parameters");
		}
		return (Reflect().default).callMethod(e,f,params);
	}
	if(params != null && params.length != 0) {
		throw new (js__$Boot_HaxeError().default)("Constructor " + constr + " does not need parameters");
	}
	return f;
}
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	(HxOverrides().default).remove(a,"__class__");
	(HxOverrides().default).remove(a,"__properties__");
	return a;
}
Type.getEnumConstructs = function(e) {
	return e.__constructs__.slice();
}
Type.typeof = function(v) {
	switch(typeof(v)) {
	case "boolean":
		return (ValueType().default).TBool;
	case "function":
		if((js_Boot().default).isClass(v) || (js_Boot().default).isEnum(v)) {
			return (ValueType().default).TObject;
		}
		return (ValueType().default).TFunction;
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) {
			return (ValueType().default).TInt;
		}
		return (ValueType().default).TFloat;
	case "object":
		if(v == null) {
			return (ValueType().default).TNull;
		}
		var e = v.__enum__;
		if(e != null) {
			return (ValueType().default).TEnum($hxEnums[e]);
		}
		var c = (js_Boot().default).getClass(v);
		if(c != null) {
			return (ValueType().default).TClass(c);
		}
		return (ValueType().default).TObject;
	case "string":
		return (ValueType().default).TClass(String);
	case "undefined":
		return (ValueType().default).TNull;
	default:
		return (ValueType().default).TUnknown;
	}
}
Type.enumConstructor = function(e) {
	return $hxEnums[e.__enum__].__constructs__[e._hx_index];
}
Type.enumParameters = function(e) {
	var enm = $hxEnums[e.__enum__];
	var ctorName = enm.__constructs__[e._hx_index];
	var params = enm[ctorName].__params__;
	if(params != null) {
		var _g = [];
		var _g1 = 0;
		while(_g1 < params.length) {
			var p = params[_g1];
			++_g1;
			_g.push(e[p]);
		}
		return _g;
	} else {
		return [];
	}
}
Type.enumIndex = function(e) {
	return e._hx_index;
}


// Export

exports.default = Type;