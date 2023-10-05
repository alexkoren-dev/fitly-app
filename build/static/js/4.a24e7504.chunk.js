(this["webpackJsonpfitnezz-guru"]=this["webpackJsonpfitnezz-guru"]||[]).push([[4],{1248:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"getAllWorkOuts",(function(){return c})),a.d(n,"createOrSaveWorkout",(function(){return l})),a.d(n,"getWorkOutSessions",(function(){return u})),a.d(n,"getWorkoutById",(function(){return s})),a.d(n,"searchWorktout",(function(){return m})),a.d(n,"cancelWorkoutSession",(function(){return d}));var r=a(23),i=a(22),o=a(37),c=function(){return Object(o.a)({method:"get",url:"/workouts"}).then((function(e){return e})).catch((function(e){throw e}))},l=function(e,t){return function(a){var n={method:t?"put":"post",url:"/workouts",data:e};return Object(o.b)(n).then((function(e){return e})).catch((function(e){throw e}))}},u=function(e){return function(t){var a={method:"get",url:"/workouts?personalTrainerId=".concat(e)};return Object(o.b)(a).then((function(e){return t({type:i.c.WORKOUT_SESSIONS,payload:e.workouts||[]}),e})).catch((function(e){throw e}))}},s=function(e){return function(t){var a={method:"get",url:"/workouts/workout?workoutId=".concat(e)};return Object(o.b)(a).then((function(e){return e})).catch((function(e){throw e}))}},m=function(e){return function(t){var a={method:"get",url:"/workouts/workout?workoutId=".concat(e)};return Object(o.b)(a).then((function(e){return e})).catch((function(e){throw e}))}},d=function(e){return function(t){var a={method:"get",url:"/workouts/delete?workoutId=".concat(e)};return Object(o.b)(a).then((function(a){t({type:i.c.DELETE_SESSION,payload:e})})).catch((function(e){throw{}}))}};t.a=Object(r.a)({},n)},1303:function(e,t,a){e.exports=a.p+"static/media/IndoorBike.f6396718.svg"},1304:function(e,t,a){e.exports=a.p+"static/media/Elliptical.f7c584bd.svg"},1305:function(e,t,a){e.exports=a.p+"static/media/IndoorRun.0c644ab5.svg"},1306:function(e,t,a){e.exports=a.p+"static/media/IndoorWalk.fce581d4.svg"},1307:function(e,t,a){e.exports=a.p+"static/media/HIITWorkout.4f11df4c.svg"},1308:function(e,t,a){e.exports=a.p+"static/media/core.d9b42664.svg"},1309:function(e,t,a){e.exports=a.p+"static/media/cross.4ea2a983.svg"},1310:function(e,t,a){e.exports=a.p+"static/media/pilate.ba23e632.svg"},1311:function(e,t,a){e.exports=a.p+"static/media/kick.20142089.svg"},1312:function(e,t,a){e.exports=a.p+"static/media/yoga.6deb0dd0.svg"},1313:function(e,t,a){e.exports=a.p+"static/media/dance.a3f995a0.svg"},1314:function(e,t,a){e.exports=a.p+"static/media/jumping-rope.5044a305.svg"},1315:function(e,t,a){e.exports=a.p+"static/media/weight.8442cfad.svg"},1606:function(e,t,a){},1883:function(e,t,a){"use strict";a.r(t);var n=a(23),r=a(66),i=a(1),o=a.n(i),c=a(34),l=a(41),u=a(103),s=a(6),m=(a(26),a(1336)),d=a(1834),p=a(1908),h=a(1904),f=a(177),b=a.n(f),g=a(230),E=a(1248),v=a(176),y=a(228),w=a.n(y),x=a(229),k=a.n(x),T=a(1274),S=a.n(T),N=a(1605),O=a.n(N),I=(a(1606),a(1303)),j=a.n(I),C=a(1304),D=a.n(C),W=a(1305),H=a.n(W),P=a(1306),z=a.n(P),U=a(1307),M=a.n(U),A=a(1308),L=a.n(A),$=a(1309),q=a.n($),R=a(1310),F=a.n(R),G=a(1311),V=a.n(G),Y=a(1312),B=a.n(Y),_=a(1313),J=a.n(_),K=a(1314),Q=a.n(K),X=a(1315),Z=a.n(X),ee={object:w.a,string:k.a,array:S.a,number:O.a,ref:function(){}},te=ee.object().shape({totalUserLimit:ee.number(),duration:ee.number().required("Please select duration"),timezone:ee.string().required("Please select timezone"),perUserCharge:ee.number(),scheduledTime:ee.number().required("Host time is required"),requirement:ee.string(),typeDetails:ee.string().required("Please select workout")}),ae={"Indoor Bike":j.a,Elliptical:D.a,"Indoor Run":H.a,"Indoor Walk":z.a,"Jump Rope":Q.a,"HIIT Workout":M.a,Dance:J.a,Boxing:V.a,"Weight Training":Z.a,"Core Training":L.a,"Cross Training":q.a,Yoga:B.a,Pilates:F.a},ne=[{label:"30 min",value:30},{label:"60 min",value:60},{label:"90 min",value:90}],re=[{label:"Central Daylight Time Chicago (GMT-5)",value:"CDT"},{label:"Mountain Daylight Time Denver(GMT-6)",value:"MDT"},{label:"Mountain Standard Time Phoenix (GMT-7)",value:"MST"},{label:"Pacific Daylight Time Los Angeles (GMT-7)",value:"PDT"},{label:"Alaska Daylight Time Anchorage (GMT-8)",value:"ADT"},{label:"Hawaii-Aleutian Standard Time Honolulu(GMT-10)",value:"HAST"}],ie={10:"$10",15:"$15",20:"$20",25:"$25",30:"$30",35:"$35",40:"$40",45:"$45",50:"$50",55:"$55",60:"$60"},oe=function(e){var t=e.selected,a=e.onSelect,n=e.icon,r=e.title;return o.a.createElement("div",{className:"workout-item mx-2 p-3 mb-3 text-center ".concat(t&&"active"),onClick:function(){return a(r)}},o.a.createElement("img",{src:n,width:"80"}),o.a.createElement("p",{className:"mb-0 mt-2"},r))};t.default=function(e){var t=Object(c.b)(),a=e.match.params.id,f=Object(i.useState)(!1),y=Object(r.a)(f,2),w=y[0],x=y[1],k=Object(i.useState)(!1),T=Object(r.a)(k,2),S=T[0],N=T[1],O=Object(i.useState)(null),I=Object(r.a)(O,2),j=I[0],C=I[1],D=Object(i.useState)({totalUserLimit:"1",duration:"",timezone:"",perUserCharge:10,scheduledTime:parseInt(b()(new Date).format("x")),requirement:"",typeDetails:""}),W=Object(r.a)(D,2),H=W[0],P=W[1];Object(i.useEffect)((function(){a&&(x(!0),t(E.a.getWorkoutById(a)).then((function(e){var t=e;P(t),x(!1),C(t.typeDetails)})).catch((function(e){x(!1)})))}),[]);var z=function(e){return e&&e<=b()().endOf("day")};return w?o.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{height:500}},o.a.createElement(v.a,{color:"#5063EE",width:"50",height:"50",type:"TailSpin"})):o.a.createElement("div",{className:"workout-page p-4"},o.a.createElement(s.K,null,o.a.createElement(s.l,{xs:"12"},o.a.createElement("div",{className:"bg-primary border-radius p-3 text-center mb-4"},o.a.createElement("h2",{className:"text-white mb-1"},o.a.createElement("b",null,"Let\u2019s change lives")),o.a.createElement("p",{className:"mb-0"},"Let\u2019s change lives , Let\u2019s change lives "))),o.a.createElement(s.l,{xs:12,className:"px-5"},o.a.createElement(g.a,{initialValues:H,onSubmit:function(r){N(!0),t(E.a.createOrSaveWorkout(Object(n.a)(Object(n.a)({},r),{},{totalUserLimit:parseInt(r.totalUserLimit),duration:parseInt(r.duration),perUserCharge:parseInt(r.perUserCharge),scheduledTime:parseInt(r.scheduledTime)}),a)).then((function(t){N(!1),u.b.success("Workout is ".concat(a?"updated":"created"," successfully!"),{position:u.b.POSITION.TOP_RIGHT}),e.history.push("/user/profile")})).catch((function(e){u.b.error("Something went wrong. Please try again!",{position:u.b.POSITION.TOP_RIGHT}),N(!1)}))},validationSchema:te},(function(e){var t=e.handleSubmit,n=e.handleChange,r=e.values,i=e.errors,c=e.touched;return o.a.createElement(s.t,{onSubmit:t,className:"profile-form mx-auto"},o.a.createElement(s.F,{className:"text-primary mb-3 px-2"},o.a.createElement("b",null,"How do you wanna burn it. (Select one):")),o.a.createElement(s.u,{className:"mb-3"},o.a.createElement("div",{className:"d-flex flex-wrap "},Object.keys(ae).map((function(e){return o.a.createElement(oe,{key:e,title:e,icon:ae[e],selected:j===e,onSelect:function(e){C(e),n("typeDetails")(e)}})}))),i.typeDetails&&c.typeDetails&&o.a.createElement("div",{className:"invalid-feedback"},i.typeDetails)),o.a.createElement(s.u,{row:!0},o.a.createElement(s.l,{lg:4,className:"mb-3"},o.a.createElement(s.F,{className:"text-primary"},o.a.createElement("b",null,"What would user need? ")),o.a.createElement(s.A,{style:{height:38},id:"requirement",name:"requirement",placeholder:"For example A yoga mat",value:r.requirement,onChange:n})),o.a.createElement(s.l,{lg:4,className:"mb-3 counter-input"},o.a.createElement(s.F,{className:"text-primary"},o.a.createElement("b",null,"How many people you wanna in this sessions")),o.a.createElement(d.a,{min:1,max:10,count:parseInt(r.totalUserLimit),inputStyle:{minWidth:80,height:37,border:"none",backgroundColor:"white"},wrapperStyle:{border:"1px solid #d8dbe0",borderRadius:3,height:38,width:"fit-content"},btnStyle:{backgroundColor:"#5063EE",color:"white",borderRadius:3,padding:"8px 12px"},onCountChange:function(e){return n("totalUserLimit")(e.toString())}})),o.a.createElement(s.l,{lg:4,className:"mb-3"},o.a.createElement(s.F,{className:"text-primary"},o.a.createElement("b",null,"How much each participant should pay?")),o.a.createElement(p.a,{marks:ie,max:60,min:10,defaultValue:r.perUserCharge,onChange:function(e){return n("perUserCharge")(e.toString())}}))),o.a.createElement(s.u,{row:!0},o.a.createElement(s.l,{lg:4,className:"mb-3"},o.a.createElement(s.F,{className:"text-primary"},o.a.createElement("b",null,"When do you wanna host? ")),o.a.createElement(h.a,{className:"w-100",style:{height:38},format:"YYYY-MM-DD HH:mm:ss",disabledDate:z,defaultValue:b()(new Date(r.scheduledTime)),onChange:function(e){console.log(e),n("scheduledTime")(e?e.format("x"):"")},showTime:{defaultValue:b()("00:00:00","HH:mm:ss")}}),i.scheduledTime&&c.scheduledTime&&o.a.createElement("div",{className:"invalid-feedback"},i.scheduledTime)),o.a.createElement(s.l,{lg:4,className:"mb-3"},o.a.createElement(s.F,{className:"text-primary"},o.a.createElement("b",null,"Your Timezone?")),o.a.createElement(m.a,{id:"timezone",placeholder:"",options:re,classNamePrefix:"react-select",isSearchable:!1,defaultValue:re.filter((function(e){return e.value===r.timezone}))[0],onChange:function(e){n("timezone")(e.value)}}),i.timezone&&c.timezone&&o.a.createElement("div",{className:"invalid-feedback"},i.timezone)),o.a.createElement(s.l,{lg:4,className:"mb-3"},o.a.createElement(s.F,{className:"text-primary"},o.a.createElement("b",null,"How long you gonna sweat?(Min)")),o.a.createElement(m.a,{id:"duration",options:ne,placeholder:"",classNamePrefix:"react-select",defaultValue:ne.filter((function(e){return e.value===r.duration}))[0],isSearchable:!1,onChange:function(e){n("duration")(e.value.toString())}}),i.duration&&c.duration&&o.a.createElement("div",{className:"invalid-feedback"},i.duration))),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-end mt-5 mb-3"},o.a.createElement(s.d,{color:"primary",type:"submit",className:"px-4 mx-2 btn-pill button-bg-dark text-bold mt-3 d-flex align-items-center justify-content-center box-shadow",style:{width:180,height:40}},S?o.a.createElement(v.a,null):a?"UPDATE SESSION":"CREATE SESSION"),o.a.createElement(l.a,{to:"/user/profile"},o.a.createElement(s.d,{color:"secondary",type:"button",className:"ml-2 px-4 btn-pill text-bold mt-3 d-flex align-items-center justify-content-center box-shadow",disabled:w,style:{width:180,height:40}},"\xd7 CANCEL"))))})))))}}}]);
//# sourceMappingURL=4.a24e7504.chunk.js.map