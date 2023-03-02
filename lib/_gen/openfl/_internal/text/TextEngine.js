// Class: openfl._internal.text.TextEngine

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../../hxClasses_stub").default;
var $hxEnums = require("./../../../hxEnums_stub").default;
var $import = require("./../../../import_stub").default;
function EReg() {return require("./../../../EReg");}
function openfl__$Vector_VectorIterator() {return require("./../../../openfl/_Vector/VectorIterator");}
function openfl__$Vector_Vector_$Impl_$() {return require("./../../../openfl/_Vector/Vector_Impl_");}
function Std() {return require("./../../../Std");}
function openfl_text_TextField() {return require("./../../../openfl/text/TextField");}
function HxOverrides() {return require("./../../../HxOverrides");}
function openfl__$internal_text_TextLayoutGroup() {return require("./../../../openfl/_internal/text/TextLayoutGroup");}
function lime_utils_Log() {return require("./../../../lime/utils/Log");}
function haxe_ds_StringMap() {return require("./../../../haxe/ds/StringMap");}
function openfl_text_Font() {return require("./../../../openfl/text/Font");}
function StringTools() {return require("./../../../StringTools");}
function openfl_geom_Rectangle() {return require("./../../../openfl/geom/Rectangle");}

// Constructor

var TextEngine = function(textField) {
	this.textField = textField;
	this.width = 100;
	this.height = 100;
	this.set_text("");
	this.bounds = new (openfl_geom_Rectangle().default)(0,0,0,0);
	this.textBounds = new (openfl_geom_Rectangle().default)(0,0,0,0);
	this.type = "dynamic";
	this.autoSize = "none";
	this.embedFonts = false;
	this.selectable = true;
	this.borderColor = 0;
	this.border = false;
	this.backgroundColor = 16777215;
	this.background = false;
	this.gridFitType = "pixel";
	this.maxChars = 0;
	this.multiline = false;
	this.numLines = 1;
	this.sharpness = 0;
	this.scrollH = 0;
	this.set_scrollV(1);
	this.wordWrap = false;
	this.lineAscents = (openfl__$Vector_Vector_$Impl_$().default)._new();
	this.lineBreaks = (openfl__$Vector_Vector_$Impl_$().default)._new();
	this.lineDescents = (openfl__$Vector_Vector_$Impl_$().default)._new();
	this.lineLeadings = (openfl__$Vector_Vector_$Impl_$().default)._new();
	this.lineHeights = (openfl__$Vector_Vector_$Impl_$().default)._new();
	this.lineWidths = (openfl__$Vector_Vector_$Impl_$().default)._new();
	this.layoutGroups = (openfl__$Vector_Vector_$Impl_$().default)._new();
	this.textFormatRanges = (openfl__$Vector_Vector_$Impl_$().default)._new();
	if(TextEngine.__context == null) {
		TextEngine.__context = window.document.createElement("canvas").getContext("2d");
	}
}

// Meta

TextEngine.__name__ = "openfl._internal.text.TextEngine";
TextEngine.__isInterface__ = false;
TextEngine.prototype = {
	createRestrictRegexp: function(restrict) {
		var declinedRange = new (EReg().default)("\\^(.-.|.)","gu");
		var declined = "";
		var accepted = declinedRange.map(restrict,function(ereg) {
			declined += ereg.matched(1);
			return "";
		});
		var testRegexpParts = [];
		if(accepted.length > 0) {
			testRegexpParts.push("[^" + restrict + "]");
		}
		if(declined.length > 0) {
			testRegexpParts.push("[" + declined + "]");
		}
		return new (EReg().default)("(" + testRegexpParts.join("|") + ")","g");
	},
	getBounds: function() {
		var padding = this.border ? 1 : 0;
		this.bounds.width = this.width + padding;
		this.bounds.height = this.height + padding;
		var x = this.width;
		var y = this.width;
		var group = new (openfl__$Vector_VectorIterator().default)(this.layoutGroups);
		while(group.hasNext()) {
			var group1 = group.next();
			if(group1.offsetX < x) {
				x = group1.offsetX;
			}
			if(group1.offsetY < y) {
				y = group1.offsetY;
			}
		}
		if(x >= this.width) {
			x = 2;
		}
		if(y >= this.height) {
			y = 2;
		}
		var textHeight = this.textHeight * 1.185;
		this.textBounds.setTo(Math.max(x - 2,0),Math.max(y - 2,0),Math.min(this.textWidth + 4,this.bounds.width + 4),Math.min(textHeight + 4,this.bounds.height + 4));
	},
	getLine: function(index) {
		if(index < 0 || index > this.lineBreaks.get_length() + 1) {
			return null;
		}
		if(this.lineBreaks.get_length() == 0) {
			return this.text;
		} else {
			return this.text.substring(index > 0 ? this.lineBreaks[index - 1] : 0,this.lineBreaks[index]);
		}
	},
	getLineBreakIndex: function(startIndex) {
		if(startIndex == null) {
			startIndex = 0;
		}
		var cr = this.text.indexOf("\n",startIndex);
		var lf = this.text.indexOf("\r",startIndex);
		if(cr == -1) {
			return lf;
		}
		if(lf == -1) {
			return cr;
		}
		if(cr < lf) {
			return cr;
		} else {
			return lf;
		}
	},
	getLineMeasurements: function() {
		this.lineAscents.set_length(0);
		this.lineDescents.set_length(0);
		this.lineLeadings.set_length(0);
		this.lineHeights.set_length(0);
		this.lineWidths.set_length(0);
		var currentLineAscent = 0.0;
		var currentLineDescent = 0.0;
		var currentLineLeading = null;
		var currentLineHeight = 0.0;
		var currentLineWidth = 0.0;
		var currentTextHeight = 0.0;
		this.textWidth = 0;
		this.textHeight = 0;
		this.numLines = 1;
		this.maxScrollH = 0;
		var group = new (openfl__$Vector_VectorIterator().default)(this.layoutGroups);
		while(group.hasNext()) {
			var group1 = group.next();
			while(group1.lineIndex > this.numLines - 1) {
				(openfl__$Vector_Vector_$Impl_$().default).push(this.lineAscents,currentLineAscent);
				(openfl__$Vector_Vector_$Impl_$().default).push(this.lineDescents,currentLineDescent);
				(openfl__$Vector_Vector_$Impl_$().default).push(this.lineLeadings,currentLineLeading != null ? currentLineLeading : 0);
				(openfl__$Vector_Vector_$Impl_$().default).push(this.lineHeights,currentLineHeight);
				(openfl__$Vector_Vector_$Impl_$().default).push(this.lineWidths,currentLineWidth);
				currentLineAscent = 0;
				currentLineDescent = 0;
				currentLineLeading = null;
				currentLineHeight = 0;
				currentLineWidth = 0;
				this.numLines++;
			}
			currentLineAscent = Math.max(currentLineAscent,group1.ascent);
			currentLineDescent = Math.max(currentLineDescent,group1.descent);
			if(currentLineLeading == null) {
				currentLineLeading = group1.leading;
			} else {
				currentLineLeading = (Std().default).int(Math.max(currentLineLeading,group1.leading));
			}
			currentLineHeight = Math.max(currentLineHeight,group1.height);
			currentLineWidth = group1.offsetX - 2 + group1.width;
			if(currentLineWidth > this.textWidth) {
				this.textWidth = currentLineWidth;
			}
			currentTextHeight = group1.offsetY - 2 + group1.ascent + group1.descent;
			if(currentTextHeight > this.textHeight) {
				this.textHeight = currentTextHeight;
			}
		}
		if(this.textHeight == 0 && this.textField != null && this.textField.get_type() == "input") {
			var currentFormat = this.textField.__textFormat;
			var ascent;
			var descent;
			var font = TextEngine.getFontInstance(currentFormat);
			if(currentFormat.__ascent != null) {
				ascent = currentFormat.size * currentFormat.__ascent;
				descent = currentFormat.size * currentFormat.__descent;
			} else if(font != null && font.unitsPerEM != 0) {
				ascent = font.ascender / font.unitsPerEM * currentFormat.size;
				descent = Math.abs(font.descender / font.unitsPerEM * currentFormat.size);
			} else {
				ascent = currentFormat.size;
				descent = currentFormat.size * 0.185;
			}
			var leading = currentFormat.leading;
			var heightValue = ascent + descent + leading;
			currentLineAscent = ascent;
			currentLineDescent = descent;
			currentLineLeading = leading;
			currentTextHeight = ascent + descent;
			this.textHeight = currentTextHeight;
		}
		(openfl__$Vector_Vector_$Impl_$().default).push(this.lineAscents,currentLineAscent);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.lineDescents,currentLineDescent);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.lineLeadings,currentLineLeading != null ? currentLineLeading : 0);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.lineHeights,currentLineHeight);
		(openfl__$Vector_Vector_$Impl_$().default).push(this.lineWidths,currentLineWidth);
		if(this.numLines == 1) {
			if(currentLineLeading > 0) {
				this.textHeight += currentLineLeading;
			}
		}
		if(this.layoutGroups.get_length() > 0) {
			var group2 = this.layoutGroups[this.layoutGroups.get_length() - 1];
			if(group2 != null && group2.startIndex == group2.endIndex) {
				this.textHeight -= currentLineHeight;
			}
		}
		if(this.autoSize != "none") {
			switch(this.autoSize) {
			case "center":case "left":case "right":
				if(!this.wordWrap) {
					this.width = this.textWidth + 4;
				}
				this.height = this.textHeight + 4;
				this.bottomScrollV = this.numLines;
				break;
			default:
			}
		}
		if(this.textWidth > this.width - 4) {
			this.maxScrollH = (Std().default).int(this.textWidth - this.width + 4);
		} else {
			this.maxScrollH = 0;
		}
		if(this.scrollH > this.maxScrollH) {
			this.scrollH = this.maxScrollH;
		}
	},
	getLayoutGroups: function() {
		var _gthis = this;
		this.layoutGroups.set_length(0);
		if(this.text == null || this.text == "") {
			return;
		}
		var rangeIndex = -1;
		var formatRange = null;
		var font = null;
		var currentFormat = (openfl_text_TextField().default).__defaultTextFormat.clone();
		var leading = 0;
		var ascent = 0.0;
		var maxAscent = 0.0;
		var descent = 0.0;
		var align = "left";
		var blockIndent = 0;
		var bullet = false;
		var indent = 0;
		var leftMargin = 0;
		var rightMargin = 0;
		var tabStops = null;
		var layoutGroup = null;
		var positions = null;
		var widthValue = 0.0;
		var heightValue = 0;
		var maxHeightValue = 0;
		var previousSpaceIndex = -2;
		var previousBreakIndex = -1;
		var spaceIndex = this.text.indexOf(" ");
		var breakIndex = this.getLineBreakIndex();
		var offsetX = 2.0;
		var offsetY = 2.0;
		var textIndex = 0;
		var lineIndex = 0;
		var getPositions = function(text,startIndex,endIndex) {
			var positions1 = [];
			var letterSpacing = 0.0;
			if(formatRange.format.letterSpacing != null) {
				letterSpacing = formatRange.format.letterSpacing;
			}
			if(_gthis.__useIntAdvances == null) {
				var getPositions1 = new (EReg().default)("Trident/7.0","");
				_gthis.__useIntAdvances = getPositions1.match(window.navigator.userAgent);
			}
			if(_gthis.__useIntAdvances) {
				var previousWidth = 0.0;
				var width;
				var _g = startIndex;
				var _g1 = endIndex;
				while(_g < _g1) {
					var i = _g++;
					width = TextEngine.__context.measureText(text.substring(startIndex,i + 1)).width;
					positions1.push(width - previousWidth);
					previousWidth = width;
				}
			} else {
				var _g2 = startIndex;
				var _g11 = endIndex;
				while(_g2 < _g11) {
					var i1 = _g2++;
					var advance;
					if(i1 < text.length - 1) {
						var nextWidth = TextEngine.__context.measureText(text.charAt(i1 + 1)).width;
						var twoWidths = TextEngine.__context.measureText((HxOverrides().default).substr(text,i1,2)).width;
						advance = twoWidths - nextWidth;
					} else {
						advance = TextEngine.__context.measureText(text.charAt(i1)).width;
					}
					positions1.push(advance);
				}
			}
			return positions1;
		};
		var getPositionsWidth = function(positions2) {
			var width1 = 0.0;
			var _g3 = 0;
			while(_g3 < positions2.length) {
				var position = positions2[_g3];
				++_g3;
				width1 += position;
			}
			return width1;
		};
		var getTextWidth = function(text1) {
			return TextEngine.__context.measureText(text1).width;
		};
		var nextLayoutGroup = function(startIndex1,endIndex1) {
			if(layoutGroup == null || layoutGroup.startIndex != layoutGroup.endIndex) {
				layoutGroup = new (openfl__$internal_text_TextLayoutGroup().default)(formatRange.format,startIndex1,endIndex1);
				(openfl__$Vector_Vector_$Impl_$().default).push(_gthis.layoutGroups,layoutGroup);
			} else {
				layoutGroup.format = formatRange.format;
				layoutGroup.startIndex = startIndex1;
				layoutGroup.endIndex = endIndex1;
			}
		};
		var setLineMetrics = function() {
			if(currentFormat.__ascent != null) {
				ascent = currentFormat.size * currentFormat.__ascent;
				descent = currentFormat.size * currentFormat.__descent;
			} else if(font != null && font.unitsPerEM != 0) {
				ascent = font.ascender / font.unitsPerEM * currentFormat.size;
				descent = Math.abs(font.descender / font.unitsPerEM * currentFormat.size);
			} else {
				ascent = currentFormat.size;
				descent = currentFormat.size * 0.185;
			}
			leading = currentFormat.leading;
			heightValue = Math.ceil(ascent + descent + leading);
			if(heightValue > maxHeightValue) {
				maxHeightValue = heightValue;
			}
			if(ascent > maxAscent) {
				maxAscent = ascent;
			}
		};
		var setParagraphMetrics = function() {
			if(currentFormat.align != null) {
				align = currentFormat.align;
			}
			var setParagraphMetrics1 = currentFormat.blockIndent != null;
			var setParagraphMetrics2 = currentFormat.bullet != null;
			var setParagraphMetrics3 = currentFormat.indent != null;
			if(currentFormat.leftMargin != null) {
				leftMargin = currentFormat.leftMargin;
			}
			if(currentFormat.rightMargin != null) {
				rightMargin = currentFormat.rightMargin;
			}
			var setParagraphMetrics4 = currentFormat.tabStops != null;
		};
		var nextFormatRange = function() {
			var nextFormatRange1 = _gthis.textFormatRanges.get_length() - 1;
			if(rangeIndex < nextFormatRange1) {
				rangeIndex += 1;
				formatRange = _gthis.textFormatRanges[rangeIndex];
				currentFormat.__merge(formatRange.format);
				TextEngine.__context.font = TextEngine.getFont(currentFormat);
				font = TextEngine.getFontInstance(currentFormat);
				return true;
			}
			return false;
		};
		var setFormattedPositions = function(startIndex2,endIndex2) {
			if(endIndex2 <= formatRange.end) {
				positions = getPositions(_gthis.text,startIndex2,endIndex2);
				widthValue = getPositionsWidth(positions);
			} else {
				var tempIndex = startIndex2;
				var tempRangeEnd = formatRange.end;
				var countRanges = 0;
				positions = [];
				widthValue = 0;
				while(true) {
					if(tempIndex != tempRangeEnd) {
						var tempPositions = getPositions(_gthis.text,tempIndex,tempRangeEnd);
						positions = positions.concat(tempPositions);
					}
					if(tempRangeEnd != endIndex2) {
						if(!nextFormatRange()) {
							(lime_utils_Log().default).warn("You found a bug in OpenFL's text code! Please save a copy of your project and contact Joshua Granick (@singmajesty) so we can fix this.",{ fileName : "../src/openfl/_internal/text/TextEngine.hx", lineNumber : 1059, className : "openfl._internal.text.TextEngine", methodName : "getLayoutGroups"});
							break;
						}
						tempIndex = tempRangeEnd;
						tempRangeEnd = endIndex2 < formatRange.end ? endIndex2 : formatRange.end;
						++countRanges;
					} else {
						widthValue = getPositionsWidth(positions);
						break;
					}
				}
				rangeIndex -= countRanges + 1;
				nextFormatRange();
			}
		};
		var placeFormattedText = function(endIndex3) {
			if(endIndex3 <= formatRange.end) {
				positions = getPositions(_gthis.text,textIndex,endIndex3);
				widthValue = getPositionsWidth(positions);
				nextLayoutGroup(textIndex,endIndex3);
				layoutGroup.positions = positions;
				layoutGroup.offsetX = offsetX;
				layoutGroup.ascent = ascent;
				layoutGroup.descent = descent;
				layoutGroup.leading = leading;
				layoutGroup.lineIndex = lineIndex;
				layoutGroup.offsetY = offsetY;
				layoutGroup.width = widthValue;
				layoutGroup.height = heightValue;
				offsetX += widthValue;
				if(endIndex3 == formatRange.end) {
					layoutGroup = null;
					nextFormatRange();
					setLineMetrics();
				}
			} else {
				while(true) {
					var tempRangeEnd1 = endIndex3 < formatRange.end ? endIndex3 : formatRange.end;
					if(textIndex != tempRangeEnd1) {
						positions = getPositions(_gthis.text,textIndex,tempRangeEnd1);
						widthValue = getPositionsWidth(positions);
						nextLayoutGroup(textIndex,tempRangeEnd1);
						layoutGroup.positions = positions;
						layoutGroup.offsetX = offsetX;
						layoutGroup.ascent = ascent;
						layoutGroup.descent = descent;
						layoutGroup.leading = leading;
						layoutGroup.lineIndex = lineIndex;
						layoutGroup.offsetY = offsetY;
						layoutGroup.width = widthValue;
						layoutGroup.height = heightValue;
						offsetX += widthValue;
						textIndex = tempRangeEnd1;
					}
					if(tempRangeEnd1 == formatRange.end) {
						layoutGroup = null;
					}
					if(tempRangeEnd1 == endIndex3) {
						break;
					}
					if(!nextFormatRange()) {
						(lime_utils_Log().default).warn("You found a bug in OpenFL's text code! Please save a copy of your project and contact Joshua Granick (@singmajesty) so we can fix this.",{ fileName : "../src/openfl/_internal/text/TextEngine.hx", lineNumber : 1147, className : "openfl._internal.text.TextEngine", methodName : "getLayoutGroups"});
						break;
					}
					setLineMetrics();
				}
			}
			textIndex = endIndex3;
		};
		var alignBaseline = function() {
			setLineMetrics();
			var i2 = _gthis.layoutGroups.get_length();
			while(--i2 > -1) {
				var lg = _gthis.layoutGroups[i2];
				if(lg.lineIndex < lineIndex) {
					break;
				}
				if(lg.lineIndex > lineIndex) {
					continue;
				}
				lg.ascent = maxAscent;
				lg.height = maxHeightValue;
			}
			offsetY += maxHeightValue;
			maxAscent = 0.0;
			maxHeightValue = 0;
			lineIndex += 1;
			offsetX = 2;
		};
		var breakLongWords = function(endIndex4) {
			var remainingPositions = positions;
			var i3;
			var bufferCount;
			var placeIndex;
			var positionWidth;
			var currentPosition;
			var tempWidth = getPositionsWidth(remainingPositions);
			while(offsetX + tempWidth > _gthis.width - 2) {
				bufferCount = 0;
				i3 = bufferCount;
				positionWidth = 0.0;
				while(offsetX + positionWidth < _gthis.width - 2) {
					currentPosition = remainingPositions[i3];
					if(currentPosition == 0.0) {
						++i3;
						++bufferCount;
					} else {
						positionWidth += currentPosition;
						++i3;
					}
				}
				if(positionWidth == 0.0) {
					break;
				} else if(i3 < 2 && positionWidth + offsetX > _gthis.width - 2) {
					if(textIndex + i3 - bufferCount == endIndex4) {
						break;
					}
				} else {
					while(offsetX + positionWidth > _gthis.width - 2) {
						--i3;
						if(i3 - bufferCount > 0) {
							setFormattedPositions(textIndex,textIndex + i3 - bufferCount);
							positionWidth = widthValue;
						} else {
							i3 = 1;
							bufferCount = 0;
							setFormattedPositions(textIndex,textIndex + 1);
							positionWidth = 0;
						}
					}
				}
				placeIndex = textIndex + i3 - bufferCount;
				placeFormattedText(placeIndex);
				alignBaseline();
				setFormattedPositions(placeIndex,endIndex4);
				remainingPositions = positions;
				tempWidth = widthValue;
			}
		};
		var placeText = function(endIndex5) {
			if(_gthis.width >= 4 && _gthis.wordWrap) {
				breakLongWords(endIndex5);
			}
			placeFormattedText(endIndex5);
		};
		nextFormatRange();
		setParagraphMetrics();
		setLineMetrics();
		var wrap;
		var maxLoops = this.text.length + 1;
		while(textIndex < maxLoops) if(breakIndex > -1 && (spaceIndex == -1 || breakIndex < spaceIndex)) {
			if(textIndex <= breakIndex) {
				setFormattedPositions(textIndex,breakIndex);
				placeText(breakIndex);
				layoutGroup = null;
			} else if(layoutGroup != null && layoutGroup.startIndex != layoutGroup.endIndex) {
				if(layoutGroup.endIndex == spaceIndex) {
					layoutGroup.width -= layoutGroup.getAdvance(layoutGroup.positions.length - 1);
				}
				layoutGroup = null;
			}
			if(formatRange.end == breakIndex) {
				nextFormatRange();
				setLineMetrics();
			}
			alignBaseline();
			textIndex = breakIndex + 1;
			previousBreakIndex = breakIndex;
			breakIndex = this.getLineBreakIndex(textIndex);
			setParagraphMetrics();
		} else if(spaceIndex > -1) {
			if(layoutGroup != null && layoutGroup.startIndex != layoutGroup.endIndex) {
				layoutGroup = null;
			}
			wrap = false;
			while(textIndex < this.text.length) {
				var endIndex6 = -1;
				if(spaceIndex == -1) {
					endIndex6 = breakIndex;
				} else {
					endIndex6 = spaceIndex + 1;
					if(breakIndex > -1 && breakIndex < endIndex6) {
						endIndex6 = breakIndex;
					}
				}
				if(endIndex6 == -1) {
					endIndex6 = this.text.length;
				}
				setFormattedPositions(textIndex,endIndex6);
				if(align == "justify") {
					if(positions.length > 0 && textIndex == previousSpaceIndex) {
						textIndex += 1;
						var spaceWidth = positions.shift();
						widthValue -= spaceWidth;
						offsetX += spaceWidth;
					}
					if(positions.length > 0 && endIndex6 == spaceIndex + 1) {
						--endIndex6;
						var spaceWidth1 = positions.pop();
						widthValue -= spaceWidth1;
					}
				}
				if(this.wordWrap) {
					if(offsetX + widthValue > this.width - 2) {
						wrap = true;
						if(positions.length > 0 && endIndex6 == spaceIndex + 1) {
							var lastPosition = positions[positions.length - 1];
							var spaceWidth2 = lastPosition;
							if(offsetX + widthValue - spaceWidth2 <= this.width - 2) {
								wrap = false;
							}
						}
					}
				}
				if(wrap) {
					if(align != "justify" && (layoutGroup != null || this.layoutGroups.get_length() > 0)) {
						var previous = layoutGroup;
						if(previous == null) {
							previous = this.layoutGroups[this.layoutGroups.get_length() - 1];
						}
						previous.width -= previous.getAdvance(previous.positions.length - 1);
						previous.endIndex--;
					}
					var i4 = this.layoutGroups.get_length() - 1;
					var offsetCount = 0;
					while(true) {
						layoutGroup = this.layoutGroups[i4];
						if(i4 > 0 && layoutGroup.startIndex > previousSpaceIndex) {
							++offsetCount;
						} else {
							break;
						}
						--i4;
					}
					if(textIndex == previousSpaceIndex + 1) {
						alignBaseline();
					}
					offsetX = 2;
					if(offsetCount > 0) {
						var bumpX = this.layoutGroups[this.layoutGroups.get_length() - offsetCount].offsetX;
						var _g4 = this.layoutGroups.get_length() - offsetCount;
						var _g12 = this.layoutGroups.get_length();
						while(_g4 < _g12) {
							var i5 = _g4++;
							layoutGroup = this.layoutGroups[i5];
							layoutGroup.offsetX -= bumpX;
							layoutGroup.offsetY = offsetY;
							layoutGroup.lineIndex = lineIndex;
							offsetX += layoutGroup.width;
						}
					}
					placeText(endIndex6);
					wrap = false;
				} else if(layoutGroup != null && textIndex == spaceIndex) {
					if(align != "justify") {
						layoutGroup.endIndex = spaceIndex;
						layoutGroup.positions = layoutGroup.positions.concat(positions);
						layoutGroup.width += widthValue;
					}
					offsetX += widthValue;
					textIndex = endIndex6;
				} else if(layoutGroup == null || align == "justify") {
					placeText(endIndex6);
				} else {
					var tempRangeEnd2 = endIndex6 < formatRange.end ? endIndex6 : formatRange.end;
					if(tempRangeEnd2 < endIndex6) {
						positions = getPositions(this.text,textIndex,tempRangeEnd2);
						widthValue = getPositionsWidth(positions);
					}
					layoutGroup.endIndex = tempRangeEnd2;
					layoutGroup.positions = layoutGroup.positions.concat(positions);
					layoutGroup.width += widthValue;
					offsetX += widthValue;
					if(tempRangeEnd2 == formatRange.end) {
						layoutGroup = null;
						nextFormatRange();
						setLineMetrics();
						textIndex = tempRangeEnd2;
						if(tempRangeEnd2 != endIndex6) {
							placeFormattedText(endIndex6);
						}
					}
					if(breakIndex == endIndex6) {
						++endIndex6;
					}
					textIndex = endIndex6;
				}
				var nextSpaceIndex = this.text.indexOf(" ",textIndex);
				if(breakIndex == previousSpaceIndex) {
					layoutGroup.endIndex = breakIndex;
					if(breakIndex - layoutGroup.startIndex - layoutGroup.positions.length < 0) {
						layoutGroup.positions.push(0.0);
					}
					textIndex = breakIndex + 1;
				}
				previousSpaceIndex = spaceIndex;
				spaceIndex = nextSpaceIndex;
				if(breakIndex > -1 && breakIndex <= textIndex && (spaceIndex > breakIndex || spaceIndex == -1) || textIndex > this.text.length) {
					break;
				}
			}
		} else {
			if(textIndex < this.text.length) {
				setFormattedPositions(textIndex,this.text.length);
				placeText(this.text.length);
				alignBaseline();
			}
			textIndex += 1;
		}
		if(previousBreakIndex == textIndex - 2 && previousBreakIndex > -1) {
			nextLayoutGroup(textIndex,textIndex);
			layoutGroup.positions = [];
			layoutGroup.ascent = ascent;
			layoutGroup.descent = descent;
			layoutGroup.leading = leading;
			layoutGroup.lineIndex = lineIndex;
			layoutGroup.offsetX = 2;
			layoutGroup.offsetY = offsetY;
			layoutGroup.width = 0;
			layoutGroup.height = heightValue;
		}
	},
	restrictText: function(value) {
		if(value == null) {
			return value;
		}
		if(this.__restrictRegexp != null) {
			value = this.__restrictRegexp.split(value).join("");
		}
		return value;
	},
	setTextAlignment: function() {
		var lineIndex = -1;
		var offsetX = 0.0;
		var totalWidth = this.width - 4;
		var group;
		var lineLength;
		var lineMeasurementsDirty = false;
		var _g = 0;
		var _g1 = this.layoutGroups.get_length();
		while(_g < _g1) {
			var i = _g++;
			group = this.layoutGroups[i];
			if(group.lineIndex != lineIndex) {
				lineIndex = group.lineIndex;
				totalWidth = this.width - 4 - group.format.rightMargin;
				switch(group.format.align) {
				case "center":
					if(this.lineWidths[lineIndex] < totalWidth) {
						offsetX = Math.round((totalWidth - this.lineWidths[lineIndex]) / 2);
					} else {
						offsetX = 0;
					}
					break;
				case "justify":
					if(this.lineWidths[lineIndex] < totalWidth) {
						lineLength = 1;
						var _g2 = i + 1;
						var _g11 = this.layoutGroups.get_length();
						while(_g2 < _g11) {
							var j = _g2++;
							if(this.layoutGroups[j].lineIndex == lineIndex) {
								if(j == 0 || (HxOverrides().default).cca(this.text,this.layoutGroups[j].startIndex - 1) == 32) {
									++lineLength;
								}
							} else {
								break;
							}
						}
						if(lineLength > 1) {
							group = this.layoutGroups[i + lineLength - 1];
							var endChar = (HxOverrides().default).cca(this.text,group.endIndex);
							if(group.endIndex < this.text.length && endChar != 10 && endChar != 13) {
								offsetX = (totalWidth - this.lineWidths[lineIndex]) / (lineLength - 1);
								lineMeasurementsDirty = true;
								var j1 = 1;
								while(true) {
									this.layoutGroups[i + j1].offsetX += offsetX * j1;
									if(!(++j1 < lineLength)) {
										break;
									}
								}
							}
						}
					}
					offsetX = 0;
					break;
				case "right":
					if(this.lineWidths[lineIndex] < totalWidth) {
						offsetX = Math.round(totalWidth - this.lineWidths[lineIndex]);
					} else {
						offsetX = 0;
					}
					break;
				default:
					offsetX = 0;
				}
			}
			if(offsetX > 0) {
				group.offsetX += offsetX;
			}
		}
		if(lineMeasurementsDirty) {
			this.getLineMeasurements();
		}
	},
	trimText: function(value) {
		if(value == null) {
			return value;
		}
		if(this.maxChars > 0 && value.length > this.maxChars) {
			value = (HxOverrides().default).substr(value,0,this.maxChars);
		}
		return value;
	},
	update: function() {
		if(this.text == null || this.textFormatRanges.get_length() == 0) {
			this.lineAscents.set_length(0);
			this.lineBreaks.set_length(0);
			this.lineDescents.set_length(0);
			this.lineLeadings.set_length(0);
			this.lineHeights.set_length(0);
			this.lineWidths.set_length(0);
			this.layoutGroups.set_length(0);
			this.textWidth = 0;
			this.textHeight = 0;
			this.numLines = 1;
			this.maxScrollH = 0;
			this.maxScrollV = 1;
			this.bottomScrollV = 1;
		} else {
			this.getLayoutGroups();
			this.getLineMeasurements();
			this.setTextAlignment();
		}
		this.getBounds();
	},
	get_bottomScrollV: function() {
		if(this.numLines == 1 || this.lineHeights == null) {
			return 1;
		} else {
			var tempHeight = 0.0;
			var ret = this.lineHeights.get_length();
			var _g = ret - 1;
			var _g1 = this.lineHeights.get_length();
			while(_g < _g1) {
				var i = _g++;
				if(tempHeight + this.lineHeights[i] <= this.height - 4) {
					tempHeight += this.lineHeights[i];
				} else {
					ret = i;
					break;
				}
			}
			if(ret < 1) {
				return 1;
			}
			return ret;
		}
	},
	get_maxScrollV: function() {
		if(this.numLines == 1 || this.lineHeights == null) {
			return 1;
		} else {
			var i = this.numLines - 1;
			var tempHeight = 0.0;
			if((HxOverrides().default).cca(this.text,this.text.length - 1) == 10) {
				--i;
			}
			var j = i;
			while(i >= 0) if(tempHeight + this.lineHeights[i] <= this.height - 4) {
				tempHeight += this.lineHeights[i];
				--i;
			} else {
				break;
			}
			if(i == j) {
				i = this.numLines;
			} else {
				i += 2;
			}
			if(i < 1) {
				return 1;
			}
			return i;
		}
	},
	set_restrict: function(value) {
		if(this.restrict == value) {
			return this.restrict;
		}
		this.restrict = value;
		if(this.restrict == null || this.restrict.length == 0) {
			this.__restrictRegexp = null;
		} else {
			this.__restrictRegexp = this.createRestrictRegexp(value);
		}
		return this.restrict;
	},
	get_scrollV: function() {
		if(this.numLines == 1 || this.lineHeights == null) {
			return 1;
		}
		var max = this.get_maxScrollV();
		if(this.scrollV > max) {
			return max;
		}
		return this.scrollV;
	},
	set_scrollV: function(value) {
		if(value < 1) {
			value = 1;
		}
		return this.scrollV = value;
	},
	set_text: function(value) {
		return this.text = value;
	}
};
TextEngine.prototype.__class__ = TextEngine.prototype.constructor = $hxClasses["openfl._internal.text.TextEngine"] = TextEngine;

// Init



// Statics

TextEngine.findFont = function(name) {
	return (openfl_text_Font().default).__fontByName.get(name);
}
TextEngine.findFontVariant = function(format) {
	var fontName = format.font;
	var bold = format.bold;
	var italic = format.italic;
	if(fontName == null) {
		fontName = "_serif";
	}
	var fontNamePrefix = (StringTools().default).replace((StringTools().default).replace(fontName," Normal","")," Regular","");
	if(bold && italic && (openfl_text_Font().default).__fontByName.exists(fontNamePrefix + " Bold Italic")) {
		return TextEngine.findFont(fontNamePrefix + " Bold Italic");
	} else if(bold && (openfl_text_Font().default).__fontByName.exists(fontNamePrefix + " Bold")) {
		return TextEngine.findFont(fontNamePrefix + " Bold");
	} else if(italic && (openfl_text_Font().default).__fontByName.exists(fontNamePrefix + " Italic")) {
		return TextEngine.findFont(fontNamePrefix + " Italic");
	}
	return TextEngine.findFont(fontName);
}
TextEngine.getFormatHeight = function(format) {
	var ascent;
	var descent;
	TextEngine.__context.font = TextEngine.getFont(format);
	var font = TextEngine.getFontInstance(format);
	if(format.__ascent != null) {
		ascent = format.size * format.__ascent;
		descent = format.size * format.__descent;
	} else if(font != null && font.unitsPerEM != 0) {
		ascent = font.ascender / font.unitsPerEM * format.size;
		descent = Math.abs(font.descender / font.unitsPerEM * format.size);
	} else {
		ascent = format.size;
		descent = format.size * 0.185;
	}
	var leading = format.leading;
	return ascent + descent + leading;
}
TextEngine.getFont = function(format) {
	var fontName = format.font;
	var bold = format.bold;
	var italic = format.italic;
	if(fontName == null) {
		fontName = "_serif";
	}
	var fontNamePrefix = (StringTools().default).replace((StringTools().default).replace(fontName," Normal","")," Regular","");
	if(bold && italic && (openfl_text_Font().default).__fontByName.exists(fontNamePrefix + " Bold Italic")) {
		fontName = fontNamePrefix + " Bold Italic";
		bold = false;
		italic = false;
	} else if(bold && (openfl_text_Font().default).__fontByName.exists(fontNamePrefix + " Bold")) {
		fontName = fontNamePrefix + " Bold";
		bold = false;
	} else if(italic && (openfl_text_Font().default).__fontByName.exists(fontNamePrefix + " Italic")) {
		fontName = fontNamePrefix + " Italic";
		italic = false;
	} else {
		if(bold && (fontName.indexOf(" Bold ") > -1 || (StringTools().default).endsWith(fontName," Bold"))) {
			bold = false;
		}
		if(italic && (fontName.indexOf(" Italic ") > -1 || (StringTools().default).endsWith(fontName," Italic"))) {
			italic = false;
		}
	}
	var font = italic ? "italic " : "normal ";
	font += "normal ";
	font += bold ? "bold " : "normal ";
	font += format.size + "px";
	font += "/" + (format.leading + format.size + 3) + "px ";
	var font1;
	switch(fontName) {
	case "_sans":
		font1 = "sans-serif";
		break;
	case "_serif":
		font1 = "serif";
		break;
	case "_typewriter":
		font1 = "monospace";
		break;
	default:
		font1 = "'" + new (EReg().default)("^[\\s'\"]+(.*)[\\s'\"]+$","").replace(fontName,"$1") + "'";
	}
	font += "" + font1;
	return font;
}
TextEngine.getFontInstance = function(format) {
	return TextEngine.findFontVariant(format);
}
TextEngine.__meta__ = { obj : { SuppressWarnings : ["checkstyle:FieldDocComment"]}, fields : { __cairoFont : { SuppressWarnings : ["checkstyle:Dynamic"]}}}
TextEngine.GUTTER = 2
TextEngine.UTF8_TAB = 9
TextEngine.UTF8_ENDLINE = 10
TextEngine.UTF8_SPACE = 32
TextEngine.UTF8_HYPHEN = 45
TextEngine.__defaultFonts = new (haxe_ds_StringMap().default)()

// Export

exports.default = TextEngine;