(window.webpackJsonp=window.webpackJsonp||[]).push([[103,171],{203:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),c=(n(0),n(291)),o=n(99),i={id:"speeddial",title:"Speed Dial"},b={unversionedId:"speeddial",id:"version-3.4.2/speeddial",isDocsHomePage:!1,title:"Speed Dial",description:"When pressed, a floating action button can display three to six related actions in the form of a speed dial. If more than six actions are needed, something other than a FAB should be used to present them. Upon press, the FAB remains visible and emits a stack of related actions. If the FAB is tapped in this state, it should either initiate its default action or close the speed dial actions.",source:"@site/versioned_docs/version-3.4.2/speeddial.md",slug:"/speeddial",permalink:"/docs/speeddial",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/speeddial.md",version:"3.4.2",sidebar:"version-3.4.2/docs",previous:{title:"SocialIcon",permalink:"/docs/social_icon"},next:{title:"Switch",permalink:"/docs/switch"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Child Components",id:"child-components",children:[{value:"SpeedDial.Action",id:"speeddialaction",children:[]}]}],p={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"When pressed, a floating action button can display three to six related actions in the form of a speed dial. If more than six actions are needed, something other than a FAB should be used to present them. Upon press, the FAB remains visible and emits a stack of related actions. If the FAB is tapped in this state, it should either initiate its default action or close the speed dial actions."),Object(c.b)("div",{className:"component-preview component-preview--grid component-preview--grid-10"},Object(c.b)("figure",null,Object(c.b)("img",{src:"/img/SpeedDial.gif",alt:"Speed Dial"}))),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { SpeedDial } from 'react-native-elements';\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<SpeedDial\n  isOpen={open}\n  icon={{ name: 'edit', color: '#fff' }}\n  openIcon={{ name: 'close', color: '#fff' }}\n  onOpen={() => setOpen(!open)}\n  onClose={() => setOpen(!open)}\n>\n  <SpeedDial.Action\n    icon={{ name: 'add', color: '#fff' }}\n    title=\"Add\"\n    onPress={() => console.log('Add Something')}\n  />\n  <SpeedDial.Action\n    icon={{ name: 'delete', color: '#fff' }}\n    title=\"Delete\"\n    onPress={() => console.log('Delete Something')}\n  />\n</SpeedDial>\n")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)(o.default,{mdxType:"Props"}),Object(c.b)("hr",null),Object(c.b)("h2",{id:"child-components"},"Child Components"),Object(c.b)("h3",{id:"speeddialaction"},"SpeedDial.Action"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Receives all ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/fab#props"}),"FAB")," props.")))}d.isMDXComponent=!0},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=p(n),O=a,m=d["".concat(o,".").concat(O)]||d[O]||s[O]||c;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=O;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(291)),o={},i={unversionedId:"props/speeddial",id:"version-3.4.2/props/speeddial",isDocsHomePage:!1,title:"speeddial",description:"Also receives all FAB props except size",source:"@site/versioned_docs/version-3.4.2/props/speeddial.md",slug:"/props/speeddial",permalink:"/docs/props/speeddial",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-3.4.2/props/speeddial.md",version:"3.4.2"},b=[{value:"Reference",id:"reference",children:[{value:"<code>isOpen</code>",id:"isopen",children:[]},{value:"<code>openIcon</code>",id:"openicon",children:[]},{value:"<code>transitionDuration</code>",id:"transitionduration",children:[]},{value:"<code>onOpen</code>",id:"onopen",children:[]},{value:"<code>onClose</code>",id:"onclose",children:[]}]}],l={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Also receives all ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactnativeelements.com/docs/fab#props"}),"FAB")," props except size")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#isopen"}),Object(c.b)("inlineCode",{parentName:"a"},"open"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#openIcon"}),Object(c.b)("inlineCode",{parentName:"a"},"openIcon"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#onOpen"}),Object(c.b)("inlineCode",{parentName:"a"},"onOpen"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#onClose"}),Object(c.b)("inlineCode",{parentName:"a"},"onClose"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"#transitionDuration"}),Object(c.b)("inlineCode",{parentName:"a"},"transitionDuration")))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"reference"},"Reference"),Object(c.b)("h3",{id:"isopen"},Object(c.b)("inlineCode",{parentName:"h3"},"isOpen")),Object(c.b)("p",null,"Opens the action stack"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"boolean")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"false"))))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"openicon"},Object(c.b)("inlineCode",{parentName:"h3"},"openIcon")),Object(c.b)("p",null,"Icon shown on FAB when action stack is open"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"IconNode")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"none"))))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"transitionduration"},Object(c.b)("inlineCode",{parentName:"h3"},"transitionDuration")),Object(c.b)("p",null,"The duration for the transition, in milliseconds."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"Number")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"150"))))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"onopen"},Object(c.b)("inlineCode",{parentName:"h3"},"onOpen")),Object(c.b)("p",null,"Callback fired when the component requests to be open."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"function")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"none"))))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"onclose"},Object(c.b)("inlineCode",{parentName:"h3"},"onClose")),Object(c.b)("p",null,"Callback fired when the component requests to be closed."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"function")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"none"))))),Object(c.b)("hr",null))}p.isMDXComponent=!0}}]);