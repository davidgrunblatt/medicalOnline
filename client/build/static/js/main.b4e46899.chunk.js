(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},123:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){e.exports=a.p+"static/media/home.b00c10b3.png"},134:function(e,t,a){e.exports=a.p+"static/media/contact.251cb2aa.png"},135:function(e,t,a){},136:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/logo.cfd14ba7.png"},236:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(88),r=a.n(o),l=a(14),c=a.n(l),s=a(29),m=a(5),u=a(6),d=a(8),p=a(7),h=a(9),g=(a(102),a(103),a(104),a(13)),f=a.n(g),b=a(89),v=a.n(b),E=a(40),y=a.n(E),_=a(41),k=a.n(_),j=a(90),N=a.n(j),O=a(91),S=a.n(O),C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={image1:y.a,image2:k.a,count:0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=document.querySelector(".jumbotron_parent div:nth-child(1)"),a=document.querySelector(".jumbotron_parent div:nth-child(2)"),n=(document.querySelectorAll(".jumbo_div"),0);this.timeout=setTimeout((function(){t.classList.add("fade_in"),e.interval=setInterval((function(){t.classList.toggle("toggle_opacity"),a.classList.add("fade_in"),++n>3&&(n=0),0==n?e.setState({image1:y.a}):1==n?e.setState({image2:k.a}):2==n?e.setState({image1:N.a}):3==n&&e.setState({image2:S.a})}),5e3)}),6e3),this.timeOut=setTimeout((function(){var e=document.querySelector(".jumbotron_parent");e.classList.remove("slide_out"),e.classList.add("slide_in")}),2e3)}},{key:"componentWillUnmount",value:function(){console.log("unmounting jumbotron and clearing ".concat(this.interval)),clearInterval(this.interval),clearTimeout(this.timeOut),clearTimeout(this.timeout)}},{key:"render",value:function(){return i.a.createElement("div",{className:"page_transition"},i.a.createElement("main",{className:"jumbotron_parent slide_transition slide_out"},i.a.createElement("div",{className:"jumbo_div fade_transition"},i.a.createElement("img",{src:this.state.image1,alt:""})),i.a.createElement("div",{className:"jumbo_div fade_transition"},i.a.createElement("img",{src:this.state.image2,alt:""}))))}}]),t}(i.a.Component),w=(a(123),a(92)),T=a(94),x=a.n(T),R=(a(132),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={onSetSidebarOpen:!0,sidebarOpen:!1},a.onSetSidebarOpen=function(e){a.setState({sidebarOpen:e})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=i.a.createElement("div",{className:"navbar_container"},i.a.createElement("span",null,i.a.createElement("img",{src:a(23),alt:"logo"})),i.a.createElement("nav",null,i.a.createElement("a",{className:"nav_item",onClick:this.props.page_handler},i.a.createElement("img",{src:a(133),alt:""}),i.a.createElement("p",{id:"home"},"Home"),i.a.createElement("img",{src:a(24),alt:""})),i.a.createElement("a",{className:"nav_item",onClick:this.props.page_handler},i.a.createElement("img",{src:a(52),alt:""}),i.a.createElement("p",{id:"login"},this.props.logged?"Dashboard":"Login"),i.a.createElement("img",{src:a(24),alt:""})),this.props.logged&&i.a.createElement("a",{className:"nav_item",onClick:this.props.page_handler},i.a.createElement("img",{src:a(53),alt:""}),i.a.createElement("p",{id:"consultation"},"Consultation"),i.a.createElement("img",{src:a(24),alt:""})),i.a.createElement(x.a,{to:"#contact_container",animate:{offset:12,duration:300}},i.a.createElement("a",{className:"nav_item",onClick:this.props.page_handler},i.a.createElement("img",{src:a(134),alt:""}),i.a.createElement("p",{id:"contact"},"Contact"),i.a.createElement("img",{src:a(24),alt:""})))));return i.a.createElement("div",null,i.a.createElement(w.a,{pullRight:!0,sidebar:i.a.createElement("b",null,t),open:this.state.sidebarOpen,onSetOpen:this.onSetSidebarOpen,styles:{sidebar:{background:"white",width:300,marginTop:90,border:"solid thick rgba(192, 192, 192, 0.589)",padding:10,position:"fixed"}}},i.a.createElement("button",{onClick:function(){return e.onSetSidebarOpen(!0)},className:this.state.sidebarOpen?"hamburger hamburger--elastic is-active":"hamburger hamburger--elastic",type:"button",style:{float:"right",marginTop:10}},i.a.createElement("span",{className:"hamburger-box"},i.a.createElement("span",{className:"hamburger-inner"})))))}}]),t}(n.Component)),D=(a(135),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"login",className:"login_container"},i.a.createElement("div",null,i.a.createElement("span",null,i.a.createElement("img",{src:a(52),alt:""}),i.a.createElement("h1",null,"Login to your account")),i.a.createElement("form",null,i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",name:"username",className:"form-control",value:this.props.login.username,onChange:this.props.login.change,placeHolder:"username"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"password",name:"password",className:"form-control",value:this.props.login.password,onChange:this.props.login.change,placeHolder:"password"})),i.a.createElement("input",{type:"submit",className:"btn btn-block btn-primary",value:"login",onClick:this.props.login.submit}))))}}]),t}(i.a.Component)),J=(a(136),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={toggle:0},a.edit_toggle=function(e){0===a.state.toggle?a.setState({toggle:1}):a.setState({toggle:0})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelector("#dashboard_parent_container");this.slide=setTimeout((function(){e.classList.remove("slide_out_left"),e.classList.add("slide_in_right")}),1e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.slide)}},{key:"render",value:function(){return i.a.createElement("div",{id:"dashboard_parent_container",className:"slide_transition slide_out_left"},i.a.createElement("div",{id:"dashboard_container"},i.a.createElement("section",null,i.a.createElement("h1",null,i.a.createElement("span",null,"Your Dashboard")," ",this.props.data.username," "),i.a.createElement("h6",null,"All the information you want to share with your Dr. is here. ",i.a.createElement("br",null),"Feel free to update it at any time below."),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("span",null,"Username:")," ",this.props.data.username),i.a.createElement("li",null,i.a.createElement("span",null,"Full Name:")," ",this.props.data.fullname),i.a.createElement("li",null,i.a.createElement("span",null,"Email:")," ",this.props.data.email),i.a.createElement("li",null,i.a.createElement("span",null,"Phone #:")," ",this.props.data.phone))),i.a.createElement("button",{className:"btn btn-sm btn-primary btn-block mb-3",onClick:this.edit_toggle},0===this.state.toggle?"Edit Info":"Back"),1===this.state.toggle&&i.a.createElement("section",{id:"dashboard_edit"},i.a.createElement("form",null,i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",name:"fullname",value:this.props.data.fullname,onChange:this.props.change,className:"form-control"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"email",name:"email",value:this.props.data.email,onChange:this.props.change,className:"form-control"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"string",name:"phone",value:this.props.data.phone,onChange:this.props.change,className:"form-control"})),i.a.createElement("input",{type:"submit",onClick:this.props.submit,className:"btn btn-block",value:"Save Changes"}))),i.a.createElement("section",null,i.a.createElement("h4",null,i.a.createElement("span",null,"Send Dr. Furelos a file")),i.a.createElement("h6",null,"If you need to share a file with Dr. Furelos you can do so here. Click on choose file."),i.a.createElement("form",null,i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",placeholder:"file name",className:"form-control mb-2"}),i.a.createElement("input",{type:"file",name:"file",onChange:this.props.file.file_change,className:"btn-primary btn-block"})),i.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block",onClick:this.props.file.file_submit,value:"Send File"})))))}}]),t}(i.a.Component)),A=a(15),q=a(95),L=a.n(q),M=(a(236),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this))).slide_transition=function(){var e=document.querySelector(".chat_parent_container");a.slide=setTimeout((function(){e.classList.remove("slide_out"),e.classList.add("slide_in")}),1e3)},a.state={token:"",identity:null,roomName:"",roomNameErr:!1,previewTracks:null,localMediaAvailable:!1,hasJoinedRoom:!1,activeRoom:null},a.joinRoom=a.joinRoom.bind(Object(A.a)(a)),a.handleRoomNameChange=a.handleRoomNameChange.bind(Object(A.a)(a)),a.leaveRoom=a.leaveRoom.bind(Object(A.a)(a)),a.detachTracks=a.detachTracks.bind(Object(A.a)(a)),a.detachParticipantTracks=a.detachParticipantTracks.bind(Object(A.a)(a)),a.roomJoined=a.roomJoined.bind(Object(A.a)(a)),a.getTracks=a.getTracks.bind(Object(A.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleRoomNameChange",value:function(e){var t=e.target.value;this.setState({roomName:t})}},{key:"joinRoom",value:function(){if(this.state.roomName.trim()){console.log("Joining room '"+this.state.roomName+"'...");var e={name:this.state.roomName};this.state.previewTracks&&(e.tracks=this.state.previewTracks),L.a.connect(this.state.token,e).then(this.roomJoined,(function(e){alert("Could not connect to Twilio: "+e.message)}))}else this.setState({roomNameErr:!0})}},{key:"attachTracks",value:function(e,t){e.forEach((function(e){t.appendChild(e.attach())}))}},{key:"attachParticipantTracks",value:function(e,t,a){var n=this.getTracks(e);console.log("attaching participant tracks"),this.attachTracks(n,t,a)}},{key:"getTracks",value:function(e){return Array.from(e.tracks.values()).filter((function(e){return e.track})).map((function(e){return e.track}))}},{key:"roomJoined",value:function(e){var t=this;console.log("Joined as '"+this.state.identity+"'"),this.setState({activeRoom:e,localMediaAvailable:!0,hasJoinedRoom:!0});var a=this.refs.localMedia;a.querySelector("video")||this.attachParticipantTracks(e.localParticipant,a),e.participants.forEach((function(e){console.log("Already in Room: '"+e.identity+"'");var a=t.refs.remoteMedia;t.attachParticipantTracks(e,a),e.tracks.forEach((function(e){if(e.isSubscribed){var t=e.track;document.getElementById("remote-media-div").appendChild(t.attach())}})),e.on("trackSubscribed",(function(e){document.getElementById("remote-media-div").appendChild(e.attach())}))})),e.on("participantConnected",(function(e){console.log("Joining: '"+e.identity+"'"),e.tracks.forEach((function(e){if(e.isSubscribed){var t=e.track;document.getElementById("remote-media-div").appendChild(t.attach())}})),e.on("trackSubscribed",(function(e){document.getElementById("remote-media-div").appendChild(e.attach())}))})),e.on("trackAdded",(function(e,a){console.log(a.identity+" added track: "+e.kind);var n=t.refs.remoteMedia;t.attachTracks([e],n)})),e.on("trackRemoved",(function(e,a){t.log(a.identity+" removed track: "+e.kind),t.detachTracks([e])})),e.on("participantDisconnected",(function(e){console.log("Participant '"+e.identity+"' left the room"),t.detachParticipantTracks(e),document.getElementById("remote-media-div").style.display="none"})),e.on("disconnected",(function(e){t.state.previewTracks&&t.state.previewTracks.forEach((function(e){e.stop()})),t.detachParticipantTracks(e.localParticipant),e.participants.forEach(t.detachParticipantTracks),t.state.activeRoom=null,t.setState({hasJoinedRoom:!1,localMediaAvailable:!1})}))}},{key:"leaveRoom",value:function(){this.state.activeRoom.disconnect(),this.setState({hasJoinedRoom:!1,localMediaAvailable:!1})}},{key:"detachParticipantTracks",value:function(e){var t=this.getTracks(e);this.detachTracks(t)}},{key:"detachTracks",value:function(e){var t=!0,a=!1,n=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var r=i.value.detach(),l=!0,c=!1,s=void 0;try{for(var m,u=r[Symbol.iterator]();!(l=(m=u.next()).done);l=!0){m.value.remove()}}catch(d){c=!0,s=d}finally{try{l||null==u.return||u.return()}finally{if(c)throw s}}}}catch(d){a=!0,n=d}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}}},{key:"componentDidMount",value:function(){var e=this;f.a.get("/api/twilio").then((function(t){var a=t.data,n=a.identity,i=a.token;console.log("twilio results",t),e.setState({identity:n,token:i})})).catch((function(e){return console.log("unable to get twilio key",e)})),this.slide_transition()}},{key:"render",value:function(){var e=i.a.createElement("div",{className:"chat_content"},i.a.createElement("h1",null,"Chat"),i.a.createElement("img",{className:"chat_items",src:a(53),alt:""})),t=this.state.localMediaAvailable?i.a.createElement("div",null,i.a.createElement("div",{ref:"localMedia",id:"video",className:"chat_content"}),i.a.createElement("div",{id:"remote-media-div"})):e,n=this.state.hasJoinedRoom?i.a.createElement("input",{type:"submit",className:"chat_btn btn btn-primary",value:"Leave Room",onClick:this.leaveRoom}):i.a.createElement("input",{type:"submit",className:"chat_btn btn btn-primary",value:"Join Room",onClick:this.joinRoom});return i.a.createElement("div",{className:"chat_parent_container slide_transition slide_out"},i.a.createElement("div",{className:"chat"},t,!this.state.hasJoinedRoom&&i.a.createElement("input",{className:"chat_items",type:"text",placeHolder:"Your Chat Key",onChange:this.handleRoomNameChange,errortext:this.state.roomNameErr?"Room Name is required":void 0}),n))}}]),t}(n.Component)),P=(a(237),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={name:"",subject:"",message:""},a.form_change=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value),(function(){return console.log(a.state)}))},a.form_submit=function(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,c.a.awrap(f.a.post("/api/nodemailer",{name:a.state.name,subject:a.state.subject,message:a.state.message}).then((function(e){console.log("Email has been sent!",e)})).catch((function(e){return console.log("Unable to send email:",e)})));case 3:case"end":return t.stop()}}))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"contact_container"},i.a.createElement("div",null,i.a.createElement("h1",null,"Contact the Clinic"),i.a.createElement("form",null,i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",name:"name",onChange:this.form_change,className:"form-control",value:this.state.name,placeHolder:"name",required:!0})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",name:"subject",onChange:this.form_change,className:"form-control",value:this.state.subject,placeHolder:"subject",required:!0})),i.a.createElement("div",{className:"form-group"},i.a.createElement("textarea",{type:"text",name:"message",onChange:this.form_change,className:"form-control",value:this.state.message,placeHolder:"message...",required:!0})),i.a.createElement("input",{type:"submit",className:"btn btn-block btn-primary",onClick:this.form_submit}))))}}]),t}(n.Component)),I=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).page_handler=function(e){"home"===e.target.id?(a.setState({page:"home"}),console.log(e.target.id)):"login"===e.target.id?(console.log(e.target.id),a.setState({page:"dashboard"})):"consultation"===e.target.id&&(console.log(e.target.id),a.setState({page:"consultation"}))},a.jwt=function(){return localStorage.getItem("token")},a.jwt_decode=function(){return v()(a.jwt())},a.body_fade_in=function(){var e=document.querySelector("#parent_container");setTimeout((function(){e.classList.add("fade_in")}),2e3)},a.login_change=function(e){a.setState(Object(s.a)({},e.target.name,e.target.value))},a.update_change=function(e){var t=a.state.userData;"fullname"===e.target.name&&(t.fullname=e.target.value),"email"===e.target.name&&(t.email=e.target.value),"phone"===e.target.name&&(t.phone=e.target.value),a.setState({dummy:t})},a.file_change=function(e){a.setState({file:e.target.files[0]},(function(){return console.log("file state",a.state.file)}))},a.file_submit=function(e){var t;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),(t=new FormData).append("file",a.state.file),n.next=5,c.a.awrap(f.a.post("/api/file_upload",t,{headers:{"Content-type":"multipart/form-data","x-auth-token":a.jwt()}}).then((function(e){return console.log("file sent",e)})).catch((function(e){return console.log("unable to send file",e)})));case 5:case"end":return n.stop()}}))},a.update_submit=function(e){var t;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),t=a.jwt_decode(),n.next=4,c.a.awrap(f.a.post("/api/update_patient",{_id:t.user_id,fullname:a.state.userData.fullname,email:a.state.userData.email,phone:a.state.userData.phone},{headers:{"x-auth-token":a.jwt()}}).then((function(e){return console.log("Updated data sent!",e)})).catch((function(e){return console.log("Updated failed...",e)})));case 4:case"end":return n.stop()}}))},a.login_submit=function(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,c.a.awrap(f.a.get("/api/login_patient",{params:{username:a.state.username,password:a.state.password}}).then((function(e){a.setState({userData:{username:e.data.username,fullname:e.data.fullname,email:e.data.email,phone:e.data.phone,chatKey:e.data.chatKey}},(function(){return console.log("updpated global state: ",a.state)})),a.setState({logged:!0});var t=e.headers["x-auth-token"];localStorage.setItem("token",t)})).catch((function(e){return console.log("Unable to retrieve data: ",e)})));case 3:case"end":return t.stop()}}))},a.state={page:"home",username:"",email:"",password:"",logged:!1,userData:{username:"",fullname:"",email:"",phone:"",chatKey:""},file:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.body_fade_in(),localStorage.getItem("token")&&this.setState({logged:!0})}},{key:"render",value:function(){var e={change:this.login_change,submit:this.login_submit,username:this.state.username,password:this.state.password},t=this.state.userData,n={file_change:this.file_change,file_submit:this.file_submit};return"dashboard"===this.state.page?i.a.createElement("div",{id:"parent_container",className:"fade_transition"},i.a.createElement("header",{className:"header"},i.a.createElement("img",{src:a(23),alt:"brand logo"}),i.a.createElement(R,{page_handler:this.page_handler,logged:this.state.logged})),i.a.createElement("main",null,this.state.logged?i.a.createElement(J,{data:t,submit:this.update_submit,change:this.update_change,file:n}):i.a.createElement(D,{login:e})),i.a.createElement("footer",null,i.a.createElement(P,null))):"home"===this.state.page?i.a.createElement("div",{id:"parent_container",className:"fade_transition"},i.a.createElement("header",{className:"header"},i.a.createElement("img",{src:a(23),alt:"brand logo"}),i.a.createElement(R,{page_handler:this.page_handler,logged:this.state.logged})),i.a.createElement("main",null,i.a.createElement(C,null)),i.a.createElement("footer",null,i.a.createElement(P,null))):"consultation"===this.state.page?i.a.createElement("div",{id:"parent_container",className:"fade_transition"},i.a.createElement("header",{className:"header"},i.a.createElement("img",{src:a(23),alt:"brand logo"}),i.a.createElement(R,{page_handler:this.page_handler,logged:this.state.logged})),i.a.createElement("main",null,i.a.createElement(M,null),this.state.logged?i.a.createElement(J,{data:t,submit:this.update_submit,change:this.update_change,file:n}):i.a.createElement(D,{login:e})),i.a.createElement("footer",null,i.a.createElement(P,null))):void 0}}]),t}(i.a.Component);r.a.render(i.a.createElement(I,null),document.querySelector("#root"))},24:function(e,t,a){e.exports=a.p+"static/media/next.8385e1b3.png"},40:function(e,t,a){e.exports=a.p+"static/media/one.a2297d06.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/two.38354f98.jpg"},52:function(e,t,a){e.exports=a.p+"static/media/login.4f1652b8.png"},53:function(e,t,a){e.exports=a.p+"static/media/doctor-icon.80a54b5b.png"},90:function(e,t,a){e.exports=a.p+"static/media/three.298ea34e.jpg"},91:function(e,t,a){e.exports=a.p+"static/media/four.cbdd4dc7.jpg"},96:function(e,t,a){e.exports=a(238)}},[[96,1,2]]]);
//# sourceMappingURL=main.b4e46899.chunk.js.map