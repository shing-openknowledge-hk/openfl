// Class: haxe.xml.Printer

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function StringTools() {return require("./../../StringTools");}
function EReg() {return require("./../../EReg");}
function StringBuf() {return require("./../../StringBuf");}

// Constructor

var Printer = function(pretty) {
	this.output = new (StringBuf().default)();
	this.pretty = pretty;
}

// Meta

Printer.__name__ = "haxe.xml.Printer";
Printer.__isInterface__ = false;
Printer.prototype = {
	writeNode: function(value,tabs) {
		switch(value.nodeType) {
		case 0:
			this.write(tabs + "<");
			this.write(value.get_nodeName());
			var attribute = value.attributes();
			while(attribute.hasNext()) {
				var attribute1 = attribute.next();
				this.write(" " + attribute1 + "=\"");
				this.write((StringTools().default).htmlEscape(value.get(attribute1),true));
				this.write("\"");
			}
			if(this.hasChildren(value)) {
				this.write(">");
				this.newline();
				var child = value.iterator();
				while(child.hasNext()) {
					var child1 = child.next();
					this.writeNode(child1,this.pretty ? tabs + "\t" : tabs);
				}
				this.write(tabs + "</");
				this.write(value.get_nodeName());
				this.write(">");
				this.newline();
			} else {
				this.write("/>");
				this.newline();
			}
			break;
		case 1:
			var nodeValue = value.get_nodeValue();
			if(nodeValue.length != 0) {
				this.write(tabs + (StringTools().default).htmlEscape(nodeValue));
				this.newline();
			}
			break;
		case 2:
			this.write(tabs + "<![CDATA[");
			this.write(value.get_nodeValue());
			this.write("]]>");
			this.newline();
			break;
		case 3:
			var commentContent = value.get_nodeValue();
			commentContent = new (EReg().default)("[\n\r\t]+","g").replace(commentContent,"");
			commentContent = "<!--" + commentContent + "-->";
			this.write(tabs);
			this.write((StringTools().default).trim(commentContent));
			this.newline();
			break;
		case 4:
			this.write("<!DOCTYPE " + value.get_nodeValue() + ">");
			this.newline();
			break;
		case 5:
			this.write("<?" + value.get_nodeValue() + "?>");
			this.newline();
			break;
		case 6:
			var child2 = value.iterator();
			while(child2.hasNext()) {
				var child3 = child2.next();
				this.writeNode(child3,tabs);
			}
			break;
		}
	},
	write: function(input) {
		this.output.add(input);
	},
	newline: function() {
		if(this.pretty) {
			this.output.add("\n");
		}
	},
	hasChildren: function(value) {
		var child = value.iterator();
		while(child.hasNext()) {
			var child1 = child.next();
			switch(child1.nodeType) {
			case 0:case 1:
				return true;
			case 2:case 3:
				if((StringTools().default).ltrim(child1.get_nodeValue()).length != 0) {
					return true;
				}
				break;
			default:
			}
		}
		return false;
	}
};
Printer.prototype.__class__ = Printer.prototype.constructor = $hxClasses["haxe.xml.Printer"] = Printer;

// Init



// Statics

Printer.print = function(xml,pretty) {
	if(pretty == null) {
		pretty = false;
	}
	var printer = new Printer(pretty);
	printer.writeNode(xml,"");
	return printer.output.toString();
}


// Export

exports.default = Printer;