// Class: lime.ui._KeyModifier.KeyModifier_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var KeyModifier_Impl_ = function(){}

// Meta

KeyModifier_Impl_.__name__ = "lime.ui._KeyModifier.KeyModifier_Impl_";
KeyModifier_Impl_.__isInterface__ = false;
KeyModifier_Impl_.prototype = {
	
};
KeyModifier_Impl_.prototype.__class__ = KeyModifier_Impl_.prototype.constructor = $hxClasses["lime.ui._KeyModifier.KeyModifier_Impl_"] = KeyModifier_Impl_;

// Init



// Statics

KeyModifier_Impl_.get_altKey = function(this1) {
	if((this1 & 256) <= 0) {
		return (this1 & 512) > 0;
	} else {
		return true;
	}
}
KeyModifier_Impl_.set_altKey = function(this1,value) {
	if(value) {
		this1 |= 768;
	} else {
		this1 &= 268435455 - 768;
	}
	return value;
}
KeyModifier_Impl_.get_capsLock = function(this1) {
	if((this1 & 8192) <= 0) {
		return (this1 & 8192) > 0;
	} else {
		return true;
	}
}
KeyModifier_Impl_.set_capsLock = function(this1,value) {
	if(value) {
		this1 |= 8192;
	} else {
		this1 &= 268435455 - 8192;
	}
	return value;
}
KeyModifier_Impl_.get_ctrlKey = function(this1) {
	if((this1 & 64) <= 0) {
		return (this1 & 128) > 0;
	} else {
		return true;
	}
}
KeyModifier_Impl_.set_ctrlKey = function(this1,value) {
	if(value) {
		this1 |= 192;
	} else {
		this1 &= 268435455 - 192;
	}
	return value;
}
KeyModifier_Impl_.get_metaKey = function(this1) {
	if((this1 & 1024) <= 0) {
		return (this1 & 2048) > 0;
	} else {
		return true;
	}
}
KeyModifier_Impl_.set_metaKey = function(this1,value) {
	if(value) {
		this1 |= 3072;
	} else {
		this1 &= 268435455 - 3072;
	}
	return value;
}
KeyModifier_Impl_.get_numLock = function(this1) {
	if((this1 & 4096) <= 0) {
		return (this1 & 4096) > 0;
	} else {
		return true;
	}
}
KeyModifier_Impl_.set_numLock = function(this1,value) {
	if(value) {
		this1 |= 4096;
	} else {
		this1 &= 268435455 - 4096;
	}
	return value;
}
KeyModifier_Impl_.get_shiftKey = function(this1) {
	if((this1 & 1) <= 0) {
		return (this1 & 2) > 0;
	} else {
		return true;
	}
}
KeyModifier_Impl_.set_shiftKey = function(this1,value) {
	if(value) {
		this1 |= 3;
	} else {
		this1 &= 268435455 - 3;
	}
	return value;
}
KeyModifier_Impl_.NONE = 0
KeyModifier_Impl_.LEFT_SHIFT = 1
KeyModifier_Impl_.RIGHT_SHIFT = 2
KeyModifier_Impl_.LEFT_CTRL = 64
KeyModifier_Impl_.RIGHT_CTRL = 128
KeyModifier_Impl_.LEFT_ALT = 256
KeyModifier_Impl_.RIGHT_ALT = 512
KeyModifier_Impl_.LEFT_META = 1024
KeyModifier_Impl_.RIGHT_META = 2048
KeyModifier_Impl_.NUM_LOCK = 4096
KeyModifier_Impl_.CAPS_LOCK = 8192
KeyModifier_Impl_.MODE = 16384
KeyModifier_Impl_.CTRL = 192
KeyModifier_Impl_.SHIFT = 3
KeyModifier_Impl_.ALT = 768
KeyModifier_Impl_.META = 3072

// Export

exports.default = KeyModifier_Impl_;