/*
 * jquery.tools 1.1.0 - The missing UI library for the Web
 * 
 * [tools.tooltip-1.1.0, tools.tooltip.dynamic-1.0.0, tools.overlay-1.1.0, tools.overlay.gallery-1.0.0, tools.expose-1.0.4]
 * 
 * Copyright (c) 2009 Tero Piirainen
 * http://flowplayer.org/tools/
 *
 * Dual licensed under MIT and GPL 2+ licenses
 * http://www.opensource.org/licenses
 * 
 * -----
 * 
 * File generated: Fri Sep 04 09:43:21 GMT+00:00 2009
 */
(function(c){c.tools=c.tools||{};c.tools.tooltip={version:"1.1.0",conf:{effect:"slide",direction:"up",bounce:false,slideOffset:10,slideInSpeed:200,slideOutSpeed:200,slideFade:!c.browser.msie,fadeOutSpeed:"fast",tip:null,predelay:0,delay:30,opacity:1,lazy:undefined,position:["top","center"],cancelDefault:true,offset:[0,0],api:false,events:{def:"mouseover,mouseout",input:"focus,blur",widget:"focus mouseover,blur mouseout"}},addEffect:function(e,g,f){b[e]=[g,f]}};var b={toggle:[function(e){var f=this.getConf();this.getTip().css({opacity:f.opacity}).show();e.call()},function(e){this.getTip().hide();e.call()}],fade:[function(e){this.getTip().fadeIn(this.getConf().fadeInSpeed,e)},function(e){this.getTip().fadeOut(this.getConf().fadeOutSpeed,e)}]};var d={up:["-","top"],down:["+","top"],left:["-","left"],right:["+","left"]};c.tools.tooltip.addEffect("slide",function(e){var g=this.getConf(),h=this.getTip(),i=g.slideFade?{opacity:g.opacity}:{},f=d[g.direction]||d.up;i[f[1]]=f[0]+"="+g.slideOffset;if(g.slideFade){h.css({opacity:0})}h.show().animate(i,g.slideInSpeed,e)},function(f){var h=this.getConf(),j=h.slideOffset,i=h.slideFade?{opacity:0}:{},g=d[h.direction]||d.up;var e=""+g[0];if(h.bounce){e=e=="+"?"-":"+"}i[g[1]]=e+"="+j;this.getTip().animate(i,h.slideOutSpeed,function(){c(this).hide();f.call()})});function a(f,g){var p=this;f.data("tooltip",p);var l=f.next();if(g.tip){l=c(g.tip);if(l.length>1){l=f.nextAll(g.tip).eq(0);if(!l.length){l=f.parent().nextAll(g.tip).eq(0)}}}function h(q,r){c(p).bind(q,function(t,s){if(r&&r.call(this,s?s.position:undefined)===false&&s){s.proceed=false}});return p}function o(){var t=f.position().top-l.outerHeight();var q=l.outerHeight()+f.outerHeight();var u=g.position[0];if(u=="center"){t+=q/2}if(u=="bottom"){t+=q}var r=f.outerWidth()+l.outerWidth();var s=f.position().left+f.outerWidth();u=g.position[1];if(u=="center"){s-=r/2}if(u=="left"){s-=r}t+=g.offset[0];s+=g.offset[1];return{top:t,left:s}}c.each(g,function(q,r){if(c.isFunction(r)){h(q,r)}});var j=f.is(":input"),e=j&&f.is(":checkbox, :radio, select, :button"),i=f.attr("type"),n=g.events[i]||g.events[j?(e?"widget":"input"):"def"];n=n.split(/,\s*/);f.bind(n[0],function(r){var q=l.data("trigger");if(q&&q[0]!=this){l.hide()}r.target=this;p.show(r);l.hover(p.show,function(s){p.hide()})});f.bind(n[1],function(){p.hide()});if(!c.browser.msie&&!j){f.mousemove(function(){if(!p.isShown()){f.triggerHandler("mouseover")}})}if(g.opacity<1){l.css("opacity",g.opacity)}var m=0,k=f.attr("title");if(k&&g.cancelDefault){f.removeAttr("title");f.data("title",k)}c.extend(p,{show:function(r){if(r){f=c(r.target)}clearTimeout(l.data("timer"));if(l.is(":animated")||l.is(":visible")){return p}function q(){l.data("trigger",f);var t=o();if(g.tip&&k){l.html(k)}var s={proceed:true,position:t};c(p).trigger("onBeforeShow",s);if(s.proceed===false){return p}t=o();l.css({position:"absolute",top:t.top,left:t.left});b[g.effect][0].call(p,function(){c(p).trigger("onShow")})}if(g.predelay){clearTimeout(m);m=setTimeout(q,g.predelay)}else{q()}return p},hide:function(){clearTimeout(l.data("timer"));clearTimeout(m);if(!l.is(":visible")){return}function q(){var r={proceed:true};c(p).trigger("onBeforeHide",r);if(r.proceed===false){return}b[g.effect][1].call(p,function(){c(p).trigger("onHide")})}if(g.delay){l.data("timer",setTimeout(q,g.delay))}else{q()}return p},isShown:function(){return l.is(":visible, :animated")},getConf:function(){return g},getTip:function(){return l},getTrigger:function(){return f},onBeforeShow:function(q){return h("onBeforeShow",q)},onShow:function(q){return h("onShow",q)},onBeforeHide:function(q){return h("onBeforeHide",q)},onHide:function(q){return h("onHide",q)}})}c.prototype.tooltip=function(e){var f=this.eq(typeof e=="number"?e:0).data("tooltip");if(f){return f}var g=c.extend(true,{},c.tools.tooltip.conf);if(c.isFunction(e)){e={onBeforeShow:e}}else{if(typeof e=="string"){e={tip:e}}}c.extend(true,g,e);if(typeof g.position=="string"){g.position=g.position.split(/,?\s/)}if(g.lazy!==false&&(g.lazy===true||this.length>20)){this.one("mouseover",function(){f=new a(c(this),g);f.show()})}else{this.each(function(){f=new a(c(this),g)})}return g.api?f:this}})(jQuery);
(function(d){var c=d.tools.tooltip;c.plugins=c.plugins||{};c.plugins.dynamic={version:"1.0.0",conf:{api:false,classNames:"top right bottom left"}};function b(h){var e=d(window);var g=e.width()+e.scrollLeft();var f=e.height()+e.scrollTop();return[h.offset().top<=e.scrollTop(),g<=h.offset().left+h.width(),f<=h.offset().top+h.height(),e.scrollLeft()>=h.offset().left]}function a(f){var e=f.length;while(e--){if(f[e]){return false}}return true}d.fn.dynamic=function(g){var h=d.extend({},c.plugins.dynamic.conf),f;if(typeof h=="number"){g={speed:g}}d.extend(h,g);var e=h.classNames.split(/\s/),i;this.each(function(){if(d(this).tooltip().jquery){throw"Lazy feature not supported by dynamic plugin. set lazy: false for tooltip"}var j=d(this).tooltip().onBeforeShow(function(n){var m=this.getTip(),k=this.getConf();if(!i){i=[k.position[0],k.position[1],k.offset[0],k.offset[1],d.extend({},k)]}d.extend(k,i[4]);k.position=[i[0],i[1]];k.offset=[i[2],i[3]];m.css({visibility:"hidden",position:"absolute",top:n.top,left:n.left}).show();var l=b(m);if(!a(l)){if(l[2]){d.extend(k,h.top);k.position[0]="top";m.addClass(e[0])}if(l[3]){d.extend(k,h.right);k.position[1]="right";m.addClass(e[1])}if(l[0]){d.extend(k,h.bottom);k.position[0]="bottom";m.addClass(e[2])}if(l[1]){d.extend(k,h.left);k.position[1]="left";m.addClass(e[3])}if(l[0]||l[2]){k.offset[0]*=-1}if(l[1]||l[3]){k.offset[1]*=-1}}m.css({visibility:"visible"})});j.onShow(function(){var l=this.getConf(),k=this.getTip();l.position=[i[0],i[1]];l.offset=[i[2],i[3]]});j.onHide(function(){var k=this.getTip();k.removeClass(h.classNames);d.extend(g,i[4])});f=j});return h.api?f:this}})(jQuery);
(function(c){c.tools=c.tools||{};c.tools.overlay={version:"1.1.0",addEffect:function(e,f,g){b[e]=[f,g]},conf:{top:"10%",left:"center",absolute:false,speed:"normal",closeSpeed:"fast",effect:"default",close:null,oneInstance:true,closeOnClick:true,closeOnEsc:true,api:false,expose:null,target:null}};var b={};c.tools.overlay.addEffect("default",function(e){this.getOverlay().fadeIn(this.getConf().speed,e)},function(e){this.getOverlay().fadeOut(this.getConf().closeSpeed,e)});var d=[];function a(i,f){var p=this,o=c(window),l,k,j,g=f.expose&&c.tools.expose.version;var h=f.target||i.attr("rel");k=h?c(h):null||i;if(i){i.click(function(q){p.load();return q.preventDefault()})}function n(e,q){c(p).bind(e,function(s,r){if(q&&q.call(this)===false&&r){r.proceed=false}});return p}c.each(f,function(e,q){if(c.isFunction(q)){n(e,q)}});c.extend(p,{load:function(){if(p.isOpened()){return p}if(f.oneInstance){c.each(d,function(){this.close()})}var t={proceed:true};c(p).trigger("onBeforeLoad",t);if(!t.proceed){return p}if(g){k.expose().load()}var s=f.top;if(typeof s=="string"){s=parseInt(s,10)/100*o.height()}var r=f.left;var e=k.outerWidth({margin:true});var q=k.outerHeight({margin:true});if(s=="center"){s=Math.max((o.height()-q)/2,0)}if(r=="center"){r=Math.max((o.width()-e)/2,0)}if(!f.absolute){s+=o.scrollTop();r+=o.scrollLeft()}k.css({top:s,left:r,position:"absolute"});b[f.effect][0].call(p,function(){c(p).trigger("onLoad");j=true});if(f.closeOnClick){c(document).bind("click.overlay",function(u){if(!p.isOpened()){return}var v=c(u.target);if(v.parents(k).length>1){return}c.each(d,function(){this.close()})})}if(f.closeOnEsc){c(document).unbind("keydown.overlay").bind("keydown.overlay",function(u){if(u.keyCode==27){c.each(d,function(){this.close()})}})}return p},close:function(){if(!p.isOpened()){return p}var q={proceed:true};c(p).trigger("onBeforeClose",q);if(!q.proceed){return p}b[f.effect][1].call(p,function(){j=false;c(p).trigger("onClose")});var e=true;c.each(d,function(){if(this.isOpened()){e=false}});if(e){c(document).unbind("click.overlay").unbind("keydown.overlay")}return p},getContent:function(){return k},getOverlay:function(){return k},getTrigger:function(){return i},getClosers:function(){return l},isOpened:function(){return j},getConf:function(){return f},onBeforeLoad:function(e){return n("onBeforeLoad",e)},onLoad:function(e){return n("onLoad",e)},onBeforeClose:function(e){return n("onBeforeClose",e)},onClose:function(e){return n("onClose",e)}});if(g){if(typeof f.expose=="string"){f.expose={color:f.expose}}c.extend(f.expose,{api:true,closeOnClick:f.closeOnClick,closeOnEsc:false});var m=k.expose(f.expose);m.onBeforeClose(function(){p.close()});p.onClose(function(){m.close()})}l=k.find(f.close||".close");if(!l.length&&!f.close){l=c('<div class="close"></div>');k.prepend(l)}l.click(function(){p.close()})}c.fn.overlay=function(e){var f=this.eq(typeof e=="number"?e:0).data("overlay");if(f){return f}if(c.isFunction(e)){e={onBeforeLoad:e}}var g=c.extend({},c.tools.overlay.conf);c.extend(true,g,e);this.each(function(){f=new a(c(this),g);d.push(f);c(this).data("overlay",f)});return g.api?f:this}})(jQuery);
(function(b){var a=b.tools.overlay;a.plugins=a.plugins||{};a.plugins.gallery={version:"1.0.0",conf:{imgId:"img",next:".next",prev:".prev",info:".info",progress:".progress",disabledClass:"disabled",activeClass:"active",opacity:0.8,speed:"slow",template:"<strong>${title}</strong> <span>Image ${index} of ${total}</span>",autohide:true,preload:true,api:false}};b.fn.gallery=function(d){var o=b.extend({},a.plugins.gallery.conf),m;b.extend(o,d);m=this.overlay();var r=this,j=m.getOverlay(),k=j.find(o.next),g=j.find(o.prev),e=j.find(o.info),c=j.find(o.progress),h=g.add(k).add(e).css({opacity:o.opacity}),s=m.getClosers(),l;function p(u){c.fadeIn();h.hide();s.hide();var t=u.attr("href");var v=new Image();v.onload=function(){c.fadeOut();var y=b("#"+o.imgId,j);if(!y.length){y=b("<img/>").attr("id",o.imgId).css("visibility","hidden");j.prepend(y)}y.attr("src",t).css("visibility","hidden");var z=v.width;var A=(b(window).width()-z)/2;l=r.index(r.filter("[href="+t+"]"));r.removeClass(o.activeClass).eq(l).addClass(o.activeClass);var w=o.disabledClass;h.removeClass(w);if(l===0){g.addClass(w)}if(l==r.length-1){k.addClass(w)}var B=o.template.replace("${title}",u.attr("title")||u.data("title")).replace("${index}",l+1).replace("${total}",r.length);var x=parseInt(e.css("paddingLeft"),10)+parseInt(e.css("paddingRight"),10);e.html(B).css({width:z-x});j.animate({width:z,height:v.height,left:A},o.speed,function(){y.hide().css("visibility","visible").fadeIn(function(){if(!o.autohide){h.fadeIn();s.show()}})})};v.onerror=function(){j.fadeIn().html("Cannot find image "+t)};v.src=t;if(o.preload){r.filter(":eq("+(l-1)+"), :eq("+(l+1)+")").each(function(){var w=new Image();w.src=b(this).attr("href")})}}function f(t,u){t.click(function(){if(t.hasClass(o.disabledClass)){return}var v=r.eq(i=l+(u?1:-1));if(v.length){p(v)}})}f(k,true);f(g);b(document).keydown(function(t){if(!j.is(":visible")||t.altKey||t.ctrlKey){return}if(t.keyCode==37||t.keyCode==39){var u=t.keyCode==37?g:k;u.click();return t.preventDefault()}return true});function q(){if(!j.is(":animated")){h.show();s.show()}}if(o.autohide){j.hover(q,function(){h.fadeOut();s.hide()}).mousemove(q)}var n;this.each(function(){var v=b(this),u=b(this).overlay(),t=u;u.onBeforeLoad(function(){p(v)});u.onClose(function(){r.removeClass(o.activeClass)})});return o.api?n:this}})(jQuery);
(function(b){b.tools=b.tools||{};b.tools.expose={version:"1.0.4",conf:{maskId:null,loadSpeed:"slow",closeSpeed:"fast",closeOnClick:true,closeOnEsc:true,zIndex:9998,opacity:0.8,color:"#456",api:false}};function a(){if(b.browser.msie){var f=b(document).height(),e=b(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,f-e<20?e:f]}return[b(window).width(),b(document).height()]}function c(g,h){var e=this,d=null,f=false,i=0;function j(k,l){b(e).bind(k,function(n,m){if(l&&l.call(this)===false&&m){m.proceed=false}});return e}b.each(h,function(k,l){if(b.isFunction(l)){j(k,l)}});b(window).resize(function(){e.fit()});b.extend(this,{getMask:function(){return d},getExposed:function(){return g},getConf:function(){return h},isLoaded:function(){return f},load:function(){if(f){return e}i=g.eq(0).css("zIndex");if(h.maskId){d=b("#"+h.maskId)}if(!d||!d.length){var l=a();d=b("<div/>").css({position:"absolute",top:0,left:0,width:l[0],height:l[1],display:"none",opacity:0,zIndex:h.zIndex});if(h.maskId){d.attr("id",h.maskId)}b("body").append(d);var k=d.css("backgroundColor");if(!k||k=="transparent"||k=="rgba(0, 0, 0, 0)"){d.css("backgroundColor",h.color)}if(h.closeOnEsc){b(document).bind("keydown.unexpose",function(o){if(o.keyCode==27){e.close()}})}if(h.closeOnClick){d.bind("click.unexpose",function(){e.close()})}}var n={proceed:true};b(e).trigger("onBeforeLoad",n);if(!n.proceed){return e}b.each(g,function(){var o=b(this);if(!/relative|absolute|fixed/i.test(o.css("position"))){o.css("position","relative")}});g.css({zIndex:Math.max(h.zIndex+1,i=="auto"?0:i)});var m=d.height();if(!this.isLoaded()){d.css({opacity:0,display:"block"}).fadeTo(h.loadSpeed,h.opacity,function(){if(d.height()!=m){d.css("height",m)}b(e).trigger("onLoad")})}f=true;return e},close:function(){if(!f){return e}var k={proceed:true};b(e).trigger("onBeforeClose",k);if(k.proceed===false){return e}d.fadeOut(h.closeSpeed,function(){b(e).trigger("onClose");g.css({zIndex:b.browser.msie?i:null})});f=false;return e},onBeforeLoad:function(k){return j("onBeforeLoad",k)},onLoad:function(k){return j("onLoad",k)},onBeforeClose:function(k){return j("onBeforeClose",k)},onClose:function(k){return j("onClose",k)},fit:function(){if(d){var k=a();d.css({width:k[0],height:k[1]})}}})}b.fn.expose=function(d){var e=this.eq(typeof d=="number"?d:0).data("expose");if(e){return e}if(typeof d=="string"){d={color:d}}var f=b.extend({},b.tools.expose.conf);b.extend(f,d);this.each(function(){e=new c(b(this),f);b(this).data("expose",e)});return f.api?e:this}})(jQuery);