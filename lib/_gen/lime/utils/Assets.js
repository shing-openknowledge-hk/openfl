// Class: lime.utils.Assets

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
function lime_utils_AssetCache() {return require("./../../lime/utils/AssetCache");}
function lime_app__$Event_$Void_$Void() {return require("./../../lime/app/_Event_Void_Void");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function lime_utils__$Assets_LibrarySymbol() {return require("./../../lime/utils/_Assets/LibrarySymbol");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function lime_utils_Log() {return require("./../../lime/utils/Log");}
function lime_app_Future() {return require("./../../lime/app/Future");}
function lime_app_Promise() {return require("./../../lime/app/Promise");}
function lime_utils_AssetBundle() {return require("./../../lime/utils/AssetBundle");}
function lime_utils_AssetLibrary() {return require("./../../lime/utils/AssetLibrary");}
function haxe_io_Path() {return require("./../../haxe/io/Path");}
function StringTools() {return require("./../../StringTools");}
function lime_utils_AssetManifest() {return require("./../../lime/utils/AssetManifest");}
function lime_app_Application() {return require("./../../lime/app/Application");}

// Constructor

var Assets = function(){}

// Meta

Assets.__name__ = "lime.utils.Assets";
Assets.__isInterface__ = false;
Assets.prototype = {
	
};
Assets.prototype.__class__ = Assets.prototype.constructor = $hxClasses["lime.utils.Assets"] = Assets;

// Init



// Statics

Assets.exists = function(id,type) {
	if(type == null) {
		type = "BINARY";
	}
	var symbol = new (lime_utils__$Assets_LibrarySymbol().default)(id);
	if(symbol.library != null) {
		return symbol.exists(type);
	}
	return false;
}
Assets.getAsset = function(id,type,useCache) {
	if(useCache && Assets.cache.enabled) {
		switch(type) {
		case "BINARY":case "TEXT":
			useCache = false;
			break;
		case "FONT":
			var font = Assets.cache.font.get(id);
			if(font != null) {
				return font;
			}
			break;
		case "IMAGE":
			var image = Assets.cache.image.get(id);
			if(Assets.isValidImage(image)) {
				return image;
			}
			break;
		case "MUSIC":case "SOUND":
			var audio = Assets.cache.audio.get(id);
			if(Assets.isValidAudio(audio)) {
				return audio;
			}
			break;
		case "TEMPLATE":
			throw new (js__$Boot_HaxeError().default)("Not sure how to get template: " + id);
		default:
			return null;
		}
	}
	var symbol = new (lime_utils__$Assets_LibrarySymbol().default)(id);
	if(symbol.library != null) {
		if(symbol.exists(type)) {
			if(symbol.isLocal(type)) {
				var asset = symbol.library.getAsset(symbol.symbolName,type);
				if(useCache && Assets.cache.enabled) {
					Assets.cache.set(id,type,asset);
				}
				return asset;
			} else {
				(lime_utils_Log().default).error(type + " asset \"" + id + "\" exists, but only asynchronously",{ fileName : "../node_modules/lime/src/lime/utils/Assets.hx", lineNumber : 133, className : "lime.utils.Assets", methodName : "getAsset"});
			}
		} else {
			(lime_utils_Log().default).error("There is no " + type + " asset with an ID of \"" + id + "\"",{ fileName : "../node_modules/lime/src/lime/utils/Assets.hx", lineNumber : 138, className : "lime.utils.Assets", methodName : "getAsset"});
		}
	} else {
		(lime_utils_Log().default).error(Assets.__libraryNotFound(symbol.libraryName),{ fileName : "../node_modules/lime/src/lime/utils/Assets.hx", lineNumber : 143, className : "lime.utils.Assets", methodName : "getAsset"});
	}
	return null;
}
Assets.getAudioBuffer = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	return Assets.getAsset(id,"SOUND",useCache);
}
Assets.getBytes = function(id) {
	return Assets.getAsset(id,"BINARY",false);
}
Assets.getFont = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	return Assets.getAsset(id,"FONT",useCache);
}
Assets.getImage = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	return Assets.getAsset(id,"IMAGE",useCache);
}
Assets.getLibrary = function(name) {
	if(name == null || name == "") {
		name = "default";
	}
	return Assets.libraries.get(name);
}
Assets.getPath = function(id) {
	var symbol = new (lime_utils__$Assets_LibrarySymbol().default)(id);
	if(symbol.library != null) {
		if(symbol.exists()) {
			return symbol.library.getPath(symbol.symbolName);
		} else {
			(lime_utils_Log().default).error("There is no asset with an ID of \"" + id + "\"",{ fileName : "../node_modules/lime/src/lime/utils/Assets.hx", lineNumber : 224, className : "lime.utils.Assets", methodName : "getPath"});
		}
	} else {
		(lime_utils_Log().default).error(Assets.__libraryNotFound(symbol.libraryName),{ fileName : "../node_modules/lime/src/lime/utils/Assets.hx", lineNumber : 229, className : "lime.utils.Assets", methodName : "getPath"});
	}
	return null;
}
Assets.getText = function(id) {
	return Assets.getAsset(id,"TEXT",false);
}
Assets.hasLibrary = function(name) {
	if(name == null || name == "") {
		name = "default";
	}
	return Assets.libraries.exists(name);
}
Assets.isLocal = function(id,type,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	if(useCache && Assets.cache.enabled) {
		if(Assets.cache.exists(id,type)) {
			return true;
		}
	}
	var symbol = new (lime_utils__$Assets_LibrarySymbol().default)(id);
	if(symbol.library != null) {
		return symbol.isLocal(type);
	} else {
		return false;
	}
}
Assets.isValidAudio = function(buffer) {
	return buffer != null;
}
Assets.isValidImage = function(image) {
	if(image != null) {
		return image.buffer != null;
	} else {
		return false;
	}
}
Assets.list = function(type) {
	var items = [];
	var library = Assets.libraries.iterator();
	while(library.hasNext()) {
		var library1 = library.next();
		var libraryItems = library1.list(type);
		if(libraryItems != null) {
			items = items.concat(libraryItems);
		}
	}
	return items;
}
Assets.loadAsset = function(id,type,useCache) {
	if(useCache && Assets.cache.enabled) {
		switch(type) {
		case "BINARY":case "TEXT":
			useCache = false;
			break;
		case "FONT":
			var font = Assets.cache.font.get(id);
			if(font != null) {
				return (lime_app_Future().default).withValue(font);
			}
			break;
		case "IMAGE":
			var image = Assets.cache.image.get(id);
			if(Assets.isValidImage(image)) {
				return (lime_app_Future().default).withValue(image);
			}
			break;
		case "MUSIC":case "SOUND":
			var audio = Assets.cache.audio.get(id);
			if(Assets.isValidAudio(audio)) {
				return (lime_app_Future().default).withValue(audio);
			}
			break;
		case "TEMPLATE":
			throw new (js__$Boot_HaxeError().default)("Not sure how to get template: " + id);
		default:
			return null;
		}
	}
	var symbol = new (lime_utils__$Assets_LibrarySymbol().default)(id);
	if(symbol.library != null) {
		if(symbol.exists(type)) {
			var future = symbol.library.loadAsset(symbol.symbolName,type);
			if(useCache && Assets.cache.enabled) {
				future.onComplete(function(asset) {
					Assets.cache.set(id,type,asset);
				});
			}
			return future;
		} else {
			return (lime_app_Future().default).withError("There is no " + type + " asset with an ID of \"" + id + "\"");
		}
	} else {
		return (lime_app_Future().default).withError(Assets.__libraryNotFound(symbol.libraryName));
	}
}
Assets.loadAudioBuffer = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	return Assets.loadAsset(id,"SOUND",useCache);
}
Assets.loadBytes = function(id) {
	return Assets.loadAsset(id,"BINARY",false);
}
Assets.loadFont = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	return Assets.loadAsset(id,"FONT",useCache);
}
Assets.loadImage = function(id,useCache) {
	if(useCache == null) {
		useCache = true;
	}
	return Assets.loadAsset(id,"IMAGE",useCache);
}
Assets.loadLibrary = function(id) {
	var promise = new (lime_app_Promise().default)();
	var library = Assets.getLibrary(id);
	if(library != null) {
		return library.load();
	}
	var path = id;
	var rootPath = null;
	if(Assets.bundlePaths.exists(id)) {
		(lime_utils_AssetBundle().default).loadFromFile(Assets.bundlePaths.get(id)).onComplete(function(bundle) {
			if(bundle == null) {
				promise.error("Cannot load bundle for library \"" + id + "\"");
				return;
			}
			var library1 = (lime_utils_AssetLibrary().default).fromBundle(bundle);
			if(library1 == null) {
				promise.error("Cannot open library \"" + id + "\"");
			} else {
				Assets.libraries.set(id,library1);
				library1.onChange.add(($_=Assets.onChange,$bind($_,$_.dispatch)));
				var tmp = library1.load();
				promise.completeWith(tmp);
			}
		}).onError(function(_) {
			promise.error("There is no asset library with an ID of \"" + id + "\"");
		});
	} else {
		if(Assets.libraryPaths.exists(id)) {
			path = Assets.libraryPaths.get(id);
			rootPath = (haxe_io_Path().default).directory(path);
		} else {
			if((StringTools().default).endsWith(path,".bundle")) {
				rootPath = path;
				path += "/library.json";
			} else {
				rootPath = (haxe_io_Path().default).directory(path);
			}
			path = Assets.__cacheBreak(path);
		}
		(lime_utils_AssetManifest().default).loadFromFile(path,rootPath).onComplete(function(manifest) {
			if(manifest == null) {
				promise.error("Cannot parse asset manifest for library \"" + id + "\"");
				return;
			}
			var library2 = (lime_utils_AssetLibrary().default).fromManifest(manifest);
			if(library2 == null) {
				promise.error("Cannot open library \"" + id + "\"");
			} else {
				Assets.libraries.set(id,library2);
				library2.onChange.add(($_=Assets.onChange,$bind($_,$_.dispatch)));
				var tmp1 = library2.load();
				promise.completeWith(tmp1);
			}
		}).onError(function(_1) {
			promise.error("There is no asset library with an ID of \"" + id + "\"");
		});
	}
	return promise.future;
}
Assets.loadText = function(id) {
	return Assets.loadAsset(id,"TEXT",false);
}
Assets.registerLibrary = function(name,library) {
	if(Assets.libraries.exists(name)) {
		if(Assets.libraries.get(name) == library) {
			return;
		} else {
			Assets.unloadLibrary(name);
		}
	}
	if(library != null) {
		library.onChange.add(Assets.library_onChange);
	}
	Assets.libraries.set(name,library);
}
Assets.unloadLibrary = function(name) {
	if(name == null || name == "") {
		name = "default";
	}
	var library = Assets.libraries.get(name);
	if(library != null) {
		Assets.cache.clear(name + ":");
		library.onChange.remove(Assets.library_onChange);
		library.unload();
	}
	Assets.libraries.remove(name);
}
Assets.__cacheBreak = function(path) {
	return path;
}
Assets.__libraryNotFound = function(name) {
	if(name == null || name == "") {
		name = "default";
	}
	if((lime_app_Application().default).current != null && (lime_app_Application().default).current.get_preloader() != null && !(lime_app_Application().default).current.get_preloader().complete) {
		return "There is no asset library named \"" + name + "\", or it is not yet preloaded";
	} else {
		return "There is no asset library named \"" + name + "\"";
	}
}
Assets.library_onChange = function() {
	Assets.cache.clear();
	Assets.onChange.dispatch();
}
Assets.cache = new (lime_utils_AssetCache().default)()
Assets.onChange = new (lime_app__$Event_$Void_$Void().default)()
Assets.bundlePaths = new (haxe_ds_StringMap().default)()
Assets.libraries = new (haxe_ds_StringMap().default)()
Assets.libraryPaths = new (haxe_ds_StringMap().default)()

// Export

exports.default = Assets;