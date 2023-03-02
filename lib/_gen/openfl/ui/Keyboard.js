// Class: openfl.ui.Keyboard

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;

// Constructor

var Keyboard = function(){}

// Meta

Keyboard.__name__ = "openfl.ui.Keyboard";
Keyboard.__isInterface__ = false;
Keyboard.prototype = {
	
};
Keyboard.prototype.__class__ = Keyboard.prototype.constructor = $hxClasses["openfl.ui.Keyboard"] = Keyboard;

// Init



// Statics

Keyboard.isAccessible = function() {
	return false;
}
Keyboard.__convertKeyCode = function(key) {
	switch(key) {
	case 8:
		return 8;
	case 9:
		return 9;
	case 13:
		return 13;
	case 27:
		return 27;
	case 32:
		return 32;
	case 33:
		return 49;
	case 34:
		return 222;
	case 35:
		return 51;
	case 36:
		return 52;
	case 37:
		return 53;
	case 38:
		return 55;
	case 39:
		return 222;
	case 40:
		return 57;
	case 41:
		return 48;
	case 42:
		return 56;
	case 44:
		return 188;
	case 45:
		return 189;
	case 46:
		return 190;
	case 47:
		return 191;
	case 48:
		return 48;
	case 49:
		return 49;
	case 50:
		return 50;
	case 51:
		return 51;
	case 52:
		return 52;
	case 53:
		return 53;
	case 54:
		return 54;
	case 55:
		return 55;
	case 56:
		return 56;
	case 57:
		return 57;
	case 58:
		return 186;
	case 59:
		return 186;
	case 60:
		return 60;
	case 61:
		return 187;
	case 62:
		return 190;
	case 63:
		return 191;
	case 64:
		return 50;
	case 91:
		return 219;
	case 92:
		return 220;
	case 93:
		return 221;
	case 94:
		return 54;
	case 95:
		return 189;
	case 96:
		return 192;
	case 97:
		return 65;
	case 98:
		return 66;
	case 99:
		return 67;
	case 100:
		return 68;
	case 101:
		return 69;
	case 102:
		return 70;
	case 103:
		return 71;
	case 104:
		return 72;
	case 105:
		return 73;
	case 106:
		return 74;
	case 107:
		return 75;
	case 108:
		return 76;
	case 109:
		return 77;
	case 110:
		return 78;
	case 111:
		return 79;
	case 112:
		return 80;
	case 113:
		return 81;
	case 114:
		return 82;
	case 115:
		return 83;
	case 116:
		return 84;
	case 117:
		return 85;
	case 118:
		return 86;
	case 119:
		return 87;
	case 120:
		return 88;
	case 121:
		return 89;
	case 122:
		return 90;
	case 127:
		return 46;
	case 1073741881:
		return 20;
	case 1073741882:
		return 112;
	case 1073741883:
		return 113;
	case 1073741884:
		return 114;
	case 1073741885:
		return 115;
	case 1073741886:
		return 116;
	case 1073741887:
		return 117;
	case 1073741888:
		return 118;
	case 1073741889:
		return 119;
	case 1073741890:
		return 120;
	case 1073741891:
		return 121;
	case 1073741892:
		return 122;
	case 1073741893:
		return 123;
	case 1073741894:
		return 301;
	case 1073741895:
		return 145;
	case 1073741896:
		return 19;
	case 1073741897:
		return 45;
	case 1073741898:
		return 36;
	case 1073741899:
		return 33;
	case 1073741901:
		return 35;
	case 1073741902:
		return 34;
	case 1073741903:
		return 39;
	case 1073741904:
		return 37;
	case 1073741905:
		return 40;
	case 1073741906:
		return 38;
	case 1073741907:
		return 144;
	case 1073741908:
		return 111;
	case 1073741909:
		return 106;
	case 1073741910:
		return 109;
	case 1073741911:
		return 107;
	case 1073741912:
		return 13;
	case 1073741913:
		return 97;
	case 1073741914:
		return 98;
	case 1073741915:
		return 99;
	case 1073741916:
		return 100;
	case 1073741917:
		return 101;
	case 1073741918:
		return 102;
	case 1073741919:
		return 103;
	case 1073741920:
		return 104;
	case 1073741921:
		return 105;
	case 1073741922:
		return 96;
	case 1073741923:
		return 110;
	case 1073741925:
		return 302;
	case 1073741928:
		return 124;
	case 1073741929:
		return 125;
	case 1073741930:
		return 126;
	case 1073741982:
		return 13;
	case 1073742044:
		return 110;
	case 1073742048:
		return 17;
	case 1073742049:
		return 16;
	case 1073742050:
		return 18;
	case 1073742051:
		return 15;
	case 1073742052:
		return 17;
	case 1073742053:
		return 16;
	case 1073742054:
		return 18;
	case 1073742055:
		return 15;
	default:
		return key;
	}
}
Keyboard.__getCharCode = function(key,shift) {
	if(shift == null) {
		shift = false;
	}
	if(!shift) {
		switch(key) {
		case 8:
			return 8;
		case 9:
			return 9;
		case 13:
			return 13;
		case 27:
			return 27;
		case 32:
			return 32;
		case 186:
			return 59;
		case 187:
			return 61;
		case 188:
			return 44;
		case 189:
			return 45;
		case 190:
			return 46;
		case 191:
			return 47;
		case 192:
			return 96;
		case 219:
			return 91;
		case 220:
			return 92;
		case 221:
			return 93;
		case 222:
			return 39;
		}
		if(key >= 48 && key <= 57) {
			return key - 48 + 48;
		}
		if(key >= 65 && key <= 90) {
			return key - 65 + 97;
		}
	} else {
		switch(key) {
		case 48:
			return 41;
		case 49:
			return 33;
		case 50:
			return 64;
		case 51:
			return 35;
		case 52:
			return 36;
		case 53:
			return 37;
		case 54:
			return 94;
		case 55:
			return 38;
		case 56:
			return 42;
		case 57:
			return 40;
		case 186:
			return 58;
		case 187:
			return 43;
		case 188:
			return 60;
		case 189:
			return 95;
		case 190:
			return 62;
		case 191:
			return 63;
		case 192:
			return 126;
		case 219:
			return 123;
		case 220:
			return 124;
		case 221:
			return 125;
		case 222:
			return 34;
		}
		if(key >= 65 && key <= 90) {
			return key - 65 + 65;
		}
	}
	if(key >= 96 && key <= 105) {
		return key - 96 + 48;
	}
	switch(key) {
	case 8:
		return 8;
	case 13:
		return 13;
	case 46:
		return 127;
	case 106:
		return 42;
	case 107:
		return 43;
	case 108:
		return 44;
	case 110:
		return 45;
	case 111:
		return 46;
	}
	return 0;
}
Keyboard.__getKeyLocation = function(key) {
	switch(key) {
	case 1073741908:case 1073741909:case 1073741910:case 1073741911:case 1073741912:case 1073741913:case 1073741914:case 1073741915:case 1073741916:case 1073741917:case 1073741918:case 1073741919:case 1073741920:case 1073741921:case 1073741922:case 1073741923:case 1073742044:
		return 3;
	case 1073742048:case 1073742049:case 1073742050:case 1073742051:
		return 1;
	case 1073742052:case 1073742053:case 1073742054:case 1073742055:
		return 2;
	default:
		return 0;
	}
}
Keyboard.__meta__ = { statics : { BREAK : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, NUMLOCK : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}}
Keyboard.NUMBER_0 = 48
Keyboard.NUMBER_1 = 49
Keyboard.NUMBER_2 = 50
Keyboard.NUMBER_3 = 51
Keyboard.NUMBER_4 = 52
Keyboard.NUMBER_5 = 53
Keyboard.NUMBER_6 = 54
Keyboard.NUMBER_7 = 55
Keyboard.NUMBER_8 = 56
Keyboard.NUMBER_9 = 57
Keyboard.A = 65
Keyboard.B = 66
Keyboard.C = 67
Keyboard.D = 68
Keyboard.E = 69
Keyboard.F = 70
Keyboard.G = 71
Keyboard.H = 72
Keyboard.I = 73
Keyboard.J = 74
Keyboard.K = 75
Keyboard.L = 76
Keyboard.M = 77
Keyboard.N = 78
Keyboard.O = 79
Keyboard.P = 80
Keyboard.Q = 81
Keyboard.R = 82
Keyboard.S = 83
Keyboard.T = 84
Keyboard.U = 85
Keyboard.V = 86
Keyboard.W = 87
Keyboard.X = 88
Keyboard.Y = 89
Keyboard.Z = 90
Keyboard.NUMPAD_0 = 96
Keyboard.NUMPAD_1 = 97
Keyboard.NUMPAD_2 = 98
Keyboard.NUMPAD_3 = 99
Keyboard.NUMPAD_4 = 100
Keyboard.NUMPAD_5 = 101
Keyboard.NUMPAD_6 = 102
Keyboard.NUMPAD_7 = 103
Keyboard.NUMPAD_8 = 104
Keyboard.NUMPAD_9 = 105
Keyboard.NUMPAD_MULTIPLY = 106
Keyboard.NUMPAD_ADD = 107
Keyboard.NUMPAD_ENTER = 108
Keyboard.NUMPAD_SUBTRACT = 109
Keyboard.NUMPAD_DECIMAL = 110
Keyboard.NUMPAD_DIVIDE = 111
Keyboard.F1 = 112
Keyboard.F2 = 113
Keyboard.F3 = 114
Keyboard.F4 = 115
Keyboard.F5 = 116
Keyboard.F6 = 117
Keyboard.F7 = 118
Keyboard.F8 = 119
Keyboard.F9 = 120
Keyboard.F10 = 121
Keyboard.F11 = 122
Keyboard.F12 = 123
Keyboard.F13 = 124
Keyboard.F14 = 125
Keyboard.F15 = 126
Keyboard.BACKSPACE = 8
Keyboard.TAB = 9
Keyboard.ALTERNATE = 18
Keyboard.ENTER = 13
Keyboard.COMMAND = 15
Keyboard.SHIFT = 16
Keyboard.CONTROL = 17
Keyboard.BREAK = 19
Keyboard.CAPS_LOCK = 20
Keyboard.NUMPAD = 21
Keyboard.ESCAPE = 27
Keyboard.SPACE = 32
Keyboard.PAGE_UP = 33
Keyboard.PAGE_DOWN = 34
Keyboard.END = 35
Keyboard.HOME = 36
Keyboard.LEFT = 37
Keyboard.RIGHT = 39
Keyboard.UP = 38
Keyboard.DOWN = 40
Keyboard.INSERT = 45
Keyboard.DELETE = 46
Keyboard.NUMLOCK = 144
Keyboard.SEMICOLON = 186
Keyboard.EQUAL = 187
Keyboard.COMMA = 188
Keyboard.MINUS = 189
Keyboard.PERIOD = 190
Keyboard.SLASH = 191
Keyboard.BACKQUOTE = 192
Keyboard.LEFTBRACKET = 219
Keyboard.BACKSLASH = 220
Keyboard.RIGHTBRACKET = 221
Keyboard.QUOTE = 222

// Export

exports.default = Keyboard;