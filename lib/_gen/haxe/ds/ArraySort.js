// Class: haxe.ds.ArraySort

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;

// Constructor

var ArraySort = function(){}

// Meta

ArraySort.__name__ = "haxe.ds.ArraySort";
ArraySort.__isInterface__ = false;
ArraySort.prototype = {
	
};
ArraySort.prototype.__class__ = ArraySort.prototype.constructor = $hxClasses["haxe.ds.ArraySort"] = ArraySort;

// Init



// Statics

ArraySort.sort = function(a,cmp) {
	ArraySort.rec(a,cmp,0,a.length);
}
ArraySort.rec = function(a,cmp,from,to) {
	var middle = from + to >> 1;
	if(to - from < 12) {
		if(to <= from) {
			return;
		}
		var _g = from + 1;
		var _g1 = to;
		while(_g < _g1) {
			var i = _g++;
			var j = i;
			while(j > from) {
				if(ArraySort.compare(a,cmp,j,j - 1) < 0) {
					ArraySort.swap(a,j - 1,j);
				} else {
					break;
				}
				--j;
			}
		}
		return;
	}
	ArraySort.rec(a,cmp,from,middle);
	ArraySort.rec(a,cmp,middle,to);
	ArraySort.doMerge(a,cmp,from,middle,to,middle - from,to - middle);
}
ArraySort.doMerge = function(a,cmp,from,pivot,to,len1,len2) {
	var first_cut;
	var second_cut;
	var len11;
	var len22;
	if(len1 == 0 || len2 == 0) {
		return;
	}
	if(len1 + len2 == 2) {
		if(ArraySort.compare(a,cmp,pivot,from) < 0) {
			ArraySort.swap(a,pivot,from);
		}
		return;
	}
	if(len1 > len2) {
		len11 = len1 >> 1;
		first_cut = from + len11;
		second_cut = ArraySort.lower(a,cmp,pivot,to,first_cut);
		len22 = second_cut - pivot;
	} else {
		len22 = len2 >> 1;
		second_cut = pivot + len22;
		first_cut = ArraySort.upper(a,cmp,from,pivot,second_cut);
		len11 = first_cut - from;
	}
	ArraySort.rotate(a,cmp,first_cut,pivot,second_cut);
	var new_mid = first_cut + len22;
	ArraySort.doMerge(a,cmp,from,first_cut,new_mid,len11,len22);
	ArraySort.doMerge(a,cmp,new_mid,second_cut,to,len1 - len11,len2 - len22);
}
ArraySort.rotate = function(a,cmp,from,mid,to) {
	if(from == mid || mid == to) {
		return;
	}
	var n = ArraySort.gcd(to - from,mid - from);
	while(n-- != 0) {
		var val = a[from + n];
		var shift = mid - from;
		var p1 = from + n;
		var p2 = from + n + shift;
		while(p2 != from + n) {
			a[p1] = a[p2];
			p1 = p2;
			if(to - p2 > shift) {
				p2 += shift;
			} else {
				p2 = from + (shift - (to - p2));
			}
		}
		a[p1] = val;
	}
}
ArraySort.gcd = function(m,n) {
	while(n != 0) {
		var t = m % n;
		m = n;
		n = t;
	}
	return m;
}
ArraySort.upper = function(a,cmp,from,to,val) {
	var len = to - from;
	var half;
	var mid;
	while(len > 0) {
		half = len >> 1;
		mid = from + half;
		if(ArraySort.compare(a,cmp,val,mid) < 0) {
			len = half;
		} else {
			from = mid + 1;
			len = len - half - 1;
		}
	}
	return from;
}
ArraySort.lower = function(a,cmp,from,to,val) {
	var len = to - from;
	var half;
	var mid;
	while(len > 0) {
		half = len >> 1;
		mid = from + half;
		if(ArraySort.compare(a,cmp,mid,val) < 0) {
			from = mid + 1;
			len = len - half - 1;
		} else {
			len = half;
		}
	}
	return from;
}
ArraySort.swap = function(a,i,j) {
	var tmp = a[i];
	a[i] = a[j];
	a[j] = tmp;
}
ArraySort.compare = function(a,cmp,i,j) {
	return cmp(a[i],a[j]);
}


// Export

exports.default = ArraySort;