(this["webpackJsonpnumpuz-with-react"]=this["webpackJsonpnumpuz-with-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},38:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),i=n(25),o=n.n(i),s=(n(16),n(6)),a=(n(38),n(2)),l=function(e){return Object(a.jsx)("div",{className:"square",onClick:function(){return e.onClick()},children:e.value})},u=n(20),d=n.n(u),j=n(26),f=function(e){var t=Array.from({length:e*e},(function(e,t){return String(t+1)}));return t[t.length-1]="##",t.sort((function(){return Math.random()-.5})),t},b=function(e,t,n){var r=e[t];return e[t]=e[n],e[n]=r,e},O=function(e,t){var n=function(e,t){for(var n=0,r=0;r<t*t-1;r++)for(var c=r+1;c<t*t;c++)e[r]>e[c]&&0!==e[r]&&0!==e[c]&&n++;return n}(e=e.map((function(e){return"##"===e?0:Number(e)})),t);return t%2===1?(console.log("Odd grid:",n%2===0),n%2===0):function(e,t){for(var n=t-1;n>=0;n--)for(var r=t-1;r>=0;r--)if(0===e[n][r])return t-n}(function(e,t){for(var n=new Array(t),r=0;r<n.length;r++)n[r]=new Array(t);for(var c=0;c<n.length;c++)for(var i=0;i<n[c].length;i++)n[c][i]=e[c*t+i];return n}(e,t),t)%2===1?(console.log("Even grid:",n%2===0),n%2===0):(console.log("Even grid:",n%2===1),n%2===1)},h=function(e){for(var t=f(e),n=0;!1===O(t,e);)n++,t=f(e);return console.log("It took this many re generations",n),console.log(t),console.trace("generateInitArray"),t},m=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){alert(t)}),30);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.gridSize,n=e.setGridSize,c=e.isActive,i=e.setIsActive,o=e.won,u=e.setWon,d=e.user,j=e.reset,f=e.setReset,O=Object(r.useState)(h(t)),g=Object(s.a)(O,2),x=g[0],v=g[1];Object(r.useEffect)((function(){var e=x.slice();if(-1===e.indexOf("##"))return i(!1),void u(!0);var t=Math.sqrt(e.length),n=Array.from({length:t*t},(function(e,t){return String(t+1)}));if(e[e.indexOf("##")]=String(e.length),function(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(var n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(e,n))return console.log("Game won"),i(!1),void u(!0);u(!1)}),[i,u,x]),Object(r.useEffect)((function(){o&&null===d&&m("Represent your score on the global leaderboard by logging in!")}),[o,d]);var p=Object(r.useCallback)((function(e){var n=x.indexOf("##");if(e===n)return 0;if(e%t===n%t)return 1;var r=n-n%t;return e>=r&&e<=r+t-1?-1:0}),[t,x]),S=Object(r.useCallback)((function(e,n){var r=x.slice();if(e<n)for(;r.indexOf("##")!==e;)r=b(r,r.indexOf("##"),r.indexOf("##")-t);else if(e>n)for(;r.indexOf("##")!==e;)r=b(r,r.indexOf("##"),r.indexOf("##")+t);v(r)}),[t,x]),y=Object(r.useCallback)((function(e,t){var n=x.slice();if(e<t)for(;n.indexOf("##")!==e;)n=b(n,n.indexOf("##"),n.indexOf("##")-1);else if(e>t)for(;n.indexOf("##")!==e;)n=b(n,n.indexOf("##"),n.indexOf("##")+1);v(n)}),[x]),w=Object(r.useCallback)((function(e){c||!1!==o||i(!0),0!==p(e)&&!1===o&&(1===p(e)?S(e,x.indexOf("##")):y(e,x.indexOf("##")))}),[y,c,p,i,x,S,o]);Object(r.useEffect)((function(){var e=function(){var e=x.slice().indexOf("##");e%t!==0&&w(e-1)},n=function(){var e=x.slice().indexOf("##");console.log(e),(e+1)%t!==0&&w(e+1)},r=function(){var e=x.slice().indexOf("##");console.log(e),e>=t&&w(e-t)},c=function(){var e=x.slice().indexOf("##");console.log(e),e<=t*t-t-1&&w(e+t)},i=function(t){var i={ArrowLeft:e,ArrowRight:n,ArrowUp:r,ArrowDown:c}[t.code];null===i||void 0===i||i()};return document.addEventListener("keydown",i),function(){document.removeEventListener("keydown",i)}}),[t,w,x]),Object(r.useEffect)((function(){t<2||t>10?(m("Gridsize can only be between 2 and 10!"),n(4)):(f(!0),v((function(e){return h(t)})),i(!1))}),[t,n,i,f]),Object(r.useEffect)((function(){null===d&&(v((function(e){return h(t)})),i(!1),u(!1))}),[d,t,i,u]),Object(r.useEffect)((function(){o&&null===d&&m("Represent your score on the global leaderboard by logging in!")}),[o,d]),Object(r.useEffect)((function(){j&&(v(h(t)),f(!1))}),[t,j,f]);var N=x.map((function(e,t){return Object(a.jsx)(l,{onClick:function(){return w(t)},value:x[t]},x[t])}));return Object(a.jsx)("div",{className:"board",style:{"--grid-size":t},children:N})},x=n(14),v=function(e){var t=e.won,n=e.user,c=e.gridSize,i=e.isActive,o=e.reset,l=e.setReset,u=e.firestore,d=e.firebase,j=Object(r.useState)(0),f=Object(s.a)(j,2),b=f[0],O=f[1];return Object(r.useEffect)((function(){o&&(l(!1),O(0))}),[o,l]),Object(r.useEffect)((function(){var e=null;return i?e=setInterval((function(){O((function(e){return e+100}))}),100):clearInterval(e),function(){clearInterval(e)}}),[i]),Object(r.useEffect)((function(){if(t&&n)if(console.log(n.uid),null!==localStorage.getItem(c)){if(console.log("won"),"undefined"===typeof JSON.parse(localStorage.getItem(c))[n.uid]||"undefined"!==typeof JSON.parse(localStorage.getItem(c))[n.uid]&&JSON.parse(localStorage.getItem(c))[n.uid]>b){var e=Object(x.a)({},JSON.parse(localStorage.getItem(c)));e[n.uid]=b,localStorage.setItem(c,JSON.stringify(e))}}else{var r={};r[n.uid]=b,localStorage.setItem(c,JSON.stringify(r))}}),[t,n,b,c]),Object(r.useEffect)((function(){if(t&&n){console.log(n.uid);var e=u.collection(String(c)).doc(n.uid);if(e.get().then((function(t){t.exists?t.data().score>b&&e.update({createdAt:d.firestore.FieldValue.serverTimestamp(),score:b}):e.set({uid:n.uid,createdAt:d.firestore.FieldValue.serverTimestamp(),userName:n.displayName,photoUrl:n.photoURL,score:b})})),null!==localStorage.getItem(c)){if(console.log("won"),"undefined"===typeof JSON.parse(localStorage.getItem(c))[n.uid]||"undefined"!==typeof JSON.parse(localStorage.getItem(c))[n.uid]&&JSON.parse(localStorage.getItem(c))[n.uid]>b){var r=Object(x.a)({},JSON.parse(localStorage.getItem(c)));r[n.uid]=b,localStorage.setItem(c,JSON.stringify(r))}}else{var i={};i[n.uid]=b,localStorage.setItem(c,JSON.stringify(i))}}}),[t,n,b,c,u]),Object(a.jsxs)("div",{className:"timer",children:[Object(a.jsxs)("span",{className:"digits",children:[("0"+Math.floor(b/6e4%60)).slice(-2),":"]}),Object(a.jsxs)("span",{className:"digits",children:[("0"+Math.floor(b/1e3%60)).slice(-2),"."]}),Object(a.jsx)("span",{className:"digits mili-sec",children:("0"+b/10%100).slice(-2)})]})},p=n(11),S=n(12);p.a.initializeApp({apiKey:"AIzaSyDBixDXHM4NCrY27GGRPP3X7SozpeUNjzw",authDomain:"numpuz-c8a36.firebaseapp.com",projectId:"numpuz-c8a36",storageBucket:"numpuz-c8a36.appspot.com",messagingSenderId:"188829020133",appId:"1:188829020133:web:5b1c6f9c42aea6c584c90c",measurementId:"G-J8LHBKCHE8"});var y=c.a.createContext();y.displayName="Store";var w=function(){return c.a.useContext(y)},N=function(e){var t=e.children,n=e.initialState,r=e.reducer,i=c.a.useReducer(r,n),o=Object(s.a)(i,2),l=o[0],u=o[1];return Object(a.jsx)(y.Provider,{value:[l,u],children:t})},k=(n(45),n(46),"APP/AUTH/LOGIN"),I="APP/AUTH/LOGOUT",z={user:null,auth:p.a.auth(),firestore:p.a.firestore()},A=(n(15),function(){var e=w(),t=Object(s.a)(e,2),n=t[0].auth,r=t[1],c=Object(S.a)(n),i=Object(s.a)(c,1)[0];return Object(a.jsxs)("div",{className:"leaderboard full",children:[Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(a.jsx)("button",{className:"sign-in",onClick:function(){var e=new p.a.auth.GoogleAuthProvider;n.signInWithPopup(e),r(function(e){return{type:k,payload:e}}(i))},children:"Sign in with Google"})}),Object(a.jsx)("p",{children:"Do not violate the community guidelines or you will be banned for life!"})]})}),E=function(){var e=w(),t=Object(s.a)(e,2),n=t[0].auth,r=t[1];return n.currentUser&&Object(a.jsx)("button",{className:"sign-out",onClick:function(){r({type:I}),n.signOut()},children:"Sign Out"})},C=n(27),R=function(e){return Object(a.jsxs)("td",{children:[Object(a.jsxs)("span",{className:"time score",children:[("0"+Math.floor(e.time/6e4%60)).slice(-2),":"]}),Object(a.jsxs)("span",{className:"time score",children:[("0"+Math.floor(e.time/1e3%60)).slice(-2),"."]}),Object(a.jsx)("span",{className:"time mili-sec score",children:("0"+e.time/10%100).slice(-2)})]})},J=function(e){var t=w(),n=Object(s.a)(t,1)[0].auth.currentUser.uid,r=e.document,c=r.userName,i=r.score,o=r.photoUrl,l=n===r.uid?"current-user":"";return Object(a.jsxs)("tr",{className:l,children:[Object(a.jsx)("td",{colSpan:"1",children:e.rank}),Object(a.jsx)("td",{colSpan:"1",style:{width:"4rem"},children:Object(a.jsx)("img",{src:o,alt:c+"'s photo.",className:"image"})}),Object(a.jsx)("td",{colSpan:"1",children:c}),Object(a.jsx)(R,{time:i})]})},G=Object(r.forwardRef)((function(e,t){var n=w(),r=Object(s.a)(n,1)[0].auth.currentUser.uid,c=e.document,i=c.userName,o=c.score,l=c.photoUrl,u=r===c.uid?"current-user":"";return Object(a.jsxs)("tr",{ref:t,className:u,children:[Object(a.jsx)("td",{colSpan:"1",children:e.rank}),Object(a.jsx)("td",{colSpan:"1",style:{width:"4rem"},children:Object(a.jsx)("img",{src:l,alt:i+"'s photo.",className:"image"})}),Object(a.jsx)("td",{colSpan:"1",children:i}),Object(a.jsx)(R,{time:o})]})})),P=n(28),U=n(29),M=n(33),D=n(32),L=function(e){Object(M.a)(n,e);var t=Object(D.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"render",value:function(){return Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"#"}),Object(a.jsx)("th",{style:{width:"4rem"},children:"Image"}),Object(a.jsx)("th",{children:"Username"}),Object(a.jsx)("th",{children:"Best Score"})]})})}}]),n}(r.Component),B=function(e){var t=w(),n=Object(s.a)(t,1)[0],c=n.auth,i=n.firestore,o=Object(S.a)(c),l=Object(s.a)(o,1)[0],u=i.collection(String(e.gridSize)).orderBy("score","asc"),d=Object(C.a)(u,{idField:"uid"}),j=Object(s.a)(d,1)[0],f=Object(r.useState)(!0),b=Object(s.a)(f,2),O=b[0],h=b[1],m=Object(r.createRef)(),g=Object(r.createRef)();return l&&Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(a.jsxs)("table",{className:"table-container",children:[Object(a.jsx)(L,{}),Object(a.jsx)("tbody",{children:j&&j.map((function(e,t){return 0===t?Object(a.jsx)(G,{document:e,rank:t+1,ref:m},e.uid):e.uid!==l.uid?Object(a.jsx)(J,{document:e,rank:t+1},e.uid):Object(a.jsx)(G,{document:e,rank:t+1,ref:g},e.uid)}))})]})}),Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(a.jsx)("button",{onClick:function(e){O?(null!==g.current&&g.current.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),h(!1)):(m.current.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),h(!0))},children:O?"Scroll to you":"Scroll to top"})})]})},F=function(e){return Object(a.jsxs)("div",{className:"leaderboard full",children:[Object(a.jsxs)("div",{className:"full",children:[Object(a.jsxs)("div",{className:"full",children:["You are logged in as ",e.user.displayName]}),Object(a.jsx)(E,{})]}),Object(a.jsx)(B,{gridSize:e.gridSize})]})},T=function(e){var t=w(),n=Object(s.a)(t,1)[0].auth,r=Object(S.a)(n),c=Object(s.a)(r,1)[0];return c?Object(a.jsx)(F,{user:c,gridSize:e.gridSize}):Object(a.jsx)(A,{})},H=n(31),V=n.n(H),W=n(30),q=n.n(W),K=function(){var e=V()(),t=e.width,n=e.height;return Object(a.jsx)(q.a,{width:t-1,height:n-1})},X=function(){var e=Object(r.useState)(4),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(!1),o=Object(s.a)(i,2),l=o[0],u=o[1],d=Object(r.useState)(!1),j=Object(s.a)(d,2),f=j[0],b=j[1],O=Object(r.useState)(!1),h=Object(s.a)(O,2),m=h[0],x=h[1],y=Object(r.useState)(!1),N=Object(s.a)(y,2),k=N[0],I=N[1],z=w(),A=Object(s.a)(z,1)[0],E=A.auth,C=A.firestore,R=Object(S.a)(E),J=Object(s.a)(R,1)[0],G=Object(r.useState)(!0),P=Object(s.a)(G,2),U=P[0],M=P[1];return Object(r.useEffect)((function(){U?(document.documentElement.style.setProperty("--bg-color","rgb(47,47,47)"),document.documentElement.style.setProperty("--main-color","white")):(document.documentElement.style.setProperty("--bg-color","white"),document.documentElement.style.setProperty("--main-color","rgb(47,47,47)"))}),[U]),Object(a.jsxs)(a.Fragment,{children:[l?Object(a.jsx)(K,{}):null,Object(a.jsxs)("div",{style:{"--bg-color":U?"rgb(47,47,47)":"white","--main-color":U?"white":"rgb(47,47,47)",backgroundColor:"var(--bg-color)",color:"var(--main-color)"},children:[Object(a.jsx)("h1",{children:"Number puzzle!"}),Object(a.jsxs)("div",{className:"game",children:[Object(a.jsx)(g,{isActive:f,setIsActive:b,gridSize:n,setWon:u,setGridSize:c,user:J,won:l,reset:k,setReset:I}),Object(a.jsxs)("div",{className:"details",children:[Object(a.jsx)("label",{htmlFor:"number",children:Object(a.jsxs)("h3",{className:"grid-size",children:[Object(a.jsx)("span",{className:"child-1",children:"Decide grid size:"}),Object(a.jsx)("span",{className:"child-1",children:n}),Object(a.jsx)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",onClick:function(){c((function(e){return e+1}))},style:{color:"var(--main-color)"},children:Object(a.jsx)("path",{d:"M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"})}),Object(a.jsx)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd",onClick:function(){c((function(e){return e-1}))},children:Object(a.jsx)("path",{d:"M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"})})]})}),Object(a.jsx)("div",{children:Object(a.jsx)("h3",{children:l?"Game won":"Game not won"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{id:"dark-mode",type:"checkbox",checked:U,onChange:function(e){return M((function(e){return!e}))}}),Object(a.jsx)("label",{htmlFor:"dark-mode",children:"Enable Dark Mode"})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"my-button",onClick:function(){b(!1),u(!1),x(!0),I(!0)},children:"Reset board"})}),Object(a.jsx)(v,{reset:m,setReset:x,won:l,user:J,gridSize:n,isActive:f,firebase:p.a,firestore:C}),Object(a.jsx)(T,{gridSize:n})]})]})]})]})};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(N,{initialState:z,reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,n={};switch(t.type){case k:n=Object(x.a)(Object(x.a)({},e),{},{user:t.payload});break;case I:n=Object(x.a)(Object(x.a)({},e),{},{user:null});break;default:throw new Error("Invalid Dispatch operation")}return n},children:Object(a.jsx)(X,{})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.c120dc4b.chunk.js.map