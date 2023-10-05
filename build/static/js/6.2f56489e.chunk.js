(this["webpackJsonpfitnezz-guru"]=this["webpackJsonpfitnezz-guru"]||[]).push([[6],{1504:function(e,a,t){},1505:function(e,a,t){e.exports=t.p+"static/media/signup.82d5ddf5.svg"},1866:function(e,a,t){"use strict";t.r(a);var s=t(66),n=t(1),r=t.n(n),l=t(34),i=t(103),c=(t(333),t(6)),m=t(26),o=t(230),d=t(176),u=t(75),p=t(113),f=t(228),E=t.n(f),h=t(229),w=t.n(h),b=(t(1504),t(83)),g=t(1505),v=t.n(g),N={object:E.a,string:w.a,ref:function(){}},x={email:"",username:"",password:"",confirm_password:""};a.default=function(e){var a=Object(l.b)(),t=Object(n.useState)(""),f=Object(s.a)(t,2),E=f[0],h=f[1],w=Object(n.useState)(!1),g=Object(s.a)(w,2),y=g[0],k=g[1],j=N.object().shape({email:N.string().email("Please enter the valid email").required("Email is required"),username:N.string().min(3,"Username must be at least 3 characters long").required("Username is required"),password:N.string().min(8,"Password must be at least 8 characters long").required("Password is required"),confirm_password:N.string().required("Confirm your password").when("password",{is:function(e){return e&&e.length>0},then:N.string().oneOf([E],"Both password need to be the same")})});return r.a.createElement("div",{className:"register-page flex-row align-items-center"},r.a.createElement(c.K,{className:"justify-content-center w-100 m-0",style:{height:"100vh"}},r.a.createElement(c.l,{md:"12",className:"p-0"},r.a.createElement(c.g,{className:"h-100"},r.a.createElement(c.e,{className:"text-white bg-primary py-5 d-md-down-none"},r.a.createElement(c.f,{className:"text-center d-flex align-items-center p-0"},r.a.createElement("img",{src:v.a,width:"115%",style:{marginLeft:"-10%"}}))),r.a.createElement(c.e,{className:"p-4",style:{flex:2}},r.a.createElement(c.f,{className:"pr-5"},r.a.createElement(o.a,{initialValues:x,onSubmit:function(t){k(!0),a(u.a.register({user:{username:t.username,email:t.email,password:t.password}},e.location.state.type)).then((function(e){k(!1),window.location.href="/"})).catch((function(e){k(!1),i.b.error(Object(p.c)(e.data.errors),{position:i.b.POSITION.TOP_RIGHT})}))},validationSchema:j},(function(t){var s=t.handleSubmit,n=t.handleChange,l=t.values,i=t.errors,o=t.touched;return r.a.createElement(c.t,{onSubmit:s},r.a.createElement(c.G,{href:"/"},r.a.createElement(b.a,{width:125})),r.a.createElement("h2",{className:"text-darl text-bold mt-4 text-capitalize"},e.location.state.type," Sign Up"),r.a.createElement("p",{className:"text-caption"},"Fitly isn\u2019t an app. It\u2019s a yoga class, it\u2019s one-on-one personal training, it\u2019s your motivation to reach your fitness goals. There\u2019s no subscription, no gym and no need to feel self-conscious working out in front of others\u2014just interactive training you can do at home."),r.a.createElement(c.u,null,r.a.createElement(c.F,{className:"text-bold text-dark"},"User Name"),r.a.createElement(c.A,{type:"text",id:"username",name:"username",onChange:n,value:l.username,className:o.username?i.username?"is-invalid":"is-valid":""}),i.username&&o.username&&r.a.createElement("div",{className:"invalid-feedback"},i.username)),r.a.createElement(c.u,null,r.a.createElement(c.F,{className:"text-bold text-dark"},"Email"),r.a.createElement(c.A,{type:"text",id:"email",name:"email",onChange:n,value:l.email,className:o.email?i.email?"is-invalid":"is-valid":""}),i.email&&o.email&&r.a.createElement("div",{className:"invalid-feedback"},i.email)),r.a.createElement(c.u,null,r.a.createElement(c.F,{className:"text-bold text-dark"},"Password"),r.a.createElement(c.A,{type:"password",id:"password",name:"password",onChange:function(e){n(e),h(e.target.value)},value:l.password,className:o.password?i.password?"is-invalid":"is-valid":""}),i.password&&o.password&&r.a.createElement("div",{className:"invalid-feedback"},i.password)),r.a.createElement(c.u,null,r.a.createElement(c.F,{className:"text-bold text-dark"},"Re-type Password"),r.a.createElement(c.A,{type:"password",id:"confirm_password",name:"confirm_password",onChange:n,value:l.confirm_password,className:o.confirm_password?i.confirm_password?"is-invalid":"is-valid":""}),i.confirm_password&&o.confirm_password&&r.a.createElement("div",{className:"invalid-feedback"},i.confirm_password)),r.a.createElement(c.K,null,r.a.createElement(c.l,{xs:"6"},r.a.createElement(c.d,{color:"primary",type:"submit",className:"px-4 btn-pill text-bold mt-4",disabled:y},y?r.a.createElement(d.a,null):"SIGN UP"))),r.a.createElement("label",{className:"text-bold mt-3 mb-3"},"Already have an account?"," "),r.a.createElement(c.K,null,r.a.createElement(c.l,{xs:"6"},r.a.createElement(c.d,{color:"secondary",className:"btn-pill text-bold d-flex align-items-center justify-content-center",onClick:function(){a(u.a.openLoginModal())}},r.a.createElement(m.a,{name:"cuUserFill",width:"30",height:"30"})," ",r.a.createElement("span",{className:"ml-1"},"SIGN IN")))),r.a.createElement("p",{className:"text-dark mt-4"},"This site is protected by reCaptcha and the"," ",r.a.createElement(c.G,{className:"text-decoration-underline"},"Google Privacy Policy")," ","and"," ",r.a.createElement(c.G,{className:"text-decoration-underline"},"Terms of Service Apply")))}))))))))}}}]);
//# sourceMappingURL=6.2f56489e.chunk.js.map