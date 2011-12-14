/*
 * jQuery Backstretch
 * Version 1.2.4
 * http://srobbin.com/jquery-plugins/jquery-backstretch/
 *
 * Add a dynamically-resized background image to the page
 *
 * Copyright (c) 2011 Scott Robbin (srobbin.com)
 * Dual licensed under the MIT and GPL licenses.
*/
(function(a){a.backstretch=function(b,c,d){function e(b){try{n={left:0,top:0},k=i.width(),l=k/j,l>=i.height()?(m=(l-i.height())/2,h.centeredY&&a.extend(n,{top:"-"+m+"px"})):(l=i.height(),k=l*j,m=(k-i.width())/2,h.centeredX&&a.extend(n,{left:"-"+m+"px"})),a("#backstretch, #backstretch img").width(k).height(l).filter("img").css(n)}catch(c){}typeof b=="function"&&b()}var f={centeredX:!0,centeredY:!0,speed:0},g=a("#backstretch"),h=g.data("settings")||f;g.data("settings");var i="onorientationchange"in window?a(document):a(window),j,k,l,m,n;return c&&typeof c=="object"&&a.extend(h,c),c&&typeof c=="function"&&(d=c),a(document).ready(function(){if(b){var c;g.length==0?g=a("<div />").attr("id","backstretch").css({left:0,top:0,position:"fixed",overflow:"hidden",zIndex:-999999,margin:0,padding:0,height:"100%",width:"100%"}):g.find("img").addClass("deleteable"),c=a("<img />").css({position:"absolute",display:"none",margin:0,padding:0,border:"none",zIndex:-999999}).bind("load",function(b){var c=a(this),f;c.css({width:"auto",height:"auto"}),f=this.width||a(b.target).width(),b=this.height||a(b.target).height(),j=f/b,e(function(){c.fadeIn(h.speed,function(){g.find(".deleteable").remove(),typeof d=="function"&&d()})})}).appendTo(g),a("body #backstretch").length==0&&a("body").append(g),g.data("settings",h),c.attr("src",b),a(window).resize(e)}}),this}})(jQuery)