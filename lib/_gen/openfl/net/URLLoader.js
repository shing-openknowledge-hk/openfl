// Class: openfl.net.URLLoader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_EventDispatcher() {return require("./../../openfl/events/EventDispatcher");}
function lime_net__$HTTPRequest_$openfl_$utils_$ByteArray() {return require("./../../lime/net/_HTTPRequest_openfl_utils_ByteArray");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function lime_net__$HTTPRequest_$String() {return require("./../../lime/net/_HTTPRequest_String");}
function openfl_events_HTTPStatusEvent() {return require("./../../openfl/events/HTTPStatusEvent");}
function openfl_net_URLRequestHeader() {return require("./../../openfl/net/URLRequestHeader");}
function Type() {return require("./../../Type");}
function ValueType() {return require("./../../ValueType");}
function Reflect() {return require("./../../Reflect");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function Std() {return require("./../../Std");}
function lime_net_HTTPRequestHeader() {return require("./../../lime/net/HTTPRequestHeader");}
function openfl_events_SecurityErrorEvent() {return require("./../../openfl/events/SecurityErrorEvent");}
function openfl_events_IOErrorEvent() {return require("./../../openfl/events/IOErrorEvent");}
function openfl_events_ProgressEvent() {return require("./../../openfl/events/ProgressEvent");}

// Constructor

var URLLoader = function(request) {
	(openfl_events_EventDispatcher().default).call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.dataFormat = "text";
	if(request != null) {
		this.load(request);
	}
}

// Meta

URLLoader.__name__ = "openfl.net.URLLoader";
URLLoader.__isInterface__ = false;
URLLoader.__super__ = (openfl_events_EventDispatcher().default);
URLLoader.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	close: function() {
		if(this.__httpRequest != null) {
			this.__httpRequest.cancel();
		}
	},
	load: function(request) {
		var _gthis = this;
		if(this.dataFormat == "binary") {
			var httpRequest = new (lime_net__$HTTPRequest_$openfl_$utils_$ByteArray().default)();
			this.__prepareRequest(httpRequest,request);
			httpRequest.load().onProgress($bind(this,this.httpRequest_onProgress)).onError($bind(this,this.httpRequest_onError)).onComplete(function(data) {
				_gthis.__dispatchStatus();
				_gthis.data = data;
				var event = new (openfl_events_Event().default)("complete");
				_gthis.dispatchEvent(event);
			});
		} else {
			var httpRequest1 = new (lime_net__$HTTPRequest_$String().default)();
			this.__prepareRequest(httpRequest1,request);
			httpRequest1.load().onProgress($bind(this,this.httpRequest_onProgress)).onError($bind(this,this.httpRequest_onError)).onComplete(function(data1) {
				_gthis.__dispatchStatus();
				_gthis.data = data1;
				var event1 = new (openfl_events_Event().default)("complete");
				_gthis.dispatchEvent(event1);
			});
		}
	},
	__dispatchStatus: function() {
		var event = new (openfl_events_HTTPStatusEvent().default)("httpStatus",false,false,this.__httpRequest.responseStatus);
		event.responseURL = this.__httpRequest.uri;
		var headers = [];
		if(this.__httpRequest.enableResponseHeaders && this.__httpRequest.responseHeaders != null) {
			var _g = 0;
			var _g1 = this.__httpRequest.responseHeaders;
			while(_g < _g1.length) {
				var header = _g1[_g];
				++_g;
				headers.push(new (openfl_net_URLRequestHeader().default)(header.name,header.value));
			}
		}
		event.responseHeaders = headers;
		this.dispatchEvent(event);
	},
	__prepareRequest: function(httpRequest,request) {
		this.__httpRequest = httpRequest;
		this.__httpRequest.uri = request.url;
		this.__httpRequest.method = request.method;
		if(request.data != null) {
			if((Type().default).typeof(request.data) == (ValueType().default).TObject) {
				var fields = (Reflect().default).fields(request.data);
				var _g = 0;
				while(_g < fields.length) {
					var field = fields[_g];
					++_g;
					this.__httpRequest.formData.set(field,(Reflect().default).field(request.data,field));
				}
			} else if(((request.data) instanceof (haxe_io_Bytes().default))) {
				this.__httpRequest.data = request.data;
			} else {
				this.__httpRequest.data = (haxe_io_Bytes().default).ofString((Std().default).string(request.data));
			}
		}
		this.__httpRequest.contentType = request.contentType;
		if(request.requestHeaders != null) {
			var _g1 = 0;
			var _g11 = request.requestHeaders;
			while(_g1 < _g11.length) {
				var header = _g11[_g1];
				++_g1;
				this.__httpRequest.headers.push(new (lime_net_HTTPRequestHeader().default)(header.name,header.value));
			}
		}
		this.__httpRequest.followRedirects = request.followRedirects;
		this.__httpRequest.timeout = (Std().default).int(request.idleTimeout);
		this.__httpRequest.withCredentials = request.manageCookies;
		var userAgent = request.userAgent;
		if(userAgent == null) {
			userAgent = "Mozilla/5.0 (Windows; U; en) AppleWebKit/420+ (KHTML, like Gecko) OpenFL/1.0";
		}
		this.__httpRequest.userAgent = request.userAgent;
		this.__httpRequest.enableResponseHeaders = true;
	},
	httpRequest_onError: function(error) {
		this.__dispatchStatus();
		if(error == 403) {
			var event = new (openfl_events_SecurityErrorEvent().default)("securityError");
			event.text = (Std().default).string(error);
			this.dispatchEvent(event);
		} else {
			var event1 = new (openfl_events_IOErrorEvent().default)("ioError");
			event1.text = (Std().default).string(error);
			this.dispatchEvent(event1);
		}
	},
	httpRequest_onProgress: function(bytesLoaded,bytesTotal) {
		var event = new (openfl_events_ProgressEvent().default)("progress");
		event.bytesLoaded = bytesLoaded;
		event.bytesTotal = bytesTotal;
		this.dispatchEvent(event);
	}
});
URLLoader.prototype.__class__ = URLLoader.prototype.constructor = $hxClasses["openfl.net.URLLoader"] = URLLoader;

// Init



// Statics




// Export

exports.default = URLLoader;