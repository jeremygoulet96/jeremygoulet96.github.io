import{_ as j}from"./jLHJx4Ki.js";import{_ as w}from"./DBlX6ntL.js";import{_ as k}from"./0H0mWmwc.js";import{j as q,r as p,u as I,e as S,k as C,f as T,c as n,g as $,a as e,b as l,F as E,h as N,i as A,o as m,w as B,t as d,l as D}from"./B-qvpR4W.js";import{u as F,q as L}from"./Bc5X_Vw9.js";import{_ as V}from"./DlAUqK2U.js";import"./B2ogIZwq.js";import"./CHbtHcZb.js";import"./BrqNCvt9.js";const X={class:"projects-section"},M={class:"max-width"},H={class:"project-item"},J={class:"img-container"},P={class:"project-infos"},O={class:"infos aos"},U={class:"project-title"},Y={class:"project-category"},z={key:0,class:"project-description aos"},G={class:"date aos"},K={class:"project-date"},Q={__name:"index",async setup(R){let c,_;const{$gsap:o,$ScrollTrigger:W}=q(),f=p("Projets");I({title:f});const{data:y}=([c,_]=S(()=>F("projets",()=>L("/projets").sort({createdAt:-1}).find())),c=await c,_(),c),g=p(),x=p();let u,v=o.matchMedia();return C(()=>{u=o.context(i=>{i.selector(".project-item").forEach(s=>{const t=s.querySelector(".img-container");o.set(t,{scale:.5,rotationX:50}),o.to(t,{scrollTrigger:{trigger:s,start:"top bottom",end:"bottom bottom",scrub:1},scale:1,rotationX:0});const b=t.querySelector(".project-img");o.set(b,{scale:1.5,rotationX:-40}),o.to(b,{scrollTrigger:{trigger:s,start:"top bottom",end:"bottom bottom",scrub:1},scale:1,rotationX:0})});const a=document.querySelector(".hero-img");o.to(a,{yPercent:15,scrollTrigger:{trigger:g.value,start:"top bottom",end:"bottom top",scrub:!0,onEnter:()=>a.style.opacity=1}}),v.add("(min-width: 800px)",()=>{const s=i.selector(".parallax-desktop-only");document.querySelector(".projects-section .title").style.height=0,s.forEach(t=>{o.to(t,{scrollTrigger:{trigger:t,start:"top bottom",end:"bottom top",scrub:1},y:150})})}),i.selector(".aos").forEach(s=>{o.from(s,{x:100,opacity:0,scrollTrigger:{trigger:s,start:"bottom bottom",end:()=>`+=${s.offsetHeight}`,scrub:1}})})},document.querySelector("main"))}),T(()=>{u.revert()}),(i,r)=>{const a=j,h=w,s=k;return m(),n("div",null,[r[1]||(r[1]=$('<section class="hero" data-v-37ba78e9><div class="max-width" data-v-37ba78e9><div class="infos load-anim" data-v-37ba78e9><h1 class="title" data-v-37ba78e9> Bonjour. 👋 <br data-v-37ba78e9> Je suis Jérémy </h1><span class="subtitle" data-v-37ba78e9>Designer graphique et web</span></div></div></section>',1)),e("div",{class:"hero-img-container",ref_key:"heroImgContainer",ref:g},[l(a,{class:"hero-img",src:"/img/hero.jpeg",quality:"80",format:"webp",width:"2560",densities:"x1 x2"})],512),e("section",X,[e("div",M,[r[0]||(r[0]=e("h2",{class:"title parallax-desktop-only"},"Mes projets",-1)),e("ul",{class:"no-list projects-list",ref_key:"projectsList",ref:x},[(m(!0),n(E,null,N(A(y),t=>(m(),n("li",H,[l(h,{external:!!t.url,to:t.url||t._path,id:t.slug,class:"project-link"},{default:B(()=>[e("div",J,[l(a,{class:"project-img",src:`/img/projets/${t.slug}/hero.jpg`,format:"webp",quality:"90",width:"1440",densities:"1x 2x",alt:`${t.title}`},null,8,["src","alt"])]),e("div",P,[e("div",O,[e("span",U,d(t.title),1),e("span",Y,d(t.category),1)]),t.description?(m(),n("div",z,d(t.description),1)):D("",!0),e("div",G,[e("span",K,d(new Date(t.createdAt).getFullYear()),1)])])]),_:2},1032,["external","to","id"])]))),256))],512)])]),l(s)])}}},nt=V(Q,[["__scopeId","data-v-37ba78e9"]]);export{nt as default};