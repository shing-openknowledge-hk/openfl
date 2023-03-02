// Class: openfl.display.MovieClip

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
var $bind = require("./../../bind_stub").default;
var $extend = require("./../../extend_stub").default;
function openfl_display_Sprite() {return require("./../../openfl/display/Sprite");}
function haxe_ds_IntMap() {return require("./../../haxe/ds/IntMap");}
function Std() {return require("./../../Std");}
function openfl_display_FrameLabel() {return require("./../../openfl/display/FrameLabel");}
function haxe_CallStack() {return require("./../../haxe/CallStack");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function lime_utils_Log() {return require("./../../lime/utils/Log");}
function openfl__$internal_symbols_timeline_FrameObjectType() {return require("./../../openfl/_internal/symbols/timeline/FrameObjectType");}
function openfl_events_Event() {return require("./../../openfl/events/Event");}
function openfl_display__$MovieClip_FrameSymbolInstance() {return require("./../../openfl/display/_MovieClip/FrameSymbolInstance");}
function openfl_errors_ArgumentError() {return require("./../../openfl/errors/ArgumentError");}
function Type() {return require("./../../Type");}
function openfl_geom_ColorTransform() {return require("./../../openfl/geom/ColorTransform");}
function openfl_filters_BlurFilter() {return require("./../../openfl/filters/BlurFilter");}
function openfl_filters_ColorMatrixFilter() {return require("./../../openfl/filters/ColorMatrixFilter");}
function openfl_filters_DropShadowFilter() {return require("./../../openfl/filters/DropShadowFilter");}
function openfl_filters_GlowFilter() {return require("./../../openfl/filters/GlowFilter");}
function Reflect() {return require("./../../Reflect");}

// Constructor

var MovieClip = function() {
	(openfl_display_Sprite().default).call(this);
	this.__currentFrame = 1;
	this.__currentLabels = [];
	this.__instanceFields = [];
	this.__totalFrames = 0;
	this.__enabled = true;
	if(MovieClip.__initSymbol != null) {
		this.__swf = MovieClip.__initSWF;
		this.__symbol = MovieClip.__initSymbol;
		MovieClip.__initSWF = null;
		MovieClip.__initSymbol = null;
		this.__fromSymbol(this.__swf,this.__symbol);
	}
}

// Meta

MovieClip.__name__ = "openfl.display.MovieClip";
MovieClip.__isInterface__ = false;
MovieClip.__super__ = (openfl_display_Sprite().default);
MovieClip.prototype = $extend((openfl_display_Sprite().default).prototype, {
	addFrameScript: function(index,method) {
		if(index < 0) {
			return;
		}
		var frame = index + 1;
		if(method != null) {
			if(this.__frameScripts == null) {
				this.__frameScripts = new (haxe_ds_IntMap().default)();
			}
			this.__frameScripts.set(frame,method);
		} else if(this.__frameScripts != null) {
			this.__frameScripts.remove(frame);
		}
	},
	gotoAndPlay: function(frame,scene) {
		this.play();
		this.__goto(this.__resolveFrameReference(frame));
	},
	gotoAndStop: function(frame,scene) {
		this.stop();
		this.__goto(this.__resolveFrameReference(frame));
	},
	nextFrame: function() {
		this.stop();
		this.__goto(this.__currentFrame + 1);
	},
	play: function() {
		if(this.__symbol == null || this.__playing || this.__totalFrames < 2) {
			return;
		}
		this.__playing = true;
		if(!MovieClip.__useParentFPS) {
			this.__frameTime = (Std().default).int(1000 / this.__swf.frameRate);
			this.__timeElapsed = 0;
		}
	},
	prevFrame: function() {
		this.stop();
		this.__goto(this.__currentFrame - 1);
	},
	stop: function() {
		this.__playing = false;
	},
	__enterFrame: function(deltaTime) {
		this.__updateFrameScript(deltaTime);
		this.__updateSymbol(this.__currentFrame);
		(openfl_display_Sprite().default).prototype.__enterFrame.call(this,deltaTime);
	},
	__updateFrameScript: function(deltaTime) {
		if(this.__symbol != null && this.__playing) {
			var nextFrame = this.__getNextFrame(deltaTime);
			if(this.__lastFrameScriptEval == nextFrame) {
				(openfl_display_Sprite().default).prototype.__enterFrame.call(this,deltaTime);
				return;
			}
			if(this.__frameScripts != null) {
				if(nextFrame < this.__currentFrame) {
					if(!this.__evaluateFrameScripts(this.__totalFrames)) {
						(openfl_display_Sprite().default).prototype.__enterFrame.call(this,deltaTime);
						return;
					}
					this.__currentFrame = 1;
				}
				if(!this.__evaluateFrameScripts(nextFrame)) {
					(openfl_display_Sprite().default).prototype.__enterFrame.call(this,deltaTime);
					return;
				}
			} else {
				this.__currentFrame = nextFrame;
			}
		}
	},
	__updateSymbol: function(targetFrame) {
		if(this.__symbol != null && this.__currentFrame != this.__lastFrameUpdate) {
			this.__updateFrameLabel();
			var currentInstancesByFrameObjectID = new (haxe_ds_IntMap().default)();
			var frame;
			var frameData;
			var instance;
			var _g = 0;
			var _g1 = targetFrame;
			while(_g < _g1) {
				var i = _g++;
				frame = i + 1;
				frameData = this.__symbol.frames[i];
				if(frameData.objects == null) {
					continue;
				}
				var _g2 = 0;
				var _g11 = frameData.objects;
				while(_g2 < _g11.length) {
					var frameObject = _g11[_g2];
					++_g2;
					switch(frameObject.type._hx_index) {
					case 0:
						instance = this.__activeInstancesByFrameObjectID.get(frameObject.id);
						if(instance != null) {
							currentInstancesByFrameObjectID.set(frameObject.id,instance);
							this.__updateDisplayObject(instance.displayObject,frameObject,true);
						}
						break;
					case 1:
						instance = currentInstancesByFrameObjectID.get(frameObject.id);
						if(instance != null && instance.displayObject != null) {
							this.__updateDisplayObject(instance.displayObject,frameObject);
						}
						break;
					case 2:
						currentInstancesByFrameObjectID.remove(frameObject.id);
						break;
					}
				}
			}
			var currentInstances = [];
			var currentMasks = [];
			var instance1 = currentInstancesByFrameObjectID.iterator();
			while(instance1.hasNext()) {
				var instance2 = instance1.next();
				if(currentInstances.indexOf(instance2) == -1) {
					currentInstances.push(instance2);
					if(instance2.clipDepth > 0) {
						currentMasks.push(instance2);
					}
				}
			}
			currentInstances.sort($bind(this,this.__sortDepths));
			var existingChild;
			var targetDepth;
			var targetChild;
			var child;
			var maskApplied;
			var _g21 = 0;
			var _g3 = currentInstances.length;
			while(_g21 < _g3) {
				var i1 = _g21++;
				existingChild = this.__children[i1];
				instance = currentInstances[i1];
				targetDepth = instance.depth;
				targetChild = instance.displayObject;
				if(existingChild != targetChild) {
					child = targetChild;
					this.addChildAt(targetChild,i1);
				} else {
					child = this.__children[i1];
				}
				maskApplied = false;
				var _g22 = 0;
				while(_g22 < currentMasks.length) {
					var mask = currentMasks[_g22];
					++_g22;
					if(targetDepth > mask.depth && targetDepth <= mask.clipDepth) {
						child.set_mask(mask.displayObject);
						maskApplied = true;
						break;
					}
				}
				if(currentMasks.length > 0 && !maskApplied && child.get_mask() != null) {
					child.set_mask(null);
				}
			}
			var child1;
			var i2 = currentInstances.length;
			var length = this.__children.length;
			while(i2 < length) {
				child1 = this.__children[i2];
				var _g4 = 0;
				var _g5 = this.__activeInstances;
				while(_g4 < _g5.length) {
					var instance3 = _g5[_g4];
					++_g4;
					if(instance3.displayObject == child1) {
						if(((child1) instanceof MovieClip)) {
							var movie = child1;
							movie.gotoAndPlay(1);
						}
						this.removeChild(child1);
						--i2;
						--length;
					}
				}
				++i2;
			}
			this.__lastFrameUpdate = this.__currentFrame;
		}
	},
	__evaluateFrameScripts: function(advanceToFrame) {
		var _g = this.__currentFrame;
		var _g1 = advanceToFrame + 1;
		while(_g < _g1) {
			var frame = _g++;
			if(frame == this.__lastFrameScriptEval) {
				continue;
			}
			this.__lastFrameScriptEval = frame;
			this.__currentFrame = frame;
			if(this.__frameScripts.exists(frame)) {
				this.__updateSymbol(frame);
				var script = this.__frameScripts.get(frame);
				script();
				if(this.__currentFrame != frame) {
					return false;
				}
			}
			if(!this.__playing) {
				return false;
			}
		}
		return true;
	},
	__fromSymbol: function(swf,symbol) {
		var _gthis = this;
		if(this.__activeInstances != null) {
			return;
		}
		this.__swf = swf;
		this.__symbol = symbol;
		this.__activeInstances = [];
		this.__activeInstancesByFrameObjectID = new (haxe_ds_IntMap().default)();
		this.__currentFrame = 1;
		this.__lastFrameScriptEval = -1;
		this.__lastFrameUpdate = -1;
		this.__totalFrames = this.__symbol.frames.length;
		var frame;
		var frameData;
		var _g = 0;
		var _g1 = this.__symbol.frames.length;
		while(_g < _g1) {
			var i = _g++;
			frame = i + 1;
			frameData = this.__symbol.frames[i];
			if(frameData.label != null) {
				this.__currentLabels.push(new (openfl_display_FrameLabel().default)(frameData.label,i + 1));
			}
			if(frameData.script != null) {
				if(this.__frameScripts == null) {
					this.__frameScripts = new (haxe_ds_IntMap().default)();
				}
				this.__frameScripts.set(frame,frameData.script);
			} else if(frameData.scriptSource != null) {
				if(this.__frameScripts == null) {
					this.__frameScripts = new (haxe_ds_IntMap().default)();
				}
				try {
					var script = [eval(("(function(){" + frameData.scriptSource + "})"))];
					var wrapper = (function(script1) {
						return function() {
							try {
								script1[0].call(_gthis);
							} catch( e ) {
								(haxe_CallStack().default).lastException = e;
								var e1 = ((e) instanceof (js__$Boot_HaxeError().default)) ? e.val : e;
								var wrapper1 = "Error evaluating frame script\n " + (Std().default).string(e1) + "\n";
								var _this = (haxe_CallStack().default).exceptionStack();
								var result = new Array(_this.length);
								var _g2 = 0;
								var _g11 = _this.length;
								while(_g2 < _g11) {
									var i1 = _g2++;
									result[i1] = _this[i1][2];
								}
								(lime_utils_Log().default).info(wrapper1 + result.join("\n") + "\n" + (Std().default).string(e1.stack) + "\n" + script1[0].toString(),{ fileName : "../src/openfl/display/MovieClip.hx", lineNumber : 654, className : "openfl.display.MovieClip", methodName : "__fromSymbol"});
							}
						};
					})(script);
					this.__frameScripts.set(frame,wrapper);
				} catch( e2 ) {
					(haxe_CallStack().default).lastException = e2;
					var e3 = ((e2) instanceof (js__$Boot_HaxeError().default)) ? e2.val : e2;
					if(this.__symbol.className != null) {
						(lime_utils_Log().default).warn("Unable to evaluate frame script source for symbol \"" + this.__symbol.className + "\" frame " + frame + "\n" + frameData.scriptSource,{ fileName : "../src/openfl/display/MovieClip.hx", lineNumber : 675, className : "openfl.display.MovieClip", methodName : "__fromSymbol"});
					} else {
						(lime_utils_Log().default).warn("Unable to evaluate frame script source:\n" + frameData.scriptSource,{ fileName : "../src/openfl/display/MovieClip.hx", lineNumber : 680, className : "openfl.display.MovieClip", methodName : "__fromSymbol"});
					}
				}
			}
		}
		var frame1;
		var frameData1;
		var instance;
		var duplicate;
		var symbol1;
		var displayObject;
		var _g21 = 0;
		var _g3 = this.__totalFrames;
		while(_g21 < _g3) {
			var i2 = _g21++;
			frame1 = i2 + 1;
			frameData1 = this.__symbol.frames[i2];
			if(frameData1.objects == null) {
				continue;
			}
			var _g22 = 0;
			var _g31 = frameData1.objects;
			while(_g22 < _g31.length) {
				var frameObject = _g31[_g22];
				++_g22;
				if(frameObject.type == (openfl__$internal_symbols_timeline_FrameObjectType().default).CREATE) {
					if(this.__activeInstancesByFrameObjectID.exists(frameObject.id)) {
						continue;
					} else {
						instance = null;
						duplicate = false;
						var _g23 = 0;
						var _g32 = this.__activeInstances;
						while(_g23 < _g32.length) {
							var activeInstance = _g32[_g23];
							++_g23;
							if(activeInstance.displayObject != null && activeInstance.characterID == frameObject.symbol && activeInstance.depth == frameObject.depth) {
								instance = activeInstance;
								duplicate = true;
								break;
							}
						}
					}
					if(instance == null) {
						symbol1 = this.__swf.symbols.get(frameObject.symbol);
						if(symbol1 != null) {
							displayObject = symbol1.__createObject(this.__swf);
							if(displayObject != null) {
								displayObject.parent = this;
								displayObject.stage = this.stage;
								if(this.stage != null) {
									displayObject.dispatchEvent(new (openfl_events_Event().default)("addedToStage",false,false));
								}
								instance = new (openfl_display__$MovieClip_FrameSymbolInstance().default)(frame1,frameObject.id,frameObject.symbol,frameObject.depth,displayObject,frameObject.clipDepth);
							}
						}
					}
					if(instance != null) {
						this.__activeInstancesByFrameObjectID.set(frameObject.id,instance);
						if(!duplicate) {
							this.__activeInstances.push(instance);
							this.__updateDisplayObject(instance.displayObject,frameObject);
						}
					}
				}
			}
		}
		if(this.__totalFrames > 1) {
			this.play();
		}
		this.__enterFrame(0);
	},
	__getNextFrame: function(deltaTime) {
		var nextFrame = 0;
		if(!MovieClip.__useParentFPS) {
			this.__timeElapsed += deltaTime;
			nextFrame = this.__currentFrame + Math.floor(this.__timeElapsed / this.__frameTime);
			if(nextFrame < 1) {
				nextFrame = 1;
			}
			if(nextFrame > this.__totalFrames) {
				nextFrame = Math.floor((nextFrame - 1) % this.__totalFrames) + 1;
			}
			this.__timeElapsed %= this.__frameTime;
		} else {
			nextFrame = this.__currentFrame + 1;
			if(nextFrame > this.__totalFrames) {
				nextFrame = 1;
			}
		}
		return nextFrame;
	},
	__goto: function(frame) {
		if(this.__symbol == null) {
			return;
		}
		if(frame < 1) {
			frame = 1;
		} else if(frame > this.__totalFrames) {
			frame = this.__totalFrames;
		}
		this.__currentFrame = frame;
		this.__enterFrame(0);
	},
	__resolveFrameReference: function(frame) {
		if(typeof(frame) == "number" && ((frame | 0) === frame)) {
			return frame;
		} else if(typeof(frame) == "string") {
			var label = frame;
			var _g = 0;
			var _g1 = this.__currentLabels;
			while(_g < _g1.length) {
				var frameLabel = _g1[_g];
				++_g;
				if(frameLabel.get_name() == label) {
					return frameLabel.get_frame();
				}
			}
			throw new (js__$Boot_HaxeError().default)(new (openfl_errors_ArgumentError().default)("Error #2109: Frame label " + label + " not found in scene."));
		} else {
			throw new (js__$Boot_HaxeError().default)("Invalid type for frame " + (Type().default).getClassName(frame));
		}
	},
	__sortDepths: function(a,b) {
		return a.depth - b.depth;
	},
	__stopAllMovieClips: function() {
		(openfl_display_Sprite().default).prototype.__stopAllMovieClips.call(this);
		this.stop();
	},
	__tabTest: function(stack) {
		if(!this.__enabled) {
			return;
		}
		(openfl_display_Sprite().default).prototype.__tabTest.call(this,stack);
	},
	__updateDisplayObject: function(displayObject,frameObject,reset) {
		if(reset == null) {
			reset = false;
		}
		if(displayObject == null) {
			return;
		}
		if(frameObject.name != null) {
			displayObject.set_name(frameObject.name);
		}
		if(frameObject.matrix != null) {
			displayObject.get_transform().set_matrix(frameObject.matrix);
		}
		if(frameObject.colorTransform != null) {
			displayObject.get_transform().set_colorTransform(frameObject.colorTransform);
		} else if(reset && !displayObject.get_transform().get_colorTransform().__isDefault(true)) {
			displayObject.get_transform().set_colorTransform(new (openfl_geom_ColorTransform().default)());
		}
		if(frameObject.filters != null) {
			var filters = [];
			var _g = 0;
			var _g1 = frameObject.filters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				switch(filter._hx_index) {
				case 0:
					var quality = filter.quality;
					var blurY = filter.blurY;
					var blurX = filter.blurX;
					filters.push(new (openfl_filters_BlurFilter().default)(blurX,blurY,quality));
					break;
				case 1:
					var matrix = filter.matrix;
					filters.push(new (openfl_filters_ColorMatrixFilter().default)(matrix));
					break;
				case 2:
					var hideObject = filter.hideObject;
					var knockout = filter.knockout;
					var inner = filter.inner;
					var quality1 = filter.quality;
					var strength = filter.strength;
					var blurY1 = filter.blurY;
					var blurX1 = filter.blurX;
					var alpha = filter.alpha;
					var color = filter.color;
					var angle = filter.angle;
					var distance = filter.distance;
					filters.push(new (openfl_filters_DropShadowFilter().default)(distance,angle,color,alpha,blurX1,blurY1,strength,quality1,inner,knockout,hideObject));
					break;
				case 3:
					var knockout1 = filter.knockout;
					var inner1 = filter.inner;
					var quality2 = filter.quality;
					var strength1 = filter.strength;
					var blurY2 = filter.blurY;
					var blurX2 = filter.blurX;
					var alpha1 = filter.alpha;
					var color1 = filter.color;
					filters.push(new (openfl_filters_GlowFilter().default)(color1,alpha1,blurX2,blurY2,strength1,quality2,inner1,knockout1));
					break;
				}
			}
			displayObject.set_filters(filters);
		} else {
			displayObject.set_filters(null);
		}
		if(frameObject.visible != null) {
			displayObject.set_visible(frameObject.visible);
		}
		if(frameObject.blendMode != null) {
			displayObject.set_blendMode(frameObject.blendMode);
		}
		if(frameObject.cacheAsBitmap != null) {
			displayObject.set_cacheAsBitmap(frameObject.cacheAsBitmap);
		}
		(Reflect().default).setField(this,displayObject.get_name(),displayObject);
	},
	__updateFrameLabel: function() {
		this.__currentFrameLabel = this.__symbol.frames[this.__currentFrame - 1].label;
		if(this.__currentFrameLabel != null) {
			this.__currentLabel = this.__currentFrameLabel;
		} else {
			this.__currentLabel = null;
			var _g = 0;
			var _g1 = this.__currentLabels;
			while(_g < _g1.length) {
				var label = _g1[_g];
				++_g;
				if(label.get_frame() < this.__currentFrame) {
					this.__currentLabel = label.get_name();
				} else {
					break;
				}
			}
		}
	},
	__updateInstanceFields: function() {
		var _g = 0;
		var _g1 = this.__instanceFields;
		while(_g < _g1.length) {
			var field = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g11 = this.__children;
			while(_g2 < _g11.length) {
				var child = _g11[_g2];
				++_g2;
				if(child.get_name() == field) {
					(Reflect().default).setField(this,field,child);
					break;
				}
			}
		}
	},
	__onMouseDown: function(event) {
		if(this.__enabled && this.__hasDown) {
			this.gotoAndStop("_down");
		}
		this.__mouseIsDown = true;
		this.stage.addEventListener("mouseUp",$bind(this,this.__onMouseUp),true);
	},
	__onMouseUp: function(event) {
		this.__mouseIsDown = false;
		if(this.stage != null) {
			this.stage.removeEventListener("mouseUp",$bind(this,this.__onMouseUp));
		}
		if(!this.__buttonMode) {
			return;
		}
		if(event.target == this && this.__enabled && this.__hasOver) {
			this.gotoAndStop("_over");
		} else if(this.__enabled && this.__hasUp) {
			this.gotoAndStop("_up");
		}
	},
	__onRollOut: function(event) {
		if(!this.__enabled) {
			return;
		}
		if(this.__mouseIsDown && this.__hasOver) {
			this.gotoAndStop("_over");
		} else if(this.__hasUp) {
			this.gotoAndStop("_up");
		}
	},
	__onRollOver: function(event) {
		if(this.__enabled && this.__hasOver) {
			this.gotoAndStop("_over");
		}
	},
	set_buttonMode: function(value) {
		if(this.__buttonMode != value) {
			if(value) {
				this.__hasDown = false;
				this.__hasOver = false;
				this.__hasUp = false;
				var _g = 0;
				var _g1 = this.__currentLabels;
				while(_g < _g1.length) {
					var frameLabel = _g1[_g];
					++_g;
					switch(frameLabel.get_name()) {
					case "_down":
						this.__hasDown = true;
						break;
					case "_over":
						this.__hasOver = true;
						break;
					case "_up":
						this.__hasUp = true;
						break;
					default:
					}
				}
				if(this.__hasDown || this.__hasOver || this.__hasUp) {
					this.addEventListener("rollOver",$bind(this,this.__onRollOver));
					this.addEventListener("rollOut",$bind(this,this.__onRollOut));
					this.addEventListener("mouseDown",$bind(this,this.__onMouseDown));
				}
			} else {
				this.removeEventListener("rollOver",$bind(this,this.__onRollOver));
				this.removeEventListener("rollOut",$bind(this,this.__onRollOut));
				this.removeEventListener("mouseDown",$bind(this,this.__onMouseDown));
			}
			this.__buttonMode = value;
		}
		return value;
	},
	get_currentFrame: function() {
		return this.__currentFrame;
	},
	get_currentFrameLabel: function() {
		return this.__currentFrameLabel;
	},
	get_currentLabel: function() {
		return this.__currentLabel;
	},
	get_currentLabels: function() {
		return this.__currentLabels;
	},
	get_enabled: function() {
		return this.__enabled;
	},
	set_enabled: function(value) {
		return this.__enabled = value;
	},
	get_framesLoaded: function() {
		return this.__totalFrames;
	},
	get_isPlaying: function() {
		return this.__playing;
	},
	get_totalFrames: function() {
		return this.__totalFrames;
	}
});
MovieClip.prototype.__class__ = MovieClip.prototype.constructor = $hxClasses["openfl.display.MovieClip"] = MovieClip;

// Init

{
	MovieClip.__useParentFPS = true;
	/// #if (typeof ENV === 'undefined' || (!ENV['swflite-parent-fps'] && !ENV['swf-parent-fps'])) && (typeof swf_parent_fps === 'undefined' || !swf_parent_fps) && (typeof swflite_parent_fps === 'undefined' || !swflite-parent-fps) && (typeof defines === 'undefined' || (!defines['swf-parent-fps'] && !defines['swflite-parent-fps']))
	MovieClip.__useParentFPS = false;
	/// #endif 
	Object.defineProperties(MovieClip.prototype,{ currentFrame : { get : function () { return this.get_currentFrame (); }}, currentFrameLabel : { get : function () { return this.get_currentFrameLabel (); }}, currentLabel : { get : function () { return this.get_currentLabel (); }}, currentLabels : { get : function () { return this.get_currentLabels (); }}, enabled : { get : function () { return this.get_enabled (); }, set : function (v) { return this.set_enabled (v); }}, framesLoaded : { get : function () { return this.get_framesLoaded (); }}, isPlaying : { get : function () { return this.get_isPlaying (); }}, totalFrames : { get : function () { return this.get_totalFrames (); }}});
};

// Statics




// Export

exports.default = MovieClip;