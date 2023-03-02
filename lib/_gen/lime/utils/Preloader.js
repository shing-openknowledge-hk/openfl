// Class: lime.utils.Preloader

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
function lime_utils_Log() {return require("./../../lime/utils/Log");}
function lime_utils_Assets() {return require("./../../lime/utils/Assets");}
function haxe_ds_StringMap() {return require("./../../haxe/ds/StringMap");}
function haxe_ds_ObjectMap() {return require("./../../haxe/ds/ObjectMap");}
function lime_app__$Event_$Int_$Int_$Void() {return require("./../../lime/app/_Event_Int_Int_Void");}
function lime_app__$Event_$Void_$Void() {return require("./../../lime/app/_Event_Void_Void");}

// Constructor

var Preloader = function() {
	this.bytesTotalCache = new (haxe_ds_StringMap().default)();
	this.bytesLoadedCache2 = new (haxe_ds_StringMap().default)();
	this.bytesLoadedCache = new (haxe_ds_ObjectMap().default)();
	this.onProgress = new (lime_app__$Event_$Int_$Int_$Void().default)();
	this.onComplete = new (lime_app__$Event_$Void_$Void().default)();
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.libraries = [];
	this.libraryNames = [];
	this.onProgress.add($bind(this,this.update));
}

// Meta

Preloader.__name__ = "lime.utils.Preloader";
Preloader.__isInterface__ = false;
Preloader.prototype = {
	addLibrary: function(library) {
		this.libraries.push(library);
	},
	addLibraryName: function(name) {
		if(this.libraryNames.indexOf(name) == -1) {
			this.libraryNames.push(name);
		}
	},
	load: function() {
		var _gthis = this;
		var _g = 0;
		var _g1 = this.libraries;
		while(_g < _g1.length) {
			var library = _g1[_g];
			++_g;
			this.bytesTotal += library.bytesTotal;
		}
		this.loadedLibraries = -1;
		this.preloadStarted = false;
		var _g2 = 0;
		var _g3 = this.libraries;
		while(_g2 < _g3.length) {
			var library1 = [_g3[_g2]];
			++_g2;
			(lime_utils_Log().default).verbose("Preloading asset library",{ fileName : "../node_modules/lime/src/lime/utils/Preloader.hx", lineNumber : 132, className : "lime.utils.Preloader", methodName : "load"});
			library1[0].load().onProgress((function(library2) {
				return function(loaded,total) {
					if(!_gthis.bytesLoadedCache.exists(library2[0])) {
						_gthis.bytesLoaded += loaded;
					} else {
						_gthis.bytesLoaded += loaded - _gthis.bytesLoadedCache.get(library2[0]);
					}
					_gthis.bytesLoadedCache.set(library2[0],loaded);
					if(!_gthis.simulateProgress) {
						_gthis.onProgress.dispatch(_gthis.bytesLoaded,_gthis.bytesTotal);
					}
				};
			})(library1)).onComplete((function(library3) {
				return function(_) {
					if(!_gthis.bytesLoadedCache.exists(library3[0])) {
						_gthis.bytesLoaded += library3[0].bytesTotal;
					} else {
						_gthis.bytesLoaded += library3[0].bytesTotal - _gthis.bytesLoadedCache.get(library3[0]);
					}
					_gthis.loadedAssetLibrary();
				};
			})(library1)).onError((function() {
				return function(e) {
					(lime_utils_Log().default).error(e,{ fileName : "../node_modules/lime/src/lime/utils/Preloader.hx", lineNumber : 168, className : "lime.utils.Preloader", methodName : "load"});
				};
			})());
		}
		var _g4 = 0;
		var _g5 = this.libraryNames;
		while(_g4 < _g5.length) {
			var name = _g5[_g4];
			++_g4;
			this.bytesTotal += 200;
		}
		this.loadedLibraries++;
		this.preloadStarted = true;
		this.updateProgress();
	},
	loadedAssetLibrary: function(name) {
		this.loadedLibraries++;
		var current = this.loadedLibraries;
		if(!this.preloadStarted) {
			++current;
		}
		var totalLibraries = this.libraries.length + this.libraryNames.length;
		if(name != null) {
			(lime_utils_Log().default).verbose("Loaded asset library: " + name + " [" + current + "/" + totalLibraries + "]",{ fileName : "../node_modules/lime/src/lime/utils/Preloader.hx", lineNumber : 195, className : "lime.utils.Preloader", methodName : "loadedAssetLibrary"});
		} else {
			(lime_utils_Log().default).verbose("Loaded asset library [" + current + "/" + totalLibraries + "]",{ fileName : "../node_modules/lime/src/lime/utils/Preloader.hx", lineNumber : 199, className : "lime.utils.Preloader", methodName : "loadedAssetLibrary"});
		}
		this.updateProgress();
	},
	start: function() {
		if(this.complete || this.simulateProgress || !this.preloadComplete) {
			return;
		}
		this.complete = true;
		this.onComplete.dispatch();
	},
	update: function(loaded,total) {
	},
	updateProgress: function() {
		var _gthis = this;
		if(!this.simulateProgress) {
			this.onProgress.dispatch(this.bytesLoaded,this.bytesTotal);
		}
		if(this.loadedLibraries == this.libraries.length && !this.initLibraryNames) {
			this.initLibraryNames = true;
			var _g = 0;
			var _g1 = this.libraryNames;
			while(_g < _g1.length) {
				var name = [_g1[_g]];
				++_g;
				(lime_utils_Log().default).verbose("Preloading asset library: " + name[0],{ fileName : "../node_modules/lime/src/lime/utils/Preloader.hx", lineNumber : 236, className : "lime.utils.Preloader", methodName : "updateProgress"});
				(lime_utils_Assets().default).loadLibrary(name[0]).onProgress((function(name1) {
					return function(loaded,total) {
						if(total > 0) {
							if(!_gthis.bytesTotalCache.exists(name1[0])) {
								_gthis.bytesTotalCache.set(name1[0],total);
								_gthis.bytesTotal += total - 200;
							}
							if(loaded > total) {
								loaded = total;
							}
							if(!_gthis.bytesLoadedCache2.exists(name1[0])) {
								_gthis.bytesLoaded += loaded;
							} else {
								_gthis.bytesLoaded += loaded - _gthis.bytesLoadedCache2.get(name1[0]);
							}
							_gthis.bytesLoadedCache2.set(name1[0],loaded);
							if(!_gthis.simulateProgress) {
								_gthis.onProgress.dispatch(_gthis.bytesLoaded,_gthis.bytesTotal);
							}
						}
					};
				})(name)).onComplete((function(name2) {
					return function(library) {
						var total1 = 200;
						if(_gthis.bytesTotalCache.exists(name2[0])) {
							total1 = _gthis.bytesTotalCache.get(name2[0]);
						}
						if(!_gthis.bytesLoadedCache2.exists(name2[0])) {
							_gthis.bytesLoaded += total1;
						} else {
							_gthis.bytesLoaded += total1 - _gthis.bytesLoadedCache2.get(name2[0]);
						}
						_gthis.loadedAssetLibrary(name2[0]);
					};
				})(name)).onError((function() {
					return function(e) {
						(lime_utils_Log().default).error(e,{ fileName : "../node_modules/lime/src/lime/utils/Preloader.hx", lineNumber : 290, className : "lime.utils.Preloader", methodName : "updateProgress"});
					};
				})());
			}
		}
		if(!this.simulateProgress && this.loadedLibraries == this.libraries.length + this.libraryNames.length) {
			if(!this.preloadComplete) {
				this.preloadComplete = true;
				(lime_utils_Log().default).verbose("Preload complete",{ fileName : "../node_modules/lime/src/lime/utils/Preloader.hx", lineNumber : 301, className : "lime.utils.Preloader", methodName : "updateProgress"});
			}
			this.start();
		}
	}
};
Preloader.prototype.__class__ = Preloader.prototype.constructor = $hxClasses["lime.utils.Preloader"] = Preloader;

// Init



// Statics




// Export

exports.default = Preloader;