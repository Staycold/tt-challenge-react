(this["webpackJsonptt-challenge-react"]=this["webpackJsonptt-challenge-react"]||[]).push([[0],{52:function(e,c,t){},75:function(e,c,t){},76:function(e,c,t){"use strict";t.r(c);var s=t(0),i=t.n(s),a=t(18),n=t.n(a),r=(t(52),t(11)),j=t(41),l=t.n(j),d=t(19),o=t(6),h=t(25),m=t(21),b=t(1),x=function(){var e=Object(s.useState)(!1),c=Object(r.a)(e,2),t=c[0],i=c[1];return Object(b.jsxs)("div",{className:"header row",children:[Object(b.jsxs)("div",{className:"headerSideBar col-2",children:[Object(b.jsx)(m.a,{variant:"primary",onClick:function(){return i((function(e){return!e}))},className:"me-2",children:Object(b.jsx)("img",{src:"https://img.icons8.com/material-outlined/24/000000/menu--v1.png"})}),Object(b.jsxs)(h.a,{show:t,onHide:function(){return i(!1)},children:[Object(b.jsx)(h.a.Header,{closeButton:!0,children:Object(b.jsx)(h.a.Title,{children:"Menu"})}),Object(b.jsx)(h.a.Body,{children:Object(b.jsxs)(d.b,{to:"/",children:[Object(b.jsx)("img",{src:"https://img.icons8.com/material-rounded/24/000000/home.png"})," ","Home"]})}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"Made with \ud83d\udc99 by Patrick Brodie"})})]})]}),Object(b.jsx)("div",{className:"headerTitle col-7",children:Object(b.jsx)("p",{children:"Scheduling"})}),Object(b.jsx)("div",{className:"headerIcon col-1",children:Object(b.jsx)("img",{src:"https://img.icons8.com/ios/50/000000/thumbnail-view.png"})}),Object(b.jsx)("div",{className:"headerP col-2",children:Object(b.jsx)("img",{src:"https://img.icons8.com/fluency-systems-regular/36/000000/p.png"})})]})},O=t(20),u=t(44),g=t(10),p=t(22);function v(e){var c=e.site,t=c.id,s=c.title,i=c.address.city+", "||!1,a=c.address.state,n=c.address.country,r="".concat(c.contacts.main.firstName," ").concat(c.contacts.main.lastName);return Object(b.jsxs)("div",{className:"card row",children:[Object(b.jsx)("div",{className:"cardImg col-3",children:Object(b.jsx)(p.a,{className:"listImg",src:"http://lorempixel.com/640/480/city",roundedCircle:!0})}),Object(b.jsxs)(g.a.Body,{className:"cardText col-6",children:[Object(b.jsx)(g.a.Title,{children:s}),Object(b.jsx)(g.a.Text,{children:Object(b.jsx)("span",{children:"".concat(i).concat(a,", ").concat(n,". ")})}),Object(b.jsx)(g.a.Text,{children:Object(b.jsx)("span",{children:r})})]}),Object(b.jsx)("div",{className:"siteLink col-3",children:Object(b.jsx)(d.b,{to:"/sites/".concat(t),children:Object(b.jsx)("img",{src:"https://img.icons8.com/material-outlined/24/000000/forward.png"})})})]})}function N(e){var c=e.sites,t=(e.setSites,Object(s.useState)(Object(O.a)(Array(20)).map((function(e,c){return c})))),i=Object(r.a)(t,2),a=i[0],n=i[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"listHeader row",children:Object(b.jsx)("div",{className:"listHeaderTitle col-12",children:Object(b.jsx)("p",{children:"Sites"})})}),Object(b.jsx)("div",{className:"underListHeader row",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{className:"listInput",placeholder:"All Sites"}),Object(b.jsx)("img",{src:"https://img.icons8.com/external-kiranshastry-solid-kiranshastry/24/000000/external-magnifying-glass-interface-kiranshastry-solid-kiranshastry.png"})]})}),Object(b.jsx)("div",{className:"siteObj",children:Object(b.jsx)(u.a,{hasMoreItems:a.length<c.length,itemHeight:100,loadMoreItems:function(){var e=Object(O.a)(Array(20)).map((function(e,c){return a.length+c}));return new Promise((function(c){setTimeout((function(){n([].concat(Object(O.a)(a),Object(O.a)(e))),c()}),300)}))},children:c.length>0?a.map((function(e,t){return Object(b.jsx)(v,{site:c[e]},t)})):[]})})]})}function f(e){var c=e.details,t=(c.id,c.title),s=c.address.city+", "||!1,i=c.address.state,a=c.address.country,n="".concat(c.contacts.main.firstName," ").concat(c.contacts.main.lastName),r=c.address.street,j=c.address.zipCode,l=c.images[0],o=c.contacts.main.email,h=c.contacts.main.phoneNumber,m=c.contacts.main.jobTitle;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"detailsSite row",children:[Object(b.jsx)("div",{className:"detailsLink col-1",children:Object(b.jsx)(d.b,{to:"/",children:Object(b.jsx)("img",{src:"https://img.icons8.com/material/24/000000/back--v1.png"})})}),Object(b.jsx)("div",{className:"cardImg col-3",children:Object(b.jsx)(p.a,{className:"listImg",src:"http://lorempixel.com/640/480/city",roundedCircle:!0})}),Object(b.jsxs)(g.a.Body,{className:"cardText col-8",children:[Object(b.jsx)(g.a.Title,{id:"detSiteTitle",children:t}),Object(b.jsx)(g.a.Text,{children:Object(b.jsx)("span",{children:"".concat(s).concat(i,", ").concat(a,". ")})}),Object(b.jsx)(g.a.Text,{children:Object(b.jsx)("span",{children:n})})]})]}),Object(b.jsx)("div",{children:Object(b.jsxs)(g.a,{className:"detCard",children:[Object(b.jsx)("div",{className:"detailsImg row",children:Object(b.jsx)("div",{id:"detImg",children:Object(b.jsx)(g.a.Img,{variant:"top",src:l})})}),Object(b.jsxs)(g.a.Body,{children:[Object(b.jsx)(g.a.Title,{}),Object(b.jsxs)(g.a.Text,{children:[Object(b.jsxs)("div",{className:"detContact row",children:[Object(b.jsx)("div",{className:"detContactImg col-2",children:Object(b.jsx)("img",{src:"https://img.icons8.com/material/24/000000/manager--v1.png"})}),Object(b.jsxs)("div",{className:"detContactText col-10",children:[Object(b.jsx)("h5",{children:n}),Object(b.jsxs)("p",{children:[" ",m]})]})]}),Object(b.jsxs)("div",{className:"detContact row",children:[Object(b.jsx)("div",{className:"detContactImg col-2",children:Object(b.jsx)("img",{src:"https://img.icons8.com/material-outlined/30/000000/phone.png"})}),Object(b.jsx)("div",{className:"detContactText col-10",children:Object(b.jsx)("p",{children:h})})]}),Object(b.jsxs)("div",{className:"detContact row",children:[Object(b.jsx)("div",{className:"detContactImg col-2",children:Object(b.jsx)("img",{src:"https://img.icons8.com/ios-glyphs/30/000000/email.png"})}),Object(b.jsx)("div",{className:"detContactText col-10",children:Object(b.jsxs)("p",{children:[" ",Object(b.jsxs)("a",{href:"mailto:"+o,children:[" ",o," "]})," "]})})]}),Object(b.jsxs)("div",{className:"detContact row",children:[Object(b.jsx)("div",{className:"detContactImg col-2",children:Object(b.jsx)("img",{src:"https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-map-maps-and-locations-those-icons-fill-those-icons-1.png"})}),Object(b.jsxs)("div",{className:"detContactText col-10",children:[Object(b.jsx)("p",{children:r}),Object(b.jsx)("p",{children:j}),Object(b.jsx)("p",{children:Object(b.jsx)("span",{children:"".concat(s).concat(i,", ").concat(a)})})]})]})]})]})]})})]})}t(75);function y(){var e=Object(s.useState)(1),c=Object(r.a)(e,2),t=c[0],i=(c[1],Object(s.useState)([])),a=Object(r.a)(i,2),n=a[0],j=a[1];return Object(s.useEffect)((function(){l.a.get("https://tracktik-challenge.staffr.com/sites").then((function(e){return e.data})).then((function(e){return j(e)})).catch((function(e){console.log("this ihs the {e}, ",e)}))}),[t]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(x,{}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/sites/:id",render:function(e){var c=e.match;return Object(b.jsx)(f,{details:n.find((function(e){return e.id===c.params.id}))})}}),Object(b.jsx)(o.a,{path:"/",render:function(){return Object(b.jsx)(N,{sites:n})}})]})]})})}n.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.e6ef2f54.chunk.js.map