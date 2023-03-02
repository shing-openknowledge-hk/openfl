// Class: lime.utils.AssetCache

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_graphics_Image() {return require("./../../lime/graphics/Image");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function Std() {return require("./../../Std");}
function lime_media_AudioBuffer() {return require("./../../lime/media/AudioBuffer");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function StringTools() {return require("./../../StringTools");}

// Constructor

var AssetCache = function() {
	this.enabled = true;
	this.audio = new (haxe_ds_StringMap().default)();
	this.font = new (haxe_ds_StringMap().default)();
	this.image = new (haxe_ds_StringMap().default)();
	this.version = 0;
}

// Meta

AssetCache.__name__ = "lime.utils.AssetCache";
AssetCache.__isInterface__ = false;
AssetCache.prototype = {
	exists: function(id,type) {
		if(type == "IMAGE" || type == null) {
			if(this.image.exists(id)) {
				return true;
			}
		}
		if(type == "FONT" || type == null) {
			if(this.font.exists(id)) {
				return true;
			}
		}
		if(type == "SOUND" || type == "MUSIC" || type == null) {
			if(this.audio.exists(id)) {
				return true;
			}
		}
		return false;
	},
	set: function(id,type,asset) {
		switch(type) {
		case "FONT":
			this.font.set(id,asset);
			break;
		case "IMAGE":
			if(!((asset) instanceof (lime_graphics_Image().default))) {
				throw new (js__$Boot_HaxeError().default)("Cannot cache non-Image asset: " + (Std().default).string(asset) + " as Image");
			}
			this.image.set(id,asset);
			break;
		case "MUSIC":case "SOUND":
			if(!((asset) instanceof (lime_media_AudioBuffer().default))) {
				throw new (js__$Boot_HaxeError().default)("Cannot cache non-AudioBuffer asset: " + (Std().default).string(asset) + " as AudioBuffer");
			}
			this.audio.set(id,asset);
			break;
		default:
			throw new (js__$Boot_HaxeError().default)(type + " assets are not cachable");
		}
	},
	clear: function(prefix) {
		if(prefix == null) {
			this.audio = new (haxe_ds_StringMap().default)();
			this.font = new (haxe_ds_StringMap().default)();
			this.image = new (haxe_ds_StringMap().default)();
		} else {
			var keys = this.audio.keys();
			var key = keys;
			while(key.hasNext()) {
				var key1 = key.next();
				if((StringTools().default).startsWith(key1,prefix)) {
					this.audio.remove(key1);
				}
			}
			var keys1 = this.font.keys();
			var key2 = keys1;
			while(key2.hasNext()) {
				var key3 = key2.next();
				if((StringTools().default).startsWith(key3,prefix)) {
					this.font.remove(key3);
				}
			}
			var keys2 = this.image.keys();
			var key4 = keys2;
			while(key4.hasNext()) {
				var key5 = key4.next();
				if((StringTools().default).startsWith(key5,prefix)) {
					this.image.remove(key5);
				}
			}
		}
	}
};
AssetCache.prototype.__class__ = AssetCache.prototype.constructor = $hxClasses["lime.utils.AssetCache"] = AssetCache;

// Init



// Statics




// Export

exports.default = AssetCache;