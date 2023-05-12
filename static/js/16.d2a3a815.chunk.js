(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[16],{558:function(e,t,n){"use strict";var r=n(13),a=n(6),o=n(4),i=n(1),c=n(8),s=n(97),l=n(12),d=n(5),p=n(142),u=n(43),h=n(541),b=n(60),j=n(70);function x(e){return Object(b.a)("PrivateSwitchBase",e)}Object(j.a)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var m=n(2),f=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],O=Object(d.a)(h.a)((function(e){var t=e.ownerState;return Object(o.a)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),g=Object(d.a)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),v=i.forwardRef((function(e,t){var n=e.autoFocus,i=e.checked,d=e.checkedIcon,h=e.className,b=e.defaultChecked,j=e.disabled,v=e.disableFocusRipple,y=void 0!==v&&v,w=e.edge,S=void 0!==w&&w,k=e.icon,z=e.id,I=e.inputProps,_=e.inputRef,C=e.name,R=e.onBlur,N=e.onChange,T=e.onFocus,L=e.readOnly,M=e.required,E=e.tabIndex,F=e.type,P=e.value,B=Object(a.a)(e,f),W=Object(p.a)({controlled:i,default:Boolean(b),name:"SwitchBase",state:"checked"}),A=Object(r.a)(W,2),U=A[0],D=A[1],V=Object(u.a)(),G=j;V&&"undefined"===typeof G&&(G=V.disabled);var q="checkbox"===F||"radio"===F,H=Object(o.a)({},e,{checked:U,disabled:G,disableFocusRipple:y,edge:S}),$=function(e){var t=e.classes,n=e.checked,r=e.disabled,a=e.edge,o={root:["root",n&&"checked",r&&"disabled",a&&"edge".concat(Object(l.a)(a))],input:["input"]};return Object(s.a)(o,x,t)}(H);return Object(m.jsxs)(O,Object(o.a)({component:"span",className:Object(c.a)($.root,h),centerRipple:!0,focusRipple:!y,disabled:G,tabIndex:null,role:void 0,onFocus:function(e){T&&T(e),V&&V.onFocus&&V.onFocus(e)},onBlur:function(e){R&&R(e),V&&V.onBlur&&V.onBlur(e)},ownerState:H,ref:t},B,{children:[Object(m.jsx)(g,Object(o.a)({autoFocus:n,checked:i,defaultChecked:b,className:$.input,disabled:G,id:q&&z,name:C,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;D(t),N&&N(e,t)}},readOnly:L,ref:_,required:M,ownerState:H,tabIndex:E,type:F},"checkbox"===F&&void 0===P?{}:{value:P},I)),U?d:k]}))}));t.a=v},574:function(e,t,n){"use strict";var r=n(3),a=n(198),o=n(1),i=n.n(o),c=n(609);function s(e,t){var n={};return t.forEach((function(t){n[t]=e[t]})),n}function l(e){return"function"===typeof e}var d=n(293),p=n.n(d),u=function(e){function t(t){var n=e.call(this,t)||this;return n.echarts=a,n}return Object(r.b)(t,e),t}(function(e){function t(t){var n=e.call(this,t)||this;return n.echarts=t.echarts,n.ele=null,n.isInitialResize=!0,n}return Object(r.b)(t,e),t.prototype.componentDidMount=function(){this.renderNewEcharts()},t.prototype.componentDidUpdate=function(e){var t=this.props.shouldSetOption;if(!l(t)||t(e,this.props)){if(!p()(e.theme,this.props.theme)||!p()(e.opts,this.props.opts)||!p()(e.onEvents,this.props.onEvents))return this.dispose(),void this.renderNewEcharts();var n=["option","notMerge","lazyUpdate","showLoading","loadingOption"];p()(s(this.props,n),s(e,n))||this.updateEChartsOption(),p()(e.style,this.props.style)&&p()(e.className,this.props.className)||this.resize()}},t.prototype.componentWillUnmount=function(){this.dispose()},t.prototype.getEchartsInstance=function(){return this.echarts.getInstanceByDom(this.ele)||this.echarts.init(this.ele,this.props.theme,this.props.opts)},t.prototype.dispose=function(){if(this.ele){try{Object(c.clear)(this.ele)}catch(e){console.warn(e)}this.echarts.dispose(this.ele)}},t.prototype.renderNewEcharts=function(){var e=this,t=this.props,n=t.onEvents,r=t.onChartReady,a=this.updateEChartsOption();this.bindEvents(a,n||{}),l(r)&&r(a),this.ele&&Object(c.bind)(this.ele,(function(){e.resize()}))},t.prototype.bindEvents=function(e,t){function n(t,n){"string"===typeof t&&l(n)&&e.on(t,(function(t){n(t,e)}))}for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n(r,t[r])},t.prototype.updateEChartsOption=function(){var e=this.props,t=e.option,n=e.notMerge,r=void 0!==n&&n,a=e.lazyUpdate,o=void 0!==a&&a,i=e.showLoading,c=e.loadingOption,s=void 0===c?null:c,l=this.getEchartsInstance();return l.setOption(t,r,o),i?l.showLoading(s):l.hideLoading(),l},t.prototype.resize=function(){var e=this.getEchartsInstance();if(!this.isInitialResize)try{e.resize()}catch(t){console.warn(t)}this.isInitialResize=!1},t.prototype.render=function(){var e=this,t=this.props,n=t.style,a=t.className,o=void 0===a?"":a,c=Object(r.a)({height:300},n);return i.a.createElement("div",{ref:function(t){e.ele=t},style:c,className:"echarts-for-react "+o})},t}(o.PureComponent));t.a=u},577:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,n=null;return function(){for(var r=this,a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];clearTimeout(n),n=setTimeout((function(){e.apply(r,o)}),t)}}},578:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SensorTabIndex=t.SensorClassName=t.SizeSensorId=void 0;t.SizeSensorId="size-sensor-id";t.SensorClassName="size-sensor-object";t.SensorTabIndex="-1"},609:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ver=t.clear=t.bind=void 0;var r=n(610);t.bind=function(e,t){var n=(0,r.getSensor)(e);return n.bind(t),function(){n.unbind(t)}};t.clear=function(e){var t=(0,r.getSensor)(e);(0,r.removeSensor)(t)};t.ver="1.0.1"},610:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeSensor=t.getSensor=void 0;var r,a=(r=n(611))&&r.__esModule?r:{default:r},o=n(612),i=n(578);var c={};t.getSensor=function(e){var t=e.getAttribute(i.SizeSensorId);if(t&&c[t])return c[t];var n=(0,a.default)();e.setAttribute(i.SizeSensorId,n);var r=(0,o.createSensor)(e);return c[n]=r,r};t.removeSensor=function(e){var t=e.element.getAttribute(i.SizeSensorId);e.element.removeAttribute(i.SizeSensorId),e.destroy(),t&&c[t]&&delete c[t]}},611:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=1;t.default=function(){return"".concat(r++)}},612:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var r=n(613),a=n(614),o="undefined"!==typeof ResizeObserver?a.createSensor:r.createSensor;t.createSensor=o},613:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var r,a=(r=n(577))&&r.__esModule?r:{default:r},o=n(578);t.createSensor=function(e){var t=void 0,n=[],r=(0,a.default)((function(){n.forEach((function(t){t(e)}))})),i=function(){t&&t.parentNode&&(t.contentDocument&&t.contentDocument.defaultView.removeEventListener("resize",r),t.parentNode.removeChild(t),t=void 0,n=[])};return{element:e,bind:function(a){t||(t=function(){"static"===getComputedStyle(e).position&&(e.style.position="relative");var t=document.createElement("object");return t.onload=function(){t.contentDocument.defaultView.addEventListener("resize",r),r()},t.style.display="block",t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.height="100%",t.style.width="100%",t.style.overflow="hidden",t.style.pointerEvents="none",t.style.zIndex="-1",t.style.opacity="0",t.setAttribute("class",o.SensorClassName),t.setAttribute("tabindex",o.SensorTabIndex),t.type="text/html",e.appendChild(t),t.data="about:blank",t}()),-1===n.indexOf(a)&&n.push(a)},destroy:i,unbind:function(e){var r=n.indexOf(e);-1!==r&&n.splice(r,1),0===n.length&&t&&i()}}}},614:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createSensor=void 0;var r,a=(r=n(577))&&r.__esModule?r:{default:r};t.createSensor=function(e){var t=void 0,n=[],r=(0,a.default)((function(){n.forEach((function(t){t(e)}))})),o=function(){t.disconnect(),n=[],t=void 0};return{element:e,bind:function(a){t||(t=function(){var t=new ResizeObserver(r);return t.observe(e),r(),t}()),-1===n.indexOf(a)&&n.push(a)},destroy:o,unbind:function(e){var r=n.indexOf(e);-1!==r&&n.splice(r,1),0===n.length&&t&&o()}}}},678:function(e,t,n){"use strict";var r=n(7),a=n(6),o=n(4),i=n(1),c=n(8),s=n(97),l=n(541),d=n(12),p=n(15),u=n(60),h=n(70);function b(e){return Object(u.a)("MuiFab",e)}var j=Object(h.a)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),x=n(5),m=n(2),f=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],O=Object(x.a)(l.a,{name:"MuiFab",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],t["size".concat(Object(d.a)(n.size))],"inherit"===n.color&&t.colorInherit,t[Object(d.a)(n.size)],t[n.color]]}})((function(e){var t,n,a,i=e.theme,c=e.ownerState;return Object(o.a)({},i.typography.button,(t={minHeight:36,transition:i.transitions.create(["background-color","box-shadow","border-color"],{duration:i.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(i.vars||i).zIndex.fab,boxShadow:(i.vars||i).shadows[6],"&:active":{boxShadow:(i.vars||i).shadows[12]},color:i.vars?i.vars.palette.text.primary:null==(n=(a=i.palette).getContrastText)?void 0:n.call(a,i.palette.grey[300]),backgroundColor:(i.vars||i).palette.grey[300],"&:hover":{backgroundColor:(i.vars||i).palette.grey.A100,"@media (hover: none)":{backgroundColor:(i.vars||i).palette.grey[300]},textDecoration:"none"}},Object(r.a)(t,"&.".concat(j.focusVisible),{boxShadow:(i.vars||i).shadows[6]}),Object(r.a)(t,"&.".concat(j.disabled),{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground}),t),"small"===c.size&&{width:40,height:40},"medium"===c.size&&{width:48,height:48},"extended"===c.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===c.variant&&"small"===c.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===c.variant&&"medium"===c.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===c.color&&{color:"inherit"})}),(function(e){var t=e.theme,n=e.ownerState;return Object(o.a)({},"inherit"!==n.color&&"default"!==n.color&&null!=(t.vars||t).palette[n.color]&&{color:(t.vars||t).palette[n.color].contrastText,backgroundColor:(t.vars||t).palette[n.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[n.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[n.color].main}}})})),g=i.forwardRef((function(e,t){var n=Object(p.a)({props:e,name:"MuiFab"}),r=n.children,i=n.className,l=n.color,u=void 0===l?"default":l,h=n.component,j=void 0===h?"button":h,x=n.disabled,g=void 0!==x&&x,v=n.disableFocusRipple,y=void 0!==v&&v,w=n.focusVisibleClassName,S=n.size,k=void 0===S?"large":S,z=n.variant,I=void 0===z?"circular":z,_=Object(a.a)(n,f),C=Object(o.a)({},n,{color:u,component:j,disabled:g,disableFocusRipple:y,size:k,variant:I}),R=function(e){var t=e.color,n=e.variant,r=e.classes,a=e.size,o={root:["root",n,"size".concat(Object(d.a)(a)),"inherit"===t?"colorInherit":t]};return Object(s.a)(o,b,r)}(C);return Object(m.jsx)(O,Object(o.a)({className:Object(c.a)(R.root,i),component:j,disabled:g,focusRipple:!y,focusVisibleClassName:Object(c.a)(R.focusVisible,w),ownerState:C,ref:t},_,{children:r}))}));t.a=g},886:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n(5),o=n(31),i=n(543),c=n(495),s=n(1),l=n(287),d=n(81),p=n(49),u=n(2),h=function(){return Object(u.jsx)(l.a,{children:Object(u.jsxs)(d.m,{title:"Campaigns",children:[Object(u.jsx)(p.d,{color:"text.secondary",children:"Today"}),Object(u.jsx)(d.h,{value:75,color:"primary",text:"Google (102k)"}),Object(u.jsx)(d.h,{value:45,color:"secondary",text:"Twitter (40k)"}),Object(u.jsx)(d.h,{value:75,color:"primary",text:"Tensor (80k)"}),Object(u.jsx)(p.d,{color:"text.secondary",display:"block",pt:4,children:"Yesterday"}),Object(u.jsx)(d.h,{value:75,color:"primary",text:"Google (102k)"}),Object(u.jsx)(d.h,{value:45,color:"secondary",text:"Twitter (40k)"}),Object(u.jsx)(d.h,{value:75,color:"primary",text:"Tensor (80k)"}),Object(u.jsx)(p.d,{color:"text.secondary",display:"block",pt:4,children:"Yesterday"}),Object(u.jsx)(d.h,{value:75,color:"primary",text:"Google (102k)"}),Object(u.jsx)(d.h,{value:45,color:"secondary",text:"Twitter (40k)"}),Object(u.jsx)(d.h,{value:75,color:"primary",text:"Tensor (80k)"})]})})},b=n(14),j=n(9),x=n(74),m=n(574),f=function(e){var t=e.height,n=e.color,r=void 0===n?[]:n,a=Object(x.a)(),o={legend:{show:!0,itemGap:20,icon:"circle",bottom:0,textStyle:{color:a.palette.text.secondary,fontSize:13,fontFamily:"roboto"}},tooltip:{show:!1,trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},xAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],yAxis:[{axisLine:{show:!1},splitLine:{show:!1}}],series:[{name:"Traffic Rate",type:"pie",radius:["45%","72.55%"],center:["50%","50%"],avoidLabelOverlap:!1,hoverOffset:5,stillShowZeroSum:!1,label:{normal:{show:!1,position:"center",textStyle:{color:a.palette.text.secondary,fontSize:13,fontFamily:"roboto"},formatter:"{a}"},emphasis:{show:!0,textStyle:{fontSize:"14",fontWeight:"normal"},formatter:"{b} \n{c} ({d}%)"}},labelLine:{normal:{show:!1}},data:[{value:65,name:"Google"},{value:20,name:"Facebook"},{value:15,name:"Others"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};return Object(u.jsx)(m.a,{style:{height:t},option:Object(j.a)(Object(j.a)({},o),{},{color:Object(b.a)(r)})})},O=n(678),g=n(542),v=n(677),y=n(483),w=n(290),S=n(546),k=n(825),z=Object(a.a)(p.e)((function(e){var t=e.theme;return Object(r.a)({marginLeft:24,fontWeight:"500"},t.breakpoints.down("sm"),{marginLeft:4})})),I=Object(a.a)(O.a)((function(){return{marginLeft:0,boxShadow:"none",background:"#08ad6c !important",backgroundColor:"rgba(9, 182, 109, 1) !important"}})),_=Object(a.a)(O.a)((function(e){var t=e.theme;return{marginLeft:0,boxShadow:"none",color:"white !important",background:"".concat(t.palette.error.main," !important")}})),C=Object(a.a)(g.a)((function(){return{width:"32px !important",height:"32px !important"}})),R=function(){var e=Object(o.a)().palette.text.secondary;return[1,2,3,4].map((function(t){return Object(u.jsxs)(s.Fragment,{children:[Object(u.jsx)(c.a,{sx:{py:1,px:2},className:"project-card",children:Object(u.jsxs)(i.a,{container:!0,alignItems:"center",children:[Object(u.jsx)(i.a,{item:!0,md:5,xs:7,children:Object(u.jsxs)(l.a,{display:"flex",alignItems:"center",children:[Object(u.jsx)(v.a,{}),Object(u.jsx)(y.a,{smDown:!0,children:t%2===1?Object(u.jsx)(I,{size:"small",children:Object(u.jsx)(w.a,{children:"star_outline"})}):Object(u.jsx)(_,{size:"small",children:Object(u.jsx)(w.a,{children:"date_range"})})}),Object(u.jsxs)(z,{children:["Project ",t]})]})}),Object(u.jsx)(i.a,{item:!0,md:3,xs:4,children:Object(u.jsx)(l.a,{color:e,children:Object(k.a)((new Date).getTime(),"MM/dd/yyyy hh:mma")})}),Object(u.jsx)(y.a,{smDown:!0,children:Object(u.jsx)(i.a,{item:!0,xs:3,children:Object(u.jsxs)(l.a,{display:"flex",position:"relative",marginLeft:"-0.875rem !important",children:[Object(u.jsx)(C,{src:"/assets/images/face-4.jpg"}),Object(u.jsx)(C,{src:"/assets/images/face-4.jpg"}),Object(u.jsx)(C,{src:"/assets/images/face-4.jpg"}),Object(u.jsx)(C,{sx:{fontSize:"14px"},children:"+3"})]})})}),Object(u.jsx)(i.a,{item:!0,xs:1,children:Object(u.jsx)(l.a,{display:"flex",justifyContent:"flex-end",children:Object(u.jsx)(S.a,{children:Object(u.jsx)(w.a,{children:"more_vert"})})})})]})}),Object(u.jsx)(l.a,{py:1})]},t)}))},N=n(907),T=Object(a.a)(c.a)((function(e){var t=e.theme;return Object(r.a)({display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",padding:"24px !important",background:t.palette.background.paper},t.breakpoints.down("sm"),{padding:"16px !important"})})),L=Object(a.a)(l.a)((function(e){var t=e.theme;return{display:"flex",flexWrap:"wrap",alignItems:"center","& small":{color:t.palette.text.secondary},"& .icon":{opacity:.6,fontSize:"44px",color:t.palette.primary.main}}})),M=Object(a.a)("h6")((function(e){return{margin:0,marginTop:"4px",fontSize:"14px",fontWeight:"500",color:e.theme.palette.primary.main}})),E=function(){return Object(u.jsx)(i.a,{container:!0,spacing:3,sx:{mb:"24px"},children:[{name:"New Leads",amount:3050,icon:"group"},{name:"This week Sales",amount:"$80,500",icon:"attach_money"},{name:"Inventory Status",amount:"8.5% Stock Surplus",icon:"store"},{name:"Orders to deliver",amount:"305 Orders",icon:"shopping_cart"}].map((function(e,t){return Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(T,{elevation:6,children:[Object(u.jsxs)(L,{children:[Object(u.jsx)(w.a,{className:"icon",children:e.icon}),Object(u.jsxs)(l.a,{ml:"12px",children:[Object(u.jsx)(p.d,{children:e.name}),Object(u.jsx)(M,{children:e.amount})]})]}),Object(u.jsx)(N.a,{title:"View Details",placement:"top",children:Object(u.jsx)(S.a,{children:Object(u.jsx)(w.a,{children:"arrow_right_alt"})})})]})},t)}))})},F=n(469),P=Object(a.a)("div")((function(){return{display:"flex",flexWrap:"wrap",alignItems:"center"}})),B=Object(a.a)(O.a)((function(){return{width:"44px !important",height:"44px !important",boxShadow:"none !important"}})),W=Object(a.a)("h3")((function(e){return{margin:0,color:e.textcolor,fontWeight:"500",marginLeft:"12px"}})),A=Object(a.a)("h1")((function(e){return{margin:0,flexGrow:1,color:e.theme.palette.text.secondary}})),U=Object(a.a)("span")((function(e){return{fontSize:"13px",color:e.textcolor,marginLeft:"4px"}})),D=Object(a.a)("div")((function(){return{width:16,height:16,color:"#fff",display:"flex",overflow:"hidden",borderRadius:"300px ",justifyContent:"center","& .icon":{fontSize:"14px"}}})),V=function(){var e=Object(o.a)().palette,t=e.error.main,n=Object(F.e)(e.error.main,.85);return Object(u.jsxs)(i.a,{container:!0,spacing:3,sx:{mb:3},children:[Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(c.a,{elevation:3,sx:{p:2},children:[Object(u.jsxs)(P,{children:[Object(u.jsx)(B,{size:"medium",sx:{background:"rgba(9, 182, 109, 0.15)"},children:Object(u.jsx)(w.a,{sx:{color:"#08ad6c"},children:"trending_up"})}),Object(u.jsx)(W,{textcolor:"#08ad6c",children:"Active Users"})]}),Object(u.jsxs)(P,{sx:{pt:2},children:[Object(u.jsx)(A,{children:"10.8k"}),Object(u.jsx)(D,{sx:{background:"rgba(9, 182, 109, 0.15)"},children:Object(u.jsx)(w.a,{className:"icon",children:"expand_less"})}),Object(u.jsx)(U,{textcolor:"#08ad6c",children:"(+21%)"})]})]})}),Object(u.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(c.a,{elevation:3,sx:{p:2},children:[Object(u.jsxs)(P,{children:[Object(u.jsx)(B,{size:"medium",sx:{background:n,overflow:"hidden"},children:Object(u.jsx)(w.a,{sx:{color:t},children:"star_outline"})}),Object(u.jsx)(W,{textcolor:t,children:"Transactions"})]}),Object(u.jsxs)(P,{sx:{pt:2},children:[Object(u.jsx)(A,{children:"$2.8M"}),Object(u.jsx)(D,{sx:{background:n},children:Object(u.jsx)(w.a,{className:"icon",children:"expand_less"})}),Object(u.jsx)(U,{textcolor:t,children:"(+21%)"})]})]})})]})},G=n(909),q=n(484),H=n(679),$=n(910),J=n(911),X=n(912),Y=n(913),Z=Object(a.a)(l.a)((function(){return{display:"flex",paddingLeft:"24px",paddingRight:"24px",marginBottom:"12px",alignItems:"center",justifyContent:"space-between"}})),K=Object(a.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",textTransform:"capitalize"}})),Q=Object(a.a)(G.a)((function(){return{minWidth:400,whiteSpace:"pre","& small":{width:50,height:15,borderRadius:500,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"},"& td":{borderBottom:"none"},"& td:first-of-type":{paddingLeft:"16px !important"}}})),ee=Object(a.a)("small")((function(e){return{width:50,height:15,color:"#fff",padding:"2px 8px",borderRadius:"4px",overflow:"hidden",background:e.bgcolor,boxShadow:"0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)"}})),te=[{imgUrl:"/assets/images/products/headphone-2.jpg",name:"earphone",price:100,available:15},{imgUrl:"/assets/images/products/headphone-3.jpg",name:"earphone",price:1500,available:30},{imgUrl:"/assets/images/products/iphone-2.jpg",name:"iPhone x",price:1900,available:35},{imgUrl:"/assets/images/products/iphone-1.jpg",name:"iPhone x",price:100,available:0},{imgUrl:"/assets/images/products/headphone-3.jpg",name:"Head phone",price:1190,available:5}],ne=function(){var e=Object(o.a)().palette,t=e.error.main,n=e.primary.main,r=e.secondary.main;return Object(u.jsxs)(c.a,{elevation:3,sx:{pt:"20px",mb:3},children:[Object(u.jsxs)(Z,{children:[Object(u.jsx)(K,{children:"top selling products"}),Object(u.jsxs)(q.a,{size:"small",defaultValue:"this_month",children:[Object(u.jsx)(H.a,{value:"this_month",children:"This Month"}),Object(u.jsx)(H.a,{value:"last_month",children:"Last Month"})]})]}),Object(u.jsx)(l.a,{overflow:"auto",children:Object(u.jsxs)(Q,{children:[Object(u.jsx)($.a,{children:Object(u.jsxs)(J.a,{children:[Object(u.jsx)(X.a,{sx:{px:3},colSpan:4,children:"Name"}),Object(u.jsx)(X.a,{sx:{px:0},colSpan:2,children:"Revenue"}),Object(u.jsx)(X.a,{sx:{px:0},colSpan:2,children:"Stock Status"}),Object(u.jsx)(X.a,{sx:{px:0},colSpan:1,children:"Action"})]})}),Object(u.jsx)(Y.a,{children:te.map((function(e,a){return Object(u.jsxs)(J.a,{hover:!0,children:[Object(u.jsx)(X.a,{colSpan:4,align:"left",sx:{px:0,textTransform:"capitalize"},children:Object(u.jsxs)(l.a,{display:"flex",alignItems:"center",children:[Object(u.jsx)(g.a,{src:e.imgUrl}),Object(u.jsx)(p.c,{sx:{m:0,ml:4},children:e.name})]})}),Object(u.jsxs)(X.a,{align:"left",colSpan:2,sx:{px:0,textTransform:"capitalize"},children:["$",e.price>999?(e.price/1e3).toFixed(1)+"k":e.price]}),Object(u.jsx)(X.a,{sx:{px:0},align:"left",colSpan:2,children:e.available?e.available<20?Object(u.jsxs)(ee,{bgcolor:r,children:[e.available," available"]}):Object(u.jsx)(ee,{bgcolor:n,children:"in stock"}):Object(u.jsx)(ee,{bgcolor:t,children:"out of stock"})}),Object(u.jsx)(X.a,{sx:{px:0},colSpan:1,children:Object(u.jsx)(S.a,{children:Object(u.jsx)(w.a,{color:"primary",children:"edit"})})})]},a)}))})]})})]})},re=n(488),ae=n(190),oe=Object(a.a)(c.a)((function(e){var t=e.theme;return Object(r.a)({marginBottom:"24px",padding:"24px !important"},t.breakpoints.down("sm"),{paddingLeft:"16px !important"})})),ie=Object(a.a)(c.a)((function(e){var t=e.theme;return Object(r.a)({boxShadow:"none",textAlign:"center",position:"relative",padding:"24px !important",background:"rgb(".concat(Object(ae.a)(t.palette.primary.main),", 0.15) !important")},t.breakpoints.down("sm"),{padding:"16px !important"})})),ce=Object(a.a)("p")((function(e){return{margin:0,paddingTop:"24px",paddingBottom:"24px",color:e.theme.palette.text.secondary}})),se=function(){return Object(u.jsx)(oe,{children:Object(u.jsxs)(ie,{elevation:0,children:[Object(u.jsx)("img",{src:"/assets/images/illustrations/upgrade.svg",alt:"upgrade"}),Object(u.jsxs)(ce,{children:["Upgrade to ",Object(u.jsx)("b",{children:"MatX PRO"})," for ",Object(u.jsx)("br",{})," more resources"]}),Object(u.jsx)(re.a,{size:"large",color:"primary",variant:"contained",sx:{textTransform:"uppercase"},children:"upgrade now"})]})})},le=Object(a.a)("div")((function(e){var t=e.theme;return Object(r.a)({margin:"30px"},t.breakpoints.down("sm"),{margin:"16px"})})),de=Object(a.a)("span")((function(){return{fontSize:"1rem",fontWeight:"500",marginRight:".5rem",textTransform:"capitalize"}})),pe=Object(a.a)("span")((function(e){return{fontSize:"0.875rem",color:e.theme.palette.text.secondary}})),ue=Object(a.a)("h4")((function(e){return{fontSize:"1rem",fontWeight:"500",marginBottom:"16px",textTransform:"capitalize",color:e.theme.palette.text.secondary}}));t.default=function(){var e=Object(o.a)().palette;return Object(u.jsx)(s.Fragment,{children:Object(u.jsx)(le,{className:"analytics",children:Object(u.jsxs)(i.a,{container:!0,spacing:3,children:[Object(u.jsxs)(i.a,{item:!0,lg:8,md:8,sm:12,xs:12,children:[Object(u.jsx)(E,{}),Object(u.jsx)(ne,{}),Object(u.jsx)(V,{}),Object(u.jsx)(ue,{children:"Ongoing Projects"}),Object(u.jsx)(R,{})]}),Object(u.jsxs)(i.a,{item:!0,lg:4,md:4,sm:12,xs:12,children:[Object(u.jsxs)(c.a,{sx:{px:3,py:2,mb:3},children:[Object(u.jsx)(de,{children:"Traffic Sources"}),Object(u.jsx)(pe,{children:"Last 30 days"}),Object(u.jsx)(f,{height:"300px",color:[e.primary.dark,e.primary.main,e.primary.light]})]}),Object(u.jsx)(se,{}),Object(u.jsx)(h,{})]})]})})})}}}]);
//# sourceMappingURL=16.d2a3a815.chunk.js.map