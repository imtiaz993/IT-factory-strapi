(self.webpackChunknode_example=self.webpackChunknode_example||[]).push([[1495],{62031:(z,H,g)=>{"use strict";z.exports=g(59525)},59525:function(z,H,g){(function(l,O){z.exports=O(g(67294),g(78384))})(this,function(l,O){return function(r){var s={};function t(n){if(s[n])return s[n].exports;var o=s[n]={i:n,l:!1,exports:{}};return r[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=r,t.c=s,t.d=function(n,o,c){t.o(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:c})},t.r=function(n){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,o){if(1&o&&(n=t(n)),8&o||4&o&&typeof n=="object"&&n&&n.__esModule)return n;var c=Object.create(null);if(t.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&o&&typeof n!="string")for(var i in n)t.d(c,i,function(d){return n[d]}.bind(null,i));return c},t.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(o,"a",o),o},t.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},t.p="",t(t.s=110)}({0:function(r,s,t){r.exports=t(19)()},1:function(r,s){r.exports=l},10:function(r,s,t){var n=t(25),o=t(26),c=t(22),i=t(27);r.exports=function(d,f){return n(d)||o(d,f)||c(d,f)||i()},r.exports.default=r.exports,r.exports.__esModule=!0},110:function(r,s,t){"use strict";t.r(s),t.d(s,"Main",function(){return e}),t.d(s,"SkipToContent",function(){return D});var n,o=t(5),c=t.n(o),i=t(4),d=t.n(i),f=t(3),y=t.n(f),T=t(1),A=t.n(T),u=t(0),C=t.n(u),M=t(2),j=t.n(M),R=["labelledBy"],h=j.a.main(n||(n=y()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),e=function(w){var G=w.labelledBy,N=d()(w,R),V=G||"main-content-title";return A.a.createElement(h,c()({"aria-labelledby":V,id:"main-content",tabIndex:-1},N))};e.defaultProps={labelledBy:void 0},e.propTypes={labelledBy:C.a.string};var a,p=t(6),B=j()(p.Box)(a||(a=y()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(w){return w.theme.spaces[3]},function(w){return w.theme.spaces[3]}),D=function(w){var G=w.children;return A.a.createElement(B,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},G)};D.propTypes={children:C.a.node.isRequired}},13:function(r,s){function t(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(r.exports=t=function(o){return typeof o},r.exports.default=r.exports,r.exports.__esModule=!0):(r.exports=t=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},r.exports.default=r.exports,r.exports.__esModule=!0),t(n)}r.exports=t,r.exports.default=r.exports,r.exports.__esModule=!0},19:function(r,s,t){"use strict";var n=t(20);function o(){}function c(){}c.resetWarningCache=o,r.exports=function(){function i(y,T,A,u,C,M){if(M!==n){var j=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw j.name="Invariant Violation",j}}function d(){return i}i.isRequired=i;var f={array:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:d,element:i,elementType:i,instanceOf:d,node:i,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:c,resetWarningCache:o};return f.PropTypes=f,f}},2:function(r,s){r.exports=O},20:function(r,s,t){"use strict";r.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(r,s){r.exports=function(t,n){(n==null||n>t.length)&&(n=t.length);for(var o=0,c=new Array(n);o<n;o++)c[o]=t[o];return c},r.exports.default=r.exports,r.exports.__esModule=!0},22:function(r,s,t){var n=t(21);r.exports=function(o,c){if(o){if(typeof o=="string")return n(o,c);var i=Object.prototype.toString.call(o).slice(8,-1);return i==="Object"&&o.constructor&&(i=o.constructor.name),i==="Map"||i==="Set"?Array.from(o):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(o,c):void 0}},r.exports.default=r.exports,r.exports.__esModule=!0},24:function(r,s){r.exports=function(t,n){if(t==null)return{};var o,c,i={},d=Object.keys(t);for(c=0;c<d.length;c++)o=d[c],n.indexOf(o)>=0||(i[o]=t[o]);return i},r.exports.default=r.exports,r.exports.__esModule=!0},25:function(r,s){r.exports=function(t){if(Array.isArray(t))return t},r.exports.default=r.exports,r.exports.__esModule=!0},26:function(r,s){r.exports=function(t,n){var o=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(o!=null){var c,i,d=[],f=!0,y=!1;try{for(o=o.call(t);!(f=(c=o.next()).done)&&(d.push(c.value),!n||d.length!==n);f=!0);}catch(T){y=!0,i=T}finally{try{f||o.return==null||o.return()}finally{if(y)throw i}}return d}},r.exports.default=r.exports,r.exports.__esModule=!0},27:function(r,s){r.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},r.exports.default=r.exports,r.exports.__esModule=!0},3:function(r,s){r.exports=function(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))},r.exports.default=r.exports,r.exports.__esModule=!0},4:function(r,s,t){var n=t(24);r.exports=function(o,c){if(o==null)return{};var i,d,f=n(o,c);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(o);for(d=0;d<y.length;d++)i=y[d],c.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(o,i)&&(f[i]=o[i])}return f},r.exports.default=r.exports,r.exports.__esModule=!0},5:function(r,s){function t(){return r.exports=t=Object.assign||function(n){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var i in c)Object.prototype.hasOwnProperty.call(c,i)&&(n[i]=c[i])}return n},r.exports.default=r.exports,r.exports.__esModule=!0,t.apply(this,arguments)}r.exports=t,r.exports.default=r.exports,r.exports.__esModule=!0},6:function(r,s,t){"use strict";t.r(s),t.d(s,"Box",function(){return h});var n,o=t(3),c=t.n(o),i=t(2),d=t.n(i),f=t(7),y=t(1),T=t.n(y),A=t(0),u=t.n(A),C=function(e){return T.a.createElement("div",e)},M={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},j={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])};C.defaultProps=M,C.propTypes=j;var R={color:!0},h=d.a.div.withConfig({shouldForwardProp:function(e,a){return!R[e]&&a(e)}})(n||(n=c()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var a=e.fontSize;return e.theme.fontSizes[a]||a},function(e){var a=e.theme,p=e.background;return a.colors[p]},function(e){var a=e.theme,p=e.color;return a.colors[p]},function(e){var a=e.theme,p=e.padding;return Object(f.a)("padding",p,a)},function(e){var a=e.theme,p=e.paddingTop;return Object(f.a)("padding-top",p,a)},function(e){var a=e.theme,p=e.paddingRight;return Object(f.a)("padding-right",p,a)},function(e){var a=e.theme,p=e.paddingBottom;return Object(f.a)("padding-bottom",p,a)},function(e){var a=e.theme,p=e.paddingLeft;return Object(f.a)("padding-left",p,a)},function(e){var a=e.theme,p=e.marginLeft;return Object(f.a)("margin-left",p,a)},function(e){var a=e.theme,p=e.marginRight;return Object(f.a)("margin-right",p,a)},function(e){var a=e.theme,p=e.marginTop;return Object(f.a)("margin-top",p,a)},function(e){var a=e.theme,p=e.marginBottom;return Object(f.a)("margin-bottom",p,a)},function(e){var a=e.theme;return e.hiddenS?"".concat(a.mediaQueries.tablet," { display: none; }"):void 0},function(e){var a=e.theme;return e.hiddenXS?"".concat(a.mediaQueries.mobile," { display: none; }"):void 0},function(e){var a=e.theme,p=e.hasRadius,B=e.borderRadius;return p?a.borderRadius:B},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var a=e.borderColor;return e.theme.colors[a]},function(e){var a=e.theme,p=e.borderColor,B=e.borderStyle,D=e.borderWidth;if(p&&!B&&!D)return"1px solid ".concat(a.colors[p])},function(e){var a=e.theme,p=e.shadow;return a.shadows[p]},function(e){return e.pointerEvents},function(e){var a=e._hover,p=e.theme;return a?a(p):void 0},function(e){return e.display},function(e){return e.position},function(e){var a=e.left;return e.theme.spaces[a]||a},function(e){var a=e.right;return e.theme.spaces[a]||a},function(e){var a=e.top;return e.theme.spaces[a]||a},function(e){var a=e.bottom;return e.theme.spaces[a]||a},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var a=e.width;return e.theme.spaces[a]||a},function(e){var a=e.maxWidth;return e.theme.spaces[a]||a},function(e){var a=e.minWidth;return e.theme.spaces[a]||a},function(e){var a=e.height;return e.theme.spaces[a]||a},function(e){var a=e.maxHeight;return e.theme.spaces[a]||a},function(e){var a=e.minHeight;return e.theme.spaces[a]||a},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});h.defaultProps=M,h.propTypes=j},7:function(r,s,t){"use strict";var n=t(10),o=t.n(n),c=t(13),i=t.n(c);s.a=function(d,f,y){var T=f;if(Array.isArray(f)||i()(f)!=="object"||(T=[f==null?void 0:f.desktop,f==null?void 0:f.tablet,f==null?void 0:f.mobile]),T!==void 0){if(Array.isArray(T)){var A=T,u=o()(A,3),C=u[0],M=u[1],j=u[2],R="".concat(d,": ").concat(y.spaces[C],";");return M!==void 0&&(R+="".concat(y.mediaQueries.tablet,`{
          `).concat(d,": ").concat(y.spaces[M],`;
        }`)),j!==void 0&&(R+="".concat(y.mediaQueries.mobile,`{
          `).concat(d,": ").concat(y.spaces[j],`;
        }`)),R}var h=y.spaces[T]||T;return"".concat(d,": ").concat(h,";")}}}})})},78086:function(z,H,g){(function(l,O){z.exports=O(g(67294))})(this,function(l){return function(O){var r={};function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return O[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=O,s.c=r,s.d=function(t,n,o){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},s.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n||4&n&&typeof t=="object"&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&typeof t!="string")for(var c in t)s.d(o,c,function(i){return t[i]}.bind(null,c));return o},s.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="",s(s.s=67)}({0:function(O,r){O.exports=l},67:function(O,r,s){"use strict";s.r(r);var t=s(0);function n(){return(n=Object.assign||function(o){for(var c=1;c<arguments.length;c++){var i=arguments[c];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(o[d]=i[d])}return o}).apply(this,arguments)}r.default=function(o){return t.createElement("svg",n({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o),t.createElement("path",{d:"M0 2.8A.8.8 0 01.8 2h22.4a.8.8 0 01.8.8v2.71a1 1 0 01-1 1H1a1 1 0 01-1-1V2.8z",fill:"#32324D"}),t.createElement("path",{d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873zM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053z",fill:"#32324D"}),t.createElement("path",{d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555z",fill:"#32324D"}))}}})})},4508:(z,H,g)=>{"use strict";g.r(H),g.d(H,{default:()=>ie});var l=g(67294),O=g(97132),r=g(96486),s=g(68547),t=g(62031),n=g(78862),o=g(9008),c=g(5493),i=g(34626),d=g(49425),f=g(55967),y=g(19408),T=g(84686),A=g(78086),u=g.n(A),C=g(45697),M=g.n(C),j=g(78384),R=g(43808),h=g(26434);const e=j.default.a`
  color: ${({theme:m})=>m.colors.primary600};
`,a=({config:m})=>{const{formatMessage:b}=(0,O.useIntl)();return l.createElement(o.Stack,{spacing:4},l.createElement(o.Stack,{spacing:1},l.createElement(d.Typography,{variant:"delta",as:"h2"},b({id:(0,h.Z)("Settings.email.plugin.title.config"),defaultMessage:"Configuration"})),l.createElement(d.Typography,null,b({id:(0,h.Z)("Settings.email.plugin.text.configuration"),defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:l.createElement(e,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer"},"link")}))),l.createElement(i.Grid,{gap:5},l.createElement(i.GridItem,{col:6,s:12},l.createElement(f.TextInput,{name:"shipper-email",label:b({id:(0,h.Z)("Settings.email.plugin.label.defaultFrom"),defaultMessage:"Default sender email"}),placeholder:b({id:(0,h.Z)("Settings.email.plugin.placeholder.defaultFrom"),defaultMessage:"ex: Strapi No-Reply <no-reply@strapi.io>"}),disabled:!0,onChange:()=>{},value:m.settings.defaultFrom})),l.createElement(i.GridItem,{col:6,s:12},l.createElement(f.TextInput,{name:"response-email",label:b({id:(0,h.Z)("Settings.email.plugin.label.defaultReplyTo"),defaultMessage:"Default response email"}),placeholder:b({id:(0,h.Z)("Settings.email.plugin.placeholder.defaultReplyTo"),defaultMessage:"ex: Strapi <example@strapi.io>"}),disabled:!0,onChange:()=>{},value:m.settings.defaultReplyTo})),l.createElement(i.GridItem,{col:6,s:12},l.createElement(R.Select,{name:"email-provider",label:b({id:(0,h.Z)("Settings.email.plugin.label.provider"),defaultMessage:"Email provider"}),disabled:!0,onChange:()=>{},value:m.provider},l.createElement(R.Option,{value:m.provider},m.provider)))))};a.propTypes={config:M().shape({provider:M().string,settings:M().shape({defaultFrom:M().string,defaultReplyTo:M().string})}).isRequired};const p=a;var B=g(53209);const w=B.Ry().shape({email:B.Z_().email(s.translatedErrors.email).required(s.translatedErrors.required)});var G=g(48763),N=g(9669),V=g.n(N),ee=(m,b,x)=>new Promise((S,I)=>{var L=v=>{try{E(x.next(v))}catch(P){I(P)}},Z=v=>{try{E(x.throw(v))}catch(P){I(P)}},E=v=>v.done?S(v.value):Promise.resolve(v.value).then(L,Z);E((x=x.apply(m,b)).next())});const Q=V().create({baseURL:""});Q.interceptors.request.use(m=>ee(void 0,null,function*(){return m.headers={Authorization:`Bearer ${s.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},m}),m=>{Promise.reject(m)}),Q.interceptors.response.use(m=>m,m=>{var b;throw((b=m.response)==null?void 0:b.status)===401&&(s.auth.clearAppStorage(),window.location.reload()),m});const U=Q;var $=(m,b,x)=>new Promise((S,I)=>{var L=v=>{try{E(x.next(v))}catch(P){I(P)}},Z=v=>{try{E(x.throw(v))}catch(P){I(P)}},E=v=>v.done?S(v.value):Promise.resolve(v.value).then(L,Z);E((x=x.apply(m,b)).next())});const te=()=>$(void 0,null,function*(){const{data:m}=yield U.get("/email/settings");return m.config}),ne=m=>$(void 0,null,function*(){yield U.post("/email/test",m)}),X=()=>{const{formatMessage:m}=(0,O.useIntl)();return l.createElement(l.Fragment,null,l.createElement(s.SettingsPageTitle,{name:m({id:(0,h.Z)("Settings.email.plugin.title"),defaultMessage:"Configuration"})}),l.createElement(n.HeaderLayout,{id:"title",title:m({id:(0,h.Z)("Settings.email.plugin.title"),defaultMessage:"Configuration"}),subtitle:m({id:(0,h.Z)("Settings.email.plugin.subTitle"),defaultMessage:"Test the settings for the Email plugin"})}))};var re=(m,b,x)=>new Promise((S,I)=>{var L=v=>{try{E(x.next(v))}catch(P){I(P)}},Z=v=>{try{E(x.throw(v))}catch(P){I(P)}},E=v=>v.done?S(v.value):Promise.resolve(v.value).then(L,Z);E((x=x.apply(m,b)).next())});const oe=()=>l.createElement(s.CheckPagePermissions,{permissions:G.Z.settings},l.createElement(ae,null)),ae=()=>{var m,b;const x=(0,s.useNotification)(),{formatMessage:S}=(0,O.useIntl)(),{lockApp:I,unlockApp:L}=(0,s.useOverlayBlocker)(),{notifyStatus:Z}=(0,T.useNotifyAT)();(0,s.useFocusWhenNavigate)();const[E,v]=(0,l.useState)({}),[P,Y]=(0,l.useState)(!1),[J,K]=(0,l.useState)(!1),[k,q]=(0,l.useState)(""),[se,_]=(0,l.useState)(!1),[le,ue]=(0,l.useState)({provider:"",settings:{defaultFrom:"",defaultReplyTo:"",testAddress:""}});(0,l.useEffect)(()=>{Y(!0),te().then(F=>{Z(S({id:(0,h.Z)("Settings.email.plugin.notification.data.loaded"),defaultMessage:"Email settings data has been loaded"})),ue(F);const W=(0,r.get)(F,"settings.testAddress");W&&q(W)}).catch(()=>x({type:"warning",message:S({id:(0,h.Z)("Settings.email.plugin.notification.config.error"),defaultMessage:"Failed to retrieve the email config"})})).finally(()=>Y(!1))},[S,x,Z]),(0,l.useEffect)(()=>{E.email&&document.querySelector("#test-address-input").focus()},[E]),(0,l.useEffect)(()=>{w.validate({email:k},{abortEarly:!1}).then(()=>_(!0)).catch(()=>_(!1))},[k]);const ce=F=>{q(()=>F.target.value)},de=F=>re(void 0,null,function*(){F.preventDefault();try{yield w.validate({email:k},{abortEarly:!1}),K(!0),I(),ne({to:k}).then(()=>{x({type:"success",message:S({id:(0,h.Z)("Settings.email.plugin.notification.test.success"),defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:k})})}).catch(()=>{x({type:"warning",message:S({id:(0,h.Z)("Settings.email.plugin.notification.test.error"),defaultMessage:"Failed to send a test mail to {to}"},{to:k})})}).finally(()=>{K(!1),L()})}catch(W){v((0,s.getYupInnerErrors)(W))}});return P?l.createElement(t.Main,{labelledBy:"title","aria-busy":"true"},l.createElement(X,null),l.createElement(n.ContentLayout,null,l.createElement(s.LoadingIndicatorPage,null))):l.createElement(t.Main,{labelledBy:"title","aria-busy":J},l.createElement(X,null),l.createElement(n.ContentLayout,null,l.createElement("form",{onSubmit:de},l.createElement(o.Stack,{spacing:7},l.createElement(c.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},l.createElement(p,{config:le})),l.createElement(c.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},l.createElement(o.Stack,{spacing:4},l.createElement(d.Typography,{variant:"delta",as:"h2"},S({id:(0,h.Z)("Settings.email.plugin.title.test"),defaultMessage:"Test email delivery"})),l.createElement(i.Grid,{gap:5,alignItems:"end"},l.createElement(i.GridItem,{col:6,s:12},l.createElement(f.TextInput,{id:"test-address-input",name:"test-address",onChange:ce,label:S({id:(0,h.Z)("Settings.email.plugin.label.testAddress"),defaultMessage:"Recipient email"}),value:k,error:((m=E.email)==null?void 0:m.id)&&S({id:(0,h.Z)(`${(b=E.email)==null?void 0:b.id}`),defaultMessage:"This is an invalid email"}),placeholder:S({id:(0,h.Z)("Settings.email.plugin.placeholder.testAddress"),defaultMessage:"ex: developer@example.com"})})),l.createElement(i.GridItem,{col:7,s:12},l.createElement(y.Button,{loading:J,disabled:!se,type:"submit",startIcon:l.createElement(u(),null)},S({id:(0,h.Z)("Settings.email.plugin.button.test-email"),defaultMessage:"Send test email"}))))))))))},ie=oe}}]);
