import{r as t,h as s,H as e,g as i,c as o}from"./p-a4f7f2da.js";import{A as n}from"./p-5f68d481.js";import{m as r,a,s as h,b as c,c as l,d as u,h as p,e as d,f,g,l as m}from"./p-1728ead7.js";import{g as y}from"./p-b03b7972.js";const b=class{constructor(s){t(this,s)}async componentWillLoad(){const t=await fetch(y()+"/api/navigation");this.pages=await t.json()}renderDir(t){return s("ul",null,t.files.map(t=>"isDir"in t?s("li",null,s("div",null,t.info.title),this.renderDir(t)):s("li",null,s("stencil-route-link",{url:t.url,anchorTitle:t.title,anchorRole:"menuitem"},t.title))))}render(){return console.log(this.pages),s(e,null,this.renderDir(this.pages))}};b.style=":host{display:block}";const w=class{constructor(s){t(this,s)}render(){return s("div",null,s("header",null,s("h1",null,"Stencil App Starter")),s("main",null,s("app-nav",null),s("stencil-router",null,s("stencil-route-switch",{scrollTopOffset:1},s("stencil-route",{url:"/",component:"app-home",exact:!0}),s("stencil-route",{group:"pages",url:"/:page*",component:"app-page"})))))}};w.style="header{background:#5851ff;color:white;height:56px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26);box-shadow:0 2px 5px 0 rgba(0, 0, 0, 0.26)}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}";const P=class{constructor(s){t(this,s),this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const s=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!s)return this.previousMatch=this.match,this.match=r(t.pathname,{path:this.url,exact:this.exact,strict:!0})}async loadCompleted(){let t={};this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):this.match&&!a(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(t)}async componentDidUpdate(){await this.loadCompleted()}async componentDidLoad(){await this.loadCompleted()}render(){if(!this.match||!this.history)return null;const t=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},t,{component:this.component})):this.component?s(this.component,Object.assign({},t)):void 0}get el(){return i(this)}static get watchers(){return{location:["computeMatch"]}}};n.injectProps(P,["location","history","historyType","routeViewsUpdated"]),P.style="stencil-route.inactive{display:none}";const v=(t,s,e)=>e(t.confirm(s)),O=(t,s)=>{const e=t[s],i="__storage_test__";try{return e.setItem(i,i),e.removeItem(i),!0}catch(o){return o instanceof DOMException&&(22===o.code||1014===o.code||"QuotaExceededError"===o.name||"NS_ERROR_DOM_QUOTA_REACHED"===o.name)&&0!==e.length}},x=class{constructor(s){t(this,s),this.unsubscribe=()=>{},this.activeClass="link-active",this.exact=!1,this.strict=!0,this.custom="a",this.match=null}componentWillLoad(){this.computeMatch()}computeMatch(){this.location&&(this.match=r(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict}))}handleClick(t){var s,e,i;if(!((s=t).metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&this.history&&this.url&&this.root)return t.preventDefault(),this.history.push((i=this.root,"/"==(e=this.url).charAt(0)&&"/"==i.charAt(i.length-1)?i.slice(0,i.length-1)+e:i+e))}render(){let t={class:{[this.activeClass]:null!==this.match},onClick:this.handleClick.bind(this)};return this.anchorClass&&(t.class[this.anchorClass]=!0),"a"===this.custom&&(t=Object.assign({},t,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})),s(this.custom,Object.assign({},t),s("slot",null))}get el(){return i(this)}static get watchers(){return{location:["computeMatch"]}}};n.injectProps(x,["history","location","root"]);const k=t=>"STENCIL-ROUTE"===t.tagName,S=class{constructor(s){t(this,s),this.group=((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"),this.subscribers=[],this.queue=o(this,"queue")}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}async regenerateSubscribers(t){if(null==t)return;let s=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(k).map((e,i)=>{const o=r(t.pathname,{path:e.url,exact:e.exact,strict:!0});return o&&-1===s&&(s=i),{el:e,match:o}}),-1===s)return;if(this.activeIndex===s)return void(this.subscribers[s].el.match=this.subscribers[s].match);this.activeIndex=s;const e=this.subscribers[this.activeIndex];this.scrollTopOffset&&(e.el.scrollTopOffset=this.scrollTopOffset),e.el.group=this.group,e.el.match=e.match,e.el.componentUpdated=t=>{this.queue.write(()=>{this.subscribers.forEach((t,s)=>{if(t.el.componentUpdated=void 0,s===this.activeIndex)return t.el.style.display="";this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=null,t.el.style.display="none"})}),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))}}render(){return s("slot",null)}get el(){return i(this)}static get watchers(){return{location:["regenerateSubscribers"]}}};n.injectProps(S,["location","routeViewsUpdated"]);const E=(t,...s)=>{t||console.warn(...s)},j=()=>{let t,s=[];return{setPrompt:s=>(E(null==t,"A history supports only one prompt at a time"),t=s,()=>{t===s&&(t=null)}),confirmTransitionTo:(s,e,i,o)=>{if(null!=t){const n="function"==typeof t?t(s,e):t;"string"==typeof n?"function"==typeof i?i(n,o):(E(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),o(!0)):o(!1!==n)}else o(!0)},appendListener:t=>{let e=!0;const i=(...s)=>{e&&t(...s)};return s.push(i),()=>{e=!1,s=s.filter(t=>t!==i)}},notifyListeners:(...t)=>{s.forEach(s=>s(...t))}}},T=(t,s="scrollPositions")=>{let e=new Map;const i=(s,i)=>{if(e.set(s,i),O(t,"sessionStorage")){const s=[];e.forEach((t,e)=>{s.push([e,t])}),t.sessionStorage.setItem("scrollPositions",JSON.stringify(s))}};if(O(t,"sessionStorage")){const i=t.sessionStorage.getItem(s);e=i?new Map(JSON.parse(i)):e}return"scrollRestoration"in t.history&&(history.scrollRestoration="manual"),{set:i,get:t=>e.get(t),has:t=>e.has(t),capture:s=>{i(s,[t.scrollX,t.scrollY])}}},_={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+g(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:g,decodePath:c},slash:{encodePath:c,decodePath:c}},L=(t,s)=>{const e=0==t.pathname.indexOf(s)?"/"+t.pathname.slice(s.length):t.pathname;return Object.assign({},t,{pathname:e})},A={browser:(t,s={})=>{let e=!1;const i=t.history,o=t.location,n=t.navigator,r=(t=>{const s=t.navigator.userAgent;return(-1===s.indexOf("Android 2.")&&-1===s.indexOf("Android 4.0")||-1===s.indexOf("Mobile Safari")||-1!==s.indexOf("Chrome")||-1!==s.indexOf("Windows Phone"))&&t.history&&"pushState"in t.history})(t),a=!(-1===n.userAgent.indexOf("Trident")),g=T(t),m=null!=s.forceRefresh&&s.forceRefresh,y=null!=s.getUserConfirmation?s.getUserConfirmation:v,b=null!=s.keyLength?s.keyLength:6,w=s.basename?h(c(s.basename)):"",P=()=>{try{return t.history.state||{}}catch(s){return{}}},O=t=>{t=t||{};const{key:s,state:e}=t,{pathname:i,search:n,hash:r}=o;let a=i+n+r;return E(!w||p(a,w),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+a+'" to begin with "'+w+'".'),w&&(a=d(a,w)),l(a,e,s||u(b))},x=j(),k=t=>{g.capture(B.location.key),Object.assign(B,t),B.location.scrollPosition=g.get(B.location.key),B.length=i.length,x.notifyListeners(B.location,B.action)},S=t=>{((t,s)=>void 0===s.state&&-1===t.userAgent.indexOf("CriOS"))(n,t)||L(O(t.state))},_=()=>{L(O(P()))},L=t=>{if(e)e=!1,k();else{const s="POP";x.confirmTransitionTo(t,s,y,e=>{e?k({action:s,location:t}):A(t)})}},A=t=>{let s=U.indexOf(B.location.key),i=U.indexOf(t.key);-1===s&&(s=0),-1===i&&(i=0);const o=s-i;o&&(e=!0,D(o))},H=O(P());let U=[H.key],C=0,R=!1;const M=t=>w+f(t),D=t=>{i.go(t)},W=s=>{C+=s,1===C?(t.addEventListener("popstate",S),a&&t.addEventListener("hashchange",_)):0===C&&(t.removeEventListener("popstate",S),a&&t.removeEventListener("hashchange",_))},B={length:i.length,action:"POP",location:H,createHref:M,push:(t,s)=>{E(!("object"==typeof t&&void 0!==t.state&&void 0!==s),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const e=l(t,s,u(b),B.location);x.confirmTransitionTo(e,"PUSH",y,t=>{if(!t)return;const s=M(e),{key:n,state:a}=e;if(r)if(i.pushState({key:n,state:a},"",s),m)o.href=s;else{const t=U.indexOf(B.location.key),s=U.slice(0,-1===t?0:t+1);s.push(e.key),U=s,k({action:"PUSH",location:e})}else E(void 0===a,"Browser history cannot push state in browsers that do not support HTML5 history"),o.href=s})},replace:(t,s)=>{E(!("object"==typeof t&&void 0!==t.state&&void 0!==s),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const e=l(t,s,u(b),B.location);x.confirmTransitionTo(e,"REPLACE",y,t=>{if(!t)return;const s=M(e),{key:n,state:a}=e;if(r)if(i.replaceState({key:n,state:a},"",s),m)o.replace(s);else{const t=U.indexOf(B.location.key);-1!==t&&(U[t]=e.key),k({action:"REPLACE",location:e})}else E(void 0===a,"Browser history cannot replace state in browsers that do not support HTML5 history"),o.replace(s)})},go:D,goBack:()=>D(-1),goForward:()=>D(1),block:(t="")=>{const s=x.setPrompt(t);return R||(W(1),R=!0),()=>(R&&(R=!1,W(-1)),s())},listen:t=>{const s=x.appendListener(t);return W(1),()=>{W(-1),s()}},win:t};return B},hash:(t,s={})=>{let e=!1,i=null,o=0,n=!1;const r=t.location,a=t.history,g=-1===t.navigator.userAgent.indexOf("Firefox"),y=null!=s.keyLength?s.keyLength:6,{getUserConfirmation:b=v,hashType:w="slash"}=s,P=s.basename?h(c(s.basename)):"",{encodePath:O,decodePath:x}=_[w],k=()=>{const t=r.href,s=t.indexOf("#");return-1===s?"":t.substring(s+1)},S=t=>{const s=r.href.indexOf("#");r.replace(r.href.slice(0,s>=0?s:0)+"#"+t)},T=()=>{let t=x(k());return E(!P||p(t,P),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+P+'".'),P&&(t=d(t,P)),l(t,void 0,u(y))},L=j(),A=t=>{Object.assign(Y,t),Y.length=a.length,L.notifyListeners(Y.location,Y.action)},H=()=>{const t=k(),s=O(t);if(t!==s)S(s);else{const t=T(),s=Y.location;if(!e&&m(s,t))return;if(i===f(t))return;i=null,U(t)}},U=t=>{if(e)e=!1,A();else{const s="POP";L.confirmTransitionTo(t,s,b,e=>{e?A({action:s,location:t}):C(t)})}},C=t=>{let s=W.lastIndexOf(f(Y.location)),i=W.lastIndexOf(f(t));-1===s&&(s=0),-1===i&&(i=0);const o=s-i;o&&(e=!0,B(o))},R=k(),M=O(R);R!==M&&S(M);const D=T();let W=[f(D)];const B=t=>{E(g,"Hash history go(n) causes a full page reload in this browser"),a.go(t)},N=(t,s)=>{o+=s,1===o?t.addEventListener("hashchange",H):0===o&&t.removeEventListener("hashchange",H)},Y={length:a.length,action:"POP",location:D,createHref:t=>"#"+O(P+f(t)),push:(t,s)=>{E(void 0===s,"Hash history cannot push state; it is ignored");const e=l(t,void 0,u(y),Y.location);L.confirmTransitionTo(e,"PUSH",b,t=>{if(!t)return;const s=f(e),o=O(P+s);if(k()!==o){i=s,(t=>{r.hash=t})(o);const t=W.lastIndexOf(f(Y.location)),n=W.slice(0,-1===t?0:t+1);n.push(s),W=n,A({action:"PUSH",location:e})}else E(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),A()})},replace:(t,s)=>{E(void 0===s,"Hash history cannot replace state; it is ignored");const e=l(t,void 0,u(y),Y.location);L.confirmTransitionTo(e,"REPLACE",b,t=>{if(!t)return;const s=f(e),o=O(P+s);k()!==o&&(i=s,S(o));const n=W.indexOf(f(Y.location));-1!==n&&(W[n]=s),A({action:"REPLACE",location:e})})},go:B,goBack:()=>B(-1),goForward:()=>B(1),block:(s="")=>{const e=L.setPrompt(s);return n||(N(t,1),n=!0),()=>(n&&(n=!1,N(t,-1)),e())},listen:s=>{const e=L.appendListener(s);return N(t,1),()=>{N(t,-1),e()}},win:t};return Y}},H=class{constructor(s){t(this,s),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(t={})=>{if(this.history&&t.scrollToId&&"browser"===this.historyType){const s=this.history.win.document.getElementById(t.scrollToId);if(s)return s.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)},this.isServer=o(this,"isServer"),this.queue=o(this,"queue")}componentWillLoad(){this.history=A[this.historyType](this.el.ownerDocument.defaultView),this.history.listen(t=>{t=L(t,this.root),this.location=t}),this.location=L(this.history.location,this.root)}scrollTo(t){const s=this.history;if(null!=t&&!this.isServer&&s)return"POP"===s.action&&Array.isArray(s.location.scrollPosition)?this.queue.write(()=>{s&&s.location&&Array.isArray(s.location.scrollPosition)&&s.win.scrollTo(s.location.scrollPosition[0],s.location.scrollPosition[1])}):this.queue.write(()=>{s.win.scrollTo(0,t)})}render(){if(this.location&&this.history)return s(n.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},s("slot",null))}get el(){return i(this)}};export{b as app_nav,w as app_root,P as stencil_route,x as stencil_route_link,S as stencil_route_switch,H as stencil_router}