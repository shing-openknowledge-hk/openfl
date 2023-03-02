// Class: lime.media.openal.AL

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;

// Constructor

var AL = function(){}

// Meta

AL.__name__ = "lime.media.openal.AL";
AL.__isInterface__ = false;
AL.prototype = {
	
};
AL.prototype.__class__ = AL.prototype.constructor = $hxClasses["lime.media.openal.AL"] = AL;

// Init



// Statics

AL.removeDirectFilter = function(source) {
}
AL.removeSend = function(source,index) {
}
AL.auxf = function(aux,param,value) {
}
AL.auxfv = function(aux,param,values) {
}
AL.auxi = function(aux,param,value) {
}
AL.auxiv = function(aux,param,values) {
}
AL.bufferData = function(buffer,format,data,size,freq) {
}
AL.buffer3f = function(buffer,param,value1,value2,value3) {
}
AL.buffer3i = function(buffer,param,value1,value2,value3) {
}
AL.bufferf = function(buffer,param,value) {
}
AL.bufferfv = function(buffer,param,values) {
}
AL.bufferi = function(buffer,param,value) {
}
AL.bufferiv = function(buffer,param,values) {
}
AL.createAux = function() {
	return null;
}
AL.createBuffer = function() {
	return null;
}
AL.createEffect = function() {
	return null;
}
AL.createFilter = function() {
	return null;
}
AL.createSource = function() {
	return null;
}
AL.deleteBuffer = function(buffer) {
}
AL.deleteBuffers = function(buffers) {
}
AL.deleteSource = function(source) {
}
AL.deleteSources = function(sources) {
}
AL.disable = function(capability) {
}
AL.distanceModel = function(distanceModel) {
}
AL.dopplerFactor = function(value) {
}
AL.dopplerVelocity = function(value) {
}
AL.effectf = function(effect,param,value) {
}
AL.effectfv = function(effect,param,values) {
}
AL.effecti = function(effect,param,value) {
}
AL.effectiv = function(effect,param,values) {
}
AL.enable = function(capability) {
}
AL.genSource = function() {
	return null;
}
AL.genSources = function(n) {
	return null;
}
AL.genBuffer = function() {
	return null;
}
AL.genBuffers = function(n) {
	return null;
}
AL.getBoolean = function(param) {
	return false;
}
AL.getBooleanv = function(param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
}
AL.getBuffer3f = function(buffer,param) {
	return null;
}
AL.getBuffer3i = function(buffer,param) {
	return null;
}
AL.getBufferf = function(buffer,param) {
	return 0;
}
AL.getBufferfv = function(buffer,param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
}
AL.getBufferi = function(buffer,param) {
	return 0;
}
AL.getBufferiv = function(buffer,param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
}
AL.getDouble = function(param) {
	return 0;
}
AL.getDoublev = function(param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
}
AL.getEnumValue = function(ename) {
	return 0;
}
AL.getError = function() {
	return 0;
}
AL.getErrorString = function() {
	switch(AL.getError()) {
	case 40961:
		return "INVALID_NAME: Invalid parameter name";
	case 40962:
		return "INVALID_ENUM: Invalid enum value";
	case 40963:
		return "INVALID_VALUE: Invalid parameter value";
	case 40964:
		return "INVALID_OPERATION: Illegal operation or call";
	case 40965:
		return "OUT_OF_MEMORY: OpenAL has run out of memory";
	default:
		return "";
	}
}
AL.getFilteri = function(filter,param) {
	return 0;
}
AL.getFloat = function(param) {
	return 0;
}
AL.getFloatv = function(param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
}
AL.getInteger = function(param) {
	return 0;
}
AL.getIntegerv = function(param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
}
AL.getListener3f = function(param) {
	return null;
}
AL.getListener3i = function(param) {
	return null;
}
AL.getListenerf = function(param) {
	return 0;
}
AL.getListenerfv = function(param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
}
AL.getListeneri = function(param) {
	return 0;
}
AL.getListeneriv = function(param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
}
AL.getParameter = function(param) {
	return null;
}
AL.getProcAddress = function(fname) {
	return null;
}
AL.getSource3f = function(source,param) {
	return null;
}
AL.getSourcef = function(source,param) {
	return 0;
}
AL.getSource3i = function(source,param) {
	return null;
}
AL.getSourcefv = function(source,param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
}
AL.getSourcei = function(source,param) {
	return 0;
}
AL.getSourceiv = function(source,param,count) {
	if(count == null) {
		count = 1;
	}
	return null;
}
AL.getString = function(param) {
	return null;
}
AL.isBuffer = function(buffer) {
	return false;
}
AL.isEnabled = function(capability) {
	return false;
}
AL.isExtensionPresent = function(extname) {
	return false;
}
AL.isAux = function(aux) {
	return false;
}
AL.isEffect = function(effect) {
	return false;
}
AL.isFilter = function(filter) {
	return false;
}
AL.isSource = function(source) {
	return false;
}
AL.listener3f = function(param,value1,value2,value3) {
}
AL.listener3i = function(param,value1,value2,value3) {
}
AL.listenerf = function(param,value) {
}
AL.listenerfv = function(param,values) {
}
AL.listeneri = function(param,value) {
}
AL.listeneriv = function(param,values) {
}
AL.source3f = function(source,param,value1,value2,value3) {
}
AL.source3i = function(source,param,value1,value2,value3) {
}
AL.sourcef = function(source,param,value) {
}
AL.sourcefv = function(source,param,values) {
}
AL.sourcei = function(source,param,value) {
}
AL.filteri = function(filter,param,value) {
}
AL.filterf = function(filter,param,value) {
}
AL.sourceiv = function(source,param,values) {
}
AL.sourcePlay = function(source) {
}
AL.sourcePlayv = function(sources) {
}
AL.sourceStop = function(source) {
}
AL.sourceStopv = function(sources) {
}
AL.sourceRewind = function(source) {
}
AL.sourceRewindv = function(sources) {
}
AL.sourcePause = function(source) {
}
AL.sourcePausev = function(sources) {
}
AL.sourceQueueBuffer = function(source,buffer) {
}
AL.sourceQueueBuffers = function(source,nb,buffers) {
}
AL.sourceUnqueueBuffer = function(source) {
	return 0;
}
AL.sourceUnqueueBuffers = function(source,nb) {
	return null;
}
AL.speedOfSound = function(value) {
}
AL.NONE = 0
AL.FALSE = 0
AL.TRUE = 1
AL.SOURCE_RELATIVE = 514
AL.CONE_INNER_ANGLE = 4097
AL.CONE_OUTER_ANGLE = 4098
AL.PITCH = 4099
AL.POSITION = 4100
AL.DIRECTION = 4101
AL.VELOCITY = 4102
AL.LOOPING = 4103
AL.BUFFER = 4105
AL.GAIN = 4106
AL.MIN_GAIN = 4109
AL.MAX_GAIN = 4110
AL.ORIENTATION = 4111
AL.SOURCE_STATE = 4112
AL.INITIAL = 4113
AL.PLAYING = 4114
AL.PAUSED = 4115
AL.STOPPED = 4116
AL.BUFFERS_QUEUED = 4117
AL.BUFFERS_PROCESSED = 4118
AL.REFERENCE_DISTANCE = 4128
AL.ROLLOFF_FACTOR = 4129
AL.CONE_OUTER_GAIN = 4130
AL.MAX_DISTANCE = 4131
AL.SEC_OFFSET = 4132
AL.SAMPLE_OFFSET = 4133
AL.BYTE_OFFSET = 4134
AL.SOURCE_TYPE = 4135
AL.STATIC = 4136
AL.STREAMING = 4137
AL.UNDETERMINED = 4144
AL.FORMAT_MONO8 = 4352
AL.FORMAT_MONO16 = 4353
AL.FORMAT_STEREO8 = 4354
AL.FORMAT_STEREO16 = 4355
AL.FREQUENCY = 8193
AL.BITS = 8194
AL.CHANNELS = 8195
AL.SIZE = 8196
AL.NO_ERROR = 0
AL.INVALID_NAME = 40961
AL.INVALID_ENUM = 40962
AL.INVALID_VALUE = 40963
AL.INVALID_OPERATION = 40964
AL.OUT_OF_MEMORY = 40965
AL.VENDOR = 45057
AL.VERSION = 45058
AL.RENDERER = 45059
AL.EXTENSIONS = 45060
AL.DOPPLER_FACTOR = 49152
AL.SPEED_OF_SOUND = 49155
AL.DOPPLER_VELOCITY = 49153
AL.DISTANCE_MODEL = 53248
AL.INVERSE_DISTANCE = 53249
AL.INVERSE_DISTANCE_CLAMPED = 53250
AL.LINEAR_DISTANCE = 53251
AL.LINEAR_DISTANCE_CLAMPED = 53252
AL.EXPONENT_DISTANCE = 53253
AL.EXPONENT_DISTANCE_CLAMPED = 53254
AL.METERS_PER_UNIT = 131076
AL.DIRECT_FILTER = 131077
AL.AUXILIARY_SEND_FILTER = 131078
AL.AIR_ABSORPTION_FACTOR = 131079
AL.ROOM_ROLLOFF_FACTOR = 131080
AL.CONE_OUTER_GAINHF = 131081
AL.DIRECT_FILTER_GAINHF_AUTO = 131082
AL.AUXILIARY_SEND_FILTER_GAIN_AUTO = 131083
AL.AUXILIARY_SEND_FILTER_GAINHF_AUTO = 131084
AL.REVERB_DENSITY = 1
AL.REVERB_DIFFUSION = 2
AL.REVERB_GAIN = 3
AL.REVERB_GAINHF = 4
AL.REVERB_DECAY_TIME = 5
AL.REVERB_DECAY_HFRATIO = 6
AL.REVERB_REFLECTIONS_GAIN = 7
AL.REVERB_REFLECTIONS_DELAY = 8
AL.REVERB_LATE_REVERB_GAIN = 9
AL.REVERB_LATE_REVERB_DELAY = 10
AL.REVERB_AIR_ABSORPTION_GAINHF = 11
AL.REVERB_ROOM_ROLLOFF_FACTOR = 12
AL.REVERB_DECAY_HFLIMIT = 13
AL.EAXREVERB_DENSITY = 1
AL.EAXREVERB_DIFFUSION = 2
AL.EAXREVERB_GAIN = 3
AL.EAXREVERB_GAINHF = 4
AL.EAXREVERB_GAINLF = 5
AL.EAXREVERB_DECAY_TIME = 6
AL.EAXREVERB_DECAY_HFRATIO = 7
AL.EAXREVERB_DECAY_LFRATIO = 8
AL.EAXREVERB_REFLECTIONS_GAIN = 9
AL.EAXREVERB_REFLECTIONS_DELAY = 10
AL.EAXREVERB_REFLECTIONS_PAN = 11
AL.EAXREVERB_LATE_REVERB_GAIN = 12
AL.EAXREVERB_LATE_REVERB_DELAY = 13
AL.EAXREVERB_LATE_REVERB_PAN = 14
AL.EAXREVERB_ECHO_TIME = 15
AL.EAXREVERB_ECHO_DEPTH = 16
AL.EAXREVERB_MODULATION_TIME = 17
AL.EAXREVERB_MODULATION_DEPTH = 18
AL.EAXREVERB_AIR_ABSORPTION_GAINHF = 19
AL.EAXREVERB_HFREFERENCE = 20
AL.EAXREVERB_LFREFERENCE = 21
AL.EAXREVERB_ROOM_ROLLOFF_FACTOR = 22
AL.EAXREVERB_DECAY_HFLIMIT = 23
AL.CHORUS_WAVEFORM = 1
AL.CHORUS_PHASE = 2
AL.CHORUS_RATE = 3
AL.CHORUS_DEPTH = 4
AL.CHORUS_FEEDBACK = 5
AL.CHORUS_DELAY = 6
AL.DISTORTION_EDGE = 1
AL.DISTORTION_GAIN = 2
AL.DISTORTION_LOWPASS_CUTOFF = 3
AL.DISTORTION_EQCENTER = 4
AL.DISTORTION_EQBANDWIDTH = 5
AL.ECHO_DELAY = 1
AL.ECHO_LRDELAY = 2
AL.ECHO_DAMPING = 3
AL.ECHO_FEEDBACK = 4
AL.ECHO_SPREAD = 5
AL.FLANGER_WAVEFORM = 1
AL.FLANGER_PHASE = 2
AL.FLANGER_RATE = 3
AL.FLANGER_DEPTH = 4
AL.FLANGER_FEEDBACK = 5
AL.FLANGER_DELAY = 6
AL.FREQUENCY_SHIFTER_FREQUENCY = 1
AL.FREQUENCY_SHIFTER_LEFT_DIRECTION = 2
AL.FREQUENCY_SHIFTER_RIGHT_DIRECTION = 3
AL.VOCAL_MORPHER_PHONEMEA = 1
AL.VOCAL_MORPHER_PHONEMEA_COARSE_TUNING = 2
AL.VOCAL_MORPHER_PHONEMEB = 3
AL.VOCAL_MORPHER_PHONEMEB_COARSE_TUNING = 4
AL.VOCAL_MORPHER_WAVEFORM = 5
AL.VOCAL_MORPHER_RATE = 6
AL.PITCH_SHIFTER_COARSE_TUNE = 1
AL.PITCH_SHIFTER_FINE_TUNE = 2
AL.RING_MODULATOR_FREQUENCY = 1
AL.RING_MODULATOR_HIGHPASS_CUTOFF = 2
AL.RING_MODULATOR_WAVEFORM = 3
AL.AUTOWAH_ATTACK_TIME = 1
AL.AUTOWAH_RELEASE_TIME = 2
AL.AUTOWAH_RESONANCE = 3
AL.AUTOWAH_PEAK_GAIN = 4
AL.COMPRESSOR_ONOFF = 1
AL.EQUALIZER_LOW_GAIN = 1
AL.EQUALIZER_LOW_CUTOFF = 2
AL.EQUALIZER_MID1_GAIN = 3
AL.EQUALIZER_MID1_CENTER = 4
AL.EQUALIZER_MID1_WIDTH = 5
AL.EQUALIZER_MID2_GAIN = 6
AL.EQUALIZER_MID2_CENTER = 7
AL.EQUALIZER_MID2_WIDTH = 8
AL.EQUALIZER_HIGH_GAIN = 9
AL.EQUALIZER_HIGH_CUTOFF = 10
AL.EFFECT_FIRST_PARAMETER = 0
AL.EFFECT_LAST_PARAMETER = 32768
AL.EFFECT_TYPE = 32769
AL.EFFECT_NULL = 0
AL.EFFECT_EAXREVERB = 32768
AL.EFFECT_REVERB = 1
AL.EFFECT_CHORUS = 2
AL.EFFECT_DISTORTION = 3
AL.EFFECT_ECHO = 4
AL.EFFECT_FLANGER = 5
AL.EFFECT_FREQUENCY_SHIFTER = 6
AL.EFFECT_VOCAL_MORPHER = 7
AL.EFFECT_PITCH_SHIFTER = 8
AL.EFFECT_RING_MODULATOR = 9
AL.FFECT_AUTOWAH = 10
AL.EFFECT_COMPRESSOR = 11
AL.EFFECT_EQUALIZER = 12
AL.EFFECTSLOT_EFFECT = 1
AL.EFFECTSLOT_GAIN = 2
AL.EFFECTSLOT_AUXILIARY_SEND_AUTO = 3
AL.LOWPASS_GAIN = 1
AL.LOWPASS_GAINHF = 2
AL.HIGHPASS_GAIN = 1
AL.HIGHPASS_GAINLF = 2
AL.BANDPASS_GAIN = 1
AL.BANDPASS_GAINLF = 2
AL.BANDPASS_GAINHF = 3
AL.FILTER_FIRST_PARAMETER = 0
AL.FILTER_LAST_PARAMETER = 32768
AL.FILTER_TYPE = 32769
AL.FILTER_NULL = 0
AL.FILTER_LOWPASS = 1
AL.FILTER_HIGHPASS = 2
AL.FILTER_BANDPASS = 3

// Export

exports.default = AL;