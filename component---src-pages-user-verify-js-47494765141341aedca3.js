(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{177:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(197);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("p",null,"Registration successful - please check your email to verify your account"))}},186:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(3),o=a.n(i),c=a(50),s=a.n(c);a.d(t,"a",function(){return s.a});a(190);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},190:function(e,t,a){var n;e.exports=(n=a(194))&&n.default||n},192:function(e,t,a){"use strict";var n=a(16),r=a.n(n),i=a(0),o=a.n(i),c=a(185),s=a(209),l=a.n(s),u=a(206),d=a.n(u),m=a(196);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(m.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return o.a.createElement(d.a,{generateClassName:this.muiPageContext.generateClassName},o.a.createElement(c.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},o.a.createElement(l.a,null),o.a.createElement(e,this.props)))},a}(o.a.Component)}},193:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},194:function(e,t,a){"use strict";a.r(t);a(40);var n=a(0),r=a.n(n),i=a(3),o=a.n(i),c=a(78),s=a(6),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},195:function(e,t,a){e.exports=a.p+"static/avatar-2aee737878818d0ad5453d604fa5a81d.png"},196:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return s});a(102),a(77),a(53),a(101),a(208);var r=a(198),i=a(185),o=Object(i.createMuiTheme)({palette:{primary:{main:"#663399"},secondary:{main:"#ffb238"}},typography:{useNextVariants:!0}});function c(){return{theme:o,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function s(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=c()),n.__INIT_MATERIAL_UI__):c()}}).call(this,a(207),a(21))},197:function(e,t,a){"use strict";a(54);var n=a(193),r=a(0),i=a.n(r),o=a(3),c=a.n(o),s=a(186),l=a(52),u=a.n(l),d=a(16),m=a.n(d),p=(a(40),a(214)),h=a.n(p),g=a(210),f=a.n(g),y=a(211),w=a.n(y),b=a(212),E=a.n(b),v=a(216),k=a.n(v),x=a(182),_=a.n(x),C=a(204),S=a.n(C),T=a(219),N=a.n(T),I=a(201),D=a.n(I),M=a(205),O=a.n(M),R=a(213),j=a.n(R),A=a(185),P=a(200),q=a.n(P),L=a(221),B=a.n(L),G=a(220),U=a.n(G),F=a(215),W=a.n(F),H=a(222),J=a.n(H),z=a(218),Q=a.n(z),V=a(195),K=a.n(V),X=a(217),Y=a.n(X),Z=a(76),$=(a(192),Object(A.createMuiTheme)({typography:{fontFamily:"Lato"},overrides:{MuiTypography:{body1:{color:"white"},subheading:{color:"white"}}}})),ee=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleDrawerOpen=function(){a.setState({open:!0})},a.handleDrawerClose=function(){a.setState({open:!1})},a.state={open:!1,groups:[]},a.fetchData=a.fetchData.bind(u()(a)),a}m()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.fetchData()},a.fetchData=function(){var e=this;fetch("https://ktichmann-ticketing-system.herokuapp.com/group/list",{headers:{Authorization:window.sessionStorage.getItem("ticketing_token")}}).then(function(e){return e.json()}).then(function(t){t.data&&(e.props.dispatchAddGroups(t.data),e.setState({groups:e.props.data.groups}))}).catch(function(e){return console.log(e)})},a.componentDidUpdate=function(){var e=this.state.open;document.getElementById("mainContentLayout").style.margin=e?"6rem 3rem 6rem 15rem":"6rem 3rem"},a.render=function(){var e,t=this.state,a=t.open,n=t.groups,r=this.props.classes;return i.a.createElement(A.MuiThemeProvider,{theme:$},i.a.createElement("header",{className:r.root},i.a.createElement(f.a,{position:"fixed",className:_()(r.appBar,(e={},e[r.appBarShift]=a,e))},i.a.createElement(w.a,null,i.a.createElement(E.a,{color:"inherit","aria-label":"Open Drawer",onClick:this.handleDrawerOpen,className:_()(r.menuButton,a&&r.hide)},i.a.createElement(j.a,null)),!a&&i.a.createElement(q.a,{variant:"h6",color:"inherit",noWrap:!0},"bOnline"))),i.a.createElement(h.a,{variant:"persistent",anchor:"left",open:a,className:r.drawer,classes:{paper:r.drawerPaper}},i.a.createElement("div",{className:r.drawerHeader},i.a.createElement(q.a,{variant:"h6",color:"inherit",noWrap:!0,style:{left:"30px",position:"fixed",color:"white"}},"bOnline"),i.a.createElement(E.a,{color:"inherit",onClick:this.handleDrawerClose},i.a.createElement(W.a,null))),i.a.createElement(k.a,null),i.a.createElement(Y.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:r.avatarSection},i.a.createElement(Q.a,{alt:"Remy",src:K.a,className:r.bigAvatar}),i.a.createElement(q.a,{variant:"h6",color:"inherit",noWrap:!0},"undefined"==typeof window?"":sessionStorage.getItem("ticketing_username"))),i.a.createElement(D.a,{className:r.groupsSection},n.map(function(e){return i.a.createElement(s.a,{key:e.group_id,to:"/ticket-dashboard",state:{group_id:e.group_id}},i.a.createElement(S.a,{id:e.group_id,className:r.group,button:!0,key:e.group_id},i.a.createElement(O.a,{style:{color:"white !important"},primary:e.title})))})),i.a.createElement(D.a,{className:r.drawerPaper,style:{bottom:"0rem",position:"fixed",color:"white"}},i.a.createElement(s.a,{to:"/group/create"},i.a.createElement(S.a,{button:!0},i.a.createElement(N.a,{color:"inherit"},i.a.createElement(U.a,{style:{color:"white"}})),i.a.createElement(O.a,{primary:"Create a Group"}))),i.a.createElement(s.a,{to:"/"},i.a.createElement(S.a,{button:!0},i.a.createElement(N.a,{color:"inherit"},i.a.createElement(B.a,{style:{color:"white"}})),i.a.createElement(O.a,{primary:"Dashboard"}))),i.a.createElement("div",{onClick:function(){sessionStorage.removeItem("ticketing_token"),window.location.reload()}},i.a.createElement(S.a,{button:!0},i.a.createElement(N.a,{color:"inherit"},i.a.createElement(J.a,{style:{color:"white"}})),i.a.createElement(O.a,{primary:"Log Out"})))))))},t}(i.a.Component);ee.propTypes={siteTitle:c.a.string},ee.defaultProps={siteTitle:""};var te=Object(Z.b)(function(e){return{data:e.groups}},function(e){return{dispatchAddGroups:function(t){return e(function(e){return{type:"ADD_GROUPS",groups:e}}(t))}}})(ee),ae=Object(A.withStyles)(function(e){return{"@global":{"*::-webkit-scrollbar":{width:".5rem"},"*::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0,0,0,1)"}},root:{display:"flex",color:"white !important"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - 240px)",marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240,backgroundColor:"#3A1772",padding:"0px",overflow:"hidden"},drawerHeader:Object.assign({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),avatarSection:{padding:"1rem",backgroundColor:"rgba(255, 255, 255, .15)",fontFamily:"Roboto Condensed"},bigAvatar:{margin:10,width:60,height:60},groupsSection:{boxShadow:"0px -2px 1px 1px rgba(0,0,0,.1)",paddingTop:"0px",height:"65%",overflow:"scroll"},group:{borderBottom:".5px solid rgba(255,255,255,.1)",textAlign:"center",transition:"background-color .7s","&:hover":{backgroundColor:"rgba(250, 250, 250, .2)",transition:"background-color .7s"}}}},{withTheme:!0})(te),ne=(a(223),function(e){var t=e.children;e.groups;return"undefined"!=typeof window&&(sessionStorage.getItem("ticketing_token")||"ticketing-dashboard/user/log-in"!==window.location.pathname&&"ticketing-dashboard/user/sign-up"!==window.location.pathname&&window.location.replace("/user/log-in")),i.a.createElement(s.b,{query:"2994927498",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(ae,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{id:"mainContentLayout",style:{margin:"5rem 3rem",padding:"0px 1.0875rem 1.45rem",paddingTop:0,transition:"margin .4s"}},i.a.createElement("main",null,t),i.a.createElement("footer",null)))},data:n})});ne.propTypes={children:c.a.node.isRequired};t.a=ne}}]);
//# sourceMappingURL=component---src-pages-user-verify-js-47494765141341aedca3.js.map