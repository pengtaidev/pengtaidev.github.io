(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return c}),n.d(t,"pageQuery",function(){return d});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(155),s=n(184),c=(n(257),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.location;return o.a.createElement(l.a,{location:t},o.a.createElement(s.a,{data:e}))},t}(i.Component)),d="755028477"},146:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(145),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(146),d=n.n(c);n.d(t,"PageRenderer",function(){return d.a});var u=n(34);n.d(t,"parsePath",function(){return u.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,n){var a={title:"Developer Blog",author:"Ronin.shin",description:"",siteUrl:"https://pengtaidev.github.io/",titleLogo:function(){return n(154)},titleLogoShow:!0,bio:"Ronin Frontend Test",bioShow:!0,googleAnalyticsTrackingId:"",disqusShortname:""};e.exports=a},150:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(50),s=n(2),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Developer Blog"}}}}},153:function(e,t,n){},154:function(e,t,n){e.exports=n.p+"static/profile-dee6374bd5898a25424d7824332c98bb.jpg"},155:function(e,t,n){"use strict";n(33);var a=n(152),r=n(0),i=n.n(r),o=n(4),l=n.n(o),s=n(158),c=n.n(s),d=n(147),u=n(148),m=n(151),p=(n(153),n(7)),g=n.n(p),f=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{id:"footer"},i.a.createElement("div",{className:"copyright"},i.a.createElement("span",null,"© ",i.a.createElement("a",{href:"mailto:ronin.shin@cheilpengtai.com"},"Ronin.shin")," 2019, All rights reserved. Powered by "," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby"))),i.a.createElement("div",{className:"submenu"}))},t}(r.Component),h=n(149),E=n.n(h),y=(n(163),n(27),n(164),n(48),n(156),n(157),n(165)),v=new(n.n(y).a)({baseFontSize:"16px",baseLineHeight:1.666,headerFontFamily:["Nanum Gothic"],bodyFontFamily:["Noto Sans KR"]}),w=[{name:"Nanum Gothic",bold:[400,700]},{name:"Noto Sans KR"}].map(function(e){return e.bold?e.name.replace(/ /gi,"+")+":"+e.bold.toString():""+e.name.replace(/ /gi,"+")}).join("|").toString(),b=(v.rhythm,v.scale,function(e){var t=e.children,n=(e.data,e.location);return i.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){var a;a=n?n.href:E.a.siteUrl;var r=function(e,t){var n={};return n=e?{display:"inline-block"}:{display:"none"},t||(n=Object.assign({},n,{width:"1.5rem",height:"1.5rem",marginRight:"0.1rem"})),n}(E.a.titleLogoShow,E.a.bioShow),o=E.a.bioShow?{}:{display:"none"};return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:E.a.description},{name:"og:type",content:"website"},{name:"og:title",content:E.a.title},{name:"og:description",content:E.a.description},{name:"og:image",content:E.a.titleLogo()},{name:"og:url",content:a}]},i.a.createElement("html",{lang:"ko"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family="+w,rel:"stylesheet"}),i.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id="+E.a.googleAnalyticsTrackingId}),i.a.createElement("script",null,"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', '"+E.a.googleAnalyticsTrackingId+"');\n              ")),i.a.createElement("div",{id:"wrap"},i.a.createElement("header",{id:"header"},i.a.createElement("div",{className:"title"},i.a.createElement("div",{className:"title-wrap"},i.a.createElement(d.Link,{to:"/"},i.a.createElement("div",{className:"logo-img",style:r},i.a.createElement("img",{src:E.a.titleLogo(),alt:"logo"})),i.a.createElement("div",null,i.a.createElement("h1",null,E.a.title),i.a.createElement("p",{className:"bio",style:o},E.a.bio))))),i.a.createElement("div",{className:"menu"},i.a.createElement("div",{className:"home"},i.a.createElement(d.Link,{to:"/"},i.a.createElement(u.a,{icon:m.c,fixedWidth:!0,transform:"down-1"}),i.a.createElement("span",null,"Home"))),i.a.createElement("div",{className:"tags"},i.a.createElement(d.Link,{to:"/tags"},i.a.createElement(u.a,{icon:m.f,fixedWidth:!0,transform:"down-1"}),i.a.createElement("span",null,"Tags"))),i.a.createElement("div",{className:"search"},i.a.createElement(d.Link,{to:"/search"},i.a.createElement(u.a,{icon:m.d,fixedWidth:!0,transform:"down-1"}),i.a.createElement("span",null,"Search"))))),i.a.createElement("article",{id:"article"},t)),i.a.createElement(f,null))},data:a})});b.propTypes={children:l.a.node.isRequired,location:l.a.object.isRequired};t.a=b},178:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){"use strict";n(79),n(48);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),l=n(148),s=n(151),c=(n(178),n(4)),d=n.n(c),u=n(145),m=n.n(u),p=n(188),g=n.n(p),f=n(166),h=n.n(f),E=n(177),y=(n(183),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.post,t=e.fields.slug,n=g()(e,"frontmatter.title")||t,a=e.excerpt,r=e.frontmatter.date,i=e.frontmatter.tags.map(function(e,t){return"Empty Tag"!==e?o.a.createElement(m.a,{to:"/tags/"+h.a.kebabCase(e),className:"tag",key:"tag-"+e},"#",o.a.createElement("span",{className:"tag-name"},e)):null});return o.a.createElement("div",{className:"post-link",key:t,style:this.props.showCnt-1>=this.props.index?{display:"inline-block"}:{display:"none"}},o.a.createElement(m.a,{to:t},o.a.createElement("h2",{className:"title hover"},n)),o.a.createElement("span",{className:"excerpt"},a),o.a.createElement("div",{className:"sub"},o.a.createElement("div",{className:"date"},o.a.createElement(l.a,{icon:E.a}),o.a.createElement("span",null,r)),o.a.createElement("div",{className:"tags-list"},i)))},t}(i.Component));y.propTypes={post:d.a.object.isRequired,title:d.a.string};var v=y,w=function(e){function t(t){var n;return(n=e.call(this,t)||this).onScroll=function(){n.state.currentPostCnt<n.props.data.length&&window.scrollY+window.innerHeight>=n.state.loadElPoint&&!n.state.isLoading&&(n.setState({isLoading:!0}),setTimeout(function(){n.setState({currentPostCnt:n.state.currentPostCnt+n.state.loadPostCnt,isLoading:!1}),n.setLoadElPoint()},200))},n.setLoadElPoint=function(){n.setState({loadElPoint:document.querySelector(".load-point").offsetTop})},n.state={loadPostCnt:7,currentPostCnt:7,isLoading:!1,loadElPoint:0},n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setLoadElPoint(),window.addEventListener("scroll",this.onScroll,!1)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll,!1)},n.render=function(){var e=this,t=this.props,n=t.data,a=t.title,r=n.filter(function(e){return!!e.node.frontmatter.date}).map(function(t,n){return o.a.createElement(v,{key:t.node.fields.slug,post:t.node,index:n,showCnt:e.state.currentPostCnt})});return o.a.createElement("div",{id:"PostList"},a?o.a.createElement("h1",{className:"list-title"},a):null,o.a.createElement("div",{className:"list"},r),o.a.createElement("div",{className:"load"},o.a.createElement("div",{className:"loading"},o.a.createElement("div",{className:"spinner",style:this.state.isLoading?{display:"inline-block"}:{display:"none"}},o.a.createElement(l.a,{className:"blink",icon:s.e,size:"2x"}))),o.a.createElement("div",{className:"load-point"})))},t}(i.Component);t.a=w},257:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-d51e1b556243e170a4ba.js.map