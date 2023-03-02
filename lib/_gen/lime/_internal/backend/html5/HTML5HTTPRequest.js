// Class: lime._internal.backend.html5.HTML5HTTPRequest

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
function Lambda() {return require("./../../../../Lambda");}
function StringTools() {return require("./../../../../StringTools");}
function Std() {return require("./../../../../Std");}
function lime_app_Promise() {return require("./../../../../lime/app/Promise");}
function HxOverrides() {return require("./../../../../HxOverrides");}
function lime_net_HTTPRequestHeader() {return require("./../../../../lime/net/HTTPRequestHeader");}
function haxe_io_Bytes() {return require("./../../../../haxe/io/Bytes");}
function haxe_ds_List() {return require("./../../../../haxe/ds/List");}
function lime__$internal_format_Base64() {return require("./../../../../lime/_internal/format/Base64");}
function lime_graphics_ImageBuffer() {return require("./../../../../lime/graphics/ImageBuffer");}
function lime_graphics_Image() {return require("./../../../../lime/graphics/Image");}
function EReg() {return require("./../../../../EReg");}

// Constructor

var HTML5HTTPRequest = function() {
	this.validStatus0 = new (EReg().default)("Tizen","gi").match(window.navigator.userAgent);
}

// Meta

HTML5HTTPRequest.__name__ = "lime._internal.backend.html5.HTML5HTTPRequest";
HTML5HTTPRequest.__isInterface__ = false;
HTML5HTTPRequest.prototype = {
	cancel: function() {
		if(this.request != null) {
			this.request.abort();
		}
	},
	init: function(parent) {
		this.parent = parent;
	},
	load: function(uri,progress,readyStateChange) {
		this.request = new XMLHttpRequest();
		if(this.parent.method == "POST") {
			this.request.upload.addEventListener("progress",progress,false);
		} else {
			this.request.addEventListener("progress",progress,false);
		}
		this.request.onreadystatechange = readyStateChange;
		var query = "";
		if(this.parent.data == null) {
			var key = this.parent.formData.keys();
			while(key.hasNext()) {
				var key1 = key.next();
				if(query.length > 0) {
					query += "&";
				}
				var value = this.parent.formData.get(key1);
				if(key1.indexOf("[]") > -1 && ((value) instanceof Array)) {
					var arrayValue = (Lambda().default).map(value,function(v) {
						return (StringTools().default).urlEncode(v);
					}).join("&amp;" + key1 + "=");
					query += (StringTools().default).urlEncode(key1) + "=" + arrayValue;
				} else {
					query += (StringTools().default).urlEncode(key1) + "=" + (StringTools().default).urlEncode((Std().default).string(value));
				}
			}
			if(this.parent.method == "GET" && query != "") {
				if(uri.indexOf("?") > -1) {
					uri += "&" + query;
				} else {
					uri += "?" + query;
				}
				query = "";
			}
		}
		this.request.open((Std().default).string(this.parent.method),uri,true);
		if(this.parent.timeout > 0) {
			this.request.timeout = this.parent.timeout;
		}
		if(this.binary) {
			this.request.responseType = "arraybuffer";
		}
		var contentType = null;
		var _g = 0;
		var _g1 = this.parent.headers;
		while(_g < _g1.length) {
			var header = _g1[_g];
			++_g;
			if(header.name == "Content-Type") {
				contentType = header.value;
			} else {
				this.request.setRequestHeader(header.name,header.value);
			}
		}
		if(this.parent.contentType != null) {
			contentType = this.parent.contentType;
		}
		if(contentType == null) {
			if(this.parent.data != null) {
				contentType = "application/octet-stream";
			} else if(query != "") {
				contentType = "application/x-www-form-urlencoded";
			}
		}
		if(contentType != null) {
			this.request.setRequestHeader("Content-Type",contentType);
		}
		if(this.parent.withCredentials) {
			this.request.withCredentials = true;
		}
		if(this.parent.data != null) {
			this.request.send(this.parent.data.getData());
		} else {
			this.request.send(query);
		}
	},
	loadData: function(uri) {
		var promise = new (lime_app_Promise().default)();
		if(HTML5HTTPRequest.activeRequests < HTML5HTTPRequest.requestLimit) {
			HTML5HTTPRequest.activeRequests++;
			this.__loadData(uri,promise);
		} else {
			HTML5HTTPRequest.requestQueue.add({ instance : this, uri : uri, promise : promise, type : "BINARY", options : 0});
		}
		return promise.future;
	},
	loadText: function(uri) {
		var promise = new (lime_app_Promise().default)();
		if(HTML5HTTPRequest.activeRequests < HTML5HTTPRequest.requestLimit) {
			HTML5HTTPRequest.activeRequests++;
			this.__loadText(uri,promise);
		} else {
			HTML5HTTPRequest.requestQueue.add({ instance : this, uri : uri, promise : promise, type : "TEXT", options : 0});
		}
		return promise.future;
	},
	processResponse: function() {
		if(this.parent.enableResponseHeaders) {
			this.parent.responseHeaders = [];
			var name;
			var value;
			var _g = 0;
			var _g1 = this.request.getAllResponseHeaders().split("\n");
			while(_g < _g1.length) {
				var line = _g1[_g];
				++_g;
				name = (StringTools().default).trim((HxOverrides().default).substr(line,0,line.indexOf(":")));
				value = (StringTools().default).trim((HxOverrides().default).substr(line,line.indexOf(":") + 1,null));
				if(name != "") {
					this.parent.responseHeaders.push(new (lime_net_HTTPRequestHeader().default)(name,value));
				}
			}
		}
		this.parent.responseStatus = this.request.status;
	},
	__loadData: function(uri,promise) {
		var _gthis = this;
		var progress = function(event) {
			promise.progress(event.loaded,event.total);
		};
		var readyStateChange = function(event1) {
			if(_gthis.request.readyState != 4) {
				return;
			}
			if(_gthis.request.status != null && (_gthis.request.status >= 200 && _gthis.request.status < 400 || _gthis.validStatus0 && _gthis.request.status == 0)) {
				var bytes = null;
				if(_gthis.request.responseType == "") {
					if(_gthis.request.responseText != null) {
						bytes = (haxe_io_Bytes().default).ofString(_gthis.request.responseText);
					}
				} else if(_gthis.request.response != null) {
					bytes = (haxe_io_Bytes().default).ofData(_gthis.request.response);
				}
				_gthis.processResponse();
				promise.complete(bytes);
			} else {
				_gthis.processResponse();
				promise.error(_gthis.request.status);
			}
			_gthis.request = null;
			HTML5HTTPRequest.activeRequests--;
			HTML5HTTPRequest.processQueue();
		};
		this.binary = true;
		this.load(uri,progress,readyStateChange);
	},
	__loadText: function(uri,promise) {
		var _gthis = this;
		var progress = function(event) {
			promise.progress(event.loaded,event.total);
		};
		var readyStateChange = function(event1) {
			if(_gthis.request.readyState != 4) {
				return;
			}
			if(_gthis.request.status != null && (_gthis.request.status >= 200 && _gthis.request.status <= 400 || _gthis.validStatus0 && _gthis.request.status == 0)) {
				_gthis.processResponse();
				promise.complete(_gthis.request.responseText);
			} else {
				_gthis.processResponse();
				promise.error(_gthis.request.status);
			}
			_gthis.request = null;
			HTML5HTTPRequest.activeRequests--;
			HTML5HTTPRequest.processQueue();
		};
		this.binary = false;
		this.load(uri,progress,readyStateChange);
	}
};
HTML5HTTPRequest.prototype.__class__ = HTML5HTTPRequest.prototype.constructor = $hxClasses["lime._internal.backend.html5.HTML5HTTPRequest"] = HTML5HTTPRequest;

// Init



// Statics

HTML5HTTPRequest.loadImage = function(uri) {
	var promise = new (lime_app_Promise().default)();
	if(HTML5HTTPRequest.activeRequests < HTML5HTTPRequest.requestLimit) {
		HTML5HTTPRequest.activeRequests++;
		HTML5HTTPRequest.__loadImage(uri,promise,0);
	} else {
		HTML5HTTPRequest.requestQueue.add({ instance : null, uri : uri, promise : promise, type : "IMAGE", options : 0});
	}
	return promise.future;
}
HTML5HTTPRequest.loadImageFromBytes = function(bytes,type) {
	var uri = HTML5HTTPRequest.__createBlobURIFromBytes(bytes,type);
	if(uri != null) {
		var promise = new (lime_app_Promise().default)();
		if(HTML5HTTPRequest.activeRequests < HTML5HTTPRequest.requestLimit) {
			HTML5HTTPRequest.activeRequests++;
			HTML5HTTPRequest.__loadImage(uri,promise,1);
		} else {
			HTML5HTTPRequest.requestQueue.add({ instance : null, uri : uri, promise : promise, type : "IMAGE", options : 1});
		}
		return promise.future;
	} else {
		return HTML5HTTPRequest.loadImage("data:" + type + ";base64," + (lime__$internal_format_Base64().default).encode(bytes));
	}
}
HTML5HTTPRequest.processQueue = function() {
	if(HTML5HTTPRequest.activeRequests < HTML5HTTPRequest.requestLimit && HTML5HTTPRequest.requestQueue.length > 0) {
		HTML5HTTPRequest.activeRequests++;
		var queueItem = HTML5HTTPRequest.requestQueue.pop();
		switch(queueItem.type) {
		case "BINARY":
			queueItem.instance.__loadData(queueItem.uri,queueItem.promise);
			break;
		case "IMAGE":
			HTML5HTTPRequest.__loadImage(queueItem.uri,queueItem.promise,queueItem.options);
			break;
		case "TEXT":
			queueItem.instance.__loadText(queueItem.uri,queueItem.promise);
			break;
		default:
			HTML5HTTPRequest.activeRequests--;
		}
	}
}
HTML5HTTPRequest.__createBlobURIFromBytes = function(bytes,type) {
	return URL.createObjectURL(new Blob([bytes.getData()],{ type : type}));
}
HTML5HTTPRequest.__fixHostname = function(hostname) {
	if(hostname == null) {
		return "";
	} else {
		return hostname;
	}
}
HTML5HTTPRequest.__fixPort = function(port,protocol) {
	if(port == null || port == "") {
		switch(protocol) {
		case "ftp:":
			return "21";
		case "gopher:":
			return "70";
		case "http:":
			return "80";
		case "https:":
			return "443";
		case "ws:":
			return "80";
		case "wss:":
			return "443";
		default:
			return "";
		}
	}
	return port;
}
HTML5HTTPRequest.__fixProtocol = function(protocol) {
	if(protocol == null || protocol == "") {
		return "http:";
	} else {
		return protocol;
	}
}
HTML5HTTPRequest.__isInMemoryURI = function(uri) {
	if(!(StringTools().default).startsWith(uri,"data:")) {
		return (StringTools().default).startsWith(uri,"blob:");
	} else {
		return true;
	}
}
HTML5HTTPRequest.__isSameOrigin = function(path) {
	if(path == null || path == "") {
		return true;
	}
	if(HTML5HTTPRequest.__isInMemoryURI(path)) {
		return true;
	}
	if(HTML5HTTPRequest.originElement == null) {
		HTML5HTTPRequest.originElement = window.document.createElement("a");
		HTML5HTTPRequest.originHostname = HTML5HTTPRequest.__fixHostname(window.location.hostname);
		HTML5HTTPRequest.originProtocol = HTML5HTTPRequest.__fixProtocol(window.location.protocol);
		HTML5HTTPRequest.originPort = HTML5HTTPRequest.__fixPort(window.location.port,HTML5HTTPRequest.originProtocol);
	}
	var a = HTML5HTTPRequest.originElement;
	a.href = path;
	if(a.hostname == "") {
		a.href = a.href;
	}
	var hostname = HTML5HTTPRequest.__fixHostname(a.hostname);
	var protocol = HTML5HTTPRequest.__fixProtocol(a.protocol);
	var port = HTML5HTTPRequest.__fixPort(a.port,protocol);
	var sameHost = hostname == "" || hostname == HTML5HTTPRequest.originHostname;
	var samePort = port == "" || port == HTML5HTTPRequest.originPort;
	if(protocol != "file:" && sameHost) {
		return samePort;
	} else {
		return false;
	}
}
HTML5HTTPRequest.__loadImage = function(uri,promise,options) {
	var image = new Image();
	if(!HTML5HTTPRequest.__isSameOrigin(uri)) {
		image.crossOrigin = "Anonymous";
	}
	if(HTML5HTTPRequest.supportsImageProgress == null) {
		HTML5HTTPRequest.supportsImageProgress = 'onprogress' in image;
	}
	if(HTML5HTTPRequest.supportsImageProgress || HTML5HTTPRequest.__isInMemoryURI(uri)) {
		image.addEventListener("load",function(event) {
			HTML5HTTPRequest.__revokeBlobURI(uri,options);
			var buffer = new (lime_graphics_ImageBuffer().default)(null,image.width,image.height);
			buffer.__srcImage = image;
			HTML5HTTPRequest.activeRequests--;
			HTML5HTTPRequest.processQueue();
			promise.complete(new (lime_graphics_Image().default)(buffer));
		},false);
		image.addEventListener("progress",function(event1) {
			promise.progress(event1.loaded,event1.total);
		},false);
		image.addEventListener("error",function(event2) {
			HTML5HTTPRequest.__revokeBlobURI(uri,options);
			HTML5HTTPRequest.activeRequests--;
			HTML5HTTPRequest.processQueue();
			promise.error(event2.detail);
		},false);
		image.src = uri;
	} else {
		var request = new XMLHttpRequest();
		request.onload = function(_) {
			HTML5HTTPRequest.activeRequests--;
			HTML5HTTPRequest.processQueue();
			var img = new (lime_graphics_Image().default)();
			img.__fromBytes((haxe_io_Bytes().default).ofData(request.response),function(img1) {
				promise.complete(img1);
			});
		};
		request.onerror = function(event3) {
			promise.error(event3.message);
		};
		request.onprogress = function(event4) {
			if(event4.lengthComputable) {
				promise.progress(event4.loaded,event4.total);
			}
		};
		request.open("GET",uri,true);
		request.responseType = "arraybuffer";
		request.overrideMimeType("text/plain; charset=x-user-defined");
		request.send(null);
	}
}
HTML5HTTPRequest.__revokeBlobURI = function(uri,options) {
	if((options & 1) != 0) {
		URL.revokeObjectURL(uri);
	}
}
HTML5HTTPRequest.OPTION_REVOKE_URL = 1
HTML5HTTPRequest.activeRequests = 0
HTML5HTTPRequest.requestLimit = 17
HTML5HTTPRequest.requestQueue = new (haxe_ds_List().default)()

// Export

exports.default = HTML5HTTPRequest;