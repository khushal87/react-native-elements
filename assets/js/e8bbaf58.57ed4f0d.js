"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[81520],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,A=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(A,i(i({ref:t},m),{},{components:n})):r.createElement(A,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49334:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={},c=void 0,l={unversionedId:"main/usage/BottomSheet/snack/index",id:"version-4.0.0-beta.0/main/usage/BottomSheet/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/BottomSheet/snack/index.md",sourceDirName:"main/usage/BottomSheet/snack",slug:"/main/usage/BottomSheet/snack/",permalink:"/docs/4.0.0-beta.0/main/usage/BottomSheet/snack/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/BottomSheet/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},m={},p=[],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"snack-player","data-snack-name":"RNE BottomSheet","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20BottomSheet%2C%20Button%2C%20ListItem%20%7D%20from%20'react-native-elements'%3B%0Aimport%20%7B%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20SafeAreaProvider%20%7D%20from%20'react-native-safe-area-context'%3B%0A%0Atype%20BottomSheetComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20BottomSheetComponent%3A%20React.FunctionComponent%3CBottomSheetComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BisVisible%2C%20setIsVisible%5D%20%3D%20useState(false)%3B%0A%20%20const%20list%20%3D%20%5B%0A%20%20%20%20%7B%20title%3A%20'List%20Item%201'%20%7D%2C%0A%20%20%20%20%7B%20title%3A%20'List%20Item%202'%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20title%3A%20'Cancel'%2C%0A%20%20%20%20%20%20containerStyle%3A%20%7B%20backgroundColor%3A%20'red'%20%7D%2C%0A%20%20%20%20%20%20titleStyle%3A%20%7B%20color%3A%20'white'%20%7D%2C%0A%20%20%20%20%20%20onPress%3A%20()%20%3D%3E%20setIsVisible(false)%2C%0A%20%20%20%20%7D%2C%0A%20%20%5D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaProvider%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20title%3D%22Open%20Bottom%20Sheet%22%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setIsVisible(true)%7D%0A%20%20%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CBottomSheet%20modalProps%3D%7B%7B%7D%7D%20isVisible%3D%7BisVisible%7D%3E%0A%20%20%20%20%20%20%20%20%7Blist.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%3CListItem%0A%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7Bl.containerStyle%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7Bl.onPress%7D%0A%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%20style%3D%7Bl.titleStyle%7D%3E%7Bl.title%7D%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%3C%2FBottomSheet%3E%0A%20%20%20%20%3C%2FSafeAreaProvider%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20button%3A%20%7B%0A%20%20%20%20margin%3A%2010%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20BottomSheetComponent%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0}}]);