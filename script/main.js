"use strict";$(document).ready(function(){var t=25*$(".top-row").children().length;$(".top-container").css("width","".concat(t,"%")),$(".bottom-container").css("width","".concat(t,"%")),$(".button-left").on("click",function(){$(".button-left").prop("disabled",!0),$(".button-right").prop("disabled",!0);var t=$(".top-row img").last().width()+10,o=$(".bottom-row img").last().width()+10;$(".top-row").animate({left:"-"+t},400,function(){$(".button-left").prop("disabled",!1),$(".button-right").prop("disabled",!1),$(".top-row").children().eq(-1).insertBefore($(".top-row").children().eq(0)).show("slow"),$(".top-row").removeAttr("style")}),$(".bottom-row").animate({left:"-"+o},400,function(){$(".bottom-row").children().eq(-1).insertBefore($(".bottom-row").children().eq(0)).hide().show(),$(".bottom-row").removeAttr("style")})}),$(".button-right").on("click",function(){$(".button-left").prop("disabled",!0),$(".button-right").prop("disabled",!0);var t=$(".top-row img").first().width()+10,o=$(".bottom-row img").first().width()+10;$(".top-row").animate({right:"-"+t},400,function(){$(".button-left").prop("disabled",!1),$(".button-right").prop("disabled",!1),$(".top-row").children().eq(0).insertAfter($(".top-row").children().eq(-1)).hide().show(),$(".top-row").removeAttr("style")}),$(".bottom-row").animate({right:"-"+o},400,function(){$(".bottom-row").children().eq(0).insertAfter($(".bottom-row").children().eq(-1)).hide().show(),$(".bottom-row").removeAttr("style")})})});