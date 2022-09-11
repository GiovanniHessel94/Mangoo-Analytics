!function(){"use strict";var s=window.location,c=window.document,u=c.currentScript,d=u.getAttribute("data-api")||new URL(u.src).origin+"/api/event";function w(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||"file:"===s.protocol)return w("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return w("localStorage flag")}catch(t){}var i=u&&u.getAttribute("data-include"),a=u&&u.getAttribute("data-exclude");if("pageview"===t){var n=!i||i&&i.split(",").some(l),r=a&&a.split(",").some(l);if(!n||r)return w("exclusion rule")}var o={};o.n=t,o.u=s.href,o.d=u.getAttribute("data-domain"),o.r=c.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var p=new XMLHttpRequest;p.open("POST",d,!0),p.setRequestHeader("Content-Type","text/plain"),p.send(JSON.stringify(o)),p.onreadystatechange=function(){4===p.readyState&&e&&e.callback&&e.callback()}}function l(t){return s.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var e=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],i=u.getAttribute("file-types"),a=u.getAttribute("add-file-types"),o=i&&i.split(",")||a&&a.split(",").concat(e)||e;function n(t){for(var e=t.target,i="auxclick"===t.type&&2===t.which,a="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;var n,r=e&&e.href&&e.href.split("?")[0];r&&(n=r.split(".").pop(),o.some(function(t){return t===n}))&&((i||a)&&plausible("File Download",{props:{url:r}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!a||(setTimeout(function(){s.href=e.href},150),t.preventDefault()))}c.addEventListener("click",n),c.addEventListener("auxclick",n);var r=window.plausible&&window.plausible.q||[];window.plausible=t;for(var p,l=0;l<r.length;l++)t.apply(this,r[l]);function f(){p!==s.pathname&&(p=s.pathname,t("pageview"))}var g,v=window.history;v.pushState&&(g=v.pushState,v.pushState=function(){g.apply(this,arguments),f()},window.addEventListener("popstate",f)),"prerender"===c.visibilityState?c.addEventListener("visibilitychange",function(){p||"visible"!==c.visibilityState||f()}):f()}();