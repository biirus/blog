var __awaiter=this&&this.__awaiter||function(t,e,n,r){function a(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function o(t){try{c(r.next(t))}catch(e){i(e)}}function u(t){try{c(r["throw"](t))}catch(e){i(e)}}function c(t){t.done?n(t.value):a(t.value).then(o,u)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(t){return function(e){return c([t,e])}}function c(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;a=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){n.label=o[1];break}if(o[0]===6&&n.label<i[1]){n.label=i[1];i=o;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(o);break}if(i[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(u){o=[6,u];a=0}finally{r=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-4e9ecd93.system.js"],(function(t){"use strict";var e,n,r;return{setters:[function(t){e=t.r;n=t.h;r=t.H}],execute:function(){var a=":host{display:block}";var i=t("app_page",function(){function t(t){e(this,t)}t.prototype.matchWatcher=function(){this.fetchPage(this.match.url)};t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.fetchPage(this.match.url)];case 1:t.sent();return[2]}}))}))};t.prototype.fetchPage=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n;return __generator(this,(function(r){switch(r.label){case 0:if(!(typeof t!=="undefined"))return[3,3];return[4,fetch("http://localhost:8080/api/page?path="+t)];case 1:e=r.sent();n=this;return[4,e.json()];case 2:n.page=r.sent();r.label=3;case 3:return[2]}}))}))};t.prototype.render=function(){if(!Boolean(this.page)){return null}return n(r,null,n("h1",null,this.page.meta.data.title),n("div",{innerHTML:this.page.content}))};Object.defineProperty(t,"watchers",{get:function(){return{match:["matchWatcher"]}},enumerable:true,configurable:true});return t}());i.style=a}}}));