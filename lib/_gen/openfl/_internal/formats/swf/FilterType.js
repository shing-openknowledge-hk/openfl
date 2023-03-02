// Enum: openfl._internal.formats.swf.FilterType

var $global = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this

$global.Object.defineProperty(exports, "__esModule", {value: true});

// Imports

var $estr = require("./../../../../estr_stub").default;
var $hxEnums = require("./../../../../hxEnums_stub").default;

// Definition

var FilterType = $hxEnums["openfl._internal.formats.swf.FilterType"] = { __ename__ : "openfl._internal.formats.swf.FilterType", __constructs__ : ["BlurFilter","ColorMatrixFilter","DropShadowFilter","GlowFilter"]
  ,GlowFilter: ($_=function(color,alpha,blurX,blurY,strength,quality,inner,knockout) { return {_hx_index:3,color:color,alpha:alpha,blurX:blurX,blurY:blurY,strength:strength,quality:quality,inner:inner,knockout:knockout,__enum__:"openfl._internal.formats.swf.FilterType",toString:$estr}; },$_.__params__ = ["color","alpha","blurX","blurY","strength","quality","inner","knockout"],$_)
  ,DropShadowFilter: ($_=function(distance,angle,color,alpha,blurX,blurY,strength,quality,inner,knockout,hideObject) { return {_hx_index:2,distance:distance,angle:angle,color:color,alpha:alpha,blurX:blurX,blurY:blurY,strength:strength,quality:quality,inner:inner,knockout:knockout,hideObject:hideObject,__enum__:"openfl._internal.formats.swf.FilterType",toString:$estr}; },$_.__params__ = ["distance","angle","color","alpha","blurX","blurY","strength","quality","inner","knockout","hideObject"],$_)
  ,ColorMatrixFilter: ($_=function(matrix) { return {_hx_index:1,matrix:matrix,__enum__:"openfl._internal.formats.swf.FilterType",toString:$estr}; },$_.__params__ = ["matrix"],$_)
  ,BlurFilter: ($_=function(blurX,blurY,quality) { return {_hx_index:0,blurX:blurX,blurY:blurY,quality:quality,__enum__:"openfl._internal.formats.swf.FilterType",toString:$estr}; },$_.__params__ = ["blurX","blurY","quality"],$_)
};

exports.default = FilterType;