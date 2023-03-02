// Class: openfl.display.Window

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $extend = require("./../../extend_stub").default;
function lime_ui_Window() {return require("./../../lime/ui/Window");}
function Reflect() {return require("./../../Reflect");}
function openfl_display_Stage() {return require("./../../openfl/display/Stage");}
function haxe_CallStack() {return require("./../../haxe/CallStack");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}

// Constructor

var Window = function(application,attributes) {
	(lime_ui_Window().default).call(this,application,attributes);
	if((Reflect().default).hasField(attributes,"stage")) {
		this.stage = (Reflect().default).field(attributes,"stage");
		this.stage.window = this;
		(Reflect().default).deleteField(attributes,"stage");
	} else {
		this.stage = new (openfl_display_Stage().default)(this,(Reflect().default).hasField(attributes.context,"background") ? attributes.context.background : 16777215);
	}
	if((Reflect().default).hasField(attributes,"parameters")) {
		try {
			this.stage.loaderInfo.parameters = attributes.parameters;
		} catch( e ) {
			(haxe_CallStack().default).lastException = e;
			var e1 = ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e;
		}
	}
	if((Reflect().default).hasField(attributes,"resizable") && !attributes.resizable) {
		this.stage.__setLogicalSize(attributes.width,attributes.height);
	}
	application.addModule(this.stage);
}

// Meta

Window.__name__ = "openfl.display.Window";
Window.__isInterface__ = false;
Window.__super__ = (lime_ui_Window().default);
Window.prototype = $extend((lime_ui_Window().default).prototype, {
	
});
Window.prototype.__class__ = Window.prototype.constructor = $hxClasses["openfl.display.Window"] = Window;

// Init



// Statics


Window.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, fields : { _ : { SuppressWarnings : ["checkstyle:Dynamic"]}}}

// Export

exports.default = Window;