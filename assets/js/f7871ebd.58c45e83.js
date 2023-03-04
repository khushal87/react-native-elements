"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[28944,64952],{3905:(t,e,n)=>{n.d(e,{Zo:()=>A,kt:()=>d});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=i.createContext({}),l=function(t){var e=i.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},A=function(t){var e=l(t.components);return i.createElement(m.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},C=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,m=t.parentName,A=o(t,["components","mdxType","originalType","parentName"]),C=l(n),d=a,u=C["".concat(m,".").concat(d)]||C[d]||c[d]||s;return n?i.createElement(u,r(r({ref:e},A),{},{components:n})):i.createElement(u,r({ref:e},A))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,r=new Array(s);r[0]=C;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:a,r[1]=o;for(var l=2;l<s;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}C.displayName="MDXCreateElement"},78353:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>m,metadata:()=>A,toc:()=>C});var i=n(87462),a=n(63366),s=(n(67294),n(3905)),r=n(24006),o=["components"],m={},l=void 0,A={unversionedId:"main/usage/ListItem/ListItem",id:"version-4.0.0-beta.0/main/usage/ListItem/ListItem",title:"ListItem",description:"Using Map Function - Implemented with avatar",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/ListItem/ListItem.md",sourceDirName:"main/usage/ListItem",slug:"/main/usage/ListItem/",permalink:"/docs/4.0.0-beta.0/main/usage/ListItem/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/ListItem/ListItem.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},c={},C=[{value:"Using Map Function - Implemented with avatar",id:"using-map-function---implemented-with-avatar",level:3},{value:"Using Map Function - Implemented with link and icon",id:"using-map-function---implemented-with-link-and-icon",level:3},{value:"Using RN FlatList - Implemented with link and avatar",id:"using-rn-flatlist---implemented-with-link-and-avatar",level:3},{value:"Using RN FlatList - Implemented with custom avatar component.",id:"using-rn-flatlist---implemented-with-custom-avatar-component",level:3},{value:"ListItem implemented with custom View for Subtitle",id:"listitem-implemented-with-custom-view-for-subtitle",level:3},{value:"Badges",id:"badges",level:3},{value:"Linear gradient + Scale feedback",id:"linear-gradient--scale-feedback",level:3},{value:"ListItem Accordion",id:"listitem-accordion",level:3},{value:"ListItem Swipeable",id:"listitem-swipeable",level:3}],d={toc:C};function u(t){var e=t.components,n=(0,a.Z)(t,o);return(0,s.kt)("wrapper",(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(r.default,{mdxType:"Snack"}),(0,s.kt)("h3",{id:"using-map-function---implemented-with-avatar"},"Using Map Function - Implemented with avatar"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { ListItem, Avatar } from 'react-native-elements'\n\nconst list = [\n  {\n    name: 'Amy Farha',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',\n    subtitle: 'Vice President'\n  },\n  {\n    name: 'Chris Jackson',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',\n    subtitle: 'Vice Chairman'\n  },\n  ... // more items\n]\n\n<View>\n  {\n    list.map((l, i) => (\n      <ListItem key={i} bottomDivider>\n        <Avatar source={{uri: l.avatar_url}} />\n        <ListItem.Content>\n          <ListItem.Title>{l.name}</ListItem.Title>\n          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>\n        </ListItem.Content>\n      </ListItem>\n    ))\n  }\n</View>\n")),(0,s.kt)("h3",{id:"using-map-function---implemented-with-link-and-icon"},"Using Map Function - Implemented with link and icon"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { ListItem, Icon } from 'react-native-elements'\n\nconst list = [\n  {\n    title: 'Appointments',\n    icon: 'av-timer'\n  },\n  {\n    title: 'Trips',\n    icon: 'flight-takeoff'\n  },\n  ... // more items\n]\n\n<View>\n  {\n    list.map((item, i) => (\n      <ListItem key={i} bottomDivider>\n        <Icon name={item.icon} />\n        <ListItem.Content>\n          <ListItem.Title>{item.title}</ListItem.Title>\n        </ListItem.Content>\n        <ListItem.Chevron />\n      </ListItem>\n    ))\n  }\n</View>\n")),(0,s.kt)("h3",{id:"using-rn-flatlist---implemented-with-link-and-avatar"},"Using RN FlatList - Implemented with link and avatar"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { ListItem, Avatar } from 'react-native-elements'\n\nconst list = [\n  {\n    name: 'Amy Farha',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',\n    subtitle: 'Vice President'\n  },\n  {\n    name: 'Chris Jackson',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',\n    subtitle: 'Vice Chairman'\n  },\n  ... // more items\n]\n\nkeyExtractor = (item, index) => index.toString()\n\nrenderItem = ({ item }) => (\n  <ListItem bottomDivider>\n    <Avatar source={{uri: item.avatar_url}} />\n    <ListItem.Content>\n      <ListItem.Title>{item.name}</ListItem.Title>\n      <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>\n    </ListItem.Content>\n    <ListItem.Chevron />\n  </ListItem>\n)\n\nrender () {\n  return (\n    <FlatList\n      keyExtractor={this.keyExtractor}\n      data={list}\n      renderItem={this.renderItem}\n    />\n  )\n}\n")),(0,s.kt)("h3",{id:"using-rn-flatlist---implemented-with-custom-avatar-component"},"Using RN FlatList - Implemented with custom avatar component."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { ListItem, Avatar } from 'react-native-elements'\n\nconst list = [\n  {\n    name: 'Amy Farha',\n    subtitle: 'Vice President'\n  },\n  {\n    name: 'Chris Jackson',\n    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',\n    subtitle: 'Vice Chairman'\n  },\n  ... // more items\n]\n\nkeyExtractor = (item, index) => index.toString()\n\nrenderItem = ({ item }) => (\n  <ListItem bottomDivider >\n    <Avatar title={item.name[0]} source={item.avatar_url && { uri: item.avatar_url }}/>\n    <ListItem.Content>\n      <ListItem.Title>{item.name}</ListItem.Title>\n      <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>\n    </ListItem.Content>\n    <ListItem.Chevron />\n  </ListItem>\n)\n\nrender () {\n  return (\n    <FlatList\n      keyExtractor={this.keyExtractor}\n      data={list}\n      renderItem={this.renderItem}\n    />\n  )\n}\n")),(0,s.kt)("h3",{id:"listitem-implemented-with-custom-view-for-subtitle"},"ListItem implemented with custom View for Subtitle"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { ListItem, Avatar } from 'react-native-elements'\n\nrender () {\n  return (\n    <ListItem>\n      <ListItem.Content>\n        <ListItem.Title>Limited supply! Its like digital gold!</ListItem.Title>\n        <View style={styles.subtitleView}>\n          <Image source={require('../images/rating.png')} style={styles.ratingImage}/>\n          <Text style={styles.ratingText}>5 months ago</Text>\n        </View>\n      </ListItem.Content>\n    </ListItem>\n  )\n}\n\nstyles = StyleSheet.create({\n  subtitleView: {\n    flexDirection: 'row',\n    paddingLeft: 10,\n    paddingTop: 5\n  },\n  ratingImage: {\n    height: 19.21,\n    width: 100\n  },\n  ratingText: {\n    paddingLeft: 10,\n    color: 'grey'\n  }\n})\n")),(0,s.kt)("h3",{id:"badges"},"Badges"),(0,s.kt)("p",null,"Example badge usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"<ListItem>\n  <Badge\n    value={3}\n    textStyle={{ color: 'orange' }}\n    containerStyle={{ marginTop: -20 }}\n  />\n</ListItem>\n")),(0,s.kt)("h3",{id:"linear-gradient--scale-feedback"},"Linear gradient + Scale feedback"),(0,s.kt)("img",{src:"/img/listitem_with_gradient_scale.gif",width:"500"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { ListItem, Avatar } from 'react-native-elements';\nimport TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale\nimport LinearGradient from 'react-native-linear-gradient'; // Only if no expo\n\n<ListItem\n  Component={TouchableScale}\n  friction={90} //\n  tension={100} // These props are passed to the parent component (here TouchableScale)\n  activeScale={0.95} //\n  linearGradientProps={{\n    colors: ['#FF9800', '#F44336'],\n    start: { x: 1, y: 0 },\n    end: { x: 0.2, y: 0 },\n  }}\n  ViewComponent={LinearGradient} // Only if no expo\n>\n  <Avatar rounded source={{ uri: avatar_url }} />\n  <ListItem.Content>\n    <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>\n      Chris Jackson\n    </ListItem.Title>\n    <ListItem.Subtitle style={{ color: 'white' }}>\n      Vice Chairman\n    </ListItem.Subtitle>\n  </ListItem.Content>\n  <ListItem.Chevron color=\"white\" />\n</ListItem>;\n")),(0,s.kt)("h3",{id:"listitem-accordion"},"ListItem Accordion"),(0,s.kt)("img",{src:"/img/accorsion.gif",width:"500"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'<ListItem.Accordion\n  content={\n    <>\n      <Icon name="place" size={30} />\n      <ListItem.Content>\n        <ListItem.Title>List Accordion</ListItem.Title>\n      </ListItem.Content>\n    </>\n  }\n  isExpanded={expanded}\n  onPress={() => {\n    setExpanded(!expanded);\n  }}\n>\n  {list2.map((l, i) => (\n    <ListItem key={i} onPress={log} bottomDivider>\n      <Avatar title={l.name[0]} source={{ uri: l.avatar_url }} />\n      <ListItem.Content>\n        <ListItem.Title>{l.name}</ListItem.Title>\n        <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>\n      </ListItem.Content>\n      <ListItem.Chevron />\n    </ListItem>\n  ))}\n</ListItem.Accordion>\n')),(0,s.kt)("h3",{id:"listitem-swipeable"},"ListItem Swipeable"),(0,s.kt)("img",{src:"/img/swipeable.gif",width:"500"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"<ListItem.Swipeable\n  leftContent={\n    <Button\n      title=\"Info\"\n      icon={{ name: 'info', color: 'white' }}\n      buttonStyle={{ minHeight: '100%' }}\n    />\n  }\n  rightContent={\n    <Button\n      title=\"Delete\"\n      icon={{ name: 'delete', color: 'white' }}\n      buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}\n    />\n  }\n>\n  <Icon name=\"My Icon\" />\n  <ListItem.Content>\n    <ListItem.Title>Hello Swiper</ListItem.Title>\n  </ListItem.Content>\n  <ListItem.Chevron />\n</ListItem.Swipeable>\n")))}u.isMDXComponent=!0},24006:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>A,contentTitle:()=>m,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),a=n(63366),s=(n(67294),n(3905)),r=["components"],o={},m=void 0,l={unversionedId:"main/usage/ListItem/snack/index",id:"version-4.0.0-beta.0/main/usage/ListItem/snack/index",title:"index",description:"",source:"@site/versioned_docs/version-4.0.0-beta.0/main/usage/ListItem/snack/index.md",sourceDirName:"main/usage/ListItem/snack",slug:"/main/usage/ListItem/snack/",permalink:"/docs/4.0.0-beta.0/main/usage/ListItem/snack/",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/main/usage/ListItem/snack/index.md",tags:[],version:"4.0.0-beta.0",frontMatter:{}},A={},c=[],C={toc:c};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,s.kt)("wrapper",(0,i.Z)({},C,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"snack-player","data-snack-name":"RNE ListItem","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20StyleSheet%2C%20Image%2C%20FlatList%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%0A%20%20Text%2C%0A%20%20ListItem%2C%0A%20%20Avatar%2C%0A%20%20Icon%2C%0A%20%20Badge%2C%0A%20%20ListItemProps%2C%0A%20%20Button%2C%0A%20%20Switch%2C%0A%20%20colors%0A%7D%20from%20'react-native-elements'%3B%0A%0Aconst%20log%20%3D%20()%20%3D%3E%20console.log('this%20is%20an%20example%20method')%3B%0A%0Atype%20List1Data%20%3D%20%7B%0A%20%20title%3A%20string%3B%0A%20%20icon%3A%20string%3B%0A%7D%3B%0Aconst%20list1%3A%20List1Data%5B%5D%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20title%3A%20'Appointments'%2C%0A%20%20%20%20icon%3A%20'av-timer'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20'Trips'%2C%0A%20%20%20%20icon%3A%20'flight-takeoff'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20'Passwords'%2C%0A%20%20%20%20icon%3A%20'fingerprint'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20'Pitches'%2C%0A%20%20%20%20icon%3A%20'lightbulb-outline'%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20title%3A%20'Updates'%2C%0A%20%20%20%20icon%3A%20'track-changes'%2C%0A%20%20%7D%2C%0A%5D%3B%0A%0Atype%20List2Data%20%3D%20%7B%0A%20%20name%3A%20string%3B%0A%20%20avatar_url%3A%20string%3B%0A%20%20subtitle%3A%20string%3B%0A%20%20linearGradientColors%3A%20string%5B%5D%3B%0A%7D%3B%0A%0Aconst%20list2%3A%20Partial%3CList2Data%3E%5B%5D%20%3D%20%5B%0A%20%20%7B%0A%20%20%20%20name%3A%20'Amy%20Farha'%2C%0A%20%20%20%20avatar_url%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FXdLjsJX_.jpg'%2C%0A%20%20%20%20subtitle%3A%20'Vice%20President'%2C%0A%20%20%20%20linearGradientColors%3A%20%5B'%23FF9800'%2C%20'%23F44336'%5D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20name%3A%20'Chris%20Jackson'%2C%0A%20%20%20%20avatar_url%3A%20'https%3A%2F%2Fuifaces.co%2Four-content%2Fdonated%2FKtCFjlD4.jpg'%2C%0A%20%20%20%20subtitle%3A%20'Vice%20Chairman'%2C%0A%20%20%20%20linearGradientColors%3A%20%5B'%233F51B5'%2C%20'%232196F3'%5D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20name%3A%20'Amanda%20Martin'%2C%0A%20%20%20%20avatar_url%3A%0A%20%20%20%20%20%20'https%3A%2F%2Fimages.unsplash.com%2Fphoto-1498529605908-f357a9af7bf5%3Fixlib%3Drb-0.3.5%26q%3D80%26fm%3Djpg%26crop%3Dfaces%26fit%3Dcrop%26h%3D200%26w%3D200%26s%3D047fade70e80ebb22ac8f09c04872c40'%2C%0A%20%20%20%20subtitle%3A%20'CEO'%2C%0A%20%20%20%20linearGradientColors%3A%20%5B'%23FFD600'%2C%20'%23FF9800'%5D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20name%3A%20'Christy%20Thomas'%2C%0A%20%20%20%20avatar_url%3A%20'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fwomen%2F48.jpg'%2C%0A%20%20%20%20subtitle%3A%20'Lead%20Developer'%2C%0A%20%20%20%20linearGradientColors%3A%20%5B'%234CAF50'%2C%20'%238BC34A'%5D%2C%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20name%3A%20'Melissa%20Jones'%2C%0A%20%20%20%20avatar_url%3A%0A%20%20%20%20%20%20'https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FM%2FMV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg%40%40._V1_UY256_CR2%2C0%2C172%2C256_AL_.jpg'%2C%0A%20%20%20%20subtitle%3A%20'CTO'%2C%0A%20%20%20%20linearGradientColors%3A%20%5B'%23F44336'%2C%20'%23E91E63'%5D%2C%0A%20%20%7D%2C%0A%5D%3B%0A%0Atype%20ListComponentProps%20%3D%20ListItemProps%3B%0A%0Aconst%20Lists2%3A%20React.FunctionComponent%3CListComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bexpanded%2C%20setExpanded%5D%20%3D%20React.useState(false)%3B%0A%0A%20%20const%20listItemProps%20%3D%20%7B%7D%3B%0A%20%20const%20renderRow%20%3D%20(%7B%20item%20%7D%3A%20%7B%20item%3A%20List1Data%20%7D)%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CListItem.Swipeable%0A%20%20%20%20%20%20%20%20onPress%3D%7Blog%7D%0A%20%20%20%20%20%20%20%20bottomDivider%0A%20%20%20%20%20%20%20%20leftContent%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Info%22%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'info'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%20minHeight%3A%20'100%25'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20rightContent%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Delete%22%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%20name%3A%20'delete'%2C%20color%3A%20'white'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20buttonStyle%3D%7B%7B%20minHeight%3A%20'100%25'%2C%20backgroundColor%3A%20'red'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CIcon%20name%3D%7Bitem.icon%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%3E%7Bitem.title%7D%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%3CListItem.Chevron%20%2F%3E%0A%20%20%20%20%20%20%3C%2FListItem.Swipeable%3E%0A%20%20%20%20)%3B%0A%20%20%7D%3B%0A%20%20const%20%5Bswitch1%2C%20setSwitch1%5D%20%3D%20useState(true)%3B%0A%20%20const%20%5Bcheckbox1%2C%20setCheckbox1%5D%20%3D%20useState(true)%3B%0A%20%20const%20%5BselectedButtonIndex%2C%20setSelectedButtonIndex%5D%20%3D%20useState(0)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%3CFlatList%0A%20%20%20%20%20%20%20%20ListHeaderComponent%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20paddingVertical%3A%208%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Blist2.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20key%3D%7Bi%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20linearGradientProps%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20colors%3A%20l.linearGradientColors%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20start%3A%20%5B1%2C%200%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20end%3A%20%5B0.2%2C%200%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginHorizontal%3A%2016%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20marginVertical%3A%208%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20borderRadius%3A%208%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CAvatar%20rounded%20source%3D%7B%7B%20uri%3A%20l.avatar_url%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20color%3A%20'white'%2C%20fontWeight%3A%20'bold'%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bl.name%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Subtitle%20style%3D%7B%5B%7B%20color%3A%20'white'%20%7D%5D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bl.subtitle%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Subtitle%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Chevron%20color%3D%22white%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.list%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Accordion%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20content%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22place%22%20size%3D%7B30%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%3EList%20Accordion%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20isExpanded%3D%7Bexpanded%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setExpanded(!expanded)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Blist2.map((l%3A%20Partial%3CList2Data%3E%2C%20i%3A%20React.Key)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%20key%3D%7Bi%7D%20onPress%3D%7Blog%7D%20bottomDivider%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CAvatar%20title%3D%7Bl.name%7D%20source%3D%7B%7B%20uri%3A%20l.avatar_url%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%3E%7Bl.name%7D%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Subtitle%3E%7Bl.subtitle%7D%3C%2FListItem.Subtitle%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Chevron%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Accordion%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.list%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Blist2.map((l%2C%20i)%20%3D%3E%20(%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%20key%3D%7Bi%7D%20bottomDivider%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22user-circle-o%22%20type%3D%22font-awesome%22%20color%3D%22red%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%20style%3D%7B%7B%20color%3A%20'red'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bl.name%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Subtitle%3E%7Bl.subtitle%7D%3C%2FListItem.Subtitle%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%20right%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%20right%20style%3D%7B%7B%20color%3A%20'green'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2011%3A00%20am%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Subtitle%20right%3E12%3A00%20am%3C%2FListItem.Subtitle%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20))%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.list%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%20bottomDivider%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%3EName%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Input%20placeholder%3D%22Type%20your%20name%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Chevron%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%20bottomDivider%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%3ESwitch%20that%20please%20%F0%9F%98%B2%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CSwitch%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20value%3D%7Bswitch1%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onValueChange%3D%7B(value)%20%3D%3E%20setSwitch1(value)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%20bottomDivider%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%3EChoose%20%F0%9F%A4%AF%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.ButtonGroup%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20buttons%3D%7B%5B'Flower'%2C%20'Coco'%5D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20selectedIndex%3D%7BselectedButtonIndex%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B(index)%20%3D%3E%20setSelectedButtonIndex(index)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%20bottomDivider%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.CheckBox%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20checked%3D%7Bcheckbox1%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20setCheckbox1(!checkbox1)%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%3ECheck%20that%20please%20%F0%9F%98%A2%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%20bottomDivider%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CBadge%20value%3D%2212%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%3EWith%20a%20Badge%20!%20%F0%9F%98%BB%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%20bottomDivider%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CIcon%20name%3D%22check%22%20size%3D%7B20%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%3EThis%20thing%20is%20checked%20%F0%9F%98%8E%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.list%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CAvatar%20source%3D%7B'https%3A%2F%2Frandomuser.me%2Fapi%2Fportraits%2Fwomen%2F57.jpg'%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Limited%20supply!%20Its%20like%20digital%20gold!%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Title%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.subtitleView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CImage%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20source%3D%7B%22https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2019%2F11%2F03%2F20%2F11%2Fportrait-4599553__340.jpg%22%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.ratingImage%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.ratingText%7D%3E5%20months%20ago%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem.Content%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FListItem%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20data%3D%7Blist1%7D%0A%20%20%20%20%20%20%20%20keyExtractor%3D%7B(a%3A%20List1Data%2C%20index%3A%20number)%20%3D%3E%20index.toString()%7D%0A%20%20%20%20%20%20%20%20renderItem%3D%7BrenderRow%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2F%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%7D%2C%0A%20%20list%3A%20%7B%0A%20%20%20%20marginTop%3A%2020%2C%0A%20%20%20%20borderTopWidth%3A%201%2C%0A%20%20%20%20borderColor%3A%20colors.greyOutline%2C%0A%20%20%7D%2C%0A%20%20subtitleView%3A%20%7B%0A%20%20%20%20flexDirection%3A%20'row'%2C%0A%20%20%20%20paddingLeft%3A%2010%2C%0A%20%20%20%20paddingTop%3A%205%2C%0A%20%20%7D%2C%0A%20%20ratingImage%3A%20%7B%0A%20%20%20%20height%3A%2019.21%2C%0A%20%20%20%20width%3A%20100%2C%0A%20%20%7D%2C%0A%20%20ratingText%3A%20%7B%0A%20%20%20%20paddingLeft%3A%2010%2C%0A%20%20%20%20color%3A%20'grey'%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Lists2%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}d.isMDXComponent=!0}}]);