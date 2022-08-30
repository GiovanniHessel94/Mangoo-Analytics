!function(){"use strict";var t,e,i,o=window.location,n=window.document,r=n.getElementById("plausible"),p=r.getAttribute("data-api")||(t=r.src.split("/"),e=t[0],i=t[2],e+"//"+i+"/api/event");function l(t){console.warn("Ignoring Event: "+t)}function a(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(o.hostname)||"file:"===o.protocol)return l("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return l("localStorage flag")}catch(t){}var i={};i.n=t,i.u=o.href,i.d=r.getAttribute("data-domain"),i.r=n.referrer||null,i.w=window.innerWidth,e&&e.meta&&(i.m=JSON.stringify(e.meta)),e&&e.props&&(i.p=e.props);var a=new XMLHttpRequest;a.open("POST",p,!0),a.setRequestHeader("Content-Type","text/plain"),a.send(JSON.stringify(i)),a.onreadystatechange=function(){4===a.readyState&&e&&e.callback&&e.callback()}}}function s(t){for(var e=t.target,i="auxclick"===t.type&&2===t.which,a="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;e&&e.href&&e.host&&e.host!==o.host&&((i||a)&&plausible("Outbound Link: Click",{props:{url:e.href}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!a||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}n.addEventListener("click",s),n.addEventListener("auxclick",s);var c=["pdf","xlsx","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpeg","wmv","midi","mp3","wav","wma"],d=r.getAttribute("file-types"),u=r.getAttribute("add-file-types"),f=d&&d.split(",")||u&&u.split(",").concat(c)||c;function h(t){for(var e=t.target,i="auxclick"===t.type&&2===t.which,a="click"===t.type;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;var n,r=e&&e.href&&e.href.split("?")[0];r&&(n=r.split(".").pop(),f.some(function(t){return t===n}))&&((i||a)&&plausible("File Download",{props:{url:r}}),e.target&&!e.target.match(/^_(self|parent|top)$/i)||t.ctrlKey||t.metaKey||t.shiftKey||!a||(setTimeout(function(){o.href=e.href},150),t.preventDefault()))}n.addEventListener("click",h),n.addEventListener("auxclick",h);var w=window.plausible&&window.plausible.q||[];window.plausible=a;for(var v,g=0;g<w.length;g++)a.apply(this,w[g]);function m(){v!==o.pathname&&(v=o.pathname,a("pageview"))}var y,b=window.history;b.pushState&&(y=b.pushState,b.pushState=function(){y.apply(this,arguments),m()},window.addEventListener("popstate",m)),"prerender"===n.visibilityState?n.addEventListener("visibilitychange",function(){v||"visible"!==n.visibilityState||m()}):m()}();