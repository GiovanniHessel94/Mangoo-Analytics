!function(){"use strict";var e,t,a,c=window.location,s=window.document,p=s.getElementById("plausible"),d=p.getAttribute("data-api")||(e=p.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function f(e){console.warn("Ignoring Event: "+e)}function r(e,t){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var a=p&&p.getAttribute("data-include"),r=p&&p.getAttribute("data-exclude");if("pageview"===e){var n=!a||a&&a.split(",").some(l),i=r&&r.split(",").some(l);if(!n||i)return f("exclusion rule")}function l(e){return c.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var o={};o.n=e,o.u=t&&t.u?t.u:c.href,o.d=p.getAttribute("data-domain"),o.r=s.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props),o.h=1;var u=new XMLHttpRequest;u.open("POST",d,!0),u.setRequestHeader("Content-Type","text/plain"),u.send(JSON.stringify(o)),u.onreadystatechange=function(){4===u.readyState&&t&&t.callback&&t.callback()}}function n(e){for(var t=e.target,a="auxclick"===e.type&&2===e.which,r="click"===e.type;t&&(void 0===t.tagName||"a"!==t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==c.host&&((a||r)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!r||(setTimeout(function(){c.href=t.href},150),e.preventDefault()))}s.addEventListener("click",n),s.addEventListener("auxclick",n);var i=window.plausible&&window.plausible.q||[];window.plausible=r;for(var l=0;l<i.length;l++)r.apply(this,i[l])}();