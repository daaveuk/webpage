(this["webpackJsonp@daaveuk/daaveuk.github.io"]=this["webpackJsonp@daaveuk/daaveuk.github.io"]||[]).push([[0],{18:function(n,e,t){n.exports=t(28)},28:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(12),o=t.n(i),c=t(4),l=t(17);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=t(5),d=t(1),m={body:"#45525F",text:"#E9F0F8",backgroundAccent:"#2A3541",headerGradient:"linear-gradient(113.53deg, ".concat("#2A3541"," 0%, rgba(57, 70, 83, 0) 86.04%)"),buttonGradient:"linear-gradient(270deg, #f58555 0%, #e67272 100%)",hover:"\n  position: relative;\n  transition: all 0.1s ease-in;\n  top: 0;\n  &:hover {\n    top: -2px;\n    box-shadow: 0 1rem 1rem -0.5rem #0a0e13c4;\n  }\n  "},h={body:"#FFFFFE",backgroundAccent:"#EBECF0",text:"#45525F",headerGradient:"linear-gradient(142.5deg, ".concat("#EBECF0"," -0.86%, ").concat("#FFFFFE"," 86.05%)"),buttonGradient:"linear-gradient(270deg, #f58555 0%, #e67272 100%)",hover:"\n  position: relative;\n  transition: all 0.1s ease-in;\n  top: 0;\n  &:hover {\n    top: -2px;\n    box-shadow: 0 1rem 1rem -0.5rem #A9B2BB;\n  }\n  "},f=t(2);function s(){var n=Object(f.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  body, html {\n    align-items: center;\n    background: ",";\n    color: ",";\n    margin: 0;\n    font-size: 16px;\n    font-family: 'Lato', sans-serif;\n    padding: 0;\n    @media (min-width: 768px) {\n      font-size: 18px;\n    }\n    @media (min-width: 1281px) {\n      font-size: 20px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: underline;\n  }\n  \n  "]);return s=function(){return n},n}var b=Object(d.b)(s(),(function(n){return n.theme.body}),(function(n){return n.theme.text}),(function(n){return n.theme.text}));function g(){var n=Object(f.a)(["\n  background-color: black;\n  background: ",";\n  color: white;\n  border-radius: 1.5rem;\n  appearance: none;\n  border: none;\n  line-height: 3rem;\n  min-width: 10rem;\n  font-weight: 700;\n  cursor: pointer;\n  font-size: 1rem;\n  ","\n"]);return g=function(){return n},n}var p=d.d.button(g(),(function(n){return n.theme.buttonGradient}),(function(n){return n.theme.hover})),v=function(n){var e=n.onClick,t=n.children;return a.a.createElement(p,{onClick:e},t)};function w(){var n=Object(f.a)(["\n  font-family: Quicksand;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 4rem;\n  display: block;\n  margin: 0;\n  line-height: 5rem;\n  color: ",";\n  @media (min-width: 768px) {\n    font-size: 6rem;\n  }\n"]);return w=function(){return n},n}var E=function(n){var e=n.children,t=n.testId;return a.a.createElement(x,{"data-testid":t},e)},x=d.d.h1(w(),(function(n){return n.theme.text}));function k(){var n=Object(f.a)(["\n  min-height: 6rem;\n  margin-bottom: 3rem;\n  background: ",";\n  @media (min-width: 768px) {\n    min-height: 9rem;\n    margin-bottom: 3rem;\n  }\n"]);return k=function(){return n},n}function y(){var n=Object(f.a)(["\n  text-align: left;\n  transform: translateY(2rem);\n  padding: 0 1rem;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 0;\n  @media (min-width: 768px) {\n    transform: translateY(6rem);\n    margin: 0 auto;\n    flex-direction: row;\n    max-width: 1440px;\n  }\n"]);return y=function(){return n},n}var j=function(n){var e=n.children;return a.a.createElement("header",null,a.a.createElement(F,null,a.a.createElement(O,null,e)))},O=d.d.div(y()),F=d.d.div(k(),(function(n){return n.theme.headerGradient})),I=t.p+"static/media/line.b3d5a0a6.svg";function A(){var n=Object(f.a)(["\n  max-width: 30rem;\n"]);return A=function(){return n},n}function z(){var n=Object(f.a)(["\n  width: 6rem;\n  margin-top: 1.4rem;\n  margin-right: 1.5rem;\n  height: 10rem;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position-x: center;\n  background-position-y: top;\n  display: none;\n  @media (min-width: 768px) {\n    display: block;\n  }\n"]);return z=function(){return n},n}function C(){var n=Object(f.a)(["\n  padding: 0 1rem;\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 768px) {\n    margin: 0 auto;\n    flex-direction: row;\n    max-width: 1440px;\n  }\n"]);return C=function(){return n},n}var G=d.d.main(C()),B=d.d.div(z(),(function(n){return n.svg})),M=d.d.div(A()),S=function(n){var e=n.children;return a.a.createElement(G,null,a.a.createElement(B,{svg:I}),a.a.createElement(M,null,e))},T=function(n){var e=n.symbol,t=n.label;return a.a.createElement("span",{className:"emoji",role:"img","aria-label":t||"","aria-hidden":t?"false":"true"},e)};function D(){var n=Object(f.a)(["\n  opacity: 0;\n  z-index: 1;\n  border-radius: 15px;\n  width: 42px;\n  height: 26px;\n  &:checked + "," {\n    &::after {\n      content: '';\n      display: block;\n      border-radius: 50%;\n      width: 20px;\n      height: 20px;\n      background-color: #e67272;\n      margin-left: 19px;\n      transition: 0.2s;\n    }\n  }\n"]);return D=function(){return n},n}function U(){var n=Object(f.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 47px;\n  height: 30px;\n  border-radius: 15px;\n  border: 3px solid #e67272;\n  background-color: white;\n  cursor: pointer;\n  &::after {\n    content: '';\n    display: block;\n    border-radius: 50%;\n    width: 20px;\n    height: 20px;\n    margin: 2px;\n    background: ",";\n    transition: 0.2s;\n  }\n"]);return U=function(){return n},n}function Y(){var n=Object(f.a)(["\n  position: relative;\n  display: inline-block;\n"]);return Y=function(){return n},n}var H=d.d.div(Y()),J=d.d.label(U(),(function(n){return n.theme.buttonGradient})),W=d.d.input(D(),J),q=function(n){var e=n.handleToggle,t=n.id,r=n.value;return a.a.createElement(H,null,a.a.createElement(W,{id:t,type:"checkbox",onClick:e,checked:r}),a.a.createElement(J,{htmlFor:t}))};function L(){var n=Object(f.a)(["\n  margin: 0 0.3rem;\n"]);return L=function(){return n},n}function N(){var n=Object(f.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"]);return N=function(){return n},n}var P=d.d.div(N()),R=d.d.p(L()),_=function(n){var e=n.id,t=n.handleToggle,r=n.value;return a.a.createElement(P,null,a.a.createElement(R,null,a.a.createElement(T,{label:"Sun Emoji",symbol:"\ud83c\udf1e"})),a.a.createElement(q,{id:e,handleToggle:t,value:r}),a.a.createElement(R,null,a.a.createElement(T,{label:"Moon Emoji",symbol:"\ud83c\udf19"})))},K=t.p+"static/media/profilePic.7e1d5ef5.png";function Q(){var n=Object(f.a)(["\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0.5rem 1rem;\n  background-color: ",";\n  @media (min-width: 768px) {\n    flex-direction: row;\n  }\n"]);return Q=function(){return n},n}var V=d.d.footer(Q(),(function(n){return n.theme.backgroundAccent})),X=function(n){var e=n.children;return a.a.createElement(V,null,e)},$=t(16);function Z(){var n=Object(f.a)(["\n        background: #007bb5;\n        border-color: #007bb5;\n      "]);return Z=function(){return n},n}function nn(){var n=Object(f.a)(["\n      background: #1da1f2;\n      border-color: #1da1f2;\n    "]);return nn=function(){return n},n}function en(){var n=Object(f.a)(["\n      background: white;\n      border-color: #ddd;\n      color: black;\n    "]);return en=function(){return n},n}function tn(){var n=Object(f.a)(["\n  line-height: 3rem;\n  width: 3rem;\n  height: 3rem;\n  text-align: center;\n  border-radius: 50%;\n  display: inline-block;\n  background-color: red;\n  color: white;\n  border: 1px solid black;\n  ","\n  & + & {\n    margin-left: 0.5rem;\n  }\n  ","\n  ","\n    ","\n"]);return tn=function(){return n},n}var rn=d.d.a(tn(),(function(n){return n.theme.hover}),(function(n){return"github"===n.icon&&Object(d.c)(en())}),(function(n){return"twitter"===n.icon&&Object(d.c)(nn())}),(function(n){return"linkedin"===n.icon&&Object(d.c)(Z())})),an=function(n){var e=n.icon,t=n.href;return a.a.createElement(rn,{href:t,icon:e,target:"_blank",rel:"noreferrer noopener"},a.a.createElement($.a,{icon:["fab",e]}))},on=function(){var n=encodeURIComponent("Hi Dave, I'd like to get in touch!"),e=encodeURIComponent("\nHi Dave,\n\nI'm writing to get in touch in regards to...\n\nAll the best,\n\nMy Name\n\n  ");return"mailto:".concat("me+enquires@daave.co.uk","?subject=").concat(n,"&body=").concat(e)};function cn(){var n=Object(f.a)(["\n  min-width: ",";\n  min-height: ",";\n  display: block;\n"]);return cn=function(){return n},n}var ln=function(n){return a.a.createElement(un,n)};ln.defaultProps={height:null,width:null};var un=d.d.img(cn(),(function(n){return n.width}),(function(n){return n.height})),dn=ln;function mn(){var n=Object(f.a)(["\n  width: 4rem;\n  height: 4rem;\n  @media (min-width: 768px) {\n    width: 6rem;\n    height: 6rem;\n    margin-right: 1rem;\n  }\n"]);return mn=function(){return n},n}var hn=Object(d.d)(dn)(mn()),fn=function(n){return a.a.createElement(hn,n)},sn=function(){var n=function(){var n=window.localStorage.getItem("theme"),e=Object(r.useState)(n||"light"),t=Object(u.a)(e,2),a=t[0],i=t[1],o=Object(r.useState)(!1),c=Object(u.a)(o,2),l=c[0],d=c[1],m=function(n){window.localStorage.setItem("theme",n),i(n)};return Object(r.useEffect)((function(){var e="light";e=n||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"light":"dark"),i(e),d(!0)}),[n]),[a,function(){m("light"===a?"dark":"light")},l]}(),e=Object(u.a)(n,2),t=e[0],i=e[1],o="light"===t?h:m,c="dark"===t;return a.a.createElement(d.a,{theme:o},a.a.createElement(a.a.Fragment,null,a.a.createElement(b,null),a.a.createElement(j,null,a.a.createElement(fn,{src:K}),a.a.createElement(E,{testId:"title"},"Ey 'up!")),a.a.createElement(S,null,a.a.createElement("div",null,a.a.createElement("p",null,"I\u2019m Dave, A quaint Yorkshireman living in Manchester. An experienced ",a.a.createElement("strong",null,"Front End Developer"),", I\u2019m passionate about Javascript, Unit testing, UX and Accessibility."),a.a.createElement("p",null,"I\u2019m currently part of a great team building great products at"," ",a.a.createElement("strong",null,"Kaboodle"),"."),a.a.createElement("br",null),a.a.createElement("p",null,"Always happy for a chat! Why not drop me a line?"),a.a.createElement(v,{onClick:function(){console.log(on()),window.location.href=on()}},a.a.createElement(T,{label:"Email icon",symbol:"\ud83d\udcec"})," Get In Touch"),a.a.createElement("p",null,"You can also find me here!"),a.a.createElement(an,{href:"https://twitter.com/daaveuk/",icon:"twitter"}),a.a.createElement(an,{href:"https://www.linkedin.com/in/daaveuk/",icon:"linkedin"}),a.a.createElement(an,{href:"https://github.com/daaveuk/",icon:"github"}))),a.a.createElement(X,null,a.a.createElement(_,{id:"themeToggle",handleToggle:function(){i("light"===t?"dark":"light")},value:c}),a.a.createElement("span",null,"Made with ",a.a.createElement(T,{label:"Love",symbol:"\u2764\ufe0f"})," by David Henderson."),a.a.createElement("span",null,a.a.createElement("a",{href:"https://github.com/daaveuk/webpage",target:"_blank",rel:"noreferrer noopener"},"View the code here.")))))};c.b.add(l.a),o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(sn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.4eafef2f.chunk.js.map