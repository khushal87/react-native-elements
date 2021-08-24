"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7234,8882],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return t?n.createElement(g,o(o({ref:r},l),{},{components:t})):n.createElement(g,o({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1966:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>s,contentTitle:()=>d,metadata:()=>l,toc:()=>p,default:()=>m});var n=t(2122),a=t(9756),i=(t(7294),t(3905)),o=t(3210),c=["components"],s={},d=void 0,l={unversionedId:"main/usage/PricingCard/PricingCard",id:"main/usage/PricingCard/PricingCard",isDocsHomePage:!1,title:"PricingCard",description:"",source:"@site/docs/main/usage/PricingCard/PricingCard.md",sourceDirName:"main/usage/PricingCard",slug:"/main/usage/PricingCard/PricingCard",permalink:"/docs/next/main/usage/PricingCard/PricingCard",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/PricingCard/PricingCard.md",version:"current",frontMatter:{}},p=[],u={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)(o.default,{mdxType:"Snack"}))}m.isMDXComponent=!0},3210:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>d,toc:()=>l,default:()=>u});var n=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],c={},s=void 0,d={unversionedId:"main/usage/PricingCard/snack/index",id:"main/usage/PricingCard/snack/index",isDocsHomePage:!1,title:"index",description:"`SnackPlayer name=RNE Pricing",source:"@site/docs/main/usage/PricingCard/snack/index.md",sourceDirName:"main/usage/PricingCard/snack",slug:"/main/usage/PricingCard/snack/index",permalink:"/docs/next/main/usage/PricingCard/snack/index",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/PricingCard/snack/index.md",version:"current",frontMatter:{}},l=[],p={toc:l};function u(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"snack-player","data-snack-name":"RNE Pricing","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20PricingCard%2C%20colors%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20PricingCardComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Pricing%3A%20React.FunctionComponent%3CPricingCardComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%20%20%3CPricingCard%0A%20%20%20%20%20%20%20%20%20%20color%3D%7Bcolors.primary%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Free%22%0A%20%20%20%20%20%20%20%20%20%20price%3D%22%240%22%0A%20%20%20%20%20%20%20%20%20%20info%3D%7B%5B'1%20User'%2C%20'Basic%20Support'%2C%20'All%20Core%20Features'%5D%7D%0A%20%20%20%20%20%20%20%20%20%20button%3D%7B%7B%20title%3A%20'%20GET%20STARTED'%2C%20icon%3A%20'flight-takeoff'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPricingCard%0A%20%20%20%20%20%20%20%20%20%20color%3D%7Bcolors.secondary%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Starter%22%0A%20%20%20%20%20%20%20%20%20%20price%3D%22%2419%22%0A%20%20%20%20%20%20%20%20%20%20info%3D%7B%5B'10%20Users'%2C%20'Basic%20Support'%2C%20'All%20Core%20Features'%5D%7D%0A%20%20%20%20%20%20%20%20%20%20button%3D%7B%7B%20title%3A%20'%20GET%20STARTED'%2C%20icon%3A%20'flight-takeoff'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CPricingCard%0A%20%20%20%20%20%20%20%20%20%20color%3D%7Bcolors.secondary2%7D%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Enterprise%22%0A%20%20%20%20%20%20%20%20%20%20price%3D%22%2449%22%0A%20%20%20%20%20%20%20%20%20%20info%3D%7B%5B'100%20Users'%2C%20'One%20on%20One%20Support'%2C%20'All%20Core%20Features'%5D%7D%0A%20%20%20%20%20%20%20%20%20%20button%3D%7B%7B%20title%3A%20'%20GET%20STARTED'%2C%20icon%3A%20'flight-takeoff'%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20Pricing%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}u.isMDXComponent=!0}}]);