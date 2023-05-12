(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[31],{905:function(e,t,a){"use strict";a.r(t);var i=a(7),r=a(579),s=a(177),n=a(289),l=a(81),c=a(9),u=a(13),o=a(880),m=a(881),d=a(868),b=a(5),j=a(543),p=a(869),h=a(681),x=a(888),g=a(677),v=a(488),O=a(290),f=a(49),q=a(1),w=a.n(q),C=a(693),M=a(2),y=Object(b.a)(C.TextValidator)((function(){return{width:"100%",marginBottom:"16px"}})),P=function(){var e=Object(q.useState)({date:new Date}),t=Object(u.a)(e,2),a=t[0],r=t[1];Object(q.useEffect)((function(){return C.ValidatorForm.addValidationRule("isPasswordMatch",(function(e){return e===a.password})),function(){return C.ValidatorForm.removeValidationRule("isPasswordMatch")}}),[a.password]);var s=function(e){e.persist(),r(Object(c.a)(Object(c.a)({},a),{},Object(i.a)({},e.target.name,e.target.value)))},n=a.username,l=a.firstName,b=a.creditCard,w=a.mobile,P=a.password,S=a.confirmPassword,N=a.gender,k=a.date,F=a.email;return Object(M.jsx)("div",{children:Object(M.jsxs)(C.ValidatorForm,{onSubmit:function(e){},onError:function(){return null},children:[Object(M.jsxs)(j.a,{container:!0,spacing:6,children:[Object(M.jsxs)(j.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(M.jsx)(y,{type:"text",name:"username",id:"standard-basic",value:n||"",onChange:s,errorMessages:["this field is required"],label:"Username (Min length 4, Max length 9)",validators:["required","minStringLength: 4","maxStringLength: 9"]}),Object(M.jsx)(y,{type:"text",name:"firstName",label:"First Name",onChange:s,value:l||"",validators:["required"],errorMessages:["this field is required"]}),Object(M.jsx)(y,{type:"email",name:"email",label:"Email",value:F||"",onChange:s,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),Object(M.jsx)(d.a,{dateAdapter:m.a,children:Object(M.jsx)(o.a,{value:k,onChange:function(e){return r(Object(c.a)(Object(c.a)({},a),{},{date:e}))},renderInput:function(e){return Object(M.jsx)(y,Object(c.a)(Object(c.a)({},e),{},{label:"Date picker",id:"mui-pickers-date",sx:{mb:2,width:"100%"}}))}})}),Object(M.jsx)(y,{sx:{mb:4},type:"number",name:"creditCard",label:"Credit Card",onChange:s,value:b||"",errorMessages:["this field is required"],validators:["required","minStringLength:16","maxStringLength: 16"]})]}),Object(M.jsxs)(j.a,{item:!0,lg:6,md:6,sm:12,xs:12,sx:{mt:2},children:[Object(M.jsx)(y,{type:"text",name:"mobile",value:w||"",label:"Mobile Nubmer",onChange:s,validators:["required"],errorMessages:["this field is required"]}),Object(M.jsx)(y,{name:"password",type:"password",label:"Password",value:P||"",onChange:s,validators:["required"],errorMessages:["this field is required"]}),Object(M.jsx)(y,{type:"password",name:"confirmPassword",onChange:s,label:"Confirm Password",value:S||"",validators:["required","isPasswordMatch"],errorMessages:["this field is required","password didn't match"]}),Object(M.jsxs)(p.a,{row:!0,name:"gender",sx:{mb:2},value:N||"",onChange:s,children:[Object(M.jsx)(h.a,{value:"Male",label:"Male",labelPlacement:"end",control:Object(M.jsx)(x.a,{color:"secondary"})}),Object(M.jsx)(h.a,{value:"Female",label:"Female",labelPlacement:"end",control:Object(M.jsx)(x.a,{color:"secondary"})}),Object(M.jsx)(h.a,{value:"Others",label:"Others",labelPlacement:"end",control:Object(M.jsx)(x.a,{color:"secondary"})})]}),Object(M.jsx)(h.a,{control:Object(M.jsx)(g.a,{}),label:"I have read and agree to the terms of service."})]})]}),Object(M.jsxs)(v.a,{color:"primary",variant:"contained",type:"submit",children:[Object(M.jsx)(O.a,{children:"send"}),Object(M.jsx)(f.e,{sx:{pl:1,textTransform:"capitalize"},children:"Submit"})]})]})})},S=a(287),N=a(914),k=a(889),F=a(899),I=a(545);function D(e){switch(e){case 0:return"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tincidunt velit. Quisque laoreet, lectus id tincidunt fringilla, eros est bibendum felis, sit amet lobortis ante sem non diam. Donec viverra a nisi eu eleifend. Mauris vel leo tempor, commodo felis in, sollicitudin velit. Nullam eu sem id lacus venenatis commodo nec a lacus. Donec in egestas justo. Quisque elementum diam felis. In a ullamcorper leo. In lorem urna, mollis in feugiat sed, aliquet nec diam. Mauris tempus dui at gravida pharetra. Etiam nec lectus metus. In dapibus placerat consequat. Quisque ornare ut lacus ac tempus. Pellentesque sed ornare tellus. Curabitur dictum turpis quam, at feugiat mi elementum a.";case 1:return"Integer euismod dapibus sapien, a interdum augue blandit eget. Donec pellentesque, sapien iaculis dignissim sagittis, risus nulla auctor eros, sed suscipit eros mauris id lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer porttitor mauris egestas consequat molestie. Nam egestas iaculis malesuada. Praesent sagittis venenatis finibus. Praesent porttitor ipsum et sapien cursus, eu mattis augue ornare.";case 2:return"In laoreet, dui vel tristique facilisis, velit dui dictum diam, nec feugiat mi mauris eu nunc. Nullam auctor eget ante ac laoreet. Aliquam et ante ligula. Nam imperdiet augue magna, ac tincidunt neque mollis nec. Sed eu nunc sit amet tellus commodo elementum non sit amet sem. Etiam ipsum nibh, rutrum vel ultrices in, vulputate ac dolor. Morbi dictum lectus id orci dapibus, et faucibus nulla viverra. Nulla consectetur ex vitae pretium vehicula. Quisque varius tempor erat et semper. Vivamus consectetur, eros sit amet ornare facilisis, nulla felis laoreet tortor, sit amet egestas risus ipsum sed eros.";default:return"Aenean arcu ligula, porttitor id neque imperdiet, congue convallis erat. Integer libero sapien, convallis a vulputate vel, pretium vulputate metus. Donec leo justo, viverra ut tempor commodo, laoreet eu velit. Donec vel sem quis velit pharetra elementum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam in commodo mauris. Ut iaculis ipsum velit."}}function E(){var e=w.a.useState(0),t=Object(u.a)(e,2),a=t[0],i=t[1],r=["Select master blaster campaign settings","Create an ad group","Create an ad"];return Object(M.jsxs)(S.a,{children:[Object(M.jsx)(F.a,{activeStep:a,alternativeLabel:!0,children:r.map((function(e){return Object(M.jsx)(N.a,{children:Object(M.jsx)(k.a,{children:e})},e)}))}),Object(M.jsx)(S.a,{mt:4,children:a===r.length?Object(M.jsxs)(S.a,{children:[Object(M.jsx)(I.a,{children:"All steps completed"}),Object(M.jsx)(v.a,{sx:{mt:2},variant:"contained",color:"secondary",onClick:function(){return i(0)},children:"Reset"})]}):Object(M.jsxs)(S.a,{children:[Object(M.jsx)(I.a,{children:D(a)}),Object(M.jsxs)(S.a,{pt:2,children:[Object(M.jsx)(v.a,{variant:"contained",color:"secondary",disabled:0===a,onClick:function(){return i((function(e){return e-1}))},children:"Back"}),Object(M.jsx)(v.a,{sx:{ml:2},variant:"contained",color:"primary",onClick:function(){return i((function(e){return e+1}))},children:a===r.length-1?"Finish":"Next"})]})]})})]})}var V=Object(s.a)("div")((function(e){var t,a=e.theme;return t={margin:"30px"},Object(i.a)(t,a.breakpoints.down("sm"),{margin:"16px"}),Object(i.a)(t,"& .breadcrumb",Object(i.a)({marginBottom:"30px"},a.breakpoints.down("sm"),{marginBottom:"16px"})),t}));t.default=function(){return Object(M.jsxs)(V,{children:[Object(M.jsx)(n.a,{className:"breadcrumb",children:Object(M.jsx)(l.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Form"}]})}),Object(M.jsxs)(r.a,{spacing:3,children:[Object(M.jsx)(l.m,{title:"Simple Form",children:Object(M.jsx)(P,{})}),Object(M.jsx)(l.m,{title:"stepper form",children:Object(M.jsx)(E,{})})]})]})}}}]);
//# sourceMappingURL=31.78c13abb.chunk.js.map