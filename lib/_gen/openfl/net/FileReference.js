// Class: openfl.net.FileReference

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_events_EventDispatcher() {return require("./../../openfl/events/EventDispatcher");}
function StringTools() {return require("./../../StringTools");}
function haxe_io_Path() {return require("./../../haxe/io/Path");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function openfl_net_URLLoader() {return require("./../../openfl/net/URLLoader");}
function lime_ui_FileDialog() {return require("./../../lime/ui/FileDialog");}
function lime_ui_FileDialogType() {return require("./../../lime/ui/FileDialogType");}
function openfl_utils__$ByteArray_ByteArray_$Impl_$() {return require("./../../openfl/utils/_ByteArray/ByteArray_Impl_");}
function openfl_utils_ByteArrayData() {return require("./../../openfl/utils/ByteArrayData");}
function Std() {return require("./../../Std");}
function openfl__$internal_Lib() {return require("./../../openfl/_internal/Lib");}
function haxe_Timer() {return require("./../../haxe/Timer");}

// Constructor

var FileReference = function() {
	(openfl_events_EventDispatcher().default).call(this);
	this.__inputControl = window.document.createElement("input");
	this.__inputControl.setAttribute("type","file");
	this.__inputControl.onclick = function(e) {
		e.cancelBubble = true;
		e.stopPropagation();
	};
}

// Meta

FileReference.__name__ = "openfl.net.FileReference";
FileReference.__isInterface__ = false;
FileReference.__super__ = (openfl_events_EventDispatcher().default);
FileReference.prototype = $extend((openfl_events_EventDispatcher().default).prototype, {
	browse: function(typeFilter) {
		var _gthis = this;
		this.__data = null;
		this.__path = null;
		var filter = null;
		if(typeFilter != null) {
			var filters = [];
			var _g = 0;
			while(_g < typeFilter.length) {
				var type = typeFilter[_g];
				++_g;
				filters.push((StringTools().default).replace((StringTools().default).replace(type.extension,"*.","."),";",","));
			}
			filter = filters.join(",");
		}
		if(filter != null) {
			this.__inputControl.setAttribute("accept",filter);
		}
		this.__inputControl.onchange = function() {
			var file = _gthis.__inputControl.files[0];
			var tmp = new Date(file.lastModified);
			_gthis.modificationDate = tmp;
			_gthis.creationDate = _gthis.modificationDate;
			_gthis.size = file.size;
			var tmp1 = (haxe_io_Path().default).extension(file.name);
			_gthis.type = "." + tmp1;
			_gthis.name = (haxe_io_Path().default).withoutDirectory(file.name);
			_gthis.__path = file.name;
			_gthis.dispatchEvent(new (openfl_events_Event().default)("select"));
		};
		this.__inputControl.click();
		return true;
	},
	cancel: function() {
		if(this.__urlLoader != null) {
			this.__urlLoader.close();
		}
	},
	download: function(request,defaultFileName) {
		this.__data = null;
		this.__path = null;
		this.__urlLoader = new (openfl_net_URLLoader().default)();
		this.__urlLoader.addEventListener("complete",$bind(this,this.urlLoader_onComplete));
		this.__urlLoader.addEventListener("ioError",$bind(this,this.urlLoader_onIOError));
		this.__urlLoader.addEventListener("progress",$bind(this,this.urlLoader_onProgress));
		this.__urlLoader.load(request);
		var saveFileDialog = new (lime_ui_FileDialog().default)();
		saveFileDialog.onCancel.add($bind(this,this.saveFileDialog_onCancel));
		saveFileDialog.onSelect.add($bind(this,this.saveFileDialog_onSelect));
		saveFileDialog.browse((lime_ui_FileDialogType().default).SAVE,defaultFileName != null ? (haxe_io_Path().default).extension(defaultFileName) : null,defaultFileName);
	},
	load: function() {
		var _gthis = this;
		var file = this.__inputControl.files[0];
		var reader = new FileReader();
		reader.onload = function(evt) {
			_gthis.data = (openfl_utils__$ByteArray_ByteArray_$Impl_$().default).fromArrayBuffer(evt.target.result);
			_gthis.openFileDialog_onComplete();
		};
		reader.readAsArrayBuffer(file);
	},
	save: function(data,defaultFileName) {
		this.__data = null;
		this.__path = null;
		if(data == null) {
			return;
		}
		if(((data) instanceof (openfl_utils_ByteArrayData().default))) {
			this.__data = data;
		} else {
			var this1 = new (openfl_utils_ByteArrayData().default)(0);
			this.__data = this1;
			this.__data.writeUTFBytes((Std().default).string(data));
		}
		var saveFileDialog = new (lime_ui_FileDialog().default)();
		saveFileDialog.onCancel.add($bind(this,this.saveFileDialog_onCancel));
		saveFileDialog.onSave.add($bind(this,this.saveFileDialog_onSave));
		saveFileDialog.save((openfl_utils__$ByteArray_ByteArray_$Impl_$().default).toBytes(this.__data),defaultFileName != null ? (haxe_io_Path().default).extension(defaultFileName) : null,defaultFileName);
	},
	upload: function(request,uploadDataFieldName,testUpload) {
		if(testUpload == null) {
			testUpload = false;
		}
		if(uploadDataFieldName == null) {
			uploadDataFieldName = "Filedata";
		}
		(openfl__$internal_Lib().default).notImplemented({ fileName : "../src/openfl/net/FileReference.hx", lineNumber : 1286, className : "openfl.net.FileReference", methodName : "upload"});
	},
	openFileDialog_onCancel: function() {
		this.dispatchEvent(new (openfl_events_Event().default)("cancel"));
	},
	openFileDialog_onComplete: function() {
		this.dispatchEvent(new (openfl_events_Event().default)("complete"));
	},
	openFileDialog_onSelect: function(path) {
		this.name = (haxe_io_Path().default).withoutDirectory(path);
		this.__path = path;
		this.dispatchEvent(new (openfl_events_Event().default)("select"));
	},
	saveFileDialog_onCancel: function() {
		this.dispatchEvent(new (openfl_events_Event().default)("cancel"));
	},
	saveFileDialog_onSave: function(path) {
		var _gthis = this;
		(haxe_Timer().default).delay(function() {
			_gthis.dispatchEvent(new (openfl_events_Event().default)("complete"));
		},1);
	},
	saveFileDialog_onSelect: function(path) {
		this.dispatchEvent(new (openfl_events_Event().default)("select"));
	},
	urlLoader_onComplete: function(event) {
		this.dispatchEvent(event);
	},
	urlLoader_onIOError: function(event) {
		this.dispatchEvent(event);
	},
	urlLoader_onProgress: function(event) {
		this.dispatchEvent(event);
	}
});
FileReference.prototype.__class__ = FileReference.prototype.constructor = $hxClasses["openfl.net.FileReference"] = FileReference;

// Init



// Statics




// Export

exports.default = FileReference;