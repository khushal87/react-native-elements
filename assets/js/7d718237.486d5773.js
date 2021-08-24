"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7821,9248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var A=o.createContext({}),s=function(e){var t=o.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=s(e.components);return o.createElement(A.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,A=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(A,".").concat(m)]||u[m]||p[m]||c;return n?o.createElement(d,r(r({ref:t},l),{},{components:n})):o.createElement(d,r({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=u;var i={};for(var A in t)hasOwnProperty.call(t,A)&&(i[A]=t[A]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var s=2;s<c;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4622:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>A,contentTitle:()=>s,metadata:()=>l,toc:()=>p,default:()=>m});var o=n(2122),a=n(9756),c=(n(7294),n(3905)),r=n(1985),i=["components"],A={},s=void 0,l={unversionedId:"main/usage/SocialIcon/SocialIcon",id:"main/usage/SocialIcon/SocialIcon",isDocsHomePage:!1,title:"SocialIcon",description:"",source:"@site/docs/main/usage/SocialIcon/SocialIcon.md",sourceDirName:"main/usage/SocialIcon",slug:"/main/usage/SocialIcon/SocialIcon",permalink:"/docs/next/main/usage/SocialIcon/SocialIcon",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/SocialIcon/SocialIcon.md",version:"current",frontMatter:{}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)(r.default,{mdxType:"Snack"}))}m.isMDXComponent=!0},1985:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>A,metadata:()=>s,toc:()=>l,default:()=>u});var o=n(2122),a=n(9756),c=(n(7294),n(3905)),r=["components"],i={},A=void 0,s={unversionedId:"main/usage/SocialIcon/snack/index",id:"main/usage/SocialIcon/snack/index",isDocsHomePage:!1,title:"index",description:"`SnackPlayer name=RNE Social Icon",source:"@site/docs/main/usage/SocialIcon/snack/index.md",sourceDirName:"main/usage/SocialIcon/snack",slug:"/main/usage/SocialIcon/snack/index",permalink:"/docs/next/main/usage/SocialIcon/snack/index",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/main/usage/SocialIcon/snack/index.md",version:"current",frontMatter:{}},l=[],p={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,c.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("div",{className:"snack-player","data-snack-name":"RNE Social Icon","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20SocialIcon%2C%20SocialIconProps%20%7D%20from%20'react-native-elements'%3B%0A%0Atype%20IconData%20%3D%20%7B%0A%20%20type%3A%20SocialMediaType%3B%0A%20%20iconType%3A%20string%3B%0A%7D%3B%0A%0Aconst%20dataList%3A%20Partial%3CIconData%3E%5B%5D%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20type%3A%20'facebook'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'twitter'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'google-plus-official'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'google'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'pinterest'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'linkedin'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'youtube'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'vimeo'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'tumblr'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'instagram'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'quora'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'flickr'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'foursquare'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'wordpress'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'stumbleupon'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'github'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'github-alt'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'twitch'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'medium'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'soundcloud'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'stack-overflow'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'gitlab'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'angellist'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'codepen'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'weibo'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'vk'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'facebook-messenger'%2C%0A%20%20%20%20iconType%3A%20'material-community'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20type%3A%20'whatsapp'%2C%0A%20%20%7D%2C%0A%5D%3B%0A%0Atype%20SocialIconsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20SocialIcons%3A%20React.FunctionComponent%3CSocialIconsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20socialProps%20%3D%20%7B%7D%3B%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%20%20%7B_.chunk(dataList%2C%203).map(%0A%20%20%20%20%20%20%20%20%20%20(chunk%3A%20Partial%3CIconData%3E%5B%5D%2C%20chunkIndex%3A%20React.Key)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'space-around'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginTop%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20'%234c4c4c'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7BchunkIndex%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bchunk.map((l%3A%20Partial%3CIconData%3E%2C%20i%3A%20React.Key)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CSocialIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3D%7Bl.type%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20iconType%3D%7Bl.iconType%20%3F%20l.iconType%20%3A%20'font-awesome'%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7B%60%24%7BchunkIndex%7D-%24%7Bi%7D%60%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20)%0A%20%20%20%20%20%20%20%20)%7D%0A%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aexport%20default%20SocialIcons%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}u.isMDXComponent=!0}}]);