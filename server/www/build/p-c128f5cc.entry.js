import{r as t,h as a,H as s}from"./p-a4f7f2da.js";const h=class{constructor(a){t(this,a)}matchWatcher(){this.fetchPage(this.match.url)}async componentWillLoad(){await this.fetchPage(this.match.url)}async fetchPage(t){if(void 0!==t){const a=await fetch("http://localhost:8080/api/page?path="+t);this.page=await a.json()}}render(){return Boolean(this.page)?a(s,null,a("h1",null,this.page.meta.data.title),a("div",{innerHTML:this.page.content})):null}static get watchers(){return{match:["matchWatcher"]}}};h.style=":host{display:block}";export{h as app_page}