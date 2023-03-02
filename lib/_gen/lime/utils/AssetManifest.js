// Class: lime.utils.AssetManifest

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_Serializer() {return require("./../../haxe/Serializer");}
function lime_utils__$Bytes_Bytes_$Impl_$() {return require("./../../lime/utils/_Bytes/Bytes_Impl_");}
function lime_app_Future() {return require("./../../lime/app/Future");}
function Reflect() {return require("./../../Reflect");}
function haxe_Unserializer() {return require("./../../haxe/Unserializer");}
function HxOverrides() {return require("./../../HxOverrides");}
function StringTools() {return require("./../../StringTools");}
function haxe_io_Path() {return require("./../../haxe/io/Path");}

// Constructor

var AssetManifest = function() {
	this.assets = [];
	this.libraryArgs = [];
	this.version = 2;
}

// Meta

AssetManifest.__name__ = "lime.utils.AssetManifest";
AssetManifest.__isInterface__ = false;
AssetManifest.prototype = {
	serialize: function() {
		var manifestData = { };
		manifestData.version = this.version;
		manifestData.libraryType = this.libraryType;
		manifestData.libraryArgs = this.libraryArgs;
		manifestData.name = this.name;
		manifestData.assets = (haxe_Serializer().default).run(this.assets);
		manifestData.rootPath = this.rootPath;
		return JSON.stringify(manifestData);
	}
};
AssetManifest.prototype.__class__ = AssetManifest.prototype.constructor = $hxClasses["lime.utils.AssetManifest"] = AssetManifest;

// Init



// Statics

AssetManifest.fromBytes = function(bytes,rootPath) {
	if(bytes != null) {
		return AssetManifest.parse(bytes.getString(0,bytes.get_length()),rootPath);
	} else {
		return null;
	}
}
AssetManifest.fromFile = function(path,rootPath) {
	path = AssetManifest.__resolvePath(path);
	rootPath = AssetManifest.__resolveRootPath(rootPath,path);
	if(path == null) {
		return null;
	}
	return AssetManifest.fromBytes((lime_utils__$Bytes_Bytes_$Impl_$().default).fromFile(path),rootPath);
}
AssetManifest.loadFromBytes = function(bytes,rootPath) {
	return (lime_app_Future().default).withValue(AssetManifest.fromBytes(bytes,rootPath));
}
AssetManifest.loadFromFile = function(path,rootPath) {
	path = AssetManifest.__resolvePath(path);
	rootPath = AssetManifest.__resolveRootPath(rootPath,path);
	if(path == null) {
		return null;
	}
	return (lime_utils__$Bytes_Bytes_$Impl_$().default).loadFromFile(path).then(function(bytes) {
		return (lime_app_Future().default).withValue(AssetManifest.fromBytes(bytes,rootPath));
	});
}
AssetManifest.parse = function(data,rootPath) {
	if(data == null || data == "") {
		return null;
	}
	var manifestData = JSON.parse(data);
	var manifest = new AssetManifest();
	if((Reflect().default).hasField(manifestData,"name")) {
		manifest.name = manifestData.name;
	}
	if((Reflect().default).hasField(manifestData,"libraryType")) {
		manifest.libraryType = manifestData.libraryType;
	}
	if((Reflect().default).hasField(manifestData,"libraryArgs")) {
		manifest.libraryArgs = manifestData.libraryArgs;
	}
	if((Reflect().default).hasField(manifestData,"assets")) {
		var assets = manifestData.assets;
		if((Reflect().default).hasField(manifestData,"version") && manifestData.version <= 2) {
			manifest.assets = (haxe_Unserializer().default).run(assets);
		} else {
			manifest.assets = assets;
		}
	}
	if((Reflect().default).hasField(manifestData,"rootPath")) {
		manifest.rootPath = manifestData.rootPath;
	}
	if(rootPath != null && rootPath != "") {
		if(manifest.rootPath == null || manifest.rootPath == "") {
			manifest.rootPath = rootPath;
		} else {
			manifest.rootPath = rootPath + "/" + manifest.rootPath;
		}
	}
	return manifest;
}
AssetManifest.__resolvePath = function(path) {
	if(path == null) {
		return null;
	}
	var queryIndex = path.indexOf("?");
	var basePath;
	if(queryIndex > -1) {
		basePath = (HxOverrides().default).substr(path,0,queryIndex);
	} else {
		basePath = path;
	}
	basePath = (StringTools().default).replace(basePath,"\\","/");
	while((StringTools().default).endsWith(basePath,"/")) basePath = (HxOverrides().default).substr(basePath,0,basePath.length - 1);
	if((StringTools().default).endsWith(basePath,".bundle")) {
		if(queryIndex > -1) {
			return basePath + "/library.json" + (HxOverrides().default).substr(path,queryIndex,null);
		} else {
			return basePath + "/library.json";
		}
	} else {
		return path;
	}
}
AssetManifest.__resolveRootPath = function(rootPath,path) {
	if(rootPath != null) {
		return rootPath;
	}
	var queryIndex = path.indexOf("?");
	if(queryIndex > -1) {
		rootPath = (HxOverrides().default).substr(path,0,queryIndex);
	} else {
		rootPath = path;
	}
	rootPath = (StringTools().default).replace(rootPath,"\\","/");
	while((StringTools().default).endsWith(rootPath,"/")) {
		if(rootPath == "/") {
			return rootPath;
		}
		rootPath = (HxOverrides().default).substr(rootPath,0,rootPath.length - 1);
	}
	if((StringTools().default).endsWith(rootPath,".bundle")) {
		return rootPath;
	} else {
		return (haxe_io_Path().default).directory(rootPath);
	}
}


// Export

exports.default = AssetManifest;