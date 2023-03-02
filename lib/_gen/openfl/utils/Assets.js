// Class: openfl.utils.Assets

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
function openfl_utils_AssetCache() {return require("./../../openfl/utils/AssetCache");}
function openfl_events_EventDispatcher() {return require("./../../openfl/events/EventDispatcher");}
function lime_utils_Assets() {return require("./../../lime/utils/Assets");}
function openfl_display_BitmapData() {return require("./../../openfl/display/BitmapData");}
function openfl_utils__$ByteArray_ByteArray_$Impl_$() {return require("./../../openfl/utils/_ByteArray/ByteArray_Impl_");}
function openfl_text_Font() {return require("./../../openfl/text/Font");}
function HxOverrides() {return require("./../../HxOverrides");}
function openfl_utils_AssetLibrary() {return require("./../../openfl/utils/AssetLibrary");}
function lime_utils_Log() {return require("./../../lime/utils/Log");}
function openfl_media_Sound() {return require("./../../openfl/media/Sound");}
function lime_app_Promise() {return require("./../../lime/app/Promise");}
function lime_app_Future() {return require("./../../lime/app/Future");}
function Type() {return require("./../../Type");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}

// Constructor

var Assets = function(){}

// Meta

Assets.__name__ = "openfl.utils.Assets";
Assets.__isInterface__ = false;
Assets.prototype = {
	
};
Assets.prototype.__class__ = Assets.prototype.constructor = $hxClasses["openfl.utils.Assets"] = Assets;

// Init



// Statics

Assets.addEventListener = function(type,listener,useCapture,priority,useWeakReference) {
	if(useWeakReference == null) {
		useWeakReference = false;
	}
	if(priority == null) {
		priority = 0;
	}
	if(useCapture == null) {
		useCapture = false;
	}
	if(!(lime_utils_Assets().default).onChange.has(Assets.LimeAssets_onChange)) {
		(lime_utils_Assets().default).onChange.add(Assets.LimeAssets_onChange);
	}
	Assets.dispatcher.addEventListener(type,listener,useCapture,priority,useWeakReference);
}
Assets.dispatchEvent = function(event) {
	return Assets.dispatcher.dispatchEvent(event);
}
Assets.exists = function(id,type) {
	return (lime_utils_Assets().default).exists(id,type);
}
Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	if(useCache && Assets.cache.get_enabled() && Assets.cache.hasBitmapData(id)) {
		var bitmapData = Assets.cache.getBitmapData(id);
		if(Assets.isValidBitmapData(bitmapData)) {
			return bitmapData;
		}
	}
	var image = (lime_utils_Assets().default).getImage(id,false);
	if(image != null) {
		var bitmapData1 = (openfl_display_BitmapData().default).fromImage(image);
		if(useCache && Assets.cache.get_enabled()) {
			Assets.cache.setBitmapData(id,bitmapData1);
		}
		return bitmapData1;
	}
	return null;
}
Assets.getBytes = function(id) {
	return (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).fromBytes((lime_utils_Assets().default).getBytes(id));
}
Assets.getFont = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	if(useCache && Assets.cache.get_enabled() && Assets.cache.hasFont(id)) {
		return Assets.cache.getFont(id);
	}
	var limeFont = (lime_utils_Assets().default).getFont(id,false);
	if(limeFont != null) {
		var font = new (openfl_text_Font().default)();
		font.__fromLimeFont(limeFont);
		if(useCache && Assets.cache.get_enabled()) {
			Assets.cache.setFont(id,font);
		}
		return font;
	}
	return new (openfl_text_Font().default)();
}
Assets.getLibrary = function(name) {
	return (lime_utils_Assets().default).getLibrary(name);
}
Assets.getMovieClip = function(id) {
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = (HxOverrides().default).substr(id,id.indexOf(":") + 1,null);
	var limeLibrary = Assets.getLibrary(libraryName);
	if(limeLibrary != null) {
		if(((limeLibrary) instanceof (openfl_utils_AssetLibrary().default))) {
			var library = limeLibrary;
			if(library.exists(symbolName,"MOVIE_CLIP")) {
				if(library.isLocal(symbolName,"MOVIE_CLIP")) {
					return library.getMovieClip(symbolName);
				} else {
					(lime_utils_Log().default).error("MovieClip asset \"" + id + "\" exists, but only asynchronously",{ fileName : "../src/openfl/utils/Assets.hx", lineNumber : 207, className : "openfl.utils.Assets", methodName : "getMovieClip"});
					return null;
				}
			}
		}
		(lime_utils_Log().default).error("There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "../src/openfl/utils/Assets.hx", lineNumber : 213, className : "openfl.utils.Assets", methodName : "getMovieClip"});
	} else {
		(lime_utils_Log().default).error("There is no asset library named \"" + libraryName + "\"",{ fileName : "../src/openfl/utils/Assets.hx", lineNumber : 217, className : "openfl.utils.Assets", methodName : "getMovieClip"});
	}
	return null;
}
Assets.getMusic = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	return Assets.getSound(id,useCache);
}
Assets.getPath = function(id) {
	return (lime_utils_Assets().default).getPath(id);
}
Assets.getSound = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	if(useCache && Assets.cache.get_enabled() && Assets.cache.hasSound(id)) {
		var sound = Assets.cache.getSound(id);
		if(Assets.isValidSound(sound)) {
			return sound;
		}
	}
	var buffer = (lime_utils_Assets().default).getAudioBuffer(id,false);
	if(buffer != null) {
		var sound1 = (openfl_media_Sound().default).fromAudioBuffer(buffer);
		if(useCache && Assets.cache.get_enabled()) {
			Assets.cache.setSound(id,sound1);
		}
		return sound1;
	}
	return null;
}
Assets.getText = function(id) {
	return (lime_utils_Assets().default).getText(id);
}
Assets.hasEventListener = function(type) {
	return Assets.dispatcher.hasEventListener(type);
}
Assets.hasLibrary = function(name) {
	return (lime_utils_Assets().default).hasLibrary(name);
}
Assets.isLocal = function(id,type,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	if(useCache && Assets.cache.get_enabled()) {
		if(type == "IMAGE" || type == null) {
			if(Assets.cache.hasBitmapData(id)) {
				return true;
			}
		}
		if(type == "FONT" || type == null) {
			if(Assets.cache.hasFont(id)) {
				return true;
			}
		}
		if(type == "SOUND" || type == "MUSIC" || type == null) {
			if(Assets.cache.hasSound(id)) {
				return true;
			}
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = (HxOverrides().default).substr(id,id.indexOf(":") + 1,null);
	var library = Assets.getLibrary(libraryName);
	if(library != null) {
		return library.isLocal(symbolName,type);
	}
	return false;
}
Assets.isValidBitmapData = function(bitmapData) {
	return bitmapData != null && bitmapData.image != null;
}
Assets.isValidSound = function(sound) {
	return true;
}
Assets.list = function(type) {
	return (lime_utils_Assets().default).list(type);
}
Assets.loadBitmapData = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	if(useCache == null) {
		useCache = true;
	}
	var promise = new (lime_app_Promise().default)();
	if(useCache && Assets.cache.get_enabled() && Assets.cache.hasBitmapData(id)) {
		var bitmapData = Assets.cache.getBitmapData(id);
		if(Assets.isValidBitmapData(bitmapData)) {
			promise.complete(bitmapData);
			return promise.future;
		}
	}
	(lime_utils_Assets().default).loadImage(id,false).onComplete(function(image) {
		if(image != null) {
			var bitmapData1 = (openfl_display_BitmapData().default).fromImage(image);
			if(useCache && Assets.cache.get_enabled()) {
				Assets.cache.setBitmapData(id,bitmapData1);
			}
			promise.complete(bitmapData1);
		} else {
			promise.error("[Assets] Could not load Image \"" + id + "\"");
		}
	}).onError($bind(promise,promise.error)).onProgress($bind(promise,promise.progress));
	return promise.future;
}
Assets.loadBytes = function(id) {
	var promise = new (lime_app_Promise().default)();
	var future = (lime_utils_Assets().default).loadBytes(id);
	future.onComplete(function(bytes) {
		promise.complete((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).fromBytes(bytes));
	});
	future.onProgress(function(progress,total) {
		promise.progress(progress,total);
	});
	future.onError(function(msg) {
		promise.error(msg);
	});
	return promise.future;
}
Assets.loadFont = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	if(useCache == null) {
		useCache = true;
	}
	var promise = new (lime_app_Promise().default)();
	if(useCache && Assets.cache.get_enabled() && Assets.cache.hasFont(id)) {
		var tmp = Assets.cache.getFont(id);
		promise.complete(tmp);
		return promise.future;
	}
	(lime_utils_Assets().default).loadFont(id).onComplete(function(limeFont) {
		var font = new (openfl_text_Font().default)();
		font.__fromLimeFont(limeFont);
		if(useCache && Assets.cache.get_enabled()) {
			Assets.cache.setFont(id,font);
		}
		promise.complete(font);
	}).onError($bind(promise,promise.error)).onProgress($bind(promise,promise.progress));
	return promise.future;
}
Assets.loadLibrary = function(name) {
	return (lime_utils_Assets().default).loadLibrary(name).then(function(library) {
		var _library = null;
		if(library != null) {
			if(((library) instanceof (openfl_utils_AssetLibrary().default))) {
				_library = library;
			} else {
				_library = new (openfl_utils_AssetLibrary().default)();
				_library.__proxy = library;
				(lime_utils_Assets().default).registerLibrary(name,_library);
			}
		}
		return (lime_app_Future().default).withValue(_library);
	});
}
Assets.loadMusic = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	if(useCache == null) {
		useCache = true;
	}
	var future = new (lime_app_Future().default)(function() {
		return Assets.getMusic(id,useCache);
	});
	return future;
}
Assets.loadMovieClip = function(id) {
	var promise = new (lime_app_Promise().default)();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = (HxOverrides().default).substr(id,id.indexOf(":") + 1,null);
	var limeLibrary = Assets.getLibrary(libraryName);
	if(limeLibrary != null) {
		if(((limeLibrary) instanceof (openfl_utils_AssetLibrary().default))) {
			var library = limeLibrary;
			if(library.exists(symbolName,"MOVIE_CLIP")) {
				promise.completeWith(library.loadMovieClip(symbolName));
				return promise.future;
			}
		}
		promise.error("[Assets] There is no MovieClip asset with an ID of \"" + id + "\"");
	} else {
		promise.error("[Assets] There is no asset library named \"" + libraryName + "\"");
	}
	return promise.future;
}
Assets.loadSound = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	if(useCache == null) {
		useCache = true;
	}
	var promise = new (lime_app_Promise().default)();
	(lime_utils_Assets().default).loadAudioBuffer(id,useCache).onComplete(function(buffer) {
		if(buffer != null) {
			var sound = (openfl_media_Sound().default).fromAudioBuffer(buffer);
			if(useCache && Assets.cache.get_enabled()) {
				Assets.cache.setSound(id,sound);
			}
			promise.complete(sound);
		} else {
			promise.error("[Assets] Could not load Sound \"" + id + "\"");
		}
	}).onError($bind(promise,promise.error)).onProgress($bind(promise,promise.progress));
	return promise.future;
}
Assets.loadText = function(id) {
	var future = (lime_utils_Assets().default).loadText(id);
	return future;
}
Assets.registerLibrary = function(name,library) {
	(lime_utils_Assets().default).registerLibrary(name,library);
}
Assets.removeEventListener = function(type,listener,capture) {
	if(capture == null) {
		capture = false;
	}
	Assets.dispatcher.removeEventListener(type,listener,capture);
}
Assets.resolveClass = function(name) {
	return (Type().default).resolveClass(name);
}
Assets.resolveEnum = function(name) {
	var value = (Type().default).resolveEnum(name);
	return value;
}
Assets.unloadLibrary = function(name) {
	(lime_utils_Assets().default).unloadLibrary(name);
}
Assets.LimeAssets_onChange = function() {
	Assets.dispatchEvent(new (openfl_events_Event().default)("change"));
}
Assets.cache = new (openfl_utils_AssetCache().default)()
Assets.dispatcher = new (openfl_events_EventDispatcher().default)()

// Export

exports.default = Assets;