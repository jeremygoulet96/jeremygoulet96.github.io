import{_ as o}from"./tuIIgtw2.js";import{v as h,s as i,E as m,o as u,n as l,h as r,$ as d,O as f,y as g,P as p}from"./DNqZWCp-.js";const y=h({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(e){const n=i().public.mdc.useNuxtImage?o:"img",t=e,c=m(()=>{var a;if((a=t.src)!=null&&a.startsWith("/")&&!t.src.startsWith("//")){const s=f(g(i().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return p(s,t.src)}return t.src});return(a,s)=>(u(),l(d(r(n)),{src:r(c),alt:e.alt,width:e.width,height:e.height},null,8,["src","alt","width","height"]))}});export{y as default};
