(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(2),s=n(15),c=n.n(s),a=(n(26),n(6)),o=n.n(a),i=n(16),u=n(17),l=n(18),h=n(21),d=n(20),j=(n(28),n(29),n(30),n(0)),p=function(e){return Object(j.jsxs)("div",{className:"card-container",children:[Object(j.jsx)("img",{alt:"monsters",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(j.jsx)("h2",{children:e.monster.name}),Object(j.jsx)("p",{children:e.monster.email})]})},m=function(e){return Object(j.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(j.jsx)(p,{monster:e})}))})},f=(n(32),function(e){var t=e.placeholder,n=e.handleChange;return Object(j.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),b=n(19),O=n.n(b),v=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(i.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://jsonplaceholder.typicode.com/users");case 2:n=t.sent,console.log(n),r=n.data,e.setState({monsters:r});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,r=t.searchField,s=n.filter((function(e){return console.log(e),e.name.toLowerCase().includes(r.toLowerCase())}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:" Monster Rolodex"}),Object(j.jsx)(f,{placeholder:"Search Monsters",handleChange:function(t){return e.setState({searchField:t.target.value})}}),Object(j.jsx)(m,{monsters:s})]})}}]),n}(r.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};c.a.render(Object(j.jsx)(v,{}),document.getElementById("root")),x()}},[[51,1,2]]]);
//# sourceMappingURL=main.2fcb283b.chunk.js.map