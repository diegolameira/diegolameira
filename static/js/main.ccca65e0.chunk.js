(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(e,t,n){e.exports=n(66)},66:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(30),c=n.n(i),l=n(3),u=n(6),o=n(7),s=n(10),p=n(8),f=n(11),d=n(4);function m(){var e=Object(l.a)(["\n  width: calc(70% - 20px);\n"]);return m=function(){return e},e}function b(){var e=Object(l.a)(["\n  width: 30%;\n"]);return b=function(){return e},e}function h(){var e=Object(l.a)(["\n  overflow: hidden;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 20px;\n\n  @media screen and (max-width: 767px) {\n    & > * {\n      width: 100% !important;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 20px calc(50% - 364px);\n  }\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px calc(50% - 492px);\n  }\n"]);return h=function(){return e},e}var j=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.sidebar,n=e.children;return a.a.createElement(g,null,a.a.createElement(O,null,t),a.a.createElement(v,null,n))}}]),t}(r.PureComponent),g=d.a.div(h()),O=d.a.aside(b()),v=d.a.main(m()),x=n(70),E=n(71);function w(){var e=Object(l.a)(["\n  width: 100%;\n  max-width: 180px;\n  border-radius: 10000px;\n  overflow: hidden;\n"]);return w=function(){return e},e}var y=d.a.img.attrs(function(e){return{src:e.url||"/profilepic.jpg"}})(w());function k(){var e=Object(l.a)(["\n  padding: 10px 16px;\n  display: inline-block;\n  margin: 4px;\n  border: 1px solid;\n  border-radius: 10000px;\n  cursor: pointer;\n  border-color: ",";\n"]);return k=function(){return e},e}var F=d.a.span(k(),function(e){return e.selected?"rgba(255, 255, 0, 1)":"rgba(0, 0, 0, 0.2)"}),C=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tags,n=e.actives,r=e.onSelect;return a.a.createElement(a.a.Fragment,null,t.map(function(e){return a.a.createElement(F,{key:e,selected:n.includes(e),onClick:function(){return r(e)}},e)}))}}]),t}(r.PureComponent),S=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.profile,n=t.description,r=t.pictureUrl,i=t.displayName,c=t.resume,l=e.filters,u=e.toggleFilter,o=Object(x.a)(Object(E.a)(c.map(function(e){return e.tags})));return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",null,a.a.createElement(y,{url:r}),a.a.createElement("h2",null,"Hello, my name is"),a.a.createElement("h1",null,i)),a.a.createElement("hr",null),a.a.createElement("p",null,n),a.a.createElement("hr",null),!!o.length&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Skills ",a.a.createElement("em",null,"(select to filter)")),a.a.createElement(C,{tags:o,actives:Array.from(l),onSelect:u})))}}]),t}(r.Component),D=n(67),P=n(68),L=n(69);function z(){var e=Object(l.a)(["\n  box-sizing: border-box;\n  padding: 10px 20px;\n  margin-bottom: 4%;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n"]);return z=function(){return e},e}var A=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.title,r=e.subtitle,i=e.startDate,c=e.endDate,l=e.description,u=e.tags;return a.a.createElement(J,null,a.a.createElement("h2",null,n," ",a.a.createElement("em",null,"".concat(i," ~ ").concat(c))),a.a.createElement("h3",null,r),a.a.createElement("p",null,l),u.map(function(e){return a.a.createElement(F,{key:"box-".concat(t,"-").concat(e)},e)}))}}]),t}(r.PureComponent),J=d.a.div(z());function B(){var e=Object(l.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  @media screen and (min-width: 768px) {\n    width: 48%;\n  }\n"]);return B=function(){return e},e}function H(){var e=Object(l.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  > h1 {\n    width: 100%;\n  }\n"]);return H=function(){return e},e}var I=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).extractData=function(e){var t=n.props.filters,r=[],i=Object(D.a)(e.filter(function(e){var n=e.tags,r=Array.from(t);return!r.length||Object(P.a)(n,r).length}),"category");return Object(L.a)(i,function(e,t){r.push(a.a.createElement(M,Object.assign({key:t},{title:t,items:e})))}),r},n}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.profile.resume;return this.extractData(e)}}]),t}(r.Component),M=function(e){var t=e.title,n=e.items;return a.a.createElement(N,null,a.a.createElement("h1",null,t),n.map(function(e){return a.a.createElement(U,{key:e.id},a.a.createElement(A,e))}))},N=d.a.div(H()),U=d.a.div(B()),q=n(53),G=Object(r.createContext)({profile:{},filters:new Set,toggleFilter:function(e){}}),K=G.Provider,Q=(G.Consumer,function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).toggleFilter=function(e){n.setState(function(t){var n=t.filters,r=new Set(n);return r.has(e)?r.delete(e):r.add(e),{filters:r}})},n.state={isLoading:!0,profile:{},filters:new Set},n}return Object(f.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("./profile.json").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({isLoading:!1,profile:t})})}},{key:"render",value:function(){var e=this.props.children,t=this.state,n=this.toggleFilter,r=Object(q.a)({},t,{toggleFilter:n});return a.a.createElement(K,{value:r},e(r))}}]),t}(r.Component));function R(){var e=Object(l.a)(["\n  font-size: 20px;\n  padding: 20px;\n  text-align: center;\n"]);return R=function(){return e},e}var T=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement(Q,null,function(e){var t=e.isLoading,n=e.profile,r=e.filters,i=e.toggleFilter;return t?a.a.createElement(V,null):a.a.createElement(j,{sidebar:a.a.createElement(S,{profile:n,filters:r,toggleFilter:i})},a.a.createElement(I,{profile:n,filters:r,toggleFilter:i}))})}}]),t}(r.PureComponent),V=d.a.h1.attrs(function(){return{children:"Loading..."}})(R()),W=document.getElementById("root");c.a.render(a.a.createElement(T,null),W)}},[[56,2,1]]]);
//# sourceMappingURL=main.ccca65e0.chunk.js.map