define("alipay/monitor/2.0.0/monitor",["arale/detector/1.0.1/detector","arale/detector/1.0.1/versioning"],function(e,n,r){function o(e){var n;if(null==e)return null;switch(typeof e){case"string":case"number":case"boolean":n=e;break;case"object":if(e instanceof Array){n=[];for(var r=e.length-1;r>=0;r--)n[r]=o(e[r])}else if(e instanceof RegExp)n=RegExp(e.source,(e.ignoreCase?"i":"")+(e.global?"g":"")+(e.multiline?"m":""));else if(e instanceof Date)n=new Date(e.valueOf());else if(e instanceof Error)e=n;else if(e instanceof Object){n={};for(var t in e)e.hasOwnProperty(t)&&(n[t]=o(e[t]))}break;default:throw Error("Not support the type.")}return n}function t(e,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}function i(){return(""+Math.random()).slice(-6)}function a(e){if(void 0===e||"string"!=typeof e)return"";var n=e.indexOf(";jsessionid=");if(n>=0)return e.substr(0,n);if(e.indexOf("/min/?")>=0)return e;do{if(n=e.indexOf("?",n),0>n)break;if("?"!=e.charAt(n+1))break;n+=2}while(n>=0);return 0>n?e:e.substr(0,n)}function f(e){if("[object Object]"!==Object.prototype.toString.call(e))return"";var n=[];for(var r in e)e.hasOwnProperty(r)&&n.push(r+"="+encodeURIComponent(e[r]));return n.join("&")}function s(e,n,r){if(r||(r=function(){}),!n)return r();var o=f(n),e=e+(0>e.indexOf("?")?"?":"&")+o;if(e.length>g)return r();var t=new Image(1,1);t.onload=t.onerror=t.onabort=function(){r(),t.onload=t.onerror=t.onabort=null,t=null},t.src=e}function c(){if(w&&!O){var e=p._DATAS.shift();if(e){O=!0;var n=o(y);"jserror"===e.profile&&(e.file=a(e.file)),n=t(n,e),n.rnd=i(),s(b,n,function(){O=!1,c()})}}}var u=window,l=document,d=window.location,p=u.monitor,v=e("arale/detector/1.0.1/detector"),m="2.0",b="https://magentmng.alipay.com/m.gif",g=v.engine.trident?2083:8190,h=a(d.href),w=!1,y={url:h,ref:l.referrer||"-",clnt:v.device.name+"/"+(v.device.version+"")+"|"+v.os.name+"/"+(v.os.version+"")+"|"+v.browser.name+"/"+(v.browser.version+"")+"|"+v.engine.name+"/"+(v.engine.version+""),v:m},O=!1,A=p._DATAS.push;p._DATAS.push=function(){A.apply(p._DATAS,arguments),c()},p.boot=function(e){w=e!==!1},window.monitor=p,r.exports=p});