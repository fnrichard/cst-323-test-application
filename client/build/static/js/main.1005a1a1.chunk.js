(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(18),c=n.n(s),o=(n(25),n(2)),l=n(20),i=n(7),d=n(8),u=n(10),j=n(9),h=n(0),b=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={username:"",password:"",firstName:"",lastName:"",registrationComplete:!1,data:!1,error:!1},r}return Object(d.a)(n,[{key:"onUpdateField",value:function(e,t){var n={};n[e]=t,this.setState(n)}},{key:"onClickButton",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state)};fetch("http://".concat(window.location.host,"/api/users/new"),t).then((function(e){return e.json()})).then((function(t){return e.setState({registrationComplete:!0,data:t})})).catch((function(t){return e.setState({error:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.username,r=t.password,a=t.firstName,s=t.lastName,c=t.registrationComplete,o=t.error;return Object(h.jsxs)(h.Fragment,{children:[o&&Object(h.jsx)("div",{className:"error",children:JSON.stringify(o)}),c&&Object(h.jsxs)("div",{children:["Your account has been created please ",Object(h.jsx)("a",{href:"/login",children:"login"}),"."]}),!c&&Object(h.jsxs)("div",{className:"registration",children:[Object(h.jsx)("h4",{children:"Please enter your registration information"}),Object(h.jsxs)("form",{action:"#",children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"Enter desired username",value:n,onChange:function(t){return e.onUpdateField("username",t.target.value)},onBlur:function(t){return e.onUpdateField("username",t.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:r,onChange:function(t){return e.onUpdateField("password",t.target.value)},onBlur:function(t){return e.onUpdateField("password",t.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"firstName",placeholder:"Enter first name",value:a,onChange:function(t){return e.onUpdateField("firstName",t.target.value)},onBlur:function(t){return e.onUpdateField("firstName",t.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"lastName",placeholder:"Enter last name",value:s,onChange:function(t){return e.onUpdateField("lastName",t.target.value)},onBlur:function(t){return e.onUpdateField("lastName",t.target.value)}})]}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.onClickButton()},children:"Submit"})]})]})]})}}]),n}(r.PureComponent),m=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={username:"",password:"",loggedIn:!1,loginError:!1},r}return Object(d.a)(n,[{key:"onUpdateField",value:function(e,t){var n={};n[e]=t,this.setState(n)}},{key:"onClickButton",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state)};fetch("http://".concat(window.location.host,"/api/login"),t).then((function(t){404!==t.status?e.setState({loggedIn:!0,loginError:!1}):e.setState({loginError:!0,loggedIn:!1})})).catch((function(t){return e.setState({error:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.username,r=t.password,a=t.loggedIn,s=t.loginError;return Object(h.jsxs)(h.Fragment,{children:[s&&Object(h.jsx)("div",{className:"error",children:"Username and password was not correct"}),a&&Object(h.jsx)("div",{children:"Welcome!"}),!a&&Object(h.jsxs)("div",{class:"login",children:[Object(h.jsx)("h4",{children:"Please login"}),Object(h.jsxs)("form",{action:"#",children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"Enter desired username",value:n,onChange:function(t){return e.onUpdateField("username",t.target.value)},onBlur:function(t){return e.onUpdateField("username",t.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:r,onChange:function(t){return e.onUpdateField("password",t.target.value)},onBlur:function(t){return e.onUpdateField("password",t.target.value)}})]}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.onClickButton()},children:"Submit"})]})]})]})}}]),n}(r.PureComponent),p=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={users:!1,error:!1},r.getUsers(),r}return Object(d.a)(n,[{key:"getUsers",value:function(){var e=this;fetch("http://".concat(window.location.host,"/api/users"),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){return e.setState({users:t})})).catch((function(t){return e.setState({error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.users,n=e.error;return Object(h.jsxs)("table",{className:"table-secondary",width:"50%",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{className:"center table-dark",children:"ID"}),Object(h.jsx)("th",{className:"center table-dark",children:"Username"}),Object(h.jsx)("th",{className:"center table-dark",children:"First Name"}),Object(h.jsx)("th",{className:"center table-dark",children:"Last Name"}),Object(h.jsx)("th",{className:"center table-dark",children:"\xa0"})]})}),Object(h.jsxs)("tbody",{children:[!t&&!n&&Object(h.jsx)("tr",{children:Object(h.jsx)("td",{className:"center",colSpan:5,children:"Loading..."})}),n&&Object(h.jsx)("tr",{children:Object(h.jsx)("td",{className:"center",colSpan:5,children:"There was an error loading the users"})}),0===(null===t||void 0===t?void 0:t.length)&&Object(h.jsx)("tr",{children:Object(h.jsx)("td",{className:"center",colSpan:5,children:"There are no users to list"})}),(null===t||void 0===t?void 0:t.length)>0&&t.map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{className:"center ".concat(t%2===0?"table-light":""),children:e.id}),Object(h.jsx)("td",{className:"center ".concat(t%2===0?"table-light":""),children:e.username}),Object(h.jsx)("td",{className:"center ".concat(t%2===0?"table-light":""),children:e.firstName}),Object(h.jsx)("td",{className:"center ".concat(t%2===0?"table-light":""),children:e.lastName}),Object(h.jsx)("td",{className:"center ".concat(t%2===0?"table-light":""),children:Object(h.jsx)("a",{href:"http://".concat(window.location.host,"/user/").concat(e.id),children:"Edit"})})]})}))]})]})}}]),n}(r.PureComponent),O=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).getUser(),console.log("props => ",e),r.state={user:!1,error:!1},r}return Object(d.a)(n,[{key:"getUser",value:function(){var e=this,t=this.props.id;fetch("http://".concat(window.location.host,"/api/users/").concat(t),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){return e.setState({user:t})})).catch((function(t){return e.setState({error:t})}))}},{key:"onUpdateField",value:function(e,t){var n={};n[e]=t,this.setState(n)}},{key:"onClickButton",value:function(){var e=this,t={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state)},n=this.state.user;fetch("http://".concat(window.location.host,"/api/users/").concat(n.id),t).then((function(e){return e.json()})).then((function(e){return window.location="/users"})).catch((function(t){return e.setState({error:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.user,r=t.error,a=this.state,s=a.username,c=void 0===s?n.username:s,o=a.password,l=void 0===o?n.password:o,i=a.firstName,d=void 0===i?n.firstName:i,u=a.lastName,j=void 0===u?n.lastName:u;return Object(h.jsxs)("div",{className:"User",children:[!n&&!r&&Object(h.jsx)("span",{children:"Loading..."}),r&&Object(h.jsx)("span",{className:"error",children:"Oops there was an error"}),n&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h4",{children:"Update user information"}),Object(h.jsxs)("form",{action:"#",children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"username",placeholder:"Enter desired username",value:c,readOnly:!0})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:l,onChange:function(t){return e.onUpdateField("password",t.target.value)},onBlur:function(t){return e.onUpdateField("password",t.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"firstName",placeholder:"Enter first name",value:d,onChange:function(t){return e.onUpdateField("firstName",t.target.value)},onBlur:function(t){return e.onUpdateField("firstName",t.target.value)}})]}),Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"lastName",placeholder:"Enter last name",value:j,onChange:function(t){return e.onUpdateField("lastName",t.target.value)},onBlur:function(t){return e.onUpdateField("lastName",t.target.value)}})]}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return e.onClickButton()},children:"Submit"})]})]})]})}}]),n}(r.PureComponent);n(27);function f(){var e=Object(o.f)().id;return Object(h.jsx)(O,{id:e})}var v=function(){return Object(h.jsxs)("div",{class:"content",children:[Object(h.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"#",children:"Cloud Test Deployment"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(h.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"/register",children:"Register"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"/login",children:"Login"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"/users",children:"List Users"})})]})})]}),Object(h.jsx)("div",{class:"body",children:Object(h.jsx)(l.a,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/register",children:Object(h.jsx)(b,{})}),Object(h.jsx)(o.a,{path:"/login",children:Object(h.jsx)(m,{})}),Object(h.jsx)(o.a,{path:"/users",children:Object(h.jsx)(p,{})}),Object(h.jsx)(o.a,{path:"/user/:id",children:Object(h.jsx)(f,{})}),Object(h.jsx)(o.a,{path:"/",children:Object(h.jsx)("div",{children:"Welcome!"})})]})})})]})};c.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.1005a1a1.chunk.js.map