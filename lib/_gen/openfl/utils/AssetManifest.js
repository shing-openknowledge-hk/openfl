// Class: openfl.utils.AssetManifest

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function lime_utils_AssetManifest() {return require("./../../lime/utils/AssetManifest");}
function lime_app_Future() {return require("./../../lime/app/Future");}

// Constructor

var AssetManifest = function() {
	(lime_utils_AssetManifest().default).call(this);
}

// Meta

AssetManifest.__name__ = "openfl.utils.AssetManifest";
AssetManifest.__isInterface__ = false;
AssetManifest.__super__ = (lime_utils_AssetManifest().default);
AssetManifest.prototype = $extend((lime_utils_AssetManifest().default).prototype, {
	addBitmapData: function(path,id) {
		this.assets.push({ path : path, id : id != null ? id : path, type : "IMAGE", preload : true});
	},
	addBytes: function(path,id) {
		this.assets.push({ path : path, id : id != null ? id : path, type : "BINARY", preload : true});
	},
	addFont: function(name,id) {
		this.assets.push({ path : name, id : id != null ? id : name, type : "FONT", preload : true});
	},
	addSound: function(paths,id) {
		this.assets.push({ pathGroup : paths, id : id != null ? id : paths[0], type : "SOUND", preload : true});
	},
	addText: function(path,id) {
		this.assets.push({ path : path, id : id != null ? id : path, type : "TEXT", preload : true});
	}
});
AssetManifest.prototype.__class__ = AssetManifest.prototype.constructor = $hxClasses["openfl.utils.AssetManifest"] = AssetManifest;

// Init



// Statics

AssetManifest.fromBytes = function(bytes,rootPath) {
	var manifest = (lime_utils_AssetManifest().default).fromBytes(bytes,rootPath);
	return AssetManifest.__fromLimeManifest(manifest);
}
AssetManifest.fromFile = function(path,rootPath) {
	var manifest = (lime_utils_AssetManifest().default).fromFile(path,rootPath);
	return AssetManifest.__fromLimeManifest(manifest);
}
AssetManifest.loadFromBytes = function(bytes,rootPath) {
	return (lime_utils_AssetManifest().default).loadFromBytes(bytes,rootPath).then(function(manifest) {
		return (lime_app_Future().default).withValue(AssetManifest.__fromLimeManifest(manifest));
	});
}
AssetManifest.loadFromFile = function(path,rootPath) {
	return (lime_utils_AssetManifest().default).loadFromFile(path,rootPath).then(function(manifest) {
		return (lime_app_Future().default).withValue(AssetManifest.__fromLimeManifest(manifest));
	});
}
AssetManifest.parse = function(data,rootPath) {
	var manifest = (lime_utils_AssetManifest().default).parse(data,rootPath);
	return AssetManifest.__fromLimeManifest(manifest);
}
AssetManifest.__fromLimeManifest = function(limeManifest) {
	var manifest = null;
	if(limeManifest != null) {
		manifest = new AssetManifest();
		manifest.assets = limeManifest.assets;
		manifest.libraryArgs = limeManifest.libraryArgs;
		manifest.libraryType = limeManifest.libraryType;
		manifest.name = limeManifest.name;
		manifest.rootPath = limeManifest.rootPath;
		manifest.version = limeManifest.version;
	}
	return manifest;
}


// Export

exports.default = AssetManifest;