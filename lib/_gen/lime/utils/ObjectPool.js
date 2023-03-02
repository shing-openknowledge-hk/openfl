// Class: lime.utils.ObjectPool

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function haxe_ds_ObjectMap() {return require("./../../haxe/ds/ObjectMap");}
function haxe_ds_List() {return require("./../../haxe/ds/List");}

// Constructor

var ObjectPool = function(create,clean,size) {
	this.__pool = new (haxe_ds_ObjectMap().default)();
	this.activeObjects = 0;
	this.inactiveObjects = 0;
	this.__inactiveObject0 = null;
	this.__inactiveObject1 = null;
	this.__inactiveObjectList = new (haxe_ds_List().default)();
	if(create != null) {
		this.create = create;
	}
	if(clean != null) {
		this.clean = clean;
	}
	if(size != null) {
		this.set_size(size);
	}
}

// Meta

ObjectPool.__name__ = "lime.utils.ObjectPool";
ObjectPool.__isInterface__ = false;
ObjectPool.prototype = {
	add: function(object) {
		if(!this.__pool.exists(object)) {
			this.__pool.set(object,false);
			this.clean(object);
			this.__addInactive(object);
		}
	},
	clean: function(object) {
	},
	clear: function() {
		this.__pool = new (haxe_ds_ObjectMap().default)();
		this.activeObjects = 0;
		this.inactiveObjects = 0;
		this.__inactiveObject0 = null;
		this.__inactiveObject1 = null;
		this.__inactiveObjectList.clear();
	},
	create: function() {
		return null;
	},
	get: function() {
		var object = null;
		if(this.inactiveObjects > 0) {
			object = this.__getInactive();
		} else if(this.__size == null || this.activeObjects < this.__size) {
			object = this.create();
			if(object != null) {
				this.__pool.set(object,true);
				this.activeObjects++;
			}
		}
		return object;
	},
	release: function(object) {
		this.activeObjects--;
		if(this.__size == null || this.activeObjects + this.inactiveObjects < this.__size) {
			this.clean(object);
			this.__addInactive(object);
		} else {
			this.__pool.remove(object);
		}
	},
	remove: function(object) {
		if(this.__pool.exists(object)) {
			this.__pool.remove(object);
			if(this.__inactiveObject0 == object) {
				this.__inactiveObject0 = null;
				this.inactiveObjects--;
			} else if(this.__inactiveObject1 == object) {
				this.__inactiveObject1 = null;
				this.inactiveObjects--;
			} else if(this.__inactiveObjectList.remove(object)) {
				this.inactiveObjects--;
			} else {
				this.activeObjects--;
			}
		}
	},
	__addInactive: function(object) {
		if(this.__inactiveObject0 == null) {
			this.__inactiveObject0 = object;
		} else if(this.__inactiveObject1 == null) {
			this.__inactiveObject1 = object;
		} else {
			this.__inactiveObjectList.add(object);
		}
		this.inactiveObjects++;
	},
	__getInactive: function() {
		var object = null;
		if(this.__inactiveObject0 != null) {
			object = this.__inactiveObject0;
			this.__inactiveObject0 = null;
		} else if(this.__inactiveObject1 != null) {
			object = this.__inactiveObject1;
			this.__inactiveObject1 = null;
		} else {
			object = this.__inactiveObjectList.pop();
			if(this.__inactiveObjectList.length > 0) {
				this.__inactiveObject0 = this.__inactiveObjectList.pop();
			}
			if(this.__inactiveObjectList.length > 0) {
				this.__inactiveObject1 = this.__inactiveObjectList.pop();
			}
		}
		this.inactiveObjects--;
		this.activeObjects++;
		return object;
	},
	__removeInactive: function(count) {
		if(count <= 0 || this.inactiveObjects == 0) {
			return;
		}
		if(this.__inactiveObject0 != null) {
			this.__pool.remove(this.__inactiveObject0);
			this.__inactiveObject0 = null;
			this.inactiveObjects--;
			--count;
		}
		if(count == 0 || this.inactiveObjects == 0) {
			return;
		}
		if(this.__inactiveObject1 != null) {
			this.__pool.remove(this.__inactiveObject1);
			this.__inactiveObject1 = null;
			this.inactiveObjects--;
			--count;
		}
		if(count == 0 || this.inactiveObjects == 0) {
			return;
		}
		var object = this.__inactiveObjectList.iterator();
		while(object.hasNext()) {
			var object1 = object.next();
			this.__pool.remove(object1);
			this.__inactiveObjectList.remove(object1);
			this.inactiveObjects--;
			--count;
			if(count == 0 || this.inactiveObjects == 0) {
				return;
			}
		}
	},
	get_size: function() {
		return this.__size;
	},
	set_size: function(value) {
		if(value == null) {
			this.__size = null;
		} else {
			var current = this.inactiveObjects + this.activeObjects;
			this.__size = value;
			if(current > value) {
				this.__removeInactive(current - value);
			} else if(value > current) {
				var object;
				var _g = 0;
				var _g1 = value - current;
				while(_g < _g1) {
					var i = _g++;
					object = this.create();
					if(object != null) {
						this.__pool.set(object,false);
						this.__inactiveObjectList.add(object);
						this.inactiveObjects++;
					} else {
						break;
					}
				}
			}
		}
		return value;
	}
};
ObjectPool.prototype.__class__ = ObjectPool.prototype.constructor = $hxClasses["lime.utils.ObjectPool"] = ObjectPool;

// Init



// Statics




// Export

exports.default = ObjectPool;