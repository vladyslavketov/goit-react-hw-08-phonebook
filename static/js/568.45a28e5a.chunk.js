"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[568],{8568:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r=t(2791),a=t(9434),i=t(4169),c=t(2609),u=t(6052),o=t(1686),s=t(184);function l(){var n=(0,a.I0)(),e=(0,a.v9)((function(n){return n.contacts.items}));return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.Gq,{onSubmit:function(t){t.preventDefault();var r=t.currentTarget.elements,a=r.name,i=r.number;if(e.find((function(n){return n.name===a.value})))return o.Notify.failure('Sorry, a contact with that name: "'.concat(a.value,'" already exists. Try a different name.'));var c={name:a.value,number:i.value};n((0,u.uK)(c)),t.currentTarget.reset()},children:[(0,s.jsxs)(i.ar,{children:["Name",(0,s.jsx)(i.Fy,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,s.jsxs)(i.ar,{children:["Number",(0,s.jsx)(i.Fy,{type:"tel",name:"number",required:!0})]}),(0,s.jsx)(c.z,{type:"submit",title:"Add contact"})]})})}o.Notify.init({width:"320px",closeButton:!1,timeout:5e3});var d,x,m=t(4808),f=function(){var n=(0,a.I0)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.ar,{children:[(0,s.jsx)("span",{children:"Find contacts by name"}),(0,s.jsx)(i.Fy,{type:"text",onChange:function(e){n((0,m.zp)(e.currentTarget.value))}})]})})},p=t(168),h=t(82),j=h.ZP.li(d||(d=(0,p.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 32px;\n  padding: 0 0 0 8px;\n\n  background-color: rgba(135, 207, 235, 0.2);\n  border-radius: 8px;\n\n  & span:nth-child(2) {\n    margin-left: auto;\n  }\n"]))),b=function(n){var e=n.contact,t=e.id,r=e.name,i=e.number,o=(0,a.I0)();return(0,s.jsxs)(j,{children:[(0,s.jsx)("span",{children:r}),(0,s.jsx)("span",{children:i}),(0,s.jsx)(c.z,{type:"button",title:"Delete",onClick:function(){return o((0,u.GK)(t))}})]},t)},g=h.ZP.ul(x||(x=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin: 0 auto;\n  padding: 20px;\n  max-width: 360px;\n\n  background-color: rgba(135, 207, 235, 0.1);\n  border-radius: 8px;\n"]))),v=function(){var n=(0,a.v9)((function(n){return n.contacts.items})),e=(0,a.v9)((function(n){return n.filter})),t=function(){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}();return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(g,{children:t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,s.jsx)(b,{contact:{id:e,name:t,number:r}},e)}))})})},y=function(){var n=(0,a.I0)(),e=(0,a.v9)((function(n){return n.contacts.items})).length>0;return(0,r.useEffect)((function(){n((0,u.K2)())}),[n]),(0,s.jsx)(i.$0,{children:(0,s.jsxs)(i.W2,{children:[(0,s.jsx)(l,{}),e&&(0,s.jsxs)(i.xu,{children:[(0,s.jsx)("h2",{children:"Your contacts"}),(0,s.jsx)(f,{}),(0,s.jsx)(v,{})]})]})})}}}]);
//# sourceMappingURL=568.45a28e5a.chunk.js.map