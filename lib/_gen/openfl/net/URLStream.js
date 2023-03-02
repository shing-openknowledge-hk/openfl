// Class: openfl.net.URLStream

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $bind = require("./../../bind_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_utils_IDataInput() {return require("./../../openfl/utils/IDataInput");}
function openfl_events_EventDispatcher() {return require("./../../openfl/events/EventDispatcher");}
function openfl_events_ProgressEvent() {return require("./../../openfl/events/ProgressEvent");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function openfl_utils__$ByteArray_ByteArray_$Impl_$() {return require("./../../openfl/utils/_ByteArray/ByteArray_Impl_");}
function openfl_net_URLLoader() {return require("./../../openfl/net/URLLoader");}

// Constructor

var URLStream = function() {
	(openfl_events_EventDispatcher().default).call(this);
	this.__loader = new (openfl_net_URLLoader().default)();
	this.__loader.dataFormat = "binary";
}

// Meta

URLStream.__name__ = "openfl.net.URLStream";
URLStream.__isInterface__ = false;
URLStream.__interfaces__ = [(openfl_utils_IDataInput().default)];
URLStream.__super__ = (openfl_events_EventDispatcher().default);
URLStream.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	close: function() {
		this.__removeEventListeners();
		this.__data = null;
	},
	load: function(request) {
		this.__removeEventListeners();
		this.__addEventListeners();
		this.__loader.load(request);
	},
	readBoolean: function() {
		return this.__data.readBoolean();
	},
	readByte: function() {
		return this.__data.readByte();
	},
	readBytes: function(bytes,offset,length) {
		if(length == null) {
			length = 0;
		}
		if(offset == null) {
			offset = 0;
		}
		var offset1 = offset;
		var length1 = length;
		if(length1 == null) {
			length1 = 0;
		}
		if(offset1 == null) {
			offset1 = 0;
		}
		this.__data.readBytes(bytes,offset1,length1);
	},
	readDouble: function() {
		return this.__data.readDouble();
	},
	readFloat: function() {
		return this.__data.readFloat();
	},
	readInt: function() {
		return this.__data.readInt();
	},
	readMultiByte: function(length,charSet) {
		return this.__data.readMultiByte(length,charSet);
	},
	readObject: function() {
		return null;
	},
	readShort: function() {
		return this.__data.readShort();
	},
	readUnsignedByte: function() {
		return this.__data.readUnsignedByte();
	},
	readUnsignedInt: function() {
		return this.__data.readUnsignedInt();
	},
	readUnsignedShort: function() {
		return this.__data.readUnsignedShort();
	},
	readUTF: function() {
		return this.__data.readUTF();
	},
	readUTFBytes: function(length) {
		return this.__data.readUTFBytes(length);
	},
	__addEventListeners: function() {
		this.__loader.addEventListener("complete",$bind(this,this.loader_onComplete));
		this.__loader.addEventListener("ioError",$bind(this,this.loader_onIOError));
		this.__loader.addEventListener("securityError",$bind(this,this.loader_onSecurityError));
		this.__loader.addEventListener("progress",$bind(this,this.loader_onProgressEvent));
	},
	__removeEventListeners: function() {
		this.__loader.removeEventListener("complete",$bind(this,this.loader_onComplete));
		this.__loader.removeEventListener("ioError",$bind(this,this.loader_onIOError));
		this.__loader.removeEventListener("securityError",$bind(this,this.loader_onSecurityError));
		this.__loader.removeEventListener("progress",$bind(this,this.loader_onProgressEvent));
	},
	loader_onComplete: function(event) {
		this.__removeEventListeners();
		this.__data = this.__loader.data;
		this.dispatchEvent(new (openfl_events_ProgressEvent().default)("progress",false,false,this.__loader.bytesLoaded,this.__loader.bytesTotal));
		this.dispatchEvent(new (openfl_events_Event().default)("complete"));
	},
	loader_onIOError: function(event) {
		this.__removeEventListeners();
		this.dispatchEvent(event);
	},
	loader_onSecurityError: function(event) {
		this.__removeEventListeners();
		this.dispatchEvent(event);
	},
	loader_onProgressEvent: function(event) {
		this.__data = this.__loader.data;
		this.dispatchEvent(event);
	},
	get_bytesAvailable: function() {
		if(this.__data != null) {
			return (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(this.__data) - this.__data.position;
		}
		return 0;
	},
	get_connected: function() {
		return false;
	},
	get_endian: function() {
		return this.__data.get_endian();
	},
	set_endian: function(value) {
		return this.__data.set_endian(value);
	}
});
URLStream.prototype.__class__ = URLStream.prototype.constructor = $hxClasses["openfl.net.URLStream"] = URLStream;

// Init

Object.defineProperties(URLStream.prototype,{ bytesAvailable : { get : function () { return this.get_bytesAvailable (); }}, connected : { get : function () { return this.get_connected (); }}, endian : { get : function () { return this.get_endian (); }, set : function (v) { return this.set_endian (v); }}});

// Statics




// Export

exports.default = URLStream;