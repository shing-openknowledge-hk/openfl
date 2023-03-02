// Class: lime.utils.AssetBundle

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_io_BytesInput() {return require("./../../haxe/io/BytesInput");}
function lime_app_Future() {return require("./../../lime/app/Future");}
function lime_utils__$Bytes_Bytes_$Impl_$() {return require("./../../lime/utils/_Bytes/Bytes_Impl_");}
function haxe_zip_Reader() {return require("./../../haxe/zip/Reader");}
function lime_utils_CompressionAlgorithm() {return require("./../../lime/utils/CompressionAlgorithm");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}

// Constructor

var AssetBundle = function() {
	this.data = new (haxe_ds_StringMap().default)();
	this.paths = [];
}

// Meta

AssetBundle.__name__ = "lime.utils.AssetBundle";
AssetBundle.__isInterface__ = false;
AssetBundle.prototype = {
	
};
AssetBundle.prototype.__class__ = AssetBundle.prototype.constructor = $hxClasses["lime.utils.AssetBundle"] = AssetBundle;

// Init



// Statics

AssetBundle.fromBytes = function(bytes) {
	var input = new (haxe_io_BytesInput().default)(bytes);
	return AssetBundle.__extractBundle(input);
}
AssetBundle.fromFile = function(path) {
	return null;
}
AssetBundle.loadFromBytes = function(bytes) {
	return (lime_app_Future().default).withValue(AssetBundle.fromBytes(bytes));
}
AssetBundle.loadFromFile = function(path) {
	return (lime_utils__$Bytes_Bytes_$Impl_$().default).loadFromFile(path).then(AssetBundle.loadFromBytes);
}
AssetBundle.__extractBundle = function(input) {
	var entries = (haxe_zip_Reader().default).readZip(input);
	var bundle = new AssetBundle();
	var entry = entries.iterator();
	while(entry.hasNext()) {
		var entry1 = entry.next();
		if(entry1.compressed) {
			var bytes = entry1.data;
			bundle.data.set(entry1.fileName,(lime_utils__$Bytes_Bytes_$Impl_$().default).decompress(bytes,(lime_utils_CompressionAlgorithm().default).DEFLATE));
		} else {
			bundle.data.set(entry1.fileName,entry1.data);
		}
		bundle.paths.push(entry1.fileName);
	}
	return bundle;
}


// Export

exports.default = AssetBundle;