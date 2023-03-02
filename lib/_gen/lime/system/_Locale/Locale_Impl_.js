// Class: lime.system._Locale.Locale_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;

// Constructor

var Locale_Impl_ = function(){}

// Meta

Locale_Impl_.__name__ = "lime.system._Locale.Locale_Impl_";
Locale_Impl_.__isInterface__ = false;
Locale_Impl_.prototype = {
	
};
Locale_Impl_.prototype.__class__ = Locale_Impl_.prototype.constructor = $hxClasses["lime.system._Locale.Locale_Impl_"] = Locale_Impl_;

// Init



// Statics

Locale_Impl_._new = function(value) {
	var this1 = value;
	return this1;
}
Locale_Impl_.equals = function(a,b) {
	var language = Locale_Impl_.get_language(a);
	var region = Locale_Impl_.get_region(a);
	var language2 = Locale_Impl_.get_language(b);
	var region2 = Locale_Impl_.get_region(b);
	var languageMatch = language == language2;
	var regionMatch = region == region2;
	if(!languageMatch && language != null && language2 != null) {
		languageMatch = language.toLowerCase() == language2.toLowerCase();
	}
	if(!regionMatch && region != null && region2 != null) {
		regionMatch = region.toLowerCase() == region2.toLowerCase();
	}
	if(languageMatch) {
		return regionMatch;
	} else {
		return false;
	}
}
Locale_Impl_.__init = function() {
	if(Locale_Impl_.__systemLocale == null) {
		var locale = null;
		locale = navigator.language;
		if(locale != null) {
			Locale_Impl_.__systemLocale = locale;
		} else {
			Locale_Impl_.__systemLocale = "en-US";
		}
		Locale_Impl_.set_currentLocale(Locale_Impl_.__systemLocale);
	}
}
Locale_Impl_.get_language = function(this1) {
	if(this1 != null) {
		var index = this1.indexOf("_");
		if(index > -1) {
			var dashIndex = this1.indexOf("-");
			if(dashIndex > -1 && dashIndex < index) {
				index = dashIndex;
			}
			return this1.substring(0,index);
		}
		index = this1.indexOf("-");
		if(index > -1) {
			return this1.substring(0,index);
		}
	}
	return this1;
}
Locale_Impl_.get_region = function(this1) {
	if(this1 != null) {
		var underscoreIndex = this1.indexOf("_");
		var dotIndex = this1.indexOf(".");
		var dashIndex = this1.indexOf("-");
		if(underscoreIndex > -1) {
			if(dotIndex > -1) {
				return this1.substring(underscoreIndex + 1,dotIndex);
			} else {
				return this1.substring(underscoreIndex + 1);
			}
		} else if(dashIndex > -1) {
			if(dotIndex > -1) {
				return this1.substring(dashIndex + 1,dotIndex);
			} else {
				return this1.substring(dashIndex + 1);
			}
		}
	}
	return null;
}
Locale_Impl_.get_currentLocale = function() {
	Locale_Impl_.__init();
	return Locale_Impl_.currentLocale;
}
Locale_Impl_.set_currentLocale = function(value) {
	Locale_Impl_.__init();
	return Locale_Impl_.currentLocale = value;
}
Locale_Impl_.get_systemLocale = function() {
	Locale_Impl_.__init();
	return Locale_Impl_.__systemLocale;
}


// Export

exports.default = Locale_Impl_;