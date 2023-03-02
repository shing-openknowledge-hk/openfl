// Class: openfl.net.XMLSocket

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $bind = require("./../../bind_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_EventDispatcher() {return require("./../../openfl/events/EventDispatcher");}
function openfl_net_Socket() {return require("./../../openfl/net/Socket");}
function Std() {return require("./../../Std");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function openfl_events_DataEvent() {return require("./../../openfl/events/DataEvent");}

// Constructor

var XMLSocket = function(host,port) {
	if(port == null) {
		port = 80;
	}
	(openfl_events_EventDispatcher().default).call(this);
	if(host != null) {
		this.connect(host,port);
	}
}

// Meta

XMLSocket.__name__ = "openfl.net.XMLSocket";
XMLSocket.__isInterface__ = false;
XMLSocket.__super__ = (openfl_events_EventDispatcher().default);
XMLSocket.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	close: function() {
		this.__socket.removeEventListener("close",$bind(this,this.__onClose));
		this.__socket.removeEventListener("connect",$bind(this,this.__onConnect));
		this.__socket.removeEventListener("ioError",$bind(this,this.__onError));
		this.__socket.removeEventListener("socketData",$bind(this,this.__onSocketData));
		this.__socket.close();
	},
	connect: function(host,port) {
		this.connected = false;
		this.__socket = new (openfl_net_Socket().default)();
		this.__socket.addEventListener("close",$bind(this,this.__onClose));
		this.__socket.addEventListener("connect",$bind(this,this.__onConnect));
		this.__socket.addEventListener("ioError",$bind(this,this.__onError));
		this.__socket.addEventListener("socketData",$bind(this,this.__onSocketData));
		this.__socket.connect(host,port);
	},
	send: function(object) {
		this.__socket.writeUTFBytes((Std().default).string(object));
		this.__socket.writeByte(0);
		this.__socket.flush();
	},
	__onClose: function(_) {
		this.connected = false;
		this.dispatchEvent(new (openfl_events_Event().default)("close"));
	},
	__onConnect: function(_) {
		this.connected = true;
		this.dispatchEvent(new (openfl_events_Event().default)("connect"));
	},
	__onError: function(_) {
		this.dispatchEvent(new (openfl_events_Event().default)("ioError"));
	},
	__onSocketData: function(_) {
		this.dispatchEvent(new (openfl_events_DataEvent().default)("data",false,false,this.__socket.readUTFBytes(this.__socket.get_bytesAvailable())));
	}
});
XMLSocket.prototype.__class__ = XMLSocket.prototype.constructor = $hxClasses["openfl.net.XMLSocket"] = XMLSocket;

// Init



// Statics




// Export

exports.default = XMLSocket;