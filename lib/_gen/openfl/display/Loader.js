// Class: openfl.display.Loader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_display_DisplayObjectContainer() {return require("./../../openfl/display/DisplayObjectContainer");}
function openfl__$internal_Lib() {return require("./../../openfl/_internal/Lib");}
function openfl_Lib() {return require("./../../openfl/Lib");}
function StringTools() {return require("./../../StringTools");}
function openfl_display_BitmapData() {return require("./../../openfl/display/BitmapData");}
function openfl_net_URLLoader() {return require("./../../openfl/net/URLLoader");}
function openfl_utils_Assets() {return require("./../../openfl/utils/Assets");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function openfl_events_IOErrorEvent() {return require("./../../openfl/events/IOErrorEvent");}
function Std() {return require("./../../Std");}
function openfl_display_Bitmap() {return require("./../../openfl/display/Bitmap");}
function openfl_events_ProgressEvent() {return require("./../../openfl/events/ProgressEvent");}
function lime_utils_AssetManifest() {return require("./../../lime/utils/AssetManifest");}
function haxe_io_Path() {return require("./../../haxe/io/Path");}
function lime_utils_AssetLibrary() {return require("./../../lime/utils/AssetLibrary");}
function openfl_utils_AssetLibrary() {return require("./../../openfl/utils/AssetLibrary");}
function openfl_display_Sprite() {return require("./../../openfl/display/Sprite");}
function openfl_display_LoaderInfo() {return require("./../../openfl/display/LoaderInfo");}

// Constructor

var Loader = function() {
	(openfl_display_DisplayObjectContainer().default).call(this);
	this.contentLoaderInfo = (openfl_display_LoaderInfo().default).create(this);
	this.uncaughtErrorEvents = this.contentLoaderInfo.uncaughtErrorEvents;
	this.__unloaded = true;
}

// Meta

Loader.__name__ = "openfl.display.Loader";
Loader.__isInterface__ = false;
Loader.__super__ = (openfl_display_DisplayObjectContainer().default);
Loader.prototype = $extend((openfl_display_DisplayObjectContainer().default).prototype, {
	close: function() {
		(openfl__$internal_Lib().default).notImplemented({ fileName : "../src/openfl/display/Loader.hx", lineNumber : 229, className : "openfl.display.Loader", methodName : "close"});
	},
	load: function(request,context) {
		this.unload();
		this.contentLoaderInfo.loaderURL = (openfl_Lib().default).get_current().get_loaderInfo().url;
		this.contentLoaderInfo.url = request.url;
		this.__unloaded = false;
		if(request.contentType == null || request.contentType == "") {
			var extension = "";
			this.__path = request.url;
			var queryIndex = this.__path.indexOf("?");
			if(queryIndex > -1) {
				this.__path = this.__path.substring(0,queryIndex);
			}
			while((StringTools().default).endsWith(this.__path,"/")) this.__path = this.__path.substring(0,this.__path.length - 1);
			if((StringTools().default).endsWith(this.__path,".bundle")) {
				this.__path += "/library.json";
				if(queryIndex > -1) {
					request.url = this.__path + request.url.substring(queryIndex);
				} else {
					request.url = this.__path;
				}
			}
			var extIndex = this.__path.lastIndexOf(".");
			if(extIndex > -1) {
				extension = this.__path.substring(extIndex + 1);
			}
			var tmp;
			switch(extension) {
			case "gif":
				tmp = "image/gif";
				break;
			case "jpeg":case "jpg":
				tmp = "image/jpeg";
				break;
			case "js":
				tmp = "application/javascript";
				break;
			case "json":
				tmp = "application/json";
				break;
			case "png":
				tmp = "image/png";
				break;
			case "swf":
				tmp = "application/x-shockwave-flash";
				break;
			default:
				tmp = "application/x-www-form-urlencoded";
			}
			this.contentLoaderInfo.contentType = tmp;
		} else {
			this.contentLoaderInfo.contentType = request.contentType;
		}
		if(this.contentLoaderInfo.contentType.indexOf("image/") > -1 && request.method == "GET" && (request.requestHeaders == null || request.requestHeaders.length == 0) && request.userAgent == null) {
			(openfl_display_BitmapData().default).loadFromFile(request.url).onComplete($bind(this,this.BitmapData_onLoad)).onError($bind(this,this.BitmapData_onError)).onProgress($bind(this,this.BitmapData_onProgress));
			return;
		}
		var loader = new (openfl_net_URLLoader().default)();
		loader.dataFormat = "binary";
		if(this.contentLoaderInfo.contentType.indexOf("/json") > -1 || this.contentLoaderInfo.contentType.indexOf("/javascript") > -1 || this.contentLoaderInfo.contentType.indexOf("/ecmascript") > -1) {
			loader.dataFormat = "text";
		}
		loader.addEventListener("complete",$bind(this,this.loader_onComplete));
		loader.addEventListener("ioError",$bind(this,this.loader_onError));
		loader.addEventListener("progress",$bind(this,this.loader_onProgress));
		loader.load(request);
	},
	loadBytes: function(buffer,context) {
		(openfl_display_BitmapData().default).loadFromBytes(buffer).onComplete($bind(this,this.BitmapData_onLoad)).onError($bind(this,this.BitmapData_onError));
	},
	unload: function() {
		if(!this.__unloaded) {
			if(this.content != null && this.content.parent == this) {
				(openfl_display_DisplayObjectContainer().default).prototype.removeChild.call(this,this.content);
			}
			if(this.__library != null) {
				(openfl_utils_Assets().default).unloadLibrary(this.contentLoaderInfo.url);
				this.__library = null;
			}
			this.content = null;
			this.contentLoaderInfo.url = null;
			this.contentLoaderInfo.contentType = null;
			this.contentLoaderInfo.content = null;
			this.contentLoaderInfo.bytesLoaded = 0;
			this.contentLoaderInfo.bytesTotal = 0;
			this.contentLoaderInfo.width = 0;
			this.contentLoaderInfo.height = 0;
			this.__unloaded = true;
			this.contentLoaderInfo.dispatchEvent(new (openfl_events_Event().default)("unload"));
		}
	},
	unloadAndStop: function(gc) {
		if(gc == null) {
			gc = true;
		}
		if(this.content != null) {
			this.content.__stopAllMovieClips();
		}
		var _g = 0;
		var _g1 = this.get_numChildren();
		while(_g < _g1) {
			var i = _g++;
			this.getChildAt(i).__stopAllMovieClips();
		}
		this.unload();
		var gc1 = gc;
	},
	__dispatchError: function(text) {
		var event = new (openfl_events_IOErrorEvent().default)("ioError");
		event.text = text;
		this.contentLoaderInfo.dispatchEvent(event);
	},
	__setContent: function(content,width,height) {
		this.content = content;
		this.contentLoaderInfo.content = content;
		this.contentLoaderInfo.width = width;
		this.contentLoaderInfo.height = height;
		if(content != null) {
			(openfl_display_DisplayObjectContainer().default).prototype.addChildAt.call(this,content,0);
		}
	},
	BitmapData_onError: function(error) {
		this.__dispatchError((Std().default).string(error));
	},
	BitmapData_onLoad: function(bitmapData) {
		if(bitmapData == null) {
			this.__dispatchError("Unknown error");
			return;
		}
		this.__setContent(new (openfl_display_Bitmap().default)(bitmapData),bitmapData.width,bitmapData.height);
		this.contentLoaderInfo.dispatchEvent(new (openfl_events_Event().default)("complete"));
	},
	BitmapData_onProgress: function(bytesLoaded,bytesTotal) {
		var event = new (openfl_events_ProgressEvent().default)("progress");
		event.bytesLoaded = bytesLoaded;
		event.bytesTotal = bytesTotal;
		this.contentLoaderInfo.dispatchEvent(event);
	},
	loader_onComplete: function(event) {
		var _gthis = this;
		var loader = event.target;
		if(this.contentLoaderInfo.contentType != null && this.contentLoaderInfo.contentType.indexOf("/json") > -1) {
			var manifest = (lime_utils_AssetManifest().default).parse(loader.data,(haxe_io_Path().default).directory(this.__path));
			if(manifest == null) {
				this.__dispatchError("Cannot parse asset manifest");
				return;
			}
			var library = (lime_utils_AssetLibrary().default).fromManifest(manifest);
			if(library == null) {
				this.__dispatchError("Cannot open library");
				return;
			}
			if(((library) instanceof (openfl_utils_AssetLibrary().default))) {
				library.load().onComplete(function(_) {
					_gthis.__library = library;
					(openfl_utils_Assets().default).registerLibrary(_gthis.contentLoaderInfo.url,_gthis.__library);
					if(manifest.name != null && !(openfl_utils_Assets().default).hasLibrary(manifest.name)) {
						(openfl_utils_Assets().default).registerLibrary(manifest.name,_gthis.__library);
					}
					var clip = _gthis.__library.getMovieClip("");
					var tmp = (Std().default).int(clip.get_width());
					var tmp1 = (Std().default).int(clip.get_height());
					_gthis.__setContent(clip,tmp,tmp1);
					_gthis.contentLoaderInfo.dispatchEvent(new (openfl_events_Event().default)("complete"));
				}).onError(function(e) {
					_gthis.__dispatchError(e);
				});
			}
		} else if(this.contentLoaderInfo.contentType != null && (this.contentLoaderInfo.contentType.indexOf("/javascript") > -1 || this.contentLoaderInfo.contentType.indexOf("/ecmascript") > -1)) {
			this.__setContent(new (openfl_display_Sprite().default)(),0,0);
			eval("(function () {" + (Std().default).string(loader.data) + "})()");
			this.contentLoaderInfo.dispatchEvent(new (openfl_events_Event().default)("complete"));
		} else {
			this.contentLoaderInfo.bytes = loader.data;
			(openfl_display_BitmapData().default).loadFromBytes(loader.data).onComplete($bind(this,this.BitmapData_onLoad)).onError($bind(this,this.BitmapData_onError));
		}
	},
	loader_onError: function(event) {
		event.target = this.contentLoaderInfo;
		this.contentLoaderInfo.dispatchEvent(event);
	},
	loader_onProgress: function(event) {
		event.target = this.contentLoaderInfo;
		this.contentLoaderInfo.dispatchEvent(event);
	}
});
Loader.prototype.__class__ = Loader.prototype.constructor = $hxClasses["openfl.display.Loader"] = Loader;

// Init



// Statics


Loader.__meta__ = { fields : { BitmapData_onError : { SuppressWarnings : ["checkstyle:Dynamic"]}}}

// Export

exports.default = Loader;