(this["webpackJsonpukad-test"]=this["webpackJsonpukad-test"]||[]).push([[0],{87:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var r,n=c(37),a=c.n(n),s=c(0),i=c(2),o=c(20),j=c(10),d=c.n(j),l=c(18),h=c(8),b=c(38),O=c(1),u=function(e){var t=e.item,c=e.loading;return Object(O.jsx)(s.Fragment,{children:c?Object(O.jsxs)(b.a,{speed:2,width:350,height:475,viewBox:"0 0 350 475",backgroundColor:"#f3f3f3",foregroundColor:"#d6d5d5",children:[Object(O.jsx)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"350",height:"360"}),Object(O.jsx)("rect",{x:"0",y:"433",rx:"5",ry:"5",width:"350",height:"35"}),Object(O.jsx)("rect",{x:"0",y:"380",rx:"5",ry:"5",width:"136",height:"35"})]}):Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("img",{width:350,height:362,src:t.image.url,alt:"prod"}),Object(O.jsx)("p",{children:t.name}),Object(O.jsx)("h2",{children:t.bred_for})]})})},x=c(19),p=c.n(x),f=function(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)(!0),a=Object(h.a)(n,2),i=a[0],j=a[1];return Object(s.useEffect)((function(){Object(l.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,p.a.get("https://api.thedogapi.com/v1/breeds?limit=8&page=0");case 4:t=e.sent,c=t.data,r(c),j(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),alert("Error while requesting card data"),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()}),[]),Object(O.jsxs)("div",{className:"product-block",children:[Object(O.jsx)("h2",{children:"Product Page"}),Object(O.jsx)("div",{className:"product-block__card",children:(i?Object(o.a)(Array(8)):c).map((function(e,t){return Object(O.jsx)(u,{item:e,loading:i},t)}))})]})},m=c(26),g=c(39),v=c.n(g),C=(c(81),c(82),function(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)(!0),a=Object(h.a)(n,2),i=a[0],j=a[1];Object(s.useEffect)((function(){Object(l.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,p.a.get("https://api.thedogapi.com/v1/breeds?limit=8&page=0");case 4:t=e.sent,c=t.data,r(c),j(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),alert("Error while requesting card data at the slider"),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()}),[]);return Object(O.jsx)("div",{className:"home-block",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Home Page"}),Object(O.jsx)(v.a,Object(m.a)(Object(m.a)({},{dots:!0,arrow:!1,infinite:!0,speed:300,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:1200,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0}},{breakpoint:900,settings:{slidesToShow:1,slidesToScroll:1}}]}),{},{children:(i?Object(o.a)(Array(8)):c).map((function(e,t){return Object(O.jsx)(u,{item:e,loading:i},t)}))}))]})})});!function(e){e.HOME="product-app/",e.PRODUCTS="/products"}(r||(r={}));var w=[{path:r.PRODUCTS,exact:!0,component:f},{path:r.HOME,exact:!0,component:C}];var H=function(){return Object(O.jsx)(i.c,{children:w.map((function(e){return Object(O.jsx)(i.a,{path:e.path,exact:e.exact,component:e.component},e.path)}))})},k=function(){var e=Object(s.useState)(!0),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),o=Object(h.a)(a,2),j=o[0],d=o[1],l=Object(i.f)();return Object(O.jsxs)("header",{children:[Object(O.jsx)("div",{className:"logo__img",children:Object(O.jsxs)("svg",{width:"110",height:"28",viewBox:"0 0 110 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(O.jsx)("path",{d:"M106.121 3.55846C103.534 1.20097 99.8231 0.0222934 94.9871 0.0224401H85.4045V26.1313L74.0801 0.0224401H68.2219L57.5081 24.7237C56.4337 23.2234 55.1109 21.3721 53.5399 19.1697C51.0315 15.6535 49.3118 13.2512 48.3807 11.9626L59.1655 0.0224401H51.6777L41.4364 11.1124V0.0224401H35.3842V27.0334H41.4364V19.3819L44.1513 16.3683L52.1051 27.0333H62.9467L65.4676 21.1985H76.8344L79.3566 27.0334H94.677C99.8492 27.0334 103.696 25.8098 106.218 23.3627C108.739 20.9155 110 17.5921 110 13.3927C110 9.19359 108.707 5.91552 106.121 3.55846ZM67.7568 15.9046L71.1712 8.05992L74.5465 15.9046H67.7568ZM101.679 19.614C100.191 21.0052 98.0641 21.7008 95.2972 21.7006H91.4571V5.27752H94.8321C97.909 5.27752 100.191 5.99246 101.679 7.42234C103.166 8.85237 103.909 10.894 103.91 13.5471C103.91 16.2005 103.166 18.2228 101.679 19.614Z",fill:"white"}),Object(O.jsx)("path",{d:"M25.618 14.9383C25.618 17.1025 25.1202 18.8092 24.1247 20.0584C23.1282 21.3085 21.7769 21.9333 20.0707 21.9327C18.364 21.9327 17.0059 21.3079 15.9964 20.0584C14.9886 18.8091 14.4844 17.1024 14.4837 14.9383V5.27406L9.49295 0.0224401L0 0L2.64737 2.63703L0 5.27406H14.4837L8.43236 6.52165V15.1316C8.43236 19.0217 9.52485 22.023 11.7098 24.1353C13.8956 26.2478 16.6825 27.304 20.0707 27.3038C23.4587 27.3038 26.2389 26.2541 28.4113 24.1547C30.5836 22.0552 31.6696 19.0475 31.6693 15.1316V0.0224401L25.618 0V14.9383Z",fill:"white"})]})}),Object(O.jsx)("div",{className:"logo__nav",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{onClick:function(){l.push(r.HOME),n(!0),d(!1)},className:c?"active":"",children:"HOME"}),Object(O.jsx)("li",{onClick:function(){l.push(r.PRODUCTS),d(!0),n(!1)},className:j?"active":"",children:"PRODUCTS"})]})})]})},L=function(){return Object(O.jsx)("footer",{children:"2021 \xa9 COPYRIGHT"})},S=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(k,{}),Object(O.jsx)(H,{}),Object(O.jsx)(L,{})]})},T=(c(87),c(24));a.a.render(Object(O.jsx)(T.a,{children:Object(O.jsx)(S,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.e6f53c81.chunk.js.map