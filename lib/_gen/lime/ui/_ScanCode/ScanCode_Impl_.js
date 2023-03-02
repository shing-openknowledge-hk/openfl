// Class: lime.ui._ScanCode.ScanCode_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime_ui__$KeyCode_KeyCode_$Impl_$() {return require("./../../../lime/ui/_KeyCode/KeyCode_Impl_");}

// Constructor

var ScanCode_Impl_ = function(){}

// Meta

ScanCode_Impl_.__name__ = "lime.ui._ScanCode.ScanCode_Impl_";
ScanCode_Impl_.__isInterface__ = false;
ScanCode_Impl_.prototype = {
	
};
ScanCode_Impl_.prototype.__class__ = ScanCode_Impl_.prototype.constructor = $hxClasses["lime.ui._ScanCode.ScanCode_Impl_"] = ScanCode_Impl_;

// Init



// Statics

ScanCode_Impl_.fromKeyCode = function(keyCode) {
	return (lime_ui__$KeyCode_KeyCode_$Impl_$().default).toScanCode(keyCode);
}
ScanCode_Impl_.toKeyCode = function(scanCode) {
	return (lime_ui__$KeyCode_KeyCode_$Impl_$().default).fromScanCode(scanCode);
}
ScanCode_Impl_.gt = function(a,b) {
	return a > b;
}
ScanCode_Impl_.gte = function(a,b) {
	return a >= b;
}
ScanCode_Impl_.lt = function(a,b) {
	return a < b;
}
ScanCode_Impl_.lte = function(a,b) {
	return a <= b;
}
ScanCode_Impl_.plus = function(a,b) {
	return a + b;
}
ScanCode_Impl_.UNKNOWN = 0
ScanCode_Impl_.BACKSPACE = 42
ScanCode_Impl_.TAB = 43
ScanCode_Impl_.RETURN = 40
ScanCode_Impl_.ESCAPE = 41
ScanCode_Impl_.SPACE = 44
ScanCode_Impl_.SINGLE_QUOTE = 52
ScanCode_Impl_.COMMA = 54
ScanCode_Impl_.MINUS = 45
ScanCode_Impl_.PERIOD = 55
ScanCode_Impl_.SLASH = 56
ScanCode_Impl_.NUMBER_0 = 39
ScanCode_Impl_.NUMBER_1 = 30
ScanCode_Impl_.NUMBER_2 = 31
ScanCode_Impl_.NUMBER_3 = 32
ScanCode_Impl_.NUMBER_4 = 33
ScanCode_Impl_.NUMBER_5 = 34
ScanCode_Impl_.NUMBER_6 = 35
ScanCode_Impl_.NUMBER_7 = 36
ScanCode_Impl_.NUMBER_8 = 37
ScanCode_Impl_.NUMBER_9 = 38
ScanCode_Impl_.SEMICOLON = 51
ScanCode_Impl_.EQUALS = 46
ScanCode_Impl_.LEFT_BRACKET = 47
ScanCode_Impl_.BACKSLASH = 49
ScanCode_Impl_.RIGHT_BRACKET = 48
ScanCode_Impl_.GRAVE = 53
ScanCode_Impl_.A = 4
ScanCode_Impl_.B = 5
ScanCode_Impl_.C = 6
ScanCode_Impl_.D = 7
ScanCode_Impl_.E = 8
ScanCode_Impl_.F = 9
ScanCode_Impl_.G = 10
ScanCode_Impl_.H = 11
ScanCode_Impl_.I = 12
ScanCode_Impl_.J = 13
ScanCode_Impl_.K = 14
ScanCode_Impl_.L = 15
ScanCode_Impl_.M = 16
ScanCode_Impl_.N = 17
ScanCode_Impl_.O = 18
ScanCode_Impl_.P = 19
ScanCode_Impl_.Q = 20
ScanCode_Impl_.R = 21
ScanCode_Impl_.S = 22
ScanCode_Impl_.T = 23
ScanCode_Impl_.U = 24
ScanCode_Impl_.V = 25
ScanCode_Impl_.W = 26
ScanCode_Impl_.X = 27
ScanCode_Impl_.Y = 28
ScanCode_Impl_.Z = 29
ScanCode_Impl_.DELETE = 76
ScanCode_Impl_.CAPS_LOCK = 57
ScanCode_Impl_.F1 = 58
ScanCode_Impl_.F2 = 59
ScanCode_Impl_.F3 = 60
ScanCode_Impl_.F4 = 61
ScanCode_Impl_.F5 = 62
ScanCode_Impl_.F6 = 63
ScanCode_Impl_.F7 = 64
ScanCode_Impl_.F8 = 65
ScanCode_Impl_.F9 = 66
ScanCode_Impl_.F10 = 67
ScanCode_Impl_.F11 = 68
ScanCode_Impl_.F12 = 69
ScanCode_Impl_.PRINT_SCREEN = 70
ScanCode_Impl_.SCROLL_LOCK = 71
ScanCode_Impl_.PAUSE = 72
ScanCode_Impl_.INSERT = 73
ScanCode_Impl_.HOME = 74
ScanCode_Impl_.PAGE_UP = 75
ScanCode_Impl_.END = 77
ScanCode_Impl_.PAGE_DOWN = 78
ScanCode_Impl_.RIGHT = 79
ScanCode_Impl_.LEFT = 80
ScanCode_Impl_.DOWN = 81
ScanCode_Impl_.UP = 82
ScanCode_Impl_.NUM_LOCK = 83
ScanCode_Impl_.NUMPAD_DIVIDE = 84
ScanCode_Impl_.NUMPAD_MULTIPLY = 85
ScanCode_Impl_.NUMPAD_MINUS = 86
ScanCode_Impl_.NUMPAD_PLUS = 87
ScanCode_Impl_.NUMPAD_ENTER = 88
ScanCode_Impl_.NUMPAD_1 = 89
ScanCode_Impl_.NUMPAD_2 = 90
ScanCode_Impl_.NUMPAD_3 = 91
ScanCode_Impl_.NUMPAD_4 = 92
ScanCode_Impl_.NUMPAD_5 = 93
ScanCode_Impl_.NUMPAD_6 = 94
ScanCode_Impl_.NUMPAD_7 = 95
ScanCode_Impl_.NUMPAD_8 = 96
ScanCode_Impl_.NUMPAD_9 = 97
ScanCode_Impl_.NUMPAD_0 = 98
ScanCode_Impl_.NUMPAD_PERIOD = 99
ScanCode_Impl_.APPLICATION = 101
ScanCode_Impl_.POWER = 102
ScanCode_Impl_.NUMPAD_EQUALS = 103
ScanCode_Impl_.F13 = 104
ScanCode_Impl_.F14 = 105
ScanCode_Impl_.F15 = 106
ScanCode_Impl_.F16 = 107
ScanCode_Impl_.F17 = 108
ScanCode_Impl_.F18 = 109
ScanCode_Impl_.F19 = 110
ScanCode_Impl_.F20 = 111
ScanCode_Impl_.F21 = 112
ScanCode_Impl_.F22 = 113
ScanCode_Impl_.F23 = 114
ScanCode_Impl_.F24 = 115
ScanCode_Impl_.EXECUTE = 116
ScanCode_Impl_.HELP = 117
ScanCode_Impl_.MENU = 118
ScanCode_Impl_.SELECT = 119
ScanCode_Impl_.STOP = 120
ScanCode_Impl_.AGAIN = 121
ScanCode_Impl_.UNDO = 122
ScanCode_Impl_.CUT = 123
ScanCode_Impl_.COPY = 124
ScanCode_Impl_.PASTE = 125
ScanCode_Impl_.FIND = 126
ScanCode_Impl_.MUTE = 127
ScanCode_Impl_.VOLUME_UP = 128
ScanCode_Impl_.VOLUME_DOWN = 129
ScanCode_Impl_.NUMPAD_COMMA = 133
ScanCode_Impl_.ALT_ERASE = 153
ScanCode_Impl_.SYSTEM_REQUEST = 154
ScanCode_Impl_.CANCEL = 155
ScanCode_Impl_.CLEAR = 156
ScanCode_Impl_.PRIOR = 157
ScanCode_Impl_.RETURN2 = 158
ScanCode_Impl_.SEPARATOR = 159
ScanCode_Impl_.OUT = 160
ScanCode_Impl_.OPER = 161
ScanCode_Impl_.CLEAR_AGAIN = 162
ScanCode_Impl_.CRSEL = 163
ScanCode_Impl_.EXSEL = 164
ScanCode_Impl_.NUMPAD_00 = 176
ScanCode_Impl_.NUMPAD_000 = 177
ScanCode_Impl_.THOUSAND_SEPARATOR = 178
ScanCode_Impl_.DECIMAL_SEPARATOR = 179
ScanCode_Impl_.CURRENCY_UNIT = 180
ScanCode_Impl_.CURRENCY_SUBUNIT = 181
ScanCode_Impl_.NUMPAD_LEFT_PARENTHESIS = 182
ScanCode_Impl_.NUMPAD_RIGHT_PARENTHESIS = 183
ScanCode_Impl_.NUMPAD_LEFT_BRACE = 184
ScanCode_Impl_.NUMPAD_RIGHT_BRACE = 185
ScanCode_Impl_.NUMPAD_TAB = 186
ScanCode_Impl_.NUMPAD_BACKSPACE = 187
ScanCode_Impl_.NUMPAD_A = 188
ScanCode_Impl_.NUMPAD_B = 189
ScanCode_Impl_.NUMPAD_C = 190
ScanCode_Impl_.NUMPAD_D = 191
ScanCode_Impl_.NUMPAD_E = 192
ScanCode_Impl_.NUMPAD_F = 193
ScanCode_Impl_.NUMPAD_XOR = 194
ScanCode_Impl_.NUMPAD_POWER = 195
ScanCode_Impl_.NUMPAD_PERCENT = 196
ScanCode_Impl_.NUMPAD_LESS_THAN = 197
ScanCode_Impl_.NUMPAD_GREATER_THAN = 198
ScanCode_Impl_.NUMPAD_AMPERSAND = 199
ScanCode_Impl_.NUMPAD_DOUBLE_AMPERSAND = 200
ScanCode_Impl_.NUMPAD_VERTICAL_BAR = 201
ScanCode_Impl_.NUMPAD_DOUBLE_VERTICAL_BAR = 202
ScanCode_Impl_.NUMPAD_COLON = 203
ScanCode_Impl_.NUMPAD_HASH = 204
ScanCode_Impl_.NUMPAD_SPACE = 205
ScanCode_Impl_.NUMPAD_AT = 206
ScanCode_Impl_.NUMPAD_EXCLAMATION = 207
ScanCode_Impl_.NUMPAD_MEM_STORE = 208
ScanCode_Impl_.NUMPAD_MEM_RECALL = 209
ScanCode_Impl_.NUMPAD_MEM_CLEAR = 210
ScanCode_Impl_.NUMPAD_MEM_ADD = 211
ScanCode_Impl_.NUMPAD_MEM_SUBTRACT = 212
ScanCode_Impl_.NUMPAD_MEM_MULTIPLY = 213
ScanCode_Impl_.NUMPAD_MEM_DIVIDE = 214
ScanCode_Impl_.NUMPAD_PLUS_MINUS = 215
ScanCode_Impl_.NUMPAD_CLEAR = 216
ScanCode_Impl_.NUMPAD_CLEAR_ENTRY = 217
ScanCode_Impl_.NUMPAD_BINARY = 218
ScanCode_Impl_.NUMPAD_OCTAL = 219
ScanCode_Impl_.NUMPAD_DECIMAL = 220
ScanCode_Impl_.NUMPAD_HEXADECIMAL = 221
ScanCode_Impl_.LEFT_CTRL = 224
ScanCode_Impl_.LEFT_SHIFT = 225
ScanCode_Impl_.LEFT_ALT = 226
ScanCode_Impl_.LEFT_META = 227
ScanCode_Impl_.RIGHT_CTRL = 228
ScanCode_Impl_.RIGHT_SHIFT = 229
ScanCode_Impl_.RIGHT_ALT = 230
ScanCode_Impl_.RIGHT_META = 231
ScanCode_Impl_.MODE = 257
ScanCode_Impl_.AUDIO_NEXT = 258
ScanCode_Impl_.AUDIO_PREVIOUS = 259
ScanCode_Impl_.AUDIO_STOP = 260
ScanCode_Impl_.AUDIO_PLAY = 261
ScanCode_Impl_.AUDIO_MUTE = 262
ScanCode_Impl_.MEDIA_SELECT = 263
ScanCode_Impl_.WWW = 264
ScanCode_Impl_.MAIL = 265
ScanCode_Impl_.CALCULATOR = 266
ScanCode_Impl_.COMPUTER = 267
ScanCode_Impl_.APP_CONTROL_SEARCH = 268
ScanCode_Impl_.APP_CONTROL_HOME = 269
ScanCode_Impl_.APP_CONTROL_BACK = 270
ScanCode_Impl_.APP_CONTROL_FORWARD = 271
ScanCode_Impl_.APP_CONTROL_STOP = 272
ScanCode_Impl_.APP_CONTROL_REFRESH = 273
ScanCode_Impl_.APP_CONTROL_BOOKMARKS = 274
ScanCode_Impl_.BRIGHTNESS_DOWN = 275
ScanCode_Impl_.BRIGHTNESS_UP = 276
ScanCode_Impl_.DISPLAY_SWITCH = 277
ScanCode_Impl_.BACKLIGHT_TOGGLE = 278
ScanCode_Impl_.BACKLIGHT_DOWN = 279
ScanCode_Impl_.BACKLIGHT_UP = 280
ScanCode_Impl_.EJECT = 281
ScanCode_Impl_.SLEEP = 282

// Export

exports.default = ScanCode_Impl_;