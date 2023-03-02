// Class: lime.media.OpenALAudioContext

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function lime_media_openal_AL() {return require("./../../lime/media/openal/AL");}
function lime_media_openal_ALC() {return require("./../../lime/media/openal/ALC");}

// Constructor

var OpenALAudioContext = function() {
	this.ALL_DEVICES_SPECIFIER = 4115;
	this.DEFAULT_ALL_DEVICES_SPECIFIER = 4114;
	this.ENUMERATE_ALL_EXT = 1;
	this.DEVICE_SPECIFIER = 4101;
	this.DEFAULT_DEVICE_SPECIFIER = 4100;
	this.ALL_ATTRIBUTES = 4099;
	this.ATTRIBUTES_SIZE = 4098;
	this.INVALID_CONTEXT = 40962;
	this.INVALID_DEVICE = 40961;
	this.STEREO_SOURCES = 4113;
	this.MONO_SOURCES = 4112;
	this.SYNC = 4105;
	this.REFRESH = 4104;
	this.EXPONENT_DISTANCE_CLAMPED = 53254;
	this.EXPONENT_DISTANCE = 53253;
	this.LINEAR_DISTANCE_CLAMPED = 53252;
	this.LINEAR_DISTANCE = 53251;
	this.INVERSE_DISTANCE_CLAMPED = 53250;
	this.INVERSE_DISTANCE = 53249;
	this.DISTANCE_MODEL = 53248;
	this.DOPPLER_VELOCITY = 49153;
	this.SPEED_OF_SOUND = 49155;
	this.DOPPLER_FACTOR = 49152;
	this.EXTENSIONS = 45060;
	this.RENDERER = 45059;
	this.VERSION = 45058;
	this.VENDOR = 45057;
	this.OUT_OF_MEMORY = 40965;
	this.INVALID_OPERATION = 40964;
	this.INVALID_VALUE = 40963;
	this.INVALID_ENUM = 40962;
	this.INVALID_NAME = 40961;
	this.NO_ERROR = 0;
	this.SIZE = 8196;
	this.CHANNELS = 8195;
	this.BITS = 8194;
	this.FREQUENCY = 8193;
	this.FORMAT_STEREO16 = 4355;
	this.FORMAT_STEREO8 = 4354;
	this.FORMAT_MONO16 = 4353;
	this.FORMAT_MONO8 = 4352;
	this.UNDETERMINED = 4144;
	this.STREAMING = 4137;
	this.STATIC = 4136;
	this.SOURCE_TYPE = 4135;
	this.BYTE_OFFSET = 4134;
	this.SAMPLE_OFFSET = 4133;
	this.SEC_OFFSET = 4132;
	this.MAX_DISTANCE = 4131;
	this.CONE_OUTER_GAIN = 4130;
	this.ROLLOFF_FACTOR = 4129;
	this.REFERENCE_DISTANCE = 4128;
	this.BUFFERS_PROCESSED = 4118;
	this.BUFFERS_QUEUED = 4117;
	this.STOPPED = 4116;
	this.PAUSED = 4115;
	this.PLAYING = 4114;
	this.INITIAL = 4113;
	this.SOURCE_STATE = 4112;
	this.ORIENTATION = 4111;
	this.MAX_GAIN = 4110;
	this.MIN_GAIN = 4109;
	this.GAIN = 4106;
	this.BUFFER = 4105;
	this.LOOPING = 4103;
	this.VELOCITY = 4102;
	this.DIRECTION = 4101;
	this.POSITION = 4100;
	this.PITCH = 4099;
	this.CONE_OUTER_ANGLE = 4098;
	this.CONE_INNER_ANGLE = 4097;
	this.SOURCE_RELATIVE = 514;
	this.TRUE = 1;
	this.FALSE = 0;
	this.NONE = 0;
}

// Meta

OpenALAudioContext.__name__ = "lime.media.OpenALAudioContext";
OpenALAudioContext.__isInterface__ = false;
OpenALAudioContext.prototype = {
	bufferData: function(buffer,format,data,size,freq) {
		(lime_media_openal_AL().default).bufferData(buffer,format,data,size,freq);
	},
	buffer3f: function(buffer,param,value1,value2,value3) {
		(lime_media_openal_AL().default).buffer3f(buffer,param,value1,value2,value3);
	},
	buffer3i: function(buffer,param,value1,value2,value3) {
		(lime_media_openal_AL().default).buffer3i(buffer,param,value1,value2,value3);
	},
	bufferf: function(buffer,param,value) {
		(lime_media_openal_AL().default).bufferf(buffer,param,value);
	},
	bufferfv: function(buffer,param,values) {
		(lime_media_openal_AL().default).bufferfv(buffer,param,values);
	},
	bufferi: function(buffer,param,value) {
		(lime_media_openal_AL().default).bufferi(buffer,param,value);
	},
	bufferiv: function(buffer,param,values) {
		(lime_media_openal_AL().default).bufferiv(buffer,param,values);
	},
	closeDevice: function(device) {
		return (lime_media_openal_ALC().default).closeDevice(device);
	},
	createContext: function(device,attrlist) {
		return (lime_media_openal_ALC().default).createContext(device,attrlist);
	},
	createBuffer: function() {
		return (lime_media_openal_AL().default).createBuffer();
	},
	createSource: function() {
		return (lime_media_openal_AL().default).createSource();
	},
	deleteBuffer: function(buffer) {
		(lime_media_openal_AL().default).deleteBuffer(buffer);
	},
	deleteBuffers: function(buffers) {
		(lime_media_openal_AL().default).deleteBuffers(buffers);
	},
	deleteSource: function(source) {
		(lime_media_openal_AL().default).deleteSource(source);
	},
	deleteSources: function(sources) {
		(lime_media_openal_AL().default).deleteSources(sources);
	},
	destroyContext: function(context) {
		if(context == null) {
			return;
		}
		(lime_media_openal_ALC().default).destroyContext(context);
	},
	disable: function(capability) {
		(lime_media_openal_AL().default).disable(capability);
	},
	distanceModel: function(distanceModel) {
		(lime_media_openal_AL().default).distanceModel(distanceModel);
	},
	dopplerFactor: function(value) {
		(lime_media_openal_AL().default).dopplerFactor(value);
	},
	dopplerVelocity: function(value) {
		(lime_media_openal_AL().default).dopplerVelocity(value);
	},
	enable: function(capability) {
		(lime_media_openal_AL().default).enable(capability);
	},
	genSource: function() {
		return this.createSource();
	},
	genSources: function(n) {
		return (lime_media_openal_AL().default).genSources(n);
	},
	genBuffer: function() {
		return this.createBuffer();
	},
	genBuffers: function(n) {
		return (lime_media_openal_AL().default).genBuffers(n);
	},
	getBoolean: function(param) {
		return (lime_media_openal_AL().default).getBoolean(param);
	},
	getBooleanv: function(param,count) {
		if(count == null) {
			count = 1;
		}
		return (lime_media_openal_AL().default).getBooleanv(param,count);
	},
	getBuffer3f: function(buffer,param) {
		return (lime_media_openal_AL().default).getBuffer3f(buffer,param);
	},
	getBuffer3i: function(buffer,param) {
		return (lime_media_openal_AL().default).getBuffer3i(buffer,param);
	},
	getBufferf: function(buffer,param) {
		return (lime_media_openal_AL().default).getBufferf(buffer,param);
	},
	getBufferfv: function(buffer,param,count) {
		if(count == null) {
			count = 1;
		}
		return (lime_media_openal_AL().default).getBufferfv(buffer,param,count);
	},
	getBufferi: function(buffer,param) {
		return (lime_media_openal_AL().default).getBufferi(buffer,param);
	},
	getBufferiv: function(buffer,param,count) {
		if(count == null) {
			count = 1;
		}
		return (lime_media_openal_AL().default).getBufferiv(buffer,param,count);
	},
	getContextsDevice: function(context) {
		if(context == null) {
			return null;
		}
		return (lime_media_openal_ALC().default).getContextsDevice(context);
	},
	getCurrentContext: function() {
		return (lime_media_openal_ALC().default).getCurrentContext();
	},
	getDouble: function(param) {
		return (lime_media_openal_AL().default).getDouble(param);
	},
	getDoublev: function(param,count) {
		if(count == null) {
			count = 1;
		}
		return (lime_media_openal_AL().default).getDoublev(param,count);
	},
	getEnumValue: function(ename) {
		return (lime_media_openal_AL().default).getEnumValue(ename);
	},
	getError: function(device) {
		if(device == null) {
			return (lime_media_openal_AL().default).getError();
		} else {
			return (lime_media_openal_ALC().default).getError(device);
		}
	},
	getErrorString: function(device) {
		if(device == null) {
			return (lime_media_openal_AL().default).getErrorString();
		} else {
			return (lime_media_openal_ALC().default).getErrorString(device);
		}
	},
	getFloat: function(param) {
		return (lime_media_openal_AL().default).getFloat(param);
	},
	getFloatv: function(param,count) {
		if(count == null) {
			count = 1;
		}
		return (lime_media_openal_AL().default).getFloatv(param,count);
	},
	getInteger: function(param) {
		return (lime_media_openal_AL().default).getInteger(param);
	},
	getIntegerv: function(param,count,device) {
		if(count == null) {
			count = 1;
		}
		if(device == null) {
			return (lime_media_openal_AL().default).getIntegerv(param,count);
		} else {
			return (lime_media_openal_ALC().default).getIntegerv(device,param,count);
		}
	},
	getListener3f: function(param) {
		return (lime_media_openal_AL().default).getListener3f(param);
	},
	getListener3i: function(param) {
		return (lime_media_openal_AL().default).getListener3i(param);
	},
	getListenerf: function(param) {
		return (lime_media_openal_AL().default).getListenerf(param);
	},
	getListenerfv: function(param,count) {
		if(count == null) {
			count = 1;
		}
		return (lime_media_openal_AL().default).getListenerfv(param,count);
	},
	getListeneri: function(param) {
		return (lime_media_openal_AL().default).getListeneri(param);
	},
	getListeneriv: function(param,count) {
		if(count == null) {
			count = 1;
		}
		return (lime_media_openal_AL().default).getListeneriv(param,count);
	},
	getProcAddress: function(fname) {
		return (lime_media_openal_AL().default).getProcAddress(fname);
	},
	getSource3f: function(source,param) {
		return (lime_media_openal_AL().default).getSource3f(source,param);
	},
	getSourcef: function(source,param) {
		return (lime_media_openal_AL().default).getSourcef(source,param);
	},
	getSource3i: function(source,param) {
		return (lime_media_openal_AL().default).getSource3i(source,param);
	},
	getSourcefv: function(source,param,count) {
		if(count == null) {
			count = 1;
		}
		return (lime_media_openal_AL().default).getSourcefv(source,param);
	},
	getSourcei: function(source,param) {
		return (lime_media_openal_AL().default).getSourcei(source,param);
	},
	getSourceiv: function(source,param,count) {
		if(count == null) {
			count = 1;
		}
		return (lime_media_openal_AL().default).getSourceiv(source,param,count);
	},
	getString: function(param,device) {
		if(device == null) {
			return (lime_media_openal_AL().default).getString(param);
		} else {
			return (lime_media_openal_ALC().default).getString(device,param);
		}
	},
	isBuffer: function(buffer) {
		return (lime_media_openal_AL().default).isBuffer(buffer);
	},
	isEnabled: function(capability) {
		return (lime_media_openal_AL().default).isEnabled(capability);
	},
	isExtensionPresent: function(extname) {
		return (lime_media_openal_AL().default).isExtensionPresent(extname);
	},
	isSource: function(source) {
		return (lime_media_openal_AL().default).isSource(source);
	},
	listener3f: function(param,value1,value2,value3) {
		(lime_media_openal_AL().default).listener3f(param,value1,value2,value3);
	},
	listener3i: function(param,value1,value2,value3) {
		(lime_media_openal_AL().default).listener3i(param,value1,value2,value3);
	},
	listenerf: function(param,value) {
		(lime_media_openal_AL().default).listenerf(param,value);
	},
	listenerfv: function(param,values) {
		(lime_media_openal_AL().default).listenerfv(param,values);
	},
	listeneri: function(param,value) {
		(lime_media_openal_AL().default).listeneri(param,value);
	},
	listeneriv: function(param,values) {
		(lime_media_openal_AL().default).listeneriv(param,values);
	},
	makeContextCurrent: function(context) {
		return (lime_media_openal_ALC().default).makeContextCurrent(context);
	},
	openDevice: function(deviceName) {
		return (lime_media_openal_ALC().default).openDevice(deviceName);
	},
	pauseDevice: function(device) {
		(lime_media_openal_ALC().default).pauseDevice(device);
	},
	processContext: function(context) {
		(lime_media_openal_ALC().default).processContext(context);
	},
	resumeDevice: function(device) {
		(lime_media_openal_ALC().default).resumeDevice(device);
	},
	source3f: function(source,param,value1,value2,value3) {
		(lime_media_openal_AL().default).source3f(source,param,value1,value2,value3);
	},
	source3i: function(source,param,value1,value2,value3) {
		(lime_media_openal_AL().default).source3i(source,param,value1,value2,value3);
	},
	sourcef: function(source,param,value) {
		(lime_media_openal_AL().default).sourcef(source,param,value);
	},
	sourcefv: function(source,param,values) {
		(lime_media_openal_AL().default).sourcefv(source,param,values);
	},
	sourcei: function(source,param,value) {
		(lime_media_openal_AL().default).sourcei(source,param,value);
	},
	sourceiv: function(source,param,values) {
		(lime_media_openal_AL().default).sourceiv(source,param,values);
	},
	sourcePlay: function(source) {
		(lime_media_openal_AL().default).sourcePlay(source);
	},
	sourcePlayv: function(sources) {
		(lime_media_openal_AL().default).sourcePlayv(sources);
	},
	sourceStop: function(source) {
		(lime_media_openal_AL().default).sourceStop(source);
	},
	sourceStopv: function(sources) {
		(lime_media_openal_AL().default).sourceStopv(sources);
	},
	sourceRewind: function(source) {
		(lime_media_openal_AL().default).sourceRewind(source);
	},
	sourceRewindv: function(sources) {
		(lime_media_openal_AL().default).sourceRewindv(sources);
	},
	sourcePause: function(source) {
		(lime_media_openal_AL().default).sourcePause(source);
	},
	sourcePausev: function(sources) {
		(lime_media_openal_AL().default).sourcePausev(sources);
	},
	sourceQueueBuffer: function(source,buffer) {
		(lime_media_openal_AL().default).sourceQueueBuffer(source,buffer);
	},
	sourceQueueBuffers: function(source,nb,buffers) {
		(lime_media_openal_AL().default).sourceQueueBuffers(source,nb,buffers);
	},
	sourceUnqueueBuffer: function(source) {
		return (lime_media_openal_AL().default).sourceUnqueueBuffer(source);
	},
	sourceUnqueueBuffers: function(source,nb) {
		return (lime_media_openal_AL().default).sourceUnqueueBuffers(source,nb);
	},
	speedOfSound: function(value) {
		(lime_media_openal_AL().default).speedOfSound(value);
	},
	suspendContext: function(context) {
		(lime_media_openal_ALC().default).suspendContext(context);
	}
};
OpenALAudioContext.prototype.__class__ = OpenALAudioContext.prototype.constructor = $hxClasses["lime.media.OpenALAudioContext"] = OpenALAudioContext;

// Init



// Statics




// Export

exports.default = OpenALAudioContext;