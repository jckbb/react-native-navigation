(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{202:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(287)),l={id:"overlay",title:"Overlay",sidebar_label:"Overlay"},o={unversionedId:"api/overlay",id:"api/overlay",isDocsHomePage:!1,title:"Overlay",description:"showOverlay()",source:"@site/docs/api/api-overlay.mdx",slug:"/api/overlay",permalink:"/react-native-navigation/next/api/overlay",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/api/api-overlay.mdx",version:"current",sidebar_label:"Overlay",sidebar:"api",previous:{title:"Modal",permalink:"/react-native-navigation/next/api/modal"},next:{title:"Layout",permalink:"/react-native-navigation/next/api/layout-layout"}},c=[{value:"<code>showOverlay()</code>",id:"showoverlay",children:[]},{value:"<code>dismissOverlay()</code>",id:"dismissoverlay",children:[]},{value:"<code>dismissAllOverlays()</code>",id:"dismissalloverlays",children:[]}],b={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"showoverlay"},Object(i.b)("inlineCode",{parentName:"h2"},"showOverlay()")),Object(i.b)("p",null,"Shows a component as an overlay."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"layout"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/next/api/layout-layout"}),"Layout")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any type of layout. Typically, Component layout is used in Overlays but it's possible to load any other layout (",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/next/api/layout-bottomTabs"}),"BottomTabs"),", ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/next/api/layout-stack"}),"Stack"),", ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/next/api/layout-sideMenu"}),"SideMenu"),", ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/next/api/layout-component"}),"Component"),")")))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.showOverlay({\n  component: {\n    name: 'example.Overlay',\n    options: {\n      layout: {\n            componentBackgroundColor: 'transparent',\n          },\n      overlay: {\n        interceptTouchOutside: true\n      }\n    }\n  }\n});\n")),Object(i.b)("h2",{id:"dismissoverlay"},Object(i.b)("inlineCode",{parentName:"h2"},"dismissOverlay()")),Object(i.b)("p",null,"Dismisses an overlay matching the given overlay componentId."),Object(i.b)("h4",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"componentId"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The component id presented in Overlay")))),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.dismissOverlay(this.props.componentId);\n")),Object(i.b)("h2",{id:"dismissalloverlays"},Object(i.b)("inlineCode",{parentName:"h2"},"dismissAllOverlays()")),Object(i.b)("p",null,"Dismisses all overlays."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.dismissAllOverlays();\n")))}p.isMDXComponent=!0},287:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(a),O=n,m=s["".concat(l,".").concat(O)]||s[O]||u[O]||i;return a?r.a.createElement(m,o(o({ref:t},b),{},{components:a})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=O;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<i;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);