import{d as c,aw as i,at as f,A as a,a6 as d,ax as x,ay as L,az as h}from"./npWpt4CP.js";const n=i({...h,componentName:"NuxtLinkLocale"}),_=c({name:"NuxtLinkLocale",props:{...n.props,locale:{type:String,default:void 0,required:!1}},setup(t,{slots:o}){const l=f(),r=a(()=>{const e=t.to??t.href;return e!=null?l(e,t.locale):e}),u=a(()=>{if(t.external||t.target&&t.target!=="_self")return!0;const e=t.to??t.href;return x(e)?!1:e===""||e==null||L(e,{acceptRelative:!0})}),s=()=>{const e={...t};return u.value||(e.to=r.value),delete e.href,delete e.locale,e};return()=>d(n,s(),o.default)}});export{_};
