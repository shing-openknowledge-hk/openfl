// Class: openfl.net.NetConnection

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_EventDispatcher() {return require("./../../openfl/events/EventDispatcher");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function openfl_events_NetStatusEvent() {return require("./../../openfl/events/NetStatusEvent");}

// Constructor

var NetConnection = function() {
	(openfl_events_EventDispatcher().default).call(this);
}

// Meta

NetConnection.__name__ = "openfl.net.NetConnection";
NetConnection.__isInterface__ = false;
NetConnection.__super__ = (openfl_events_EventDispatcher().default);
NetConnection.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	connect: function(command,p1,p2,p3,p4,p5) {
		if(command != null) {
			throw new (js__$Boot_HaxeError().default)("Error: Can only connect in \"HTTP streaming\" mode");
		}
		this.dispatchEvent(new (openfl_events_NetStatusEvent().default)("netStatus",false,true,{ code : "NetConnection.Connect.Success"}));
	}
});
NetConnection.prototype.__class__ = NetConnection.prototype.constructor = $hxClasses["openfl.net.NetConnection"] = NetConnection;

// Init



// Statics


NetConnection.__meta__ = { statics : { CONNECT_SUCCESS : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}}
NetConnection.CONNECT_SUCCESS = "NetConnection.Connect.Success"

// Export

exports.default = NetConnection;