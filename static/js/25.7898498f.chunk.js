(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[25],{678:function(e,t,a){"use strict";var i=a(7),r=a(6),n=a(4),c=a(1),o=a(8),l=a(97),s=a(541),d=a(12),b=a(15),j=a(60),u=a(70);function h(e){return Object(j.a)("MuiFab",e)}var m=Object(u.a)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),p=a(5),x=a(2),O=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],v=Object(p.a)(s.a,{name:"MuiFab",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat(Object(d.a)(a.size))],"inherit"===a.color&&t.colorInherit,t[Object(d.a)(a.size)],t[a.color]]}})((function(e){var t,a,r,c=e.theme,o=e.ownerState;return Object(n.a)({},c.typography.button,(t={minHeight:36,transition:c.transitions.create(["background-color","box-shadow","border-color"],{duration:c.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(c.vars||c).zIndex.fab,boxShadow:(c.vars||c).shadows[6],"&:active":{boxShadow:(c.vars||c).shadows[12]},color:c.vars?c.vars.palette.text.primary:null==(a=(r=c.palette).getContrastText)?void 0:a.call(r,c.palette.grey[300]),backgroundColor:(c.vars||c).palette.grey[300],"&:hover":{backgroundColor:(c.vars||c).palette.grey.A100,"@media (hover: none)":{backgroundColor:(c.vars||c).palette.grey[300]},textDecoration:"none"}},Object(i.a)(t,"&.".concat(m.focusVisible),{boxShadow:(c.vars||c).shadows[6]}),Object(i.a)(t,"&.".concat(m.disabled),{color:(c.vars||c).palette.action.disabled,boxShadow:(c.vars||c).shadows[0],backgroundColor:(c.vars||c).palette.action.disabledBackground}),t),"small"===o.size&&{width:40,height:40},"medium"===o.size&&{width:48,height:48},"extended"===o.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===o.variant&&"small"===o.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===o.variant&&"medium"===o.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===o.color&&{color:"inherit"})}),(function(e){var t=e.theme,a=e.ownerState;return Object(n.a)({},"inherit"!==a.color&&"default"!==a.color&&null!=(t.vars||t).palette[a.color]&&{color:(t.vars||t).palette[a.color].contrastText,backgroundColor:(t.vars||t).palette[a.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[a.color].main}}})})),f=c.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiFab"}),i=a.children,c=a.className,s=a.color,j=void 0===s?"default":s,u=a.component,m=void 0===u?"button":u,p=a.disabled,f=void 0!==p&&p,g=a.disableFocusRipple,y=void 0!==g&&g,w=a.focusVisibleClassName,N=a.size,z=void 0===N?"large":N,k=a.variant,S=void 0===k?"circular":k,C=Object(r.a)(a,O),D=Object(n.a)({},a,{color:j,component:m,disabled:f,disableFocusRipple:y,size:z,variant:S}),F=function(e){var t=e.color,a=e.variant,i=e.classes,r=e.size,n={root:["root",a,"size".concat(Object(d.a)(r)),"inherit"===t?"colorInherit":t]};return Object(l.a)(n,h,i)}(D);return Object(x.jsx)(v,Object(n.a)({className:Object(o.a)(F.root,c),component:m,disabled:f,focusRipple:!y,focusVisibleClassName:Object(o.a)(F.focusVisible,w),ownerState:D,ref:t},C,{children:i}))}));t.a=f},870:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var i=a(7),r=a(5),n=a(488),c=a(287),o=a(546),l=a(290),s=a(678),d=a(81),b=a(2),j=Object(r.a)("div")((function(e){var t,a=e.theme;return t={margin:"30px"},Object(i.a)(t,a.breakpoints.down("sm"),{margin:"16px"}),Object(i.a)(t,"& .breadcrumb",Object(i.a)({marginBottom:"30px"},a.breakpoints.down("sm"),{marginBottom:"16px"})),Object(i.a)(t,"& .button",{margin:a.spacing(1)}),Object(i.a)(t,"& .input",{display:"none"}),t})),u=Object(r.a)(n.a)((function(e){return{margin:e.theme.spacing(1)}}));function h(){return Object(b.jsxs)(j,{children:[Object(b.jsx)(c.a,{className:"breadcrumb",children:Object(b.jsx)(d.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Buttons"}]})}),Object(b.jsxs)(d.m,{title:"contained buttons",children:[Object(b.jsx)(u,{variant:"contained",color:"inherit",children:"Default"}),Object(b.jsx)(u,{variant:"contained",color:"primary",children:"Primary"}),Object(b.jsx)(u,{variant:"contained",color:"secondary",children:"Secondary"}),Object(b.jsx)(u,{variant:"contained",color:"secondary",disabled:!0,children:"Disabled"}),Object(b.jsx)(u,{variant:"contained",href:"#contained-buttons",children:"Link"}),Object(b.jsx)("input",{accept:"image/*",className:"input",id:"contained-button-file",multiple:!0,type:"file"}),Object(b.jsx)("label",{htmlFor:"contained-button-file",children:Object(b.jsx)(u,{variant:"contained",component:"span",children:"Upload"})})]}),Object(b.jsx)(c.a,{py:"12px"}),Object(b.jsxs)(d.m,{title:"text buttons",children:[Object(b.jsx)(u,{children:"Default"}),Object(b.jsx)(u,{color:"primary",children:"Primary"}),Object(b.jsx)(u,{color:"secondary",children:"Secondary"}),Object(b.jsx)(u,{disabled:!0,children:"Disabled"}),Object(b.jsx)(u,{href:"#text-buttons",children:"Link"}),Object(b.jsx)("input",{accept:"image/*",className:"input",id:"text-button-file",multiple:!0,type:"file"}),Object(b.jsx)("label",{htmlFor:"text-button-file",children:Object(b.jsx)(u,{component:"span",children:"Upload"})})]}),Object(b.jsx)(c.a,{py:"12px"}),Object(b.jsxs)(d.m,{title:"outlined buttons",children:[Object(b.jsx)(u,{variant:"outlined",children:"Default"}),Object(b.jsx)(u,{variant:"outlined",color:"primary",children:"Primary"}),Object(b.jsx)(u,{variant:"outlined",color:"secondary",children:"Secondary"}),Object(b.jsx)(u,{variant:"outlined",disabled:!0,children:"Disabled"}),Object(b.jsx)(u,{variant:"outlined",href:"#outlined-buttons",children:"Link"}),Object(b.jsx)("input",{accept:"image/*",className:"input",id:"outlined-button-file",multiple:!0,type:"file"}),Object(b.jsx)("label",{htmlFor:"outlined-button-file",children:Object(b.jsx)(u,{variant:"outlined",component:"span",children:"Upload"})}),Object(b.jsx)(u,{variant:"outlined",color:"inherit",children:"Inherit"})]}),Object(b.jsx)(c.a,{py:"12px"}),Object(b.jsxs)(d.m,{title:"icon buttons",children:[Object(b.jsx)(o.a,{className:"button","aria-label":"Delete",children:Object(b.jsx)(l.a,{children:"delete"})}),Object(b.jsx)(o.a,{className:"button","aria-label":"Delete",disabled:!0,color:"primary",children:Object(b.jsx)(l.a,{children:"delete"})}),Object(b.jsx)(o.a,{color:"secondary",className:"button","aria-label":"Add an alarm",children:Object(b.jsx)(l.a,{children:"alarm"})}),Object(b.jsx)(o.a,{color:"primary",className:"button","aria-label":"Add to shopping cart",children:Object(b.jsx)(l.a,{children:"add_shopping_cart"})}),Object(b.jsx)("input",{accept:"image/*",className:"input",id:"icon-button-file",type:"file"}),Object(b.jsx)("label",{htmlFor:"icon-button-file",children:Object(b.jsx)(o.a,{color:"primary",component:"span",className:"button","aria-label":"Upload picture",children:Object(b.jsx)(l.a,{children:"photo_camera"})})})]}),Object(b.jsx)(c.a,{py:"12px"}),Object(b.jsxs)(d.m,{title:"different size buttons",children:[Object(b.jsx)(s.a,{size:"small",color:"secondary","aria-label":"Add",className:"button",children:Object(b.jsx)(l.a,{children:"add"})}),Object(b.jsx)(s.a,{size:"medium",color:"secondary","aria-label":"Add",className:"button",children:Object(b.jsx)(l.a,{children:"add"})}),Object(b.jsx)(s.a,{color:"secondary","aria-label":"Add",className:"button",children:Object(b.jsx)(l.a,{children:"add"})})]}),Object(b.jsx)(c.a,{py:"12px"}),Object(b.jsxs)(d.m,{title:"outlined buttons",children:[Object(b.jsx)(s.a,{color:"primary","aria-label":"Add",className:"button",children:Object(b.jsx)(l.a,{children:"add"})}),Object(b.jsx)(s.a,{color:"secondary","aria-label":"Edit",className:"button",children:Object(b.jsx)(l.a,{children:"edit_icon"})}),Object(b.jsxs)(s.a,{variant:"extended","aria-label":"Delete",className:"button",children:[Object(b.jsx)(l.a,{sx:{mr:4},children:"navigation"}),"Extended"]}),Object(b.jsx)(s.a,{disabled:!0,"aria-label":"Delete",className:"button",children:Object(b.jsx)(l.a,{children:"delete"})})]})]})}}}]);
//# sourceMappingURL=25.7898498f.chunk.js.map