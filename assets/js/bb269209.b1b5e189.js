"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8951],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(h,o(o({ref:e},m),{},{components:a})):n.createElement(h,o({ref:e},m))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6631:(t,e,a)=>{a.r(e),a.d(e,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>p,toc:()=>m,default:()=>c});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),o=["components"],i={title:"Google Summer of Code'21",author:"Khushal Agarwal",authorURL:"https://github.com/khushal87"},s=void 0,p={permalink:"/blog/2021/08/18/google-summer-of-code-khushal-agarwal",source:"@site/blog/2021-08-18-google-summer-of-code-khushal-agarwal.md",title:"Google Summer of Code'21",description:"Automatically generate documentation out of React/React Native Component",date:"2021-08-18T00:00:00.000Z",formattedDate:"August 18, 2021",tags:[],readingTime:3.77,truncated:!1,nextItem:{title:"Auto-generation of Documentation Website",permalink:"/blog/2021/08/12/auto-generation-of-docs"}},m=[{value:"\ud83d\udcd9 Abstract",id:"-abstract",children:[]},{value:"\ud83d\udcdd Deliverables",id:"-deliverables",children:[]},{value:"\ud83d\udce6 Working product",id:"-working-product",children:[]},{value:"\ud83d\ude80 Contributions",id:"-contributions",children:[{value:"Pull requests",id:"pull-requests",children:[]},{value:"Issues",id:"issues",children:[]}]},{value:"\ud83d\udc68 Mentors",id:"-mentors",children:[]},{value:"\ud83d\udd17 Links",id:"-links",children:[]}],u={toc:m};function c(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("div",{align:"center"},(0,l.kt)("a",{href:"https://summerofcode.withgoogle.com/projects/#5690075263795200"},(0,l.kt)("img",{src:"https://pbs.twimg.com/media/EwIc141UUAUnA7x.png",width:"650",alt:"google-summer-of-code"})),(0,l.kt)("br",null),(0,l.kt)("b",null,(0,l.kt)("p",null,"Automatically generate documentation out of React/React Native Component"))),(0,l.kt)("p",null,"This summer, I was pleased to get selected for Google Summer of Code'21 under the organization ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-native-elements"},"React Native Elements"),". Working under the organization, my project was to ",(0,l.kt)("strong",{parentName:"p"},"generate documentation automatically out of the UI components and present it in the Docusaurus website"),"."),(0,l.kt)("div",{align:"center"},(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://media.giphy.com/media/ZcKASxMYMKA9SQnhIl/giphy.gif",alt:"enter image description here"}))),(0,l.kt)("p",null,"The purpose of creating this repository is to maintain a report summary of my GSoC work and this may also serve as a guide for future GSoC aspirants and a reference to the developers and contributors to the project."),(0,l.kt)("h2",{id:"-abstract"},"\ud83d\udcd9 Abstract"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-native-elements"},"React Native Elements")," is a cross-platform UI toolkit built on/for React Native. With a weekly download by 90k+ users and backed by a huge community, it provides UI components that can be used in your native application for the platform of Android/iOS/Web."),(0,l.kt)("p",null,"The documentation of the project was maintained manually previously i.e., suppose I want to change/add/remove a prop or a new component to the project the markdown file had to be changed manually. The process is tiring and new contributors may often forget to do so. So, during the summers I took the change this process and make a workflow such that the generation is automatic. This should be ",(0,l.kt)("strong",{parentName:"p"},"fast and maintainable"),"."),(0,l.kt)("h2",{id:"-deliverables"},"\ud83d\udcdd Deliverables"),(0,l.kt)("p",null,"The deliverables of the project are as follows:"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Efficient Development Setup"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Re-structure and Refactor code to have a common pattern."),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Maintain the Usage/Examples of the component as they are needed to be updated manually."),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Refactor and rename the directory structure such that Autogen is successful.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Convert the code-base to have all the functional components."))),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Commenting on all the components and props.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Adding descriptions."),(0,l.kt)("li",{parentName:"ul"},"Adding prop descriptions."),(0,l.kt)("li",{parentName:"ul"},"Ensuring a common pattern is followed."))),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Writing ",(0,l.kt)("strong",{parentName:"li"},"scripts to extract data out"),"(in JS/TS) of it in the form of JSON."),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Converting the JSON data to Markdown."),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Automating the process such that the workflow works automatically whenever there is a change in the prop/definition or component code.")),(0,l.kt)("p",null,"All of the listed deliverables were completed within the GSoC period. \ud83c\udf89"),(0,l.kt)("h2",{id:"-working-product"},"\ud83d\udce6 Working product"),(0,l.kt)("p",null,"The work can be found here - ",(0,l.kt)("a",{parentName:"p",href:"https://reactnativeelements.com/docs/next/"},"Official Website of React native elements"),". Please refer to the component docs."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"I have also written a blog on how it works attached ",(0,l.kt)("a",{parentName:"strong",href:"https://deploy-preview-3145--react-native-elements.netlify.app/blog/2021/08/12/auto-generation-of-docs"},"here"),".")),(0,l.kt)("h2",{id:"-contributions"},"\ud83d\ude80 Contributions"),(0,l.kt)("h3",{id:"pull-requests"},"Pull requests"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PR Link"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/react-native-elements/react-native-elements/pull/3071"},"#3071")),(0,l.kt)("td",{parentName:"tr",align:null},"[Refactor]"," Documentation directory structure"),(0,l.kt)("td",{parentName:"tr",align:null},"Merged \u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/react-native-elements/react-native-elements/pull/3081"},"#3081")),(0,l.kt)("td",{parentName:"tr",align:null},"[Refactor]"," Directory structure of components"),(0,l.kt)("td",{parentName:"tr",align:null},"Merged \u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/react-native-elements/react-native-elements/pull/3112"},"#3112")),(0,l.kt)("td",{parentName:"tr",align:null},"[Add]"," props description, descriptions to the component."),(0,l.kt)("td",{parentName:"tr",align:null},"Merged \u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/react-native-elements/react-native-elements/pull/3126"},"#3126")),(0,l.kt)("td",{parentName:"tr",align:null},"[Docs]"," Added demos and snack for the documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Merged \u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/react-native-elements/react-native-elements/pull/3136"},"#3136")),(0,l.kt)("td",{parentName:"tr",align:null},"[Add]"," Docgen auto generation of docs scripts"),(0,l.kt)("td",{parentName:"tr",align:null},"Merged \u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/react-native-elements/react-native-elements/pull/3142"},"#3142")),(0,l.kt)("td",{parentName:"tr",align:null},"[Docs]"," Added generate-markdown scripts"),(0,l.kt)("td",{parentName:"tr",align:null},"Merged \u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/react-native-elements/react-native-elements/pull/3143"},"#3143"),", ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/react-native-elements/react-native-elements/pull/3144"},"#3144")),(0,l.kt)("td",{parentName:"tr",align:null},"[Fix]"," Issues related to auto-generation of documentation"),(0,l.kt)("td",{parentName:"tr",align:null},"Merged \u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/react-native-elements/react-native-elements/pull/3145"},"#3145")),(0,l.kt)("td",{parentName:"tr",align:null},"[Fix, Improve]"," Doc-gen issues and automation"),(0,l.kt)("td",{parentName:"tr",align:null},"Open(to be merged) \ud83d\udd52")))),(0,l.kt)("h3",{id:"issues"},"Issues"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Issue link"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/react-native-elements/react-native-elements/issues/3171"},"#3171")),(0,l.kt)("td",{parentName:"tr",align:null},"[Docs]"," Auto-generation of documentation for class based components")))),(0,l.kt)("p",null,"Apart from these contributions, I have contributed to other React native elements projects. They can be summarized as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/pulls?q=is:pr+org:react-native-elements+author:khushal87"},"Pull requests")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/issues?q=is:issue+org:react-native-elements+author:khushal87"},"Issues"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Project"),(0,l.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"React Native Elements - main repo"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/react-native-elements/react-native-elements/pulls?q=is%3Apr+author%3Akhushal87+"},"Pull requests"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"React Native Elements App"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/react-native-elements/react-native-elements-app/pulls?q=is%3Apr+author%3Akhushal87+is%3Aclosed"},"Pull requests"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Playground"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/react-native-elements/playground/pulls?q=is%3Apr+author%3Akhushal87+is%3Aclosed"},"Pull requests"))))),(0,l.kt)("h2",{id:"-mentors"},"\ud83d\udc68 Mentors"),(0,l.kt)("p",null,"I would like to thank my mentors for helping me reach this milestone. \ud83d\ude04\ud83d\ude04"),(0,l.kt)("p",null,"I have not only learned about the Open Source culture and how to write good code but also, learned how the industry works and the import"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Dhruvdutt Jadhav")," - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/dhruvdutt"},"GitHub"),". ",(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/dhruvdutt-jadhav/"},"LinkedIn")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Pranshu Chittora")," - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/pranshuchittora"},"GitHub"),". ",(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/pranshuchittora/"},"LinkedIn")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Jeremy Hamilton")," - ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/flyingcircle"},"GitHub"),". ",(0,l.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/jeremy-hamilton-19b6217b/"},"LinkedIn"))),(0,l.kt)("p",null,"I would also like to thank ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/arpitBhalla"},"Arpit Bhalla")," for being an amazing partner in this amazing journey."),(0,l.kt)("h2",{id:"-links"},"\ud83d\udd17 Links"),(0,l.kt)("div",{align:"center"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Student")),(0,l.kt)("th",{parentName:"tr",align:"center"},"Khushal Agarwal"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Organization")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/react-native-elements/"},"React Native Elements"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Project")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://summerofcode.withgoogle.com/projects/#5690075263795200"},"Automatically generate documentation from components"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"GitHub")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/khushal87"},"khushal87"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"LinkedIn")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://www.linkedin.com/in/khushal87"},"Khushal Agarwal"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Twitter")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"https://www.twitter.com/khushal87"},"khushal87"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"td"},"Email")),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{href:"mailto:khushal.agarwal987@gmail.com"},(0,l.kt)("a",{parentName:"td",href:"mailto:khushal.agarwal987@gmail.com"},"khushal.agarwal987@gmail.com"))))))))}c.isMDXComponent=!0}}]);