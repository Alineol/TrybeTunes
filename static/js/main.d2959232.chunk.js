(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{30:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(22),s=n.n(c),i=(n(30),n(14)),o=n(4),u=n(5),l=n(7),d=n(6),j=n(13),m=n(3),b=n(2),h=n.n(b),p=n(8),f="user",O=function(e){return localStorage.setItem(f,JSON.stringify(e))},x=function(e){return function(t){setTimeout((function(){t(e)}),1500)}},v=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(f));null===t&&(t={}),x(t)(e)}))},g=function(e){return new Promise((function(t){O(Object(i.a)(Object(i.a)({},{name:"",email:"",image:"",description:""}),e)),x("OK")(t)}))},k=function(e){return new Promise((function(t){O(Object(i.a)({},e)),x("OK")(t)}))},N=n(0),y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(N.jsx)("h1",{className:"Charging-messenger",children:"Carregando..."})}}]),n}(r.a.Component),C=n.p+"static/media/giphy.5bfa06c9.gif",w=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onChange=function(t){var n=t.target.value;e.setState({userName:n,disabled:e.checkName(n)})},e.checkName=function(e){return!(e.length>2)},e.onClick=function(){var t=Object(p.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.state.userName,e.setState({loading:!0}),t.next=5,g({name:a});case 5:e.setState({loading:!1,redirect:!0});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={userName:"",disabled:!0,loading:!1,redirect:!1},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.disabled,n=e.loading,a=e.redirect;return!1===n&&!1===a?Object(N.jsx)("div",{className:"login-pg","data-testid":"page-login",children:Object(N.jsxs)("form",{className:"loginPageForm",onSubmit:this.onClick,children:[Object(N.jsx)("h1",{className:"titleLogin",children:"TrybeTunes"}),Object(N.jsxs)("label",{htmlFor:"nameId",children:[Object(N.jsx)("input",{"data-testid":"login-name-input",type:"text",id:"nameId",onChange:this.onChange,placeholder:"insira um nome de usuario"}),Object(N.jsx)("button",{type:"submit","data-testid":"login-submit-button",disabled:t,children:"Entrar"})]}),Object(N.jsx)("img",{src:C,alt:"viol\xe3o",className:"musicImg"})]})}):!0===n?Object(N.jsx)(y,{}):!1===n&&!0===a?Object(N.jsx)(m.Redirect,{to:"/search"}):void 0}}]),n}(r.a.Component),I=w,S=(n(41),n.p+"static/media/simbolo.46343b8c.svg"),R=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onOpen=Object(p.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,v();case 3:return n=t.sent,e.setState({userName:n.name,loading:!1,getUserName:!0}),t.abrupt("return",n.name);case 6:case"end":return t.stop()}}),t)}))),e.state={loading:!1,getUserName:!1,userName:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.onOpen()}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.getUserName,a=e.userName;return!1===t&&!0===n?Object(N.jsxs)("header",{className:"header","data-testid":"header-component",children:[Object(N.jsxs)("div",{className:"title",children:["TrybeTunes",Object(N.jsx)("img",{src:S,alt:"simbolo musical"})]}),Object(N.jsxs)("div",{className:"name-links",children:[Object(N.jsx)("span",{className:"name","data-testid":"header-user-name",children:a}),Object(N.jsxs)("div",{className:"links",children:[Object(N.jsx)(j.b,{className:"link",to:"/search","data-testid":"link-to-search",children:"Pesquisar"}),Object(N.jsx)(j.b,{to:"/favorites","data-testid":"link-to-favorites",className:"link",children:"Favoritas"}),Object(N.jsx)(j.b,{to:"/profile","data-testid":"link-to-profile",className:"link",children:"Perfil"})]})]})]}):Object(N.jsx)(y,{})}}]),n}(r.a.Component),F=function(){var e=Object(p.a)(h.a.mark((function e(t){var n,a,r,c,s,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURI(t).replaceAll("%20","+"),a="https://itunes.apple.com/search?entity=album&term=".concat(n,"&attribute=allArtistTerm"),e.next=4,fetch(a);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,s=c.results,i=s.map((function(e){return{artistId:e.artistId,artistName:e.artistName,collectionId:e.collectionId,collectionName:e.collectionName,collectionPrice:e.collectionPrice,artworkUrl100:e.artworkUrl100,releaseDate:e.releaseDate,trackCount:e.trackCount}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=F,D=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onchange=function(t){var n=t.target.value;e.setState({searchInput:n,disabled:e.checkInput(n)})},e.checkInput=function(e){return!(e.length>1)},e.onClickButton=function(){var t=Object(p.a)(h.a.mark((function t(n){var a,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.state.searchInput,e.setState({searchName:a,loading:!0,searchInput:""}),t.next=5,P(a);case 5:(r=t.sent).length>0&&e.setState({loading:!1,searcResult:r}),0===r.length&&e.setState({loading:!1,resultNotFound:!0});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.checkResult=function(){var t=e.state,n=t.loading,a=t.resultNotFound;if(!1===n&&!0===a)return!0},e.results=function(){var t=e.state,n=t.searcResult,a=t.searchName;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("p",{className:"result-title",children:"Resultado de busca por: ".concat(a)}),Object(N.jsx)("div",{className:"albuns-div",children:n.map((function(e){return Object(N.jsx)(j.b,{className:"album-link","data-testid":"link-to-album-".concat(e.collectionId),to:"album/".concat(e.collectionId),children:Object(N.jsxs)("div",{className:"div-album",children:[Object(N.jsx)("img",{className:"albunsImg",src:e.artworkUrl100,alt:"Imagem do ".concat(e.collectionName)}),Object(N.jsx)("p",{className:"albunsName",children:"\xc1lbum: ".concat(e.collectionName)})]})},e.collectionId)}))})]})},e.state={disabled:!0,searchInput:"",loading:!1,searcResult:"",resultNotFound:0,searchName:""},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.disabled,n=e.searchInput,a=e.loading,r=e.searcResult,c=Object(N.jsx)("h1",{children:"Nenhum \xe1lbum foi encontrado"}),s=this.checkResult(),i=Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("form",{onSubmit:this.onClickButton,className:"search-form",children:Object(N.jsxs)("div",{children:[Object(N.jsx)("p",{className:"title-search",children:"Pesquisar"}),Object(N.jsx)("input",{type:"text","data-testid":"search-artist-input",onChange:this.onchange,value:n}),Object(N.jsx)("button",{"data-testid":"search-artist-button",type:"submit",disabled:t,children:"Ir"})]})}),Object(N.jsxs)("section",{className:"searchResult",children:[s&&c,r.length>0&&this.results()]})]});return Object(N.jsxs)("div",{"data-testid":"page-search",className:"search-page",children:[Object(N.jsx)(R,{}),a?Object(N.jsx)(y,{}):i]})}}]),n}(r.a.Component),U=n(18),L=function(){var e=Object(p.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=L,J=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.music,n=t.trackName,a=t.previewUrl,r=t.trackId,c=e.onClick,s=e.checked;return Object(N.jsxs)("div",{className:"musicDiv",children:[Object(N.jsx)("p",{children:n}),Object(N.jsxs)("label",{htmlFor:r,children:["Favoritar",Object(N.jsx)("input",{type:"checkbox","data-testid":"checkbox-music-".concat(r),id:r,onChange:c,checked:s})]}),Object(N.jsxs)("audio",{"data-testid":"audio-component",src:a,controls:!0,children:[Object(N.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento",Object(N.jsx)("code",{children:"audio"})]})]})}}]),n}(r.a.Component),M="favorite_songs";JSON.parse(localStorage.getItem(M))||localStorage.setItem(M,JSON.stringify([]));var A=function(){return JSON.parse(localStorage.getItem(M))},q=function(e){return localStorage.setItem(M,JSON.stringify(e))},E=function(e){return function(t){setTimeout((function(){t(e)}),500)}},G=function(){return new Promise((function(e){var t=A();E(t)(e)}))},K=function(e){return new Promise((function(t){if(e){var n=A();q([].concat(Object(U.a)(n),[e]))}E("OK")(t)}))},B=function(e){return new Promise((function(t){var n=A();q(n.filter((function(t){return t.trackId!==e.trackId}))),E("OK")(t)}))},_=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={album:void 0,musicsList:"",loading:!1,checked:[]},e.getList=function(){var t=Object(p.a)(h.a.mark((function t(n){var a,r,c,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G();case 2:return a=t.sent,r=a.map((function(e){return e.trackId})),t.next=6,T(n);case 6:return c=t.sent,s=c.filter((function(e){return"song"===e.kind})),e.setState({album:c[0],musicsList:s,checked:Object(U.a)(r)}),t.abrupt("return",a);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onCheck=function(){var t=Object(p.a)(h.a.mark((function t(n){var a,r,c,s,i,o,u,l;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.target,r=e.state,c=r.musicsList,s=r.checked,i=Number.parseInt(a.id,10),a.checked){t.next=12;break}return o=c.find((function(e){return e.trackId===i})),u=s.filter((function(e){return e!==i})),e.setState({checked:u,loading:!0}),t.next=9,B(o);case 9:e.setState({loading:!1}),t.next=17;break;case 12:return e.setState((function(e){return{checked:[].concat(Object(U.a)(e.checked),[i]),loading:!0}})),l=c.find((function(e){return e.trackId===i})),t.next=16,K(l);case 16:e.setState({loading:!1});case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.isCheked=function(e,t){return t.includes(e)},e.createCards=function(){var t=e.state,n=t.musicsList,a=t.checked;return Object(N.jsx)("section",{children:n.map((function(t){return Object(N.jsx)(J,{music:t,musics:n,onClick:e.onCheck,checked:e.isCheked(t.trackId,a)},t.trackName)}))})},e.renderPage=function(){var t=e.state,n=t.album,a=t.loading,r=n.artistName,c=n.artworkUrl100,s=n.collectionName;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:"musics",children:Object(N.jsx)("div",{className:"musicsList",children:a?Object(N.jsx)(y,{}):e.createCards()})}),Object(N.jsxs)("div",{className:"album-info",children:[Object(N.jsx)("p",{"data-testid":"album-name",children:s}),Object(N.jsx)("p",{"data-testid":"artist-name",children:r}),Object(N.jsx)("img",{className:"album-img",src:c,alt:"imagem do album"})]})]})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.getList(e)}},{key:"render",value:function(){var e=this.state.album;return Object(N.jsxs)("div",{"data-testid":"page-album",children:[Object(N.jsx)(R,{}),Object(N.jsx)("section",{className:"musics-album",children:e?this.renderPage():Object(N.jsx)(y,{})})]})}}]),n}(r.a.Component),z=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0,favorites:[]},e.getList=Object(p.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G();case 2:n=t.sent,e.setState({loading:!1,favorites:n});case 4:case"end":return t.stop()}}),t)}))),e.onCheck=function(){var t=Object(p.a)(h.a.mark((function t(n){var a,r,c,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.target,r=e.state.favorites,c=Number.parseInt(a.id,10),s=r.find((function(e){return e.trackId===c})),e.setState({loading:!0}),t.next=7,B(s);case 7:return t.next=9,e.getList();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getList()}},{key:"toRender",value:function(){var e=this,t=this.state.favorites;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:"musics",children:Object(N.jsx)("section",{className:"musicsList",children:t.map((function(t){return Object(N.jsx)(J,{music:t,onClick:e.onCheck,checked:true},t.trackName)}))})}),Object(N.jsx)("span",{className:"favorits-text",children:"Minhas musicas favoritas"})]})}},{key:"render",value:function(){var e=this.state.loading;return Object(N.jsxs)("div",{"data-testid":"page-favorites",className:"page-favorites",children:[Object(N.jsx)(R,{}),Object(N.jsx)("section",{className:"favorites-sec",children:e?Object(N.jsx)(y,{}):this.toRender()})]})}}]),n}(r.a.Component),H=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:[],loading:!0},e.callGetUser=Object(p.a)(h.a.mark((function t(){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:n=t.sent,e.setState({user:n,loading:!1});case 4:case"end":return t.stop()}}),t)}))),e.toRender=function(){var t=e.state.user,n=t.description,a=t.email,r=t.image,c=t.name;return Object(N.jsxs)("section",{className:"user-sec",children:[Object(N.jsxs)("div",{className:"user-img-div",children:[Object(N.jsx)("img",{src:r,alt:"Imagem do usuario","data-testid":"profile-image",className:"user-img"}),Object(N.jsx)(j.b,{to:"/profile/edit",children:Object(N.jsx)("button",{type:"button",children:"Editar perfil"})})]}),Object(N.jsx)("p",{children:"Nome: ".concat(c)}),Object(N.jsx)("p",{children:"Email: ".concat(a)}),Object(N.jsx)("p",{children:"Descri\xe7\xe3o: ".concat(n)}),Object(N.jsx)("div",{})]})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.callGetUser()}},{key:"render",value:function(){var e=this.state.loading;return Object(N.jsxs)("div",{"data-testid":"page-profile",children:[Object(N.jsx)(R,{}),Object(N.jsx)("div",{className:"user-info",children:e?Object(N.jsx)(y,{}):this.toRender()})]})}}]),n}(r.a.Component),Q=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(N.jsx)("div",{"data-testid":"page-not-found",children:"NotFoundpage"})}}]),n}(r.a.Component),V=n(19),W=n(25),X=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loading:!0,redirect:!1},e.callGetUser=Object(p.a)(h.a.mark((function t(){var n,a,r,c,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:n=t.sent,a=n.description,r=n.email,c=n.image,s=n.name,e.setState({loading:!1,name:s,description:a,email:r,image:c});case 5:case"end":return t.stop()}}),t)}))),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(V.a)({},a,r))},e.checkform=function(){var t=e.state,n=t.description,a=t.email,r=t.image,c=t.name;return!(n&&a&&r&&c)},e.onClickSave=function(){var t=Object(p.a)(h.a.mark((function t(n){var a,r,c,s,i,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.state,r=a.description,c=a.email,s=a.image,i=a.name,o={name:i,email:c,image:s,description:r},e.setState({loading:!0}),t.next=6,k(o);case 6:e.setState({loading:!1,redirect:!0});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.toRender=function(){var t=e.state,n=t.description,a=t.email,r=t.image,c=t.name,s=t.redirect;return Object(N.jsxs)("section",{className:"user-sec-form",children:[Object(N.jsxs)("form",{className:"form-edit",children:[Object(N.jsxs)("label",{htmlFor:"name-input",children:[Object(N.jsx)("p",{children:"Nome: "}),Object(N.jsx)("input",{name:"name",type:"text","data-testid":"edit-input-name",required:!0,id:"name-input",value:c,onChange:e.handleChange})]}),Object(N.jsxs)("label",{htmlFor:"email-input",children:[Object(N.jsx)("p",{children:"Email: "}),Object(N.jsx)("input",{name:"email",type:"email","data-testid":"edit-input-email",required:!0,id:"email-input",onChange:e.handleChange,value:a})]}),Object(N.jsxs)("label",{htmlFor:"description",children:[Object(N.jsx)("p",{children:"Descri\xe7\xe3o:"}),Object(N.jsx)("textarea",{name:"description","data-testid":"edit-input-description",id:"description",onChange:e.handleChange,value:n})]}),Object(N.jsxs)("label",{htmlFor:"image-input",children:[Object(N.jsx)("p",{children:"Imagem:"}),Object(N.jsx)("input",{name:"image",type:"text","data-testid":"edit-input-image",required:!0,id:'"image-input"',onChange:e.handleChange,value:r,placeholder:"insira o link"})]}),Object(N.jsx)("button",{type:"button","data-testid":"edit-button-save",disabled:e.checkform(),onClick:e.onClickSave,children:"Salvar"})]}),s?Object(N.jsx)(W.Redirect,{to:"/profile"}):null]})},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.callGetUser()}},{key:"render",value:function(){var e=this.state.loading;return Object(N.jsxs)("div",{"data-testid":"page-profile-edit",children:[Object(N.jsx)(R,{}),e?Object(N.jsx)(y,{}):this.toRender()]})}}]),n}(r.a.Component),Y=(n(42),n.p+"static/media/backImg.e3b00fc7.png"),Z=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(N.jsxs)(j.a,{basename:"/TrybeTunes",children:[Object(N.jsxs)(m.Switch,{children:[Object(N.jsx)(m.Route,{exact:!0,path:"/",component:function(e){return Object(N.jsx)(I,Object(i.a)({},e))}}),Object(N.jsx)(m.Route,{path:"/search",component:function(){return Object(N.jsx)(D,{})}}),Object(N.jsx)(m.Route,{path:"/album/:id",component:function(e){return Object(N.jsx)(_,Object(i.a)({},e))}}),Object(N.jsx)(m.Route,{path:"/favorites",component:function(){return Object(N.jsx)(z,{})}}),Object(N.jsx)(m.Route,{exact:!0,path:"/profile",component:function(){return Object(N.jsx)(H,{})}}),Object(N.jsx)(m.Route,{exact:!0,path:"/profile/edit",component:function(){return Object(N.jsx)(X,{})}}),Object(N.jsx)(m.Route,{exact:!0,path:"*",component:function(){return Object(N.jsx)(Q,{})}})]}),Object(N.jsx)("img",{src:Y,alt:"imagem de fundo",className:"handsImg"})]})}}]),n}(r.a.Component),$=Z;s.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)($,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.d2959232.chunk.js.map