"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[70283],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,v=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(v,u(u({ref:r},s),{},{components:t})):n.createElement(v,u({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=p;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var c=2;c<o;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:(e,r,t)=>{t.d(r,{Z:()=>u});var n=t(67294),a=t(86010);const o="tabItem_Ymn6";function u(e){var r=e.children,t=e.hidden,u=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:t},r)}},74866:(e,r,t)=>{t.d(r,{Z:()=>E});var n=t(87462),a=t(67294),o=t(86010),u=t(12466),i=t(16550),l=t(91980),c=t(67392),s=t(50012);function d(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}function p(e){var r=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=r?r:d(t);return function(e){var r=(0,c.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,t])}function f(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function v(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId,o=(0,i.k6)(),u=function(e){var r=e.queryString,t=void 0!==r&&r,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,l._X)(u),(0,a.useCallback)((function(e){if(u){var r=new URLSearchParams(o.location.search);r.set(u,e),o.replace(Object.assign({},o.location,{search:r.toString()}))}}),[u,o])]}function m(e){var r,t,n,o,u=e.defaultValue,i=e.queryString,l=void 0!==i&&i,c=e.groupId,d=p(e),m=(0,a.useState)((function(){return function(e){var r,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(r=n.find((function(e){return e.default})))?r:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:d})})),b=m[0],h=m[1],y=v({queryString:l,groupId:c}),g=y[0],w=y[1],k=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),t=(0,s.Nk)(r),n=t[0],o=t[1],[n,(0,a.useCallback)((function(e){r&&o.set(e)}),[r,o])]),E=k[0],O=k[1],T=function(){var e=null!=g?g:E;return f({value:e,tabValues:d})?e:null}();return(0,a.useEffect)((function(){T&&h(T)}),[T]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);h(e),w(e),O(e)}),[w,O,d]),tabValues:d}}var b=t(72389);const h="tabList__CuJ",y="tabItem_LNqP";function g(e){var r=e.className,t=e.block,i=e.selectedValue,l=e.selectValue,c=e.tabValues,s=[],d=(0,u.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var r=e.currentTarget,t=s.indexOf(r),n=c[t].value;n!==i&&(d(r),l(n))},f=function(e){var r,t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,a=s.indexOf(e.currentTarget)+1;t=null!=(n=s[a])?n:s[0];break;case"ArrowLeft":var o,u=s.indexOf(e.currentTarget)-1;t=null!=(o=s[u])?o:s[s.length-1]}null==(r=t)||r.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},r)},c.map((function(e){var r=e.value,t=e.label,u=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,key:r,ref:function(e){return s.push(e)},onKeyDown:f,onClick:p},u,{className:(0,o.Z)("tabs__item",y,null==u?void 0:u.className,{"tabs__item--active":i===r})}),null!=t?t:r)})))}function w(e){var r=e.lazy,t=e.children,n=e.selectedValue;if(r){var o=t.find((function(e){return e.props.value===n}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})})))}function k(e){var r=m(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",h)},a.createElement(g,(0,n.Z)({},e,r)),a.createElement(w,(0,n.Z)({},e,r)))}function E(e){var r=(0,b.Z)();return a.createElement(k,(0,n.Z)({key:String(r)},e))}},90882:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),u=(t(74866),t(85162),["components"]),i={id:"card_divider",title:"Card.Divider"},l=void 0,c={unversionedId:"components/card_divider",id:"version-4.0.0-rc.3/components/card_divider",title:"Card.Divider",description:"Add divider to the card which acts as a separator between elements.",source:"@site/versioned_docs/version-4.0.0-rc.3/components/Card.Divider.mdx",sourceDirName:"components",slug:"/components/card_divider",permalink:"/docs/4.0.0-rc.3/components/card_divider",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.3/components/Card.Divider.mdx",tags:[],version:"4.0.0-rc.3",frontMatter:{id:"card_divider",title:"Card.Divider"},sidebar:"docs",previous:{title:"Card",permalink:"/docs/4.0.0-rc.3/components/card"},next:{title:"Card.FeaturedSubtitle",permalink:"/docs/4.0.0-rc.3/components/card_featuredsubtitle"}},s={},d=[{value:"Import",id:"import",level:2},{value:"Props",id:"props",level:2}],p={toc:d};function f(e){var r=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Add divider to the card which acts as a separator between elements.\nThis, Receives all ",(0,o.kt)("a",{parentName:"p",href:"divider#props"},"Divider")," props."),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Card } from "@rneui/themed";\n')),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"divider#props"},"Divider")," props.")))}f.isMDXComponent=!0}}]);