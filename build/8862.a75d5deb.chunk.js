(self.webpackChunknode_example=self.webpackChunknode_example||[]).push([[8862],{78862:(V,on,F)=>{"use strict";V.exports=F(44051)},44051:function(V,on,F){(function(Z,X){V.exports=X(F(67294),F(78384))})(this,function(Z,X){return function(r){var f={};function e(a){if(f[a])return f[a].exports;var o=f[a]={i:a,l:!1,exports:{}};return r[a].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=r,e.c=f,e.d=function(a,o,l){e.o(a,o)||Object.defineProperty(a,o,{enumerable:!0,get:l})},e.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},e.t=function(a,o){if(1&o&&(a=e(a)),8&o||4&o&&typeof a=="object"&&a&&a.__esModule)return a;var l=Object.create(null);if(e.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:a}),2&o&&typeof a!="string")for(var c in a)e.d(l,c,function(d){return a[d]}.bind(null,c));return l},e.n=function(a){var o=a&&a.__esModule?function(){return a.default}:function(){return a};return e.d(o,"a",o),o},e.o=function(a,o){return Object.prototype.hasOwnProperty.call(a,o)},e.p="",e(e.s=97)}({0:function(r,f,e){r.exports=e(19)()},1:function(r,f){r.exports=Z},10:function(r,f,e){var a=e(25),o=e(26),l=e(22),c=e(27);r.exports=function(d,i){return a(d)||o(d,i)||l(d,i)||c()},r.exports.default=r.exports,r.exports.__esModule=!0},13:function(r,f){function e(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(r.exports=e=function(o){return typeof o},r.exports.default=r.exports,r.exports.__esModule=!0):(r.exports=e=function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},r.exports.default=r.exports,r.exports.__esModule=!0),e(a)}r.exports=e,r.exports.default=r.exports,r.exports.__esModule=!0},19:function(r,f,e){"use strict";var a=e(20);function o(){}function l(){}l.resetWarningCache=o,r.exports=function(){function c(b,g,S,u,p,w){if(w!==a){var h=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw h.name="Invariant Violation",h}}function d(){return c}c.isRequired=c;var i={array:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:d,element:c,elementType:c,instanceOf:d,node:c,objectOf:d,oneOf:d,oneOfType:d,shape:d,exact:d,checkPropTypes:l,resetWarningCache:o};return i.PropTypes=i,i}},2:function(r,f){r.exports=X},20:function(r,f,e){"use strict";r.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(r,f){r.exports=function(e,a){(a==null||a>e.length)&&(a=e.length);for(var o=0,l=new Array(a);o<a;o++)l[o]=e[o];return l},r.exports.default=r.exports,r.exports.__esModule=!0},22:function(r,f,e){var a=e(21);r.exports=function(o,l){if(o){if(typeof o=="string")return a(o,l);var c=Object.prototype.toString.call(o).slice(8,-1);return c==="Object"&&o.constructor&&(c=o.constructor.name),c==="Map"||c==="Set"?Array.from(o):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?a(o,l):void 0}},r.exports.default=r.exports,r.exports.__esModule=!0},24:function(r,f){r.exports=function(e,a){if(e==null)return{};var o,l,c={},d=Object.keys(e);for(l=0;l<d.length;l++)o=d[l],a.indexOf(o)>=0||(c[o]=e[o]);return c},r.exports.default=r.exports,r.exports.__esModule=!0},25:function(r,f){r.exports=function(e){if(Array.isArray(e))return e},r.exports.default=r.exports,r.exports.__esModule=!0},26:function(r,f){r.exports=function(e,a){var o=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(o!=null){var l,c,d=[],i=!0,b=!1;try{for(o=o.call(e);!(i=(l=o.next()).done)&&(d.push(l.value),!a||d.length!==a);i=!0);}catch(g){b=!0,c=g}finally{try{i||o.return==null||o.return()}finally{if(b)throw c}}return d}},r.exports.default=r.exports,r.exports.__esModule=!0},27:function(r,f){r.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},r.exports.default=r.exports,r.exports.__esModule=!0},3:function(r,f){r.exports=function(e,a){return a||(a=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(a)}}))},r.exports.default=r.exports,r.exports.__esModule=!0},4:function(r,f,e){var a=e(24);r.exports=function(o,l){if(o==null)return{};var c,d,i=a(o,l);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(o);for(d=0;d<b.length;d++)c=b[d],l.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(o,c)&&(i[c]=o[c])}return i},r.exports.default=r.exports,r.exports.__esModule=!0},47:function(r,f,e){"use strict";e.r(f),e.d(f,"Grid",function(){return E}),e.d(f,"GridItem",function(){return H});var a,o=e(5),l=e.n(o),c=e(4),d=e.n(c),i=e(3),b=e.n(i),g=e(1),S=e.n(g),u=e(2),p=e.n(u),w=e(0),h=e.n(w),O=Object(g.createContext)({gap:0,gridCols:12}),T=e(6),n=e(7),t=["gap","gridCols"],s=p()(T.Box)(a||(a=b()([`
  display: grid;
  grid-template-columns: repeat(`,`, 1fr);
  `,`
`])),function(v){return v.gridCols},function(v){var A=v.theme,j=v.gap;return Object(n.a)("gap",j,A)}),E=function(v){var A=v.gap,j=v.gridCols,M=d()(v,t);return S.a.createElement(O.Provider,{value:{gap:A,gridCols:j}},S.a.createElement(s,l()({gap:A,gridCols:j},M)))};E.defaultProps={gap:0,gridCols:12},E.propTypes={gap:h.a.oneOfType([h.a.number,h.a.arrayOf(h.a.number)]),gridCols:h.a.number};var R,q=["col","xs","s"],N=p.a.div(R||(R=b()([`
  grid-column: span `,`;
  max-width: 100%;

  `,` {
    grid-column: span `,`;
  }

  `,` {
    grid-column: span `,`;
  }
`])),function(v){return v.col},function(v){return v.theme.mediaQueries.tablet},function(v){return v.s},function(v){return v.theme.mediaQueries.mobile},function(v){return v.xs}),H=function(v){var A=v.col,j=v.xs,M=v.s,k=d()(v,q),z=Object(g.useContext)(O),Y=z.gap,$=z.gridCols;return S.a.createElement(N,{gap:Y,gridCols:$,col:A,xs:j,s:M},S.a.createElement(T.Box,k))};H.defaultProps={col:void 0,s:void 0,xs:void 0},H.propTypes={col:h.a.number,s:h.a.number,xs:h.a.number}},48:function(r,f,e){"use strict";e.d(f,"a",function(){return o});var a=e(1),o=function(l,c){Object(a.useEffect)(function(){var d=new ResizeObserver(c);return Array.isArray(l)?l.map(function(i){i.current&&d.observe(i.current)}):l.current&&d.observe(l.current),function(){d.disconnect()}},[])}},5:function(r,f){function e(){return r.exports=e=Object.assign||function(a){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(a[c]=l[c])}return a},r.exports.default=r.exports,r.exports.__esModule=!0,e.apply(this,arguments)}r.exports=e,r.exports.default=r.exports,r.exports.__esModule=!0},6:function(r,f,e){"use strict";e.r(f),e.d(f,"Box",function(){return T});var a,o=e(3),l=e.n(o),c=e(2),d=e.n(c),i=e(7),b=e(1),g=e.n(b),S=e(0),u=e.n(S),p=function(n){return g.a.createElement("div",n)},w={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},h={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])};p.defaultProps=w,p.propTypes=h;var O={color:!0},T=d.a.div.withConfig({shouldForwardProp:function(n,t){return!O[n]&&t(n)}})(a||(a=l()([`
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
`])),function(n){var t=n.fontSize;return n.theme.fontSizes[t]||t},function(n){var t=n.theme,s=n.background;return t.colors[s]},function(n){var t=n.theme,s=n.color;return t.colors[s]},function(n){var t=n.theme,s=n.padding;return Object(i.a)("padding",s,t)},function(n){var t=n.theme,s=n.paddingTop;return Object(i.a)("padding-top",s,t)},function(n){var t=n.theme,s=n.paddingRight;return Object(i.a)("padding-right",s,t)},function(n){var t=n.theme,s=n.paddingBottom;return Object(i.a)("padding-bottom",s,t)},function(n){var t=n.theme,s=n.paddingLeft;return Object(i.a)("padding-left",s,t)},function(n){var t=n.theme,s=n.marginLeft;return Object(i.a)("margin-left",s,t)},function(n){var t=n.theme,s=n.marginRight;return Object(i.a)("margin-right",s,t)},function(n){var t=n.theme,s=n.marginTop;return Object(i.a)("margin-top",s,t)},function(n){var t=n.theme,s=n.marginBottom;return Object(i.a)("margin-bottom",s,t)},function(n){var t=n.theme;return n.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0},function(n){var t=n.theme;return n.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0},function(n){var t=n.theme,s=n.hasRadius,E=n.borderRadius;return s?t.borderRadius:E},function(n){return n.borderStyle},function(n){return n.borderWidth},function(n){var t=n.borderColor;return n.theme.colors[t]},function(n){var t=n.theme,s=n.borderColor,E=n.borderStyle,R=n.borderWidth;if(s&&!E&&!R)return"1px solid ".concat(t.colors[s])},function(n){var t=n.theme,s=n.shadow;return t.shadows[s]},function(n){return n.pointerEvents},function(n){var t=n._hover,s=n.theme;return t?t(s):void 0},function(n){return n.display},function(n){return n.position},function(n){var t=n.left;return n.theme.spaces[t]||t},function(n){var t=n.right;return n.theme.spaces[t]||t},function(n){var t=n.top;return n.theme.spaces[t]||t},function(n){var t=n.bottom;return n.theme.spaces[t]||t},function(n){return n.zIndex},function(n){return n.overflow},function(n){return n.cursor},function(n){var t=n.width;return n.theme.spaces[t]||t},function(n){var t=n.maxWidth;return n.theme.spaces[t]||t},function(n){var t=n.minWidth;return n.theme.spaces[t]||t},function(n){var t=n.height;return n.theme.spaces[t]||t},function(n){var t=n.maxHeight;return n.theme.spaces[t]||t},function(n){var t=n.minHeight;return n.theme.spaces[t]||t},function(n){return n.transition},function(n){return n.transform},function(n){return n.animation},function(n){return n.shrink},function(n){return n.grow},function(n){return n.basis},function(n){return n.flex},function(n){return n.textAlign},function(n){return n.textTransform},function(n){return n.lineHeight},function(n){return n.cursor});T.defaultProps=w,T.propTypes=h},7:function(r,f,e){"use strict";var a=e(10),o=e.n(a),l=e(13),c=e.n(l);f.a=function(d,i,b){var g=i;if(Array.isArray(i)||c()(i)!=="object"||(g=[i==null?void 0:i.desktop,i==null?void 0:i.tablet,i==null?void 0:i.mobile]),g!==void 0){if(Array.isArray(g)){var S=g,u=o()(S,3),p=u[0],w=u[1],h=u[2],O="".concat(d,": ").concat(b.spaces[p],";");return w!==void 0&&(O+="".concat(b.mediaQueries.tablet,`{
          `).concat(d,": ").concat(b.spaces[w],`;
        }`)),h!==void 0&&(O+="".concat(b.mediaQueries.mobile,`{
          `).concat(d,": ").concat(b.spaces[h],`;
        }`)),O}var T=b.spaces[g]||g;return"".concat(d,": ").concat(T,";")}}},8:function(r,f,e){"use strict";e.r(f),e.d(f,"Typography",function(){return T});var a,o=e(3),l=e.n(o),c=e(2),d=e.n(c),i=["alpha","beta","delta","epsilon","omega","pi","sigma"],b=e(1),g=e.n(b),S=e(0),u=e.n(S),p=function(n){return g.a.createElement("div",n)},w={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},h={ellipsis:u.a.bool,fontSize:u.a.oneOfType([u.a.number,u.a.string]),fontWeight:u.a.string,lineHeight:u.a.oneOfType([u.a.number,u.a.string]),textColor:u.a.string,textTransform:u.a.string,variant:u.a.oneOf(i)};p.defaultProps=w,p.propTypes=h;var O={fontSize:!0,fontWeight:!0},T=d.a.span.withConfig({shouldForwardProp:function(n,t){return!O[n]&&t(n)}})(a||(a=l()([`
  font-weight: `,`;
  font-size: `,`;
  line-height: `,`;
  color: `,`;
  text-transform: `,`;
  `,`
  `,`
`])),function(n){var t=n.theme,s=n.fontWeight;return t.fontWeights[s]},function(n){var t=n.theme,s=n.fontSize;return t.fontSizes[s]},function(n){var t=n.theme,s=n.lineHeight;return t.lineHeights[s]},function(n){var t=n.theme,s=n.textColor;return t.colors[s||"neutral800"]},function(n){return n.textTransform},function(n){return n.ellipsis&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `},function(n){var t=n.variant,s=n.theme;switch(t){case"alpha":return`
        font-weight: `.concat(s.fontWeights.bold,`;
        font-size: `).concat(s.fontSizes[5],`;
        line-height: `).concat(s.lineHeights[2],`;
      `);case"beta":return`
        font-weight: `.concat(s.fontWeights.bold,`;
        font-size: `).concat(s.fontSizes[4],`;
        line-height: `).concat(s.lineHeights[1],`;
      `);case"delta":return`
        font-weight: `.concat(s.fontWeights.semiBold,`;
        font-size: `).concat(s.fontSizes[3],`;
        line-height: `).concat(s.lineHeights[2],`;
      `);case"epsilon":return`
        font-size: `.concat(s.fontSizes[3],`;
        line-height: `).concat(s.lineHeights[6],`;
      `);case"omega":return`
        font-size: `.concat(s.fontSizes[2],`;
        line-height: `).concat(s.lineHeights[4],`;
      `);case"pi":return`
        font-size: `.concat(s.fontSizes[1],`;
        line-height: `).concat(s.lineHeights[3],`;
      `);case"sigma":return`
        font-weight: `.concat(s.fontWeights.bold,`;
        font-size: `).concat(s.fontSizes[0],`;
        line-height: `).concat(s.lineHeights[5],`;
        text-transform: uppercase;
      `);default:return`
        font-size: `.concat(s.fontSizes[2],`;
      `)}});T.defaultProps=w,T.propTypes=h},9:function(r,f,e){"use strict";e.r(f),e.d(f,"Flex",function(){return n});var a,o=e(3),l=e.n(o),c=e(2),d=e.n(c),i=e(6),b=e(7),g=e(1),S=e.n(g),u=e(0),p=e.n(u),w=function(t){return S.a.createElement("div",t)},h={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},O={alignItems:p.a.string,basis:p.a.oneOfType([p.a.string,p.a.number]),direction:p.a.string,gap:p.a.oneOfType([p.a.shape({desktop:p.a.number,mobile:p.a.number,tablet:p.a.number}),p.a.number,p.a.arrayOf(p.a.number),p.a.string]),inline:p.a.bool,justifyContent:p.a.string,reverse:p.a.bool,wrap:p.a.string};w.defaultProps=h,w.propTypes=O;var T={direction:!0},n=d()(i.Box).withConfig({shouldForwardProp:function(t,s){return!T[t]&&s(t)}})(a||(a=l()([`
  align-items: `,`;
  display: `,`;
  flex-direction: `,`;
  flex-wrap: `,`;
  `,`};
  justify-content: `,`;
`])),function(t){return t.alignItems},function(t){return t.inline?"inline-flex":"flex"},function(t){return t.direction},function(t){return t.wrap},function(t){var s=t.gap,E=t.theme;return Object(b.a)("gap",s,E)},function(t){return t.justifyContent});n.defaultProps=h,n.propTypes=O},97:function(r,f,e){"use strict";e.r(f),e.d(f,"Layout",function(){return O}),e.d(f,"ActionLayout",function(){return R}),e.d(f,"ContentLayout",function(){return q}),e.d(f,"HeaderLayout",function(){return G}),e.d(f,"BaseHeaderLayout",function(){return P}),e.d(f,"TwoColsLayout",function(){return en}),e.d(f,"GridLayout",function(){return tn});var a,o,l=e(3),c=e.n(l),d=e(1),i=e.n(d),b=e(0),g=e.n(b),S=e(2),u=e.n(S),p=e(6),w=u()(p.Box)(a||(a=c()([`
  display: grid;
  grid-template-columns: `,`;
`])),function(m){return m.hasSideNav?"auto 1fr":"1fr"}),h=u()(p.Box)(o||(o=c()([`
  overflow-x: hidden;
`]))),O=function(m){var y=m.sideNav,x=m.children;return i.a.createElement(w,{hasSideNav:Boolean(y)},y,i.a.createElement(h,{paddingBottom:10},x))};O.defaultProps={sideNav:void 0},O.propTypes={children:g.a.node.isRequired,sideNav:g.a.node};var T,n,t=e(9),s=u()(t.Flex)(T||(T=c()([`
  & > * + * {
    margin-left: `,`;
  }

  margin-left: `,`;
`])),function(m){return m.theme.spaces[2]},function(m){return m.pullRight?"auto":void 0}),E=u()(s)(n||(n=c()([`
  flex-shrink: 0;
`]))),R=function(m){var y=m.startActions,x=m.endActions;return y||x?i.a.createElement(p.Box,{paddingLeft:10,paddingRight:10},i.a.createElement(p.Box,{paddingBottom:4},i.a.createElement(t.Flex,{justifyContent:"space-between",alignItems:"flex-start"},y&&i.a.createElement(s,{wrap:"wrap"},y),x&&i.a.createElement(E,{pullRight:!0},x)))):null};R.defaultProps={endActions:void 0,startActions:void 0},R.propTypes={endActions:g.a.node,startActions:g.a.node};var q=function(m){var y=m.children;return i.a.createElement(p.Box,{paddingLeft:10,paddingRight:10},y)};q.propTypes={children:g.a.node.isRequired};var N,H=e(4),v=e.n(H),A=e(5),j=e.n(A),M=e(10),k=e.n(M),z=e(8),Y=e(48),$=["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"],an=function(){var m=Object(d.useRef)(null),y=Object(d.useState)(null),x=k()(y,2),B=x[0],_=x[1],C=function(W){var Q=Object(d.useRef)(null),sn=Object(d.useState)(!0),rn=k()(sn,2),cn=rn[0],dn=rn[1],ln=function(D){var U=k()(D,1)[0];dn(U.isIntersecting)};return Object(d.useEffect)(function(){var D=Q.current,U=new IntersectionObserver(ln,W);return D&&U.observe(Q.current),function(){D&&U.disconnect()}},[Q,W]),[Q,cn]}({root:null,rootMargin:"0px",threshold:0}),I=k()(C,2),L=I[0],K=I[1];return Object(Y.a)(L,function(){L.current&&_(L.current.getBoundingClientRect())}),Object(d.useEffect)(function(){m.current&&_(m.current.getBoundingClientRect())},[m]),{containerRef:L,isVisible:K,baseHeaderLayoutRef:m,headerSize:B}},G=function(m){var y=an(),x=y.containerRef,B=y.isVisible,_=y.baseHeaderLayoutRef,C=y.headerSize;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{height:C==null?void 0:C.height},ref:x},B&&i.a.createElement(P,j()({ref:_},m))),!B&&i.a.createElement(P,j()({},m,{sticky:!0,width:C==null?void 0:C.width})))};G.displayName="HeaderLayout";var un=u()(p.Box)(N||(N=c()([`
  position: fixed;
  top: 0;
  right: 0;
  width: `,`px;
  z-index: 4;
  box-shadow: `,`;
`])),function(m){return m.width},function(m){return m.theme.shadows.tableShadow}),P=i.a.forwardRef(function(m,y){var x=m.navigationAction,B=m.primaryAction,_=m.secondaryAction,C=m.subtitle,I=m.title,L=m.sticky,K=m.width,W=v()(m,$);return L?i.a.createElement(un,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:K,"data-strapi-header-sticky":!0},i.a.createElement(t.Flex,{justifyContent:"space-between"},i.a.createElement(t.Flex,null,x&&i.a.createElement(p.Box,{paddingRight:3},x),i.a.createElement(p.Box,null,i.a.createElement(z.Typography,j()({variant:"beta",as:"h1"},W),I),i.a.createElement(z.Typography,{variant:"pi",textColor:"neutral600"},C)),_?i.a.createElement(p.Box,{paddingLeft:4},_):null),i.a.createElement(t.Flex,null,B?i.a.createElement(p.Box,{paddingLeft:2},B):void 0))):i.a.createElement(p.Box,{ref:y,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:x?6:8,background:"neutral100","data-strapi-header":!0},x?i.a.createElement(p.Box,{paddingBottom:2},x):null,i.a.createElement(t.Flex,{justifyContent:"space-between"},i.a.createElement(t.Flex,null,i.a.createElement(z.Typography,j()({as:"h1",variant:"alpha"},W),I),_?i.a.createElement(p.Box,{paddingLeft:4},_):null),B),i.a.createElement(z.Typography,{variant:"epsilon",textColor:"neutral600",as:"p"},C))});P.displayName="BaseHeaderLayout",P.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},P.propTypes={navigationAction:g.a.node,primaryAction:g.a.node,secondaryAction:g.a.node,sticky:g.a.bool,subtitle:g.a.string,title:g.a.string.isRequired,width:g.a.number},G.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},G.propTypes={navigationAction:g.a.node,primaryAction:g.a.node,secondaryAction:g.a.node,subtitle:g.a.string,title:g.a.string.isRequired};var nn,J=e(47),en=function(m){var y=m.startCol,x=m.endCol;return i.a.createElement(J.Grid,{gap:4},i.a.createElement(J.GridItem,{col:9,s:12},i.a.createElement(p.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},y)),i.a.createElement(J.GridItem,{col:3,s:12},i.a.createElement(p.Box,{hasRadius:!0,background:"neutral0",shadow:"tableShadow"},x)))};en.propTypes={endCol:g.a.node.isRequired,startCol:g.a.node.isRequired};var tn=u.a.div(nn||(nn=c()([`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: `,`;
`])),function(m){return m.theme.spaces[4]});tn.propTypes={children:g.a.node.isRequired}}})})}}]);
