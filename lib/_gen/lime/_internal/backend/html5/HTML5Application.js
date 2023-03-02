// Class: lime._internal.backend.html5.HTML5Application

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../../hxClasses_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;
var $import = require("./../../../../import_stub").default;
var $bind = require("./../../../../bind_stub").default;
function Std() {return require("./../../../../Std");}
function lime_ui_Joystick() {return require("./../../../../lime/ui/Joystick");}
function lime__$internal_backend_html5_GameDeviceData() {return require("./../../../../lime/_internal/backend/html5/GameDeviceData");}
function lime_ui_Gamepad() {return require("./../../../../lime/ui/Gamepad");}
function haxe_ds_IntMap() {return require("./../../../../haxe/ds/IntMap");}
function lime_media_AudioManager() {return require("./../../../../lime/media/AudioManager");}
function lime_system_Sensor() {return require("./../../../../lime/system/Sensor");}
function lime_system_SensorType() {return require("./../../../../lime/system/SensorType");}

// Constructor

var HTML5Application = function(parent) {
	this.gameDeviceCache = new (haxe_ds_IntMap().default)();
	this.parent = parent;
	this.currentUpdate = 0;
	this.lastUpdate = 0;
	this.nextUpdate = 0;
	this.framePeriod = -1;
	(lime_media_AudioManager().default).init();
	this.accelerometer = (lime_system_Sensor().default).registerSensor((lime_system_SensorType().default).ACCELEROMETER,0);
}

// Meta

HTML5Application.__name__ = "lime._internal.backend.html5.HTML5Application";
HTML5Application.__isInterface__ = false;
HTML5Application.prototype = {
	convertKeyCode: function(keyCode) {
		if(keyCode >= 65 && keyCode <= 90) {
			return keyCode + 32;
		}
		switch(keyCode) {
		case 12:
			return 1073741980;
		case 16:
			return 1073742049;
		case 17:
			return 1073742048;
		case 18:
			return 1073742050;
		case 19:
			return 1073741896;
		case 20:
			return 1073741881;
		case 33:
			return 1073741899;
		case 34:
			return 1073741902;
		case 35:
			return 1073741901;
		case 36:
			return 1073741898;
		case 37:
			return 1073741904;
		case 38:
			return 1073741906;
		case 39:
			return 1073741903;
		case 40:
			return 1073741905;
		case 41:
			return 1073741943;
		case 43:
			return 1073741940;
		case 44:
			return 1073741894;
		case 45:
			return 1073741897;
		case 46:
			return 127;
		case 91:
			return 1073742051;
		case 92:
			return 1073742055;
		case 93:
			return 1073742055;
		case 95:
			return 1073742106;
		case 96:
			return 1073741922;
		case 97:
			return 1073741913;
		case 98:
			return 1073741914;
		case 99:
			return 1073741915;
		case 100:
			return 1073741916;
		case 101:
			return 1073741917;
		case 102:
			return 1073741918;
		case 103:
			return 1073741919;
		case 104:
			return 1073741920;
		case 105:
			return 1073741921;
		case 106:
			return 1073741909;
		case 107:
			return 1073741911;
		case 108:
			return 1073741923;
		case 109:
			return 1073741910;
		case 110:
			return 1073741923;
		case 111:
			return 1073741908;
		case 112:
			return 1073741882;
		case 113:
			return 1073741883;
		case 114:
			return 1073741884;
		case 115:
			return 1073741885;
		case 116:
			return 1073741886;
		case 117:
			return 1073741887;
		case 118:
			return 1073741888;
		case 119:
			return 1073741889;
		case 120:
			return 1073741890;
		case 121:
			return 1073741891;
		case 122:
			return 1073741892;
		case 123:
			return 1073741893;
		case 124:
			return 1073741928;
		case 125:
			return 1073741929;
		case 126:
			return 1073741930;
		case 127:
			return 1073741931;
		case 128:
			return 1073741932;
		case 129:
			return 1073741933;
		case 130:
			return 1073741934;
		case 131:
			return 1073741935;
		case 132:
			return 1073741936;
		case 133:
			return 1073741937;
		case 134:
			return 1073741938;
		case 135:
			return 1073741939;
		case 144:
			return 1073741907;
		case 145:
			return 1073741895;
		case 160:
			return 94;
		case 161:
			return 33;
		case 163:
			return 35;
		case 164:
			return 36;
		case 166:
			return 1073742094;
		case 167:
			return 1073742095;
		case 168:
			return 1073742097;
		case 169:
			return 41;
		case 170:
			return 42;
		case 171:
			return 96;
		case 172:
			return 1073741898;
		case 173:
			return 45;
		case 174:
			return 1073741953;
		case 175:
			return 1073741952;
		case 176:
			return 1073742082;
		case 177:
			return 1073742083;
		case 178:
			return 1073742084;
		case 179:
			return 1073742085;
		case 180:
			return 1073742089;
		case 181:
			return 1073742086;
		case 182:
			return 1073741953;
		case 183:
			return 1073741952;
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
		case 193:
			return 63;
		case 194:
			return 1073741923;
		case 219:
			return 91;
		case 220:
			return 92;
		case 221:
			return 93;
		case 222:
			return 39;
		case 223:
			return 96;
		case 224:
			return 1073742051;
		case 226:
			return 92;
		}
		return keyCode;
	},
	exec: function() {
		window.addEventListener("keydown",$bind(this,this.handleKeyEvent),false);
		window.addEventListener("keyup",$bind(this,this.handleKeyEvent),false);
		window.addEventListener("focus",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("blur",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("resize",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("beforeunload",$bind(this,this.handleWindowEvent),false);
		window.addEventListener("devicemotion",$bind(this,this.handleSensorEvent),false);
		
				if (!CanvasRenderingContext2D.prototype.isPointInStroke) {
					CanvasRenderingContext2D.prototype.isPointInStroke = function (path, x, y) {
						return false;
					};
				}
				if (!CanvasRenderingContext2D.prototype.isPointInPath) {
					CanvasRenderingContext2D.prototype.isPointInPath = function (path, x, y) {
						return false;
					};
				}
	
				if ('performance' in window == false) {
					window.performance = {};
				}
	
				if ('now' in window.performance == false) {
					var offset = Date.now();
					if (performance.timing && performance.timing.navigationStart) {
						offset = performance.timing.navigationStart
					}
					window.performance.now = function now() {
						return Date.now() - offset;
					}
				}
	
				var lastTime = 0;
				var vendors = ['ms', 'moz', 'webkit', 'o'];
				for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
					window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
					window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
				}
	
				if (!window.requestAnimationFrame)
					window.requestAnimationFrame = function(callback, element) {
						var currTime = new Date().getTime();
						var timeToCall = Math.max(0, 16 - (currTime - lastTime));
						var id = window.setTimeout(function() { callback(currTime + timeToCall); },
						  timeToCall);
						lastTime = currTime + timeToCall;
						return id;
					};
	
				if (!window.cancelAnimationFrame)
					window.cancelAnimationFrame = function(id) {
						clearTimeout(id);
					};
	
				window.requestAnimFrame = window.requestAnimationFrame;
			;
		this.lastUpdate = new Date().getTime();
		this.handleApplicationEvent();
		return 0;
	},
	exit: function() {
	},
	handleApplicationEvent: function(__) {
		var _g = 0;
		var _g1 = this.parent.__windows;
		while(_g < _g1.length) {
			var $window = _g1[_g];
			++_g;
			$window.__backend.updateSize();
		}
		this.updateGameDevices();
		this.currentUpdate = new Date().getTime();
		if(this.currentUpdate >= this.nextUpdate) {
			this.deltaTime = this.currentUpdate - this.lastUpdate;
			var _g2 = 0;
			var _g3 = this.parent.__windows;
			while(_g2 < _g3.length) {
				var window1 = _g3[_g2];
				++_g2;
				this.parent.onUpdate.dispatch((Std().default).int(this.deltaTime));
				if(window1.context != null) {
					window1.onRender.dispatch(window1.context);
				}
			}
			if(this.framePeriod < 0) {
				this.nextUpdate = this.currentUpdate;
			} else {
				this.nextUpdate = this.currentUpdate - this.currentUpdate % this.framePeriod + this.framePeriod;
			}
			this.lastUpdate = this.currentUpdate;
		}
		window.requestAnimationFrame($bind(this,this.handleApplicationEvent));
	},
	handleKeyEvent: function(event) {
		if(this.parent.get_window() != null) {
			var keyCode = this.convertKeyCode(event.keyCode != null ? event.keyCode : event.which);
			var modifier = (event.shiftKey ? 3 : 0) | (event.ctrlKey ? 192 : 0) | (event.altKey ? 768 : 0) | (event.metaKey ? 3072 : 0);
			if(event.type == "keydown") {
				this.parent.get_window().onKeyDown.dispatch(keyCode,modifier);
				if(this.parent.get_window().onKeyDown.canceled && event.cancelable) {
					event.preventDefault();
				}
			} else {
				this.parent.get_window().onKeyUp.dispatch(keyCode,modifier);
				if(this.parent.get_window().onKeyUp.canceled && event.cancelable) {
					event.preventDefault();
				}
			}
		}
	},
	handleSensorEvent: function(event) {
		this.accelerometer.onUpdate.dispatch(event.accelerationIncludingGravity.x,event.accelerationIncludingGravity.y,event.accelerationIncludingGravity.z);
	},
	handleWindowEvent: function(event) {
		if(this.parent.get_window() != null) {
			switch(event.type) {
			case "beforeunload":
				break;
			case "blur":
				this.parent.get_window().onFocusOut.dispatch();
				this.parent.get_window().onDeactivate.dispatch();
				break;
			case "focus":
				this.parent.get_window().onFocusIn.dispatch();
				this.parent.get_window().onActivate.dispatch();
				break;
			case "resize":
				this.parent.get_window().__backend.handleResizeEvent(event);
				break;
			}
		}
	},
	updateGameDevices: function() {
		var devices = (lime_ui_Joystick().default).__getDeviceData();
		if(devices == null) {
			return;
		}
		var id;
		var gamepad;
		var joystick;
		var data;
		var cache;
		var _g = 0;
		var _g1 = devices.length;
		while(_g < _g1) {
			var i = _g++;
			id = i;
			data = devices[id];
			if(data == null) {
				continue;
			}
			if(!this.gameDeviceCache.exists(id)) {
				cache = new (lime__$internal_backend_html5_GameDeviceData().default)();
				cache.id = id;
				cache.connected = data.connected;
				var _g2 = 0;
				var _g11 = data.buttons.length;
				while(_g2 < _g11) {
					var i1 = _g2++;
					cache.buttons.push(data.buttons[i1].value);
				}
				var _g21 = 0;
				var _g3 = data.axes.length;
				while(_g21 < _g3) {
					var i2 = _g21++;
					cache.axes.push(data.axes[i2]);
				}
				if(data.mapping == "standard") {
					cache.isGamepad = true;
				}
				this.gameDeviceCache.set(id,cache);
				if(data.connected) {
					(lime_ui_Joystick().default).__connect(id);
					if(cache.isGamepad) {
						(lime_ui_Gamepad().default).__connect(id);
					}
				}
			}
			cache = this.gameDeviceCache.get(id);
			joystick = (lime_ui_Joystick().default).devices.get(id);
			gamepad = (lime_ui_Gamepad().default).devices.get(id);
			if(data.connected) {
				var button;
				var value;
				var _g4 = 0;
				var _g12 = data.buttons.length;
				while(_g4 < _g12) {
					var i3 = _g4++;
					value = data.buttons[i3].value;
					if(value != cache.buttons[i3]) {
						if(i3 == 6) {
							joystick.onAxisMove.dispatch(data.axes.length,value);
							if(gamepad != null) {
								gamepad.onAxisMove.dispatch(4,value);
							}
						} else if(i3 == 7) {
							joystick.onAxisMove.dispatch(data.axes.length + 1,value);
							if(gamepad != null) {
								gamepad.onAxisMove.dispatch(5,value);
							}
						} else {
							if(value > 0) {
								joystick.onButtonDown.dispatch(i3);
							} else {
								joystick.onButtonUp.dispatch(i3);
							}
							if(gamepad != null) {
								switch(i3) {
								case 0:
									button = 0;
									break;
								case 1:
									button = 1;
									break;
								case 2:
									button = 2;
									break;
								case 3:
									button = 3;
									break;
								case 4:
									button = 9;
									break;
								case 5:
									button = 10;
									break;
								case 8:
									button = 4;
									break;
								case 9:
									button = 6;
									break;
								case 10:
									button = 7;
									break;
								case 11:
									button = 8;
									break;
								case 12:
									button = 11;
									break;
								case 13:
									button = 12;
									break;
								case 14:
									button = 13;
									break;
								case 15:
									button = 14;
									break;
								case 16:
									button = 5;
									break;
								default:
									continue;
								}
								if(value > 0) {
									gamepad.onButtonDown.dispatch(button);
								} else {
									gamepad.onButtonUp.dispatch(button);
								}
							}
						}
						cache.buttons[i3] = value;
					}
				}
				var _g22 = 0;
				var _g31 = data.axes.length;
				while(_g22 < _g31) {
					var i4 = _g22++;
					if(data.axes[i4] != cache.axes[i4]) {
						joystick.onAxisMove.dispatch(i4,data.axes[i4]);
						if(gamepad != null) {
							gamepad.onAxisMove.dispatch(i4,data.axes[i4]);
						}
						cache.axes[i4] = data.axes[i4];
					}
				}
			} else if(cache.connected) {
				cache.connected = false;
				(lime_ui_Joystick().default).__disconnect(id);
				(lime_ui_Gamepad().default).__disconnect(id);
			}
		}
	}
};
HTML5Application.prototype.__class__ = HTML5Application.prototype.constructor = $hxClasses["lime._internal.backend.html5.HTML5Application"] = HTML5Application;

// Init



// Statics




// Export

exports.default = HTML5Application;