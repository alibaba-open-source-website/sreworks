/*! For license information please see 1df93b7f.00facc2b.js.LICENSE.txt */
"use strict";(self.webpackChunksreworks=self.webpackChunksreworks||[]).push([[3237],{7365:(e,t,o)=>{o.r(t),o.d(t,{default:()=>h});var a=o(7294),r=o(6010),n=o(9960),l=o(5999),i=o(2263),c=o(1404);class s extends a.PureComponent{constructor(e){super(e),this.$=a.createRef(),this._=a.createRef()}render(){return a.createElement("span",{ref:this.$},a.createElement("a",{...this.props,ref:this._},this.props.children))}componentDidMount(){this.paint()}getSnapshotBeforeUpdate(){return this.reset(),null}componentDidUpdate(){this.paint()}componentWillUnmount(){this.reset()}paint(){const e=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(o.bind(o,9984)).then((({render:t})=>{null!=this._.current&&t(e.appendChild(this._.current),(function(t){try{e.parentNode.replaceChild(t,e)}catch(e){}}))}))}reset(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}const d=s;var u=o(4996);function h(){const{siteConfig:e}=(0,i.Z)();return a.createElement(c.Z,{title:"Cloud Native DataOps & AIOps Platform",description:"Description will go into a meta tag in <head />"},a.createElement("main",null,a.createElement("div",null,a.createElement("section",{className:"main-body-one"},a.createElement("div",{className:"main-body-one-left"},a.createElement("h1",{className:"main-body-one-left-title"},a.createElement(l.Z,null,"Cloud Native DataOps & AIOps Platform")),a.createElement("div",{className:"main-body-one-left-description"},a.createElement(l.Z,null,'SREWorks focuses on the application-centric one-stop "cloud native" and "DataOps and AIOps" O & M SaaS management suite as an engineering practice for the Alibaba Cloud Big Data SRE team\'s SRE concept.')," ",a.createElement(l.Z,null,"It enables companies to achieve the delivery and maintenance of cloud-native apps and resources via two primary capabilities: enterprise application and resource management and O & M development.")),a.createElement("div",{className:"main-body-one-left-button-panel"},a.createElement(n.Z,{className:(0,r.Z)("button"),style:{marginRight:20},to:(0,u.Z)("/docs/next/rr5g10")},a.createElement(l.Z,null,"Get Started")),a.createElement("span",{style:{position:"relative",top:"12px"}},a.createElement(d,{href:"https://github.com/alibaba/sreworks","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star alibaba/sreworks on GitHub"},"Star")))),a.createElement("div",{className:"main-body-one-right"},a.createElement("img",{alt:"homeImage",src:o(2936).Z}))),a.createElement("section",{className:"main-body-two"},a.createElement("div",{className:"main-body-two-title"},a.createElement("h2",null,a.createElement(l.Z,null,"Out-of-the-box operation & management solutions")),a.createElement("h2",null,"\xa0")),a.createElement("div",{className:"main-body-two-description"},a.createElement("a",{className:"description-card"},a.createElement("h2",null,a.createElement(l.Z,null,"DevOps")),a.createElement("p",null,a.createElement(l.Z,null,"Provide general cloud application solutions (Open Application Model), integrate infrastructure capabilities, and reduce the threshold for enterprises to migrate applications to the cloud.")),a.createElement("div",{className:"card-link"},a.createElement("a",{href:""},"\u8be6\u60c5"))),a.createElement("a",{className:"description-card"},a.createElement("h2",null,"\u81ea\u52a8\u5316\u8fd0\u7ef4"),a.createElement("p",null,"\u63d0\u4f9b\u7edf\u4e00\u4f5c\u4e1a\u8c03\u5ea6\u5e73\u53f0\u80fd\u529b\uff0c\u89e3\u51b3\u8fd0\u7ef4\u5927\u89c4\u6a21\u96c6\u4e2d\u5f0f\u8c03\u5ea6\u5e38\u89c1\uff0c\u63d0\u5347\u8fd0\u7ef4\u6548\u7387\u5229\u5668"),a.createElement("div",{className:"card-link"}," ",a.createElement("a",{href:""},"\u8be6\u60c5"))),a.createElement("a",{className:"description-card"},a.createElement("h2",null,"\u8fd0\u7ef4\u5e94\u7528\u5de5\u5382"),a.createElement("p",null,"\u63d0\u4f9b\u8fd0\u7ef4\u5e94\u7528\u524d\u540e\u7aef\u6258\u7ba1\u7684\u8fd0\u7ef4\u5e94\u7528\u5f00\u53d1\u6846\u67b6\u53ca\u90e8\u7f72\u5e73\u53f0\uff0c\u524d\u7aef\u914d\u7f6e\u5316\u4f4e\u4ee3\u7801\u5f00\u53d1\uff0c\u540e\u7aef\u811a\u624b\u67b6\u8fd0\u7ef4\u670d\u52a1\u63d2\u4ef6\u5316\u96c6\u6210"),a.createElement("div",{className:"card-link"}," ",a.createElement("a",{href:""},"\u8be6\u60c5"))),a.createElement("a",{className:"description-card"},a.createElement("h2",null,"\u57fa\u7840\u8fd0\u7ef4\u670d\u52a1"),a.createElement("p",null,"\u56f4\u7ed5IT\u8fd0\u7ef4\u5de5\u4f5c\u670d\u52a1\u53f0\uff0c\u63d0\u4f9b\u5305\u542b\u201c\u4f5c\u4e1a\u5e73\u53f0\u3001\u6d41\u7a0b\u5e73\u53f0\u201d\u7b49\u627f\u8f7d\u65e5\u5e38\u8fd0\u7ef4\u64cd\u4f5c\u7684\u8fd0\u7ef4\u81ea\u52a8\u5316\u5e73\u53f0\u3002"),a.createElement("div",{className:"card-link"},a.createElement("a",{href:""},"\u8be6\u60c5"))),a.createElement("a",{className:"description-card"},a.createElement("h2",null,"\u6570\u636e\u8fd0\u7ef4\u670d\u52a1"),a.createElement("p",null,"\u56f4\u7ed5\u201c\u8fd0\u7ef4\u6570\u636e\u201d\u7684\u94fe\u8def\u7ba1\u7406\uff0c\u63d0\u4f9b\u5305\u542b\u201c\u91c7\u96c6\u3001\u8ba1\u7b97\u3001\u670d\u52a1\u3001\u5e94\u7528\u201d\u6807\u51c6\u5316\u7684\u8fd0\u7ef4\u6570\u636e\u5206\u6790\u5e73\u53f0\u3002"),a.createElement("div",{className:"card-link"},a.createElement("a",{href:""},"\u8be6\u60c5"))),a.createElement("a",{className:"description-card"},a.createElement("h2",null,"\u667a\u80fd\u8fd0\u7ef4\u670d\u52a1"),a.createElement("p",null,"\u57fa\u4e8e\u201c\u611f\u77e5\u3001\u51b3\u7b56\u3001\u6267\u884c\u201d\u7684\u667a\u80fd\u8fd0\u7ef4\u6846\u67b6\uff0c\u7ed3\u5408\u5f02\u5e38\u68c0\u6d4b/\u65e5\u5fd7\u805a\u7c7b/\u6839\u56e0\u5206\u6790\u7b49\u6838\u5fc3\u667a\u80fd\u670d\u52a1\uff0c\u6784\u7b51Auto Pilot\u7684\u65e0\u4eba\u503c\u5b88\u3001AIOps\u667a\u80fd\u8fd0\u7ef4\u4f53\u7cfb\u3002"),a.createElement("div",{className:"card-link"},a.createElement("a",{href:""},"\u8be6\u60c5"))))),a.createElement("section",{className:"main-body-three"},a.createElement("div",{className:"main-body-three-left"},a.createElement("h2",{className:"main-body-three-left-title"},"\u4e30\u5bcc\u7684\u57fa\u7840\u7ec4\u4ef6"),a.createElement("div",{className:"main-body-three-left-description"},"\u4f4e\u4ee3\u7801\u8bbe\u8ba1\u4ea4\u4e92,\u63d0\u4f9b\u4e30\u5bcc\u3001\u7075\u6d3b\u3001\u5b9e\u7528\u7684\u57fa\u7840\u7ec4\u4ef6\uff0c\u4e3a\u4e1a\u52a1\u4ea7\u54c1\u63d0\u4f9b\u5f3a\u6709\u529b\u7684\u8bbe\u8ba1\u652f\u6301; \u540c\u65f6\u5f00\u653e\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u96c6\u6210\u80fd\u529b\uff0c\u6ee1\u8db3\u7528\u6237\u591a\u6837\u5316\u4e2a\u6027\u5316\u573a\u666f\u9700\u6c42\u3002"),a.createElement("div",{className:"main-body-three-left-button-panel"},a.createElement("button",{className:"button button--primary",style:{marginRight:20}},"\u4e86\u89e3\u66f4\u591a"))),a.createElement("div",null,a.createElement("img",{src:"https://sreworks.c38cca9c474484bdc9873f44f733d8bcd.cn-beijing.alicontainer.com//gateway/minio/public/a534c415-dd68-4147-bc02-2bdca7f2adcb"}))))))}},9984:(e,t,o)=>{o.r(t),o.d(t,{render:()=>A});var a=window.document,r=window.Math,n=window.HTMLElement,l=window.XMLHttpRequest,i=function(e,t){for(var o=0,a=e.length;o<a;o++)t(e[o])},c=function(e){return function(t,o,a){var r=e.createElement(t);if(null!=o)for(var n in o){var l=o[n];null!=l&&(null!=r[n]?r[n]=l:r.setAttribute(n,l))}return null!=a&&i(a,(function(t){r.appendChild("string"==typeof t?e.createTextNode(t):t)})),r}},s=c(a),d=function(e,t){return{}.hasOwnProperty.call(e,t)},u=function(e){return(""+e).toLowerCase()},h="github.com",p=l&&"prototype"in l&&"withCredentials"in l.prototype,f=p&&n&&"attachShadow"in n.prototype&&!("prototype"in n.prototype.attachShadow),m=function(e,t,o){e.addEventListener?e.addEventListener(t,o,!1):e.attachEvent("on"+t,o)},g=function(e,t,o){e.removeEventListener?e.removeEventListener(t,o,!1):e.detachEvent("on"+t,o)},b={light:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #0969da;outline-offset:-2px}.btn{color:#24292f;background-color:#ebf0f4;border-color:#ccd1d5;border-color:rgba(27,31,36,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f6f8fa'/%3e%3cstop offset='90%25' stop-color='%23ebf0f4'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f6f8fa, #ebf0f4 90%);background-image:linear-gradient(180deg, #f6f8fa, #ebf0f4 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF6F8FA', endColorstr='#FFEAEFF3')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#e9ebef;background-position:0 -0.5em;border-color:#caccd1;border-color:rgba(27,31,36,.15);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f3f4f6'/%3e%3cstop offset='90%25' stop-color='%23e9ebef'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f3f4f6, #e9ebef 90%);background-image:linear-gradient(180deg, #f3f4f6, #e9ebef 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF3F4F6', endColorstr='#FFE8EAEE')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#e5e9ed;border-color:#c7cbcf;border-color:rgba(27,31,36,.15);box-shadow:inset 0 .15em .3em rgba(27,31,36,.15);background-image:none;filter:none}.social-count{color:#24292f;background-color:#fff;border-color:#ddddde;border-color:rgba(27,31,36,.15)}.social-count:hover,.social-count:focus{color:#0969da}.octicon-heart{color:#bf3989}",light_high_contrast:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #0349b4;outline-offset:-2px}.btn{color:#0e1116;background-color:#e7ecf0;border-color:#2f3237;border-color:rgba(1,4,9,.8);background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#c4cdd5;background-position:0 -0.5em;border-color:#282c32;border-color:rgba(1,4,9,.8);background-image:none;filter:none}.btn:active{background-color:#d8dde1;border-color:#2c2f34;border-color:rgba(1,4,9,.8);box-shadow:inset 0 .15em .3em rgba(1,4,9,.15)}.social-count{color:#0e1116;background-color:#fff;border-color:#34363a;border-color:rgba(1,4,9,.8)}.social-count:hover,.social-count:focus{color:#0349b4}.octicon-heart{color:#971368}",dark:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #58a6ff;outline-offset:-2px}.btn{color:#c9d1d9;background-color:#1a1e23;border-color:#2f3439;border-color:rgba(240,246,252,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2321262d'/%3e%3cstop offset='90%25' stop-color='%231a1e23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #21262d, #1a1e23 90%);background-image:linear-gradient(180deg, #21262d, #1a1e23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF21262D', endColorstr='#FF191D22')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#292e33;background-position:0 -0.5em;border-color:#8b949e;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%2330363d'/%3e%3cstop offset='90%25' stop-color='%23292e33'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #30363d, #292e33 90%);background-image:linear-gradient(180deg, #30363d, #292e33 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF30363D', endColorstr='#FF282D32')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#161719;border-color:#8b949e;box-shadow:inset 0 .15em .3em rgba(1,4,9,.15);background-image:none;filter:none}.social-count{color:#c9d1d9;background-color:#0d1117;border-color:#24282e;border-color:rgba(240,246,252,.1)}.social-count:hover,.social-count:focus{color:#58a6ff}.octicon-heart{color:#db61a2}",dark_dimmed:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #539bf5;outline-offset:-2px}.btn{color:#adbac7;background-color:#30363d;border-color:#40464e;border-color:rgba(205,217,229,.1);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23373e47'/%3e%3cstop offset='90%25' stop-color='%2330363d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #373e47, #30363d 90%);background-image:linear-gradient(180deg, #373e47, #30363d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF373E47', endColorstr='#FF2F353C')}:root .btn{filter:none}.btn:hover,.btn:focus{background-color:#3c444d;background-position:0 -0.5em;border-color:#768390;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23444c56'/%3e%3cstop offset='90%25' stop-color='%233c444d'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #444c56, #3c444d 90%);background-image:linear-gradient(180deg, #444c56, #3c444d 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF444C56', endColorstr='#FF3B434C')}:root .btn:hover,:root .btn:focus{filter:none}.btn:active{background-color:#2e3031;border-color:#768390;box-shadow:inset 0 .15em .3em rgba(28,33,40,.15);background-image:none;filter:none}.social-count{color:#adbac7;background-color:#22272e;border-color:#333940;border-color:rgba(205,217,229,.1)}.social-count:hover,.social-count:focus{color:#539bf5}.octicon-heart{color:#c96198}",dark_high_contrast:".btn:focus-visible,.social-count:focus-visible{outline:2px solid #71b7ff;outline-offset:-2px}.btn{color:#f0f3f6;background-color:#272b33;border-color:#7a828e;background-image:none;filter:none}.btn:hover,.btn:focus{background-color:#4a515b;background-position:0 -0.5em;border-color:#bdc4cc;background-image:none;filter:none}.btn:active{background-color:#1d1d1f;border-color:#bdc4cc;box-shadow:inset 0 .15em .3em rgba(1,4,9,.15)}.social-count{color:#f0f3f6;background-color:#0a0c10;border-color:#7a828e}.social-count:hover,.social-count:focus{color:#71b7ff}.octicon-heart{color:#ef6eb1}"},v=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+b[d(b,t)?t:e]+"}"},w=function(e){if(null==e)return b.light;if(d(b,e))return b[e];var t=function(e,t,o,a){null==t&&(t="&"),null==o&&(o="="),null==a&&(a=window.decodeURIComponent);var r={};return i(e.split(t),(function(e){if(""!==e){var t=e.split(o);r[a(t[0])]=null!=t[1]?a(t.slice(1).join(o)):void 0}})),r}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return b[d(b,t["no-preference"])?t["no-preference"]:"light"]+v("light",t.light)+v("dark",t.dark)},k={"comment-discussion":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.5 2.75a.25.25 0 01.25-.25h8.5a.25.25 0 01.25.25v5.5a.25.25 0 01-.25.25h-3.5a.75.75 0 00-.53.22L3.5 11.44V9.25a.75.75 0 00-.75-.75h-1a.25.25 0 01-.25-.25v-5.5zM1.75 1A1.75 1.75 0 000 2.75v5.5C0 9.216.784 10 1.75 10H2v1.543a1.457 1.457 0 002.487 1.03L7.061 10h3.189A1.75 1.75 0 0012 8.25v-5.5A1.75 1.75 0 0010.25 1h-8.5zM14.5 4.75a.25.25 0 00-.25-.25h-.5a.75.75 0 110-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0114.25 12H14v1.543a1.457 1.457 0 01-2.487 1.03L9.22 12.28a.75.75 0 111.06-1.06l2.22 2.22v-2.19a.75.75 0 01.75-.75h1a.25.25 0 00.25-.25v-5.5z"></path>'}}},download:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>'}}},eye:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"></path>'}}},heart:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.565 20.565 0 008 13.393a20.561 20.561 0 003.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.75.75 0 01-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5zM8 14.25l-.345.666-.002-.001-.006-.003-.018-.01a7.643 7.643 0 01-.31-.17 22.075 22.075 0 01-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.08 22.08 0 01-3.744 2.584l-.018.01-.006.003h-.002L8 14.25zm0 0l.345.666a.752.752 0 01-.69 0L8 14.25z"></path>'}}},"issue-opened":{heights:{16:{width:16,path:'<path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path><path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>'}}},"mark-github":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>'}}},package:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z"></path>'}}},play:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path>'}}},"repo-forked":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>'}}},"repo-template":{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M6 .75A.75.75 0 016.75 0h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 .75zm5 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V1.5h-.75A.75.75 0 0111 .75zM4.992.662a.75.75 0 01-.636.848c-.436.063-.783.41-.846.846a.75.75 0 01-1.485-.212A2.501 2.501 0 014.144.025a.75.75 0 01.848.637zM2.75 4a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 012.75 4zm10.5 0a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM2.75 8a.75.75 0 01.75.75v.268A1.72 1.72 0 013.75 9h.5a.75.75 0 010 1.5h-.5a.25.25 0 00-.25.25v.75c0 .28.114.532.3.714a.75.75 0 01-1.05 1.072A2.495 2.495 0 012 11.5V8.75A.75.75 0 012.75 8zm10.5 0a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-2.5a.75.75 0 010-1.5h1.75v-2h-.75a.75.75 0 010-1.5h.75v-.25a.75.75 0 01.75-.75zM6 9.75A.75.75 0 016.75 9h2.5a.75.75 0 010 1.5h-2.5A.75.75 0 016 9.75zm-1 2.5v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>'}}},star:{heights:{16:{width:16,path:'<path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>'}}}},E=function(e,t){e=u(e).replace(/^octicon-/,""),d(k,e)||(e="mark-github");var o=t>=24&&24 in k[e].heights?24:16,a=k[e].heights[o];return'<svg viewBox="0 0 '+a.width+" "+o+'" width="'+t*a.width/o+'" height="'+t+'" class="octicon octicon-'+e+'" aria-hidden="true">'+a.path+"</svg>"},x={},y=function(e,t){var o=x[e]||(x[e]=[]);if(!(o.push(t)>1)){var a=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete x[e];t=o.shift();)t.apply(null,arguments)}));if(p){var r=new l;m(r,"abort",a),m(r,"error",a),m(r,"load",(function(){var e;try{e=JSON.parse(this.responseText)}catch(t){return void a(t)}a(200!==this.status,e)})),r.open("GET",e),r.send()}else{var n=this||window;n._=function(e){n._=null,a(200!==e.meta.status,e.data)};var i=c(n.document)("script",{async:!0,src:e+(-1!==e.indexOf("?")?"&":"?")+"callback=_"}),s=function(){n._&&n._({meta:{}})};m(i,"load",s),m(i,"error",s),function(e,t,o){if(null!=e.readyState){var a="readystatechange",r=function(){if(t.test(e.readyState))return g(e,a,r),o.apply(this,arguments)};m(e,a,r)}}(i,/de|m/,s),n.document.getElementsByTagName("head")[0].appendChild(i)}}},C=function(e,t,o){var a=c(e.ownerDocument),r=e.appendChild(a("style",{type:"text/css"})),n="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;line-height:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;display:inline-flex;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:16px;padding:5px 10px;font-size:12px;line-height:16px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor;overflow:visible}"+w(t["data-color-scheme"]);r.styleSheet?r.styleSheet.cssText=n:r.appendChild(e.ownerDocument.createTextNode(n));var l="large"===u(t["data-size"]),i=a("a",{className:"btn",href:t.href,rel:"noopener",target:"_blank",title:t.title||void 0,"aria-label":t["aria-label"]||void 0,innerHTML:E(t["data-icon"],l?16:14)+"&nbsp;"},[a("span",{},[t["data-text"]||""])]),s=e.appendChild(a("div",{className:"widget"+(l?" widget-lg":"")},[i])),d=i.hostname.replace(/\.$/,"");if(("."+d).substring(d.length-h.length)!=="."+h)return i.removeAttribute("href"),void o(s);var p=(" /"+i.pathname).split(/\/+/);if(((d===h||d==="gist."+h)&&"archive"===p[3]||d===h&&"releases"===p[3]&&("download"===p[4]||"latest"===p[4]&&"download"===p[5])||d==="codeload."+h)&&(i.target="_top"),"true"===u(t["data-show-count"])&&d===h&&"marketplace"!==p[1]&&"sponsors"!==p[1]&&"orgs"!==p[1]&&"users"!==p[1]&&"-"!==p[1]){var f,m;if(!p[2]&&p[1])m="followers",f="?tab=followers";else if(!p[3]&&p[2])m="stargazers_count",f="/stargazers";else if(p[4]||"subscription"!==p[3])if(p[4]||"fork"!==p[3]){if("issues"!==p[3])return void o(s);m="open_issues_count",f="/issues"}else m="forks_count",f="/network/members";else m="subscribers_count",f="/watchers";var g=p[2]?"/repos/"+p[1]+"/"+p[2]:"/users/"+p[1];y.call(this,"https://api.github.com"+g,(function(e,t){if(!e){var r=t[m];s.appendChild(a("a",{className:"social-count",href:t.html_url+f,rel:"noopener",target:"_blank","aria-label":r+" "+m.replace(/_count$/,"").replace("_"," ").slice(0,r<2?-1:void 0)+" on GitHub"},[(""+r).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}o(s)}))}else o(s)},z=window.devicePixelRatio||1,M=function(e){return(z>1?r.ceil(r.round(e*z)/z*2)/2:r.ceil(e))||0},N=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},A=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")};return i(["icon","color-scheme","text","size","show-count"],(function(o){var a="data-"+o;t[a]=e.getAttribute(a)})),null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),f){var o=s("span");C(o.attachShadow({mode:"closed"}),e,(function(){t(o)}))}else{var n=s("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});N(n,[0,0]),n.style.border="none";var l=function(){var o,i=n.contentWindow;try{o=i.document.body}catch(c){return void a.body.appendChild(n.parentNode.removeChild(n))}g(n,"load",l),C.call(i,o,e,(function(o){var a=function(e){var t=e.offsetWidth,o=e.offsetHeight;if(e.getBoundingClientRect){var a=e.getBoundingClientRect();t=r.max(t,M(a.width)),o=r.max(o,M(a.height))}return[t,o]}(o);n.parentNode.removeChild(n),function(e,t,o){var a=function(){return g(e,t,a),o.apply(this,arguments)};m(e,t,a)}(n,"load",(function(){N(n,a)})),n.src="https://unpkg.com/github-buttons@2.22.0/dist/buttons.html#"+(n.name=function(e,t,o,a){null==t&&(t="&"),null==o&&(o="="),null==a&&(a=window.encodeURIComponent);var r=[];for(var n in e){var l=e[n];null!=l&&r.push(a(n)+o+a(l))}return r.join(t)}(e)),t(n)}))};m(n,"load",l),a.body.appendChild(n)}}},2936:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/homeImage-048b5d6f1ea89fd5974b53f0283c92c9.png"}}]);