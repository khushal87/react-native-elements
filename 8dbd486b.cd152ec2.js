(window.webpackJsonp=window.webpackJsonp||[]).push([[122,54],{219:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),l=(a(0),a(291)),r=a(76),b={id:"dialog",title:"Dialog",slug:"/dialog"},c={unversionedId:"main/dialog",id:"main/dialog",isDocsHomePage:!1,title:"Dialog",description:"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks. You can wrap any component with a simple Dialog component to display quick information to the user.",source:"@site/docs/main/dialog.md",slug:"/dialog",permalink:"/docs/next/dialog",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/dialog.md",version:"current"},o=[{value:"Usage",id:"usage",children:[]}],p={rightToc:o};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks. You can wrap any component with a simple Dialog component to display quick information to the user."),Object(l.b)("div",{className:"component-preview component-preview--grid component-preview--grid-3"},Object(l.b)("figure",null,Object(l.b)("img",{src:"/img/dialog/dialog--simple.jpg",alt:"Simple Dialog"}),Object(l.b)("figcaption",null,"Simple")),Object(l.b)("figure",null,Object(l.b)("img",{src:"/img/dialog/dialog--multi.jpg",alt:"Multi Action Dialog"}),Object(l.b)("figcaption",null,"Multi Action")),Object(l.b)("figure",null,Object(l.b)("img",{src:"/img/dialog/dialog--noaction.jpg",alt:"Buttonless Dialog"}),Object(l.b)("figcaption",null,"No Action"))),Object(l.b)("div",{className:"component-preview component-preview--grid component-preview--grid-3"},Object(l.b)("figure",null,Object(l.b)("img",{src:"/img/dialog/dialog--loading.gif",alt:"Loading Dialog"}),Object(l.b)("figcaption",null,"Loading")),Object(l.b)("figure",null,Object(l.b)("img",{src:"/img/dialog/dialog--custom1.gif",alt:"Custom Multi Action"}),Object(l.b)("figcaption",null,"Custom Multi Action")),Object(l.b)("figure",null,Object(l.b)("img",{src:"/img/dialog/dialog--custom2.gif",alt:"Custom No Action"}),Object(l.b)("figcaption",null,"Custom No Action"))),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'import React, { useState } from \'react\';\nimport { View, Text } from \'react-native\';\nimport { Dialog, Button } from \'react-native-elements\';\n\nconst DialogExample = () => {\n  const [visible1, setVisible1] = useState(false);\n  const [visible2, setVisible2] = useState(false);\n  const [visible3, setVisible3] = useState(false);\n\n  const toggleDialog1 = () => {\n    setVisible1(!visible1);\n  };\n  const toggleDialog2 = () => {\n    setVisible2(!visible2);\n  };\n  const toggleDialog3 = () => {\n    setVisible3(!visible3);\n  };\n\n  return (\n    <View>\n      <Button title="Open Simple Dialog" onPress={toggleDialog1} />\n      <Button\n        title="Open Mutli Action Dialog"\n        onPress={toggleDialog2}\n        buttonStyle={styles.button}\n      />\n      <Button\n        title="Open Loading Dialog"\n        onPress={toggleDialog3}\n        buttonStyle={styles.button}\n      />\n      // Simple Dialog\n      <Dialog isVisible={visible1} onBackdropPress={toggleDialog1}>\n        <Dialog.Title title="Dialog Title" />\n        <Text>Dialog body text. Add relevant information here.</Text>\n      </Dialog>\n      // Multi-Action Dialog\n      <Dialog isVisible={visible2} onBackdropPress={toggleDialog2}>\n        <Dialog.Title title="Dialog Title" />\n        <Text>Dialog body text. Add relevant information here.</Text>\n        <Dialog.Actions>\n          <Dialog.Button\n            title="ACTION 1"\n            onPress={() => console.log(\'Primary Action Clicked!\')}\n          />\n          <Dialog.Button\n            title="ACTION 2"\n            onPress={() => console.log(\'Secondary Action Clicked!\')}\n          />\n        </Dialog.Actions>\n      </Dialog>\n      // Loading Dialog\n      <Dialog isVisible={visible3} onBackdropPress={toggleDialog3}>\n        <Dialog.Loading />\n      </Dialog>\n    </View>\n  );\n};\n')),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Web-platform specific note:"),Object(l.b)("p",{parentName:"blockquote"},"You ",Object(l.b)("strong",{parentName:"p"},"must")," pass a valid React Native ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/modal"}),Object(l.b)("inlineCode",{parentName:"a"},"Modal"))," component implementation\ninto ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#modalcomponent"}),Object(l.b)("inlineCode",{parentName:"a"},"ModalComponent"))," prop because ",Object(l.b)("inlineCode",{parentName:"p"},"Modal")," component is not implemented yet in ",Object(l.b)("inlineCode",{parentName:"p"},"react-native-web"))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"...\nimport Modal from 'modal-react-native-web';\n\n...\n\n<Dialog ModalComponent={Modal} ... />\n...\n")),Object(l.b)("hr",null),Object(l.b)(r.default,{mdxType:"Props"}),Object(l.b)("hr",null))}d.isMDXComponent=!0},291:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=i.a.createContext({}),p=function(e){var t=i.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},d=function(e){var t=p(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},j=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(a),j=n,m=d["".concat(r,".").concat(j)]||d[j]||O[j]||l;return a?i.a.createElement(m,b(b({ref:t},o),{},{components:a})):i.a.createElement(m,b({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=j;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,r[1]=b;for(var o=2;o<l;o++)r[o]=a[o];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),l=(a(0),a(291)),r={},b={unversionedId:"main/props/dialog",id:"main/props/dialog",isDocsHomePage:!1,title:"dialog",description:"Props",source:"@site/docs/main/props/dialog.md",slug:"/main/props/dialog",permalink:"/docs/next/main/props/dialog",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/props/dialog.md",version:"current"},c=[{value:"Props",id:"props",children:[]},{value:"Child Components",id:"child-components",children:[{value:"Dialog.Title",id:"dialogtitle",children:[]},{value:"Dialog.Loading",id:"dialogloading",children:[]},{value:"Dialog.Actions",id:"dialogactions",children:[]},{value:"Dialog.Button",id:"dialogbutton",children:[]}]},{value:"Reference",id:"reference",children:[{value:"<code>isVisible</code>",id:"isvisible",children:[]},{value:"<code>loadingStyle</code>",id:"loadingstyle",children:[]},{value:"<code>loadingProps</code>",id:"loadingprops",children:[]},{value:"<code>title</code>",id:"title",children:[]},{value:"<code>titleStyle</code>",id:"titlestyle",children:[]},{value:"<code>titleProps</code>",id:"titleprops",children:[]},{value:"<code>onBackdropPress</code>",id:"onbackdroppress",children:[]},{value:"<code>overlayStyle</code>",id:"overlaystyle",children:[]},{value:"<code>theme</code>",id:"theme",children:[]},{value:"<code>children</code>",id:"children",children:[]}]}],o={rightToc:c};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"props"},"Props"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Also receives all\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnativeelements.com/docs/overlay#props"}),"Overlay")," props except ",Object(l.b)("inlineCode",{parentName:"p"},"fullscreen"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#isvisible"}),Object(l.b)("inlineCode",{parentName:"a"},"isVisible"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#loadingStyle"}),Object(l.b)("inlineCode",{parentName:"a"},"loadingStyle"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#loadingProps"}),Object(l.b)("inlineCode",{parentName:"a"},"loadingProps"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#onBackdropPress"}),Object(l.b)("inlineCode",{parentName:"a"},"onBackdropPress"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#overlayStyle"}),Object(l.b)("inlineCode",{parentName:"a"},"overlayStyle"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#theme"}),Object(l.b)("inlineCode",{parentName:"a"},"theme"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#children"}),Object(l.b)("inlineCode",{parentName:"a"},"children")))),Object(l.b)("hr",null),Object(l.b)("h2",{id:"child-components"},"Child Components"),Object(l.b)("h3",{id:"dialogtitle"},"Dialog.Title"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#title"}),Object(l.b)("inlineCode",{parentName:"a"},"title"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#titleStyle"}),Object(l.b)("inlineCode",{parentName:"a"},"titleStyle"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#titleProps"}),Object(l.b)("inlineCode",{parentName:"a"},"titleProps")))),Object(l.b)("h3",{id:"dialogloading"},"Dialog.Loading"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#loadingStyle"}),Object(l.b)("inlineCode",{parentName:"a"},"loadingStyle"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#loadingProps"}),Object(l.b)("inlineCode",{parentName:"a"},"loadingProps")))),Object(l.b)("h3",{id:"dialogactions"},"Dialog.Actions"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#children"}),Object(l.b)("inlineCode",{parentName:"a"},"children")))),Object(l.b)("h3",{id:"dialogbutton"},"Dialog.Button"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Receives all ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/main/props/button#props"}),"Button")," props.")),Object(l.b)("hr",null),Object(l.b)("h2",{id:"reference"},"Reference"),Object(l.b)("h3",{id:"isvisible"},Object(l.b)("inlineCode",{parentName:"h3"},"isVisible")),Object(l.b)("p",null,"If true, the dialog is visible"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"boolean"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"false")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"loadingstyle"},Object(l.b)("inlineCode",{parentName:"h3"},"loadingStyle")),Object(l.b)("p",null,"Add additional styling for loading component (optional)"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"View style (object)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"loadingprops"},Object(l.b)("inlineCode",{parentName:"h3"},"loadingProps")),Object(l.b)("p",null,"Add additional props for ActivityIndicator component (optional)"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"{",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://reactnative.dev/docs/activityindicator#props"}),"...ActivityIndicator props"),"}"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Internal object")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"title"},Object(l.b)("inlineCode",{parentName:"h3"},"title")),Object(l.b)("p",null,"Dialog title (optional)"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"titlestyle"},Object(l.b)("inlineCode",{parentName:"h3"},"titleStyle")),Object(l.b)("p",null,"Add additional styling for title component (optional)"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Text style (object)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"titleprops"},Object(l.b)("inlineCode",{parentName:"h3"},"titleProps")),Object(l.b)("p",null,"Add additional props for Text component (optional)"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"{",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"https://reactnative.dev/docs/text#props"}),"...Text props"),"}"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"onbackdroppress"},Object(l.b)("inlineCode",{parentName:"h3"},"onBackdropPress")),Object(l.b)("p",null,"Handler for backdrop press"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"overlaystyle"},Object(l.b)("inlineCode",{parentName:"h3"},"overlayStyle")),Object(l.b)("p",null,"Add dditional styling to the internal Overlay component (optional)"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"View Style (object)"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Internal Style")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"theme"},Object(l.b)("inlineCode",{parentName:"h3"},"theme")),Object(l.b)("p",null,"Provides a theme to the dialog. (optional)"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Theme(Primary)")))),Object(l.b)("hr",null),Object(l.b)("h3",{id:"children"},Object(l.b)("inlineCode",{parentName:"h3"},"children")),Object(l.b)("p",null,"Enclosed components. (optional)"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"React Element"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(l.b)("hr",null))}p.isMDXComponent=!0}}]);