(this["webpackJsonpnumpuz-with-react"]=this["webpackJsonpnumpuz-with-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},33:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(4),c=n.n(r),i=n(23),a=n.n(i),o=(n(16),n(14)),s=n(8),l=(n(33),n(2)),u=function(e){return Object(l.jsx)("div",{className:"square",onClick:function(){return e.onClick()},children:e.value})},d=function(e){var t=e.squares.slice();return t=t.map((function(n,r){return Object(l.jsx)(u,{onClick:function(){return e.squareClick(r)},value:t[r]},t[r])})),Object(l.jsx)("div",{className:"board",style:{"--grid-size":e.gridSize},children:t})},j=function(e){return Object(l.jsxs)("div",{className:"timer",children:[Object(l.jsxs)("span",{className:"digits",children:[("0"+Math.floor(e.time/6e4%60)).slice(-2),":"]}),Object(l.jsxs)("span",{className:"digits",children:[("0"+Math.floor(e.time/1e3%60)).slice(-2),"."]}),Object(l.jsx)("span",{className:"digits mili-sec",children:("0"+e.time/10%100).slice(-2)})]})},f=n(11),b=n(12);f.a.initializeApp({apiKey:"AIzaSyDBixDXHM4NCrY27GGRPP3X7SozpeUNjzw",authDomain:"numpuz-c8a36.firebaseapp.com",projectId:"numpuz-c8a36",storageBucket:"numpuz-c8a36.appspot.com",messagingSenderId:"188829020133",appId:"1:188829020133:web:5b1c6f9c42aea6c584c90c",measurementId:"G-J8LHBKCHE8"});var O=c.a.createContext();O.displayName="Store";var h=function(){return c.a.useContext(O)},m=function(e){var t=e.children,n=e.initialState,r=e.reducer,i=c.a.useReducer(r,n),a=Object(s.a)(i,2),o=a[0],u=a[1];return Object(l.jsx)(O.Provider,{value:[o,u],children:t})},g=(n(39),n(40),"APP/AUTH/LOGIN"),x="APP/AUTH/LOGOUT",p={user:null,auth:f.a.auth(),firestore:f.a.firestore()},v=(n(15),function(){var e=h(),t=Object(s.a)(e,2),n=t[0].auth,r=t[1],c=Object(b.a)(n),i=Object(s.a)(c,1)[0];return Object(l.jsxs)("div",{className:"leaderboard full",children:[Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(l.jsx)("button",{className:"sign-in",onClick:function(){var e=new f.a.auth.GoogleAuthProvider;n.signInWithPopup(e),r(function(e){return{type:g,payload:e}}(i))},children:"Sign in with Google"})}),Object(l.jsx)("p",{children:"Do not violate the community guidelines or you will be banned for life!"})]})}),S=function(){var e=h(),t=Object(s.a)(e,2),n=t[0].auth,r=t[1];return n.currentUser&&Object(l.jsx)("button",{className:"sign-out",onClick:function(){r({type:x}),n.signOut()},children:"Sign Out"})},y=n(24),N=function(e){return Object(l.jsxs)("td",{children:[Object(l.jsxs)("span",{className:"time score",children:[("0"+Math.floor(e.time/6e4%60)).slice(-2),":"]}),Object(l.jsxs)("span",{className:"time score",children:[("0"+Math.floor(e.time/1e3%60)).slice(-2),"."]}),Object(l.jsx)("span",{className:"time mili-sec score",children:("0"+e.time/10%100).slice(-2)})]})},w=function(e){var t=h(),n=Object(s.a)(t,1)[0].auth.currentUser.uid,r=e.document,c=r.userName,i=r.score,a=r.photoUrl,o=n===r.uid?"current-user":"";return Object(l.jsxs)("tr",{className:o,children:[Object(l.jsx)("td",{colSpan:"1",children:e.rank}),Object(l.jsx)("td",{colSpan:"1",style:{width:"4rem"},children:Object(l.jsx)("img",{src:a,alt:c+"'s photo.",className:"image"})}),Object(l.jsx)("td",{colSpan:"1",children:c}),Object(l.jsx)(N,{time:i})]})},I=Object(r.forwardRef)((function(e,t){var n=h(),r=Object(s.a)(n,1)[0].auth.currentUser.uid,c=e.document,i=c.userName,a=c.score,o=c.photoUrl,u=r===c.uid?"current-user":"";return Object(l.jsxs)("tr",{ref:t,className:u,children:[Object(l.jsx)("td",{colSpan:"1",children:e.rank}),Object(l.jsx)("td",{colSpan:"1",style:{width:"4rem"},children:Object(l.jsx)("img",{src:o,alt:i+"'s photo.",className:"image"})}),Object(l.jsx)("td",{colSpan:"1",children:i}),Object(l.jsx)(N,{time:a})]})})),k=n(25),z=n(26),C=n(28),E=n(27),J=function(e){Object(C.a)(n,e);var t=Object(E.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(z.a)(n,[{key:"render",value:function(){return Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"#"}),Object(l.jsx)("th",{style:{width:"4rem"},children:"Image"}),Object(l.jsx)("th",{children:"Username"}),Object(l.jsx)("th",{children:"Best Score"})]})})}}]),n}(r.Component),A=function(e){var t=h(),n=Object(s.a)(t,1)[0],c=n.auth,i=n.firestore,a=Object(b.a)(c),o=Object(s.a)(a,1)[0],u=i.collection(String(e.gridSize)).orderBy("score","asc"),d=Object(y.a)(u,{idField:"uid"}),j=Object(s.a)(d,1)[0],f=Object(r.useState)(!0),O=Object(s.a)(f,2),m=O[0],g=O[1],x=Object(r.createRef)(),p=Object(r.createRef)();return o&&Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(l.jsxs)("table",{className:"table-container",children:[Object(l.jsx)(J,{}),Object(l.jsx)("tbody",{children:j&&j.map((function(e,t){return 0===t?Object(l.jsx)(I,{document:e,rank:t+1,ref:x},e.uid):e.uid!==o.uid?Object(l.jsx)(w,{document:e,rank:t+1},e.uid):Object(l.jsx)(I,{document:e,rank:t+1,ref:p},e.uid)}))})]})}),Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(l.jsx)("button",{onClick:function(e){m?(null!==p.current&&p.current.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),g(!1)):(x.current.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),g(!0))},children:m?"Scroll to you":"Scroll to top"})})]})},P=function(e){return Object(l.jsxs)("div",{className:"leaderboard full",children:[Object(l.jsxs)("div",{className:"full",children:[Object(l.jsxs)("div",{className:"full",children:["You are logged in as ",e.user.displayName]}),Object(l.jsx)(S,{})]}),Object(l.jsx)(A,{gridSize:e.gridSize})]})},U=function(e){var t=h(),n=Object(s.a)(t,1)[0].auth,r=Object(b.a)(n),c=Object(s.a)(r,1)[0];return c?Object(l.jsx)(P,{user:c,gridSize:e.gridSize}):Object(l.jsx)(v,{})},G=function(e){var t=Array.from({length:e*e},(function(e,t){return String(t+1)}));return t[t.length-1]="##",t.sort((function(){return Math.random()-.5})),t},M=function(e,t,n){var r=e[t];return e[t]=e[n],e[n]=r,e},R=function(e,t){var n=function(e,t){for(var n=0,r=0;r<t*t-1;r++)for(var c=r+1;c<t*t;c++)e[r]>e[c]&&0!==e[r]&&0!==e[c]&&n++;return n}(e=e.map((function(e){return"##"===e?0:Number(e)})),t);return t%2===1?(console.log("Odd grid:",n%2===0),n%2===0):function(e,t){for(var n=t-1;n>=0;n--)for(var r=t-1;r>=0;r--)if(0===e[n][r])return t-n}(function(e,t){for(var n=new Array(t),r=0;r<n.length;r++)n[r]=new Array(t);for(var c=0;c<n.length;c++)for(var i=0;i<n[c].length;i++)n[c][i]=e[c*t+i];return n}(e,t),t)%2===1?(console.log("Even grid:",n%2===0),n%2===0):(console.log("Even grid:",n%2===1),n%2===1)},D=function(e){for(var t=G(e),n=0;!1===R(t,e);)n++,t=G(e);return console.log("It took this many re generations",n),console.log(t),console.trace("generateInitArray"),t},q=function(){var e=Object(r.useState)(4),t=Object(s.a)(e,2),n=t[0],c=t[1],i=D(n),a=Object(r.useState)(i),u=Object(s.a)(a,2),O=u[0],m=u[1],g=Object(r.useState)(!1),x=Object(s.a)(g,2),p=x[0],v=x[1],S=Object(r.useState)(0),y=Object(s.a)(S,2),N=y[0],w=y[1],I=Object(r.useState)(!1),k=Object(s.a)(I,2),z=k[0],C=k[1],E=h(),J=Object(s.a)(E,1)[0],A=J.auth,P=J.firestore,G=Object(b.a)(A),R=Object(s.a)(G,1)[0],q=Object(r.useState)(!0),B=Object(s.a)(q,2),F=B[0],H=B[1];Object(r.useEffect)((function(){F?(document.documentElement.style.setProperty("--bg-color","rgb(47,47,47)"),document.documentElement.style.setProperty("--main-color","white")):(document.documentElement.style.setProperty("--bg-color","white"),document.documentElement.style.setProperty("--main-color","rgb(47,47,47)"))}),[F]),Object(r.useEffect)((function(){if(p&&R)if(console.log(R.uid),null!==localStorage.getItem(n)){if(console.log("won"),"undefined"===typeof JSON.parse(localStorage.getItem(n))[R.uid]||"undefined"!==typeof JSON.parse(localStorage.getItem(n))[R.uid]&&JSON.parse(localStorage.getItem(n))[R.uid]>N){var e=Object(o.a)({},JSON.parse(localStorage.getItem(n)));e[R.uid]=N,localStorage.setItem(n,JSON.stringify(e))}}else{var t={};t[R.uid]=N,localStorage.setItem(n,JSON.stringify(t))}}),[p,R,N,n]),Object(r.useEffect)((function(){if(p&&R){console.log(R.uid);var e=P.collection(String(n)).doc(R.uid);if(e.get().then((function(t){t.exists?t.data().score>N&&e.update({createdAt:f.a.firestore.FieldValue.serverTimestamp(),score:N}):e.set({uid:R.uid,createdAt:f.a.firestore.FieldValue.serverTimestamp(),userName:R.displayName,photoUrl:R.photoURL,score:N})})),null!==localStorage.getItem(n)){if(console.log("won"),"undefined"===typeof JSON.parse(localStorage.getItem(n))[R.uid]||"undefined"!==typeof JSON.parse(localStorage.getItem(n))[R.uid]&&JSON.parse(localStorage.getItem(n))[R.uid]>N){var t=Object(o.a)({},JSON.parse(localStorage.getItem(n)));t[R.uid]=N,localStorage.setItem(n,JSON.stringify(t))}}else{var r={};r[R.uid]=N,localStorage.setItem(n,JSON.stringify(r))}}}),[p,R,N,n,P]),Object(r.useEffect)((function(){n<2||n>10?(alert("Gridsize can only be between 2 and 10!"),c(4)):(m((function(e){return D(n)})),C(!1))}),[n]),Object(r.useEffect)((function(){null===R&&(m((function(e){return D(n)})),C(!1),v(!1),w(0))}),[R,n]),Object(r.useEffect)((function(){var e=O.slice();if(-1!==e.indexOf("##")){var t=Math.sqrt(e.length),n=Array.from({length:t*t},(function(e,t){return String(t+1)}));if(e[e.indexOf("##")]=String(e.length),function(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(var n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(e,n))return console.log("Game won"),C(!1),void v(!0);v(!1)}else v(!0)}),[O]),Object(r.useEffect)((function(){var e=null;return z?e=setInterval((function(){w((function(e){return e+100}))}),100):clearInterval(e),function(){clearInterval(e)}}),[z]),Object(r.useEffect)((function(){p&&(alert("Congratulations!! You have won the game!"),null===R&&alert("Represent your score on the global leaderboard by logging in!"))}),[p,R]);var T=function(e){var t=O.indexOf("##");if(e===t)return 0;if(e%n===t%n)return 1;var r=t-t%n;return e>=r&&e<=r+n-1?-1:0};return Object(l.jsxs)("div",{style:{"--bg-color":F?"rgb(47,47,47)":"white","--main-color":F?"white":"rgb(47,47,47)",backgroundColor:"var(--bg-color)",color:"var(--main-color)"},children:[Object(l.jsx)("h1",{children:"Number puzzle!"}),Object(l.jsxs)("div",{className:"game",children:[Object(l.jsx)(d,{squares:O,gridSize:n,squareClick:function(e){z||!1!==p||(C(!0),w(0)),0!==T(e)&&!1===p&&(1===T(e)?function(e,t){var r=O.slice();if(e<t)for(;r.indexOf("##")!==e;)r=M(r,r.indexOf("##"),r.indexOf("##")-n);else if(e>t)for(;r.indexOf("##")!==e;)r=M(r,r.indexOf("##"),r.indexOf("##")+n);m(r)}(e,O.indexOf("##")):function(e,t){var n=O.slice();if(e<t)for(;n.indexOf("##")!==e;)n=M(n,n.indexOf("##"),n.indexOf("##")-1);else if(e>t)for(;n.indexOf("##")!==e;)n=M(n,n.indexOf("##"),n.indexOf("##")+1);m(n)}(e,O.indexOf("##")))}}),Object(l.jsxs)("div",{className:"details",children:[Object(l.jsx)("label",{htmlFor:"number",children:Object(l.jsxs)("h3",{className:"grid-size",children:[Object(l.jsx)("span",{className:"child-1",children:"Decide grid size:"}),Object(l.jsx)("span",{className:"child-1",children:n}),Object(l.jsx)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd",onClick:function(){c((function(e){return e+1}))},style:{color:"var(--main-color)"},children:Object(l.jsx)("path",{d:"M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"})}),Object(l.jsx)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd",onClick:function(){c((function(e){return e-1}))},children:Object(l.jsx)("path",{d:"M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"})})]})}),Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:p?"Game won":"Game not won"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{id:"dark-mode",type:"checkbox",checked:F,onChange:function(e){return H((function(e){return!e}))}}),Object(l.jsx)("label",{htmlFor:"dark-mode",children:"Enable Dark Mode"})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"my-button",onClick:function(){m((function(e){return D(n)})),C(!1),v(!1),w(0)},children:"Reset board"})}),Object(l.jsx)(j,{time:N}),Object(l.jsx)(U,{gridSize:n})]})]})]})};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(m,{initialState:p,reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n={};switch(t.type){case g:n=Object(o.a)(Object(o.a)({},e),{},{user:t.payload});break;case x:n=Object(o.a)(Object(o.a)({},e),{},{user:null});break;default:throw new Error("Invalid Dispatch operation")}return n},children:Object(l.jsx)(q,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.7a8284b4.chunk.js.map