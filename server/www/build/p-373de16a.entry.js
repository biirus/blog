import{r as t,g as s}from"./p-a4f7f2da.js";import{A as e}from"./p-5f68d481.js";const i=class{constructor(s){t(this,s),this.titleSuffix="",this.pageTitle=""}updateDocumentTitle(){const t=this.el;t.ownerDocument&&(t.ownerDocument.title=`${this.pageTitle}${this.titleSuffix||""}`)}componentWillLoad(){this.updateDocumentTitle()}get el(){return s(this)}static get watchers(){return{pageTitle:["updateDocumentTitle"]}}};e.injectProps(i,["titleSuffix"]);export{i as stencil_route_title}