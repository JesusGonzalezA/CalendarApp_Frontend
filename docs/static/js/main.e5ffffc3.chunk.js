(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{114:function(e,t,n){},115:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(8),c=n.n(r),s=n(9),o=n(35),i=n(10),l=n(5),u=n(38),d=n(2),j=function(e){var t=e.isAuthenticated,n=e.component,a=Object(u.a)(e,["isAuthenticated","component"]);return Object(d.jsx)(i.b,Object(l.a)(Object(l.a)({},a),{},{component:function(e){return t?Object(d.jsx)(i.a,{to:"/"}):Object(d.jsx)(n,Object(l.a)({},e))}}))},b=function(e){var t=e.isAuthenticated,n=e.component,a=Object(u.a)(e,["isAuthenticated","component"]);return Object(d.jsx)(i.b,Object(l.a)(Object(l.a)({},a),{},{component:function(e){return t?Object(d.jsx)(n,Object(l.a)({},e)):Object(d.jsx)(i.a,{to:"/login"})}}))},m=n(13),f=n.n(m),O=n(21),p=n(12),v=n.n(p),h="https://jesusgonzaleza-calendar.herokuapp.com/api",x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(h,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},g=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(h,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},y="[ui] Open Modal",w="[ui] Close Modal",N="[events] Add new",E="[events] Set active,",k="[events] Clear active",S="[events] Event update",C="[events] Event delete",D="[events] Events loaded",T="[events] Events clear logout",P="[auth] Finish Checking login state",_="[auth] Login",A="[auth] Logout",I=n(19),L=n.n(I),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{end:L()(e.end).toDate(),start:L()(e.start).toDate()})}))},G=function(e){return{type:N,payload:e}},F=function(e){return{type:D,payload:e}},J=function(e){return{type:S,payload:e}},M=function(){return{type:C}},V=function(){return{type:k}},z=function(e){return{type:_,payload:e}},U=function(){return{type:P}},H=function(){return function(e){localStorage.clear(),e(X()),e({type:T})}},X=function(){return{type:A}},q=n(17),B=n(25),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(q.a)(t,2),r=n[0],c=n[1],s=function(){c(e)},o=function(e){var t=e.target;c(Object(l.a)(Object(l.a)({},r),{},Object(B.a)({},t.name,t.value)))};return[r,o,s]},Q=(n(77),function(){var e=Object(s.b)(),t=K({lEmail:"",lPassword:""}),n=Object(q.a)(t,2),a=n[0],r=n[1],c=K({rName:"",rEmail:"",rPassword1:"",rPassword2:""}),o=Object(q.a)(c,2),i=o[0],l=o[1],u=a.lEmail,j=a.lPassword,b=i.rName,m=i.rEmail,p=i.rPassword1,h=i.rPassword2;return Object(d.jsx)("div",{className:"container login-container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(d.jsx)("h3",{children:"Login"}),Object(d.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=u,a=j,function(){var e=Object(O.a)(f.a.mark((function e(t){var r,c,s,o,i,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(s=c.data,o=s.token,i=s.uid,l=s.name,localStorage.setItem("token",o),localStorage.setItem("token-init-date",(new Date).getTime()),t(z({uid:i,name:l}))):v.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",name:"lEmail",value:u,onChange:r})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"lPassword",value:j,onChange:r})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(d.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(d.jsx)("h3",{children:"Register"}),Object(d.jsxs)("form",{onSubmit:function(t){var n,a,r;(t.preventDefault(),p===h)?e((n=m,a=b,r=p,function(){var e=Object(O.a)(f.a.mark((function e(t){var c,s,o,i,l,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("auth/new",{email:n,name:a,password:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(s=e.sent).ok?(o=s.data,i=o.token,l=o.uid,u=o.name,localStorage.setItem("token",i),localStorage.setItem("token-init-date",(new Date).getTime()),t(z({uid:l,name:u}))):v.a.fire("Error","","error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):v.a.fire("Error","Passwords should match","error")},children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",value:b,name:"rName",onChange:l})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",value:m,name:"rEmail",onChange:l})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",value:p,name:"rPassword1",onChange:l})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"password",className:"form-control",placeholder:"Repeat password",value:h,name:"rPassword2",onChange:l})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"submit",className:"btnSubmit",value:"Create account"})})]})]})]})})}),W=n(54),Y=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).name;return Object(d.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4",children:[Object(d.jsx)("span",{className:"navbar-brand",children:t}),Object(d.jsxs)("button",{className:"btn btn-outline-danger",onClick:function(){e(H())},children:[Object(d.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(d.jsx)("span",{children:" Logout"})]})]})},Z=function(e){var t=e.event,n=t.title,a=t.user;return Object(d.jsxs)("div",{children:[Object(d.jsx)("strong",{children:n}),Object(d.jsx)("br",{}),Object(d.jsxs)("span",{children:["@",a.name]})]})},$=(n(78),n(79),n(51)),ee=n.n($),te=n(52),ne=n.n(te),ae=function(){return{type:y}},re={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};ee.a.setAppElement("#root");var ce=L()().minutes(0).seconds(0).add(1,"hours"),se=ce.clone().add(1,"days"),oe={title:"",notes:"",start:ce.toDate(),end:se.toDate()},ie=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.events})).activeEvent,n=Object(s.c)((function(e){return e.ui})).modalOpen,r=Object(a.useState)(!0),c=Object(q.a)(r,2),o=c[0],i=c[1],u=Object(a.useState)(oe),j=Object(q.a)(u,2),b=j[0],m=j[1],p=b.notes,h=b.title,x=b.start,y=b.end;Object(a.useEffect)((function(){m(t||oe)}),[t,m]);var N=function(e){m(Object(l.a)(Object(l.a)({},b),{},Object(B.a)({},e.target.name,e.target.value)))},E=function(){e({type:w}),e(V()),m(oe)},k=function(){var e=L()(x),t=L()(y);return e.isSameOrAfter(t)?(v.a.fire("Error","Start date should be before end date","error"),!1):0!==h.trim().length||(i(!1),!1)};return Object(d.jsxs)(ee.a,{isOpen:n,onRequestClose:E,style:re,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",children:[Object(d.jsxs)("h1",{children:[" ",t?"Update Event":"New Event"," "]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("form",{className:"container",onSubmit:function(n){var a;n.preventDefault(),k()&&(e(t?(a=b,function(){var e=Object(O.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g("events/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?(t(J(a)),v.a.fire("Completed","The event was updated succesfully","success")):v.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),v.a.fire("Error","Something went bad","error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(O.a)(f.a.mark((function t(n,a){var r,c,s,o,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth,c=r.uid,s=r.name,t.prev=1,t.next=4,g("events",e,"POST");case 4:return o=t.sent,t.next=7,o.json();case 7:(i=t.sent).ok?(n(G(Object(l.a)(Object(l.a)({},e),{},{id:i.data.id,user:{_id:c,name:s}}))),v.a.fire("Completed","The event was added succesfully","success")):v.a.fire("Error","Could not add the event","error"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),v.a.fire("Error","Something went bad","error");case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()}(b)),i(!0),E())},children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Start: Date and time"}),Object(d.jsx)(ne.a,{className:"form-control",onChange:function(e){m(Object(l.a)(Object(l.a)({},b),{},{start:e}))},minDate:ce.toDate(),value:x})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"End: Date and time"}),Object(d.jsx)(ne.a,{className:"form-control",onChange:function(e){m(Object(l.a)(Object(l.a)({},b),{},{end:e}))},minDate:x,value:y})]}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Title and notes"}),Object(d.jsx)("input",{type:"text",className:"form-control ".concat(!o&&"is-invalid"),placeholder:"Title of the event",name:"title",autoComplete:"off",value:h,onChange:N}),Object(d.jsx)("small",{id:"emailHelp",className:"form-text text-muted mt-3",children:"Short Description"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notes",rows:"5",name:"notes",value:p,onChange:N}),Object(d.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Additional info"})]}),Object(d.jsxs)("button",{type:"submit",className:"btn btn-outline-primary btn-block",children:[Object(d.jsx)("i",{className:"far fa-save"}),Object(d.jsx)("span",{children:" Save "})]})]})]})},le=function(){var e=Object(s.b)();return Object(d.jsx)("button",{className:"btn btn-primary fab right",onClick:function(){e(V()),e(ae())},children:Object(d.jsx)("i",{className:"fas fa-plus"})})},ue=function(){var e=Object(s.b)();return Object(d.jsx)("button",{className:"btn btn-danger fab left",onClick:function(){e(function(){var e=Object(O.a)(f.a.mark((function e(t,n){var a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().events.activeEvent.id,e.prev=1,e.next=4,g("events/".concat(a),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(c=e.sent).ok?(t(M()),v.a.fire("Completed","The event was deleted succesfully","success")):v.a.fire("Error",c.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),v.a.fire("Error","Something went bad","error");case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())},children:Object(d.jsx)("i",{className:"fas fa-trash"})})},de=Object(W.b)(L.a),je=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.events})),n=t.events,r=t.activeEvent,c=Object(s.c)((function(e){return e.ui})).modalOpen,o=Object(s.c)((function(e){return e.auth})).uid,i=Object(a.useState)(localStorage.getItem("lastView")||"month"),l=Object(q.a)(i,2),u=l[0],j=l[1];Object(a.useEffect)((function(){e(function(){var e=Object(O.a)(f.a.mark((function e(t){var n,a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g("events");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=R(a.data),t(F(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),v.a.fire("Error",e.t0,"error");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return Object(d.jsxs)("div",{className:"calendar-screen",children:[Object(d.jsx)(Y,{className:"navbar"}),Object(d.jsxs)("div",{className:"calendar-container",children:[Object(d.jsx)(W.a,{className:"calendar",localizer:de,events:n,startAccessor:"start",endAccessor:"end",view:u,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:e.user._id===o?"#367CF7":"#173F5F",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(ae())},onSelectEvent:function(t){e({type:E,payload:t})},onSelectSlot:function(){e(V())},selectable:!0,onView:function(e){j(e),localStorage.setItem("lastView",e)},components:{event:Z}}),Object(d.jsx)(ie,{}),r&&!c&&Object(d.jsx)(ue,{}),Object(d.jsx)(le,{})]})]})},be=(n(114),function(){return Object(d.jsxs)("div",{className:"loading__container",children:[Object(d.jsx)("h1",{className:"loading__title",children:"Loading..."}),Object(d.jsx)("div",{className:"loading__loader"})]})}),me=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),n=t.checking,r=t.uid;return Object(a.useEffect)((function(){e(function(){var e=Object(O.a)(f.a.mark((function e(t){var n,a,r,c,s,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).ok?(r=a.data,c=r.token,s=r.uid,o=r.name,localStorage.setItem("token",c),localStorage.setItem("token-init-date",(new Date).getTime()),t(z({uid:s,name:o}))):t(U());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(d.jsx)(be,{}):Object(d.jsx)(o.a,{children:Object(d.jsx)("div",{children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(j,{exact:!0,path:"/login",component:Q,isAuthenticated:!!r}),Object(d.jsx)(b,{exact:!0,path:"/",component:je,isAuthenticated:!!r}),Object(d.jsx)(i.a,{to:"/"})]})})})},fe=n(22),Oe=n(64),pe=n(65),ve={events:[],activeEvent:null},he={checking:!0},xe={modalOpen:!1},ge=Object(fe.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(null===t||void 0===t?void 0:t.type){case y:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!0});case w:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!1});default:return e}},events:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(null===t||void 0===t?void 0:t.type){case N:return Object(l.a)(Object(l.a)({},e),{},{events:[].concat(Object(pe.a)(e.events),[t.payload])});case E:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:t.payload});case k:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:null});case S:return Object(l.a)(Object(l.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case C:return Object(l.a)(Object(l.a)({},e),{},{activeEvent:null,events:e.events.filter((function(t){return t.id!==e.activeEvent.id}))});case D:return Object(l.a)(Object(l.a)({},e),{},{events:t.payload});case T:return Object(l.a)({},ve);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(null===t||void 0===t?void 0:t.type){case _:return Object(l.a)(Object(l.a)(Object(l.a)({},e),t.payload),{},{checking:!1});case P:return Object(l.a)(Object(l.a)({},e),{},{checking:!1});case A:return Object(l.a)(Object(l.a)({},he),{},{checking:!1});default:return e}}}),ye="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||fe.d,we=Object(fe.e)(ge,ye(Object(fe.a)(Oe.a))),Ne=function(){return Object(d.jsx)(s.a,{store:we,children:Object(d.jsx)(me,{})})};c.a.render(Object(d.jsx)(Ne,{}),document.getElementById("root"))},77:function(e,t,n){},79:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.e5ffffc3.chunk.js.map