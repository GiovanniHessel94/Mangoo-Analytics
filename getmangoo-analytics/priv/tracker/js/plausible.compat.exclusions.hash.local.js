!function(){"use strict";var e,t,i,u=window.location,c=window.document,p=c.getElementById("plausible"),d=p.getAttribute("data-api")||(e=p.src.split("/"),t=e[0],i=e[2],t+"//"+i+"/api/event");function g(e){console.warn("Ignoring Event: "+e)}function n(e,t){try{if("true"===window.localStorage.plausible_ignore)return g("localStorage flag")}catch(e){}var i=p&&p.getAttribute("data-include"),n=p&&p.getAttribute("data-exclude");if("pageview"===e){var a=!i||i&&i.split(",").some(l),r=n&&n.split(",").some(l);if(!a||r)return g("exclusion rule")}function l(e){return u.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var o={};o.n=e,o.u=u.href,o.d=p.getAttribute("data-domain"),o.r=c.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props),o.h=1;var s=new XMLHttpRequest;s.open("POST",d,!0),s.setRequestHeader("Content-Type","text/plain"),s.send(JSON.stringify(o)),s.onreadystatechange=function(){4===s.readyState&&t&&t.callback&&t.callback()}}var a=window.plausible&&window.plausible.q||[];window.plausible=n;for(var r,l=0;l<a.length;l++)n.apply(this,a[l]);function o(){r=u.pathname,n("pageview")}window.addEventListener("hashchange",o),"prerender"===c.visibilityState?c.addEventListener("visibilitychange",function(){r||"visible"!==c.visibilityState||o()}):o()}();