"use strict";(self.webpackChunkteam_five=self.webpackChunkteam_five||[]).push([[672],{9672:function(n,e,i){i.r(e),i.d(e,{default:function(){return ue}});var t,r,o,a,s,l,p,d,x,c,h,m,u,g,b=i(9439),f=i(168),j=i(7924),Z=j.ZP.div(t||(t=(0,f.Z)(["\n  display: flex;\n  width: 79px;\n  height: 32px;\n  gap: 8px;\n"]))),v=j.ZP.p(r||(r=(0,f.Z)(["\n  margin: 5px 0;\n  font-family: 'Poppins-Medium';\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing:-2;\n  color: var(--primaryTextColor);\n"]))),y=j.ZP.img(o||(o=(0,f.Z)(["\n  width: 32px;\n  height: 32px;\n  cursor: pointer;\n  border: 1px solid black;\n"]))),w=j.ZP.button(a||(a=(0,f.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 10px;\n  color: var(--primaryTextColor);\n  background:var(--modalBgColor);\n  border: 0;\n  cursor: pointer;\n  stroke: var(--primaryTextColor);\n"]))),k=i(5705),P=j.ZP.div(s||(s=(0,f.Z)(["\n  position: relative;\n  padding: 24px;\n  width: 100%;\n  height: 440px;\n  background: var(--modalBgColor);\n\n  @media only screen and (min-width: 375px) {\n    width: 335px;\n  }\n\n  @media only screen and (min-width: 768px) {\n    width: 400px;\n  }\n"]))),C=j.ZP.h3(l||(l=(0,f.Z)(["\n  margin: 0 0 24px 0;\n  font-family: 'Poppins-Medium';\n  font-size: 18px;\n  line-height: 1.5;\n  letter-spacing:-2;\n  color: var(--primaryTextColor);\n"]))),z=(0,j.ZP)(k.l0)(p||(p=(0,f.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n"]))),T=(0,j.ZP)(k.gN)(d||(d=(0,f.Z)(["\n  margin-bottom: 25px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 68px;\n  height: 68px;\n  border: 1px solid black;\n  cursor: pointer;\n  border-radius: 8px;\n"]))),J=(0,j.ZP)(k.gN)(x||(x=(0,f.Z)(["\n  position: relative;\n  margin-bottom: 14px;\n  padding: 14px 18px;\n  width: 100%;\n  outline: transparent;\n  outline-offset: -1px;\n  border: 1px solid var(--accent);\n  border-radius: 8px;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -2;\n  color: var(--primaryTextColor);\n"]))),B=(0,j.ZP)(k.gN)(c||(c=(0,f.Z)(["\n  margin-bottom: 24px;\n  padding: 14px 18px;\n  width: 100%;\n  outline: transparent;\n  outline-offset: -1px;\n  border: 1px solid var(--accent);\n  border-radius: 8px;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -2;\n  color: var(--primaryTextColor);\n"]))),M=j.ZP.button(h||(h=(0,f.Z)(["\n  width: 100%;\n  background: var(--accent);\n  border: 0;\n  border-radius: 8px;\n  padding: 14px 126px;\n  color: var(--primaryTextColor);\n  font-family: 'Poppins-Medium';\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing:-2;\n"]))),q=j.ZP.button(m||(m=(0,f.Z)(["\n  position: absolute;\n  top: 130px;\n  right: 155px;\n\n  width: 24px;\n  height: 24px;\n  background: var(--accent);\n  border-radius: 8px;\n  border: 0;\n  stroke: var(--primaryTextColor);\n\n  @media only screen and (min-width: 768px) {\n    right: 186px;\n  }\n"]))),S=(0,j.ZP)(k.Bc)(u||(u=(0,f.Z)(["\n  color: red;\n  font-style: italic;\n  font-size: 14px;\n"]))),N=j.ZP.label(g||(g=(0,f.Z)(["\n  position: relative;\n  display: flex;\n  stroke: var(--primaryTextColor);\n\n  svg {\n    position: absolute;\n    top: 16px;\n    right: 15px;\n  }\n"]))),_=i(8007),A=i(7834),$=i(8323),I=i(184),O=_.Ry().shape({photo:_.Z_().url("invalid url"),name:_.Z_().min(2,"2 chars minimum").max(32,"32 chars maximum").matches(/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/,"Invalin name ").required("this field is required"),email:_.Z_().email("Invalid email").matches(/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+@[a-zA-Z0-9]+\.[a-zA-Z]{2, }$/,"Invalid email").required("this field is required"),password:_.Z_().min(8,"8 chars minimum").max(64,"64 chars maximum").matches(/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/,"only latin letters, numbers and symbols").matches(/^\S*$/,"password must not contain spaces").required("this field is required required")}),R=function(){var n=(0,A.a)().user;return(0,I.jsxs)(P,{children:[(0,I.jsx)(C,{children:"Edit profile"}),(0,I.jsx)(k.J9,{initialValues:{name:"",email:"",password:""},validationSchema:O,onSubmit:function(n,e){console.log("Profile form",n),e.resetForm()},children:(0,I.jsxs)(z,{children:[(0,I.jsx)(T,{id:"photo",name:"photo",type:"file",accept:"image/*"}),(0,I.jsx)(S,{name:"name",component:"div"}),(0,I.jsx)("label",{children:(0,I.jsx)(J,{id:"name",name:"name",placeholder:n.name})}),(0,I.jsx)(S,{name:"email",component:"div"}),(0,I.jsx)("label",{children:(0,I.jsx)(J,{id:"email",name:"email",placeholder:n.email,type:"email"})}),(0,I.jsx)(S,{name:"password",component:"div"}),(0,I.jsxs)(N,{children:[(0,I.jsx)($.J,{name:"eye"}),(0,I.jsx)(B,{id:"password",name:"password",placeholder:n.password})]}),(0,I.jsx)(M,{type:"submit",children:"Submit"})]})}),(0,I.jsx)(q,{children:(0,I.jsx)($.J,{name:"plus",width:"10px",height:"10px"})})]})},F=i(7948),L=i.n(F),E=i(2791),H={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",padding:"0",transform:"translate(-50%, -50%)",boxShadow:"0px 4px 16px 0px #1616160D"},overlay:{background:"rgba(0,0,0,0.5)"}};L().setAppElement("#root");var U,V,D,G,K,Q,W,X,Y,nn,en,tn,rn,on,an,sn,ln,pn,dn,xn,cn,hn,mn,un,gn,bn,fn,jn,Zn,vn,yn,wn=function(){var n=(0,A.a)().user,e=(0,E.useState)(!1),i=(0,b.Z)(e,2),t=i[0],r=i[1];return(0,I.jsxs)(Z,{children:[(0,I.jsx)(v,{children:n.name}),(0,I.jsx)(y,{src:"",alt:"image user",onClick:function(){r(!0)}}),(0,I.jsxs)(L(),{isOpen:t,style:H,contentLabel:"Modal",children:[(0,I.jsx)(R,{}),(0,I.jsx)(w,{onClick:function(){r(!1)},children:(0,I.jsx)($.J,{name:"close"})})]})]})},kn=function(){return(0,I.jsx)("div",{children:(0,I.jsx)(wn,{})})},Pn=i(4420),Cn=i(4249),zn=j.ZP.div(U||(U=(0,f.Z)(["\n  width: 225px;\n  min-height: 100vh;\n  padding: 14px;\n  color: var(--primaryTextColor);\n  letter-spacing: -0.02em;\n  text-align: left;\n  background-color: var(--primaryBgColor);\n"]))),Tn=j.ZP.div(V||(V=(0,f.Z)(["\n  font-family: 'Poppins-SemiBold';\n  letter-spacing: -0.04em;\n  display: flex;\n  column-gap: 8px;\n  align-items: center;\n  margin-bottom: 70px;\n"]))),Jn=j.ZP.div(D||(D=(0,f.Z)(["\n  font-family: 'Poppins-Medium';\n  font-size: 14px;\n\n  h3 {\n    margin-bottom: 8px;\n    font-size: 12px;\n    font-family: 'Poppins-Regular';\n    opacity: 50%;\n  }\n  "]))),Bn=j.ZP.div(G||(G=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n  border-top: rgba(255, 255, 255, 0.1) solid 1px;\n  border-bottom: rgba(255, 255, 255, 0.1) solid 1px;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  margin-bottom: 40px;\n"]))),Mn=j.ZP.button(K||(K=(0,f.Z)(["\n  width: 40px;\n  height: 36px;\n  background-color: var(--btnPlus);\n  border: none;\n  border-radius: 6px;\n  stroke: var(--primaryBgColor);\n  transition: var(--transition);\n\n  &:hover,\n  &:focus,\n  &:active {\n    background-color: var(--btnPlusHover);\n  }\n"]))),qn=j.ZP.ul(Q||(Q=(0,f.Z)(["\nmargin-bottom: 40px;\n"]))),Sn=j.ZP.div(W||(W=(0,f.Z)(["\n  margin-left: auto;\n  display: none;\n  gap: 8px;\n\n  button {\n    margin: 0;\n    padding: 0;\n    border: none;\n    background: none;\n  }\n"]))),Nn=j.ZP.li(X||(X=(0,f.Z)(["\n  height: 61px;\n  margin: 0 -14px 0 -14px;\n  padding: 0 14px 0 14px;\n  display: flex;\n  align-items: center;\n  stroke: var(--primaryTextColor);\n  opacity: 0.5;\n  transition: var(--transition);\n\n  p {\n    margin-left: 4px;\n    font-family: 'Poppins-Medium';\n    font-size: 14px;\n  }\n\n  &:hover,\n  &:focus,\n  &:active {\n    background-color: var(--secondaryBgColor);\n    opacity: 1;\n\n    > "," {\n      display: flex;\n    }\n  }\n"])),Sn),_n=j.ZP.div(Y||(Y=(0,f.Z)(["\n  height: 238px;\n  padding: 14px;\n  margin-bottom: 24px;\n  font-size: 12px;\n  border-radius: 8px;\n  background-color: var(--secondaryBgColor);\n\n  p {\n    margin-top: 14px;\n    margin-bottom: 18px;\n    line-height: 1.33333;\n    letter-spacing: 0;\n  }\n"]))),An=j.ZP.button(nn||(nn=(0,f.Z)(["\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  display: flex;\n  align-items: center;\n\n  span {\n    margin-left: 8px;\n    color: var(--primaryTextColor);\n    font-family: 'Poppins-Medium';\n  }\n"]))),$n=j.ZP.button(en||(en=(0,f.Z)(["\n  margin: 0;\n  padding: 0;\n  border: none;\n  background: none;\n  display: flex;\n  align-items: center;\n  font-family: 'Poppins-Medium';\n  font-size: 14px;\n  stroke: var(--accent);\n  transition: var(--transition);\n\n  p {\n    margin-left: 14px;\n    color: var(--primaryTextColor);\n  }\n\n  &:hover,\n  &:focus,\n  &:active {\n    stroke: var(--hover);\n  }\n"]))),In=function(){var n=(0,Pn.I0)();return(0,I.jsxs)(zn,{children:[(0,I.jsxs)(Tn,{children:[(0,I.jsx)($.J,{name:"logo",width:"32",height:"32"}),(0,I.jsx)("h2",{children:"TaskPro"})]}),(0,I.jsxs)(Jn,{children:[(0,I.jsx)("h3",{children:"My boards"}),(0,I.jsxs)(Bn,{children:[(0,I.jsxs)("p",{children:["Create a",(0,I.jsx)("br",{}),"new board"]}),(0,I.jsx)(Mn,{type:"button",children:(0,I.jsx)($.J,{name:"plus",width:"20",height:"20"})})]}),(0,I.jsx)(qn,{children:(0,I.jsxs)(Nn,{children:[(0,I.jsx)($.J,{name:"four-circles",width:"18",height:"18",style:{opacity:.5}}),(0,I.jsx)("p",{children:"Board name"}),(0,I.jsxs)(Sn,{children:[(0,I.jsx)("button",{type:"button",children:(0,I.jsx)($.J,{name:"pencil",width:"16",height:"16"})}),(0,I.jsx)("button",{children:(0,I.jsx)($.J,{name:"trash",width:"16",height:"16"})})]})]})})]}),(0,I.jsxs)(_n,{children:[(0,I.jsxs)("picture",{children:[(0,I.jsx)("source",{srcSet:" https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/cactus-1x.webp 1x, https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/cactus-2x.webp 2x "}),(0,I.jsx)("img",{src:"https://res.cloudinary.com/dt7u6ic1c/image/upload/v1707115407/cactus-1x.webp",width:"54",height:"78",alt:"little cute cactus"})]}),(0,I.jsxs)("p",{children:["If you need help with"," ",(0,I.jsx)("span",{style:{color:"var(--accent)"},children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),(0,I.jsxs)(An,{type:"button",children:[(0,I.jsx)("div",{style:{stroke:"var(--primaryTextColor)"},children:(0,I.jsx)($.J,{name:"help",width:"20",height:"20"})}),(0,I.jsx)("span",{children:"Need help?"})]})]}),(0,I.jsxs)($n,{type:"button",onClick:function(){n((0,Cn.ni)())},children:[(0,I.jsx)($.J,{name:"login",width:"32",height:"32"}),(0,I.jsx)("p",{children:"Log out"})]})]})},On=i(7689),Rn=j.ZP.button(tn||(tn=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n\n  border: none;\n\n  background-color: inherit;\n\n  stroke: black;\n  > svg {\n    width: 16px;\n    height: 16px;\n  }\n\n  cursor: pointer;\n"]))),Fn=j.ZP.h3(rn||(rn=(0,f.Z)(["\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n"]))),Ln=j.ZP.div(on||(on=(0,f.Z)(["\n  @media (max-width: 767px) {\n    padding: 14px 0px;\n  }\n\n  @media (min-width: 768px) {\n    padding: 26px 0px;\n  }\n\n  @media (min-width: 1440px) {\n    padding: 10px 0px;\n  }\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),En=function(){var n=(0,On.UO)().boardName;return(0,I.jsxs)(Ln,{children:[(0,I.jsx)(Fn,{children:n}),(0,I.jsxs)(Rn,{type:"button",children:[(0,I.jsx)($.J,{name:"filter"}),"Filters"," "]})]})},Hn=j.ZP.p(an||(an=(0,f.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  min-width: 280px;\n\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: -0.02em;\n  line-height: 1.33;\n\n  @media (min-width: 375px) {\n    width: 335px;\n  }\n\n  @media (min-width: 768px) {\n    line-height: 1.29;\n    width: 486px;\n    margin: auto;\n  }\n"]))),Un=j.ZP.button(sn||(sn=(0,f.Z)(["\n  margin: 0;\n  padding: 0;\n\n  border: none;\n  outline: none;\n\n  background-color: inherit;\n  color: inherit;\n  cursor: pointer;\n  &:hover {\n    color: red;\n  }\n"]))),Vn=j.ZP.div(ln||(ln=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 28px;\n  height: 28px;\n  border: 1px solid black;\n  border-radius: 8px;\n\n  > svg {\n    width: 14px;\n    height: 14px;\n    stroke: black;\n  }\n"]))),Dn=j.ZP.button(pn||(pn=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  max-width: 335px;\n\n  padding: 14px 79px;\n\n  border: 1px solid black;\n  border-radius: 8px;\n\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n"]))),Gn=function(){return(0,I.jsx)("div",{children:(0,I.jsxs)(Dn,{type:"button",children:[(0,I.jsx)(Vn,{children:(0,I.jsx)($.J,{name:"plus"})})," ","Add another column"]})})},Kn=j.ZP.div(dn||(dn=(0,f.Z)(["\n  position: relative;\n  padding: 24px;\n  width: 335px;\n  height: 433px;\n\n  stroke: black;\n"]))),Qn=j.ZP.h3(xn||(xn=(0,f.Z)(["\n  margin-bottom: 24px;\n\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n"]))),Wn=j.ZP.button(cn||(cn=(0,f.Z)(["\n  position: absolute;\n  top: 14px;\n  right: 14px;\n\n  border: none;\n  outline: none;\n  background-color: inherit;\n\n  cursor: pointer;\n"]))),Xn=(0,j.ZP)(k.l0)(hn||(hn=(0,f.Z)(["\n  font-size: 14;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n"]))),Yn=(0,j.ZP)(k.gN)(mn||(mn=(0,f.Z)(["\n  width: 287px;\n  height: 49px;\n  padding: 14px 0 14px 18px;\n  margin-bottom: 24px;\n\n  border: 1px solid rgba(0, 0, 0, 0.4);\n  border-radius: 8px;\n"]))),ne=j.ZP.p(un||(un=(0,f.Z)(["\n  margin-bottom: 14px;\n"]))),ee=j.ZP.div(gn||(gn=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 28px;\n  height: 28px;\n  border: 1px solid black;\n  border-radius: 8px;\n\n  > svg {\n    width: 14px;\n    height: 14px;\n    stroke: black;\n  }\n"]))),ie=(0,j.ZP)(k.gN)(bn||(bn=(0,f.Z)(["\nposition: absolute;\ntop: 0;\nleft: 0;\nmargin: -1px;\nwidth: 1px;\nheight: 1px;\n"]))),te=j.ZP.ul(fn||(fn=(0,f.Z)(["\n  display: flex;\n  gap: 8px;\n\n  margin-bottom: 24px;\n"]))),re=j.ZP.label(jn||(jn=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 0;\n\n  border: none;\n  background-color: inherit;\n\n  width: 18px;\n  height: 18px;\n\n  cursor: pointer;\n  > svg {\n    stroke: black;\n    opacity: 1;\n  }\n  :checked {\n    border: 1px solid red;\n    border-radius: 4px;\n  }\n"]))),oe=j.ZP.label(Zn||(Zn=(0,f.Z)(["\n  width: 28px;\n  height: 28px;\n"]))),ae=j.ZP.ul(vn||(vn=(0,f.Z)(["\n  width: 252px;\n  height: 60px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n"]))),se=j.ZP.button(yn||(yn=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n\n  min-width: 287px;\n  height: 49px;\n\n  padding: 10px 0 11px 0;\n\n  border: 1px solid black;\n  border-radius: 8px;\n\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.02em;\n"]))),le=["four-circles","star","loading","puzzle","container","lightning","colors","hexagon"],pe=["diego","eberhard","florian","gabriella","gaetan","igor","kace","miklos","milad","nicolas","noBack","romello","tony","vickholius","vino","zhou"],de={boardTitle:"",icon:"four-circles",background:"noBack"},xe=_.Ry({boardTitle:_.Z_().required(),icon:_.Z_().oneOf(le).required(),background:_.Z_().oneOf(pe).required()}),ce=function(n){var e=n.closeModal;return(0,I.jsxs)(Kn,{children:[(0,I.jsx)(Qn,{children:"New board"}),(0,I.jsx)(Wn,{type:"button",onClick:e,children:(0,I.jsx)($.J,{name:"close"})}),(0,I.jsx)(k.J9,{initialValues:de,validationSchema:xe,onSubmit:function(n){console.log(n),e()},children:(0,I.jsxs)(Xn,{children:[(0,I.jsx)(Yn,{type:"text",placeholder:"Title",name:"boardTitle"}),(0,I.jsx)(ne,{children:"Icons"}),(0,I.jsx)(te,{children:le.map((function(n){return(0,I.jsx)("li",{children:(0,I.jsxs)(re,{children:[(0,I.jsx)($.J,{name:n}),(0,I.jsx)(ie,{type:"radio",name:"icon",value:n})]})},n)}))}),(0,I.jsx)(ne,{children:"Backgrounds"}),(0,I.jsx)(ae,{children:pe.map((function(n){return(0,I.jsx)("li",{children:(0,I.jsxs)(oe,{children:[(0,I.jsx)("img",{src:"some path",alt:""}),(0,I.jsx)(ie,{type:"radio",name:"background",value:n})]})},n)}))}),(0,I.jsxs)(se,{type:"submit",children:[(0,I.jsx)(ee,{children:(0,I.jsx)($.J,{name:"plus"})})," ","Create"]})]})})]})},he=function(){var n=(0,On.UO)().boardName,e=(0,E.useState)(!1),i=(0,b.Z)(e,2),t=i[0],r=i[1],o=function(){r(!1)};return(0,I.jsxs)(I.Fragment,{children:[n?(0,I.jsx)(Gn,{}):(0,I.jsxs)(Hn,{children:["Before starting your project, it is essential"," ",(0,I.jsx)(Un,{type:"button",onClick:function(){r(!0)},children:"to create a board"})," ","to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members."]}),(0,I.jsx)(L(),{isOpen:t,onRequestClose:o,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",transform:"translate(-50%, -50%)",padding:0}},contentLabel:"Board Creation Modal",ariaHideApp:!1,children:(0,I.jsx)(ce,{closeModal:o})})]})},me=function(){return(0,I.jsxs)("div",{children:[(0,I.jsx)(En,{}),(0,I.jsx)(he,{})]})};function ue(){return(0,I.jsxs)("div",{children:[(0,I.jsx)(kn,{}),(0,I.jsx)(In,{}),(0,I.jsx)(me,{})]})}}}]);
//# sourceMappingURL=672.eb4ac015.chunk.js.map