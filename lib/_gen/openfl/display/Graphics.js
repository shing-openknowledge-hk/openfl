// Class: openfl.display.Graphics

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

var __map_reserved = {};

// Imports

var $hxClasses = require("./../../hxClasses_stub").default;
var $hxEnums = require("./../../hxEnums_stub").default;
var $import = require("./../../import_stub").default;
function openfl__$Vector_VectorIterator() {return require("./../../openfl/_Vector/VectorIterator");}
function openfl_geom_Rectangle() {return require("./../../openfl/geom/Rectangle");}
function openfl_geom_Matrix() {return require("./../../openfl/geom/Matrix");}
function Std() {return require("./../../Std");}
function js__$Boot_HaxeError() {return require("./../../js/_Boot/HaxeError");}
function openfl_errors_ArgumentError() {return require("./../../openfl/errors/ArgumentError");}
function openfl__$Vector_Vector_$Impl_$() {return require("./../../openfl/_Vector/Vector_Impl_");}
function openfl__$internal_renderer_canvas_CanvasGraphics() {return require("./../../openfl/_internal/renderer/canvas/CanvasGraphics");}
function openfl__$internal_renderer_DrawCommandReader() {return require("./../../openfl/_internal/renderer/DrawCommandReader");}
function openfl_display_GraphicsPath() {return require("./../../openfl/display/GraphicsPath");}
function openfl_display_GraphicsBitmapFill() {return require("./../../openfl/display/GraphicsBitmapFill");}
function openfl_display_GraphicsSolidFill() {return require("./../../openfl/display/GraphicsSolidFill");}
function openfl_display_GraphicsGradientFill() {return require("./../../openfl/display/GraphicsGradientFill");}
function openfl_display_GraphicsEndFill() {return require("./../../openfl/display/GraphicsEndFill");}
function openfl_display_GraphicsStroke() {return require("./../../openfl/display/GraphicsStroke");}
function openfl__$internal_renderer_DrawCommandBuffer() {return require("./../../openfl/_internal/renderer/DrawCommandBuffer");}
function haxe_ds_List() {return require("./../../haxe/ds/List");}
function lime_utils_ObjectPool() {return require("./../../lime/utils/ObjectPool");}
function openfl__$internal_renderer_ShaderBuffer() {return require("./../../openfl/_internal/renderer/ShaderBuffer");}

// Constructor

var Graphics = function(owner) {
	this.__dirty = true;
	this.__owner = owner;
	this.__commands = new (openfl__$internal_renderer_DrawCommandBuffer().default)();
	this.__strokePadding = 0;
	this.__positionX = 0;
	this.__positionY = 0;
	this.__renderTransform = new (openfl_geom_Matrix().default)();
	this.__usedShaderBuffers = new (haxe_ds_List().default)();
	this.__worldTransform = new (openfl_geom_Matrix().default)();
	this.__width = 0;
	this.__height = 0;
	this.__shaderBufferPool = new (lime_utils_ObjectPool().default)(function() {
		return new (openfl__$internal_renderer_ShaderBuffer().default)();
	});
	this.moveTo(0,0);
}

// Meta

Graphics.__name__ = "openfl.display.Graphics";
Graphics.__isInterface__ = false;
Graphics.prototype = {
	beginBitmapFill: function(bitmap,matrix,repeat,smooth) {
		if(smooth == null) {
			smooth = false;
		}
		if(repeat == null) {
			repeat = true;
		}
		this.__commands.beginBitmapFill(bitmap,matrix != null ? matrix.clone() : null,repeat,smooth);
		this.__visible = true;
	},
	beginFill: function(color,alpha) {
		if(alpha == null) {
			alpha = 1;
		}
		if(color == null) {
			color = 0;
		}
		this.__commands.beginFill(color & 16777215,alpha);
		if(alpha > 0) {
			this.__visible = true;
		}
	},
	beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		if(focalPointRatio == null) {
			focalPointRatio = 0;
		}
		if(interpolationMethod == null) {
			interpolationMethod = "rgb";
		}
		if(spreadMethod == null) {
			spreadMethod = "pad";
		}
		if(colors == null || colors.length == 0) {
			return;
		}
		if(alphas == null) {
			alphas = [];
			var _g = 0;
			var _g1 = colors.length;
			while(_g < _g1) {
				var i = _g++;
				alphas.push(1);
			}
		}
		if(ratios == null) {
			ratios = [];
			var _g2 = 0;
			var _g11 = colors.length;
			while(_g2 < _g11) {
				var i1 = _g2++;
				ratios.push(Math.ceil(i1 / colors.length * 255));
			}
		}
		if(alphas.length < colors.length || ratios.length < colors.length) {
			return;
		}
		this.__commands.beginGradientFill(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
		var _g3 = 0;
		while(_g3 < alphas.length) {
			var alpha = alphas[_g3];
			++_g3;
			if(alpha > 0) {
				this.__visible = true;
				break;
			}
		}
	},
	beginShaderFill: function(shader,matrix) {
		if(shader != null) {
			var shaderBuffer = this.__shaderBufferPool.get();
			this.__usedShaderBuffers.add(shaderBuffer);
			shaderBuffer.update(shader);
			this.__commands.beginShaderFill(shaderBuffer);
		}
	},
	clear: function() {
		var shaderBuffer = this.__usedShaderBuffers.iterator();
		while(shaderBuffer.hasNext()) {
			var shaderBuffer1 = shaderBuffer.next();
			this.__shaderBufferPool.release(shaderBuffer1);
		}
		this.__usedShaderBuffers.clear();
		this.__commands.clear();
		this.__strokePadding = 0;
		if(this.__bounds != null) {
			this.set___dirty(true);
			this.__transformDirty = true;
			this.__bounds = null;
		}
		this.__visible = false;
		this.__positionX = 0;
		this.__positionY = 0;
		this.moveTo(0,0);
	},
	copyFrom: function(sourceGraphics) {
		this.__bounds = sourceGraphics.__bounds != null ? sourceGraphics.__bounds.clone() : null;
		this.__commands = sourceGraphics.__commands.copy();
		this.set___dirty(true);
		this.__strokePadding = sourceGraphics.__strokePadding;
		this.__positionX = sourceGraphics.__positionX;
		this.__positionY = sourceGraphics.__positionY;
		this.__transformDirty = true;
		this.__visible = sourceGraphics.__visible;
	},
	cubicCurveTo: function(controlX1,controlY1,controlX2,controlY2,anchorX,anchorY) {
		this.__inflateBounds(this.__positionX - this.__strokePadding,this.__positionY - this.__strokePadding);
		this.__inflateBounds(this.__positionX + this.__strokePadding,this.__positionY + this.__strokePadding);
		var ix1 = anchorX;
		var ix2 = anchorX;
		if(!((controlX1 < anchorX && controlX1 > this.__positionX || controlX1 > anchorX && controlX1 < this.__positionX) && (controlX2 < anchorX && controlX2 > this.__positionX || controlX2 > anchorX && controlX2 < this.__positionX))) {
			var u = 2 * this.__positionX - 4 * controlX1 + 2 * controlX2;
			var v = controlX1 - this.__positionX;
			var w = -this.__positionX + 3 * controlX1 + anchorX - 3 * controlX2;
			var t1 = (-u + Math.sqrt(u * u - 4 * v * w)) / (2 * w);
			var t2 = (-u - Math.sqrt(u * u - 4 * v * w)) / (2 * w);
			if(t1 > 0 && t1 < 1) {
				ix1 = this.__calculateBezierCubicPoint(t1,this.__positionX,controlX1,controlX2,anchorX);
			}
			if(t2 > 0 && t2 < 1) {
				ix2 = this.__calculateBezierCubicPoint(t2,this.__positionX,controlX1,controlX2,anchorX);
			}
		}
		var iy1 = anchorY;
		var iy2 = anchorY;
		if(!((controlY1 < anchorY && controlY1 > this.__positionX || controlY1 > anchorY && controlY1 < this.__positionX) && (controlY2 < anchorY && controlY2 > this.__positionX || controlY2 > anchorY && controlY2 < this.__positionX))) {
			var u1 = 2 * this.__positionX - 4 * controlY1 + 2 * controlY2;
			var v1 = controlY1 - this.__positionX;
			var w1 = -this.__positionX + 3 * controlY1 + anchorY - 3 * controlY2;
			var t11 = (-u1 + Math.sqrt(u1 * u1 - 4 * v1 * w1)) / (2 * w1);
			var t21 = (-u1 - Math.sqrt(u1 * u1 - 4 * v1 * w1)) / (2 * w1);
			if(t11 > 0 && t11 < 1) {
				iy1 = this.__calculateBezierCubicPoint(t11,this.__positionX,controlY1,controlY2,anchorY);
			}
			if(t21 > 0 && t21 < 1) {
				iy2 = this.__calculateBezierCubicPoint(t21,this.__positionX,controlY1,controlY2,anchorY);
			}
		}
		this.__inflateBounds(ix1 - this.__strokePadding,iy1 - this.__strokePadding);
		this.__inflateBounds(ix1 + this.__strokePadding,iy1 + this.__strokePadding);
		this.__inflateBounds(ix2 - this.__strokePadding,iy2 - this.__strokePadding);
		this.__inflateBounds(ix2 + this.__strokePadding,iy2 + this.__strokePadding);
		this.__positionX = anchorX;
		this.__positionY = anchorY;
		this.__inflateBounds(this.__positionX - this.__strokePadding,this.__positionY - this.__strokePadding);
		this.__inflateBounds(this.__positionX + this.__strokePadding,this.__positionY + this.__strokePadding);
		this.__commands.cubicCurveTo(controlX1,controlY1,controlX2,controlY2,anchorX,anchorY);
		this.set___dirty(true);
	},
	curveTo: function(controlX,controlY,anchorX,anchorY) {
		this.__inflateBounds(this.__positionX - this.__strokePadding,this.__positionY - this.__strokePadding);
		this.__inflateBounds(this.__positionX + this.__strokePadding,this.__positionY + this.__strokePadding);
		var ix;
		var iy;
		if(controlX < anchorX && controlX > this.__positionX || controlX > anchorX && controlX < this.__positionX) {
			ix = anchorX;
		} else {
			var tx = (this.__positionX - controlX) / (this.__positionX - 2 * controlX + anchorX);
			ix = this.__calculateBezierQuadPoint(tx,this.__positionX,controlX,anchorX);
		}
		if(controlY < anchorY && controlY > this.__positionY || controlY > anchorY && controlY < this.__positionY) {
			iy = anchorY;
		} else {
			var ty = (this.__positionY - controlY) / (this.__positionY - 2 * controlY + anchorY);
			iy = this.__calculateBezierQuadPoint(ty,this.__positionY,controlY,anchorY);
		}
		this.__inflateBounds(ix - this.__strokePadding,iy - this.__strokePadding);
		this.__inflateBounds(ix + this.__strokePadding,iy + this.__strokePadding);
		this.__positionX = anchorX;
		this.__positionY = anchorY;
		this.__commands.curveTo(controlX,controlY,anchorX,anchorY);
		this.set___dirty(true);
	},
	drawCircle: function(x,y,radius) {
		if(radius <= 0) {
			return;
		}
		this.__inflateBounds(x - radius - this.__strokePadding,y - radius - this.__strokePadding);
		this.__inflateBounds(x + radius + this.__strokePadding,y + radius + this.__strokePadding);
		this.__commands.drawCircle(x,y,radius);
		this.set___dirty(true);
	},
	drawEllipse: function(x,y,width,height) {
		if(width <= 0 || height <= 0) {
			return;
		}
		this.__inflateBounds(x - this.__strokePadding,y - this.__strokePadding);
		this.__inflateBounds(x + width + this.__strokePadding,y + height + this.__strokePadding);
		this.__commands.drawEllipse(x,y,width,height);
		this.set___dirty(true);
	},
	drawGraphicsData: function(graphicsData) {
		var fill;
		var bitmapFill;
		var gradientFill;
		var shaderFill;
		var stroke;
		var path;
		var trianglePath;
		var quadPath;
		var graphics = new (openfl__$Vector_VectorIterator().default)(graphicsData);
		while(graphics.hasNext()) {
			var graphics1 = graphics.next();
			switch(graphics1.__graphicsDataType) {
			case 0:
				stroke = graphics1;
				if(stroke.fill != null) {
					var thickness = stroke.thickness;
					if(isNaN(thickness)) {
						thickness = null;
					}
					switch(stroke.fill.__graphicsFillType) {
					case 0:
						fill = stroke.fill;
						this.lineStyle(thickness,fill.color,fill.alpha,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit);
						break;
					case 1:
						gradientFill = stroke.fill;
						this.lineStyle(thickness,0,1,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit);
						this.lineGradientStyle(gradientFill.type,gradientFill.colors,gradientFill.alphas,gradientFill.ratios,gradientFill.matrix,gradientFill.spreadMethod,gradientFill.interpolationMethod,gradientFill.focalPointRatio);
						break;
					case 2:
						bitmapFill = stroke.fill;
						this.lineStyle(thickness,0,1,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit);
						this.lineBitmapStyle(bitmapFill.bitmapData,bitmapFill.matrix,bitmapFill.repeat,bitmapFill.smooth);
						break;
					default:
					}
				} else {
					this.lineStyle();
				}
				break;
			case 1:
				fill = graphics1;
				this.beginFill(fill.color,fill.alpha);
				break;
			case 2:
				gradientFill = graphics1;
				this.beginGradientFill(gradientFill.type,gradientFill.colors,gradientFill.alphas,gradientFill.ratios,gradientFill.matrix,gradientFill.spreadMethod,gradientFill.interpolationMethod,gradientFill.focalPointRatio);
				break;
			case 3:
				path = graphics1;
				this.drawPath(path.commands,path.data,path.winding);
				break;
			case 4:
				bitmapFill = graphics1;
				this.beginBitmapFill(bitmapFill.bitmapData,bitmapFill.matrix,bitmapFill.repeat,bitmapFill.smooth);
				break;
			case 5:
				this.endFill();
				break;
			case 6:
				quadPath = graphics1;
				this.drawQuads(quadPath.rects,quadPath.indices,quadPath.transforms);
				break;
			case 7:
				trianglePath = graphics1;
				this.drawTriangles(trianglePath.vertices,trianglePath.indices,trianglePath.uvtData,trianglePath.culling);
				break;
			case 8:
				shaderFill = graphics1;
				this.beginShaderFill(shaderFill.shader,shaderFill.matrix);
				break;
			}
		}
	},
	drawPath: function(commands,data,winding) {
		if(winding == null) {
			winding = "evenOdd";
		}
		var dataIndex = 0;
		if(winding == "nonZero") {
			this.__commands.windingNonZero();
		}
		var command = new (openfl__$Vector_VectorIterator().default)(commands);
		_hx_loop1: while(command.hasNext()) {
			var command1 = command.next();
			switch(command1) {
			case 1:
				this.moveTo(data[dataIndex],data[dataIndex + 1]);
				dataIndex += 2;
				break;
			case 2:
				this.lineTo(data[dataIndex],data[dataIndex + 1]);
				dataIndex += 2;
				break;
			case 3:
				this.curveTo(data[dataIndex],data[dataIndex + 1],data[dataIndex + 2],data[dataIndex + 3]);
				dataIndex += 4;
				break;
			case 4:
				this.moveTo(data[dataIndex + 2],data[dataIndex + 3]);
				break _hx_loop1;
			case 5:
				this.lineTo(data[dataIndex + 2],data[dataIndex + 3]);
				break _hx_loop1;
			case 6:
				this.cubicCurveTo(data[dataIndex],data[dataIndex + 1],data[dataIndex + 2],data[dataIndex + 3],data[dataIndex + 4],data[dataIndex + 5]);
				dataIndex += 6;
				break;
			default:
			}
		}
	},
	drawQuads: function(rects,indices,transforms) {
		if(rects == null) {
			return;
		}
		var hasIndices = indices != null;
		var transformABCD = false;
		var transformXY = false;
		var length = hasIndices ? indices.get_length() : Math.floor(rects.get_length() / 4);
		if(length == 0) {
			return;
		}
		if(transforms != null) {
			if(transforms.get_length() >= length * 6) {
				transformABCD = true;
				transformXY = true;
			} else if(transforms.get_length() >= length * 4) {
				transformABCD = true;
			} else if(transforms.get_length() >= length * 2) {
				transformXY = true;
			}
		}
		var tileRect = (openfl_geom_Rectangle().default).__pool.get();
		var tileTransform = (openfl_geom_Matrix().default).__pool.get();
		var minX = Infinity;
		var minY = Infinity;
		var maxX = -Infinity;
		var maxY = -Infinity;
		var ri;
		var ti;
		var _g = 0;
		var _g1 = length;
		while(_g < _g1) {
			var i = _g++;
			ri = hasIndices ? indices[i] * 4 : i * 4;
			if(ri < 0) {
				continue;
			}
			tileRect.setTo(0,0,rects[ri + 2],rects[ri + 3]);
			if(tileRect.width <= 0 || tileRect.height <= 0) {
				continue;
			}
			if(transformABCD && transformXY) {
				ti = i * 6;
				tileTransform.setTo(transforms[ti],transforms[ti + 1],transforms[ti + 2],transforms[ti + 3],transforms[ti + 4],transforms[ti + 5]);
			} else if(transformABCD) {
				ti = i * 4;
				tileTransform.setTo(transforms[ti],transforms[ti + 1],transforms[ti + 2],transforms[ti + 3],tileRect.x,tileRect.y);
			} else if(transformXY) {
				ti = i * 2;
				tileTransform.tx = transforms[ti];
				tileTransform.ty = transforms[ti + 1];
			} else {
				tileTransform.tx = tileRect.x;
				tileTransform.ty = tileRect.y;
			}
			tileRect.__transform(tileRect,tileTransform);
			if(minX > tileRect.x) {
				minX = tileRect.x;
			}
			if(minY > tileRect.y) {
				minY = tileRect.y;
			}
			if(maxX < tileRect.get_right()) {
				maxX = tileRect.get_right();
			}
			if(maxY < tileRect.get_bottom()) {
				maxY = tileRect.get_bottom();
			}
		}
		this.__inflateBounds(minX,minY);
		this.__inflateBounds(maxX,maxY);
		this.__commands.drawQuads(rects,indices,transforms);
		this.set___dirty(true);
		this.__visible = true;
		(openfl_geom_Rectangle().default).__pool.release(tileRect);
		(openfl_geom_Matrix().default).__pool.release(tileTransform);
	},
	drawRect: function(x,y,width,height) {
		if(width == 0 && height == 0) {
			return;
		}
		var xSign = width < 0 ? -1 : 1;
		var ySign = height < 0 ? -1 : 1;
		this.__inflateBounds(x - this.__strokePadding * xSign,y - this.__strokePadding * ySign);
		this.__inflateBounds(x + width + this.__strokePadding * xSign,y + height + this.__strokePadding * ySign);
		this.__commands.drawRect(x,y,width,height);
		this.set___dirty(true);
	},
	drawRoundRect: function(x,y,width,height,ellipseWidth,ellipseHeight) {
		if(width == 0 && height == 0) {
			return;
		}
		var xSign = width < 0 ? -1 : 1;
		var ySign = height < 0 ? -1 : 1;
		this.__inflateBounds(x - this.__strokePadding * xSign,y - this.__strokePadding * ySign);
		this.__inflateBounds(x + width + this.__strokePadding * xSign,y + height + this.__strokePadding * ySign);
		this.__commands.drawRoundRect(x,y,width,height,ellipseWidth,ellipseHeight);
		this.set___dirty(true);
	},
	drawRoundRectComplex: function(x,y,width,height,topLeftRadius,topRightRadius,bottomLeftRadius,bottomRightRadius) {
		if(width <= 0 || height <= 0) {
			return;
		}
		this.__inflateBounds(x - this.__strokePadding,y - this.__strokePadding);
		this.__inflateBounds(x + width + this.__strokePadding,y + height + this.__strokePadding);
		var xw = x + width;
		var yh = y + height;
		var minSize = width < height ? width * 2 : height * 2;
		topLeftRadius = topLeftRadius < minSize ? topLeftRadius : minSize;
		topRightRadius = topRightRadius < minSize ? topRightRadius : minSize;
		bottomLeftRadius = bottomLeftRadius < minSize ? bottomLeftRadius : minSize;
		bottomRightRadius = bottomRightRadius < minSize ? bottomRightRadius : minSize;
		var anchor = 1 - Math.sin(45 * (Math.PI / 180));
		var control = 1 - Math.tan(22.5 * (Math.PI / 180));
		var a = bottomRightRadius * anchor;
		var s = bottomRightRadius * control;
		this.moveTo(xw,yh - bottomRightRadius);
		this.curveTo(xw,yh - s,xw - a,yh - a);
		this.curveTo(xw - s,yh,xw - bottomRightRadius,yh);
		a = bottomLeftRadius * anchor;
		s = bottomLeftRadius * control;
		this.lineTo(x + bottomLeftRadius,yh);
		this.curveTo(x + s,yh,x + a,yh - a);
		this.curveTo(x,yh - s,x,yh - bottomLeftRadius);
		a = topLeftRadius * anchor;
		s = topLeftRadius * control;
		this.lineTo(x,y + topLeftRadius);
		this.curveTo(x,y + s,x + a,y + a);
		this.curveTo(x + s,y,x + topLeftRadius,y);
		a = topRightRadius * anchor;
		s = topRightRadius * control;
		this.lineTo(xw - topRightRadius,y);
		this.curveTo(xw - s,y,xw - a,y + a);
		this.curveTo(xw,y + s,xw,y + topRightRadius);
		this.lineTo(xw,yh - bottomRightRadius);
		this.set___dirty(true);
	},
	drawTriangles: function(vertices,indices,uvtData,culling) {
		if(culling == null) {
			culling = "none";
		}
		if(vertices == null || vertices.get_length() == 0) {
			return;
		}
		var vertLength = (Std().default).int(vertices.get_length() / 2);
		if(indices == null) {
			if(vertLength % 3 != 0) {
				throw new (js__$Boot_HaxeError().default)(new (openfl_errors_ArgumentError().default)("Not enough vertices to close a triangle."));
			}
			indices = (openfl__$Vector_Vector_$Impl_$().default)._new();
			var _g = 0;
			var _g1 = vertLength;
			while(_g < _g1) {
				var i = _g++;
				(openfl__$Vector_Vector_$Impl_$().default).push(indices,i);
			}
		}
		if(culling == null) {
			culling = "none";
		}
		var x;
		var y;
		var minX = Infinity;
		var minY = Infinity;
		var maxX = -Infinity;
		var maxY = -Infinity;
		var _g2 = 0;
		var _g11 = vertLength;
		while(_g2 < _g11) {
			var i1 = _g2++;
			x = vertices[i1 * 2];
			y = vertices[i1 * 2 + 1];
			if(minX > x) {
				minX = x;
			}
			if(minY > y) {
				minY = y;
			}
			if(maxX < x) {
				maxX = x;
			}
			if(maxY < y) {
				maxY = y;
			}
		}
		this.__inflateBounds(minX,minY);
		this.__inflateBounds(maxX,maxY);
		this.__commands.drawTriangles(vertices,indices,uvtData,culling);
		this.set___dirty(true);
		this.__visible = true;
	},
	endFill: function() {
		this.__commands.endFill();
	},
	lineBitmapStyle: function(bitmap,matrix,repeat,smooth) {
		if(smooth == null) {
			smooth = false;
		}
		if(repeat == null) {
			repeat = true;
		}
		this.__commands.lineBitmapStyle(bitmap,matrix != null ? matrix.clone() : null,repeat,smooth);
	},
	lineGradientStyle: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		if(focalPointRatio == null) {
			focalPointRatio = 0;
		}
		if(interpolationMethod == null) {
			interpolationMethod = "rgb";
		}
		if(spreadMethod == null) {
			spreadMethod = "pad";
		}
		this.__commands.lineGradientStyle(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	},
	lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		if(miterLimit == null) {
			miterLimit = 3;
		}
		if(scaleMode == null) {
			scaleMode = "normal";
		}
		if(pixelHinting == null) {
			pixelHinting = false;
		}
		if(alpha == null) {
			alpha = 1;
		}
		if(color == null) {
			color = 0;
		}
		if(thickness != null) {
			if(joints == "miter") {
				if(thickness > this.__strokePadding) {
					this.__strokePadding = thickness;
				}
			} else if(thickness / 2 > this.__strokePadding) {
				this.__strokePadding = thickness / 2;
			}
		}
		this.__commands.lineStyle(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit);
		if(thickness != null) {
			this.__visible = true;
		}
	},
	lineTo: function(x,y) {
		if(!isFinite(x) || !isFinite(y)) {
			return;
		}
		this.__inflateBounds(this.__positionX - this.__strokePadding,this.__positionY - this.__strokePadding);
		this.__inflateBounds(this.__positionX + this.__strokePadding,this.__positionY + this.__strokePadding);
		this.__positionX = x;
		this.__positionY = y;
		this.__inflateBounds(this.__positionX - this.__strokePadding,this.__positionY - this.__strokePadding);
		this.__inflateBounds(this.__positionX + this.__strokePadding * 2,this.__positionY + this.__strokePadding);
		this.__commands.lineTo(x,y);
		this.set___dirty(true);
	},
	moveTo: function(x,y) {
		this.__positionX = x;
		this.__positionY = y;
		this.__commands.moveTo(x,y);
	},
	overrideBlendMode: function(blendMode) {
		if(blendMode == null) {
			blendMode = "normal";
		}
		this.__commands.overrideBlendMode(blendMode);
	},
	readGraphicsData: function(recurse) {
		if(recurse == null) {
			recurse = true;
		}
		var graphicsData = (openfl__$Vector_Vector_$Impl_$().default)._new();
		this.__owner.__readGraphicsData(graphicsData,recurse);
		return graphicsData;
	},
	__calculateBezierCubicPoint: function(t,p1,p2,p3,p4) {
		var iT = 1 - t;
		return p1 * (iT * iT * iT) + 3 * p2 * t * (iT * iT) + 3 * p3 * iT * (t * t) + p4 * (t * t * t);
	},
	__calculateBezierQuadPoint: function(t,p1,p2,p3) {
		var iT = 1 - t;
		return iT * iT * p1 + 2 * iT * t * p2 + t * t * p3;
	},
	__cleanup: function() {
		if(this.__bounds != null && this.__canvas != null) {
			this.set___dirty(true);
			this.__transformDirty = true;
		}
		this.__bitmap = null;
		this.__canvas = null;
		this.__context = null;
	},
	__getBounds: function(rect,matrix) {
		if(this.__bounds == null) {
			return;
		}
		var bounds = (openfl_geom_Rectangle().default).__pool.get();
		this.__bounds.__transform(bounds,matrix);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
		(openfl_geom_Rectangle().default).__pool.release(bounds);
	},
	__hitTest: function(x,y,shapeFlag,matrix) {
		if(this.__bounds == null) {
			return false;
		}
		var px = matrix.__transformInverseX(x,y);
		var py = matrix.__transformInverseY(x,y);
		if(px > this.__bounds.x && py > this.__bounds.y && this.__bounds.contains(px,py)) {
			if(shapeFlag) {
				return (openfl__$internal_renderer_canvas_CanvasGraphics().default).hitTest(this,px,py);
			}
			return true;
		}
		return false;
	},
	__inflateBounds: function(x,y) {
		if(this.__bounds == null) {
			this.__bounds = new (openfl_geom_Rectangle().default)(x,y,0,0);
			this.__transformDirty = true;
			return;
		}
		if(x < this.__bounds.x) {
			this.__bounds.width += this.__bounds.x - x;
			this.__bounds.x = x;
			this.__transformDirty = true;
		}
		if(y < this.__bounds.y) {
			this.__bounds.height += this.__bounds.y - y;
			this.__bounds.y = y;
			this.__transformDirty = true;
		}
		if(x > this.__bounds.x + this.__bounds.width) {
			this.__bounds.width = x - this.__bounds.x;
		}
		if(y > this.__bounds.y + this.__bounds.height) {
			this.__bounds.height = y - this.__bounds.y;
		}
	},
	__readGraphicsData: function(graphicsData) {
		var data = new (openfl__$internal_renderer_DrawCommandReader().default)(this.__commands);
		var path = null;
		var stroke;
		var _g = 0;
		var _g1 = this.__commands.types;
		while(_g < _g1.length) {
			var type = _g1[_g];
			++_g;
			switch(type._hx_index) {
			case 4:case 5:case 6:case 7:case 9:case 10:case 17:case 18:
				if(path == null) {
					path = new (openfl_display_GraphicsPath().default)();
				}
				break;
			default:
				if(path != null) {
					(openfl__$Vector_Vector_$Impl_$().default).push(graphicsData,path);
					path = null;
				}
			}
			switch(type._hx_index) {
			case 0:
				var c = data.readBeginBitmapFill();
				(openfl__$Vector_Vector_$Impl_$().default).push(graphicsData,new (openfl_display_GraphicsBitmapFill().default)(c.obj(0),c.obj(1),c.bool(0),c.bool(1)));
				break;
			case 1:
				var c1 = data.readBeginFill();
				(openfl__$Vector_Vector_$Impl_$().default).push(graphicsData,new (openfl_display_GraphicsSolidFill().default)(c1.int(0),1));
				break;
			case 2:
				var c2 = data.readBeginGradientFill();
				(openfl__$Vector_Vector_$Impl_$().default).push(graphicsData,new (openfl_display_GraphicsGradientFill().default)(c2.obj(0),c2.iArr(0),c2.fArr(0),c2.iArr(1),c2.obj(1),c2.obj(2),c2.obj(3),c2.float(0)));
				break;
			case 3:
				break;
			case 4:
				var c3 = data.readCubicCurveTo();
				path.cubicCurveTo(c3.float(0),c3.float(1),c3.float(2),c3.float(3),c3.float(4),c3.float(5));
				break;
			case 5:
				var c4 = data.readCurveTo();
				path.curveTo(c4.float(0),c4.float(1),c4.float(2),c4.float(3));
				break;
			case 6:
				var c5 = data.readDrawCircle();
				path.__drawCircle(c5.float(0),c5.float(1),c5.float(2));
				break;
			case 7:
				var c6 = data.readDrawEllipse();
				path.__drawEllipse(c6.float(0),c6.float(1),c6.float(2),c6.float(3));
				break;
			case 9:
				var c7 = data.readDrawRect();
				path.__drawRect(c7.float(0),c7.float(1),c7.float(2),c7.float(3));
				break;
			case 10:
				var c8 = data.readDrawRoundRect();
				path.__drawRoundRect(c8.float(0),c8.float(1),c8.float(2),c8.float(3),c8.float(4),c8.obj(0) != null ? c8.obj(0) : c8.float(4));
				break;
			case 13:
				data.readEndFill();
				(openfl__$Vector_Vector_$Impl_$().default).push(graphicsData,new (openfl_display_GraphicsEndFill().default)());
				break;
			case 14:
				var c9 = data.readLineBitmapStyle();
				path = null;
				break;
			case 15:
				var c10 = data.readLineGradientStyle();
				break;
			case 16:
				var c11 = data.readLineStyle();
				stroke = new (openfl_display_GraphicsStroke().default)(c11.obj(0),c11.bool(0),c11.obj(1),c11.obj(2),c11.obj(3),c11.float(1));
				stroke.fill = new (openfl_display_GraphicsSolidFill().default)(c11.int(0),c11.float(0));
				(openfl__$Vector_Vector_$Impl_$().default).push(graphicsData,stroke);
				break;
			case 17:
				var c12 = data.readLineTo();
				path.lineTo(c12.float(0),c12.float(1));
				break;
			case 18:
				var c13 = data.readMoveTo();
				path.moveTo(c13.float(0),c13.float(1));
				break;
			default:
				data.skip(type);
			}
		}
		if(path != null) {
			(openfl__$Vector_Vector_$Impl_$().default).push(graphicsData,path);
		}
	},
	__update: function(displayMatrix) {
		if(this.__bounds == null || this.__bounds.width <= 0 || this.__bounds.height <= 0) {
			return;
		}
		var parentTransform = this.__owner.__renderTransform;
		var scaleX = 1.0;
		var scaleY = 1.0;
		if(parentTransform != null) {
			if(parentTransform.b == 0) {
				scaleX = Math.abs(parentTransform.a);
			} else {
				scaleX = Math.sqrt(parentTransform.a * parentTransform.a + parentTransform.b * parentTransform.b);
			}
			if(parentTransform.c == 0) {
				scaleY = Math.abs(parentTransform.d);
			} else {
				scaleY = Math.sqrt(parentTransform.c * parentTransform.c + parentTransform.d * parentTransform.d);
			}
		} else {
			return;
		}
		if(displayMatrix != null) {
			if(displayMatrix.b == 0) {
				scaleX *= displayMatrix.a;
			} else {
				scaleX *= Math.sqrt(displayMatrix.a * displayMatrix.a + displayMatrix.b * displayMatrix.b);
			}
			if(displayMatrix.c == 0) {
				scaleY *= displayMatrix.d;
			} else {
				scaleY *= Math.sqrt(displayMatrix.c * displayMatrix.c + displayMatrix.d * displayMatrix.d);
			}
		}
		var width = this.__bounds.width * scaleX;
		var height = this.__bounds.height * scaleY;
		if(width < 1 || height < 1) {
			if(this.__width >= 1 || this.__height >= 1) {
				this.set___dirty(true);
			}
			this.__width = 0;
			this.__height = 0;
			return;
		}
		if(Graphics.maxTextureWidth != null && width > Graphics.maxTextureWidth) {
			width = Graphics.maxTextureWidth;
			scaleX = Graphics.maxTextureWidth / this.__bounds.width;
		}
		if(Graphics.maxTextureWidth != null && height > Graphics.maxTextureHeight) {
			height = Graphics.maxTextureHeight;
			scaleY = Graphics.maxTextureHeight / this.__bounds.height;
		}
		this.__renderTransform.a = width / this.__bounds.width;
		this.__renderTransform.d = height / this.__bounds.height;
		var inverseA = 1 / this.__renderTransform.a;
		var inverseD = 1 / this.__renderTransform.d;
		this.__worldTransform.a = inverseA * parentTransform.a;
		this.__worldTransform.b = inverseA * parentTransform.b;
		this.__worldTransform.c = inverseD * parentTransform.c;
		this.__worldTransform.d = inverseD * parentTransform.d;
		var x = this.__bounds.x;
		var y = this.__bounds.y;
		var tx = x * parentTransform.a + y * parentTransform.c + parentTransform.tx;
		var ty = x * parentTransform.b + y * parentTransform.d + parentTransform.ty;
		this.__worldTransform.tx = Math.floor(tx);
		this.__worldTransform.ty = Math.floor(ty);
		this.__renderTransform.tx = this.__worldTransform.__transformInverseX(tx,ty);
		this.__renderTransform.ty = this.__worldTransform.__transformInverseY(tx,ty);
		var newWidth = Math.ceil(width + 1.0);
		var newHeight = Math.ceil(height + 1.0);
		if(newWidth != this.__width || newHeight != this.__height) {
			this.set___dirty(true);
		}
		this.__width = newWidth;
		this.__height = newHeight;
	},
	set___dirty: function(value) {
		if(value && this.__owner != null) {
			this.__owner.__setRenderDirty();
		}
		if(value) {
			this.__softwareDirty = true;
			this.__hardwareDirty = true;
		}
		return this.__dirty = value;
	}
};
Graphics.prototype.__class__ = Graphics.prototype.constructor = $hxClasses["openfl.display.Graphics"] = Graphics;

// Init



// Statics


Graphics.__meta__ = { fields : { overrideBlendMode : { SuppressWarnings : ["checkstyle:FieldDocComment"]}}}
Graphics.maxTextureHeight = null
Graphics.maxTextureWidth = null

// Export

exports.default = Graphics;