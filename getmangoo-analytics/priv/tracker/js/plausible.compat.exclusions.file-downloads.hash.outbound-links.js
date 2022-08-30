!function(){"use strict";var e,t,i,s=window.location,c=window.document,u=c.getElementById("plausible"),d=u.getAttribute("data-api")||(e=u.src.split("/"),t=e[0],i=e[2],t+"//"+i+"/api/event");function f(e){console.warn("Ignoring Event: "+e)}function a(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||"file:"===s.protocol)return f("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var i=u&&u.getAttribute("data-include"),a=u&&u.getAttribute("data-exclude");if("pageview"===e){var r=!i||i&&i.split(",").some(p),n=a&&a.split(",").some(p);if(!r||n)return f("exclusion rule")}var o={};o.n=e,o.u=s.href,o.d=u.getAttribute("data-domain"),o.r=c.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props),o.h=1;var l=new XMLHttpRequest;l.open("POST",d,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&t&&t.callback&&t.callback()}}function p(e){return s.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}function r(e){for(var t=e.target,i="auxclick"===e.type&&2===e.which,a="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==s.host&&((i||a)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!a||(setTimeout(function(){s.href=t.href},150),e.preventDefault()))}c.addEventListener("click",r),c.addEventListener("auxclick",r);var n=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],o=u.getAttribute("file-types"),l=u.getAttribute("add-file-types"),p=o&&o.split(",")||l&&l.split(",").concat(n)||n;function h(e){for(var t=e.target,i="auxclick"===e.type&&2===e.which,a="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;var r,n=t&&t.href&&t.href.split("?")[0];n&&(r=n.split(".").pop(),p.some(function(e){return e===r}))&&((i||a)&&plausible("File Download",{props:{url:n}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!a||(setTimeout(function(){s.href=t.href},150),e.preventDefault()))}c.addEventListener("click",h),c.addEventListener("auxclick",h);var g=window.plausible&&window.plausible.q||[];window.plausible=a;for(var w,v=0;v<g.length;v++)a.apply(this,g[v]);function m(){w=s.pathname,a("pageview")}window.addEventListener("hashchange",m),"prerender"===c.visibilityState?c.addEventListener("visibilitychange",function(){w||"visible"!==c.visibilityState||m()}):m()}();