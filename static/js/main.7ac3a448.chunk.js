(this["webpackJsonpnumpuz-with-react"]=this["webpackJsonpnumpuz-with-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},33:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n.n(r),i=n(23),a=n.n(i),s=(n(16),n(14)),l=n(8),o=(n(33),n(2)),u=function(e){return Object(o.jsx)("div",{className:"square",onClick:function(){return e.onClick()},children:e.value})},d=function(e){var t=e.squares.slice();return t=t.map((function(n,r){return Object(o.jsx)(u,{onClick:function(){return e.squareClick(r)},value:t[r]},t[r])})),Object(o.jsx)("div",{className:"board",style:{"--grid-size":e.gridSize},children:t})},j=function(e){return Object(o.jsxs)("div",{className:"timer",children:[Object(o.jsxs)("span",{className:"digits",children:[("0"+Math.floor(e.time/6e4%60)).slice(-2),":"]}),Object(o.jsxs)("span",{className:"digits",children:[("0"+Math.floor(e.time/1e3%60)).slice(-2),"."]}),Object(o.jsx)("span",{className:"digits mili-sec",children:("0"+e.time/10%100).slice(-2)})]})},f=n(11),O=n(12);f.a.initializeApp({apiKey:"AIzaSyDBixDXHM4NCrY27GGRPP3X7SozpeUNjzw",authDomain:"numpuz-c8a36.firebaseapp.com",projectId:"numpuz-c8a36",storageBucket:"numpuz-c8a36.appspot.com",messagingSenderId:"188829020133",appId:"1:188829020133:web:5b1c6f9c42aea6c584c90c",measurementId:"G-J8LHBKCHE8"});var b=c.a.createContext();b.displayName="Store";var h=function(){return c.a.useContext(b)},m=function(e){var t=e.children,n=e.initialState,r=e.reducer,i=c.a.useReducer(r,n),a=Object(l.a)(i,2),s=a[0],u=a[1];return Object(o.jsx)(b.Provider,{value:[s,u],children:t})},g=(n(39),n(40),"APP/AUTH/LOGIN"),x="APP/AUTH/LOGOUT",p={user:null,auth:f.a.auth(),firestore:f.a.firestore()},v=(n(15),function(){var e=h(),t=Object(l.a)(e,2),n=t[0].auth,r=t[1],c=Object(O.a)(n),i=Object(l.a)(c,1)[0];return Object(o.jsxs)("div",{className:"leaderboard full",children:[Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(o.jsx)("button",{className:"sign-in",onClick:function(){var e=new f.a.auth.GoogleAuthProvider;n.signInWithPopup(e),r(function(e){return{type:g,payload:e}}(i))},children:"Sign in with Google"})}),Object(o.jsx)("p",{children:"Do not violate the community guidelines or you will be banned for life!"})]})}),S=function(){var e=h(),t=Object(l.a)(e,2),n=t[0].auth,r=t[1];return n.currentUser&&Object(o.jsx)("button",{className:"sign-out",onClick:function(){r({type:x}),n.signOut()},children:"Sign Out"})},N=n(24),y=function(e){return Object(o.jsxs)("td",{children:[Object(o.jsxs)("span",{className:"time score",children:[("0"+Math.floor(e.time/6e4%60)).slice(-2),":"]}),Object(o.jsxs)("span",{className:"time score",children:[("0"+Math.floor(e.time/1e3%60)).slice(-2),"."]}),Object(o.jsx)("span",{className:"time mili-sec score",children:("0"+e.time/10%100).slice(-2)})]})},w=function(e){var t=h(),n=Object(l.a)(t,1)[0].auth.currentUser.uid,r=e.document,c=r.userName,i=r.score,a=r.photoUrl,s=n===r.uid?"current-user":"";return Object(o.jsxs)("tr",{className:s,children:[Object(o.jsx)("td",{colSpan:"1",children:e.rank}),Object(o.jsx)("td",{colSpan:"1",style:{width:"4rem"},children:Object(o.jsx)("img",{src:a,alt:c+"'s photo.",className:"image"})}),Object(o.jsx)("td",{colSpan:"1",children:c}),Object(o.jsx)(y,{time:i})]})},I=Object(r.forwardRef)((function(e,t){var n=h(),r=Object(l.a)(n,1)[0].auth.currentUser.uid,c=e.document,i=c.userName,a=c.score,s=c.photoUrl,u=r===c.uid?"current-user":"";return Object(o.jsxs)("tr",{ref:t,className:u,children:[Object(o.jsx)("td",{colSpan:"1",children:e.rank}),Object(o.jsx)("td",{colSpan:"1",style:{width:"4rem"},children:Object(o.jsx)("img",{src:s,alt:i+"'s photo.",className:"image"})}),Object(o.jsx)("td",{colSpan:"1",children:i}),Object(o.jsx)(y,{time:a})]})})),k=n(25),z=n(26),C=n(28),J=n(27),A=function(e){Object(C.a)(n,e);var t=Object(J.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(z.a)(n,[{key:"render",value:function(){return Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{style:{width:"4rem"},children:"Image"}),Object(o.jsx)("th",{children:"Username"}),Object(o.jsx)("th",{children:"Best Score"})]})})}}]),n}(r.Component),U=function(e){var t=h(),n=Object(l.a)(t,1)[0],c=n.auth,i=n.firestore,a=Object(O.a)(c),s=Object(l.a)(a,1)[0],u=i.collection(String(e.gridSize)).orderBy("score","asc"),d=Object(N.a)(u,{idField:"uid"}),j=Object(l.a)(d,1)[0],f=Object(r.useState)(!0),b=Object(l.a)(f,2),m=b[0],g=b[1],x=Object(r.createRef)(),p=Object(r.createRef)();return s&&Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"table-container",children:Object(o.jsxs)("table",{children:[Object(o.jsx)(A,{}),Object(o.jsx)("tbody",{children:j&&j.map((function(e,t){return 0===t?Object(o.jsx)(I,{document:e,rank:t+1,ref:x},e.uid):e.uid!==s.uid?Object(o.jsx)(w,{document:e,rank:t+1},e.uid):Object(o.jsx)(I,{document:e,rank:t+1,ref:p},e.uid)}))})]})}),Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(o.jsx)("button",{onClick:function(e){m?(null!==p.current&&p.current.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),g(!1)):(x.current.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"}),g(!0))},children:m?"Scroll to you":"Scroll to top"})})]})},E=function(e){return Object(o.jsxs)("div",{className:"leaderboard full",children:[Object(o.jsxs)("div",{className:"full",children:[Object(o.jsxs)("div",{className:"full",children:["You are logged in as ",e.user.displayName]}),Object(o.jsx)(S,{})]}),Object(o.jsx)(U,{gridSize:e.gridSize})]})},G=function(e){var t=h(),n=Object(l.a)(t,1)[0].auth,r=Object(O.a)(n),c=Object(l.a)(r,1)[0];return c?Object(o.jsx)(E,{user:c,gridSize:e.gridSize}):Object(o.jsx)(v,{})},M=function(e){var t=Array.from({length:e*e},(function(e,t){return String(t+1)}));return t[t.length-1]="##",t.sort((function(){return Math.random()-.5})),t},P=function(e,t,n){var r=e[t];return e[t]=e[n],e[n]=r,e},R=function(e,t){var n=function(e,t){for(var n=0,r=0;r<t*t-1;r++)for(var c=r+1;c<t*t;c++)e[r]>e[c]&&0!==e[r]&&0!==e[c]&&n++;return n}(e=e.map((function(e){return"##"===e?0:Number(e)})),t);return t%2===1?(console.log("Odd grid:",n%2===0),n%2===0):function(e,t){for(var n=t-1;n>=0;n--)for(var r=t-1;r>=0;r--)if(0===e[n][r])return t-n}(function(e,t){for(var n=new Array(t),r=0;r<n.length;r++)n[r]=new Array(t);for(var c=0;c<n.length;c++)for(var i=0;i<n[c].length;i++)n[c][i]=e[c*t+i];return n}(e,t),t)%2===1?(console.log("Even grid:",n%2===0),n%2===0):(console.log("Even grid:",n%2===1),n%2===1)},q=function(e){for(var t=M(e),n=0;!1===R(t,e);)n++,t=M(e);return console.log("It took this many re generations",n),console.log(t),console.trace("generateInitArray"),t},B=function(){var e=Object(r.useState)(4),t=Object(l.a)(e,2),n=t[0],c=t[1],i=q(n),a=Object(r.useState)(i),u=Object(l.a)(a,2),b=u[0],m=u[1],g=Object(r.useState)(!1),x=Object(l.a)(g,2),p=x[0],v=x[1],S=Object(r.useState)(0),N=Object(l.a)(S,2),y=N[0],w=N[1],I=Object(r.useState)(!1),k=Object(l.a)(I,2),z=k[0],C=k[1],J=h(),A=Object(l.a)(J,1)[0],U=A.auth,E=A.firestore,M=Object(O.a)(U),R=Object(l.a)(M,1)[0];Object(r.useEffect)((function(){if(p&&R)if(console.log(R.uid),null!==localStorage.getItem(n)){if(console.log("won"),"undefined"===typeof JSON.parse(localStorage.getItem(n))[R.uid]||"undefined"!==typeof JSON.parse(localStorage.getItem(n))[R.uid]&&JSON.parse(localStorage.getItem(n))[R.uid]>y){var e=Object(s.a)({},JSON.parse(localStorage.getItem(n)));e[R.uid]=y,localStorage.setItem(n,JSON.stringify(e))}}else{var t={};t[R.uid]=y,localStorage.setItem(n,JSON.stringify(t))}}),[p,R,y,n]),Object(r.useEffect)((function(){if(p&&R){console.log(R.uid);var e=E.collection(String(n)).doc(R.uid);if(e.get().then((function(t){t.exists?t.data().score>y&&e.update({createdAt:f.a.firestore.FieldValue.serverTimestamp(),score:y}):e.set({uid:R.uid,createdAt:f.a.firestore.FieldValue.serverTimestamp(),userName:R.displayName,photoUrl:R.photoURL,score:y})})),null!==localStorage.getItem(n)){if(console.log("won"),"undefined"===typeof JSON.parse(localStorage.getItem(n))[R.uid]||"undefined"!==typeof JSON.parse(localStorage.getItem(n))[R.uid]&&JSON.parse(localStorage.getItem(n))[R.uid]>y){var t=Object(s.a)({},JSON.parse(localStorage.getItem(n)));t[R.uid]=y,localStorage.setItem(n,JSON.stringify(t))}}else{var r={};r[R.uid]=y,localStorage.setItem(n,JSON.stringify(r))}}}),[p,R,y,n,E]),Object(r.useEffect)((function(){n<2||n>10?(alert("Gridsize can only be between 2 and 10!"),c(4)):(m((function(e){return q(n)})),C(!1))}),[n]),Object(r.useEffect)((function(){null===R&&(m((function(e){return q(n)})),C(!1),v(!1),w(0))}),[R,n]),Object(r.useEffect)((function(){var e=b.slice();if(-1!==e.indexOf("##")){var t=Math.sqrt(e.length),n=Array.from({length:t*t},(function(e,t){return String(t+1)}));if(e[e.indexOf("##")]=String(e.length),function(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(var n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(e,n))return console.log("Game won"),C(!1),void v(!0);v(!1)}else v(!0)}),[b]),Object(r.useEffect)((function(){var e=null;return z?e=setInterval((function(){w((function(e){return e+100}))}),100):clearInterval(e),function(){clearInterval(e)}}),[z]);var B=function(e){var t=b.indexOf("##");if(e===t)return 0;if(e%n===t%n)return 1;var r=t-t%n;return e>=r&&e<=r+n-1?-1:0};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Number puzzle!"}),Object(o.jsxs)("div",{className:"game",children:[Object(o.jsx)(d,{squares:b,gridSize:n,squareClick:function(e){z||!1!==p||(C(!0),w(0)),0!==B(e)&&!1===p&&(1===B(e)?function(e,t){var r=b.slice();if(e<t)for(;r.indexOf("##")!==e;)r=P(r,r.indexOf("##"),r.indexOf("##")-n);else if(e>t)for(;r.indexOf("##")!==e;)r=P(r,r.indexOf("##"),r.indexOf("##")+n);m(r)}(e,b.indexOf("##")):function(e,t){var n=b.slice();if(e<t)for(;n.indexOf("##")!==e;)n=P(n,n.indexOf("##"),n.indexOf("##")-1);else if(e>t)for(;n.indexOf("##")!==e;)n=P(n,n.indexOf("##"),n.indexOf("##")+1);m(n)}(e,b.indexOf("##")))}}),Object(o.jsxs)("div",{className:"details",children:[Object(o.jsx)("label",{htmlFor:"number",children:Object(o.jsxs)("h3",{className:"grid-size",children:[Object(o.jsx)("span",{className:"child-1",children:"Decide grid size:"}),Object(o.jsx)("span",{className:"child-1",children:n}),Object(o.jsx)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd",onClick:function(){c((function(e){return e+1}))},children:Object(o.jsx)("path",{d:"M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"})}),Object(o.jsx)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd",onClick:function(){c((function(e){return e-1}))},children:Object(o.jsx)("path",{d:"M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"})})]})}),Object(o.jsx)("div",{children:Object(o.jsx)("h3",{children:p?"Game won":"Game not won"})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"my-button",onClick:function(){m((function(e){return q(n)})),C(!1),v(!1),w(0)},children:"Reset board"})}),Object(o.jsx)(j,{time:y}),Object(o.jsx)(G,{gridSize:n})]})]})]})};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(m,{initialState:p,reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n={};switch(t.type){case g:n=Object(s.a)(Object(s.a)({},e),{},{user:t.payload});break;case x:n=Object(s.a)(Object(s.a)({},e),{},{user:null});break;default:throw new Error("Invalid Dispatch operation")}return n},children:Object(o.jsx)(B,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.7ac3a448.chunk.js.map