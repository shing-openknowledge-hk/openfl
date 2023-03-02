// Class: openfl.utils.AssetCache

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function openfl_utils_IAssetCache() {return require("./../../openfl/utils/IAssetCache");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function StringTools() {return require("./../../StringTools");}
function lime_utils_Assets() {return require("./../../lime/utils/Assets");}

// Constructor

var AssetCache = function() {
	this.__enabled = true;
	this.bitmapData = new (haxe_ds_StringMap().default)();
	this.font = new (haxe_ds_StringMap().default)();
	this.sound = new (haxe_ds_StringMap().default)();
}

// Meta

AssetCache.__name__ = "openfl.utils.AssetCache";
AssetCache.__isInterface__ = false;
AssetCache.__interfaces__ = [(openfl_utils_IAssetCache().default)];
AssetCache.prototype = {
	clear: function(prefix) {
		if(prefix == null) {
			this.bitmapData = new (haxe_ds_StringMap().default)();
			this.font = new (haxe_ds_StringMap().default)();
			this.sound = new (haxe_ds_StringMap().default)();
		} else {
			var keys = this.bitmapData.keys();
			var key = keys;
			while(key.hasNext()) {
				var key1 = key.next();
				if((StringTools().default).startsWith(key1,prefix)) {
					this.removeBitmapData(key1);
				}
			}
			var keys1 = this.font.keys();
			var key2 = keys1;
			while(key2.hasNext()) {
				var key3 = key2.next();
				if((StringTools().default).startsWith(key3,prefix)) {
					this.removeFont(key3);
				}
			}
			var keys2 = this.sound.keys();
			var key4 = keys2;
			while(key4.hasNext()) {
				var key5 = key4.next();
				if((StringTools().default).startsWith(key5,prefix)) {
					this.removeSound(key5);
				}
			}
		}
	},
	getBitmapData: function(id) {
		return this.bitmapData.get(id);
	},
	getFont: function(id) {
		return this.font.get(id);
	},
	getSound: function(id) {
		return this.sound.get(id);
	},
	hasBitmapData: function(id) {
		return this.bitmapData.exists(id);
	},
	hasFont: function(id) {
		return this.font.exists(id);
	},
	hasSound: function(id) {
		return this.sound.exists(id);
	},
	removeBitmapData: function(id) {
		(lime_utils_Assets().default).cache.image.remove(id);
		return this.bitmapData.remove(id);
	},
	removeFont: function(id) {
		(lime_utils_Assets().default).cache.font.remove(id);
		return this.font.remove(id);
	},
	removeSound: function(id) {
		(lime_utils_Assets().default).cache.audio.remove(id);
		return this.sound.remove(id);
	},
	setBitmapData: function(id,bitmapData) {
		this.bitmapData.set(id,bitmapData);
	},
	setFont: function(id,font) {
		this.font.set(id,font);
	},
	setSound: function(id,sound) {
		this.sound.set(id,sound);
	},
	get_enabled: function() {
		return this.__enabled;
	},
	set_enabled: function(value) {
		return this.__enabled = value;
	}
};
AssetCache.prototype.__class__ = AssetCache.prototype.constructor = $hxClasses["openfl.utils.AssetCache"] = AssetCache;

// Init

{
	var tmp = AssetCache.prototype;
	var tmp1 = function () { return this.get_enabled (); }
	var tmp2 = function (v) { return this.set_enabled (v); }
	global.Object.defineProperty(tmp,"enabled",{ get : tmp1, set : tmp2});
};

// Statics




// Export

exports.default = AssetCache;