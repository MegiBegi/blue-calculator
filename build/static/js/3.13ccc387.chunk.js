(this["webpackJsonpblue-calculator"]=this["webpackJsonpblue-calculator"]||[]).push([[3],{59:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),i=t(27),a=t(54),u=t(56),c=t(3),l=Object(c.a)((function(n){return function(){return n}})),d=l(void 0),f=l(d()),p=t(13),s=t(25),b=t(24);function h(){var n=Object(s.a)(["\n  font-size: 36px;\n  color: #ffffff;\n  font-family: 'Nothing You Could Do';\n  font-weight: 400;\n  background-color: #a91548;\n  height: 64px;\n  width: 64px;\n  line-height: 64px;\n  border-radius: 50%;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  outline: none;\n\n  :hover {\n    box-shadow: 0px 0px 2px 4px rgba(255, 255, 255, 0.77);\n  }\n\n  :active {\n    background-color: #660c2b;\n  }\n"]);return h=function(){return n},n}var m=b.c.button(h()),g=["7","8","9","4","5","6","1","2","3","+","0","="].map((function(n,e){return{name:n,id:e}})),x=function(n){var e=n.onButtonClick,t=g.map((function(n){return o.a.createElement(m,{name:n.name,sign:n.id,key:n.id,onClick:e},n.name)}));return o.a.createElement(o.a.Fragment,null,t)};function v(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function y(){var n=v(["\n          @media (min-width: ",") {\n            ","\n          }\n        "]);return y=function(){return n},n}function w(){var n=v(["\n          @media (max-width: ",") {\n            ","\n          }\n        "]);return w=function(){return n},n}function j(){var n=v(["\n    @media (min-width: ",") and\n      (max-width: ",") {\n      ","\n    }\n  "]);return j=function(){return n},n}function O(){var n=v(["\n    @media (min-width: ",") {\n      ","\n    }\n  "]);return O=function(){return n},n}function k(){var n=v(["\n    @media (max-width: ",") {\n      ","\n    }\n  "]);return k=function(){return n},n}var E={huge:"1440px",large:"1170px",medium:"768px",small:"450px"};function C(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e[n]?e[n]:parseInt(n)?n:(console.error("styled-media-query: No valid breakpoint or size specified for media."),"0")}function z(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=Object.keys(n).reduce((function(e,t){var r=n[t];return e.to[t]=function(){return console.warn("styled-media-query: Use media.lessThan('".concat(t,"') instead of old media.to.").concat(t," (Probably we'll deprecate it)")),Object(b.b)(w(),r,b.b.apply(void 0,arguments))},e.from[t]=function(){return console.warn("styled-media-query: Use media.greaterThan('".concat(t,"') instead of old media.from.").concat(t," (Probably we'll deprecate it)")),Object(b.b)(y(),r,b.b.apply(void 0,arguments))},e}),{to:{},from:{}});return Object.assign({lessThan:function(e){return function(){return Object(b.b)(k(),C(e,n),b.b.apply(void 0,arguments))}},greaterThan:function(e){return function(){return Object(b.b)(O(),C(e,n),b.b.apply(void 0,arguments))}},between:function(e,t){return function(){return Object(b.b)(j(),C(e,n),C(t,n),b.b.apply(void 0,arguments))}}},e)}z();function T(){var n=Object(s.a)(["\n    display: none;\n  "]);return T=function(){return n},n}function N(){var n=Object(s.a)(['\n  font-size: 20px;\n  color: #ffffff;\n  font-family: "Nothing You Could Do";\n  font-weight: 400;\n  background-color: #a91548;\n  height: 64px;\n  width: 64px;\n  line-height: 64px;\n  border-radius: 50%;\n  padding: 0;\n  border: none;\n  outline: none;\n  position: sticky;\n  margin-right: 2px;\n\n  :hover {\n    box-shadow: 0px 0px 2px 4px rgba(255, 255, 255, 0.77);\n  }\n\n  :active {\n    background-color: #660c2b;\n  }\n\n  ',"\n"]);return N=function(){return n},n}function D(){var n=Object(s.a)(["\n  height: 329px;\n  width: 244px;\n  padding-left: 28px;\n  padding-right: 28px;\n  padding-bottom: 38px;\n  padding-top: 42px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: space-around;\n"]);return D=function(){return n},n}function P(){var n=Object(s.a)(['\n  width: 249px;\n  height: 63px;\n  border-radius: 10px;\n  background-color: #ffffff;\n  margin-top: 30px;\n  font-size: 36px;\n  font-family: "Nothing You Could Do";\n  text-indent: 20px;\n  line-height: 63px;\n']);return P=function(){return n},n}function Y(){var n=Object(s.a)(["\n  width: 300px;\n  height: auto;\n  display: flex;\n  justify-content: center;\n"]);return Y=function(){return n},n}function q(){var n=Object(s.a)(["\n  width: 300px;\n  height: 506px;\n  border-radius: 10px;\n  background-color: #0095b8;\n  padding: 0;\n  position: relative;\n"]);return q=function(){return n},n}function I(){var n=Object(s.a)(["\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n"]);return I=function(){return n},n}var M=z({small:"420px"}),R=b.c.div(I()),B=b.c.div(q()),F=b.c.div(Y()),J=b.c.input(P()),S=b.c.div(D()),U=b.c.button(N(),M.lessThan("small")(T())),V={getResult:p.f,provideInput:p.g,usedPlus:p.i,zero:p.j,reset:p.h},A=Object(i.b)((function(n){return{currentValue:n.displayed,tooMuchText:n.tooMuch}}),V)((function(n){var e=n.currentValue,t=n.tooMuchText,r=n.getResult,i=n.provideInput,c=n.usedPlus,l=n.zero,d=n.reset;return o.a.createElement(R,null,o.a.createElement(U,{onClick:d},"Reset"),o.a.createElement(B,null,o.a.createElement(F,null,o.a.createElement(J,{name:"Score input",id:"Score input",type:"text",value:null!==e&&void 0!==e?e:"",onChange:f,placeholder:"0"})),o.a.createElement(S,null,o.a.createElement(x,{onButtonClick:function(n){var o=n.target.name,d=Object(a.a)("+",e),f=Object(u.a)("+",e);switch(o){case"=":!t&&d&&r();break;case"+":!t&&!f&&e.length>0&&c(),d&&!f&&r();break;case"0":!t&&""!==e&&l();break;default:!t&&i(o)}}}))))}));function G(){var n=Object(s.a)(["\n  html {\n    padding: 0;\n    margin: 0\n }\n  body {\n    @import url('https://fonts.googleapis.com/css?family=Nothing+You+Could+Do&display=swap');\n    font-family: 'Nothing You Could Do', cursive;\n    padding: 0;\n    margin: 0\n  }\n"]);return G=function(){return n},n}var H=Object(b.a)(G());e.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(H,null),o.a.createElement(A,null))}}}]);
//# sourceMappingURL=3.13ccc387.chunk.js.map