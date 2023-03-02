// Class: openfl._Vector.Vector_Impl_

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function openfl_VectorData() {return require("./../../openfl/VectorData");}
function openfl__$Vector_VectorIterator() {return require("./../../openfl/_Vector/VectorIterator");}
function Std() {return require("./../../Std");}

// Constructor

var Vector_Impl_ = function(){}

// Meta

Vector_Impl_.__name__ = "openfl._Vector.Vector_Impl_";
Vector_Impl_.__isInterface__ = false;
Vector_Impl_.prototype = {
	
};
Vector_Impl_.prototype.__class__ = Vector_Impl_.prototype.constructor = $hxClasses["openfl._Vector.Vector_Impl_"] = Vector_Impl_;

// Init



// Statics

Vector_Impl_._new = function(length,fixed,array) {
	var this1;
	if(array != null) {
		this1 = (openfl_VectorData().default).ofArray(array);
	} else {
		this1 = new (openfl_VectorData().default)(length,fixed);
	}
	return this1;
}
Vector_Impl_.concat = function(this1,a) {
	return (openfl_VectorData().default).ofArray(Array.prototype.concat.call(this1,a));
}
Vector_Impl_.copy = function(this1) {
	return (openfl_VectorData().default).ofArray(this1);
}
Vector_Impl_.filter = function(this1,callback) {
	return (openfl_VectorData().default).ofArray(Array.prototype.filter.call(this1,callback));
}
Vector_Impl_.get = function(this1,index) {
	return this1[index];
}
Vector_Impl_.indexOf = function(this1,x,from) {
	if(from == null) {
		from = 0;
	}
	return Array.prototype.indexOf.call(this1,x,from);
}
Vector_Impl_.insertAt = function(this1,index,element) {
	if(!this1.fixed || index < this1.get_length()) {
		Array.prototype.splice.call(this1,index,0,element);
	}
}
Vector_Impl_.iterator = function(this1) {
	return new (openfl__$Vector_VectorIterator().default)(this1);
}
Vector_Impl_.join = function(this1,sep) {
	if(sep == null) {
		sep = ",";
	}
	return Array.prototype.join.call(this1,sep);
}
Vector_Impl_.lastIndexOf = function(this1,x,from) {
	if(from == null) {
		return Array.prototype.lastIndexOf.call(this1,x);
	} else {
		return Array.prototype.lastIndexOf.call(this1,x,from);
	}
}
Vector_Impl_.pop = function(this1) {
	if(!this1.fixed) {
		return Array.prototype.pop.call(this1);
	} else {
		return null;
	}
}
Vector_Impl_.push = function(this1,x) {
	if(!this1.fixed) {
		return Array.prototype.push.call(this1,x);
	} else {
		return this.length;
	}
}
Vector_Impl_.removeAt = function(this1,index) {
	if(!this1.fixed || index < this1.get_length()) {
		return Array.prototype.splice.call(this1,index,1)[0];
	}
	return null;
}
Vector_Impl_.reverse = function(this1) {
	return Array.prototype.reverse.call(this1);
}
Vector_Impl_.set = function(this1,index,value) {
	if(!this1.fixed || index < this1.get_length()) {
		return this1[index] = value;
	} else {
		return value;
	}
}
Vector_Impl_.shift = function(this1) {
	if(!this1.fixed) {
		return Array.prototype.shift.call(this1);
	} else {
		return null;
	}
}
Vector_Impl_.slice = function(this1,startIndex,endIndex) {
	if(endIndex == null) {
		endIndex = 16777215;
	}
	if(startIndex == null) {
		startIndex = 0;
	}
	return (openfl_VectorData().default).ofArray(Array.prototype.slice.call(this1,startIndex,endIndex));
}
Vector_Impl_.sort = function(this1,f) {
	Array.prototype.sort.call(this1,f);
}
Vector_Impl_.splice = function(this1,pos,len) {
	return (openfl_VectorData().default).ofArray(Array.prototype.splice.call(this1,pos,len));
}
Vector_Impl_.toString = function(this1) {
	if(this1 != null) {
		return (Std().default).string(this1);
	} else {
		return null;
	}
}
Vector_Impl_.unshift = function(this1,x) {
	if(!this1.fixed) {
		Array.prototype.unshift.call(this1,x);
	}
}
Vector_Impl_.ofArray = function(a) {
	return (openfl_VectorData().default).ofArray(a);
}
Vector_Impl_.convert = function(v) {
	return v;
}
Vector_Impl_.get_fixed = function(this1) {
	return this1.fixed;
}
Vector_Impl_.set_fixed = function(this1,value) {
	return this1.fixed = value;
}
Vector_Impl_.get_length = function(this1) {
	return this1.get_length();
}
Vector_Impl_.set_length = function(this1,value) {
	return this1.set_length(value);
}


// Export

exports.default = Vector_Impl_;