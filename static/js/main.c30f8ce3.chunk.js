(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],[,,,,,function(e,t,n){},,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),l=n.n(r),o=(n(14),n(8)),i=n(3),u=(n(5),n(6),function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"todo"},c.a.createElement("button",{className:"btn btn-danger",onClick:function(){e.onSelect(e.id)}},"X"),c.a.createElement("li",null," ",e.text," ")))}),s=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)([]),s=Object(i.a)(l,2),m=s[0],d=s[1],f=function(e){d((function(t){return t.filter((function(t,n){return n!==e}))}))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"main_div"},c.a.createElement("div",{className:"center_div"},c.a.createElement("br",null),c.a.createElement("h1",{className:"heading"},"To Do List"),c.a.createElement("br",null),c.a.createElement("input",{value:n,className:"input",onChange:function(e){return r(e.target.value)},type:"text"}),c.a.createElement("button",{className:"btn btn-success",onClick:function(e){e.preventDefault(),d((function(e){return[].concat(Object(o.a)(e),[n])})),r("")}},"Add"),c.a.createElement("br",null),c.a.createElement("ol",{className:"list"},m.map((function(e,t){return c.a.createElement(u,{text:e,key:t,id:t,onSelect:f})}))))))};n(15);var m=function(){return c.a.createElement(s,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.c30f8ce3.chunk.js.map