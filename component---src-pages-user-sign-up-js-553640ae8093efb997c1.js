(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{182:function(e,t,a){"use strict";a.r(t);a(116);var r=a(56),n=a.n(r),o=a(16),i=a.n(o),s=a(0),l=a.n(s),c=a(195),m=(a(203),a(272)),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={usernameError:!1,passwordError:!1,emailError:!1,usernameErrorMessage:"",emailErrorMessage:"",passwordErrorMessage:""},a.handleClick=a.handleClick.bind(n()(a)),a}i()(t,e);var a=t.prototype;return a.handleClick=function(e){var t=this;e.preventDefault();var a=document.getElementById("username").value,r=document.getElementById("password").value,n=document.getElementById("email").value;if(a?this.setState({usernameError:!1,usernameErrorMessage:""}):this.setState({usernameError:!0,usernameErrorMessage:"Username cannot be empty"}),r?this.setState({passwordError:!1,passwordErrorMessage:""}):this.setState({passwordError:!0,passwordErrorMessage:"Password cannot be empty"}),n?n.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)||this.setState({emailError:!0,emailErrorMessage:"Please input a valid email address"}):this.setState({emailError:!0,emailErrorMessage:"Email cannot be empty"}),r&&a&&n){fetch("https://ktichmann-ticketing-system.herokuapp.com/user/sign-up",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"username="+a+"&password="+r+"&email="+n}).then(function(e){return e.json()}).then(function(e){console.log("res: ",e),e.success?document.getElementById("relocate").click():"username taken"===e.message?t.setState({usernameError:!0,usernameErrorMessage:"Username Taken"}):t.setState({usernameErrorMessage:"There was a problem signing you up"})}).catch(function(e){return console.log("error: ",e)})}},a.render=function(){return l.a.createElement("div",{style:{fontFamily:"Lato",left:"50%",top:"50%",transform:"translate(-50%, -80%)",position:"absolute"}},l.a.createElement("h1",{style:{textAlign:"center",fontFamily:"Lato"}},"Sign Up"),l.a.createElement("div",{style:{margin:"0px auto"},className:"user-form"},l.a.createElement(m.a,{usernameError:this.state.usernameError,passwordError:this.state.passwordError,usernameErrorMessage:this.state.usernameErrorMessage,passwordErrorMessage:this.state.passwordErrorMessage,emailError:this.state.emailError,emailErrorMessage:this.state.emailErrorMessage,handleClick:this.handleClick,email:!0,buttonText:"Sign Up"}),l.a.createElement("div",{className:"login-message",style:{textAlign:"center"}},"Already a user? ",l.a.createElement(c.a,{to:"/user/log-in"},"Log in here"))),l.a.createElement(c.a,{to:"/user/verify",id:"relocate"}))},t}(l.a.Component);t.default=u},195:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var r=a(0),n=a.n(r),o=a(3),i=a.n(o),s=a(54),l=a.n(s);a.d(t,"a",function(){return l.a});a(196);var c=n.a.createContext({}),m=function(e){return n.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},196:function(e,t,a){var r;e.exports=(r=a(199))&&r.default||r},198:function(e,t,a){"use strict";var r=a(16),n=a.n(r),o=a(0),i=a.n(o),s=a(191),l=a(216),c=a.n(l),m=a(212),u=a.n(m),d=a(202);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(d.a)(),a}n()(a,t);var r=a.prototype;return r.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},r.render=function(){return i.a.createElement(u.a,{generateClassName:this.muiPageContext.generateClassName},i.a.createElement(s.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},i.a.createElement(c.a,null),i.a.createElement(e,this.props)))},a}(i.a.Component)}},199:function(e,t,a){"use strict";a.r(t);a(40);var r=a(0),n=a.n(r),o=a(3),i=a.n(o),s=a(84),l=a(6),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},200:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},201:function(e,t,a){e.exports=a.p+"static/avatar-2aee737878818d0ad5453d604fa5a81d.png"},202:function(e,t,a){"use strict";(function(e,r){a.d(t,"a",function(){return l});a(109),a(83),a(57),a(107),a(215);var n=a(205),o=a(191),i=Object(o.createMuiTheme)({palette:{primary:{main:"#663399"},secondary:{main:"#ffb238"}},typography:{useNextVariants:!0}});function s(){return{theme:i,sheetsManager:new Map,sheetsRegistry:new n.SheetsRegistry,generateClassName:Object(o.createGenerateClassName)()}}function l(){return e.browser?(r.__INIT_MATERIAL_UI__||(r.__INIT_MATERIAL_UI__=s()),r.__INIT_MATERIAL_UI__):s()}}).call(this,a(214),a(21))},203:function(e,t,a){"use strict";a(58);var r=a(200),n=a(0),o=a.n(n),i=a(3),s=a.n(i),l=a(195),c=a(56),m=a.n(c),u=a(16),d=a.n(u),p=(a(40),a(221)),g=a.n(p),h=a(217),E=a.n(h),f=a(218),y=a.n(f),w=a(219),b=a.n(w),v=a(224),k=a.n(v),M=a(188),x=a.n(M),C=a(210),S=a.n(C),_=a(227),T=a.n(_),I=a(209),N=a.n(I),A=a(211),D=a.n(A),O=a(220),P=a.n(O),L=a(191),j=a(208),R=a.n(j),B=a(229),q=a.n(B),U=a(228),F=a.n(U),G=a(223),z=a.n(G),W=a(230),Z=a.n(W),H=a(226),J=a.n(H),Q=a(201),V=a.n(Q),$=a(225),K=a.n($),X=a(82),Y=(a(198),Object(L.createMuiTheme)({typography:{fontFamily:"Lato"},overrides:{MuiTypography:{body1:{color:"white"},subheading:{color:"white"}}}})),ee=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleDrawerOpen=function(){a.setState({open:!0})},a.handleDrawerClose=function(){a.setState({open:!1})},a.state={open:!1,groups:[]},a.fetchData=a.fetchData.bind(m()(a)),a}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.fetchData()},a.fetchData=function(){var e=this;fetch("https://ktichmann-ticketing-system.herokuapp.com/group/list",{headers:{Authorization:window.sessionStorage.getItem("ticketing_token")}}).then(function(e){return e.json()}).then(function(t){t.data&&(e.props.dispatchAddGroups(t.data),e.setState({groups:e.props.data.groups}))}).catch(function(e){return console.log(e)})},a.componentDidUpdate=function(){var e=this.state.open;document.getElementById("mainContentLayout").style.margin=e?"6rem 3rem 6rem 15rem":"6rem 3rem"},a.render=function(){var e,t=this.state,a=t.open,r=t.groups,n=this.props.classes;return o.a.createElement(L.MuiThemeProvider,{theme:Y},o.a.createElement("header",{className:n.root},o.a.createElement(E.a,{position:"fixed",className:x()(n.appBar,(e={},e[n.appBarShift]=a,e))},o.a.createElement(y.a,null,o.a.createElement(b.a,{color:"inherit","aria-label":"Open Drawer",onClick:this.handleDrawerOpen,className:x()(n.menuButton,a&&n.hide)},o.a.createElement(P.a,null)),!a&&o.a.createElement(R.a,{variant:"h6",color:"inherit",noWrap:!0},"bOnline"))),o.a.createElement(g.a,{variant:"persistent",anchor:"left",open:a,className:n.drawer,classes:{paper:n.drawerPaper}},o.a.createElement("div",{className:n.drawerHeader},o.a.createElement(R.a,{variant:"h6",color:"inherit",noWrap:!0,style:{left:"30px",position:"fixed",color:"white"}},"bOnline"),o.a.createElement(b.a,{color:"inherit",onClick:this.handleDrawerClose},o.a.createElement(z.a,null))),o.a.createElement(k.a,null),o.a.createElement(K.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:n.avatarSection},o.a.createElement(J.a,{alt:"Remy",src:V.a,className:n.bigAvatar}),o.a.createElement(R.a,{variant:"h6",color:"inherit",noWrap:!0},"undefined"==typeof window?"":sessionStorage.getItem("ticketing_username"))),o.a.createElement(N.a,{className:n.groupsSection},r.map(function(e){return o.a.createElement(l.a,{key:e.group_id,to:"/ticket-dashboard",state:{group_id:e.group_id}},o.a.createElement(S.a,{id:e.group_id,className:n.group,button:!0,key:e.group_id},o.a.createElement(D.a,{style:{color:"white !important"},primary:e.title})))})),o.a.createElement(N.a,{className:n.drawerPaper,style:{bottom:"0rem",position:"fixed",color:"white"}},o.a.createElement(l.a,{to:"/group/create"},o.a.createElement(S.a,{button:!0},o.a.createElement(T.a,{color:"inherit"},o.a.createElement(F.a,{style:{color:"white"}})),o.a.createElement(D.a,{primary:"Create a Group"}))),o.a.createElement(l.a,{to:"/"},o.a.createElement(S.a,{button:!0},o.a.createElement(T.a,{color:"inherit"},o.a.createElement(q.a,{style:{color:"white"}})),o.a.createElement(D.a,{primary:"Dashboard"}))),o.a.createElement("div",{onClick:function(){sessionStorage.removeItem("ticketing_token"),window.location.reload()}},o.a.createElement(S.a,{button:!0},o.a.createElement(T.a,{color:"inherit"},o.a.createElement(Z.a,{style:{color:"white"}})),o.a.createElement(D.a,{primary:"Log Out"})))))))},t}(o.a.Component);ee.propTypes={siteTitle:s.a.string},ee.defaultProps={siteTitle:""};var te=Object(X.b)(function(e){return{data:e.groups}},function(e){return{dispatchAddGroups:function(t){return e(function(e){return{type:"ADD_GROUPS",groups:e}}(t))}}})(ee),ae=Object(L.withStyles)(function(e){return{"@global":{"*::-webkit-scrollbar":{width:".5rem"},"*::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0,0,0,1)"}},root:{display:"flex",color:"white !important"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - 240px)",marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240,backgroundColor:"#3A1772",padding:"0px",overflow:"hidden"},drawerHeader:Object.assign({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),avatarSection:{padding:"1rem",backgroundColor:"rgba(255, 255, 255, .15)",fontFamily:"Roboto Condensed"},bigAvatar:{margin:10,width:60,height:60},groupsSection:{boxShadow:"0px -2px 1px 1px rgba(0,0,0,.1)",paddingTop:"0px",height:"65%",overflow:"scroll"},group:{borderBottom:".5px solid rgba(255,255,255,.1)",textAlign:"center",transition:"background-color .7s","&:hover":{backgroundColor:"rgba(250, 250, 250, .2)",transition:"background-color .7s"}}}},{withTheme:!0})(te),re=(a(231),function(e){var t=e.children;e.groups;return"undefined"!=typeof window&&(sessionStorage.getItem("ticketing_token")||"ticketing-dashboard/user/log-in"!==window.location.pathname&&"ticketing-dashboard/user/sign-up"!==window.location.pathname&&window.location.replace("/user/log-in")),o.a.createElement(l.b,{query:"2994927498",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(ae,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{id:"mainContentLayout",style:{margin:"5rem 3rem",padding:"0px 1.0875rem 1.45rem",paddingTop:0,transition:"margin .4s"}},o.a.createElement("main",null,t),o.a.createElement("footer",null)))},data:r})});re.propTypes={children:s.a.node.isRequired};t.a=re},272:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(239),i=a.n(o),s=a(238),l=a.n(s),c=a(3),m=a.n(c),u=function(e){return n.a.createElement("form",{style:{marginLeft:"1rem"}},n.a.createElement("p",null,e.usernameErrorMessage),n.a.createElement(l.a,{style:{display:"block",paddingLeft:"auto"},id:"username",label:"Username",margin:"normal",variant:"outlined",error:e.usernameError}),!!e.email&&n.a.createElement("div",null,n.a.createElement("p",null,e.emailErrorMessage),n.a.createElement(l.a,{style:{display:"block"},id:"email",label:"Email",type:"email",margin:"normal",error:e.emailError,variant:"outlined"})),n.a.createElement("p",null,e.passwordErrorMessage),n.a.createElement(l.a,{style:{display:"block"},id:"password",label:"Password",type:"password",margin:"normal",variant:"outlined",error:e.passwordError}),n.a.createElement(i.a,{variant:"contained",color:"primary",type:"submit",style:{marginLeft:"8rem",marginTop:"1rem"},onClick:function(t){return e.handleClick(t)}},e.buttonText))};u.propTypes={usernameErrorMessage:m.a.string,passwordErrorMessage:m.a.string,emailErrorMessage:m.a.string,usernameError:m.a.bool,passwordError:m.a.bool,emailError:m.a.bool},u.defaultProps={usernameErrorMessage:"Error",passwordErrorMessage:"Error",emailErrorMessage:"Error",usernameError:!1,passwordError:!1,emailError:!1},t.a=u}}]);
//# sourceMappingURL=component---src-pages-user-sign-up-js-553640ae8093efb997c1.js.map