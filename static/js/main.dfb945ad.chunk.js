(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,n){e.exports=n(213)},203:function(e,t,n){},213:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(54),c=n.n(i),l=n(109),o=n(64),u=n(10),s=n(9),p=n(1),d=n(2),f=n(6),m=n(4),b=n(5);function h(){var e=Object(s.a)(["\n  width: calc(70% - 20px);\n"]);return h=function(){return e},e}function g(){var e=Object(s.a)(["\n  width: 30%;\n"]);return g=function(){return e},e}function j(){var e=Object(s.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 20px;\n\n  @media screen and (max-width: 767px) {\n    & > * {\n      width: 100% !important;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 20px calc(50% - 364px);\n  }\n\n  @media screen and (min-width: 1024px) {\n    padding: 20px calc(50% - 492px);\n  }\n"]);return j=function(){return e},e}var O=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.sidebar,n=e.children;return a.a.createElement(v,null,a.a.createElement(y,null,t),a.a.createElement(x,null,n))}}]),t}(r.PureComponent),v=u.b.div(j()),y=u.b.aside(g()),x=u.b.main(h()),E=n(219),w=n(220);function k(){var e=Object(s.a)(["\n  width: 100%;\n  max-width: 180px;\n  border-radius: 10000px;\n  overflow: hidden;\n"]);return k=function(){return e},e}var D=u.b.img.attrs(function(e){return{src:e.url||"/profilepic.jpg"}})(k());function C(){var e=Object(s.a)(["\n  padding: 10px 16px;\n  display: inline-block;\n  margin: 0 8px 8px 0;\n  border: 1px solid;\n  border-radius: 10000px;\n  cursor: pointer;\n  border-color: ",";\n  color: ",";\n\n  &.small {\n    padding: 0;\n    cursor: default;\n    border: 0;\n    font-size: 0.8em;\n  }\n"]);return C=function(){return e},e}var F=u.b.span.attrs(function(e){return{highlightColor:e.theme.primary}})(C(),function(e){var t=e.selected,n=e.highlightColor;return t?n:"rgba(0, 0, 0, 0.2)"},function(e){var t=e.selected,n=e.highlightColor;return t?n:"rgba(0, 0, 0, 1)"}),S=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tags,n=e.actives,r=e.onSelect;return a.a.createElement(a.a.Fragment,null,t.map(function(e){return a.a.createElement(F,{key:e,selected:n.includes(e),onClick:function(){return r(e)}},e)}))}}]),t}(r.PureComponent),L=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.profile,n=t.description,r=t.pictureUrl,i=t.displayName,c=t.posts,l=e.filters,o=e.toggleFilter,u=Object(E.a)(Object(w.a)(c.map(function(e){return e.tags||[]})));return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",null,a.a.createElement(D,{url:r}),a.a.createElement("h2",null,"Hello, my name is"),a.a.createElement("h1",null,i)),a.a.createElement("hr",null),a.a.createElement("p",null,n),a.a.createElement("hr",null),!!u.length&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Skills ",a.a.createElement("em",null,"(select to filter)")),a.a.createElement(S,{tags:u,actives:Array.from(l),onSelect:o})))}}]),t}(r.Component),P=n(216),z=n(217),A=n(218),N=n(100),q=n.n(N);function I(){var e=Object(s.a)(["\n  box-sizing: border-box;\n  padding: 10px 20px;\n  margin-bottom: 4%;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n\n  & > h2 {\n    font-weight: 500;\n    margin: 0;\n  }\n  & > h3 {\n    margin-top: 0.5em;\n  }\n"]);return I=function(){return e},e}var J=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.title,r=e.subtitle,i=e.startDate,c=e.endDate,l=e.description,o=e.tags;return a.a.createElement(U,null,a.a.createElement("h2",null,a.a.createElement("em",null,"".concat(i," ~ ").concat(c)),n),a.a.createElement("h3",null,r),a.a.createElement(q.a,{source:l}),(o||[]).map(function(e){return a.a.createElement(F,{className:"small",key:"box-".concat(t,"-").concat(e)},e)}))}}]),t}(r.PureComponent),U=u.b.div(I());function B(){var e=Object(s.a)(["\n  box-sizing: border-box;\n  width: 100%;\n  @media screen and (min-width: 768px) {\n    width: 48%;\n  }\n"]);return B=function(){return e},e}function H(){var e=Object(s.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  & > h1 {\n    width: 100%;\n  }\n"]);return H=function(){return e},e}var Q=function(e){function t(){var e,n;Object(p.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).extractData=function(e){var t=n.props.filters,r=[],i=Object(P.a)(e.filter(function(e){var n=e.tags,r=Array.from(t);return!r.length||Object(z.a)(n,r).length}),"category");return Object(A.a)(i,function(e,t){r.push(a.a.createElement(G,Object.assign({key:t},{title:t,items:e})))}),r},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.profile.posts;return this.extractData(e)}}]),t}(r.Component),G=function(e){var t=e.title,n=e.items;return a.a.createElement(K,null,a.a.createElement("h1",{className:"sticky"},t),n.map(function(e,t){return a.a.createElement(M,{key:e.id},a.a.createElement(J,e))}))},K=u.b.div(H()),M=u.b.div(B()),R=n(80),T=n(81),V=n(50),W=n.n(V),X=n(108);function Y(){var e=Object(s.a)(['\n{\n  profile(id: "','") {\n    name\n    description\n    email\n    picture {\n      url\n    }\n    posts(sort: "startDate:desc") {\n      title\n      subtitle\n      startDate\n      endDate\n      current\n      description\n      category {\n        title\n      }\n      tags {\n        title\n      }\n    }\n  }\n}\n']);return Y=function(){return e},e}var Z=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(f.a)(this,Object(m.a)(t).call(this,e))).toggleFilter=function(e){n.setState(function(t){var n=t.filters,r=new Set(n);return r.has(e)?r.delete(e):r.add(e),{filters:r}})},n.state={filters:new Set},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.children,t=this.state.filters,n=this.toggleFilter;return a.a.createElement(o.Query,{query:ee("5c221ae2a498830017416c75")},function(r){var i=r.loading,c=r.error,l=r.data;if(c)return console.log(c),a.a.createElement("h1",null,"Sorry, can't get my infos right now...");var o=$(l.profile);return e({isLoading:i,error:c,profile:o,filters:t,toggleFilter:n})})}}]),t}(r.Component),$=function(e){if(!e)return{};var t=e.picture.url,n=e.posts,r=e.name,a=Object(T.a)(e,["picture","posts","name"]);return Object(R.a)({},a,{displayName:r,pictureUrl:t,posts:n.map(function(e){var t=e.category.title,n=e.startDate,r=e.endDate,a=e.current,i=e.tags,c=Object(T.a)(e,["category","startDate","endDate","current","tags"]);return Object(R.a)({},c,{endDate:a?"onwards":_(r),startDate:_(n),category:t,tags:i.map(function(e){return e.title})})})})},_=function(e){return X.a.fromISO(e).setLocale("en").toLocaleString({month:"long",year:"numeric"})},ee=function(e){return W()(Y(),e)};function te(){var e=Object(s.a)(["\n  font-size: 20px;\n  padding: 20px;\n  text-align: center;\n"]);return te=function(){return e},e}var ne=function(e){function t(){return Object(p.a)(this,t),Object(f.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return a.a.createElement(Z,null,function(e){var t=e.isLoading,n=e.profile,r=e.filters,i=e.toggleFilter;return t?a.a.createElement(re,null):a.a.createElement(O,{sidebar:a.a.createElement(L,{profile:n,filters:r,toggleFilter:i})},a.a.createElement(Q,{profile:n,filters:r,toggleFilter:i}))})}}]),t}(r.PureComponent),re=u.b.h1.attrs(function(){return{children:"Loading..."}})(te()),ae=(n(203),new l.a({uri:"https://resumes-api.herokuapp.com/graphql"})),ie=document.getElementById("root");c.a.render(a.a.createElement(o.ApolloProvider,{client:ae},a.a.createElement(u.a,{theme:{primary:"rgb(255, 150, 0)",secondary:"rgb(100, 50, 190)"}},a.a.createElement(ne,null))),ie)}},[[113,2,1]]]);
//# sourceMappingURL=main.dfb945ad.chunk.js.map