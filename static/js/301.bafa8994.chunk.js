"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[301],{5848:function(n,e,i){i.d(e,{Z:function(){return S}});var t,r,o,a,s,d,p,c,x,l=i(5705),u=i(6355),m=i(3853),h=i(7425),f=i(9434),g=i(6727),b=i(168),w=i(6444),Z=(0,w.F4)(t||(t=(0,b.Z)(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"]))),j=w.ZP.div(r||(r=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  max-width: 500px;\n  margin: 0 auto;\n  padding: 10px;\n"]))),v=(0,w.ZP)(l.l0)(o||(o=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  padding: 20px;\n  \n  font-size: calc(var(--index) * 2);\n  border-radius: 15px;\n  background: #e3e3e3;\n  box-shadow: 16px 16px 32px #c8c8c8, -16px -16px 32px #fefefe;\n  animation: "," 0.5s ease;\n"])),Z),y=w.ZP.h2(a||(a=(0,b.Z)(["\n  display: block;\n  margin-bottom: 15px;\n  \n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: #000;\n  \n  @media (min-width: 481px) {\n    font-size: 30px;\n  }\n"]))),k=w.ZP.label(s||(s=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n  width: 100%;\n  \n  @media (min-width: 481px) {\n    font-size: 1.2rem;\n  }\n"]))),z=w.ZP.span(d||(d=(0,b.Z)(["\n  display: flex;\n  gap: 5px;\n  align-items: end;\n  justify-content: center;\n  margin-bottom: 10px;\n"]))),P=(0,w.ZP)(l.gN)(p||(p=(0,b.Z)(["\n  width: 100%;\n  padding: 10px;\n  \n  border: none;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n  transition: box-shadow 0.2s ease;\n  \n  &::placeholder {\n    font-size: 15px;\n  }\n  &:focus {\n    outline: none;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);\n  }\n"]))),q=w.ZP.p(c||(c=(0,b.Z)(["\n  text-align: center;\n  margin-top: 10px;\n  \n  color: red;\n  \n  @media (min-width: 481px) {\n    font-size: 17px;\n  }\n"]))),C=w.ZP.button(x||(x=(0,b.Z)(["\n  height: calc(var(--index) * 4);\n  cursor: pointer;\n  \n  letter-spacing: 2px;\n  text-transform: uppercase;\n  border: 2px solid #000;\n  background-color: transparent;\n  border-radius: 5px;\n  transition: 0.5s;\n  \n  @media (min-width: 481px) {\n    font-size: 20px;\n    width: 50%;\n    height: 45px;\n    margin-top: 10px;\n  }\n  \n  &:hover {\n    background-color: rgb(0, 0, 0);\n    color: white;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0);\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]))),I=i(184),S=function(n){var e=n.title,i=n.fields,t=n.onSubmit,r=i.reduce((function(n,e){return n[e]="",n}),{}),o=(0,g.Ry)(i.reduce((function(n,e){return"name"===e&&(n[e]=(0,g.Z_)().required("".concat(e," is required")).min(2,"".concat(e," is too short")).max(25,"".concat(e," is too long"))),"email"===e&&(n[e]=(0,g.Z_)().email("Invalid email").required("Email is required")),"password"===e&&(n[e]=(0,g.Z_)().required("Password is required")),n}),{})),a=(0,f.I0)();return(0,I.jsx)(j,{children:(0,I.jsx)(l.J9,{initialValues:r,onSubmit:function(n,e){var i=e.resetForm;a(t(n)),i()},validationSchema:o,children:(0,I.jsxs)(v,{autoComplete:"off",children:[(0,I.jsx)(y,{children:e}),i.map((function(n){return(0,I.jsxs)(k,{children:[(0,I.jsxs)(z,{children:["name"===n&&(0,I.jsx)(u.q1E,{size:20}),"email"===n&&(0,I.jsx)(m.Imn,{size:20}),"password"===n&&(0,I.jsx)(h.xuE,{size:20}),n.charAt(0).toUpperCase()+n.slice(1)]}),(0,I.jsx)(P,{placeholder:"Please enter your ".concat(n),type:"password"===n?"password":"text",name:n}),(0,I.jsx)(l.Bc,{component:q,name:n})]},n)})),(0,I.jsx)(C,{type:"submit",children:"Registration"===e?"Sign Up":"Log In"})]})})})}},9301:function(n,e,i){i.r(e),i.d(e,{default:function(){return c}});var t=i(4270),r=i(9434),o=i(9273),a=i(5848),s=i(184),d=function(){var n=(0,r.I0)();return(0,s.jsx)(a.Z,{title:"Registration",fields:["name","email","password"],onSubmit:function(e){var i=e.name,t=e.email,r=e.password;n((0,o.z2)({name:i,email:t,password:r}))}})},p=i(4757),c=function(){var n=(0,p.aC)().isLoading,e=(0,p.J6)().LoaderBig;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.q,{children:(0,s.jsx)("title",{children:"Registration"})}),n&&(0,s.jsx)(e,{}),(0,s.jsx)(d,{})]})}}}]);
//# sourceMappingURL=301.bafa8994.chunk.js.map