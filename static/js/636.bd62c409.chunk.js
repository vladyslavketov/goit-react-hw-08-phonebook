"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[636],{636:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(2791),a=t(9434),c=t(4169),s=t(6052),i="ContactForm_form__dhl+T",u=t(184);function o(){var e=(0,a.I0)(),n=(0,a.v9)((function(e){return e.contacts.items}));return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("form",{className:i,onSubmit:function(t){t.preventDefault();var r=t.currentTarget.elements,a=r.name,c=r.number;if(console.log(a),console.log(c),n.find((function(e){return e.name===a.value})))return alert("".concat(a," is already in contacts."));var i={name:a.value,number:c.value};e((0,s.uK)(i)),t.currentTarget.reset()},children:[(0,u.jsxs)("label",{children:["Name",(0,u.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)("label",{children:["Number",(0,u.jsx)("input",{type:"tel",name:"number",required:!0})]}),(0,u.jsx)("button",{type:"submit",children:"Add contact"})]})})}var l=t(4808),m="Filter_filter__vxThR",d=function(){var e=(0,a.I0)();return(0,u.jsxs)("label",{className:m,children:[(0,u.jsx)("span",{children:"Find contacts by name"}),(0,u.jsx)("input",{type:"text",onChange:function(n){e((0,l.zp)(n.currentTarget.value))}})]})},f=t(2609),h="ContactsItem_contactsItem__MmqyM",x=function(e){var n=e.contact,t=n.id,r=n.name,c=n.number,i=(0,a.I0)();return(0,u.jsxs)("li",{className:h,children:[(0,u.jsx)("span",{children:r}),(0,u.jsx)("span",{children:c}),(0,u.jsx)(f.z,{title:"Delete",onClick:function(){return i((0,s.GK)(t))}})]},t)},j="ContactsList_contactsList__ZQI1L",p=function(){var e=(0,a.v9)((function(e){return e.contacts.items})),n=(0,a.v9)((function(e){return e.filter})),t=function(){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{className:j,children:t.map((function(e){var n=e.id,t=e.name,r=e.number;return(0,u.jsx)(x,{contact:{id:n,name:t,number:r}},n)}))})})},v=function(){var e=(0,a.I0)(),n=(0,a.v9)((function(e){return e.contacts.items})).length>0;return(0,r.useEffect)((function(){e((0,s.K2)())}),[e]),(0,u.jsx)(c.$0,{children:(0,u.jsxs)(c.W2,{children:[(0,u.jsx)(o,{}),n&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(d,{}),(0,u.jsx)(p,{})]})]})})}}}]);
//# sourceMappingURL=636.bd62c409.chunk.js.map