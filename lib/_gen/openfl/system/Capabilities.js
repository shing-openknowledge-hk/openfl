// Class: openfl.system.Capabilities

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_system__$Locale_Locale_$Impl_$() {return require("./../../lime/system/_Locale/Locale_Impl_");}
function lime_system_System() {return require("./../../lime/system/System");}
function openfl__$internal_Lib() {return require("./../../openfl/_internal/Lib");}

// Constructor

var Capabilities = function(){}

// Meta

Capabilities.__name__ = "openfl.system.Capabilities";
Capabilities.__isInterface__ = false;
Capabilities.prototype = {
	
};
Capabilities.prototype.__class__ = Capabilities.prototype.constructor = $hxClasses["openfl.system.Capabilities"] = Capabilities;

// Init

Object.defineProperties(Capabilities,{ cpuArchitecture : { get : function() {
	return Capabilities.get_cpuArchitecture();
}}, language : { get : function() {
	return Capabilities.get_language();
}}, manufacturer : { get : function() {
	return Capabilities.get_manufacturer();
}}, os : { get : function() {
	return Capabilities.get_os();
}}, pixelAspectRatio : { get : function() {
	return Capabilities.get_pixelAspectRatio();
}}, screenDPI : { get : function() {
	return Capabilities.get_screenDPI();
}}, screenResolutionX : { get : function() {
	return Capabilities.get_screenResolutionX();
}}, screenResolutionY : { get : function() {
	return Capabilities.get_screenResolutionY();
}}, version : { get : function() {
	return Capabilities.get_version();
}}});

// Statics

Capabilities.hasMultiChannelAudio = function(type) {
	return false;
}
Capabilities.get_cpuArchitecture = function() {
	return "x86";
}
Capabilities.get_language = function() {
	var language = (lime_system__$Locale_Locale_$Impl_$().default).get_language((lime_system__$Locale_Locale_$Impl_$().default).get_currentLocale());
	if(language != null) {
		language = language.toLowerCase();
		switch(language) {
		case "cs":case "da":case "de":case "en":case "es":case "fi":case "fr":case "hu":case "it":case "ja":case "ko":case "nb":case "nl":case "pl":case "pt":case "ru":case "sv":case "tr":
			return language;
		case "zh":
			var region = (lime_system__$Locale_Locale_$Impl_$().default).get_region((lime_system__$Locale_Locale_$Impl_$().default).get_currentLocale());
			if(region != null) {
				switch(region.toUpperCase()) {
				case "HANT":case "TW":
					return "zh-TW";
				default:
				}
			}
			return "zh-CN";
		default:
			return "xu";
		}
	}
	return "en";
}
Capabilities.get_manufacturer = function() {
	var name = (lime_system_System().default).get_platformName();
	return "OpenFL" + (name != null ? " " + name : "");
}
Capabilities.get_os = function() {
	var label = (lime_system_System().default).get_platformLabel();
	if(label != null) {
		return label;
	} else {
		return "";
	}
}
Capabilities.get_pixelAspectRatio = function() {
	return 1;
}
Capabilities.get_screenDPI = function() {
	var $window = (openfl__$internal_Lib().default).application != null ? (openfl__$internal_Lib().default).application.get_window() : null;
	var screenDPI = Capabilities.__standardDensities[0];
	if($window != null) {
		var display = $window.get_display();
		if(display != null) {
			var actual = display.dpi;
			var closestValue = screenDPI;
			var closestDifference = Math.abs(actual - screenDPI);
			var difference;
			var _g = 0;
			var _g1 = Capabilities.__standardDensities;
			while(_g < _g1.length) {
				var density = _g1[_g];
				++_g;
				difference = Math.abs(actual - density);
				if(difference < closestDifference) {
					closestDifference = difference;
					closestValue = density;
				}
			}
			screenDPI = closestValue;
		}
	}
	return screenDPI;
}
Capabilities.get_screenResolutionX = function() {
	var stage = (openfl__$internal_Lib().default).current.stage;
	var resolutionX = 0;
	if(stage == null) {
		return 0;
	}
	if(stage.window != null) {
		var display = stage.window.get_display();
		if(display != null) {
			resolutionX = Math.ceil(display.currentMode.width * stage.window.get_scale());
		}
	}
	if(resolutionX > 0) {
		return resolutionX;
	}
	return stage.stageWidth;
}
Capabilities.get_screenResolutionY = function() {
	var stage = (openfl__$internal_Lib().default).current.stage;
	var resolutionY = 0;
	if(stage == null) {
		return 0;
	}
	if(stage.window != null) {
		var display = stage.window.get_display();
		if(display != null) {
			resolutionY = Math.ceil(display.currentMode.height * stage.window.get_scale());
		}
	}
	if(resolutionY > 0) {
		return resolutionY;
	}
	return stage.stageHeight;
}
Capabilities.get_version = function() {
	var value = "WEB";
	return value;
}
Capabilities.avHardwareDisable = true
Capabilities.hasAccessibility = false
Capabilities.hasAudio = true
Capabilities.hasAudioEncoder = false
Capabilities.hasEmbeddedVideo = false
Capabilities.hasIME = false
Capabilities.hasMP3 = false
Capabilities.hasPrinting = true
Capabilities.hasScreenBroadcast = false
Capabilities.hasScreenPlayback = false
Capabilities.hasStreamingAudio = false
Capabilities.hasStreamingVideo = false
Capabilities.hasTLS = true
Capabilities.hasVideoEncoder = true
Capabilities.isDebugger = false
Capabilities.isEmbeddedInAcrobat = false
Capabilities.localFileReadDisable = false
Capabilities.maxLevelIDC = 0
Capabilities.playerType = "StandAlone"
Capabilities.screenColor = "color"
Capabilities.serverString = ""
Capabilities.supports32BitProcesses = false
Capabilities.supports64BitProcesses = false
Capabilities.touchscreenType = "finger"
Capabilities.__standardDensities = [120,160,240,320,480,640,800,960]

// Export

exports.default = Capabilities;