"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5010:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},l="Attach Safe and wallet",u={unversionedId:"tutorial-module-exit-app/attach-safe",id:"tutorial-module-exit-app/attach-safe",isDocsHomePage:!1,title:"Attach Safe and wallet",description:"When you open the Exit App, it will look like this:",source:"@site/docs/tutorial-module-exit-app/attach-safe.md",sourceDirName:"tutorial-module-exit-app",slug:"/tutorial-module-exit-app/attach-safe",permalink:"/zodiac/docs/tutorial-module-exit-app/attach-safe",editUrl:"https://github.com/gnosis/zodiac/edit/master/website/docs/tutorial-module-exit-app/attach-safe.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Get started",permalink:"/zodiac/docs/tutorial-module-exit-app/get-started"},next:{title:"Redeemable assets",permalink:"/zodiac/docs/tutorial-module-exit-app/redeemable-assets"}},s=[{value:"Connect Web3 wallet",id:"connect-web3-wallet",children:[]}],p={toc:s};function d(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"attach-safe-and-wallet"},"Attach Safe and wallet"),(0,a.kt)("p",null,"When you open the Exit App, it will look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Exit App interface",src:n(7615).Z})),(0,a.kt)("p",null,"The Exit App prompts you to enter an ",(0,a.kt)("code",null,"Account Address"),". The address refers to the Exit-enabled Safe account from which you are exiting."),(0,a.kt)("p",null,"Enter the Safe's address into the ",(0,a.kt)("code",null,"Account Address"),' field, and click "Attach Account". '),(0,a.kt)("p",null,"If the Safe is on a network other than Mainnet, you can either select the correct network from the dropdown menu at the top or preface the address with its chain ID. For example, a Safe on Rinkeby could also be entered as ",(0,a.kt)("code",null,"rin:0xF44\u2026dbd4"),", which will automatically switch the dropdown to the correct network."),(0,a.kt)("p",null,"Be sure to verify the Account Address is correct. If you need to find the Account Address of the Safe that holds the assets you wish to claim, inquire with the account admins, find an official resource, or look up the Safe on a block explorer like ",(0,a.kt)("a",{parentName:"p",href:"https://etherscan.io"},"https://etherscan.io"),"."),(0,a.kt)("p",null,'Note: You will receive the following error if the Safe does not have the Exit Module equipped: "The account address entered is not a Safe on ',"[current network]",". Please confirm it's correct, or use the dropdown above to attach a Safe deployed on a different network.\""),(0,a.kt)("h2",{id:"connect-web3-wallet"},"Connect Web3 wallet"),(0,a.kt)("p",null,'Next, attach your web3 wallet by clicking on "Connect Wallet" in the left panel. If you\'re exiting while using a Safe account, you do not need this step, because you are already connected via the Safe App.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connect wallet",src:n(8519).Z})),(0,a.kt)("p",null,"In this tutorial, we'll use the ALUM token, a test token on the Rinkeby test network."))}d.isMDXComponent=!0},7615:function(e,t,n){t.Z=n.p+"assets/images/exitapp_01-attach-safe-f5042a94e782fadefdd0d8e80655269e.png"},8519:function(e,t,n){t.Z=n.p+"assets/images/exitapp_02-connect-web3-wallet-99f2154daca87b278f1e5979cdfdd1fc.png"}}]);