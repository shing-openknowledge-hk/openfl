// Enum: openfl._internal.formats.swf.ShapeCommand

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../../../estr_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;

// Definition

var ShapeCommand = $hxEnums["openfl._internal.formats.swf.ShapeCommand"] = { __ename__ : "openfl._internal.formats.swf.ShapeCommand", __constructs__ : ["BeginBitmapFill","BeginFill","BeginGradientFill","CurveTo","EndFill","LineStyle","LineTo","MoveTo"]
  ,MoveTo: ($_=function(x,y) { return {_hx_index:7,x:x,y:y,__enum__:"openfl._internal.formats.swf.ShapeCommand",toString:$estr}; },$_.__params__ = ["x","y"],$_)
  ,LineTo: ($_=function(x,y) { return {_hx_index:6,x:x,y:y,__enum__:"openfl._internal.formats.swf.ShapeCommand",toString:$estr}; },$_.__params__ = ["x","y"],$_)
  ,LineStyle: ($_=function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) { return {_hx_index:5,thickness:thickness,color:color,alpha:alpha,pixelHinting:pixelHinting,scaleMode:scaleMode,caps:caps,joints:joints,miterLimit:miterLimit,__enum__:"openfl._internal.formats.swf.ShapeCommand",toString:$estr}; },$_.__params__ = ["thickness","color","alpha","pixelHinting","scaleMode","caps","joints","miterLimit"],$_)
  ,EndFill: {_hx_index:4,__enum__:"openfl._internal.formats.swf.ShapeCommand",toString:$estr}
  ,CurveTo: ($_=function(controlX,controlY,anchorX,anchorY) { return {_hx_index:3,controlX:controlX,controlY:controlY,anchorX:anchorX,anchorY:anchorY,__enum__:"openfl._internal.formats.swf.ShapeCommand",toString:$estr}; },$_.__params__ = ["controlX","controlY","anchorX","anchorY"],$_)
  ,BeginGradientFill: ($_=function(fillType,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) { return {_hx_index:2,fillType:fillType,colors:colors,alphas:alphas,ratios:ratios,matrix:matrix,spreadMethod:spreadMethod,interpolationMethod:interpolationMethod,focalPointRatio:focalPointRatio,__enum__:"openfl._internal.formats.swf.ShapeCommand",toString:$estr}; },$_.__params__ = ["fillType","colors","alphas","ratios","matrix","spreadMethod","interpolationMethod","focalPointRatio"],$_)
  ,BeginFill: ($_=function(color,alpha) { return {_hx_index:1,color:color,alpha:alpha,__enum__:"openfl._internal.formats.swf.ShapeCommand",toString:$estr}; },$_.__params__ = ["color","alpha"],$_)
  ,BeginBitmapFill: ($_=function(bitmap,matrix,repeat,smooth) { return {_hx_index:0,bitmap:bitmap,matrix:matrix,repeat:repeat,smooth:smooth,__enum__:"openfl._internal.formats.swf.ShapeCommand",toString:$estr}; },$_.__params__ = ["bitmap","matrix","repeat","smooth"],$_)
};

exports.default = ShapeCommand;