!function(){"use strict";var c=window.location,p=window.document,u=p.currentScript,d=u.getAttribute("data-api")||new URL(u.src).origin+"/api/event";function f(e){console.warn("Ignoring Event: "+e)}function e(e,t){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var i=u&&u.getAttribute("data-include"),a=u&&u.getAttribute("data-exclude");if("pageview"===e){var n=!i||i&&i.split(",").some(o),r=a&&a.split(",").some(o);if(!n||r)return f("exclusion rule")}function o(e){return c.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var l={};l.n=e,l.u=c.href,l.d=u.getAttribute("data-domain"),l.r=p.referrer||null,l.w=window.innerWidth,t&&t.meta&&(l.m=JSON.stringify(t.meta)),t&&t.props&&(l.p=t.props);var s=new XMLHttpRequest;s.open("POST",d,!0),s.setRequestHeader("Content-Type","text/plain"),s.send(JSON.stringify(l)),s.onreadystatechange=function(){4===s.readyState&&t&&t.callback&&t.callback()}}function t(e){for(var t=e.target,i="auxclick"===e.type&&2===e.which,a="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==c.host&&((i||a)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!a||(setTimeout(function(){c.href=t.href},150),e.preventDefault()))}p.addEventListener("click",t),p.addEventListener("auxclick",t);var i=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a,n=0;n<i.length;n++)e.apply(this,i[n]);function r(){a!==c.pathname&&(a=c.pathname,e("pageview"))}var o,l=window.history;l.pushState&&(o=l.pushState,l.pushState=function(){o.apply(this,arguments),r()},window.addEventListener("popstate",r)),"prerender"===p.visibilityState?p.addEventListener("visibilitychange",function(){a||"visible"!==p.visibilityState||r()}):r()}();