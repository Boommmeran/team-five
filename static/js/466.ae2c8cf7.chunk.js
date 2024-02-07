"use strict";(self.webpackChunkteam_five=self.webpackChunkteam_five||[]).push([[466],{3466:function(n,e,i){i.r(e),i.d(e,{default:function(){return Je}});var r,o,t,a,s,l,p,d,c,x,h,m,u,g,f=i(9439),b=i(168),v=i(7924),y=v.ZP.div(r||(r=(0,b.Z)(["\n  display: flex;\n  width: 79px;\n  height: 32px;\n  gap: 8px;\n"]))),j=v.ZP.p(o||(o=(0,b.Z)(["\n  margin: 5px 0;\n  font-family: 'Poppins-Medium';\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing:-2;\n  color: var(--primaryTextColor);\n"]))),Z=v.ZP.img(t||(t=(0,b.Z)(["\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  border: 1px solid black;\n"]))),w=v.ZP.button(a||(a=(0,b.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 10px;\n  color: var(--primaryTextColor);\n  background:var(--modalBgColor);\n  border: 0;\n  cursor: pointer;\n  stroke: var(--primaryTextColor);\n"]))),P=i(5705),k=v.ZP.div(s||(s=(0,b.Z)(["\n  position: relative;\n  padding: 24px;\n  width: 100%;\n  height: 440px;\n  background: var(--modalBgColor);\n\n  @media only screen and (min-width: 375px) {\n    width: 335px;\n  }\n\n  @media only screen and (min-width: 768px) {\n    width: 400px;\n  }\n"]))),C=v.ZP.h3(l||(l=(0,b.Z)(["\n  margin: 0 0 24px 0;\n  font-family: 'Poppins-Medium';\n  font-size: 18px;\n  line-height: 1.5;\n  letter-spacing:-2;\n  color: var(--primaryTextColor);\n"]))),z=(0,v.ZP)(P.l0)(p||(p=(0,b.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n"]))),T=(0,v.ZP)(P.gN)(d||(d=(0,b.Z)(["\n  margin-bottom: 25px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 68px;\n  height: 68px;\n  border: 1px solid black;\n  cursor: pointer;\n  border-radius: 8px;\n"]))),B=(0,v.ZP)(P.gN)(c||(c=(0,b.Z)(["\n  position: relative;\n  margin-bottom: 14px;\n  padding: 14px 18px;\n  width: 100%;\n  outline: transparent;\n  outline-offset: -1px;\n  border: 1px solid var(--accent);\n  border-radius: 8px;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -2;\n  color: var(--primaryTextColor);\n"]))),M=(0,v.ZP)(P.gN)(x||(x=(0,b.Z)(["\n  margin-bottom: 24px;\n  padding: 14px 18px;\n  width: 100%;\n  outline: transparent;\n  outline-offset: -1px;\n  border: 1px solid var(--accent);\n  border-radius: 8px;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -2;\n  color: var(--primaryTextColor);\n"]))),J=v.ZP.button(h||(h=(0,b.Z)(["\n  width: 100%;\n  background: var(--accent);\n  border: 0;\n  border-radius: 8px;\n  padding: 14px 126px;\n  color: var(--primaryTextColor);\n  font-family: 'Poppins-Medium';\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing:-2;\n"]))),S=v.ZP.button(m||(m=(0,b.Z)(["\n  position: absolute;\n  top: 130px;\n  right: 155px;\n\n  width: 24px;\n  height: 24px;\n  background: var(--accent);\n  border-radius: 8px;\n  border: 0;\n  stroke: var(--primaryTextColor);\n\n  @media only screen and (min-width: 768px) {\n    right: 186px;\n  }\n"]))),q=(0,v.ZP)(P.Bc)(u||(u=(0,b.Z)(["\n  color: red;\n  font-style: italic;\n  font-size: 14px;\n"]))),N=v.ZP.label(g||(g=(0,b.Z)(["\n  position: relative;\n  display: flex;\n  stroke: var(--primaryTextColor);\n\n  svg {\n    position: absolute;\n    top: 16px;\n    right: 15px;\n  }\n"]))),_=i(8007),A=i(7834),R=i(8323),I=i(184),O=_.Ry().shape({photo:_.Z_().url("invalid url"),name:_.Z_().min(2,"2 chars minimum").max(32,"32 chars maximum").matches(/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/,"Invalin name ").required("this field is required"),email:_.Z_().email("Invalid email").matches(/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+@[a-zA-Z0-9]+\.[a-zA-Z]{2, }$/,"Invalid email").required("this field is required"),password:_.Z_().min(8,"8 chars minimum").max(64,"64 chars maximum").matches(/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/,"only latin letters, numbers and symbols").matches(/^\S*$/,"password must not contain spaces").required("this field is required required")}),$=function(){var n=(0,A.a)().user;return(0,I.jsxs)(k,{children:[(0,I.jsx)(C,{children:"Edit profile"}),(0,I.jsx)(P.J9,{initialValues:{name:"",email:"",password:""},validationSchema:O,onSubmit:function(n,e){console.log("Profile form",n),e.resetForm()},children:(0,I.jsxs)(z,{children:[(0,I.jsx)(T,{id:"photo",name:"photo",type:"file",accept:"image/*"}),(0,I.jsx)(q,{name:"name",component:"div"}),(0,I.jsx)("label",{children:(0,I.jsx)(B,{id:"name",name:"name",placeholder:n.name})}),(0,I.jsx)(q,{name:"email",component:"div"}),(0,I.jsx)("label",{children:(0,I.jsx)(B,{id:"email",name:"email",placeholder:n.email,type:"email"})}),(0,I.jsx)(q,{name:"password",component:"div"}),(0,I.jsxs)(N,{children:[(0,I.jsx)(R.J,{name:"eye"}),(0,I.jsx)(M,{id:"password",name:"password",placeholder:n.password})]}),(0,I.jsx)(J,{type:"submit",children:"Submit"})]})}),(0,I.jsx)(S,{children:(0,I.jsx)(R.J,{name:"plus",width:"10px",height:"10px"})})]})},L=i(7948),F=i.n(L),H=i(2791),E={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",padding:"0",transform:"translate(-50%, -50%)",boxShadow:"0px 4px 16px 0px #1616160D"},overlay:{background:"rgba(0,0,0,0.5)"}};F().setAppElement("#root");var G,U,V,D,W,K,Q,X,Y,nn,en,rn,on,tn,an,sn,ln,pn,dn,cn,xn,hn,mn,un,gn,fn,bn,vn,yn,jn,Zn,wn,Pn,kn,Cn,zn,Tn,Bn,Mn=function(){var n=(0,A.a)().user,e=(0,H.useState)(!1),i=(0,f.Z)(e,2),r=i[0],o=i[1];return(0,I.jsxs)(y,{children:[(0,I.jsx)(j,{children:n.name}),(0,I.jsx)(Z,{src:"",alt:"image user",onClick:function(){o(!0)}}),(0,I.jsxs)(F(),{isOpen:r,style:E,contentLabel:"Modal",children:[(0,I.jsx)($,{}),(0,I.jsx)(w,{onClick:function(){o(!1)},children:(0,I.jsx)(R.J,{name:"close"})})]})]})},Jn=function(){return(0,I.jsx)("div",{children:(0,I.jsx)(Mn,{})})},Sn=i(4420),qn=i(4249),Nn=v.ZP.div(G||(G=(0,b.Z)(["\n  width: 225px;\n  min-height: 100vh;\n  padding: 14px;\n  color: var(--primaryTextColor);\n  letter-spacing: -0.02em;\n  text-align: left;\n  background-color: var(--primaryBgColor);\n"]))),_n=v.ZP.div(U||(U=(0,b.Z)(["\n  font-family: 'Poppins-SemiBold';\n  letter-spacing: -0.04em;\n  display: flex;\n  column-gap: 8px;\n  align-items: center;\n  margin-bottom: 70px;\n"]))),An=v.ZP.div(V||(V=(0,b.Z)(["\n  font-family: 'Poppins-Medium';\n  font-size: 14px;\n\n  h3 {\n    margin-bottom: 8px;\n    font-size: 12px;\n    font-family: 'Poppins-Regular';\n    opacity: 50%;\n  }\n  "]))),Rn=v.ZP.div(D||(D=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  border-top: rgba(255, 255, 255, 0.1) solid 1px;\n  border-bottom: rgba(255, 255, 255, 0.1) solid 1px;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  margin-bottom: 40px;\n"]))),In=v.ZP.button(W||(W=(0,b.Z)(["\n  width: 40px;\n  height: 36px;\n  background-color: var(--btnPlus);\n  border: none;\n  border-radius: 6px;\n  stroke: var(--primaryBgColor);\n  transition: var(--transition);\n\n  &:hover,\n  &:focus,\n  &:active {\n    background-color: var(--btnPlusHover);\n  }\n"]))),On=v.ZP.ul(K||(K=(0,b.Z)(["\nmargin-bottom: 40px;\n"]))),$n=v.ZP.div(Q||(Q=(0,b.Z)(["\n  margin-left: auto;\n  display: none;\n  gap: 8px;\n\n  button {\n    margin: 0;\n    padding: 0;\n    border: none;\n    background: none;\n  }\n"]))),Ln=v.ZP.li(X||(X=(0,b.Z)(["\n  height: 61px;\n  margin: 0 -14px 0 -14px;\n  padding: 0 14px 0 14px;\n  display: flex;\n  align-items: center;\n  stroke: var(--primaryTextColor);\n  opacity: 0.5;\n  transition: var(--transition);\n\n  p {\n    margin-left: 4px;\n    font-family: 'Poppins-Medium';\n    font-size: 14px;\n  }\n\n  &:hover,\n  &:focus,\n  &:active {\n    background-color: var(--secondaryBgColor);\n    opacity: 1;\n\n    > "," {\n      display: flex;\n    }\n  }\n"])),$n),Fn=v.ZP.div(Y||(Y=(0,b.Z)(["\n  height: 238px;\n  padding: 14px;\n  margin-bottom: 24px;\n  font-size: 12px;\n  border-radius: 8px;\n  background-color: var(--secondaryBgColor);\n\n  p {\n    margin-top: 14px;\n    margin-bottom: 18px;\n    line-height: 1.33333;\n    letter-spacing: 0;\n  }\n"]))),Hn=v.ZP.button(nn||(nn=(0,b.Z)(["\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  display: flex;\n  align-items: center;\n\n  span {\n    margin-left: 8px;\n    color: var(--primaryTextColor);\n    font-family: 'Poppins-Medium';\n  }\n"]))),En=v.ZP.button(en||(en=(0,b.Z)(["\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  display: flex;\n  align-items: center;\n  font-family: 'Poppins-Medium';\n  font-size: 14px;\n  stroke: var(--accent);\n  transition: var(--transition);\n\n  p {\n    margin-left: 14px;\n    color: var(--primaryTextColor);\n  }\n\n  &:hover,\n  &:focus,\n  &:active {\n    stroke: var(--hover);\n  }\n"]))),Gn=function(){var n=(0,Sn.I0)();return(0,I.jsxs)(Nn,{children:[(0,I.jsxs)(_n,{children:[(0,I.jsx)(R.J,{name:"logo",width:"32",height:"32"}),(0,I.jsx)("h2",{children:"TaskPro"})]}),(0,I.jsxs)(An,{children:[(0,I.jsx)("h3",{children:"My boards"}),(0,I.jsxs)(Rn,{children:[(0,I.jsxs)("p",{children:["Create a",(0,I.jsx)("br",{}),"new board"]}),(0,I.jsx)(In,{type:"button",children:(0,I.jsx)(R.J,{name:"plus",width:"20",height:"20"})})]}),(0,I.jsx)(On,{children:(0,I.jsxs)(Ln,{children:[(0,I.jsx)(R.J,{name:"four-circles",width:"18",height:"18",style:{opacity:.5}}),(0,I.jsx)("p",{children:"Board name"}),(0,I.jsxs)($n,{children:[(0,I.jsx)("button",{type:"button",children:(0,I.jsx)(R.J,{name:"pencil",width:"16",height:"16"})}),(0,I.jsx)("button",{children:(0,I.jsx)(R.J,{name:"trash",width:"16",height:"16"})})]})]})})]}),(0,I.jsxs)(Fn,{children:[(0,I.jsxs)("picture",{children:[(0,I.jsx)("source",{srcSet:" https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/cactus-1x.webp 1x, https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/cactus-2x.webp 2x "}),(0,I.jsx)("img",{src:"https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/cactus-1x.webp",width:"54",height:"78",alt:"little cute cactus"})]}),(0,I.jsxs)("p",{children:["If you need help with"," ",(0,I.jsx)("span",{style:{color:"var(--accent)"},children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),(0,I.jsxs)(Hn,{type:"button",children:[(0,I.jsx)("div",{style:{stroke:"var(--primaryTextColor)"},children:(0,I.jsx)(R.J,{name:"help",width:"20",height:"20"})}),(0,I.jsx)("span",{children:"Need help?"})]})]}),(0,I.jsxs)(En,{type:"button",onClick:function(){n((0,qn.ni)())},children:[(0,I.jsx)(R.J,{name:"login",width:"32",height:"32"}),(0,I.jsx)("p",{children:"Log out"})]})]})},Un=i(7689),Vn=v.ZP.div(rn||(rn=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  background: var(--secondaryBgColor);\n\n  @media (max-width: 767px) {\n    padding: 14px 0px;\n  }\n\n  @media (min-width: 768px) {\n    padding: 26px 0px;\n  }\n\n  @media (min-width: 1440px) {\n    padding: 10px 0px;\n  }\n"]))),Dn=v.ZP.h3(on||(on=(0,b.Z)(["\n  font-family: 'Poppins-Medium';\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n\n  color: var(--primaryTextColor);\n\n  @media (min-width: 768px) {\n    font-size: 18px;\n  }\n"]))),Wn=v.ZP.button(tn||(tn=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  font-family: 'Poppins-Medium';\n\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n\n  border: none;\n\n  color: var(--secondaryTextColor);\n  opacity: 0.8;\n  background-color: inherit;\n\n  stroke: var(--secondaryTextColor);\n  stroke-opacity: 0.8;\n  transition: opacity var(--transition);\n  > svg {\n    width: 16px;\n    height: 16px;\n  }\n\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    opacity: 1;\n  }\n"]))),Kn=v.ZP.h2(an||(an=(0,b.Z)(["\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n  font-size: 18px;\n  letter-spacing: -0.02em;\n  margin-left: 24px;\n  color: #fff;\n"]))),Qn=v.ZP.p(sn||(sn=(0,b.Z)(["\n  font-family: 'Poppins', sans-serif;\n  font-weight: 500;\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  margin-left: 24px;\n  width: 300px;\n  color: #fff;\n"]))),Xn=v.ZP.button(ln||(ln=(0,b.Z)(["\n  font-family: 'Poppins', sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  letter-spacing: -0.02em;\n  text-decoration: underline;\n  /* color: rgba(255, 255, 255, 0.5); */\n"]))),Yn=v.ZP.ul(pn||(pn=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),ne=v.ZP.label(dn||(dn=(0,b.Z)(["\n  font-family: 'Poppins', sans-serif;\n  font-weight: 400;\n  font-size: 12px;\n  letter-spacing: -0.02em;\n  color: rgba(255, 255, 255, 0.5);\n"]))),ee=function(n){var e=n.closeModal;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Kn,{children:"Filters"}),(0,I.jsxs)(Qn,{children:["Label color",(0,I.jsx)(Xn,{children:"Show all"})]}),(0,I.jsxs)(Yn,{children:[(0,I.jsxs)(ne,{children:[(0,I.jsx)("input",{type:"radio",name:"colorPicker",value:"Grey",defaultChecked:!0}),"Without priority"]}),(0,I.jsxs)(ne,{children:[(0,I.jsx)("input",{type:"radio",name:"colorPicker",value:"Blue"}),"Low"]}),(0,I.jsxs)(ne,{children:[(0,I.jsx)("input",{type:"radio",name:"colorPicker",value:"Red"}),"Medium"]}),(0,I.jsxs)(ne,{children:[(0,I.jsx)("input",{type:"radio",name:"colorPicker",value:"Green"}),"High"]})]}),(0,I.jsx)(R.J,{name:"icon-close",width:"20",height:"20",onClick:e})]})},ie={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",transform:"translate(-50%, -50%)",padding:0}},re=function(){var n=(0,H.useState)(!1),e=(0,f.Z)(n,2),i=e[0],r=e[1],o=function(){r(!1)},t=(0,Un.UO)().boardName;return(0,I.jsxs)(Vn,{children:[(0,I.jsx)(Dn,{children:t}),(0,I.jsxs)(Wn,{type:"button",onClick:function(){r(!0)},children:[(0,I.jsx)(R.J,{name:"filter"}),"Filters"," "]}),(0,I.jsx)(F(),{isOpen:i,onRequestClose:o,style:ie,contentLabel:"Filters Modal",children:(0,I.jsx)(ee,{closeModal:o})})]})},oe=v.ZP.div(cn||(cn=(0,b.Z)(["\n  background: var(--secondaryBgColor);\n  width: 100vw;\n  height: 100vh;\n"]))),te=v.ZP.p(xn||(xn=(0,b.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  min-width: 280px;\n\n  font-size: 14px;\n  letter-spacing: -0.02em;\n  line-height: 1.33;\n\n  color: var(--secondaryTextColor);\n\n  @media (min-width: 375px) {\n    width: 335px;\n  }\n\n  @media (min-width: 768px) {\n    line-height: 1.29;\n    width: 486px;\n    margin: auto;\n  }\n"]))),ae=v.ZP.button(hn||(hn=(0,b.Z)(["\n  margin: 0;\n  padding: 0;\n\n  border: none;\n  outline: none;\n\n  background-color: inherit;\n  color: var(--btnPlus);\n  cursor: pointer;\n  transition: color var(--transition);\n  &:hover,\n  &:focus {\n    color: var(--btnPlusHover);\n  }\n"]))),se=v.ZP.div(mn||(mn=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 28px;\n  height: 28px;\n  border: 1px solid black;\n  border-radius: 8px;\n\n  > svg {\n    width: 14px;\n    height: 14px;\n    stroke: black;\n  }\n"]))),le=v.ZP.button(un||(un=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  max-width: 335px;\n\n  padding: 14px 79px;\n\n  border: 1px solid black;\n  border-radius: 8px;\n\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n"]))),pe=function(){return(0,I.jsx)("div",{children:(0,I.jsxs)(le,{type:"button",children:[(0,I.jsx)(se,{children:(0,I.jsx)(R.J,{name:"plus"})})," ","Add another column"]})})},de=v.ZP.div(gn||(gn=(0,b.Z)(["\n  position: relative;\n  padding: 24px;\n  width: 335px;\n  height: 433px;\n\n  border-radius: 8px;\n\n  background-color: var(--modalBgColor);\n\n  stroke: var(--primaryTextColor);\n\n  @media (min-width: 768px) {\n    width: 350px;\n  }\n"]))),ce=v.ZP.h3(fn||(fn=(0,b.Z)(["\n  margin-bottom: 24px;\n\n  font-family: 'Poppins-Medium';\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n\n  color: var(--primaryTextColor);\n"]))),xe=v.ZP.button(bn||(bn=(0,b.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n\n  border: none;\n  outline: none;\n  background-color: inherit;\n\n  opacity: 0.5;\n  transition: opacity var(--transition);\n\n  > svg {\n    stroke: var(--primaryTextColor);\n  }\n\n  &:hover,\n  &:focus {\n    opacity: 1;\n  }\n\n  cursor: pointer;\n"]))),he=(0,v.ZP)(P.l0)(vn||(vn=(0,b.Z)(["\n  font-family: 'Poppins-Medium';\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n"]))),me=(0,v.ZP)(P.gN)(yn||(yn=(0,b.Z)(["\n  width: 287px;\n  height: 49px;\n  padding: 14px 0 14px 18px;\n  margin-bottom: 24px;\n\n  font-family: 'Poppins-Regular';\n  font-size: 14px;\n\n  border: 1px solid var(--btnPlus);\n  border-radius: 8px;\n  box-shadow: 0 4px 16px 0 rgba(22, 22, 22, 0.08);\n\n  color: var(--primaryTextColor);\n  background-color: ",";\n  opacity: 0.4;\n\n  @media (min-width: 768px) {\n    width: 302px;\n  }\n"])),(function(n){return"dark"===n.theme?" #1f1f1f":"inherit"})),ue=v.ZP.p(jn||(jn=(0,b.Z)(["\n  margin-bottom: 14px;\n\n  color: var(--primaryTextColor);\n"]))),ge=v.ZP.ul(Zn||(Zn=(0,b.Z)(["\n  display: flex;\n  gap: 8px;\n\n  margin-bottom: 24px;\n"]))),fe=v.ZP.label(wn||(wn=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 0;\n\n  border: none;\n  background-color: inherit;\n\n  width: 18px;\n  height: 18px;\n\n  opacity: 0.5;\n  transition: opacity var(--transition);\n\n  cursor: pointer;\n  > svg {\n    stroke: var(--primaryTextColor);\n  }\n\n  &:focus,\n  &:hover {\n    opacity: 1;\n  }\n"]))),be=(0,v.ZP)(P.gN)(Pn||(Pn=(0,b.Z)(["\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  border: 0;\n  padding: 0;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  margin: -1px;\n"]))),ve=v.ZP.ul(kn||(kn=(0,b.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  width: 252px;\n  height: 60px;\n  margin-bottom: 40px;\n"]))),ye=v.ZP.label(Cn||(Cn=(0,b.Z)([""]))),je=v.ZP.div(zn||(zn=(0,b.Z)(["\n  width: 28px;\n  height: 28px;\n  background-color: red;\n  border-radius: 6px;\n  transition: transform var(--transition);\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    transform: scale(1.1);\n  }\n"]))),Ze=v.ZP.button(Tn||(Tn=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n\n  min-width: 287px;\n  height: 49px;\n\n  padding: 10px 0 11px 0;\n\n  border: 1px solid black;\n  border-radius: 8px;\n\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n\n  color: var(--btnText);\n  background-color: var(--btnBgColor);\n  transition: background-color var(--transition);\n\n  cursor: pointer;\n\n  @media (min-width: 768px) {\n    width: 302px;\n  }\n\n  &:hover,\n  &:focus {\n    background-color: var(--btnBgColorHover);\n  }\n"]))),we=v.ZP.div(Bn||(Bn=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 28px;\n  height: 28px;\n\n  border-radius: 8px;\n\n  background-color: var(--btnText);\n\n  > svg {\n    width: 14px;\n    height: 14px;\n    stroke: var(--plusInBtn);\n  }\n"]))),Pe=["four-circles","star","loading","puzzle","container","lightning","colors","hexagon"],ke=["diego","eberhard","florian","gabriella","gaetan","igor","kace","miklos","milad","nicolas","noBack","romello","tony","vickholius","vino","zhou"],Ce={boardTitle:"",icon:"four-circles",background:"noBack"},ze=_.Ry({boardTitle:_.Z_().required(),icon:_.Z_().oneOf(Pe).required(),background:_.Z_().oneOf(ke).required()}),Te=function(n){var e=n.closeModal;return(0,I.jsxs)(de,{children:[(0,I.jsx)(ce,{children:"New board"}),(0,I.jsx)(xe,{type:"button",onClick:e,children:(0,I.jsx)(R.J,{name:"close"})}),(0,I.jsx)(P.J9,{initialValues:Ce,validationSchema:ze,onSubmit:function(n){console.log(n),e()},children:(0,I.jsxs)(he,{children:[(0,I.jsx)(me,{type:"text",placeholder:"Title",name:"boardTitle"}),(0,I.jsx)(ue,{children:"Icons"}),(0,I.jsx)(ge,{children:Pe.map((function(n){return(0,I.jsx)("li",{children:(0,I.jsxs)(fe,{children:[(0,I.jsx)(R.J,{name:n}),(0,I.jsx)(be,{type:"radio",name:"icon",value:n})]})},n)}))}),(0,I.jsx)(ue,{children:"Backgrounds"}),(0,I.jsx)(ve,{children:ke.map((function(n){return(0,I.jsx)("li",{children:(0,I.jsxs)(ye,{children:[(0,I.jsx)(je,{}),(0,I.jsx)(be,{type:"radio",name:"background",value:n})]})},n)}))}),(0,I.jsxs)(Ze,{type:"submit",children:[(0,I.jsx)(we,{children:(0,I.jsx)(R.J,{name:"plus"})})," ","Create"]})]})})]})},Be=function(){var n=(0,Un.UO)().boardName,e=(0,H.useState)(!1),i=(0,f.Z)(e,2),r=i[0],o=i[1],t=function(){o(!1)};return(0,I.jsxs)(oe,{children:[n?(0,I.jsx)(pe,{}):(0,I.jsxs)(te,{children:["Before starting your project, it is essential"," ",(0,I.jsx)(ae,{type:"button",onClick:function(){o(!0)},children:"to create a board"})," ","to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]}),(0,I.jsx)(F(),{isOpen:r,onRequestClose:t,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",transform:"translate(-50%, -50%)",padding:0}},contentLabel:"Board Creation Modal",ariaHideApp:!1,children:(0,I.jsx)(Te,{closeModal:t})})]})},Me=function(){return(0,I.jsxs)("div",{children:[(0,I.jsx)(re,{}),(0,I.jsx)(Be,{})]})};function Je(){return(0,I.jsxs)("div",{children:[(0,I.jsx)(Jn,{}),(0,I.jsx)(Gn,{}),(0,I.jsx)(Me,{})]})}}}]);
//# sourceMappingURL=466.ae2c8cf7.chunk.js.map