import{r as t,h as n,H as r}from"./p-a4f7f2da.js";import{g as e}from"./p-b03b7972.js";const i=({vchildren:t})=>Array.isArray(t),o=({vattrs:t},n=[])=>{return r=t,!Array.isArray(r)&&null!==r&&"object"==typeof r&&n.every(t.hasOwnProperty.bind(t));var r},a=({vtext:t})=>"string"==typeof t,c=t=>t instanceof HTMLElement,l=t=>({vattrs:t.t,vchildren:t.i,vkey:t.o,vname:t.l,vtag:t.s,vtext:t.u}),s=({vtag:t,vattrs:n,vchildren:r,vtext:e})=>{if(null!=e)return document.createTextNode(e);const i=document.createElement(t);if(null!=n)for(const o in n)i.setAttribute(o,n[o]);if(null!=r)for(const o of r)i.appendChild(s(l(o)));return i},u=t=>c(t)||(t=>Array.isArray(t)&&t.every(c))(t)&&2===t.length,f=t=>Array.isArray(t)?document.head.replaceChild(t[0],t[1]):document.head.appendChild(t),h={title:function(t,n){const r=(t.vchildren||[])[0];if(i(t)&&a(l(r)))return[s(t),n.querySelector("title")]},meta:function(t,n){var r,e,i;const o=(null===(r=t.vattrs)||void 0===r?void 0:r.property)?"property":"name",a=(null===(e=t.vattrs)||void 0===e?void 0:e.property)||(null===(i=t.vattrs)||void 0===i?void 0:i.name),c=n.querySelector(`meta[${o}="${a}"]`);return null!==c?[s(t),c]:s(t)},link:function(t){if(!i(t))return s(t)},style:function(t){const n=(t.vchildren||[])[0];if(i(t)&&a(l(n)))return s(t)},script:function(t){if(i(t)||o(t))return s(t)},base:function(t){if(!i(t)&&o(t))return s(t)},template:s,noscript:s},v=document&&document.head,d=Object.keys(h),m=t=>d.indexOf(t.s)>-1,p=(t,n,r)=>{if(!v)return null;const e=n.filter(m),i=[];return r.forEach(e,t=>{var n;i.push(h[(n=t).vtag](n,document.head))}),i.filter(u).forEach(f),null},y=class{constructor(n){t(this,n)}matchWatcher(){this.fetchPage(this.match.url)}async componentWillLoad(){await this.fetchPage(this.match.url)}async fetchPage(t){if(void 0!==t){const n=await fetch(`${e()}/api/page?path=${t}`);this.page=await n.json()}}render(){return Boolean(this.page)?n(r,null,n(p,null,n("title",null,this.page.meta.data.title)),n("h1",null,this.page.meta.data.title),n("div",{innerHTML:this.page.content})):null}static get watchers(){return{match:["matchWatcher"]}}};y.style=":host{display:block}";export{y as app_page}