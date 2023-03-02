// Class: openfl.utils.AssetLibrary

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function lime_utils_AssetLibrary() {return require("./../../lime/utils/AssetLibrary");}
function lime_app_Future() {return require("./../../lime/app/Future");}
function lime_utils_AssetManifest() {return require("./../../lime/utils/AssetManifest");}
function openfl_utils__$ByteArray_ByteArray_$Impl_$() {return require("./../../openfl/utils/_ByteArray/ByteArray_Impl_");}

// Constructor

var AssetLibrary = function() {
	(lime_utils_AssetLibrary().default).call(this);
}

// Meta

AssetLibrary.__name__ = "openfl.utils.AssetLibrary";
AssetLibrary.__isInterface__ = false;
AssetLibrary.__super__ = (lime_utils_AssetLibrary().default);
AssetLibrary.prototype = $extend((lime_utils_AssetLibrary().default).prototype, {
	exists: function(id,type) {
		if(this.__proxy != null) {
			return this.__proxy.exists(id,type);
		} else {
			return (lime_utils_AssetLibrary().default).prototype.exists.call(this,id,type);
		}
	},
	getAsset: function(id,type) {
		if(this.__proxy != null) {
			return this.__proxy.getAsset(id,type);
		} else {
			return (lime_utils_AssetLibrary().default).prototype.getAsset.call(this,id,type);
		}
	},
	getAudioBuffer: function(id) {
		if(this.__proxy != null) {
			return this.__proxy.getAudioBuffer(id);
		} else {
			return (lime_utils_AssetLibrary().default).prototype.getAudioBuffer.call(this,id);
		}
	},
	getBytes: function(id) {
		if(this.__proxy != null) {
			return this.__proxy.getBytes(id);
		} else {
			return (lime_utils_AssetLibrary().default).prototype.getBytes.call(this,id);
		}
	},
	getFont: function(id) {
		if(this.__proxy != null) {
			return this.__proxy.getFont(id);
		} else {
			return (lime_utils_AssetLibrary().default).prototype.getFont.call(this,id);
		}
	},
	getImage: function(id) {
		if(this.__proxy != null) {
			return this.__proxy.getImage(id);
		} else {
			return (lime_utils_AssetLibrary().default).prototype.getImage.call(this,id);
		}
	},
	getMovieClip: function(id) {
		return null;
	},
	getPath: function(id) {
		if(this.__proxy != null) {
			return this.__proxy.getPath(id);
		} else {
			return (lime_utils_AssetLibrary().default).prototype.getPath.call(this,id);
		}
	},
	getText: function(id) {
		if(this.__proxy != null) {
			return this.__proxy.getText(id);
		} else {
			return (lime_utils_AssetLibrary().default).prototype.getText.call(this,id);
		}
	},
	isLocal: function(id,type) {
		if(this.__proxy != null) {
			return this.__proxy.isLocal(id,type);
		} else {
			return (lime_utils_AssetLibrary().default).prototype.isLocal.call(this,id,type);
		}
	},
	list: function(type) {
		if(this.__proxy != null) {
			return this.__proxy.list(type);
		} else {
			return (lime_utils_AssetLibrary().default).prototype.list.call(this,type);
		}
	},
	loadAsset: function(id,type) {
		if(this.__proxy != null) {
			return this.__proxy.loadAsset(id,type);
		} else {
			return (lime_utils_AssetLibrary().default).prototype.loadAsset.call(this,id,type);
		}
	},
	load: function() {
		if(this.__proxy != null) {
			return this.__proxy.load();
		} else {
			return (lime_utils_AssetLibrary().default).prototype.load.call(this);
		}
	},
	loadAudioBuffer: function(id) {
		if(this.__proxy != null) {
			return this.__proxy.loadAudioBuffer(id);
		} else {
			return (lime_utils_AssetLibrary().default).prototype.loadAudioBuffer.call(this,id);
		}
	},
	loadBytes: function(id) {
		if(this.__proxy != null) {
			return this.__proxy.loadBytes(id);
		} else {
			return (lime_utils_AssetLibrary().default).prototype.loadBytes.call(this,id);
		}
	},
	loadFont: function(id) {
		if(this.__proxy != null) {
			return this.__proxy.loadFont(id);
		} else {
			return (lime_utils_AssetLibrary().default).prototype.loadFont.call(this,id);
		}
	},
	loadImage: function(id) {
		if(this.__proxy != null) {
			return this.__proxy.loadImage(id);
		} else {
			return (lime_utils_AssetLibrary().default).prototype.loadImage.call(this,id);
		}
	},
	loadMovieClip: function(id) {
		return (lime_app_Future().default).withValue(this.getMovieClip(id));
	},
	loadText: function(id) {
		if(this.__proxy != null) {
			return this.__proxy.loadText(id);
		} else {
			return (lime_utils_AssetLibrary().default).prototype.loadText.call(this,id);
		}
	},
	unload: function() {
		if(this.__proxy != null) {
			this.__proxy.unload();
			return;
		} else {
			(lime_utils_AssetLibrary().default).prototype.unload.call(this);
			return;
		}
	}
});
AssetLibrary.prototype.__class__ = AssetLibrary.prototype.constructor = $hxClasses["openfl.utils.AssetLibrary"] = AssetLibrary;

// Init



// Statics

AssetLibrary.fromBytes = function(bytes,rootPath) {
	return AssetLibrary.fromManifest((lime_utils_AssetManifest().default).fromBytes((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).toBytes(bytes),rootPath));
}
AssetLibrary.fromFile = function(path,rootPath) {
	return AssetLibrary.fromManifest((lime_utils_AssetManifest().default).fromFile(path,rootPath));
}
AssetLibrary.fromManifest = function(manifest) {
	var library = (lime_utils_AssetLibrary().default).fromManifest(manifest);
	if(library != null) {
		if(((library) instanceof AssetLibrary)) {
			return library;
		} else {
			var _library = new AssetLibrary();
			_library.__proxy = library;
			return _library;
		}
	} else {
		return null;
	}
}
AssetLibrary.loadFromBytes = function(bytes,rootPath) {
	return (lime_utils_AssetManifest().default).loadFromBytes((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).toBytes(bytes),rootPath).then(function(manifest) {
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
		return library.load().then(function(library1) {
			return (lime_app_Future().default).withValue(library1);
		});
	} else {
		return (lime_app_Future().default).withError("Could not load asset manifest");
	}
}


// Export

exports.default = AssetLibrary;