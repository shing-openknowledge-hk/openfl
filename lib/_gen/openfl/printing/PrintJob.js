// Class: openfl.printing.PrintJob

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function openfl_display_BitmapData() {return require("./../../openfl/display/BitmapData");}
function lime__$internal_graphics_ImageCanvasUtil() {return require("./../../lime/_internal/graphics/ImageCanvasUtil");}
function haxe_Timer() {return require("./../../haxe/Timer");}

// Constructor

var PrintJob = function() {
}

// Meta

PrintJob.__name__ = "openfl.printing.PrintJob";
PrintJob.__isInterface__ = false;
PrintJob.prototype = {
	addPage: function(sprite,printArea,options,frameNum) {
		if(frameNum == null) {
			frameNum = 0;
		}
		if(!this.__started) {
			return;
		}
		if(printArea == null) {
			printArea = sprite.getBounds(sprite);
		}
		var bitmapData = new (openfl_display_BitmapData().default)(Math.ceil(printArea.width),Math.ceil(printArea.height),true,0);
		bitmapData.draw(sprite);
		this.__bitmapData.push(bitmapData);
	},
	send: function() {
		if(!this.__started) {
			return;
		}
		var $window = window.open("","","width=500,height=500");
		if($window != null) {
			var style = $window.document.createElement("style");
			style.innerText = "@media all {\n\t\t\t\t\t.page-break\t{ display: none; }\n\t\t\t\t}\n\n\t\t\t\t@media print {\n\t\t\t\t\t.page-break\t{ display: block; page-break-before: always; }\n\t\t\t\t}";
			$window.document.head.appendChild(style);
			var div;
			var image;
			var bitmapData;
			var _g = 0;
			var _g1 = this.__bitmapData.length;
			while(_g < _g1) {
				var i = _g++;
				bitmapData = this.__bitmapData[i];
				(lime__$internal_graphics_ImageCanvasUtil().default).sync(bitmapData.image,false);
				if(bitmapData.image.buffer.__srcCanvas != null) {
					if(i > 0) {
						div = $window.document.createElement("div");
						div.className = "page-break";
						$window.document.body.appendChild(div);
					}
					image = new Image();
					image.src = bitmapData.image.buffer.__srcCanvas.toDataURL("image/png");
					$window.document.body.appendChild(image);
				}
			}
			(haxe_Timer().default).delay(function() {
				$window.focus();
				$window.print();
			},500);
		}
	},
	start: function() {
		if(PrintJob.isSupported) {
			this.__started = true;
			this.__bitmapData = [];
			return true;
		}
		return false;
	}
};
PrintJob.prototype.__class__ = PrintJob.prototype.constructor = $hxClasses["openfl.printing.PrintJob"] = PrintJob;

// Init



// Statics


PrintJob.isSupported = true

// Export

exports.default = PrintJob;