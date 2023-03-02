// Class: lime.utils.AssetLibrary

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
function js_Boot() {return require("./../../js/Boot");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function lime_media_AudioBuffer() {return require("./../../lime/media/AudioBuffer");}
function Type() {return require("./../../Type");}
function haxe_io_Bytes() {return require("./../../haxe/io/Bytes");}
function lime_utils__$Bytes_Bytes_$Impl_$() {return require("./../../lime/utils/_Bytes/Bytes_Impl_");}
function lime_text_Font() {return require("./../../lime/text/Font");}
function lime_graphics_Image() {return require("./../../lime/graphics/Image");}
function lime_app_Future() {return require("./../../lime/app/Future");}
function lime_app_Promise() {return require("./../../lime/app/Promise");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function lime_utils_Log() {return require("./../../lime/utils/Log");}
function lime_net__$HTTPRequest_$String() {return require("./../../lime/net/_HTTPRequest_String");}
function lime_utils_Assets() {return require("./../../lime/utils/Assets");}
function Reflect() {return require("./../../Reflect");}
function Std() {return require("./../../Std");}
function StringTools() {return require("./../../StringTools");}
function HxOverrides() {return require("./../../HxOverrides");}
function lime_utils_AssetManifest() {return require("./../../lime/utils/AssetManifest");}
function lime_app__$Event_$Void_$Void() {return require("./../../lime/app/_Event_Void_Void");}

// Constructor

var AssetLibrary = function() {
	this.types = new (haxe_ds_StringMap().default)();
	this.sizes = new (haxe_ds_StringMap().default)();
	this.preload = new (haxe_ds_StringMap().default)();
	this.paths = new (haxe_ds_StringMap().default)();
	this.pathGroups = new (haxe_ds_StringMap().default)();
	this.classTypes = new (haxe_ds_StringMap().default)();
	this.cachedText = new (haxe_ds_StringMap().default)();
	this.cachedImages = new (haxe_ds_StringMap().default)();
	this.cachedFonts = new (haxe_ds_StringMap().default)();
	this.cachedBytes = new (haxe_ds_StringMap().default)();
	this.cachedAudioBuffers = new (haxe_ds_StringMap().default)();
	this.onChange = new (lime_app__$Event_$Void_$Void().default)();
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
}

// Meta

AssetLibrary.__name__ = "lime.utils.AssetLibrary";
AssetLibrary.__isInterface__ = false;
AssetLibrary.prototype = {
	exists: function(id,type) {
		var requestedType = type != null ? (js_Boot().default).__cast(type , String) : null;
		var assetType = this.types.get(id);
		if(assetType != null) {
			if(assetType == requestedType || (requestedType == "SOUND" || requestedType == "MUSIC") && (assetType == "MUSIC" || assetType == "SOUND")) {
				return true;
			}
			if(requestedType == "BINARY" || requestedType == null || assetType == "BINARY" && requestedType == "TEXT") {
				return true;
			}
		}
		return false;
	},
	getAsset: function(id,type) {
		switch(type) {
		case "BINARY":
			return this.getBytes(id);
		case "FONT":
			return this.getFont(id);
		case "IMAGE":
			return this.getImage(id);
		case "MUSIC":case "SOUND":
			return this.getAudioBuffer(id);
		case "TEMPLATE":
			throw new (js__$Boot_HaxeError().default)("Not sure how to get template: " + id);
		case "TEXT":
			return this.getText(id);
		default:
			throw new (js__$Boot_HaxeError().default)("Unknown asset type: " + type);
		}
	},
	getAudioBuffer: function(id) {
		if(this.cachedAudioBuffers.exists(id)) {
			return this.cachedAudioBuffers.get(id);
		} else if(this.classTypes.exists(id)) {
			return (lime_media_AudioBuffer().default).fromBytes((js_Boot().default).__cast((Type().default).createInstance(this.classTypes.get(id),[]) , (haxe_io_Bytes().default)));
		} else {
			return (lime_media_AudioBuffer().default).fromFile(this.paths.get(id));
		}
	},
	getBytes: function(id) {
		if(this.cachedBytes.exists(id)) {
			return this.cachedBytes.get(id);
		} else if(this.cachedText.exists(id)) {
			var bytes = (lime_utils__$Bytes_Bytes_$Impl_$().default).ofString(this.cachedText.get(id));
			this.cachedBytes.set(id,bytes);
			return bytes;
		} else if(this.classTypes.exists(id)) {
			return (js_Boot().default).__cast((Type().default).createInstance(this.classTypes.get(id),[]) , (haxe_io_Bytes().default));
		} else {
			return (lime_utils__$Bytes_Bytes_$Impl_$().default).fromFile(this.paths.get(id));
		}
	},
	getFont: function(id) {
		if(this.cachedFonts.exists(id)) {
			return this.cachedFonts.get(id);
		} else if(this.classTypes.exists(id)) {
			return (js_Boot().default).__cast((Type().default).createInstance(this.classTypes.get(id),[]) , (lime_text_Font().default));
		} else {
			return (lime_text_Font().default).fromFile(this.paths.get(id));
		}
	},
	getImage: function(id) {
		if(this.cachedImages.exists(id)) {
			return this.cachedImages.get(id);
		} else if(this.classTypes.exists(id)) {
			return (js_Boot().default).__cast((Type().default).createInstance(this.classTypes.get(id),[]) , (lime_graphics_Image().default));
		} else {
			return (lime_graphics_Image().default).fromFile(this.paths.get(id));
		}
	},
	getPath: function(id) {
		if(this.paths.exists(id)) {
			return this.paths.get(id);
		} else if(this.pathGroups.exists(id)) {
			return this.pathGroups.get(id)[0];
		} else {
			return null;
		}
	},
	getText: function(id) {
		if(this.cachedText.exists(id)) {
			return this.cachedText.get(id);
		} else {
			var bytes = this.getBytes(id);
			if(bytes == null) {
				return null;
			} else {
				return bytes.getString(0,bytes.get_length());
			}
		}
	},
	isLocal: function(id,type) {
		if(this.classTypes.exists(id)) {
			return true;
		}
		var requestedType = type != null ? (js_Boot().default).__cast(type , String) : null;
		if(requestedType == null) {
			if(!this.cachedBytes.exists(id)) {
				return this.cachedText.exists(id);
			} else {
				return true;
			}
		} else {
			switch(requestedType) {
			case "FONT":
				return this.cachedFonts.exists(id);
			case "IMAGE":
				return this.cachedImages.exists(id);
			case "MUSIC":case "SOUND":
				return this.cachedAudioBuffers.exists(id);
			default:
				if(!this.cachedBytes.exists(id)) {
					return this.cachedText.exists(id);
				} else {
					return true;
				}
			}
		}
	},
	list: function(type) {
		var requestedType = type != null ? (js_Boot().default).__cast(type , String) : null;
		var items = [];
		var id = this.types.keys();
		while(id.hasNext()) {
			var id1 = id.next();
			if(requestedType == null || this.exists(id1,type)) {
				items.push(id1);
			}
		}
		return items;
	},
	loadAsset: function(id,type) {
		switch(type) {
		case "BINARY":
			return this.loadBytes(id);
		case "FONT":
			return this.loadFont(id);
		case "IMAGE":
			return this.loadImage(id);
		case "MUSIC":case "SOUND":
			return this.loadAudioBuffer(id);
		case "TEMPLATE":
			throw new (js__$Boot_HaxeError().default)("Not sure how to load template: " + id);
		case "TEXT":
			return this.loadText(id);
		default:
			throw new (js__$Boot_HaxeError().default)("Unknown asset type: " + type);
		}
	},
	load: function() {
		if(this.loaded) {
			return (lime_app_Future().default).withValue(this);
		}
		if(this.promise == null) {
			this.promise = new (lime_app_Promise().default)();
			this.bytesLoadedCache = new (haxe_ds_StringMap().default)();
			this.assetsLoaded = 0;
			this.assetsTotal = 1;
			var id = this.preload.keys();
			while(id.hasNext()) {
				var id1 = id.next();
				if(!this.preload.get(id1)) {
					continue;
				}
				(lime_utils_Log().default).verbose("Preloading asset: " + id1 + " [" + this.types.get(id1) + "]",{ fileName : "../node_modules/lime/src/lime/utils/AssetLibrary.hx", lineNumber : 405, className : "lime.utils.AssetLibrary", methodName : "load"});
				var _g = this.types.get(id1);
				if(_g != null) {
					switch(_g) {
					case "BINARY":
						this.assetsTotal++;
						var future = this.loadBytes(id1);
						future.onProgress((function(id2,f) {
							return function(bytesLoaded,bytesTotal) {
								f[0](id2[0],bytesLoaded,bytesTotal);
							};
						})([id1],[$bind(this,this.load_onProgress)]));
						future.onError((function(id3,f1) {
							return function(message) {
								f1[0](id3[0],message);
							};
						})([id1],[$bind(this,this.load_onError)]));
						future.onComplete((function(id4,f2) {
							return function(bytes) {
								f2[0](id4[0],bytes);
							};
						})([id1],[$bind(this,this.loadBytes_onComplete)]));
						break;
					case "FONT":
						this.assetsTotal++;
						var future1 = this.loadFont(id1);
						future1.onProgress((function(id5,f3) {
							return function(bytesLoaded1,bytesTotal1) {
								f3[0](id5[0],bytesLoaded1,bytesTotal1);
							};
						})([id1],[$bind(this,this.load_onProgress)]));
						future1.onError((function(id6,f4) {
							return function(message1) {
								f4[0](id6[0],message1);
							};
						})([id1],[$bind(this,this.load_onError)]));
						future1.onComplete((function(id7,f5) {
							return function(font) {
								f5[0](id7[0],font);
							};
						})([id1],[$bind(this,this.loadFont_onComplete)]));
						break;
					case "IMAGE":
						this.assetsTotal++;
						var future2 = this.loadImage(id1);
						future2.onProgress((function(id8,f6) {
							return function(bytesLoaded2,bytesTotal2) {
								f6[0](id8[0],bytesLoaded2,bytesTotal2);
							};
						})([id1],[$bind(this,this.load_onProgress)]));
						future2.onError((function(id9,f7) {
							return function(message2) {
								f7[0](id9[0],message2);
							};
						})([id1],[$bind(this,this.load_onError)]));
						future2.onComplete((function(id10,f8) {
							return function(image) {
								f8[0](id10[0],image);
							};
						})([id1],[$bind(this,this.loadImage_onComplete)]));
						break;
					case "MUSIC":case "SOUND":
						this.assetsTotal++;
						var future3 = this.loadAudioBuffer(id1);
						future3.onProgress((function(id11,f9) {
							return function(bytesLoaded3,bytesTotal3) {
								f9[0](id11[0],bytesLoaded3,bytesTotal3);
							};
						})([id1],[$bind(this,this.load_onProgress)]));
						future3.onError((function(id12,f10) {
							return function(message3) {
								f10[0](id12[0],message3);
							};
						})([id1],[$bind(this,this.loadAudioBuffer_onError)]));
						future3.onComplete((function(id13,f11) {
							return function(audioBuffer) {
								f11[0](id13[0],audioBuffer);
							};
						})([id1],[$bind(this,this.loadAudioBuffer_onComplete)]));
						break;
					case "TEXT":
						this.assetsTotal++;
						var future4 = this.loadText(id1);
						future4.onProgress((function(id14,f12) {
							return function(bytesLoaded4,bytesTotal4) {
								f12[0](id14[0],bytesLoaded4,bytesTotal4);
							};
						})([id1],[$bind(this,this.load_onProgress)]));
						future4.onError((function(id15,f13) {
							return function(message4) {
								f13[0](id15[0],message4);
							};
						})([id1],[$bind(this,this.load_onError)]));
						future4.onComplete((function(id16,f14) {
							return function(text) {
								f14[0](id16[0],text);
							};
						})([id1],[$bind(this,this.loadText_onComplete)]));
						break;
					default:
					}
				}
			}
			this.__assetLoaded(null);
		}
		return this.promise.future;
	},
	loadAudioBuffer: function(id) {
		if(this.cachedAudioBuffers.exists(id)) {
			return (lime_app_Future().default).withValue(this.cachedAudioBuffers.get(id));
		} else if(this.classTypes.exists(id)) {
			return (lime_app_Future().default).withValue((Type().default).createInstance(this.classTypes.get(id),[]));
		} else if(this.pathGroups.exists(id)) {
			return (lime_media_AudioBuffer().default).loadFromFiles(this.pathGroups.get(id));
		} else {
			return (lime_media_AudioBuffer().default).loadFromFile(this.paths.get(id));
		}
	},
	loadBytes: function(id) {
		if(this.cachedBytes.exists(id)) {
			return (lime_app_Future().default).withValue(this.cachedBytes.get(id));
		} else if(this.classTypes.exists(id)) {
			return (lime_app_Future().default).withValue((Type().default).createInstance(this.classTypes.get(id),[]));
		} else {
			return (lime_utils__$Bytes_Bytes_$Impl_$().default).loadFromFile(this.paths.get(id));
		}
	},
	loadFont: function(id) {
		if(this.cachedFonts.exists(id)) {
			return (lime_app_Future().default).withValue(this.cachedFonts.get(id));
		} else if(this.classTypes.exists(id)) {
			var font = (Type().default).createInstance(this.classTypes.get(id),[]);
			return font.__loadFromName(font.name);
		} else {
			return (lime_text_Font().default).loadFromName(this.paths.get(id));
		}
	},
	loadImage: function(id) {
		var _gthis = this;
		if(this.cachedImages.exists(id)) {
			return (lime_app_Future().default).withValue(this.cachedImages.get(id));
		} else if(this.classTypes.exists(id)) {
			return (lime_app_Future().default).withValue((Type().default).createInstance(this.classTypes.get(id),[]));
		} else if(this.cachedBytes.exists(id)) {
			return (lime_graphics_Image().default).loadFromBytes(this.cachedBytes.get(id)).then(function(image) {
				_gthis.cachedBytes.remove(id);
				_gthis.cachedImages.set(id,image);
				return (lime_app_Future().default).withValue(image);
			});
		} else {
			return (lime_graphics_Image().default).loadFromFile(this.paths.get(id));
		}
	},
	loadText: function(id) {
		if(this.cachedText.exists(id)) {
			return (lime_app_Future().default).withValue(this.cachedText.get(id));
		} else if(this.cachedBytes.exists(id) || this.classTypes.exists(id)) {
			var bytes = this.getBytes(id);
			if(bytes == null) {
				return (lime_app_Future().default).withValue(null);
			} else {
				var text = bytes.getString(0,bytes.get_length());
				this.cachedText.set(id,text);
				return (lime_app_Future().default).withValue(text);
			}
		} else {
			var request = new (lime_net__$HTTPRequest_$String().default)();
			return request.load(this.paths.get(id));
		}
	},
	unload: function() {
	},
	__assetLoaded: function(id) {
		this.assetsLoaded++;
		if(id != null) {
			(lime_utils_Log().default).verbose("Loaded asset: " + id + " [" + this.types.get(id) + "] (" + (this.assetsLoaded - 1) + "/" + (this.assetsTotal - 1) + ")",{ fileName : "../node_modules/lime/src/lime/utils/AssetLibrary.hx", lineNumber : 619, className : "lime.utils.AssetLibrary", methodName : "__assetLoaded"});
		}
		if(id != null) {
			var size = this.sizes.exists(id) ? this.sizes.get(id) : 0;
			if(!this.bytesLoadedCache.exists(id)) {
				this.bytesLoaded += size;
			} else {
				var cache = this.bytesLoadedCache.get(id);
				if(cache < size) {
					this.bytesLoaded += size - cache;
				}
			}
			this.bytesLoadedCache.set(id,size);
		}
		if(this.assetsLoaded < this.assetsTotal) {
			this.promise.progress(this.bytesLoaded,this.bytesTotal);
		} else {
			this.loaded = true;
			this.promise.progress(this.bytesTotal,this.bytesTotal);
			this.promise.complete(this);
		}
	},
	__cacheBreak: function(path) {
		return (lime_utils_Assets().default).__cacheBreak(path);
	},
	__fromBundle: function(bundle,manifest) {
		if(manifest != null) {
			var id;
			var data;
			var type;
			var _g = 0;
			var _g1 = manifest.assets;
			while(_g < _g1.length) {
				var asset = _g1[_g];
				++_g;
				id = (Reflect().default).hasField(asset,"id") ? asset.id : asset.path;
				data = bundle.data.get(asset.path);
				if((Reflect().default).hasField(asset,"type")) {
					type = asset.type;
					switch(type) {
					case "FONT":
						this.cachedFonts.set(id,(lime_text_Font().default).fromBytes(data));
						break;
					case "IMAGE":
						this.cachedImages.set(id,(lime_graphics_Image().default).fromBytes(data));
						break;
					case "MUSIC":case "SOUND":
						this.cachedAudioBuffers.set(id,(lime_media_AudioBuffer().default).fromBytes(data));
						break;
					case "TEXT":
						this.cachedText.set(id,data != null ? (Std().default).string(data) : null);
						break;
					default:
						this.cachedBytes.set(id,data);
					}
					this.types.set(id,asset.type);
				} else {
					this.cachedBytes.set(id,data);
					this.types.set(id,"BINARY");
				}
			}
		} else {
			var _g2 = 0;
			var _g11 = bundle.paths;
			while(_g2 < _g11.length) {
				var path = _g11[_g2];
				++_g2;
				this.cachedBytes.set(path,bundle.data.get(path));
				this.types.set(path,"BINARY");
			}
		}
	},
	__fromManifest: function(manifest) {
		var hasSize = manifest.version >= 2;
		var size;
		var id;
		var pathGroup;
		var classRef;
		var basePath = manifest.rootPath;
		if(basePath == null) {
			basePath = "";
		}
		if(basePath != "") {
			basePath += "/";
		}
		var _g = 0;
		var _g1 = manifest.assets;
		while(_g < _g1.length) {
			var asset = _g1[_g];
			++_g;
			size = hasSize && (Reflect().default).hasField(asset,"size") ? asset.size : 100;
			id = (Reflect().default).hasField(asset,"id") ? asset.id : asset.path;
			if((Reflect().default).hasField(asset,"path")) {
				this.paths.set(id,this.__cacheBreak(this.__resolvePath(basePath + (Std().default).string((Reflect().default).field(asset,"path")))));
			}
			if((Reflect().default).hasField(asset,"pathGroup")) {
				pathGroup = (Reflect().default).field(asset,"pathGroup");
				var _g2 = 0;
				var _g11 = pathGroup.length;
				while(_g2 < _g11) {
					var i = _g2++;
					pathGroup[i] = this.__cacheBreak(this.__resolvePath(basePath + pathGroup[i]));
				}
				this.pathGroups.set(id,pathGroup);
			}
			this.sizes.set(id,size);
			this.types.set(id,asset.type);
			if((Reflect().default).hasField(asset,"preload")) {
				this.preload.set(id,(Reflect().default).field(asset,"preload"));
			}
			if((Reflect().default).hasField(asset,"className")) {
				classRef = (Type().default).resolveClass((Reflect().default).field(asset,"className"));
				this.classTypes.set(id,classRef);
			}
		}
		this.bytesTotal = 0;
		var _g21 = 0;
		var _g3 = manifest.assets;
		while(_g21 < _g3.length) {
			var asset1 = _g3[_g21];
			++_g21;
			id = (Reflect().default).hasField(asset1,"id") ? asset1.id : asset1.path;
			if(this.preload.exists(id) && this.preload.get(id) && this.sizes.exists(id)) {
				this.bytesTotal += this.sizes.get(id);
			}
		}
	},
	__resolvePath: function(path) {
		path = (StringTools().default).replace(path,"\\","/");
		var colonIdx = path.indexOf(":");
		if((StringTools().default).startsWith(path,"http") && colonIdx > 0) {
			var lastSlashIdx = colonIdx + 3;
			var httpSection = (HxOverrides().default).substr(path,0,lastSlashIdx);
			path = httpSection + (StringTools().default).replace((HxOverrides().default).substr(path,lastSlashIdx,null),"//","/");
		} else {
			path = (StringTools().default).replace(path,"//","/");
		}
		if(path.indexOf("./") > -1) {
			var split = path.split("/");
			var newPath = [];
			var _g = 0;
			var _g1 = split.length;
			while(_g < _g1) {
				var i = _g++;
				if(split[i] == "..") {
					if(i == 0 || newPath[i - 1] == "..") {
						newPath.push("..");
					} else {
						newPath.pop();
					}
				} else if(split[i] == ".") {
					if(i == 0) {
						newPath.push(".");
					}
				} else {
					newPath.push(split[i]);
				}
			}
			path = newPath.join("/");
		}
		return path;
	},
	loadAudioBuffer_onComplete: function(id,audioBuffer) {
		this.cachedAudioBuffers.set(id,audioBuffer);
		if(this.pathGroups.exists(id)) {
			var pathGroup = this.pathGroups.get(id);
			var otherID = this.pathGroups.keys();
			while(otherID.hasNext()) {
				var otherID1 = otherID.next();
				if(otherID1 == id) {
					continue;
				}
				var _g = 0;
				while(_g < pathGroup.length) {
					var path = pathGroup[_g];
					++_g;
					if(this.pathGroups.get(otherID1).indexOf(path) > -1) {
						this.cachedAudioBuffers.set(otherID1,audioBuffer);
						break;
					}
				}
			}
		}
		this.__assetLoaded(id);
	},
	loadAudioBuffer_onError: function(id,message) {
		if(message != null && message != "") {
			(lime_utils_Log().default).warn("Could not load \"" + id + "\": " + (Std().default).string(message),{ fileName : "../node_modules/lime/src/lime/utils/AssetLibrary.hx", lineNumber : 865, className : "lime.utils.AssetLibrary", methodName : "loadAudioBuffer_onError"});
		} else {
			(lime_utils_Log().default).warn("Could not load \"" + id + "\"",{ fileName : "../node_modules/lime/src/lime/utils/AssetLibrary.hx", lineNumber : 869, className : "lime.utils.AssetLibrary", methodName : "loadAudioBuffer_onError"});
		}
		this.loadAudioBuffer_onComplete(id,new (lime_media_AudioBuffer().default)());
	},
	loadBytes_onComplete: function(id,bytes) {
		this.cachedBytes.set(id,bytes);
		this.__assetLoaded(id);
	},
	loadFont_onComplete: function(id,font) {
		this.cachedFonts.set(id,font);
		this.__assetLoaded(id);
	},
	loadImage_onComplete: function(id,image) {
		this.cachedImages.set(id,image);
		this.__assetLoaded(id);
	},
	loadText_onComplete: function(id,text) {
		this.cachedText.set(id,text);
		this.__assetLoaded(id);
	},
	load_onError: function(id,message) {
		if(message != null && message != "") {
			this.promise.error("Error loading asset \"" + id + "\": " + (Std().default).string(message));
		} else {
			this.promise.error("Error loading asset \"" + id + "\"");
		}
	},
	load_onProgress: function(id,bytesLoaded,bytesTotal) {
		if(bytesLoaded > 0) {
			var size = this.sizes.get(id);
			var percent;
			if(bytesTotal > 0) {
				percent = bytesLoaded / bytesTotal;
				if(percent > 1) {
					percent = 1;
				}
				bytesLoaded = Math.floor(percent * size);
			} else if(bytesLoaded > size) {
				bytesLoaded = size;
			}
			if(this.bytesLoadedCache.exists(id)) {
				var cache = this.bytesLoadedCache.get(id);
				if(bytesLoaded != cache) {
					this.bytesLoaded += bytesLoaded - cache;
				}
			} else {
				this.bytesLoaded += bytesLoaded;
			}
			this.bytesLoadedCache.set(id,bytesLoaded);
			this.promise.progress(this.bytesLoaded,this.bytesTotal);
		}
	}
};
AssetLibrary.prototype.__class__ = AssetLibrary.prototype.constructor = $hxClasses["lime.utils.AssetLibrary"] = AssetLibrary;

// Init



// Statics

AssetLibrary.fromBytes = function(bytes,rootPath) {
	return AssetLibrary.fromManifest((lime_utils_AssetManifest().default).fromBytes(bytes,rootPath));
}
AssetLibrary.fromFile = function(path,rootPath) {
	return AssetLibrary.fromManifest((lime_utils_AssetManifest().default).fromFile(path,rootPath));
}
AssetLibrary.fromBundle = function(bundle) {
	if(bundle.data.exists("library.json")) {
		var manifest = (lime_utils_AssetManifest().default).fromBytes(bundle.data.get("library.json"));
		if(manifest != null) {
			var library = null;
			if(manifest.libraryType == null) {
				library = new AssetLibrary();
			} else {
				var libraryClass = (Type().default).resolveClass(manifest.libraryType);
				if(libraryClass != null) {
					library = (Type().default).createInstance(libraryClass,manifest.libraryArgs);
				} else {
					(lime_utils_Log().default).warn("Could not find library type: " + manifest.libraryType,{ fileName : "../node_modules/lime/src/lime/utils/AssetLibrary.hx", lineNumber : 122, className : "lime.utils.AssetLibrary", methodName : "fromBundle"});
					return null;
				}
			}
			library.__fromBundle(bundle,manifest);
			return library;
		}
	} else {
		var library1 = new AssetLibrary();
		library1.__fromBundle(bundle);
		return library1;
	}
	return null;
}
AssetLibrary.fromManifest = function(manifest) {
	if(manifest == null) {
		return null;
	}
	var library = null;
	if(manifest.libraryType == null) {
		library = new AssetLibrary();
	} else {
		var libraryClass = (Type().default).resolveClass(manifest.libraryType);
		if(libraryClass != null) {
			library = (Type().default).createInstance(libraryClass,manifest.libraryArgs);
		} else {
			(lime_utils_Log().default).warn("Could not find library type: " + manifest.libraryType,{ fileName : "../node_modules/lime/src/lime/utils/AssetLibrary.hx", lineNumber : 160, className : "lime.utils.AssetLibrary", methodName : "fromManifest"});
			return null;
		}
	}
	library.__fromManifest(manifest);
	return library;
}
AssetLibrary.loadFromBytes = function(bytes,rootPath) {
	return (lime_utils_AssetManifest().default).loadFromBytes(bytes,rootPath).then(function(manifest) {
		return AssetLibrary.loadFromManifest(manifest);
	});
}
AssetLibrary.loadFromFile = function(path,rootPath) {
	return (lime_utils_AssetManifest().default).loadFromFile(path,rootPath).then(function(manifest) {
		return AssetLibrary.loadFromManifest(manifest);
	});
}
AssetLibrary.loadFromManifest = function(manifest) {
	var library = AssetLibrary.fromManifest(manifest);
	if(library != null) {
		return library.load();
	} else {
		return (lime_app_Future().default).withError("Could not load asset manifest");
	}
}


// Export

exports.default = AssetLibrary;