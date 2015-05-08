var svgeezy=function(){return{init:function(e,t){this.avoid=e||!1,this.filetype=t||"png",this.svgSupport=this.supportsSvg(),this.svgSupport||(this.images=document.getElementsByTagName("img"),this.imgL=this.images.length,this.fallbacks())},fallbacks:function(){for(;this.imgL--;)if(!this.hasClass(this.images[this.imgL],this.avoid)||!this.avoid){var e=this.images[this.imgL].getAttribute("src");if(null===e)continue;if("svg"==this.getFileExt(e)){var t=e.replace(".svg","."+this.filetype);this.images[this.imgL].setAttribute("src",t)}}},getFileExt:function(e){var t=e.split(".").pop();return-1!==t.indexOf("?")&&(t=t.split("?")[0]),t},hasClass:function(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1},supportsSvg:function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")}}}();window.Modernizr=function(e,t,n){function r(e){y.cssText=e}function a(e,t){return r(A.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function o(e,t){return!!~(""+e).indexOf(t)}function u(e,t){for(var r in e){var a=e[r];if(!o(a,"-")&&y[a]!==n)return"pfx"==t?a:!0}return!1}function c(e,t,r){for(var a in e){var o=t[e[a]];if(o!==n)return r===!1?e[a]:i(o,"function")?o.bind(r||t):o}return!1}function s(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+C.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?u(a,t):(a=(e+" "+k.join(r+" ")+r).split(" "),c(a,t,n))}function l(){p.input=function(n){for(var r=0,a=n.length;a>r;r++)P[n[r]]=!!(n[r]in E);return P.list&&(P.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),P}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var r,a,i,o=0,u=e.length;u>o;o++)E.setAttribute("type",a=e[o]),r="text"!==E.type,r&&(E.value=x,E.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(a)&&E.style.WebkitAppearance!==n?(h.appendChild(E),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(E,null).WebkitAppearance&&0!==E.offsetHeight,h.removeChild(E)):/^(search|tel)$/.test(a)||(r=/^(url|email)$/.test(a)?E.checkValidity&&E.checkValidity()===!1:E.value!=x)),L[e[o]]=!!r;return L}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,m="2.8.3",p={},g=!0,h=t.documentElement,v="modernizr",b=t.createElement(v),y=b.style,E=t.createElement("input"),x=":)",w={}.toString,A=" -webkit- -moz- -o- -ms- ".split(" "),S="Webkit Moz O ms",C=S.split(" "),k=S.toLowerCase().split(" "),T={svg:"http://www.w3.org/2000/svg"},N={},L={},P={},M=[],j=M.slice,D=function(e,n,r,a){var i,o,u,c,s=t.createElement("div"),l=t.body,d=l||t.createElement("body");if(parseInt(r,10))for(;r--;)u=t.createElement("div"),u.id=a?a[r]:v+(r+1),s.appendChild(u);return i=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),s.id=v,(l?s:d).innerHTML+=i,d.appendChild(s),l||(d.style.background="",d.style.overflow="hidden",c=h.style.overflow,h.style.overflow="hidden",h.appendChild(d)),o=n(s,e),l?s.parentNode.removeChild(s):(d.parentNode.removeChild(d),h.style.overflow=c),!!o},F=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return D("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},$=function(){function e(e,a){a=a||t.createElement(r[e]||"div"),e="on"+e;var o=e in a;return o||(a.setAttribute||(a=t.createElement("div")),a.setAttribute&&a.removeAttribute&&(a.setAttribute(e,""),o=i(a[e],"function"),i(a[e],"undefined")||(a[e]=n),a.removeAttribute(e))),a=null,o}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),B={}.hasOwnProperty;f=i(B,"undefined")||i(B.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return B.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),r=function(){if(this instanceof r){var a=function(){};a.prototype=t.prototype;var i=new a,o=t.apply(i,n.concat(j.call(arguments)));return Object(o)===o?o:i}return t.apply(e,n.concat(j.call(arguments)))};return r}),N.flexbox=function(){return s("flexWrap")},N.flexboxlegacy=function(){return s("boxDirection")},N.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},N.canvastext=function(){return!(!p.canvas||!i(t.createElement("canvas").getContext("2d").fillText,"function"))},N.webgl=function(){return!!e.WebGLRenderingContext},N.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:D(["@media (",A.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},N.geolocation=function(){return"geolocation"in navigator},N.postmessage=function(){return!!e.postMessage},N.websqldatabase=function(){return!!e.openDatabase},N.indexedDB=function(){return!!s("indexedDB",e)},N.hashchange=function(){return $("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},N.history=function(){return!(!e.history||!history.pushState)},N.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},N.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},N.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),o(y.backgroundColor,"rgba")},N.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),o(y.backgroundColor,"rgba")||o(y.backgroundColor,"hsla")},N.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(y.background)},N.backgroundsize=function(){return s("backgroundSize")},N.borderimage=function(){return s("borderImage")},N.borderradius=function(){return s("borderRadius")},N.boxshadow=function(){return s("boxShadow")},N.textshadow=function(){return""===t.createElement("div").style.textShadow},N.opacity=function(){return a("opacity:.55"),/^0.55$/.test(y.opacity)},N.cssanimations=function(){return s("animationName")},N.csscolumns=function(){return s("columnCount")},N.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+A.join(n+e)).slice(0,-e.length)),o(y.backgroundImage,"gradient")},N.cssreflections=function(){return s("boxReflect")},N.csstransforms=function(){return!!s("transform")},N.csstransforms3d=function(){var e=!!s("perspective");return e&&"webkitPerspective"in h.style&&D("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},N.csstransitions=function(){return s("transition")},N.fontface=function(){var e;return D('@font-face {font-family:"font";src:url("https://")}',function(n,r){var a=t.getElementById("smodernizr"),i=a.sheet||a.styleSheet,o=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(o)&&0===o.indexOf(r.split(" ")[0])}),e},N.generatedcontent=function(){var e;return D(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},N.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},N.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},N.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},N.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},N.webworkers=function(){return!!e.Worker},N.applicationcache=function(){return!!e.applicationCache},N.svg=function(){return!!t.createElementNS&&!!t.createElementNS(T.svg,"svg").createSVGRect},N.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==T.svg},N.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(T.svg,"animate")))},N.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(T.svg,"clipPath")))};for(var I in N)f(N,I)&&(d=I.toLowerCase(),p[d]=N[I](),M.push((p[d]?"":"no-")+d));return p.input||l(),p.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof g&&g&&(h.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),b=E=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function a(e){var t=v[e[g]];return t||(t={},h++,e[g]=h,v[h]=t),t}function i(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=a(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||m.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function o(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||a(e);for(var i=n.frag.cloneNode(),o=0,u=r(),c=u.length;c>o;o++)i.createElement(u[o]);return i}function u(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function c(e){e||(e=t);var r=a(e);return!b.shivCSS||s||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||u(e,r),e}var s,l,d="3.7.0",f=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",h=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",s="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){s=!0,l=!0}}();var b={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:c,createElement:i,createDocumentFragment:o};e.html5=b,c(t)}(this,t),p._version=m,p._prefixes=A,p._domPrefixes=k,p._cssomPrefixes=C,p.mq=F,p.hasEvent=$,p.testProp=function(e){return u([e])},p.testAllProps=s,p.testStyles=D,p.prefixed=function(e,t,n){return t?s(e,t,n):s(e,"pfx")},h.className=h.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(g?" js "+M.join(" "):""),p}(this,this.document),!function(e){"use strict";function t(){}function n(){try{return document.activeElement}catch(e){}}function r(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return!0;return!1}function a(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):void 0}function i(e,t){var n;e.createTextRange?(n=e.createTextRange(),n.move("character",t),n.select()):e.selectionStart&&(e.focus(),e.setSelectionRange(t,t))}function o(e,t){try{return e.type=t,!0}catch(n){return!1}}function u(e,t){if(e&&e.getAttribute(T))t(e);else for(var n,r=e?e.getElementsByTagName("input"):R,a=e?e.getElementsByTagName("textarea"):V,i=r?r.length:0,o=a?a.length:0,u=i+o,c=0;u>c;c++)n=i>c?r[c]:a[c-i],t(n)}function c(e){u(e,l)}function s(e){u(e,d)}function l(e,t){var n=!!t&&e.value!==t,r=e.value===e.getAttribute(T);if((n||r)&&"true"===e.getAttribute(N)){e.removeAttribute(N),e.value=e.value.replace(e.getAttribute(T),""),e.className=e.className.replace(k,"");var a=e.getAttribute(F);parseInt(a,10)>=0&&(e.setAttribute("maxLength",a),e.removeAttribute(F));var i=e.getAttribute(L);return i&&(e.type=i),!0}return!1}function d(e){var t=e.getAttribute(T);if(""===e.value&&t){e.setAttribute(N,"true"),e.value=t,e.className+=" "+C;var n=e.getAttribute(F);n||(e.setAttribute(F,e.maxLength),e.removeAttribute("maxLength"));var r=e.getAttribute(L);return r?e.type="text":"password"===e.type&&o(e,"text")&&e.setAttribute(L,"password"),!0}return!1}function f(e){return function(){H&&e.value===e.getAttribute(T)&&"true"===e.getAttribute(N)?i(e,0):l(e)}}function m(e){return function(){d(e)}}function p(e){return function(){c(e)}}function g(e){return function(t){return x=e.value,"true"===e.getAttribute(N)&&x===e.getAttribute(T)&&r(A,t.keyCode)?(t.preventDefault&&t.preventDefault(),!1):void 0}}function h(e){return function(){l(e,x),""===e.value&&(e.blur(),i(e,0))}}function v(e){return function(){e===n()&&e.value===e.getAttribute(T)&&"true"===e.getAttribute(N)&&i(e,0)}}function b(e){var t=e.form;t&&"string"==typeof t&&(t=document.getElementById(t),t.getAttribute(P)||(a(t,"submit",p(t)),t.setAttribute(P,"true"))),a(e,"focus",f(e)),a(e,"blur",m(e)),H&&(a(e,"keydown",g(e)),a(e,"keyup",h(e)),a(e,"click",v(e))),e.setAttribute(M,"true"),e.setAttribute(T,_),(H||e!==n())&&d(e)}var y=document.createElement("input"),E=void 0!==y.placeholder;if(e.Placeholders={nativeSupport:E,disable:E?t:c,enable:E?t:s},!E){var x,w=["text","search","url","tel","email","password","number","textarea"],A=[27,33,34,35,36,37,38,39,40,8,46],S="#ccc",C="placeholdersjs",k=new RegExp("(?:^|\\s)"+C+"(?!\\S)"),T="data-placeholder-value",N="data-placeholder-active",L="data-placeholder-type",P="data-placeholder-submit",M="data-placeholder-bound",j="data-placeholder-focus",D="data-placeholder-live",F="data-placeholder-maxlength",$=100,B=document.getElementsByTagName("head")[0],I=document.documentElement,z=e.Placeholders,R=document.getElementsByTagName("input"),V=document.getElementsByTagName("textarea"),H="false"===I.getAttribute(j),W="false"!==I.getAttribute(D),O=document.createElement("style");O.type="text/css";var G=document.createTextNode("."+C+" {color:"+S+";}");O.styleSheet?O.styleSheet.cssText=G.nodeValue:O.appendChild(G),B.insertBefore(O,B.firstChild);for(var _,q,U=0,J=R.length+V.length;J>U;U++)q=U<R.length?R[U]:V[U-R.length],_=q.attributes.placeholder,_&&(_=_.nodeValue,_&&r(w,q.type)&&b(q));var K=setInterval(function(){for(var e=0,t=R.length+V.length;t>e;e++)q=e<R.length?R[e]:V[e-R.length],_=q.attributes.placeholder,_?(_=_.nodeValue,_&&r(w,q.type)&&(q.getAttribute(M)||b(q),(_!==q.getAttribute(T)||"password"===q.type&&!q.getAttribute(L))&&("password"===q.type&&!q.getAttribute(L)&&o(q,"text")&&q.setAttribute(L,"password"),q.value===q.getAttribute(T)&&(q.value=_),q.setAttribute(T,_)))):q.getAttribute(N)&&(l(q),q.removeAttribute(T));W||clearInterval(K)},$);a(e,"beforeunload",function(){z.disable()})}}(this);