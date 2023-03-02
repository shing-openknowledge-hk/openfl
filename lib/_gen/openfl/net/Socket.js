// Class: openfl.net.Socket

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_utils_IDataOutput() {return require("./../../openfl/utils/IDataOutput");}
function openfl_utils_IDataInput() {return require("./../../openfl/utils/IDataInput");}
function openfl_events_EventDispatcher() {return require("./../../openfl/events/EventDispatcher");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function openfl_errors_IOError() {return require("./../../openfl/errors/IOError");}
function openfl_errors_SecurityError() {return require("./../../openfl/errors/SecurityError");}
function haxe_Timer() {return require("./../../haxe/Timer");}
function openfl_utils_ByteArrayData() {return require("./../../openfl/utils/ByteArrayData");}
function EReg() {return require("./../../EReg");}
function openfl__$internal_Lib() {return require("./../../openfl/_internal/Lib");}
function _$UInt_UInt_$Impl_$() {return require("./../../_UInt/UInt_Impl_");}
function openfl_utils__$ByteArray_ByteArray_$Impl_$() {return require("./../../openfl/utils/_ByteArray/ByteArray_Impl_");}
function haxe_CallStack() {return require("./../../haxe/CallStack");}
function haxe_Unserializer() {return require("./../../haxe/Unserializer");}
function haxe_Serializer() {return require("./../../haxe/Serializer");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function openfl_events_ProgressEvent() {return require("./../../openfl/events/ProgressEvent");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}

// Constructor

var Socket = function(host,port) {
	if(port == null) {
		port = 0;
	}
	(openfl_events_EventDispatcher().default).call(this);
	this.set_endian("bigEndian");
	this.timeout = 20000;
	this.__buffer = (haxe_io_Bytes().default).alloc(4096);
	if(port > 0 && port < 65535) {
		this.connect(host,port);
	}
}

// Meta

Socket.__name__ = "openfl.net.Socket";
Socket.__isInterface__ = false;
Socket.__interfaces__ = [(openfl_utils_IDataOutput().default),(openfl_utils_IDataInput().default)];
Socket.__super__ = (openfl_events_EventDispatcher().default);
Socket.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	close: function() {
		if(this.__socket != null) {
			this.__cleanSocket();
		} else {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
	},
	connect: function(host,port) {
		if(port == null) {
			port = 0;
		}
		if(this.__socket != null) {
			this.close();
		}
		if(port < 0 || port > 65535) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_SecurityError().default)("Invalid socket port number specified."));
		}
		this.__timestamp = (haxe_Timer().default).stamp();
		this.__host = host;
		this.__port = port;
		var this1 = new (openfl_utils_ByteArrayData().default)(0);
		this.__output = this1;
		this.__output.set_endian(this.__endian);
		var this2 = new (openfl_utils_ByteArrayData().default)(0);
		this.__input = this2;
		this.__input.set_endian(this.__endian);
		if(window.location.protocol == "https:") {
			this.secure = true;
		}
		var schema = this.secure ? "wss" : "ws";
		var urlReg = new (EReg().default)("^(.*://)?([A-Za-z0-9\\-\\.]+)/?(.*)","g");
		urlReg.match(host);
		var __webHost = urlReg.matched(2);
		var __webPath = urlReg.matched(3);
		this.__socket = new WebSocket(schema + "://" + __webHost + ":" + port + "/" + __webPath);
		this.__socket.binaryType = "arraybuffer";
		this.__socket.onopen = $bind(this,this.socket_onOpen);
		this.__socket.onmessage = $bind(this,this.socket_onMessage);
		this.__socket.onclose = $bind(this,this.socket_onClose);
		this.__socket.onerror = $bind(this,this.socket_onError);
		(openfl__$internal_Lib().default).current.addEventListener("enterFrame",$bind(this,this.this_onEnterFrame));
	},
	flush: function() {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		if((_$UInt_UInt_$Impl_$().default).gt((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(this.__output),0)) {
			try {
				var buffer = (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).toArrayBuffer(this.__output);
				if((_$UInt_UInt_$Impl_$().default).gt(buffer.byteLength,(openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(this.__output))) {
					buffer = buffer.slice(0,(openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(this.__output));
				}
				this.__socket.send(buffer);
				var this1 = new (openfl_utils_ByteArrayData().default)(0);
				this.__output = this1;
				this.__output.set_endian(this.__endian);
			} catch( e ) {
				(haxe_CallStack().default).lastException = e;
				var e1 = ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e;
				throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
			}
		}
	},
	readBoolean: function() {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		return this.__input.readBoolean();
	},
	readByte: function() {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		return this.__input.readByte();
	},
	readBytes: function(bytes,offset,length) {
		if(length == null) {
			length = 0;
		}
		if(offset == null) {
			offset = 0;
		}
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		var offset1 = offset;
		var length1 = length;
		if(length1 == null) {
			length1 = 0;
		}
		if(offset1 == null) {
			offset1 = 0;
		}
		this.__input.readBytes(bytes,offset1,length1);
	},
	readDouble: function() {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		return this.__input.readDouble();
	},
	readFloat: function() {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		return this.__input.readFloat();
	},
	readInt: function() {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		return this.__input.readInt();
	},
	readMultiByte: function(length,charSet) {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		return this.__input.readMultiByte(length,charSet);
	},
	readObject: function() {
		if(this.objectEncoding == 10) {
			return (haxe_Unserializer().default).run(this.readUTF());
		} else {
			return null;
		}
	},
	readShort: function() {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		return this.__input.readShort();
	},
	readUnsignedByte: function() {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		return this.__input.readUnsignedByte();
	},
	readUnsignedInt: function() {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		return this.__input.readUnsignedInt();
	},
	readUnsignedShort: function() {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		return this.__input.readUnsignedShort();
	},
	readUTF: function() {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		return this.__input.readUTF();
	},
	readUTFBytes: function(length) {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		return this.__input.readUTFBytes(length);
	},
	writeBoolean: function(value) {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		this.__output.writeBoolean(value);
	},
	writeByte: function(value) {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		this.__output.writeByte(value);
	},
	writeBytes: function(bytes,offset,length) {
		if(length == null) {
			length = 0;
		}
		if(offset == null) {
			offset = 0;
		}
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		var offset1 = offset;
		var length1 = length;
		if(length1 == null) {
			length1 = 0;
		}
		if(offset1 == null) {
			offset1 = 0;
		}
		this.__output.writeBytes(bytes,offset1,length1);
	},
	writeDouble: function(value) {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		this.__output.writeDouble(value);
	},
	writeFloat: function(value) {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		this.__output.writeFloat(value);
	},
	writeInt: function(value) {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		this.__output.writeInt(value);
	},
	writeMultiByte: function(value,charSet) {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		this.__output.writeUTFBytes(value);
	},
	writeObject: function(object) {
		if(this.objectEncoding == 10) {
			this.__output.writeUTF((haxe_Serializer().default).run(object));
		}
	},
	writeShort: function(value) {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		this.__output.writeShort(value);
	},
	writeUnsignedInt: function(value) {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		this.__output.writeUnsignedInt(value);
	},
	writeUTF: function(value) {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		this.__output.writeUTF(value);
	},
	writeUTFBytes: function(value) {
		if(this.__socket == null) {
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_IOError().default)("Operation attempted on invalid socket."));
		}
		this.__output.writeUTFBytes(value);
	},
	__cleanSocket: function() {
		try {
			this.__socket.close();
		} catch( e ) {
			(haxe_CallStack().default).lastException = e;
			var e1 = ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e;
		}
		this.__socket = null;
		this.__connected = false;
		(openfl__$internal_Lib().default).current.removeEventListener("enterFrame",$bind(this,this.this_onEnterFrame));
	},
	socket_onClose: function(_) {
		this.dispatchEvent(new (openfl_events_Event().default)("close"));
	},
	socket_onError: function(e) {
		this.dispatchEvent(new (openfl_events_Event().default)("ioError"));
	},
	socket_onMessage: function(msg) {
		if(this.__input.position == (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(this.__input)) {
			this.__input.clear();
		}
		if(typeof(msg.data) == "string") {
			this.__input.position = (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(this.__input);
			var cachePosition = this.__input.position;
			this.__input.writeUTFBytes(msg.data);
			this.__input.position = cachePosition;
		} else {
			var newData = (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).fromArrayBuffer(msg.data);
			var bytes = this.__input;
			var offset = (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(this.__input);
			if(offset == null) {
				offset = 0;
			}
			newData.readBytes(bytes,offset,0);
		}
		if((_$UInt_UInt_$Impl_$().default).gt(this.__input.get_bytesAvailable(),0)) {
			this.dispatchEvent(new (openfl_events_ProgressEvent().default)("socketData",false,false,(_$UInt_UInt_$Impl_$().default).toFloat(this.__input.get_bytesAvailable()),0));
		}
	},
	socket_onOpen: function(_) {
		this.__connected = true;
		this.dispatchEvent(new (openfl_events_Event().default)("connect"));
	},
	this_onEnterFrame: function(event) {
		if(this.__socket != null) {
			this.flush();
		}
	},
	get_bytesAvailable: function() {
		return this.__input.get_bytesAvailable();
	},
	get_bytesPending: function() {
		return (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).get_length(this.__output);
	},
	get_connected: function() {
		return this.__connected;
	},
	get_endian: function() {
		return this.__endian;
	},
	set_endian: function(value) {
		this.__endian = value;
		if(this.__input != null) {
			this.__input.set_endian(value);
		}
		if(this.__output != null) {
			this.__output.set_endian(value);
		}
		return this.__endian;
	}
});
Socket.prototype.__class__ = Socket.prototype.constructor = $hxClasses["openfl.net.Socket"] = Socket;

// Init

Object.defineProperties(Socket.prototype,{ bytesAvailable : { get : function () { return this.get_bytesAvailable (); }}, bytesPending : { get : function () { return this.get_bytesPending (); }}, connected : { get : function () { return this.get_connected (); }}, endian : { get : function () { return this.get_endian (); }, set : function (v) { return this.set_endian (v); }}});

// Statics


Socket.__meta__ = { fields : { secure : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}}

// Export

exports.default = Socket;