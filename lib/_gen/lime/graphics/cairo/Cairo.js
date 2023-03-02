// Class: lime.graphics.cairo.Cairo

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;

// Constructor

var Cairo = function(surface) {
	var tmp = surface != null;
}

// Meta

Cairo.__name__ = "lime.graphics.cairo.Cairo";
Cairo.__isInterface__ = false;
Cairo.prototype = {
	arc: function(xc,yc,radius,angle1,angle2) {
	},
	arcNegative: function(xc,yc,radius,angle1,angle2) {
	},
	clip: function() {
	},
	clipExtents: function(x1,y1,x2,y2) {
	},
	clipPreserve: function() {
	},
	closePath: function() {
	},
	copyPage: function() {
	},
	curveTo: function(x1,y1,x2,y2,x3,y3) {
	},
	fill: function() {
	},
	fillExtents: function(x1,y1,x2,y2) {
	},
	fillPreserve: function() {
	},
	getOperator: function() {
		return 0;
	},
	identityMatrix: function() {
	},
	inClip: function(x,y) {
		return false;
	},
	inFill: function(x,y) {
		return false;
	},
	inStroke: function(x,y) {
		return false;
	},
	lineTo: function(x,y) {
	},
	mask: function(pattern) {
	},
	maskSurface: function(surface,x,y) {
	},
	moveTo: function(x,y) {
	},
	newPath: function() {
	},
	paint: function() {
	},
	paintWithAlpha: function(alpha) {
	},
	popGroup: function() {
		return null;
	},
	popGroupToSource: function() {
	},
	pushGroup: function() {
	},
	pushGroupWithContent: function(content) {
	},
	recreate: function(surface) {
	},
	rectangle: function(x,y,width,height) {
	},
	relCurveTo: function(dx1,dy1,dx2,dy2,dx3,dy3) {
	},
	relLineTo: function(dx,dy) {
	},
	relMoveTo: function(dx,dy) {
	},
	resetClip: function() {
	},
	restore: function() {
	},
	rotate: function(amount) {
	},
	save: function() {
	},
	scale: function(x,y) {
	},
	setFontSize: function(size) {
	},
	setOperator: function(value) {
		return value;
	},
	setSourceRGB: function(r,g,b) {
	},
	setSourceRGBA: function(r,g,b,a) {
	},
	setSourceSurface: function(surface,x,y) {
	},
	showGlyphs: function(glyphs) {
	},
	showPage: function() {
	},
	showText: function(utf8) {
	},
	status: function() {
		return 0;
	},
	stroke: function() {
	},
	strokeExtents: function(x1,y1,x2,y2) {
	},
	strokePreserve: function() {
	},
	textPath: function(utf8) {
	},
	transform: function(matrix) {
	},
	translate: function(x,y) {
	},
	get_antialias: function() {
		return 0;
	},
	set_antialias: function(value) {
		return value;
	},
	get_currentPoint: function() {
		return null;
	},
	get_dash: function() {
		return [];
	},
	set_dash: function(value) {
		return value;
	},
	get_dashCount: function() {
		return 0;
	},
	get_fillRule: function() {
		return 0;
	},
	set_fillRule: function(value) {
		return value;
	},
	get_fontFace: function() {
		return 0;
	},
	set_fontFace: function(value) {
		return value;
	},
	get_fontOptions: function() {
		return null;
	},
	set_fontOptions: function(value) {
		return value;
	},
	get_groupTarget: function() {
		return 0;
	},
	get_hasCurrentPoint: function() {
		return false;
	},
	get_lineCap: function() {
		return 0;
	},
	set_lineCap: function(value) {
		return value;
	},
	get_lineJoin: function() {
		return 0;
	},
	set_lineJoin: function(value) {
		return value;
	},
	get_lineWidth: function() {
		return 0;
	},
	set_lineWidth: function(value) {
		return value;
	},
	get_matrix: function() {
		return null;
	},
	set_matrix: function(value) {
		return value;
	},
	get_miterLimit: function() {
		return 0;
	},
	set_miterLimit: function(value) {
		return value;
	},
	get_source: function() {
		return 0;
	},
	set_source: function(value) {
		return value;
	},
	get_target: function() {
		return 0;
	},
	get_tolerance: function() {
		return 0;
	},
	set_tolerance: function(value) {
		return value;
	}
};
Cairo.prototype.__class__ = Cairo.prototype.constructor = $hxClasses["lime.graphics.cairo.Cairo"] = Cairo;

// Init



// Statics

Cairo.get_version = function() {
	return 0;
}
Cairo.get_versionString = function() {
	return "";
}


// Export

exports.default = Cairo;