// Class: lime.utils._BytePointer.BytePointer_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function lime_utils_BytePointerData() {return require("./../../../lime/utils/BytePointerData");}
function haxe_io_Bytes() {return require("./../../../haxe/io/Bytes");}
function lime_utils__$Bytes_Bytes_$Impl_$() {return require("./../../../lime/utils/_Bytes/Bytes_Impl_");}
function Std() {return require("./../../../Std");}

// Constructor

var BytePointer_Impl_ = function(){}

// Meta

BytePointer_Impl_.__name__ = "lime.utils._BytePointer.BytePointer_Impl_";
BytePointer_Impl_.__isInterface__ = false;
BytePointer_Impl_.prototype = {
	
};
BytePointer_Impl_.prototype.__class__ = BytePointer_Impl_.prototype.constructor = $hxClasses["lime.utils._BytePointer.BytePointer_Impl_"] = BytePointer_Impl_;

// Init



// Statics

BytePointer_Impl_._new = function(bytes,offset) {
	if(offset == null) {
		offset = 0;
	}
	var this1 = new (lime_utils_BytePointerData().default)(bytes,offset);
	return this1;
}
BytePointer_Impl_.set = function(this1,bytes,bufferView,buffer,offset) {
	if(buffer != null) {
		bytes = (haxe_io_Bytes().default).ofData(buffer);
	}
	if(bytes != null || bufferView == null) {
		this1.bytes = bytes;
		this1.offset = offset != null ? offset : 0;
	} else {
		this1.bytes = (haxe_io_Bytes().default).ofData(bufferView.buffer);
		this1.offset = offset != null ? bufferView.byteOffset + offset : bufferView.byteOffset;
	}
}
BytePointer_Impl_.__arrayGet = function(this1,index) {
	if(this1.bytes != null) {
		return this1.bytes.get(index + this1.offset);
	} else {
		return 0;
	}
}
BytePointer_Impl_.__arraySet = function(this1,index,value) {
	if(this1.bytes == null) {
		this1.bytes.set(index + this1.offset,value);
	}
	return value;
}
BytePointer_Impl_.fromArrayBufferView = function(arrayBufferView) {
	if(arrayBufferView == null) {
		return null;
	}
	return new (lime_utils_BytePointerData().default)((haxe_io_Bytes().default).ofData(arrayBufferView.buffer),arrayBufferView.byteOffset);
}
BytePointer_Impl_.fromArrayBuffer = function(buffer) {
	if(buffer == null) {
		return null;
	}
	return new (lime_utils_BytePointerData().default)((haxe_io_Bytes().default).ofData(buffer),0);
}
BytePointer_Impl_.fromBytes = function(bytes) {
	return new (lime_utils_BytePointerData().default)(bytes,0);
}
BytePointer_Impl_.fromBytesData = function(bytesData) {
	if(bytesData == null) {
		return new (lime_utils_BytePointerData().default)(null,0);
	} else {
		return new (lime_utils_BytePointerData().default)((haxe_io_Bytes().default).ofData(bytesData),0);
	}
}
BytePointer_Impl_.fromFile = function(path) {
	return new (lime_utils_BytePointerData().default)((lime_utils__$Bytes_Bytes_$Impl_$().default).fromFile(path),0);
}
BytePointer_Impl_.fromLimeBytes = function(bytes) {
	return new (lime_utils_BytePointerData().default)(bytes,0);
}
BytePointer_Impl_.toUInt8Array = function(bytePointer) {
	var elements = null;
	var array = null;
	var view = null;
	var buffer = bytePointer.bytes.getData();
	var byteoffset = (Std().default).int(bytePointer.offset / 8);
	var len = null;
	if(byteoffset == null) {
		byteoffset = 0;
	}
	var this1;
	if(elements != null) {
		this1 = new Uint8Array(elements);
	} else if(array != null) {
		this1 = new Uint8Array(array);
	} else if(view != null) {
		this1 = new Uint8Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Uint8Array(buffer,byteoffset);
		} else {
			this1 = new Uint8Array(buffer,byteoffset,len);
		}
	} else {
		this1 = null;
	}
	return this1;
}
BytePointer_Impl_.toUInt8ClampedArray = function(bytePointer) {
	if(bytePointer == null || bytePointer.bytes == null) {
		return null;
	}
	var elements = null;
	var array = null;
	var view = null;
	var buffer = bytePointer.bytes.getData();
	var byteoffset = (Std().default).int(bytePointer.offset / 8);
	var len = null;
	if(byteoffset == null) {
		byteoffset = 0;
	}
	var this1;
	if(elements != null) {
		this1 = new Uint8ClampedArray(elements);
	} else if(array != null) {
		this1 = new Uint8ClampedArray(array);
	} else if(view != null) {
		this1 = new Uint8ClampedArray(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Uint8ClampedArray(buffer,byteoffset);
		} else {
			this1 = new Uint8ClampedArray(buffer,byteoffset,len);
		}
	} else {
		this1 = null;
	}
	return this1;
}
BytePointer_Impl_.toInt8Array = function(bytePointer) {
	if(bytePointer == null || bytePointer.bytes == null) {
		return null;
	}
	var elements = null;
	var array = null;
	var view = null;
	var buffer = bytePointer.bytes.getData();
	var byteoffset = (Std().default).int(bytePointer.offset / 8);
	var len = null;
	if(byteoffset == null) {
		byteoffset = 0;
	}
	var this1;
	if(elements != null) {
		this1 = new Int8Array(elements);
	} else if(array != null) {
		this1 = new Int8Array(array);
	} else if(view != null) {
		this1 = new Int8Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Int8Array(buffer,byteoffset);
		} else {
			this1 = new Int8Array(buffer,byteoffset,len);
		}
	} else {
		this1 = null;
	}
	return this1;
}
BytePointer_Impl_.toUInt16Array = function(bytePointer) {
	if(bytePointer == null || bytePointer.bytes == null) {
		return null;
	}
	var elements = null;
	var array = null;
	var view = null;
	var buffer = bytePointer.bytes.getData();
	var byteoffset = (Std().default).int(bytePointer.offset / 16);
	var len = null;
	if(byteoffset == null) {
		byteoffset = 0;
	}
	var this1;
	if(elements != null) {
		this1 = new Uint16Array(elements);
	} else if(array != null) {
		this1 = new Uint16Array(array);
	} else if(view != null) {
		this1 = new Uint16Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Uint16Array(buffer,byteoffset);
		} else {
			this1 = new Uint16Array(buffer,byteoffset,len);
		}
	} else {
		this1 = null;
	}
	return this1;
}
BytePointer_Impl_.toInt16Array = function(bytePointer) {
	if(bytePointer == null || bytePointer.bytes == null) {
		return null;
	}
	var elements = null;
	var array = null;
	var view = null;
	var buffer = bytePointer.bytes.getData();
	var byteoffset = (Std().default).int(bytePointer.offset / 16);
	var len = null;
	if(byteoffset == null) {
		byteoffset = 0;
	}
	var this1;
	if(elements != null) {
		this1 = new Int16Array(elements);
	} else if(array != null) {
		this1 = new Int16Array(array);
	} else if(view != null) {
		this1 = new Int16Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Int16Array(buffer,byteoffset);
		} else {
			this1 = new Int16Array(buffer,byteoffset,len);
		}
	} else {
		this1 = null;
	}
	return this1;
}
BytePointer_Impl_.toUInt32Array = function(bytePointer) {
	if(bytePointer == null || bytePointer.bytes == null) {
		return null;
	}
	var elements = null;
	var array = null;
	var view = null;
	var buffer = bytePointer.bytes.getData();
	var byteoffset = (Std().default).int(bytePointer.offset / 32);
	var len = null;
	if(byteoffset == null) {
		byteoffset = 0;
	}
	var this1;
	if(elements != null) {
		this1 = new Uint32Array(elements);
	} else if(array != null) {
		this1 = new Uint32Array(array);
	} else if(view != null) {
		this1 = new Uint32Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Uint32Array(buffer,byteoffset);
		} else {
			this1 = new Uint32Array(buffer,byteoffset,len);
		}
	} else {
		this1 = null;
	}
	return this1;
}
BytePointer_Impl_.toInt32Array = function(bytePointer) {
	if(bytePointer == null || bytePointer.bytes == null) {
		return null;
	}
	var elements = null;
	var array = null;
	var view = null;
	var buffer = bytePointer.bytes.getData();
	var byteoffset = (Std().default).int(bytePointer.offset / 32);
	var len = null;
	if(byteoffset == null) {
		byteoffset = 0;
	}
	var this1;
	if(elements != null) {
		this1 = new Int32Array(elements);
	} else if(array != null) {
		this1 = new Int32Array(array);
	} else if(view != null) {
		this1 = new Int32Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Int32Array(buffer,byteoffset);
		} else {
			this1 = new Int32Array(buffer,byteoffset,len);
		}
	} else {
		this1 = null;
	}
	return this1;
}
BytePointer_Impl_.toFloat32Array = function(bytePointer) {
	if(bytePointer == null || bytePointer.bytes == null) {
		return null;
	}
	var elements = null;
	var array = null;
	var view = null;
	var buffer = bytePointer.bytes.getData();
	var byteoffset = (Std().default).int(bytePointer.offset / 32);
	var len = null;
	if(byteoffset == null) {
		byteoffset = 0;
	}
	var this1;
	if(elements != null) {
		this1 = new Float32Array(elements);
	} else if(array != null) {
		this1 = new Float32Array(array);
	} else if(view != null) {
		this1 = new Float32Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Float32Array(buffer,byteoffset);
		} else {
			this1 = new Float32Array(buffer,byteoffset,len);
		}
	} else {
		this1 = null;
	}
	return this1;
}
BytePointer_Impl_.toFloat64Array = function(bytePointer) {
	if(bytePointer == null || bytePointer.bytes == null) {
		return null;
	}
	var elements = null;
	var array = null;
	var view = null;
	var buffer = bytePointer.bytes.getData();
	var byteoffset = (Std().default).int(bytePointer.offset / 64);
	var len = null;
	if(byteoffset == null) {
		byteoffset = 0;
	}
	var this1;
	if(elements != null) {
		this1 = new Float64Array(elements);
	} else if(array != null) {
		this1 = new Float64Array(array);
	} else if(view != null) {
		this1 = new Float64Array(view);
	} else if(buffer != null) {
		if(len == null) {
			this1 = new Float64Array(buffer,byteoffset);
		} else {
			this1 = new Float64Array(buffer,byteoffset,len);
		}
	} else {
		this1 = null;
	}
	return this1;
}


// Export

exports.default = BytePointer_Impl_;