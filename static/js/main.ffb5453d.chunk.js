(this.webpackJsonppick4me=this.webpackJsonppick4me||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},22:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),i=(a(22),a(3)),l=a.n(i),s=a(6),u=a(2),m=a(10),p=a.n(m),h=a(8),d=a.n(h),f=(a(30),a(13)),E={headers:{Authorization:"Bearer ".concat("F54IM23WJ2UF7DH3Y7ALPNZBA543MU5X")}},b={headers:{Authorization:"Bearer ".concat("GtvoBy1MfDo1yYp-pQuCFQXMvo5tkw9dHiN8dYy3LjcRT1EfsC3qfNwCBkzgXts8VWvZ_nmk7OQe0899hgexaFgFnonQnYDUPOfzkaISCOfdzWXEYpCHxVwqocxWX3Yx")}},v=function(){var e=Object(s.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.wit.ai/message","?q=").concat(t),Object(f.a)({method:"get"},E)).then((function(e){if(e.ok)return e.json()}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={term:"".concat(t.foodType," restaurants"),limit:25,location:"".concat(t.location)},n="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?"+new URLSearchParams(a),e.next=4,fetch(n,Object(f.a)({method:"get"},b)).then((function(e){if(e.ok)return e.json();throw Error(e.statusText)})).catch((function(e){console.log(e)}));case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=e.entities,a={};if(t.hasOwnProperty("ethnicity:ethnicity")){var n=t["ethnicity:ethnicity"][0].body;a.foodType=n}if(t.hasOwnProperty("wit$location:location")){var r=t["wit$location:location"][0].body;a.location=r}return a},w=a(7),x=a.n(w),y=a(4),O=a(5),j=(a(36),function(e){var t=x()({"microphone-button":!0,"microphone-button-active":e.listening});return r.a.createElement(y.a,{className:t,icon:O.b,onClick:e.action})}),k=(a(37),function(e){var t=e.handleSwitch;return r.a.createElement("div",{className:"internal-input-selection-holder"},r.a.createElement("p",{className:"input-selection-title"},"Talk to Mr. Wit using..."),r.a.createElement("div",{className:"internal-input-selection-options-holder"},r.a.createElement("button",{className:x()("voice-button","input-selection-button"),onClick:function(){return t(!0)}},r.a.createElement(y.a,{icon:O.b}),r.a.createElement("span",{className:"input-selection-button-text"},"Voice")),r.a.createElement("button",{className:x()("text-button","input-selection-button"),onClick:function(){return t(!1)}},r.a.createElement(y.a,{icon:O.a}),r.a.createElement("span",{className:"input-selection-button-text"},"Text"))))}),S=(a(38),a(39),function(e){var t=e.handleSubmit;return r.a.createElement("button",{className:"pick-button",onClick:t},r.a.createElement("span",{className:"pick-button-text"},"\ud83e\udd16 Pick"))}),M=["I want korean","I'm feeling American","Let's eat Greek"],C=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(!1),l=Object(u.a)(i,2),s=l[0],m=l[1],p=Math.floor(Math.random()*Math.floor(M.length)),h=Object(n.useState)(M[p]),d=Object(u.a)(h,1)[0],f=function(t){t?e.handleTextSubmit(t):m(!0)},E=function(){return s?r.a.createElement("p",{className:"text-input-error-message"},"Tell Mr. Wit what you feeling"):r.a.createElement("p",{className:"text-input-error-message"},"\xa0")};return r.a.createElement("div",{className:"text-input-overall-container"},r.a.createElement("div",{className:"text-input-container"},r.a.createElement(y.a,{className:"text-input-indicator",icon:O.a}),r.a.createElement("input",{className:"text-input-selection",placeholder:d,type:"text",value:c,onChange:function(e){return function(e){var t=e.target.value;o(t),t&&m(!1)}(e)},onKeyPress:function(e){"Enter"===e.key&&f(c)}})),r.a.createElement(E,null),r.a.createElement(S,{handleSubmit:function(){return f(c)}}))},T=(a(40),function(e){var t=e.restaurant,a=t.image_url,n=t.name,c=t.url,o=t.rating,i=t.price,l=t.location.display_address.join(" ");return r.a.createElement("div",{className:"restaurant-card",onClick:function(){window.open(c,"_blank")}},r.a.createElement("img",{src:a}),r.a.createElement("p",{className:"title"},n),r.a.createElement("div",{className:"details"},r.a.createElement("p",null,i),r.a.createElement("p",null,"".concat(o," / 5.0 rating"))),r.a.createElement("div",null,l))}),W=(a(41),function(e){var t=e.handleTextChange;return r.a.createElement("div",{className:"location-input-container"},r.a.createElement("label",{className:"location-label",htmlFor:"location"},"Manually set location:"),r.a.createElement("input",{className:"location-text-input-selection",id:"location",placeholder:"zip code or city, state",onChange:function(e){return t(e.target.value)},type:"text"}))}),A=function(e){return e.transcript?r.a.createElement("p",{className:"transcript"},e.transcript):r.a.createElement("p",{className:"transcript"},"\xa0")},P=function(e){return e.hasError?r.a.createElement("p",{className:"text-input-error-message"},"Tell Mr. Wit what you feeling"):r.a.createElement("p",{className:"text-input-error-message"},"\xa0")};var I=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)({}),o=Object(u.a)(c,2),i=o[0],m=o[1],f=Object(n.useState)(""),E=Object(u.a)(f,2),b=E[0],w=E[1],x=Object(n.useState)("washington d.c."),I=Object(u.a)(x,2),B=I[0],z=I[1],F=Object(n.useState)(d.a.browserSupportsSpeechRecognition()),L=Object(u.a)(F,1)[0],Y=Object(n.useState)(!1),U=Object(u.a)(Y,2),X=U[0],H=U[1],Q=Object(n.useState)(!0),R=Object(u.a)(Q,2),_=R[0],q=R[1],D=Math.floor(Math.random()*Math.floor(M.length)),J=Object(n.useState)(M[D]),V=Object(u.a)(J,2),$=V[0],G=V[1],Z=Object(h.useSpeechRecognition)(),K=Z.transcript,ee=Z.resetTranscript,te=(Z.finalTranscript,Z.listening),ae=function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p.a.isEmpty(t)){e.next=5;break}return H(!0),e.abrupt("return");case 5:H(!1);case 6:return w(t),e.next=9,v(t).then((function(e){a(!0);var t=N(e);t.hasOwnProperty("location")||(t.location=B),g(t).then((function(e){if(p.a.isEmpty(e))return a(!1),void H(!0);var t,n=e.businesses,r=(t=n)[Math.floor(Math.random()*Math.floor(t.length))];m(r),a(!1)}))}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=p.a.isEmpty(i)?r.a.createElement("div",{className:"input-holder"},r.a.createElement("div",{className:"microphone-holder"},_?L?r.a.createElement("div",null,K||te?r.a.createElement(A,{transcript:K}):r.a.createElement("p",{className:"example-phraseword"},$),r.a.createElement(j,{action:function(){te?(d.a.stopListening(),ae(K)):(ee(),d.a.startListening())},listening:te}),r.a.createElement(P,{hasError:X}),r.a.createElement(S,{handleSubmit:function(){return ae(K)}})):r.a.createElement("div",null,r.a.createElement("h3",null,"Mr. Wit can't hear on this browser. Use text."),r.a.createElement("h4",null,"Supported browsers"),r.a.createElement("ul",{className:"supported-browsers-list"},r.a.createElement("li",null,"Chrome (desktop and Android)"),r.a.createElement("li",null,"Microsoft Edge"),r.a.createElement("li",null,"Android Webview"),r.a.createElement("li",null,"Samsung Internet"))):r.a.createElement(C,{handleTextSubmit:ae}))):r.a.createElement("div",{className:"input-holder"},r.a.createElement("div",{className:"restaurant-result-holder"},r.a.createElement("p",{className:"utterance"},'"'.concat(b,'"')),r.a.createElement(T,{restaurant:i}),r.a.createElement("button",{className:"redo-button",onClick:function(){return ae(b)}},r.a.createElement(y.a,{icon:O.c}),r.a.createElement("span",{className:"input-selection-button-text"},"I don't want this one"))));return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"title"},"Pick4Me"),r.a.createElement("hr",{className:"title-divider"}),r.a.createElement("p",{className:"subtitle"},"I'm too hungry to decide where to eat. Help me Mr. Wit!"),r.a.createElement("p",{className:"robot-emoji"},"\ud83e\udd16")),r.a.createElement(W,{handleTextChange:function(e){z(e)}}),ne,r.a.createElement("div",{className:"input-selection-holder"},r.a.createElement(k,{handleSwitch:function(e){w(""),m({}),q(e),ee(),D=Math.floor(Math.random()*Math.floor(M.length)),G(M[D])}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.ffb5453d.chunk.js.map