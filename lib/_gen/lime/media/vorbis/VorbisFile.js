// Class: lime.media.vorbis.VorbisFile

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function haxe__$Int64__$_$_$Int64() {return require("./../../../haxe/_Int64/___Int64");}

// Constructor

var VorbisFile = function(handle) {
	this.handle = handle;
}

// Meta

VorbisFile.__name__ = "lime.media.vorbis.VorbisFile";
VorbisFile.__isInterface__ = false;
VorbisFile.prototype = {
	bitrate: function(bitstream) {
		if(bitstream == null) {
			bitstream = -1;
		}
		return 0;
	},
	bitrateInstant: function() {
		return 0;
	},
	clear: function() {
	},
	comment: function(bitstream) {
		if(bitstream == null) {
			bitstream = -1;
		}
		return null;
	},
	crosslap: function(other) {
		return 0;
	},
	info: function(bitstream) {
		if(bitstream == null) {
			bitstream = -1;
		}
		return null;
	},
	pcmSeek: function(pos) {
		return 0;
	},
	pcmSeekLap: function(pos) {
		return 0;
	},
	pcmSeekPage: function(pos) {
		return 0;
	},
	pcmSeekPageLap: function(pos) {
		return 0;
	},
	pcmTell: function() {
		var this1 = new (haxe__$Int64__$_$_$Int64().default)(0,0);
		return this1;
	},
	pcmTotal: function(bitstream) {
		if(bitstream == null) {
			bitstream = -1;
		}
		var this1 = new (haxe__$Int64__$_$_$Int64().default)(0,0);
		return this1;
	},
	rawSeek: function(pos) {
		return 0;
	},
	rawSeekLap: function(pos) {
		return 0;
	},
	rawTell: function() {
		var this1 = new (haxe__$Int64__$_$_$Int64().default)(0,0);
		return this1;
	},
	rawTotal: function(bitstream) {
		if(bitstream == null) {
			bitstream = -1;
		}
		var this1 = new (haxe__$Int64__$_$_$Int64().default)(0,0);
		return this1;
	},
	read: function(buffer,position,length,bigEndianPacking,wordSize,signed) {
		if(signed == null) {
			signed = true;
		}
		if(wordSize == null) {
			wordSize = 2;
		}
		if(bigEndianPacking == null) {
			bigEndianPacking = false;
		}
		if(length == null) {
			length = 4096;
		}
		return 0;
	},
	readFloat: function(pcmChannels,samples) {
		return 0;
	},
	seekable: function() {
		return false;
	},
	serialNumber: function(bitstream) {
		if(bitstream == null) {
			bitstream = -1;
		}
		return 0;
	},
	streams: function() {
		return 0;
	},
	timeSeek: function(s) {
		return 0;
	},
	timeSeekLap: function(s) {
		return 0;
	},
	timeSeekPage: function(s) {
		return 0;
	},
	timeSeekPageLap: function(s) {
		return 0;
	},
	timeTell: function() {
		return 0;
	},
	timeTotal: function(bitstream) {
		if(bitstream == null) {
			bitstream = -1;
		}
		return 0;
	}
};
VorbisFile.prototype.__class__ = VorbisFile.prototype.constructor = $hxClasses["lime.media.vorbis.VorbisFile"] = VorbisFile;

// Init



// Statics

VorbisFile.fromBytes = function(bytes) {
	return null;
}
VorbisFile.fromFile = function(path) {
	return null;
}


// Export

exports.default = VorbisFile;