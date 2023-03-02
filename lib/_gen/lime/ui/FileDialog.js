// Class: lime.ui.FileDialog

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_ui_FileDialogType() {return require("./../../lime/ui/FileDialogType");}
function lime_graphics_Image() {return require("./../../lime/graphics/Image");}
function haxe_io_Path() {return require("./../../haxe/io/Path");}
function lime_app__$Event_$Array_$String_$_$Void() {return require("./../../lime/app/_Event_Array_String__Void");}
function lime_app__$Event_$String_$Void() {return require("./../../lime/app/_Event_String_Void");}
function lime_app__$Event_$lime_$utils_$Resource_$Void() {return require("./../../lime/app/_Event_lime_utils_Resource_Void");}
function lime_app__$Event_$Void_$Void() {return require("./../../lime/app/_Event_Void_Void");}

// Constructor

var FileDialog = function() {
	this.onSelectMultiple = new (lime_app__$Event_$Array_$String_$_$Void().default)();
	this.onSelect = new (lime_app__$Event_$String_$Void().default)();
	this.onSave = new (lime_app__$Event_$String_$Void().default)();
	this.onOpen = new (lime_app__$Event_$lime_$utils_$Resource_$Void().default)();
	this.onCancel = new (lime_app__$Event_$Void_$Void().default)();
}

// Meta

FileDialog.__name__ = "lime.ui.FileDialog";
FileDialog.__isInterface__ = false;
FileDialog.prototype = {
	browse: function(type,filter,defaultPath,title) {
		if(type == null) {
			type = (lime_ui_FileDialogType().default).OPEN;
		}
		this.onCancel.dispatch();
		return false;
	},
	open: function(filter,defaultPath,title) {
		this.onCancel.dispatch();
		return false;
	},
	save: function(data,filter,defaultPath,title,type) {
		if(type == null) {
			type = "application/octet-stream";
		}
		if(data == null) {
			this.onCancel.dispatch();
			return false;
		}
		var defaultExtension = "";
		if((lime_graphics_Image().default).__isPNG(data)) {
			type = "image/png";
			defaultExtension = ".png";
		} else if((lime_graphics_Image().default).__isJPG(data)) {
			type = "image/jpeg";
			defaultExtension = ".jpg";
		} else if((lime_graphics_Image().default).__isGIF(data)) {
			type = "image/gif";
			defaultExtension = ".gif";
		} else if((lime_graphics_Image().default).__isWebP(data)) {
			type = "image/webp";
			defaultExtension = ".webp";
		}
		var path = defaultPath != null ? (haxe_io_Path().default).withoutDirectory(defaultPath) : "download" + defaultExtension;
		var buffer = data.getData();
		require ('file-saver')(new Blob([buffer],{ type : type}),path,true);
		this.onSave.dispatch(path);
		return true;
	}
};
FileDialog.prototype.__class__ = FileDialog.prototype.constructor = $hxClasses["lime.ui.FileDialog"] = FileDialog;

// Init



// Statics




// Export

exports.default = FileDialog;