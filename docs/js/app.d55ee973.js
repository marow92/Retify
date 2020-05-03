(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2cb0":function(t,e,n){},"477b":function(t,e,n){},"4cc9":function(t,e,n){"use strict";var r=n("84cb"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticStyle:{"background-color":"#e8f1f7"}},[n("loading-overlay"),n("notification-component"),t.isLogged?n("navigation-bar"):t._e(),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}})])]),n("router-view")],1)],1)},i=[],o=n("5530"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-overlay",{attrs:{value:t.isLoading}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)},c=[],l=n("2f62"),u={computed:Object(o["a"])({},Object(l["b"])("commonStore",["isLoading"]))},d=u,p=n("0c7c"),f=Object(p["a"])(d,s,c,!1,null,null,null),m=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isVisible?n("v-alert",{staticClass:"notification",attrs:{type:t.type,dismissible:"",transition:"slide-y-transition"}},[t._v(" "+t._s(t.message)+" ")]):t._e()},g=[],h={computed:Object(o["a"])({},Object(l["b"])("notificationStore",["message","type","isVisible"]))},b=h,y=(n("8f47"),Object(p["a"])(b,v,g,!1,null,null,null)),w=y.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:"",permanent:"",width:"200","hide-overlay":"",persistent:"",clipped:"",color:t.color,"expand-on-hover":t.expandOnHover,src:t.bg,absolute:"",dark:""}},[n("button",{on:{click:t.loginWithSpotify}},[t._v(" LOGIN WITH SPOTIFY ")]),n("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[n("v-list-item",{class:t.miniVariant&&"px-0",attrs:{"two-line":""}},[n("v-list-item-avatar",[n("img",{attrs:{src:"https://randomuser.me/api/portraits/men/81.jpg"}})]),n("v-list-item-content",[n("v-list-item-title",[t._v("Zalogowano")]),n("v-list-item-subtitle",[t._v(t._s(t.username))])],1)],1),n("v-divider"),t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{link:"",to:e.to}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)}))],2)],1)},_=[],S=(n("d3b7"),n("96cf"),n("1da1")),k=function(){return{isLogged:!1,username:""}},O={namespaced:!0,state:k(),mutations:{setIsLogged:function(t,e){t.isLogged=e.isLogged},setUsername:function(t,e){t.username=e.username}},actions:{login:function(t,e){var n=t.commit;n("setIsLogged",{isLogged:!0}),n("setUsername",{username:e})},logout:function(t){var e=t.commit;e("setIsLogged",{isLogged:!1}),e("setUsername",{username:""})}}},x=(n("c975"),n("07ac"),{ERROR:"error",WARNING:"warning",INFO:"info",SUCCESS:"success"}),j=function(){return{message:"",type:"",isVisible:!1}},R={namespaced:!0,state:j(),mutations:{setMessage:function(t,e){t.message=e.message},setType:function(t,e){-1===Object.values(x).indexOf(e.type)?t.type=x.INFO:t.type=e.type},hideNotification:function(t){t.isVisible=!1},showNotification:function(t){t.isVisible=!0}},actions:{showNotification:function(t,e){var n=t.commit,r=e.message,a=e.type;n("setMessage",{message:r}),n("setType",{type:a}),n("showNotification"),setTimeout((function(){return n("hideNotification")}),5e3)}}},L=function(){return{isLoading:!1}},T={namespaced:!0,state:L(),mutations:{setIsLoading:function(t,e){t.isLoading=e.isLoading}},actions:{showLoading:function(t){var e=t.commit;e("setIsLoading",{isLoading:!0})},hideLoading:function(t){var e=t.commit;e("setIsLoading",{isLoading:!1})}}},M=n("0e44");r["default"].use(l["a"]);var E=new l["a"].Store({plugins:[Object(M["a"])()],modules:{authenticationStore:O,notificationStore:R,commonStore:T}}),I=n("8c4f"),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dash"},[n("v-row",[n("Card",{staticClass:"friendsCard",attrs:{cardTitle:t.titles.friends}},[n("FriendList",{attrs:{friends:t.friends,onFriend:t.onFriend,onMoreFriends:t.onMoreFriends}})],1),n("Card",{staticClass:"card",attrs:{cardTitle:t.titles.rateSongs}},[n("RateSongList",{attrs:{songs:t.songs,onSongRated:t.onSongRated,onMoreSongs:t.onMoreSongs}})],1)],1)],1)},A=[],N=(n("d81d"),n("fb6a"),n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",[t._l(t.friends,(function(t,e){return n("v-list-item",{key:e},[n("FriendItem",{attrs:{friend:t}})],1)})),n("v-list-item",[n("MoreButton",{attrs:{title:t.titles.more,onClick:t.onMoreFriends}})],1)],2)}),$=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("v-card",{staticClass:"ml-8",attrs:{elevation:r?8:2}},[n("div",{staticClass:"cardTitle"},[t._v(t._s(t.cardTitle))]),n("v-divider"),n("div",{staticClass:"cardContent"},[t._t("default")],2)],1)]}}],null,!0)})},B=[],z={props:{cardTitle:String}},W=z,H=Object(p["a"])(W,F,B,!1,null,null,null),G=H.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"more"},[n("div",{staticClass:"button-title",on:{click:t.onClick}},[t._v(" "+t._s(t.title)+" ")])])},Z=[],D={props:{title:String,onClick:Function}},V=D,Y=(n("b6ad"),Object(p["a"])(V,U,Z,!1,null,null,null)),K=Y.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"friend"},[n("v-list-item-avatar",[n("v-img",{attrs:{src:t.friend.avatar}})],1),n("v-list-item-content",{staticClass:"text-left"},[n("v-list-item-title",{domProps:{innerHTML:t._s(t.friend.name)}}),t.friend.nowListening?n("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.musicNote+t.friend.nowListening)}}):t._e()],1)],1)},q=[],Q={props:{friend:Object},data:function(){return{musicNote:"♫ "}}},X=Q,tt=Object(p["a"])(X,J,q,!1,null,null,null),et=tt.exports,nt={components:{FriendItem:et,MoreButton:K},props:{friends:Array,onMoreFriends:Function},data:function(){return{titles:{more:"Zobacz więcej"}}}},rt=nt,at=Object(p["a"])(rt,N,$,!1,null,null,null),it=at.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",[t._l(t.songs,(function(t,e){return n("v-list-item",{key:e},[n("RateSong",{attrs:{song:t}})],1)})),n("v-list-item",[n("MoreButton",{attrs:{title:t.titles.more,onClick:t.onMoreSongs}})],1)],2)},st=[],ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rateSongItem"},[n("v-list-item-avatar",[n("v-icon",[t._v("$vuetify.icons.song")])],1),n("v-list-item-content",{staticClass:"text-left"},[n("v-list-item-title",{domProps:{innerHTML:t._s(t.song.title)},on:{click:t.onTitleClick}}),n("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.song.author)},on:{click:t.onAuthorClick}})],1),n("div",[n("v-rating",{attrs:{length:5,"empty-icon":"mdi-heart-outline","full-icon":"mdi-heart","half-icon":"mdi-heart-half-full","half-increments":!0,hover:!0,readonly:!1,size:15,dense:!1,color:"red lighten-1","background-color":"red lighten-3"},on:{input:t.onRate},model:{value:t.rate,callback:function(e){t.rate=e},expression:"rate"}})],1)],1)},lt=[],ut=(n("99af"),n("bc3a")),dt=n.n(ut),pt="http://localhost:8000";function ft(t,e){return mt.apply(this,arguments)}function mt(){return mt=Object(S["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:dt()("".concat(pt,"/api/retify/rate/song"),{method:"PUT",data:{songId:e,rate:n},withCredentials:!0}).then((function(t){}));case 1:case"end":return t.stop()}}),t)}))),mt.apply(this,arguments)}var vt="http://localhost:8000";function gt(){return ht.apply(this,arguments)}function ht(){return ht=Object(S["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",dt()("".concat(vt,"/api/spotify/me/recently-played"),{method:"GET",withCredentials:!0}).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)}))),ht.apply(this,arguments)}var bt={props:{song:Object},data:function(){return{rate:null}},created:function(){return Object(S["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{onRate:function(t){var e=this;return Object(S["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:ft(e.song.id,t);case 1:case"end":return n.stop()}}),n)})))()},onAuthorClick:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:window.open("https://open.spotify.com/artist/".concat(t.song.authorId));case 1:case"end":return e.stop()}}),e)})))()},onTitleClick:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:window.open("https://open.spotify.com/track/".concat(t.song.id));case 1:case"end":return e.stop()}}),e)})))()}}},yt=bt,wt=Object(p["a"])(yt,ct,lt,!1,null,null,null),Ct=wt.exports,_t={components:{RateSong:Ct,MoreButton:K},props:{songs:Array,onMoreSongs:Function},data:function(){return{titles:{more:"Zobacz więcej"}}}},St=_t,kt=Object(p["a"])(St,ot,st,!1,null,null,null),Ot=kt.exports,xt=[{name:"Anna Śmigła",avatar:"https://cutt.ly/ut1Cf40",nowListening:"Ave Maria",id:"11"},{name:"Jan Kowalski",avatar:"https://cutt.ly/Et1CbH6",nowListening:"Takiego Janicka",id:"22"},{name:"Ryszard Kot",avatar:"https://cutt.ly/Ct1CmpN",id:"33"},{name:"Zofia Król",avatar:"https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg",id:"33"},{name:"Bernardetta Szczypta",avatar:"https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Headshot-Photography-London-1052.jpeg?fit=750%2C500&ssl=1",id:"33"}],jt=xt;function Rt(){return Lt.apply(this,arguments)}function Lt(){return Lt=Object(S["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,gt();case 2:return e=t.sent.items,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)}))),Lt.apply(this,arguments)}var Tt={components:{FriendList:it,RateSongList:Ot,Card:G,MoreButton:K},data:function(){return{titles:{friends:"Przyjaciele",rateSongs:"Oceń piosenki",more:"Zobacz więcej"},friends:jt,songs:[],avatar:!0,flat:!0,twoLine:!0,musicNote:"♫ ",moreTitle:"Zobacz więcej",moreIcon:"$vuetify.icons.more"}},computed:{last3Friends:function(){return this.friends.slice(0,3)}},created:function(){var t=this;return Object(S["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Rt();case 2:n=e.sent,t.songs=n.map((function(t){return{id:t.track.id,title:t.track.name,author:t.track.artists[0].name,authorId:t.track.artists[0].id,rate:0}}));case 4:case"end":return e.stop()}}),e)})))()},mounted:function(){},methods:{onMoreFriends:function(){},onMoreSongs:function(){},onSongRated:function(){},onFriend:function(){}}},Mt=Tt,Et=(n("caf5"),Object(p["a"])(Mt,P,A,!1,null,null,null)),It=Et.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("v-row",[n("Card",{staticClass:"card",attrs:{cardTitle:t.titles.topSongs}},[n("TopSongList",{attrs:{songs:t.topSongs}})],1),n("Card",{staticClass:"card",attrs:{cardTitle:t.titles.topArtists}},[n("TopArtistList",{attrs:{artists:t.topArtists}})],1)],1)],1)},At=[],Nt=[{title:"Tytuł 1",artist:"artist 1",average:4.5,ratesCount:123},{title:"Tytuł 2",artist:"artist 2",average:5,ratesCount:13},{title:"Tytuł 3",artist:"artist 3",average:5,ratesCount:789},{title:"Tytuł 4",artist:"artist 4",average:4,ratesCount:254},{title:"Tytuł 5",artist:"artist 5",average:4,ratesCount:13},{title:"Tytuł 6",artist:"artist 6",average:3.5,ratesCount:12673},{title:"Tytuł 7",artist:"artist 7",average:4,ratesCount:1323},{title:"Tytuł 8",artist:"artist 8",average:4,ratesCount:123},{title:"Tytuł 9",artist:"artist 9",average:4.5,ratesCount:463},{title:"Tytuł 10",artist:"artist 10",average:5,ratesCount:234}],$t=[{artist:"artist 1",average:4.5,ratesCount:123},{artist:"artist 2",average:5,ratesCount:13},{artist:"artist 3",average:5,ratesCount:789},{artist:"artist 4",average:4,ratesCount:254},{artist:"artist 5",average:4,ratesCount:13},{artist:"artist 6",average:3.5,ratesCount:12673},{artist:"artist 7",average:4,ratesCount:1323},{artist:"artist 8",average:4,ratesCount:123},{artist:"artist 9",average:4.5,ratesCount:463},{artist:"artist 10",average:5,ratesCount:234}],Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{attrs:{flat:t.flat,avatar:t.avatar}},[t._l(t.songs,(function(t,e){return n("v-list-item",{key:e},[n("TopSongItem",{attrs:{topSong:t}})],1)})),n("v-list-item",[n("MoreButton",{attrs:{title:t.titles.more,onClick:""}})],1)],2)},Bt=[],zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topItem",on:{click:t.onClick}},[n("v-list-item-avatar",[n("v-icon",{attrs:{color:"blue",large:""}},[t._v("$vuetify.icons.song")])],1),n("v-list-item-content",{staticClass:"text-left"},[n("v-list-item-title",{domProps:{innerHTML:t._s(t.topSong.title)}}),n("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.topSong.artist)}}),n("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.ratesCountPrintable)}})],1),n("v-rating",{attrs:{length:5,"empty-icon":"mdi-heart-outline","full-icon":"mdi-heart","half-icon":"mdi-heart-half-full","half-increments":!0,hover:!1,readonly:!0,size:12,dense:!1,color:"red lighten-1","background-color":"red lighten-3"},model:{value:t.topSong.average,callback:function(e){t.$set(t.topSong,"average",e)},expression:"topSong.average"}})],1)},Wt=[],Ht={props:{topSong:Object},data:function(){return{}},computed:{ratesCountPrintable:function(){return"ilość ocen: ".concat(this.topSong.ratesCount)}},methods:{onClick:function(){}}},Gt=Ht,Ut=Object(p["a"])(Gt,zt,Wt,!1,null,null,null),Zt=Ut.exports,Dt={props:{songs:Array},data:function(){return{titles:{more:"Zobacz więcej"}}},components:{TopSongItem:Zt,MoreButton:K}},Vt=Dt,Yt=Object(p["a"])(Vt,Ft,Bt,!1,null,null,null),Kt=Yt.exports,Jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{attrs:{flat:t.flat,avatar:t.avatar}},[t._l(t.artists,(function(t,e){return n("v-list-item",{key:e},[n("TopArtistItem",{attrs:{artist:t}})],1)})),n("v-list-item",[n("MoreButton",{attrs:{title:t.titles.more,onClick:""}})],1)],2)},qt=[],Qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topItem",on:{click:t.onClick}},[n("v-list-item-avatar",[n("v-icon",{attrs:{color:"blue",large:""}},[t._v("$vuetify.icons.account")])],1),n("v-list-item-content",{staticClass:"text-left"},[n("v-list-item-title",{domProps:{innerHTML:t._s(t.artist.artist)}}),n("v-list-item-subtitle",{domProps:{innerHTML:t._s(t.ratesCountPrintable)}})],1),n("v-rating",{attrs:{length:5,"empty-icon":"mdi-heart-outline","full-icon":"mdi-heart","half-icon":"mdi-heart-half-full","half-increments":!0,hover:!1,readonly:!0,size:12,dense:!1,color:"red lighten-1","background-color":"red lighten-3"},model:{value:t.artist.average,callback:function(e){t.$set(t.artist,"average",e)},expression:"artist.average"}})],1)},Xt=[],te={props:{artist:Object},data:function(){return{}},computed:{ratesCountPrintable:function(){return"ilość ocen: ".concat(this.artist.ratesCount)}},methods:{onClick:function(){}}},ee=te,ne=Object(p["a"])(ee,Qt,Xt,!1,null,null,null),re=ne.exports,ae={props:{artists:Array},data:function(){return{titles:{more:"Zobacz więcej"}}},components:{TopArtistItem:re,MoreButton:K}},ie=ae,oe=Object(p["a"])(ie,Jt,qt,!1,null,null,null),se=oe.exports,ce={data:function(){return{topSongs:Nt,topArtists:$t,titles:{topSongs:"Top 50 piosenek",topArtists:"Top 50 artystów"}}},computed:{},methods:{},components:{Card:G,MoreButton:K,TopSongList:Kt,TopArtistList:se}},le=ce,ue=(n("74f0"),Object(p["a"])(le,Pt,At,!1,null,null,null)),de=ue.exports,pe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loginCon"},[n("div",{staticStyle:{display:"flex",flex:"1"}},[n("div",{staticClass:"image"}),n("div",{staticClass:"login"},[n("v-col",{attrs:{"offset-md":"1"}},[n("div",{staticClass:"header"},[t._v(t._s(t.printables.WELCOME))]),n("v-card",{staticClass:"elevation-12",attrs:{width:"90%",height:"45%"}},[n("v-toolbar",{attrs:{color:t.primaryColor,dark:"",flat:""}},[n("v-toolbar-title",[t._v(t._s(t.printables.SIGN_IN))])],1),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{label:t.printables.LOGIN,name:"login",type:"text"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onLogin(e)}},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}}),n("v-text-field",{attrs:{id:"password",label:t.printables.PASSWORD,name:"password",type:"password"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onLogin(e)}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1)],1),n("v-card-actions",[n("v-row",{attrs:{cols:"12",align:"center"}},[n("v-col",{attrs:{md:"1"}}),n("v-col",{attrs:{md:"6","align-self":"center"}},[n("v-spacer",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.rememberMe,expression:"rememberMe"}],staticStyle:{margin:"1%"},attrs:{type:"checkbox",id:"remember-me"},domProps:{checked:Array.isArray(t.rememberMe)?t._i(t.rememberMe,null)>-1:t.rememberMe},on:{change:function(e){var n=t.rememberMe,r=e.target,a=!!r.checked;if(Array.isArray(n)){var i=null,o=t._i(n,i);r.checked?o<0&&(t.rememberMe=n.concat([i])):o>-1&&(t.rememberMe=n.slice(0,o).concat(n.slice(o+1)))}else t.rememberMe=a}}}),n("label",{attrs:{for:"remember-me"}}),n("span",{staticStyle:{"padding-left":"2%"}},[t._v(t._s(t.printables.REMEMBER))])])],1),n("v-col",{attrs:{md:"5"}},[n("v-btn",{attrs:{outlined:"","x-large":"",rounded:"",color:t.primaryColor},on:{click:t.onLogin}},[t._v(t._s(t.printables.LOGIN_BUTTON))])],1)],1)],1)],1),n("div",{staticClass:"buttons"},[n("div",{staticClass:"button"},[n("v-btn",{staticClass:"white--text",attrs:{"x-large":"",rounded:"",depressed:"",color:t.primaryColor},on:{click:t.onRegister}},[t._v(t._s(t.printables.SIGN_UP))])],1),n("div",[n("v-btn",{staticClass:"white--text",attrs:{"x-large":"",rounded:"",medium:"",depressed:"",color:t.primaryColor},on:{click:t.onLoginWithSpotify}},[t._v(t._s(t.printables.SIGN_UP_SPOTIFY))])],1)]),n("v-row",{attrs:{cols:"1"}},[n("v-col",{staticStyle:{"font-size":"20px",margin:"2%"}},[n("a",{attrs:{href:""}},[t._v(t._s(t.printables.FORGOT_PASSWORD))])])],1)],1)],1)])])},fe=[],me={data:function(){return{rememberMe:!1,primaryColor:"#5e81f7",form:{username:"",password:""},printables:{WELCOME:"Witaj w Retify!",SIGN_IN:"Zaloguj się",LOGIN:"Login",PASSWORD:"Hasło",REMEMBER:"Pamiętaj mnie",LOGIN_BUTTON:"Zaloguj",SIGN_UP:"Zarejestruj się",SIGN_UP_SPOTIFY:"Zaloguj się ze Spotify",FORGOT_PASSWORD:"Zapomniałeś hasła?"}}},methods:{onLogin:function(){Ke(this.form.username,this.form.password)},onLoginWithSpotify:function(){qe()},onRegister:function(){this.$router.push("register")}}},ve=me,ge=(n("6162"),Object(p["a"])(ve,pe,fe,!1,null,null,null)),he=ge.exports,be=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("v-card",{attrs:{width:"100%",height:"100%"}},[n("v-card-title",[t._v(" "+t._s(t.title)+" "),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("v-data-table",{attrs:{headers:t.headers,items:t.songs,search:t.search}})],1)],1)},ye=[],we=[{title:"Song 1",artist:"Artist 1",ratesCount:123,average:5},{title:"Song 2",artist:"Artist 2",ratesCount:23,average:5},{title:"Song 3",artist:"Artist 3",ratesCount:13,average:4.5},{title:"Song 4",artist:"Artist 4",ratesCount:745,average:4},{title:"Song 5",artist:"Artist 5",ratesCount:253,average:3.5},{title:"Song 6",artist:"Artist 6",ratesCount:654,average:5}],Ce=we,_e={data:function(){return{title:"Przeglądaj piosenki",search:"",headers:[{text:"Utwór",align:"start",sortable:!0,value:"title"},{text:"Wykonawca",value:"artist"},{text:"Ilość ocen",value:"ratesCount"},{text:"Średnia ocena",value:"average"}],songs:Ce}}},Se=_e,ke=(n("58f1"),Object(p["a"])(Se,be,ye,!1,null,null,null)),Oe=ke.exports,xe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"card"},[n("v-card",{attrs:{width:"100%",height:"100vw"}},[n("div",{staticClass:"picker"},[n("div",{staticClass:"text"},[t._v(" Wybierz aktualne tło w aplikacji ")]),n("v-color-picker",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1)])],1)])},je=[],Re={data:function(){return{color:"#058293"}}},Le=Re,Te=(n("4cc9"),Object(p["a"])(Le,xe,je,!1,null,null,null)),Me=Te.exports,Ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"registerCon"},[n("div",{staticClass:"register"},[n("div",{staticClass:"header"},[t._v(" Rejestracja ")]),n("div",{staticClass:"content"},[n("v-form",[n("v-text-field",{attrs:{autofocus:"","full-width":"",label:t.printables.MAIL,name:"mail",type:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),n("v-text-field",{attrs:{"full-width":"",label:t.printables.CONFIRM_MAIL,name:"mail_confirm",type:"e-mail"}}),n("v-text-field",{attrs:{"full-width":"",label:t.printables.PASSWORD,name:"password",type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),n("v-text-field",{attrs:{"full-width":"",label:t.printables.NICK,name:"nick",type:"text"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),n("div",{staticClass:"date"},[t._v(" "+t._s(t.printables.SELECT_BIRTHDATE)+" ")]),n("v-date-picker",{attrs:{color:"blue",dark:""},model:{value:t.form.dateOfBirth,callback:function(e){t.$set(t.form,"dateOfBirth",e)},expression:"form.dateOfBirth"}})],1),n("div",{staticClass:"button"},[n("v-btn",{staticClass:"white--text",attrs:{large:"",rounded:"",elevation:"3",color:"blue"},on:{click:t.onRegister}},[t._v("Zarejestruj")])],1)])])},Ie=[],Pe={data:function(){return{form:{email:null,username:null,password:null,dateOfBirth:null},printables:{MAIL:"Adres e-mail",CONFIRM_MAIL:"Potwierdź adres e-mail",PASSWORD:"Hasło",NICK:"Nazwa użytkownika",SELECT_BIRTHDATE:"Zaznacz datę urodzenia"},visible:!1}},methods:{onRegister:function(){Ve(this.form.email,this.form.password)}}},Ae=Pe,Ne=(n("e886"),Object(p["a"])(Ae,Ee,Ie,!1,null,null,null)),$e=Ne.exports;r["default"].use(I["a"]);var Fe=[{path:"/login",name:"Login",component:he},{path:"/register",name:"Register",component:$e},{path:"/logout",name:"Login",component:he,beforeEnter:function(t,e,n){Xe("authentication/logout"),n()}},{path:"/dashboard",name:"Dashboard",component:It,beforeEnter:Be},{path:"/top-rated",name:"topRated",component:de,beforeEnter:Be},{path:"/browseSongs",name:"BrowseSongs",component:Oe,beforeEnter:Be},{path:"/play",beforeEnter:function(){window.open("https://open.spotify.com/")}},{path:"/settings",component:Me,beforeEnter:Be},{path:"/callback",beforeEnter:function(){E.dispatch("authenticationStore/login"),ze.push("dashboard").catch((function(t){console.log(t)}))}},{path:"/",redirect:"/login"}];function Be(t,e,n){if(!E.state.authenticationStore.isLogged)return E.dispatch("notificationStore/showNotification",{message:"You need to log in first",type:x.WARNING}),void ze.push("login").catch((function(t){console.log(t)}));n()}var ze=new I["a"]({routes:Fe}),We=ze;function He(t,e){E.dispatch("notificationStore/showNotification",{message:t,type:e})}function Ge(){E.dispatch("commonStore/showLoading")}function Ue(){E.dispatch("commonStore/hideLoading")}function Ze(){return E.state.authenticationStore.username}var De="http://localhost:8000";function Ve(t,e){return Ye.apply(this,arguments)}function Ye(){return Ye=Object(S["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Ge(),dt()("".concat(De,"/api/retify/register"),{method:"POST",data:{username:e,password:n},withCredentials:!0}).then((function(t){201===t.status?(E.dispatch("authenticationStore/login",e),We.push("dashboard").catch((function(){})),He("You successfully signed up",x.SUCCESS)):He(t.data,x.ERROR)})).catch((function(t){He(t.response.data,x.ERROR)})).finally((function(){Ue()}));case 2:case"end":return t.stop()}}),t)}))),Ye.apply(this,arguments)}function Ke(t,e){return Je.apply(this,arguments)}function Je(){return Je=Object(S["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Ge(),dt()("".concat(De,"/api/retify/login"),{method:"POST",data:{username:e,password:n},withCredentials:!0}).then((function(t){200===t.status?(E.dispatch("authenticationStore/login",e),We.push("dashboard").catch((function(){})),He("You successfully logged in",x.SUCCESS)):He(t.data,x.ERROR)})).catch((function(t){He(t.response.data,x.ERROR)})).finally((function(){Ue()}));case 2:case"end":return t.stop()}}),t)}))),Je.apply(this,arguments)}function qe(){return Qe.apply(this,arguments)}function Qe(){return Qe=Object(S["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:window.location.href="".concat(De,"/api/spotify/login");case 1:case"end":return t.stop()}}),t)}))),Qe.apply(this,arguments)}function Xe(){return tn.apply(this,arguments)}function tn(){return tn=Object(S["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:dt()("".concat(De,"/api/retify/logout"),{method:"GET",withCredentials:!0}).then((function(){E.dispatch("authenticationStore/logout"),We.push("login").catch((function(){})),He("You successfully logged out",x.SUCCESS)}));case 1:case"end":return t.stop()}}),t)}))),tn.apply(this,arguments)}var en={data:function(){return{drawer:!0,items:[{title:"Strona główna",icon:"$vuetify.icons.dash",to:"/dashboard"},{title:"Najlepsze",icon:"$vuetify.icons.star",to:"/top-rated"},{title:"Piosenki",icon:"$vuetify.icons.music",to:"/browse-songs"},{title:"Słuchaj",icon:"$vuetify.icons.play",to:"/play"},{title:"Ustawienia",icon:"$vuetify.icons.prefs",to:"/settings"},{title:"Wyloguj się",icon:"$vuetify.icons.logout",to:"/logout"}],color:"primary",colors:["primary","blue","success","red","teal"],right:!1,miniVariant:!0,expandOnHover:!1,background:!0,username:null}},computed:{bg:function(){return this.background?"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg":""}},beforeMount:function(){this.username=Ze()},methods:{loginWithSpotify:function(){qe()}}},nn=en,rn=Object(p["a"])(nn,C,_,!1,null,null,null),an=rn.exports,on={components:{NotificationComponent:w,NavigationBar:an,LoadingOverlay:m},computed:Object(o["a"])({},Object(l["b"])("authenticationStore",["isLogged"]))},sn=on,cn=Object(p["a"])(sn,a,i,!1,null,null,null),ln=cn.exports,un=n("ce5b"),dn=n.n(un);n("bf40");r["default"].use(dn.a);var pn=new dn.a({icons:{iconfont:"mdi",values:{dash:"mdi-view-dashboard",star:"mdi-star",artist:"mdi-artist",music:"mdi-music",play:"mdi-play",prefs:"mdi-settings",logout:"mdi-location-exit",more:"mdi-more",song:"mdi-music-circle",account:"mdi-account-circle"}}});r["default"].config.productionTip=!1,new r["default"]({vuetify:pn,router:We,store:E,render:function(t){return t(ln)}}).$mount("#app")},"58f1":function(t,e,n){"use strict";var r=n("776e"),a=n.n(r);a.a},6162:function(t,e,n){"use strict";var r=n("eeec"),a=n.n(r);a.a},"74f0":function(t,e,n){"use strict";var r=n("c9eb"),a=n.n(r);a.a},"776e":function(t,e,n){},"84cb":function(t,e,n){},"8b8b":function(t,e,n){},"8f47":function(t,e,n){"use strict";var r=n("477b"),a=n.n(r);a.a},b6ad:function(t,e,n){"use strict";var r=n("c386"),a=n.n(r);a.a},c386:function(t,e,n){},c9eb:function(t,e,n){},caf5:function(t,e,n){"use strict";var r=n("8b8b"),a=n.n(r);a.a},e886:function(t,e,n){"use strict";var r=n("2cb0"),a=n.n(r);a.a},eeec:function(t,e,n){}});
//# sourceMappingURL=app.d55ee973.js.map