!function(){"use strict";var e,t,i,a=window.location,r=window.document,l=r.getElementById("plausible"),o=l.getAttribute("data-api")||(e=l.src.split("/"),t=e[0],i=e[2],t+"//"+i+"/api/event");function n(e,t){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(e){}var i={};i.n=e,i.u=a.href,i.d=l.getAttribute("data-domain"),i.r=r.referrer||null,i.w=window.innerWidth,t&&t.meta&&(i.m=JSON.stringify(t.meta)),t&&t.props&&(i.p=t.props),i.h=1;var n=new XMLHttpRequest;n.open("POST",o,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(i)),n.onreadystatechange=function(){4===n.readyState&&t&&t.callback&&t.callback()}}var s=window.plausible&&window.plausible.q||[];window.plausible=n;for(var d,p=0;p<s.length;p++)n.apply(this,s[p]);function c(){d=a.pathname,n("pageview")}window.addEventListener("hashchange",c),"prerender"===r.visibilityState?r.addEventListener("visibilitychange",function(){d||"visible"!==r.visibilityState||c()}):c()}();