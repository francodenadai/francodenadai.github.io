(this.webpackJsonpart=this.webpackJsonpart||[]).push([[0],{33:function(e,n,t){e.exports=t(50)},38:function(e,n,t){},39:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var a,i=t(0),o=t.n(i),l=t(11),r=t.n(l),c=(t(38),t(39),t(1)),s=t(2),m=t(3),u=t(6),p=t(5),d=function(e){Object(u.a)(t,e);var n=Object(p.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"goToFacebook",value:function(){window.open("https://www.facebook.com/Franco-De-Nadai-2957635120932123")}},{key:"goToInsta",value:function(){window.open("https://www.instagram.com/franco_denadai/")}},{key:"render",value:function(){return o.a.createElement("div",{className:"contenitorIcons"},o.a.createElement("img",{className:"icon",src:"https://img.icons8.com/ios-filled/50/000000/instagram-new.png",onClick:this.goToInsta}),o.a.createElement("img",{className:"icon",src:"https://img.icons8.com/ios-filled/50/000000/facebook-new.png",onClick:this.goToFacebook}),o.a.createElement("img",{className:"icon",src:"https://img.icons8.com/ios-filled/50/000000/email-sign.png"}))}}]),t}(o.a.Component),g=function(e){Object(u.a)(t,e);var n=Object(p.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"crossfade"},o.a.createElement("figure",null),o.a.createElement("figure",null),o.a.createElement("figure",null),o.a.createElement("figure",null),o.a.createElement("figure",null)),o.a.createElement("div",{style:{position:"absolute",zIndex:"100",bottom:"0"}},o.a.createElement(d,null)))}}]),t}(o.a.Component),f=function(e){Object(u.a)(t,e);var n=Object(p.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("img",{className:"instaImg"+(this.props.classStyle?" "+this.props.classStyle:""),src:this.props.url})}}]),t}(o.a.Component),v=function(e){Object(u.a)(t,e);var n=Object(p.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return o.a.createElement("div",{style:{paddingTop:"55px",backgroundColor:"#FFF"}},o.a.createElement("section",{className:"grid-1"},o.a.createElement("div",{className:"item-1"},o.a.createElement("p",{style:{textAlign:"center"}},"Biografia")),o.a.createElement("div",{className:"item-2"},o.a.createElement("p",{className:"textBio"},"De Nadai Franco nasce a Bronzolo il 21 marzo 1950. Fin da ragazzo vedendo il padre dipingere ad acquarello manifesta un particolare interesse per l\u2019arte, si avvicina attraverso il disegno che perfezioner\xe0 seguendo corsi specifici con il Prof. De Polo. ")),o.a.createElement("div",{className:"item-3",style:{display:"inline-flex"}},o.a.createElement("img",{src:"padre.jpeg",className:"photosInBio"})),o.a.createElement("div",{className:"item-4",style:{display:"inline-flex"}},o.a.createElement(f,{id:"CBTM1kvKX5R"})),o.a.createElement("div",{className:"item-5"},o.a.createElement("p",{className:"textBio"},"Frequenta le scuole grafiche intraprendendo poi questa attivit\xe0. Il vero impulso verso la pittura lo avr\xe0 dal pittore veneto Giovanni Bisson (un grande maestro del colore), che frequenter\xe0 spesso negli anni della giovent\xf9, ed in seguito nel tempo libero dalla sua attivit\xe0.")),o.a.createElement("div",{className:"item-6"},o.a.createElement("p",{className:"textBio"},"La sua \xe8 una pittura in continuo movimento, influenzabile per timbri e forza del colore dai luoghi che frequenta. Crede molto nelle emozioni che un dipinto ad olio deve trasmettere. La sua \xe8 una pittura forte, solare e interpretativa, spesso per scelta, il colore sovrasta il soggetto. Non indulge in concessoni cercando il consenso facile.")),o.a.createElement("div",{className:"item-7",style:{display:"inline-flex"}},o.a.createElement("img",{src:"prova.jpeg",className:"photosInBio"})),o.a.createElement("div",{className:"item-8",style:{display:"inline-flex"}},o.a.createElement("img",{src:"3dena.jpeg",className:"photosInBio"})),o.a.createElement("div",{className:"item-9"},o.a.createElement("p",{className:"textBio"},"Dopo pi\xf9 di quarant\u2019anni di attivit\xe0 dipinge prima di tutto per se stesso, chi sa leggerlo comunque sar\xe0 gratificato da immagini di una poesia rara. Nel corso degli anni ha esposto varie volte in sia in mostre personali che collettive."),o.a.createElement("p",{className:"textBio"},"Franco De Nadai vive e dipinge a Tesero (TN) in Via Delmarco 1/b. "))))}}]),t}(o.a.Component),b=function(e){Object(u.a)(t,e);var n=Object(p.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{paddingTop:"65px",paddingLeft:"10px",paddingRight:"10px",display:this.props.visible?"inherit":"none"}},o.a.createElement("div",{className:"rowGallery"},this.props.imgs.map((function(n,t){var a=n.url,i=n.name;return o.a.createElement("div",{key:"gallerImage"+t,className:"columnGallery",onClick:function(){return e.props.onClick(t)}},o.a.createElement("div",{className:"cardGall"},o.a.createElement(f,{url:a,classStyle:"galleryInsta"}),o.a.createElement("div",{className:"overlay"},i)))}))))}}]),t}(o.a.Component),x=t(23),h=t(27),E=t.n(h),y={closeButton:{padding:10,width:50,height:50,textAlign:"center",background:"black",borderRadius:"50%",color:"white",fontWeight:"bold",fontSize:23,position:"absolute",right:0,zIndex:100,margin:10,cursor:"pointer"}},j={slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}},w=function(e){Object(u.a)(t,e);var n=Object(p.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this,n=Object(x.a)(Object(x.a)({},j),{},{initialSlide:this.props.selected});return o.a.createElement("div",{style:{display:"inline-flex",overflow:"hidden",paddingTop:"55px",position:"absolute",top:"0",right:"0",bottom:"0",left:"0"}},o.a.createElement("div",{onClick:function(){return e.props.onClick(null)},style:y.closeButton},"X"),o.a.createElement(E.a,n,this.props.imgs.map((function(e,n){var t=e.url,a=e.name;return o.a.createElement("div",{key:"artimage"+n},o.a.createElement("p",{className:"description"},a),o.a.createElement(f,{url:t,classStyle:"slideShowInsta"}))}))))}}]),t}(o.a.Component),k=[{url:"paintings/163silenzioalparco.jpg",name:"Silenzio al parco della Pieve 2016 -   olio su tavola cm 50x70"},{url:"paintings/416vecchiomulino.jpg",name:"Vecchio mulino in Alto Adige 2001 - olio su tela cm 50x70"},{url:"paintings/5denamin.jpg",name:"CHIEDERE A PAPA"},{url:"paintings/613valvenegia.jpg",name:"Val venegia 1998 - olio su tavola cm 35x50"},{url:"paintings/Anterivopascolo.jpg",name:"Anterivo pascolo 2020 - olio su tavola cm 50x50"},{url:"paintings/AutunnoalParco.jpg",name:"Autunno al Parco della Pieve 2020 - olio su tavola cm 24x30"},{url:"paintings/Bellamontecongruppo.jpg",name:"Bellamonte con gruppo Pale 2020 - olio su tavola cm 30x40"},{url:"paintings/grandetilio.jpg",name:"Grande tilio a Zanon 2020 - olio su masonite cm 50x70"},{url:"paintings/GruppoCornon.jpg",name:"Gruppo Cornon da Spianez 2020 - olio su tavola cm 24x30"},{url:"paintings/Luciradentisullebaite.jpg",name:"Luci radenti sulle baite - olio su tavola cm 30x40 "},{url:"paintings/Masoinmontagna.jpg",name:"Maso in montagna - olio su tavola cm 30x40"},{url:"paintings/Paesaggioalpino.jpg",name:"Paesaggio alpino - olio su tavola cm 35x50"},{url:"paintings/Papaveri.jpg",name:"Papaveri - olio su tavola cm 50x50"},{url:"paintings/PrimaveraaSValier.jpg",name:"Primavera a S. Valier - olio su tavola cm 40x60"},{url:"paintings/Tabiainmontagna.jpg",name:"Tabi\xe0 in montagna - olio su tavola cm 30x30"},{url:"paintings/Ultimaneve.jpg",name:"Ultima neve - olio su tavola cm 50x70"},{url:"paintings/Ventoinautunno.jpg",name:"Vento in autunno - olio su tavola cm 50x50"},{url:"paintings/Paesaggioalpinostrada.jpg",name:"Vento in autunno - olio su tavola cm 50x50"}],O=function(e){Object(u.a)(t,e);var n=Object(p.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).state={selected:null},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this,n=this.state.selected,t=function(n){e.setState({selected:n})};return o.a.createElement("div",null,null===n?null:o.a.createElement(w,{imgs:k,selected:n,onClick:t}),o.a.createElement(b,{imgs:k,onClick:t,visible:null===n}))}}]),t}(o.a.Component),N=t(9),C=t(28),B=t.n(C),S={title:{textAlign:"center",color:"black",fontFamily:"Raleway, sans-serif",fontWeight:"600",letterSpacing:"5px",margin:"35px",fontSize:"x-large"},inputBox:(a={width:"60%",height:"150px",padding:"10px 12px",boxSizing:"border-box",border:"2px solid #ccc",borderRadius:"4px",backgroundColor:"rgb(243, 243, 243)",fontSize:"14px",resize:"none"},Object(N.a)(a,"border","2px solid black"),Object(N.a)(a,"fontFamily","Raleway, sans-serif"),Object(N.a)(a,"fontWeight","normal"),Object(N.a)(a,"letterSpacing","1px"),a),text:{fontFamily:"Raleway, sans-serif",fontWeight:"600",letterSpacing:"5px"},nameMailBox:{textAlign:"center",width:"-webkit-fill-available",boxSizing:"border-box",border:"2px solid black",borderRadius:"4px",backgroundColor:"rgb(243, 243, 243)",fontSize:"14px",resize:"none",fontFamily:"Raleway, sans-serif",letterSpacing:"3px",fontWeight:"normal",marginBottom:"10px",padding:"5px"}},z=function(e){Object(u.a)(t,e);var n=Object(p.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{paddingTop:"55px"}},o.a.createElement("div",{style:S.title},"CONTACT"),o.a.createElement("form",{style:{textAlign:"center"},onSubmit:function(e){e.preventDefault(),B.a.sendForm("celeste_denadai_gmail_com","template_l6VmPlu5",e.target,"user_SRHNZ1pOtA2q32NMfgn6Z").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))}},o.a.createElement("p",{style:S.text},"Leave a messagge"),o.a.createElement("div",{style:{margin:"0 auto",width:"60%"}},o.a.createElement("input",{placeholder:"Name",type:"text",name:"senderName",style:S.nameMailBox}),o.a.createElement("input",{type:"email",name:"senderMail",placeholder:"E-Mail",style:S.nameMailBox})),o.a.createElement("textarea",{name:"message_html",style:S.inputBox,placeholder:"Leave a messagge..."}),o.a.createElement("div",{style:{marginTop:"30px"}},o.a.createElement("input",{type:"submit",value:"Send",className:"submit"}))),o.a.createElement("div",{style:{marginTop:"30px"}},o.a.createElement(d,null)))}}]),t}(o.a.Component),T=t(17),A=t(18),P=t(32),F=t(12);function I(){var e=Object(T.a)(["\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n  text-align: center;\n  li {\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n  @media (max-width: 850px) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0px;\n    margin-top: auto;\n    margin-bottom: auto;\n    flex-flow: column nowrap;\n    background-color: #fff;\n    position: fixed;\n    transform: ",";\n    top: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n    transition: transform 0.3s ease-in-out;\n    li {\n        color: #fff;\n        padding: 5px 5px;\n        margin-top: 15px;\n    margin-bottom: 15px;\n    }\n    a {\n      color: #000;\n      font-weight: bold;\n      font-size: larger;\n      letter-spacing: 4px;\n    }\n  a:hover {border-bottom: 5px solid #fff;}\n  }\n"]);return I=function(){return e},e}function D(){var e=Object(T.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 12px;\n  right: 20px;\n  z-index: 20;\n  display: none;\n  color: #000;\n  @media (max-width: 850px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n    color: #000;\n  }\n  div {\n    top: 12px;\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return D=function(){return e},e}var R=A.a.div(D(),(function(e){return e.open?"#ccc":"#333"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),M=A.a.ul(I(),(function(e){return e.open?"translateX(0)":"translateX(100%)"})),V=function(){var e=Object(i.useState)(!1),n=Object(P.a)(e,2),t=n[0],a=n[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(R,{open:t,onClick:function(){return a(!t)}},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null)),o.a.createElement(M,{open:t},o.a.createElement("li",null,o.a.createElement("div",{onClick:function(){return a(!t)}},o.a.createElement(F.b,{className:"button",style:{textDecoration:"none"},to:"/bio"},"BIO"))),o.a.createElement("li",null,o.a.createElement("div",{onClick:function(){return a(!t)}},o.a.createElement(F.b,{className:"button",style:{textDecoration:"none"},to:"/gallery"},"GALLERY "))),o.a.createElement("li",null,o.a.createElement("div",{onClick:function(){return a(!t)}},o.a.createElement(F.b,{className:"button",style:{textDecoration:"none"},to:"/contact"},"CONTACT")))))};function L(){var e=Object(T.a)(["\n  z-index: 1000;\n  position: fixed;\n  top: 0;\n  background-color: white;\n  width: 100%;\n  height: 55px;\n  border-bottom: 2px solid #f1f1f1;\n  display: flex;\n  justify-content: space-between;\n"]);return L=function(){return e},e}var q=A.a.nav(L()),G=function(){return o.a.createElement(q,null,o.a.createElement(F.b,{style:{textDecoration:"none"},to:"/"},o.a.createElement("div",{className:"logo"})),o.a.createElement(V,null))};var W=function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(G,null)),o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/"},o.a.createElement(g,null)),o.a.createElement(c.a,{path:"/bio"},o.a.createElement(v,null)),o.a.createElement(c.a,{path:"/gallery"},o.a.createElement(O,null)),o.a.createElement(c.a,{path:"/contact"},o.a.createElement(z,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(F.a,null,o.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.d8c1c885.chunk.js.map