// Class: openfl.net.FileReferenceList

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_EventDispatcher() {return require("./../../openfl/events/EventDispatcher");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function openfl_net_FileReference() {return require("./../../openfl/net/FileReference");}
function haxe_io_Path() {return require("./../../haxe/io/Path");}

// Constructor

var FileReferenceList = function() {
	(openfl_events_EventDispatcher().default).call(this);
}

// Meta

FileReferenceList.__name__ = "openfl.net.FileReferenceList";
FileReferenceList.__isInterface__ = false;
FileReferenceList.__super__ = (openfl_events_EventDispatcher().default);
FileReferenceList.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	browse: function(typeFilter) {
		return false;
	},
	fileDialog_onCancel: function() {
		this.dispatchEvent(new (openfl_events_Event().default)("cancel"));
	},
	fileDialog_onSelectMultiple: function(paths) {
		var fileReference;
		var fileInfo;
		var _g = 0;
		while(_g < paths.length) {
			var path = paths[_g];
			++_g;
			fileReference = new (openfl_net_FileReference().default)();
			fileReference.__path = path;
			fileReference.name = (haxe_io_Path().default).withoutDirectory(path);
			this.fileList.push(fileReference);
		}
		this.dispatchEvent(new (openfl_events_Event().default)("select"));
	}
});
FileReferenceList.prototype.__class__ = FileReferenceList.prototype.constructor = $hxClasses["openfl.net.FileReferenceList"] = FileReferenceList;

// Init



// Statics




// Export

exports.default = FileReferenceList;