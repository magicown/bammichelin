!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(c,a,a.document,a.Math)}):"object"==typeof exports&&exports?module.exports=b(require("jquery"),a,a.document,a.Math):b(jQuery,a,a.document,a.Math)}("undefined"!=typeof window?window:this,function(a,b,c,d,e){"use strict";var f="fullpage-wrapper",g="."+f,h="fp-scrollable",i="."+h,j="fp-responsive",k="fp-notransition",l="fp-destroyed",m="fp-enabled",n="fp-viewing",o="active",p="."+o,q="fp-completely",r="."+q,s="fp-section",t="."+s,u=t+p,v=t+":first",w=t+":last",x="fp-tableCell",y="."+x,z="fp-nav",A="#"+z,B="fp-tooltip",C="."+B,D="fp-slide",E="."+D,F=E+p,G="fp-slides",H="."+G,I="fp-slidesContainer",J="."+I,K="fp-table",L="fp-slidesNav",M="."+L,N=M+" a",O="fp-controlArrow",P="."+O,Q="fp-prev",R="."+Q,S=O+" "+Q,T=P+R,U="fp-next",V="."+U,W=O+" "+U,X=P+V,Y=a(b),Z=a(c),$={scrollbars:!0,mouseWheel:!0,hideScrollbars:!1,fadeScrollbars:!1,disableMouse:!0,interactiveScrollbars:!0};a.fn.fullpage=function(h){function i(b,c){b||Ub(0),Zb("autoScrolling",b,c);var d=a(u);h.autoScrolling&&!h.scrollBar?(ac.css({overflow:"hidden",height:"100%"}),O(wc.recordHistory,"internal"),jc.css({"-ms-touch-action":"none","touch-action":"none"}),d.length&&Ub(d.position().top)):(ac.css({overflow:"visible",height:"initial"}),O(!1,"internal"),jc.css({"-ms-touch-action":"","touch-action":""}),d.length&&ac.scrollTop(d.position().top))}function O(a,b){Zb("recordHistory",a,b)}function R(a,b){Zb("scrollingSpeed",a,b)}function U(a,b){Zb("fitToSection",a,b)}function V(a){h.lockAnchors=a}function aa(a){a?(Mb(),Nb()):(Lb(),Ob())}function ba(b,c){void 0!==c?(c=c.replace(/ /g,"").split(","),a.each(c,function(a,c){Wb(b,c,"m")})):b?(aa(!0),Pb()):(aa(!1),Qb())}function ca(b,c){void 0!==c?(c=c.replace(/ /g,"").split(","),a.each(c,function(a,c){Wb(b,c,"k")})):h.keyboardScrolling=b}function da(){var b=a(u).prev(t);b.length||!h.loopTop&&!h.continuousVertical||(b=a(t).last()),b.length&&Oa(b,null,!0)}function ea(){var b=a(u).next(t);b.length||!h.loopBottom&&!h.continuousVertical||(b=a(t).first()),b.length&&Oa(b,null,!1)}function fa(a,b){R(0,"internal"),ga(a,b),R(wc.scrollingSpeed,"internal")}function ga(a,b){var c=Bb(a);void 0!==b?Db(a,b):c.length>0&&Oa(c)}function ha(a){La("right",a)}function ia(a){La("left",a)}function ja(b){if(!jc.hasClass(l)){lc=!0,kc=Y.height(),a(t).each(function(){var b=a(this).find(H),c=a(this).find(E);h.verticalCentered&&a(this).find(y).css("height",zb(a(this))+"px"),a(this).css("height",kc+"px"),h.scrollOverflow&&(c.length?c.each(function(){xb(a(this))}):xb(a(this))),c.length>1&&kb(b,b.find(F))});var c=a(u),d=c.index(t);d&&fa(d+1),lc=!1,a.isFunction(h.afterResize)&&b&&h.afterResize.call(jc),a.isFunction(h.afterReBuild)&&!b&&h.afterReBuild.call(jc)}}function ka(b){var c=bc.hasClass(j);b?c||(i(!1,"internal"),U(!1,"internal"),a(A).hide(),bc.addClass(j),a.isFunction(h.afterResponsive)&&h.afterResponsive.call(jc,b)):c&&(i(wc.autoScrolling,"internal"),U(wc.autoScrolling,"internal"),a(A).show(),bc.removeClass(j),a.isFunction(h.afterResponsive)&&h.afterResponsive.call(jc,b))}function la(){h.css3&&(h.css3=Kb()),h.scrollBar=h.scrollBar||h.hybrid,na(),oa(),ba(!0),i(h.autoScrolling,"internal");var b=a(u).find(F);b.length&&(0!==a(u).index(t)||0===a(u).index(t)&&0!==b.index())&&Tb(b),pb(),Jb(),"complete"===c.readyState&&Za(),Y.on("load",Za)}function ma(){Y.on("scroll",Aa).on("hashchange",$a).blur(fb).resize(ob),Z.keydown(_a).keyup(bb).on("click touchstart",A+" a",gb).on("click touchstart",N,hb).on("click",C,ab),a(t).on("click touchstart",P,eb),h.normalScrollElements&&(Z.on("mouseenter",h.normalScrollElements,function(){aa(!1)}),Z.on("mouseleave",h.normalScrollElements,function(){aa(!0)}))}function na(){var b=jc.find(h.sectionSelector);h.anchors.length||(h.anchors=b.filter("[data-anchor]").map(function(){return a(this).data("anchor").toString()}).get()),h.navigationTooltips.length||(h.navigationTooltips=b.filter("[data-tooltip]").map(function(){return a(this).data("tooltip").toString()}).get())}function oa(){jc.css({height:"100%",position:"relative"}),jc.addClass(f),a("html").addClass(m),kc=Y.height(),jc.removeClass(l),sa(),a(t).each(function(b){var c=a(this),d=c.find(E),e=d.length;qa(c,b),ra(c,b),e>0?pa(c,d,e):h.verticalCentered&&yb(c)}),h.fixedElements&&h.css3&&a(h.fixedElements).appendTo(bc),h.navigation&&ua(),wa(),h.scrollOverflow?("complete"===c.readyState&&va(),Y.on("load",va)):za()}function pa(b,c,d){var e=100*d,f=100/d;c.wrapAll('<div class="'+I+'" />'),c.parent().wrap('<div class="'+G+'" />'),b.find(J).css("width",e+"%"),d>1&&(h.controlArrows&&ta(b),h.slidesNavigation&&Fb(b,d)),c.each(function(b){a(this).css("width",f+"%"),h.verticalCentered&&yb(a(this))});var g=b.find(F);g.length&&(0!==a(u).index(t)||0===a(u).index(t)&&0!==g.index())?Tb(g):c.eq(0).addClass(o)}function qa(b,c){c||0!==a(u).length||b.addClass(o),b.css("height",kc+"px"),h.paddingTop&&b.css("padding-top",h.paddingTop),h.paddingBottom&&b.css("padding-bottom",h.paddingBottom),void 0!==h.sectionsColor[c]&&b.css("background-color",h.sectionsColor[c]),void 0!==h.anchors[c]&&b.attr("data-anchor",h.anchors[c])}function ra(b,c){void 0!==h.anchors[c]&&b.hasClass(o)&&ub(h.anchors[c],c),h.menu&&h.css3&&a(h.menu).closest(g).length&&a(h.menu).appendTo(bc)}function sa(){jc.find(h.sectionSelector).addClass(s),jc.find(h.slideSelector).addClass(D)}function ta(a){a.find(H).after('<div class="'+S+'"></div><div class="'+W+'"></div>'),"#fff"!=h.controlArrowColor&&(a.find(X).css("border-color","transparent transparent transparent "+h.controlArrowColor),a.find(T).css("border-color","transparent "+h.controlArrowColor+" transparent transparent")),h.loopHorizontal||a.find(T).hide()}function ua(){bc.append('<div id="'+z+'"><ul></ul></div>');var b=a(A);b.addClass(function(){return h.showActiveTooltip?"fp-show-active "+h.navigationPosition:h.navigationPosition});for(var c=0;c<a(t).length;c++){var d="";h.anchors.length&&(d=h.anchors[c]);var e='<li><a href="#'+d+'"><span></span></a>',f=h.navigationTooltips[c];void 0!==f&&""!==f&&(e+='<div class="'+B+" "+h.navigationPosition+'">'+f+"</div>"),e+="</li>",b.find("ul").append(e)}a(A).css("margin-top","-"+a(A).height()/2+"px"),a(A).find("li").eq(a(u).index(t)).find("a").addClass(o)}function va(){a(t).each(function(){var b=a(this).find(E);b.length?b.each(function(){xb(a(this))}):xb(a(this))}),za()}function wa(){jc.find('iframe[src*="youtube.com/embed/"]').each(function(){xa(a(this),"enablejsapi=1")})}function xa(a,b){var c=a.attr("src");a.attr("src",c+ya(c)+b)}function ya(a){return/\?/.test(a)?"&":"?"}function za(){var b=a(u);b.addClass(q),h.scrollOverflowHandler.afterRender&&h.scrollOverflowHandler.afterRender(b),Ua(b),Va(b),h.scrollOverflowHandler.afterLoad(),a.isFunction(h.afterLoad)&&h.afterLoad.call(b,b.data("anchor"),b.index(t)+1),a.isFunction(h.afterRender)&&h.afterRender.call(jc)}function Aa(){var b;if(!h.autoScrolling||h.scrollBar){var d=Y.scrollTop(),e=Ca(d),f=0,g=d+Y.height()/2,i=bc.height()-Y.height()===d,j=c.querySelectorAll(t);if(i)f=j.length-1;else if(d)for(var k=0;k<j.length;++k){var l=j[k];l.offsetTop<=g&&(f=k)}else f=0;if(Ba(e)&&(a(u).hasClass(q)||a(u).addClass(q).siblings().removeClass(q)),b=a(j).eq(f),!b.hasClass(o)){xc=!0;var m,n,p=a(u),r=p.index(t)+1,s=vb(b),v=b.data("anchor"),w=b.index(t)+1,x=b.find(F);x.length&&(n=x.data("anchor"),m=x.index()),nc&&(b.addClass(o).siblings().removeClass(o),a.isFunction(h.onLeave)&&h.onLeave.call(p,r,w,s),a.isFunction(h.afterLoad)&&h.afterLoad.call(b,v,w),Xa(p),Ua(b),Va(b),ub(v,w-1),h.anchors.length&&(dc=v),Gb(m,n,v,w)),clearTimeout(tc),tc=setTimeout(function(){xc=!1},100)}h.fitToSection&&(clearTimeout(uc),uc=setTimeout(function(){nc&&h.fitToSection&&(a(u).is(b)&&(lc=!0),Oa(a(u)),lc=!1)},h.fitToSectionDelay))}}function Ba(b){var c=a(u).position().top,d=c+Y.height();return"up"==b?d>=Y.scrollTop()+Y.height():c<=Y.scrollTop()}function Ca(a){var b=a>yc?"down":"up";return yc=a,Ec=a,b}function Da(a,b){if(pc.m[a]){var c="down"===a?"bottom":"top",d="down"===a?ea:da;if(b.length>0){if(!h.scrollOverflowHandler.isScrolled(c,b))return!0;d()}else d()}}function Ea(a){var b=a.originalEvent;!Ga(a.target)&&h.autoScrolling&&Ha(b)&&a.preventDefault()}function Fa(b){var c=b.originalEvent,e=a(c.target).closest(t);if(!Ga(b.target)&&Ha(c)){h.autoScrolling&&b.preventDefault();var f=h.scrollOverflowHandler.scrollable(e),g=Sb(c);Bc=g.y,Cc=g.x,e.find(H).length&&d.abs(Ac-Cc)>d.abs(zc-Bc)?!gc&&d.abs(Ac-Cc)>Y.outerWidth()/100*h.touchSensitivity&&(Ac>Cc?pc.m.right&&ha(e):pc.m.left&&ia(e)):h.autoScrolling&&nc&&d.abs(zc-Bc)>Y.height()/100*h.touchSensitivity&&(zc>Bc?Da("down",f):Bc>zc&&Da("up",f))}}function Ga(b,c){c=c||0;var d=a(b).parent();return!!(c<h.normalScrollElementTouchThreshold&&d.is(h.normalScrollElements))||c!=h.normalScrollElementTouchThreshold&&Ga(d,++c)}function Ha(a){return void 0===a.pointerType||"mouse"!=a.pointerType}function Ia(a){var b=a.originalEvent;if(h.fitToSection&&ac.stop(),Ha(b)){var c=Sb(b);zc=c.y,Ac=c.x}}function Ja(a,b){for(var c=0,e=a.slice(d.max(a.length-b,1)),f=0;f<e.length;f++)c+=e[f];return d.ceil(c/b)}function Ka(c){var e=(new Date).getTime(),f=a(r).hasClass("fp-normal-scroll");if(h.autoScrolling&&!fc&&!f){c=c||b.event;var g=c.wheelDelta||-c.deltaY||-c.detail,i=d.max(-1,d.min(1,g)),j=void 0!==c.wheelDeltaX||void 0!==c.deltaX,k=d.abs(c.wheelDeltaX)<d.abs(c.wheelDelta)||d.abs(c.deltaX)<d.abs(c.deltaY)||!j;oc.length>149&&oc.shift(),oc.push(d.abs(g)),h.scrollBar&&(c.preventDefault?c.preventDefault():c.returnValue=!1);var l=a(u),m=h.scrollOverflowHandler.scrollable(l),n=e-Dc;return Dc=e,n>200&&(oc=[]),nc&&Ja(oc,10)>=Ja(oc,70)&&k&&(i<0?Da("down",m):Da("up",m)),!1}h.fitToSection&&ac.stop()}function La(b,c){var d=void 0===c?a(u):c,e=d.find(H),f=e.find(E).length;if(!(!e.length||gc||f<2)){var g=e.find(F),i=null;if(i="left"===b?g.prev(E):g.next(E),!i.length){if(!h.loopHorizontal)return;i="left"===b?g.siblings(":last"):g.siblings(":first")}gc=!0,kb(e,i,b)}}function Ma(){a(F).each(function(){Tb(a(this),"internal")})}function Na(a){var b=a.position(),c=b.top,d=b.top>Ec,e=c-kc+a.outerHeight(),f=h.bigSectionsDestination;return a.outerHeight()>kc?(d||f)&&"bottom"!==f||(c=e):(d||lc&&a.is(":last-child"))&&(c=e),Ec=c,c}function Oa(b,c,d){if(void 0!==b){var e,f,g=Na(b),i={element:b,callback:c,isMovementUp:d,dtop:g,yMovement:vb(b),anchorLink:b.data("anchor"),sectionIndex:b.index(t),activeSlide:b.find(F),activeSection:a(u),leavingSection:a(u).index(t)+1,localIsResizing:lc};i.activeSection.is(b)&&!lc||h.scrollBar&&Y.scrollTop()===i.dtop&&!b.hasClass("fp-auto-height")||(i.activeSlide.length&&(e=i.activeSlide.data("anchor"),f=i.activeSlide.index()),h.autoScrolling&&h.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&(i=Ra(i)),a.isFunction(h.onLeave)&&!i.localIsResizing&&h.onLeave.call(i.activeSection,i.leavingSection,i.sectionIndex+1,i.yMovement)===!1||(Xa(i.activeSection),h.scrollOverflowHandler.beforeLeave(),b.addClass(o).siblings().removeClass(o),Ua(b),h.scrollOverflowHandler.onLeave(),nc=!1,Gb(f,e,i.anchorLink,i.sectionIndex),Pa(i),dc=i.anchorLink,ub(i.anchorLink,i.sectionIndex)))}}function Pa(b){if(h.css3&&h.autoScrolling&&!h.scrollBar)Ab("translate3d(0px, -"+d.round(b.dtop)+"px, 0px)",!0),h.scrollingSpeed?(clearTimeout(rc),rc=setTimeout(function(){Ta(b)},h.scrollingSpeed)):Ta(b);else{var c=Qa(b);a(c.element).animate(c.options,h.scrollingSpeed,h.easing).promise().done(function(){h.scrollBar?setTimeout(function(){Ta(b)},30):Ta(b)})}}function Qa(a){var b={};return h.autoScrolling&&!h.scrollBar?(b.options={top:-a.dtop},b.element=g):(b.options={scrollTop:a.dtop},b.element="html, body"),b}function Ra(b){return b.isMovementUp?a(u).before(b.activeSection.nextAll(t)):a(u).after(b.activeSection.prevAll(t).get().reverse()),Ub(a(u).position().top),Ma(),b.wrapAroundElements=b.activeSection,b.dtop=b.element.position().top,b.yMovement=vb(b.element),b}function Sa(b){b.wrapAroundElements&&b.wrapAroundElements.length&&(b.isMovementUp?a(v).before(b.wrapAroundElements):a(w).after(b.wrapAroundElements),Ub(a(u).position().top),Ma())}function Ta(b){Sa(b),a.isFunction(h.afterLoad)&&!b.localIsResizing&&h.afterLoad.call(b.element,b.anchorLink,b.sectionIndex+1),h.scrollOverflowHandler.afterLoad(),b.localIsResizing||Va(b.element),b.element.addClass(q).siblings().removeClass(q),nc=!0,a.isFunction(b.callback)&&b.callback.call(this)}function Ua(b){if(h.lazyLoading){var c;Ya(b).find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){c=a(this),c.attr("src",c.data("src")),c.removeAttr("data-src"),c.is("source")&&c.closest("video").get(0).load()})}}function Va(b){var c=Ya(b);c.find("video, audio").each(function(){var b=a(this).get(0);b.hasAttribute("data-autoplay")&&"function"==typeof b.play&&b.play()}),c.find('iframe[src*="youtube.com/embed/"]').each(function(){var b=a(this).get(0);b.hasAttribute("data-autoplay")&&Wa(b),b.onload=function(){b.hasAttribute("data-autoplay")&&Wa(b)}})}function Wa(a){a.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function Xa(b){var c=Ya(b);c.find("video, audio").each(function(){var b=a(this).get(0);b.hasAttribute("data-keepplaying")||"function"!=typeof b.pause||b.pause()}),c.find('iframe[src*="youtube.com/embed/"]').each(function(){var b=a(this).get(0);/youtube\.com\/embed\//.test(a(this).attr("src"))&&!b.hasAttribute("data-keepplaying")&&a(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function Ya(b){var c=b.find(F);return c.length&&(b=a(c)),b}function Za(){var a=b.location.hash.replace("#","").split("/"),c=decodeURIComponent(a[0]),d=decodeURIComponent(a[1]);c&&(h.animateAnchor?Db(c,d):fa(c,d))}function $a(){if(!xc&&!h.lockAnchors){var a=b.location.hash.replace("#","").split("/"),c=decodeURIComponent(a[0]),d=decodeURIComponent(a[1]),e=void 0===dc,f=void 0===dc&&void 0===d&&!gc;c.length&&(c&&c!==dc&&!e||f||!gc&&ec!=d)&&Db(c,d)}}function _a(b){clearTimeout(vc);var c=a(":focus");if(!c.is("textarea")&&!c.is("input")&&!c.is("select")&&"true"!==c.attr("contentEditable")&&""!==c.attr("contentEditable")&&h.keyboardScrolling&&h.autoScrolling){var d=b.which,e=[40,38,32,33,34];a.inArray(d,e)>-1&&b.preventDefault(),fc=b.ctrlKey,vc=setTimeout(function(){ib(b)},150)}}function ab(){a(this).prev().trigger("click")}function bb(a){mc&&(fc=a.ctrlKey)}function cb(a){2==a.which&&(Fc=a.pageY,jc.on("mousemove",jb))}function db(a){2==a.which&&jc.off("mousemove")}function eb(){var b=a(this).closest(t);a(this).hasClass(Q)?pc.m.left&&ia(b):pc.m.right&&ha(b)}function fb(){mc=!1,fc=!1}function gb(b){b.preventDefault();var c=a(this).parent().index();Oa(a(t).eq(c))}function hb(b){b.preventDefault();var c=a(this).closest(t).find(H);kb(c,c.find(E).eq(a(this).closest("li").index()))}function ib(b){var c=b.shiftKey;if(nc||!([37,39].indexOf(b.which)<0))switch(b.which){case 38:case 33:pc.k.up&&da();break;case 32:if(c&&pc.k.up){da();break}case 40:case 34:pc.k.down&&ea();break;case 36:pc.k.up&&ga(1);break;case 35:pc.k.down&&ga(a(t).length);break;case 37:pc.k.left&&ia();break;case 39:pc.k.right&&ha();break;default:return}}function jb(a){nc&&(a.pageY<Fc&&pc.m.up?da():a.pageY>Fc&&pc.m.down&&ea()),Fc=a.pageY}function kb(b,c,d){var e=b.closest(t),f={slides:b,destiny:c,direction:d,destinyPos:c.position(),slideIndex:c.index(),section:e,sectionIndex:e.index(t),anchorLink:e.data("anchor"),slidesNav:e.find(M),slideAnchor:Ib(c),prevSlide:e.find(F),prevSlideIndex:e.find(F).index(),localIsResizing:lc};if(f.xMovement=wb(f.prevSlideIndex,f.slideIndex),f.localIsResizing||(nc=!1),h.onSlideLeave&&!f.localIsResizing&&"none"!==f.xMovement&&a.isFunction(h.onSlideLeave)&&h.onSlideLeave.call(f.prevSlide,f.anchorLink,f.sectionIndex+1,f.prevSlideIndex,f.xMovement,f.slideIndex)===!1)return void(gc=!1);c.addClass(o).siblings().removeClass(o),f.localIsResizing||(Xa(f.prevSlide),Ua(c)),!h.loopHorizontal&&h.controlArrows&&(e.find(T).toggle(0!==f.slideIndex),e.find(X).toggle(!c.is(":last-child"))),e.hasClass(o)&&Gb(f.slideIndex,f.slideAnchor,f.anchorLink,f.sectionIndex),mb(b,f,!0)}function lb(b){nb(b.slidesNav,b.slideIndex),b.localIsResizing||(a.isFunction(h.afterSlideLoad)&&h.afterSlideLoad.call(b.destiny,b.anchorLink,b.sectionIndex+1,b.slideAnchor,b.slideIndex),nc=!0,Va(b.destiny)),gc=!1}function mb(a,b,c){var e=b.destinyPos;if(h.css3){var f="translate3d(-"+d.round(e.left)+"px, 0px, 0px)";qb(a.find(J)).css(Vb(f)),sc=setTimeout(function(){c&&lb(b)},h.scrollingSpeed,h.easing)}else a.animate({scrollLeft:d.round(e.left)},h.scrollingSpeed,h.easing,function(){c&&lb(b)})}function nb(a,b){a.find(p).removeClass(o),a.find("li").eq(b).find("a").addClass(o)}function ob(){if(pb(),hc){var b=a(c.activeElement);if(!b.is("textarea")&&!b.is("input")&&!b.is("select")){var e=Y.height();d.abs(e-Gc)>20*d.max(Gc,e)/100&&(ja(!0),Gc=e)}}else clearTimeout(qc),qc=setTimeout(function(){ja(!0)},350)}function pb(){var a=h.responsive||h.responsiveWidth,b=h.responsiveHeight,c=a&&Y.outerWidth()<a,d=b&&Y.height()<b;a&&b?ka(c||d):a?ka(c):b&&ka(d)}function qb(a){var b="all "+h.scrollingSpeed+"ms "+h.easingcss3;return a.removeClass(k),a.css({"-webkit-transition":b,transition:b})}function rb(a){return a.addClass(k)}function sb(b,c){h.navigation&&(a(A).find(p).removeClass(o),b?a(A).find('a[href="#'+b+'"]').addClass(o):a(A).find("li").eq(c).find("a").addClass(o))}function tb(b){h.menu&&(a(h.menu).find(p).removeClass(o),a(h.menu).find('[data-menuanchor="'+b+'"]').addClass(o))}function ub(a,b){tb(a),sb(a,b)}function vb(b){var c=a(u).index(t),d=b.index(t);return c==d?"none":c>d?"up":"down"}function wb(a,b){return a==b?"none":a>b?"left":"right"}function xb(a){if(!a.hasClass("fp-noscroll")){a.css("overflow","hidden");var b,c=h.scrollOverflowHandler,d=c.wrapContent(),e=a.closest(t),f=c.scrollable(a);f.length?b=c.scrollHeight(a):(b=a.get(0).scrollHeight,h.verticalCentered&&(b=a.find(y).get(0).scrollHeight));var g=kc-parseInt(e.css("padding-bottom"))-parseInt(e.css("padding-top"));b>g?f.length?c.update(a,g):(h.verticalCentered?a.find(y).wrapInner(d):a.wrapInner(d),c.create(a,g)):c.remove(a),a.css("overflow","")}}function yb(a){a.hasClass(K)||a.addClass(K).wrapInner('<div class="'+x+'" style="height:'+zb(a)+'px;" />')}function zb(a){var b=kc;if(h.paddingTop||h.paddingBottom){var c=a;c.hasClass(s)||(c=a.closest(t)),b=kc-(parseInt(c.css("padding-top"))+parseInt(c.css("padding-bottom")))}return b}function Ab(a,b){b?qb(jc):rb(jc),jc.css(Vb(a)),setTimeout(function(){jc.removeClass(k)},10)}function Bb(b){var c=jc.find(t+'[data-anchor="'+b+'"]');return c.length||(c=a(t).eq(b-1)),c}function Cb(a,b){var c=b.find(H),d=c.find(E+'[data-anchor="'+a+'"]');return d.length||(d=c.find(E).eq(a)),d}function Db(a,b){var c=Bb(a);c.length&&(void 0===b&&(b=0),a===dc||c.hasClass(o)?Eb(c,b):Oa(c,function(){Eb(c,b)}))}function Eb(a,b){if(void 0!==b){var c=a.find(H),d=Cb(b,a);d.length&&kb(c,d)}}function Fb(a,b){a.append('<div class="'+L+'"><ul></ul></div>');var c=a.find(M);c.addClass(h.slidesNavPosition);for(var d=0;d<b;d++)c.find("ul").append('<li><a href="#"><span></span></a></li>');c.css("margin-left","-"+c.width()/2+"px"),c.find("li").first().find("a").addClass(o)}function Gb(a,b,c,d){var e="";h.anchors.length&&!h.lockAnchors&&(a?(void 0!==c&&(e=c),void 0===b&&(b=a),ec=b,Hb(e+"/"+b)):void 0!==a?(ec=b,Hb(c)):Hb(c)),Jb()}function Hb(a){if(h.recordHistory)location.hash=a;else if(hc||ic)b.history.replaceState(e,e,"#"+a);else{var c=b.location.href.split("#")[0];b.location.replace(c+"#"+a)}}function Ib(a){var b=a.data("anchor"),c=a.index();return void 0===b&&(b=c),b}function Jb(){var b=a(u),c=b.find(F),d=Ib(b),e=Ib(c),f=String(d);c.length&&(f=f+"-"+e),f=f.replace("/","-").replace("#","");var g=new RegExp("\\b\\s?"+n+"-[^\\s]+\\b","g");bc[0].className=bc[0].className.replace(g,""),bc.addClass(n+"-"+f)}function Kb(){var a,d=c.createElement("p"),f={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};c.body.insertBefore(d,null);for(var g in f)d.style[g]!==e&&(d.style[g]="translate3d(1px,1px,1px)",a=b.getComputedStyle(d).getPropertyValue(f[g]));return c.body.removeChild(d),a!==e&&a.length>0&&"none"!==a}function Lb(){c.addEventListener?(c.removeEventListener("mousewheel",Ka,!1),c.removeEventListener("wheel",Ka,!1),c.removeEventListener("MozMousePixelScroll",Ka,!1)):c.detachEvent("onmousewheel",Ka)}function Mb(){var a,d="";b.addEventListener?a="addEventListener":(a="attachEvent",d="on");var f="onwheel"in c.createElement("div")?"wheel":c.onmousewheel!==e?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==f?c[a](d+"MozMousePixelScroll",Ka,!1):c[a](d+f,Ka,!1)}function Nb(){jc.on("mousedown",cb).on("mouseup",db)}function Ob(){jc.off("mousedown",cb).off("mouseup",db)}function Pb(){if(hc||ic){var b=Rb();h.autoScrolling&&bc.off("touchmove "+b.move).on("touchmove "+b.move,Ea),a(g).off("touchstart "+b.down).on("touchstart "+b.down,Ia).off("touchmove "+b.move).on("touchmove "+b.move,Fa)}}function Qb(){if(hc||ic){var b=Rb();a(g).off("touchstart "+b.down).off("touchmove "+b.move)}}function Rb(){return b.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Sb(a){var b=[];return b.y=void 0!==a.pageY&&(a.pageY||a.pageX)?a.pageY:a.touches[0].pageY,b.x=void 0!==a.pageX&&(a.pageY||a.pageX)?a.pageX:a.touches[0].pageX,ic&&Ha(a)&&h.scrollBar&&(b.y=a.touches[0].pageY,b.x=a.touches[0].pageX),b}function Tb(a,b){R(0,"internal"),void 0!==b&&(lc=!0),kb(a.closest(H),a),void 0!==b&&(lc=!1),R(wc.scrollingSpeed,"internal")}function Ub(a){var b=d.round(a);h.css3&&h.autoScrolling&&!h.scrollBar?Ab("translate3d(0px, -"+b+"px, 0px)",!1):h.autoScrolling&&!h.scrollBar?jc.css("top",-b):ac.scrollTop(b)}function Vb(a){return{"-webkit-transform":a,"-moz-transform":a,"-ms-transform":a,transform:a}}function Wb(a,b,c){switch(b){case"up":pc[c].up=a;break;case"down":pc[c].down=a;break;case"left":pc[c].left=a;break;case"right":pc[c].right=a;break;case"all":"m"==c?ba(a):ca(a)}}function Xb(b){i(!1,"internal"),ba(!1),ca(!1),jc.addClass(l),clearTimeout(sc),clearTimeout(rc),clearTimeout(qc),clearTimeout(tc),clearTimeout(uc),Y.off("scroll",Aa).off("hashchange",$a).off("resize",ob),Z.off("click touchstart",A+" a").off("mouseenter",A+" li").off("mouseleave",A+" li").off("click touchstart",N).off("mouseover",h.normalScrollElements).off("mouseout",h.normalScrollElements),a(t).off("click touchstart",P),clearTimeout(sc),clearTimeout(rc),b&&Yb()}function Yb(){Ub(0),jc.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){a(this).attr("src",a(this).data("src")),a(this).removeAttr("data-src")}),a(A+", "+M+", "+P).remove(),a(t).css({height:"","background-color":"",padding:""}),a(E).css({width:""}),jc.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),ac.css({overflow:"",height:""}),a("html").removeClass(m),bc.removeClass(j),a.each(bc.get(0).className.split(/\s+/),function(a,b){0===b.indexOf(n)&&bc.removeClass(b)}),a(t+", "+E).each(function(){h.scrollOverflowHandler.remove(a(this)),a(this).removeClass(K+" "+o)}),rb(jc),jc.find(y+", "+J+", "+H).each(function(){a(this).replaceWith(this.childNodes)}),ac.scrollTop(0);var b=[s,D,I];a.each(b,function(b,c){a("."+c).removeClass(c)})}function Zb(a,b,c){h[a]=b,"internal"!==c&&(wc[a]=b)}function $b(){var b=["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove","scrollOverflowReset"];if(a("html").hasClass(m))return void _b("error","Fullpage.js can only be initialized once and you are doing it multiple times!");h.continuousVertical&&(h.loopTop||h.loopBottom)&&(h.continuousVertical=!1,_b("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),h.scrollBar&&h.scrollOverflow&&_b("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),!h.continuousVertical||!h.scrollBar&&h.autoScrolling||(h.continuousVertical=!1,_b("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),a.each(b,function(a,b){h[b]&&_b("warn","fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: "+b)}),a.each(h.anchors,function(b,c){var d=Z.find("[name]").filter(function(){return a(this).attr("name")&&a(this).attr("name").toLowerCase()==c.toLowerCase()}),e=Z.find("[id]").filter(function(){return a(this).attr("id")&&a(this).attr("id").toLowerCase()==c.toLowerCase()});(e.length||d.length)&&(_b("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),e.length&&_b("error",'"'+c+'" is is being used by another element `id` property'),d.length&&_b("error",'"'+c+'" is is being used by another element `name` property'))})}function _b(a,b){console&&console[a]&&console[a]("fullPage: "+b)}if(a("html").hasClass(m))return void $b();var ac=a("html, body"),bc=a("body"),cc=a.fn.fullpage;h=a.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:_,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},h);var dc,ec,fc,gc=!1,hc=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),ic="ontouchstart"in b||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,jc=a(this),kc=Y.height(),lc=!1,mc=!0,nc=!0,oc=[],pc={};pc.m={up:!0,down:!0,left:!0,right:!0},pc.k=a.extend(!0,{},pc.m);var qc,rc,sc,tc,uc,vc,wc=a.extend(!0,{},h);$b(),$.click=ic,$=a.extend($,h.scrollOverflowOptions),a.extend(a.easing,{easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c}}),a(this).length&&(cc.setAutoScrolling=i,cc.setRecordHistory=O,cc.setScrollingSpeed=R,cc.setFitToSection=U,cc.setLockAnchors=V,cc.setMouseWheelScrolling=aa,cc.setAllowScrolling=ba,cc.setKeyboardScrolling=ca,cc.moveSectionUp=da,cc.moveSectionDown=ea,cc.silentMoveTo=fa,cc.moveTo=ga,cc.moveSlideRight=ha,cc.moveSlideLeft=ia,cc.reBuild=ja,cc.setResponsive=ka,cc.destroy=Xb,la(),ma());var xc=!1,yc=0,zc=0,Ac=0,Bc=0,Cc=0,Dc=(new Date).getTime(),Ec=0,Fc=0,Gc=kc},"undefined"!=typeof IScroll&&(IScroll.prototype.wheelOn=function(){this.wrapper.addEventListener("wheel",this),this.wrapper.addEventListener("mousewheel",this),this.wrapper.addEventListener("DOMMouseScroll",this)},IScroll.prototype.wheelOff=function(){this.wrapper.removeEventListener("wheel",this),this.wrapper.removeEventListener("mousewheel",this),this.wrapper.removeEventListener("DOMMouseScroll",this)});var _={refreshId:null,iScrollInstances:[],toggleWheel:function(b){a(u).find(i).each(function(){var c=a(this).data("iscrollInstance");void 0!==c&&c&&(b?c.wheelOn():c.wheelOff())})},onLeave:function(){_.toggleWheel(!1)},beforeLeave:function(){_.onLeave()},afterLoad:function(){_.toggleWheel(!0)},create:function(b,c){var d=b.find(i);d.height(c),d.each(function(){var b=a(this),c=b.data("iscrollInstance");c&&a.each(_.iScrollInstances,function(){a(this).destroy()}),c=new IScroll(b.get(0),$),_.iScrollInstances.push(c),c.wheelOff(),b.data("iscrollInstance",c)})},isScrolled:function(a,b){var c=b.data("iscrollInstance");return!c||("top"===a?c.y>=0&&!b.scrollTop():"bottom"===a?0-c.y+b.scrollTop()+1+b.innerHeight()>=b[0].scrollHeight:void 0)},scrollable:function(a){return a.find(H).length?a.find(F).find(i):a.find(i)},scrollHeight:function(a){return a.find(i).children().first().get(0).scrollHeight},remove:function(a){var b=a.find(i);if(b.length){b.data("iscrollInstance").destroy(),b.data("iscrollInstance",null)}a.find(i).children().first().children().first().unwrap().unwrap()},update:function(b,c){clearTimeout(_.refreshId),_.refreshId=setTimeout(function(){a.each(_.iScrollInstances,function(){a(this).get(0).refresh()})},150),b.find(i).css("height",c+"px").parent().css("height",c+"px")},wrapContent:function(){return'<div class="'+h+'"><div class="fp-scroller"></div></div>'}}});