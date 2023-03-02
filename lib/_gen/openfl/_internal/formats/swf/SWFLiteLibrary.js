// Class: openfl._internal.formats.swf.SWFLiteLibrary

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
var $bind = require("./../../../../bind_stub").default;
var $extend = require("./../../../../extend_stub").default;
function openfl_utils_AssetLibrary() {return require("./../../../../openfl/utils/AssetLibrary");}
function openfl__$internal_symbols_BitmapSymbol() {return require("./../../../../openfl/_internal/symbols/BitmapSymbol");}
function js_Boot() {return require("./../../../../js/Boot");}
function lime_app_Promise() {return require("./../../../../lime/app/Promise");}
function openfl__$internal_formats_swf_SWFLite() {return require("./../../../../openfl/_internal/formats/swf/SWFLite");}
function openfl_utils_Assets() {return require("./../../../../openfl/utils/Assets");}
function openfl_net_URLLoader() {return require("./../../../../openfl/net/URLLoader");}
function openfl_net_URLRequest() {return require("./../../../../openfl/net/URLRequest");}
function lime_math_Vector2() {return require("./../../../../lime/math/Vector2");}
function lime_graphics_ImageChannel() {return require("./../../../../lime/graphics/ImageChannel");}
function haxe_ds_StringMap() {return require("./../../../../haxe/ds/StringMap");}

// Constructor

var SWFLiteLibrary = function(id,uuid) {
	(openfl_utils_AssetLibrary().default).call(this);
	this.id = id;
	this.instanceID = uuid != null ? uuid : id;
	this.alphaCheck = new (haxe_ds_StringMap().default)();
	this.imageClassNames = new (haxe_ds_StringMap().default)();
	this.rootPath = "";
}

// Meta

SWFLiteLibrary.__name__ = "openfl._internal.formats.swf.SWFLiteLibrary";
SWFLiteLibrary.__isInterface__ = false;
SWFLiteLibrary.__super__ = (openfl_utils_AssetLibrary().default);
SWFLiteLibrary.prototype = $extend((openfl_utils_AssetLibrary().default).prototype, {
	exists: function(id,type) {
		if(this.swf == null) {
			return false;
		}
		if(id == "" && type == "MOVIE_CLIP") {
			return true;
		}
		if(type == "IMAGE" || type == "MOVIE_CLIP") {
			if(this.swf != null) {
				return this.swf.hasSymbol(id);
			} else {
				return false;
			}
		}
		return false;
	},
	getImage: function(id) {
		if(this.imageClassNames.exists(id)) {
			id = this.imageClassNames.get(id);
		}
		if(!this.alphaCheck.exists(id)) {
			var symbol = this.swf.symbols.iterator();
			while(symbol.hasNext()) {
				var symbol1 = symbol.next();
				if(((symbol1) instanceof (openfl__$internal_symbols_BitmapSymbol().default)) && ((js_Boot().default).__cast(symbol1 , (openfl__$internal_symbols_BitmapSymbol().default))).path == id) {
					var bitmapSymbol = symbol1;
					if(bitmapSymbol.alpha != null) {
						var image = (openfl_utils_AssetLibrary().default).prototype.getImage.call(this,id);
						var alpha = (openfl_utils_AssetLibrary().default).prototype.getImage.call(this,bitmapSymbol.alpha);
						this.__copyChannel(image,alpha);
						this.cachedImages.set(id,image);
						this.cachedImages.remove(bitmapSymbol.alpha);
						this.alphaCheck.set(id,true);
						return image;
					}
				}
			}
			this.alphaCheck.set(id,true);
		}
		return (openfl_utils_AssetLibrary().default).prototype.getImage.call(this,id);
	},
	getMovieClip: function(id) {
		if(this.swf != null) {
			return this.swf.createMovieClip(id);
		} else {
			return null;
		}
	},
	isLocal: function(id,type) {
		return true;
	},
	load: function() {
		var _gthis = this;
		if(this.id != null) {
			this.preload.set(this.id,true);
		}
		var promise = new (lime_app_Promise().default)();
		this.preloading = true;
		var onComplete = function(data) {
			_gthis.cachedText.set(_gthis.id,data);
			_gthis.swf = (openfl__$internal_formats_swf_SWFLite().default).unserialize(data);
			_gthis.swf.library = _gthis;
			var bitmapSymbol;
			var symbol = _gthis.swf.symbols.iterator();
			while(symbol.hasNext()) {
				var symbol1 = symbol.next();
				if(((symbol1) instanceof (openfl__$internal_symbols_BitmapSymbol().default))) {
					bitmapSymbol = symbol1;
					if(bitmapSymbol.className != null) {
						_gthis.imageClassNames.set(bitmapSymbol.className,bitmapSymbol.path);
					}
				}
			}
			(openfl__$internal_formats_swf_SWFLite().default).instances.set(_gthis.instanceID,_gthis.swf);
			_gthis.__load().onProgress($bind(promise,promise.progress)).onError($bind(promise,promise.error)).onComplete(function(_) {
				_gthis.preloading = false;
				promise.complete(_gthis);
			});
		};
		if((openfl_utils_Assets().default).exists(this.id)) {
			var id = this.paths.keys();
			while(id.hasNext()) {
				var id1 = id.next();
				this.preload.set(id1,true);
			}
			this.loadText(this.id).onError($bind(promise,promise.error)).onComplete(onComplete);
		} else {
			var id2 = this.paths.keys();
			while(id2.hasNext()) {
				var id3 = id2.next();
				this.preload.set(id3,true);
			}
			var path = null;
			if(this.paths.exists(this.id)) {
				path = this.paths.get(this.id);
			} else {
				path = this.rootPath != null && this.rootPath != "" ? this.rootPath + "/" + this.id : this.id;
			}
			var loader = new (openfl_net_URLLoader().default)();
			loader.addEventListener("complete",function(_1) {
				onComplete(loader.data);
			});
			loader.addEventListener("ioError",function(e) {
				promise.error(e);
			});
			loader.load(new (openfl_net_URLRequest().default)(path));
		}
		return promise.future;
	},
	loadImage: function(id) {
		var _gthis = this;
		if(this.imageClassNames.exists(id)) {
			id = this.imageClassNames.get(id);
		}
		if(!this.preloading && !this.alphaCheck.exists(id)) {
			var symbol = this.swf.symbols.iterator();
			while(symbol.hasNext()) {
				var symbol1 = symbol.next();
				if(((symbol1) instanceof (openfl__$internal_symbols_BitmapSymbol().default)) && ((js_Boot().default).__cast(symbol1 , (openfl__$internal_symbols_BitmapSymbol().default))).path == id) {
					var bitmapSymbol = [symbol1];
					if(bitmapSymbol[0].alpha != null) {
						var promise = [new (lime_app_Promise().default)()];
						this.__loadImage(id).onError(($_=promise[0],$bind($_,$_.error))).onComplete((function(promise1,bitmapSymbol1) {
							return function(image) {
								_gthis.__loadImage(bitmapSymbol1[0].alpha).onError(($_=promise1[0],$bind($_,$_.error))).onComplete((function(promise2,bitmapSymbol2) {
									return function(alpha) {
										_gthis.__copyChannel(image,alpha);
										_gthis.cachedImages.set(id,image);
										_gthis.cachedImages.remove(bitmapSymbol2[0].alpha);
										_gthis.alphaCheck.set(id,true);
										promise2[0].complete(image);
									};
								})(promise1,bitmapSymbol1));
							};
						})(promise,bitmapSymbol));
						return promise[0].future;
					} else {
						this.alphaCheck.set(id,true);
					}
				}
			}
		}
		return (openfl_utils_AssetLibrary().default).prototype.loadImage.call(this,id);
	},
	unload: function() {
		if(this.swf == null) {
			return;
		}
		if((openfl__$internal_formats_swf_SWFLite().default).instances.exists(this.instanceID) && (openfl__$internal_formats_swf_SWFLite().default).instances.get(this.instanceID) == this.swf) {
			(openfl__$internal_formats_swf_SWFLite().default).instances.remove(this.instanceID);
		}
		var bitmap;
		var symbol = this.swf.symbols.iterator();
		while(symbol.hasNext()) {
			var symbol1 = symbol.next();
			if(((symbol1) instanceof (openfl__$internal_symbols_BitmapSymbol().default))) {
				bitmap = symbol1;
				(openfl_utils_Assets().default).cache.removeBitmapData(bitmap.path);
			}
		}
	},
	__copyChannel: function(image,alpha) {
		if(alpha != null) {
			image.copyChannel(alpha,alpha.get_rect(),new (lime_math_Vector2().default)(),(lime_graphics_ImageChannel().default).RED,(lime_graphics_ImageChannel().default).ALPHA);
		}
		image.buffer.premultiplied = true;
		image.set_premultiplied(false);
	},
	__fromManifest: function(manifest) {
		this.rootPath = manifest.rootPath;
		(openfl_utils_AssetLibrary().default).prototype.__fromManifest.call(this,manifest);
		this.bytesTotal = 0;
		var id = this.paths.keys();
		while(id.hasNext()) {
			var id1 = id.next();
			this.bytesTotal += this.sizes.get(id1);
		}
	},
	__load: function() {
		return (openfl_utils_AssetLibrary().default).prototype.load.call(this);
	},
	__loadImage: function(id) {
		return (openfl_utils_AssetLibrary().default).prototype.loadImage.call(this,id);
	}
});
SWFLiteLibrary.prototype.__class__ = SWFLiteLibrary.prototype.constructor = $hxClasses["openfl._internal.formats.swf.SWFLiteLibrary"] = SWFLiteLibrary;

// Init



// Statics


SWFLiteLibrary.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}

// Export

exports.default = SWFLiteLibrary;