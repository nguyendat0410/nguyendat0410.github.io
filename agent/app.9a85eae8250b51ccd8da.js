!function(e){function webpackJsonpCallback(t){for(var r,o,l=t[0],c=t[1],p=t[2],s=0,u=[];s<l.length;s++)o=l[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(i&&i(t);u.length;)u.shift()();return n.push.apply(n,p||[]),checkDeferredModules()}function checkDeferredModules(){for(var e,t=0;t<n.length;t++){for(var r=n[t],o=!0,l=1;l<r.length;l++){var i=r[l];0!==a[i]&&(o=!1)}o&&(n.splice(t--,1),e=__webpack_require__(__webpack_require__.s=r[0]))}return e}var t={},a={0:0},n=[];function __webpack_require__(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,a){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(__webpack_require__.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(a,n,function(t){return e[t]}.bind(null,n));return a},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="/agent/";var r=window.webpackJsonp=window.webpackJsonp||[],o=r.push.bind(r);r.push=webpackJsonpCallback,r=r.slice();for(var l=0;l<r.length;l++)webpackJsonpCallback(r[l]);var i=o;n.push([59,2,1]),checkDeferredModules()}({22:function(e){e.exports=JSON.parse('{"downloadAppGefly":"Tải App Getfly CRM","txt_1":"Ứng dụng Getfly CRM đã có mặt trên App Store, Google Play","txt_2":"Nền tảng kết nối mở, tích hợp đa dịch vụ","txt_3":"Thân thiện với người dùng, dễ thao tác","txt_4":"Liên tục update tính năng mới nhất","openApp":"Mở App","productGetfly":"Một sản phẩm của Getfly CRM"}')},23:function(e){e.exports=JSON.parse('{"downloadAppGefly":"Download Getfly CRM App","txt_1":"Getfly CRM application is available on App Store, Google Play","txt_2":"Open connection platform, integrated multi-service","txt_3":"User friendly, easy to manipulate","txt_4":"Constantly update latest features","openApp":"Open the App","productGetfly":"A product of Getfly CRM"}')},47:function(e,t){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),l=a(60),i=(a(34),a(14)),c=a(3),p=a(22),s=a(23),u=localStorage.getItem("locale")||"vi";i.a.use(c.e).init({resources:{vi:{translation:p},en:{translation:s}},lng:u,fallbackLng:"vi",interpolation:{escapeValue:!1},react:{wait:!1}});var d=i.a,m=a(5),_=a.n(m),f=a(1),g=a.n(f),w=a(61),v=a(62),h=a.p+"1ywpvX3.png",y=a.p+"1MU1Xxy.png",b=a.p+"1dYVfUI.png",k=a.p+"uAUZWLu.png",E=a.p+"37_Dupy.png",A=a(26),x=a.n(A),N=function(e){function App(t){var a;return(a=e.call(this,t)||this).onClickOpen=function(){var e=a.state,t=e.urlIos,n=e.urlAndroid,r=e.isAndroid,o=e.isIos;if(r&&(window.location=n),o){var l=+new Date,i=!0;window.onfocus=function(){i=!0},window.onblur=function(){i=!1},setTimeout((function(){var e="itms-apps://itunes.apple.com/app/getflyvn/id1490060413?mt=8";+new Date-l<2e3&&i&&(window.location=e)}),25),window.location=t}},a.state={year:2020,urlIos:"",urlAndroid:"",isAndroid:!1,isIos:!1},a}_()(App,e);var t=App.prototype;return t.componentDidMount=function componentDidMount(){var e=navigator.userAgent||navigator.vendor||window.opera,t=/android/i.test(e),a=/iPad|iPhone|iPod/.test(e)&&!window.MSStream,n="getflyapp://",r="intent://getfly/#Intent;scheme=getflyapp;package=com.getflyvn.crm;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.getflyvn.crm;end",o="",l=this.props,i=l.type,c=l.match.params,p=l.location;switch(i){case"task":o="task/"+c.task_id;break;case"task_other":var s=function decodeUrl(e,t){return void 0===t&&(t=";"),x.a.parse(e,{ignoreQueryPrefix:!0,delimiter:t})}(p.search);s.task_id&&(o="task/"+s.task_id);break;case"account":o="account/"+c.account_id;break;case"order":o="order/"+c.order_id;break;case"campaign":o="campaign/"+c.campaign_id;break;case"opportunity":o="opportunity/"+c.opportunity_id;break;case"discussion":o="inbox/"+c.topic_id}var u=+new Date;if(o){var d=!0;window.onfocus=function(){d=!0},window.onblur=function(){d=!1},setTimeout((function(){var t="";/windows phone/i.test(e)&&(t="https://getfly.vn"),a&&(t="itms-apps://itunes.apple.com/app/getflyvn/id1490060413?mt=8"),t&&+new Date-u<2e3&&d&&(window.location=t)}),25),t&&(r="intent://getfly/{URL}#Intent;scheme=getflyapp;package=com.getflyvn.crm;S.browser_fallback_url=https://getfly.vn;end".replace("{URL}",o),window.location=r),a&&(n="getflyapp://{URL}".replace("{URL}",o),window.location=n)}var m=new Date;this.setState({year:m.getFullYear(),urlIos:n,urlAndroid:r,isAndroid:t,isIos:a})},t.render=function render(){var e=this.props.t,t=this.state,a=t.year,n=t.urlIos,o=t.urlAndroid,l=t.isAndroid;return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header-50"},r.a.createElement("a",{href:"https://getfly.vn/",target:"_blank"},r.a.createElement("img",{src:h,className:"logo"}))),r.a.createElement("div",{className:"header-50"},r.a.createElement("a",{className:"open-app",href:l?o:n,onClick:this.onClickOpen},e("openApp")))),r.a.createElement("div",{className:"content-1"},r.a.createElement("p",{className:"download-app"},e("downloadAppGefly")),r.a.createElement("p",{className:"app-store"},e("txt_1")),r.a.createElement("p",{className:"text-1"},r.a.createElement("img",{src:y,className:"img-txt"})," ",e("txt_2")),r.a.createElement("p",{className:"text-1"},r.a.createElement("img",{src:y,className:"img-txt"})," ",e("txt_3")),r.a.createElement("p",{className:"text-1"},r.a.createElement("img",{src:y,className:"img-txt"})," ",e("txt_4"))),r.a.createElement("div",{className:"content-2"},r.a.createElement("div",{className:"body-content-2"},r.a.createElement("div",{className:"padding15"},r.a.createElement("a",{href:"https://apps.apple.com/us/app/getflyvn/id1490060413"},r.a.createElement("img",{src:b,className:"width100"}))),r.a.createElement("div",{className:"padding15"},r.a.createElement("a",{href:"https://play.google.com/store/apps/details?id=com.getflyvn.crm"},r.a.createElement("img",{src:k,className:"width100"})))),r.a.createElement("div",{className:"body-content-img"},r.a.createElement("img",{src:E,alt:"App Getfly",className:"width100"}))),r.a.createElement("div",{className:"footer"},"© ",a," ",e("productGetfly")))},App}(n.Component),M=Object(v.a)()(N),O=(n.Component,function(e){function App(t){var a;return(a=e.call(this,t)||this).state={userAgent:""},a}_()(App,e);var t=App.prototype;return t.componentDidMount=function componentDidMount(){var e=navigator.userAgent||navigator.vendor||window.opera;this.setState({userAgent:e}),console.log("Debug ",e)},t.render=function render(){var e=this.state.userAgent,t=/android/i.test(e),a=/iPad|iPhone|iPod/.test(e)&&!window.MSStream;return/windows phone/i.test(e)?r.a.createElement("div",null,r.a.createElement("h1",null,"Window Phone"),r.a.createElement("p",null,e)):t?r.a.createElement("div",null,r.a.createElement("h1",null,"Android"),r.a.createElement("p",null,e)):a?r.a.createElement("div",null,r.a.createElement("h1",null,"IOS"),r.a.createElement("p",null,e)):r.a.createElement("div",null,r.a.createElement("h1",null,"Computer"),r.a.createElement("p",null,e))},App}(n.Component)),S=a.p+"1qz9IZu.ico",q=document.querySelector('link[rel*="icon"]')||document.createElement("link");q.type="image/x-icon",q.rel="shortcut icon",q.href=S,document.getElementsByTagName("head")[0].appendChild(q);var C=function Main(){return r.a.createElement(l.a,{i18n:d},r.a.createElement(O,null))};Object(o.render)(r.a.createElement(C,null),document.getElementById("root"))}});