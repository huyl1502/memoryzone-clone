import{_ as J,b as o,e as l,f as s,F as m,k as P,z as A,d as D,j as N,c as S,q as j,u as e,t as f,l as T,A as F,B as O,C as K,x as Q,r as x,o as E,a as G,m as z,y as W,D as X}from"./ae-widget-core-v1-14.js";const Y={},Z={class:"flashsale__item"},ss={class:"item_product_main"},es=A('<div class="product-thumbnail pos-relative"><div class="square"></div><div class="tagdacbiet_sale sale-flash"></div><div class="product-action"><div class="group_action" data-url="/laptop-dell-inspiron-16-5620-n5620-i5p165w11slu"><a title="So sánh" data-id="32149803" class="btn-circle btn-views btn js-compare-product-add"><i class="fas fa-random"></i></a></div></div></div>',1),ts={class:"product-info"},as=A('<h3 class="product-name"><div class="bar"></div><div class="bar half"></div></h3><div class="product-item-cta position-relative"><div class="price-box"></div></div>',2),os={class:"aer-review-result ae-total-1"},ls=s("svg",{height:"20pt",viewBox:"0 -10 511.98685 511",width:"20pt",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0",fill:"#ccc"})],-1),ns=[ls],is=s("div",{class:"flashsale__bottom",style:{"--stock-color":"var(--text-color)"}},[s("div",{class:"flashsale__progressbar"},[s("div",{class:"flashsale___percent",style:{width:"40%"}})])],-1);function cs(y,t){return o(),l("div",Z,[s("div",ss,[es,s("div",ts,[as,s("div",os,[(o(),l(m,null,P(5,r=>s("span",{key:r,class:"aer-star-deactive"},ns)),64))])]),is])])}const I=J(Y,[["render",cs]]),rs=A('<div class="title_module_main row heading-bar d-flex justify-content-between align-items-center py-0" style="padding:16px!important;"><div class="d-flex align-items-center flex-wrap flashsale__header col-12 justify-content-between"><img src="https://bizweb.dktcdn.net/100/329/122/themes/897348/assets/flashsale_icon.png?1700648010137"><div class="flashsale__countdown-wrapper"><p class="flashsale__countdown"><div class="ega-badge-ctd"><div></div><div class="ega-badge-ctd__colon">Giờ</div><div></div><div class="ega-badge-ctd__colon">Phút</div><div></div><div class="ega-badge-ctd__colon">Giây</div></div></p></div></div></div>',1),ds={class:"flashsale-skeleton"},_s=D({__name:"LoadingSkeleton",setup(y){return(t,r)=>(o(),l(m,null,[rs,s("div",ds,[(o(),l(m,null,P(5,h=>N(I,{key:h})),64))])],64))}}),us={class:"flashsale__item"},hs={class:"item_product_main"},ps={action:"/cart/add",method:"post",class:"variants product-action",enctype:"multipart/form-data"},fs={class:"product-thumbnail pos-relative"},vs=["href","title"],ms=["src","alt"],gs={key:0,class:"tagdacbiet_sale sale-flash"},bs={class:"font16"},ws={class:"product-action"},ys=["data-url"],$s=["data-id"],ks=s("i",{class:"fas fa-random"},null,-1),Ps=[ks],Ss={class:"product-info"},Bs={class:"product-name"},Cs=["href","title"],xs={class:"product-item-cta position-relative"},Ts={class:"price-box"},Vs={class:"price"},js={key:0,class:"compare-price"},Ds={class:"flashsale__bottom",style:{"--stock-color":"var(--text-color)"}},zs={key:0,class:"flashsale__progressbar"},As={key:0,class:"flashsale__progressbar__text"},Ms={key:1,class:"flashsale__progressbar__text"},Ks={key:1,class:"flashsale__progressbar"},Ns=s("span",{class:"flashsale__progressbar__text"}," Đã kết thúc ",-1),Fs=[Ns],Es=D({__name:"ProductCard",props:{product:{}},setup(y){const t=y,r=S(()=>{const a=[];return t.product.image_path&&a.push(t.product.image_path.replace("bizweb.dktcdn.net/","bizweb.dktcdn.net/thumb/medium/")),t.product.product_image_path&&a.push(t.product.product_image_path.replace("bizweb.dktcdn.net/","bizweb.dktcdn.net/thumb/medium/")),a.length||a.push(""),a}),h=S(()=>{const a=O(t.product.price,t.product.compare_at_price),d=t.product.flash_sale_price,i=a?typeof d>"u"?"?":Math.round((a-d)/a*100):0;return{price:a&&i?K(a):0,flashSalePrice:typeof d>"u"?"???.??? ₫":K(d),salePct:i}}),n=S(()=>{if(!t.product.flash_sale_amount)return null;const a=Math.max(t.product.flash_sale_amount-t.product.sold_amount,0);return{available:a,style:`width: ${Math.floor(a/t.product.flash_sale_amount*100)}%`}});return(a,d)=>(o(),l("div",us,[s("div",hs,[s("form",ps,[s("div",fs,[s("a",{class:"image_thumb pos-relative embed-responsive embed-responsive-1by1",href:`/${a.product.slug}?variantid=${a.product.product_variant_shop_id}`,title:a.product.product_name,target:"_blank"},[(o(!0),l(m,null,P(e(r),(i,v)=>(o(),l("img",{key:v,class:j(["product-thumbnail__img",v===0?"product-thumbnail__img--primary":"product-thumbnail__img--secondary"]),width:"480",height:"480",style:{"--image-scale":"1"},src:i||"/default-square.png",alt:a.product.product_name},null,10,ms))),128))],8,vs),e(h).salePct?(o(),l("div",gs,[s("div",bs,"-"+f(e(h).salePct)+"%",1)])):T("",!0),s("div",ws,[s("div",{class:"group_action","data-url":"/"+a.product.slug},[s("a",{title:"So sánh","data-id":a.product.product_id,class:"btn-circle btn-views btn js-compare-product-add"},Ps,8,$s)],8,ys)])]),s("div",Ss,[s("h3",Bs,[s("a",{href:`/${a.product.slug}`,title:a.product.product_name,target:"_blank"},f(a.product.product_name),9,Cs)]),s("div",xs,[s("div",Ts,[s("span",Vs,f(e(h).flashSalePrice),1),e(h).price?(o(),l("span",js,f(e(h).price),1)):T("",!0)])])])]),s("div",Ds,[e(n)?(o(),l("div",zs,[e(n).available>0?(o(),l("span",As," Còn "+f(e(n).available)+"/"+f(a.product.flash_sale_amount)+" suất ",1)):(o(),l("span",Ms," Đã hết suất ")),s("div",{class:"flashsale___percent",style:F(e(n).style)},null,4)])):(o(),l("div",Ks,Fs))])])]))}}),Gs={class:"flashsale__countdown-wrapper"},Is={class:"flashsale__countdown-label mr-sm-2 mr-auto"},qs={class:"flashsale__countdown"},Ls={class:"ega-badge-ctd"},Rs={class:"ega-badge-ctd__item ega-badge-ctd__h"},Us=s("div",{class:"ega-badge-ctd__colon"},"Ngày",-1),Hs={class:"ega-badge-ctd__item ega-badge-ctd__h"},Js=s("div",{class:"ega-badge-ctd__colon"},"Giờ",-1),Os={class:"ega-badge-ctd__item ega-badge-ctd__m"},Qs=s("div",{class:"ega-badge-ctd__colon"},"Phút",-1),Ws={class:"ega-badge-ctd__item ega-badge-ctd__s"},Xs=s("div",{class:"ega-badge-ctd__colon"},"Giây",-1),Ys={key:1,class:"flashsale__countdown-label mr-sm-2 mr-auto"},Zs=D({__name:"CountDown",props:{tab:{}},setup(y){const t=y,r=Q({days:"00",hours:"00",minutes:"00",seconds:"00"}),h=x(!1);let n=null;function a(){if(t.tab.status!==1&&t.tab.status!==2)return;const d=t.tab.status===1?t.tab.start_at:t.tab.finish_at;if(!d)return;let i=Math.floor((new Date(d).getTime()-Date.now())/1e3);if(i<0)return;if(i>24*60*60){h.value=!0;const k=Math.floor(i/(24*60*60));r.days=k>9?k+"":"0"+k,i=i-k*60*60*24}else h.value=!1;const v=Math.floor(i/(60*60));r.hours=v>0?v+"":"0"+v,i=i-v*60*60;const b=Math.floor(i/60);r.minutes=b<=9?"0"+b:b+"";const $=i-b*60;r.seconds=$<=9?"0"+$:$+""}return E(()=>{a(),n=setInterval(a,1e3)}),G(()=>{n&&clearInterval(n)}),(d,i)=>(o(),l("div",Gs,[d.tab.status===1||d.tab.status===2?(o(),l(m,{key:0},[s("span",Is,f(d.tab.status===2?"Kết thúc sau":"Bắt đầu sau"),1),s("div",qs,[s("div",Ls,[e(h)?(o(),l(m,{key:0},[s("div",null,[s("div",Rs,f(e(r).days),1)]),Us],64)):T("",!0),s("div",null,[s("div",Hs,f(e(r).hours),1)]),Js,s("div",null,[s("div",Os,f(e(r).minutes),1)]),Qs,s("div",null,[s("div",Ws,f(e(r).seconds),1)]),Xs])])],64)):(o(),l("span",Ys," Chương trình đã kết thúc! "))]))}}),se=["src"],ee={class:"flashsale__container"},te={class:"ae-flashsale__heading"},ae={class:"ae-flashsale__heading--top"},oe={class:"ae-flashsale__heading_title"},le={class:"heading-bar__title flashsale__title m-0"},ne=["src","alt"],ie=["href","title"],ce=s("span",{class:"ega-dot"},[s("span",{class:"ega-ping"})],-1),re=["id"],de={key:0,class:"ae-flashsale__tabs swiper-wrapper"},_e=["data-tab"],ue=s("br",null,null,-1),he={key:0,class:"flashsale-skeleton"},pe=["id"],fe={class:"swiper-wrapper"},ve=s("div",{class:"swiper-button-prev"},null,-1),me=s("div",{class:"swiper-button-next"},null,-1),ge={key:2},we=D({__name:"ae-flash-sale",props:{flashSale:{},api:{},apiKey:{},wait:{}},setup(y){const t=y,r=S(()=>`AeFlashSaleCampaign-${t.flashSale}`),h=S(()=>`AeFlashSaleCampaignTab-${t.flashSale}`),n=x(null),a=x([]),d=x(!0),i=x(0);let v=null,b=null;function $(){v&&(v.destroy(!1),v=null),b&&(b.destroy(!1),b=null)}async function k(){$(),await X(),v=new Swiper(`#${e(r)}`,{slidesPerView:4.5,spaceBetween:10,navigation:{nextEl:`#${e(r)} .swiper-button-next`,prevEl:`#${e(r)} .swiper-button-prev`},autoplay:!1,breakpoints:{300:{slidesPerView:1.5,spaceBetween:10},500:{slidesPerView:2.5,spaceBetween:10},640:{slidesPerView:2.5,spaceBetween:10},768:{slidesPerView:3.5,spaceBetween:10},991:{slidesPerView:4.5,spaceBetween:10},1200:{slidesPerView:4.5,spaceBetween:10}}}),b=new Swiper(`#${e(h)}`,{autoplay:!1,slidesPerView:"auto"})}const q=async()=>{var u;try{const p=Date.now();d.value=!0;const c=await(await fetch(`${t.api}store/flash-sale/${t.flashSale}`,{headers:{"Ae-Api-Key":t.apiKey+"",Accept:"application/json"}})).json();n.value=c.campaign,i.value=c.activeTab;const g=(u=c.campaign.flash_sale_tabs.find(w=>w.id===c.activeTab))==null?void 0:u.line;if(a.value=M(c.products,g),t.wait){const w=Date.now()-p;w<t.wait&&await new Promise(H=>setTimeout(H,t.wait-w))}}catch(p){console.error(p)}finally{d.value=!1,k()}};function M(u,p=1){if(p===1)return u.map(c=>[c]);const _=[];return u.forEach(c=>{const g=_[_.length-1];!g||g.length>=p?_.push([c]):g.push(c)}),_}E(()=>{q()}),G(()=>{$()});let B=null;const V=x(!1),L=async u=>{B&&(B.abort(),B=null);try{$();const p=Date.now();V.value=!0,B=new AbortController;const c=await(await fetch(`${t.api}store/flash-sale/${t.flashSale}/tab/${u}`,{headers:{"Ae-Api-Key":t.apiKey+"",Accept:"application/json"},signal:B.signal})).json();if(a.value=M(c,e(C).line),t.wait){const g=Date.now()-p;g<t.wait&&await new Promise(w=>setTimeout(w,t.wait-g))}}catch{a.value=[]}finally{V.value=!1,B=null,k()}},R=u=>{const _=+u.currentTarget.dataset.tab;e(i)!=_&&(i.value=_,L(_))},C=S(()=>!e(n)||!e(i)?null:e(n).flash_sale_tabs.find(u=>u.id===e(i))),U=S(()=>{var u,p,_;return e(n)?{"--heading-background":e(n).header_background,"--heading-background-image":(u=e(n))!=null&&u.header_background_url?`url(${e(n).header_background_url})`:"","--heading-color":e(n).header_color,"--countdown-color":e(n).header_background,"--countdown-background":(p=e(n))==null?void 0:p.header_color,"--background-color":(_=e(C))==null?void 0:_.color_background}:""});return(u,p)=>{var _;return o(),l("div",{class:j(["ae-flashsale card border-0",e(d)||e(V)?"animate-pulse":""]),style:F(e(U))},[(_=e(C))!=null&&_.asset_url?(o(),l("img",{key:0,class:"ae-flashsale__banner",src:e(C).asset_url,width:"1200"},null,8,se)):T("",!0),s("div",ee,[e(d)?(o(),z(_s,{key:0})):e(n)?(o(),l(m,{key:1},[s("div",te,[s("div",ae,[s("div",oe,[s("h2",le,[s("img",{src:e(n).header_icon_url||"https://bizweb.dktcdn.net/100/329/122/themes/897348/assets/flashsale_icon.png?1700648010137",alt:e(n).name},null,8,ne),s("a",{class:"link",target:"_blank",href:e(n).header_link||"/san-pham-khuyen-mai",title:e(n).name},f(e(n).name),9,ie),ce])]),e(C)?(o(),z(Zs,{key:e(i),tab:e(C)},null,8,["tab"])):T("",!0)]),s("div",{class:"swiper-container swiper-container-tabs",id:e(h)},[e(n).flash_sale_tabs.length>1?(o(),l("ul",de,[(o(!0),l(m,null,P(e(n).flash_sale_tabs,c=>(o(),l("li",{key:c.id,class:j([e(i)===c.id?"active":"","swiper-slide"]),onClick:R,"data-tab":c.id},[W(f(c.name)+" ",1),ue,s("span",{class:j(["ae-flashsale__tabs__status",`status--${c.status}`])},f(c.status===2?"Đang diễn ra":c.status===1?"Sắp diễn ra":"Đã kết thúc"),3)],10,_e))),128))])):T("",!0)],8,re)]),e(V)?(o(),l("div",he,[(o(),l(m,null,P(5,c=>N(I,{key:c})),64))])):(o(),l("div",{key:1,class:"md-product-slider-flashsale swiper-container",id:e(r)},[s("div",fe,[(o(!0),l(m,null,P(e(a),(c,g)=>(o(),l("div",{class:"swiper-slide",key:g},[(o(!0),l(m,null,P(c,w=>(o(),z(Es,{key:w.id,product:w},null,8,["product"]))),128))]))),128))]),ve,me],8,pe))],64)):(o(),l("div",ge))])],6)}}});export{we as default};