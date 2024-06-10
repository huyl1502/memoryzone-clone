import{r as d,w as V,u as w,o as M,a as N,d as k,c as S,b as c,e as n,f as e,t as y,g as X,_ as G,h as C,v as B,p as E,i as R,j as K,F as I,k as L,l as P,m as T,n as A,q as Y,s as Z,x as Q,y as D}from"./ae-widget-core-v1-14.js";const H=()=>{const r=new Proxy(new URLSearchParams(window.location.search),{get:(a,i)=>a.get(i)}),s=parseInt(r.page||"1",10),o=r.collection?parseInt(r.collection):null;return{query:r.query||"",page:Number.isNaN(s)?1:s,vendor:r.vendor,product_type:r.product_type,type:r.type==="article"?"article":"product",collection:o&&Number.isNaN(o)?o:void 0,direct:r.direct}};function ee(){const r=d(H());V(()=>w(r),o=>{const{query:a,page:i,vendor:t,product_type:_,type:l,collection:h,direct:v}=o,u=new URLSearchParams;o&&u.set("query",a),i>1&&u.set("page",i.toString()),t&&u.set("vendor",t),_&&u.set("product_type",_),l&&u.set("type",l),h&&u.set("collection",h+""),v&&u.set("direct",v),window.history.propertyIsEnumerable({},"",`?${u.toString()}`)},{deep:!0});const s=()=>{r.value=H()};return M(()=>{window.addEventListener("popstate",s)}),N(()=>{window.removeEventListener("popstate",s)}),r}const te={class:"ae-search__object ae-search__object--product"},re={class:"image-container"},se=["href"],oe=["src"],ae={class:"flex-1"},le={class:"object--name"},ce=["href","innerHTML"],ne={class:"text-muted"},ie={class:"justify"},ue={class:"art-summary"},de={class:"justify"},pe={class:"art-summary"},_e=["href"],he=k({__name:"ArticleGridItem",props:{article:{}},setup(r){const s=r,o=S(()=>s.article.image_path.replace("https://bizweb.dktcdn.net/","https://bizweb.dktcdn.net/thumb/large/"));return(a,i)=>(c(),n("li",te,[e("div",re,[e("a",{href:"/"+a.article.slug},[e("img",{width:"240",src:o.value},null,8,oe)],8,se)]),e("div",ae,[e("h3",le,[e("a",{href:"/"+a.article.slug,innerHTML:a.article.name,class:"link"},null,8,ce)]),e("div",ne,y(w(X)("2022-01-01")),1),e("p",ie,[e("span",ue,y(a.article.short_content),1)]),e("p",de,[e("span",pe,y(a.article.summary),1),e("a",{href:"/"+a.article.slug+"?utm_source=Website&utm_medium=SearchPage",class:"link continue"}," Đọc tiếp ",8,_e)])])]))}});const ye=G(he,[["__scopeId","data-v-80e1ce26"]]),U=r=>(E("data-v-df0f0ec9"),r=r(),R(),r),ve={class:"ae-tab"},me={class:"radio"},ge=U(()=>e("label",{for:"SelectProduct"},"Sản phẩm",-1)),fe={class:"radio"},be=U(()=>e("label",{for:"SelectArticle"},"Bài viết",-1)),we=k({__name:"ToggleProduct",props:{query:{}},setup(r){const s=r,o=S({get:()=>["product","article"].includes(s.query.type)?s.query.type:"product",set:a=>{s.query.type=a,s.query.page=1}});return(a,i)=>(c(),n("div",ve,[e("div",me,[C(e("input",{"onUpdate:modelValue":i[0]||(i[0]=t=>o.value=t),type:"radio",name:"SelectProduct",id:"SelectProduct",value:"product"},null,512),[[B,o.value]]),ge]),e("div",fe,[C(e("input",{"onUpdate:modelValue":i[1]||(i[1]=t=>o.value=t),type:"radio",name:"SelectArticle",id:"SelectArticle",value:"article"},null,512),[[B,o.value]]),be])]))}});const F=G(we,[["__scopeId","data-v-df0f0ec9"]]),O=k({__name:"LoadMoreObserver",emits:["intersected"],setup(r,{emit:s}){const o=d(null),a=new IntersectionObserver(i=>{i[0].isIntersecting&&s("intersected")},{root:null,rootMargin:"100px",threshold:1});return M(()=>{o.value&&a.observe(o.value)}),N(()=>{a.disconnect()}),(i,t)=>(c(),n("div",{ref_key:"elRef",ref:o},null,512))}}),W=r=>(E("data-v-1ad69d62"),r=r(),R(),r),ke={class:"title-head"},qe={key:0,class:"animate-pulse"},$e=W(()=>e("div",null,null,-1)),Pe=W(()=>e("ul",null,[e("li",null,[e("div"),e("div"),e("div")])],-1)),Se=[$e,Pe],Ie=k({__name:"ArticleGrid",props:{query:{}},setup(r){const s=r,o=d(!0),a=d(0),i=d(1),t=d([]),_=S(()=>t.value.flat());let l=null;const h=(u="")=>{l&&l.abort(),l=new AbortController,o.value=!0,A.get("store/query?type=article&query="+u+"&page="+(w(t).length+1)).then(g=>{t.value.push(g.data),i.value=g.last_page||1,a.value=g.total||0}).finally(()=>{l=null,o.value=!1})};M(()=>{h(s.query.query)});const v=()=>{h(s.query.query)};return(u,g)=>(c(),n("div",null,[e("h1",ke," Tìm thấy "+y(a.value)+' bài viết phù hợp với từ khoá "'+y(u.query.query)+'" ',1),K(F,{query:u.query},null,8,["query"]),e("ul",null,[(c(!0),n(I,null,L(_.value,q=>(c(),n("li",{key:q.slug},[K(ye,{article:q},null,8,["article"])]))),128))]),o.value?(c(),n("ul",qe,[(c(),n(I,null,L(6,q=>e("li",{key:q,class:"article-skeleton"},Se)),64))])):P("",!0),_.value.length<a.value&&!o.value?(c(),T(O,{key:1,onIntersected:v})):P("",!0)]))}});const Le=G(Ie,[["__scopeId","data-v-1ad69d62"]]),Te={class:"ae-search-product-item"},Ke={class:"media"},Ae=["src"],Me={class:"object--name"},Ne=["href","innerHTML","title"],Ge={key:0,class:"ae-price--primary"},je={key:1,class:"ae-price--primary"},ze=k({__name:"ProductGridItem",props:{product:{},badges:{}},setup(r){const s=r,o=S(()=>{var t;return(t=s.product.image_path)==null?void 0:t.replace("https://bizweb.dktcdn.net/","https://bizweb.dktcdn.net/thumb/large/")}),a=S(()=>s.product.badges?s.product.badges.split(",").map(t=>t.trim()):[]),i=t=>{const _=t.target;A.get("store/search/product-refresh?slug="+s.product.slug).then(({src:l})=>{_.src=l.replace("https://bizweb.dktcdn.net/","https://bizweb.dktcdn.net/thumb/large/")})};return(t,_)=>(c(),n("div",Te,[e("div",Ke,[e("img",{width:"480",height:"480",src:o.value,onError:i},null,40,Ae),(c(!0),n(I,null,L(a.value,l=>{var h,v;return c(),n(I,{key:l},[t.badges[l]?(c(),n("div",{key:0,class:Y(["ae-badge",(h=t.badges[l])==null?void 0:h.style,(v=t.badges[l])==null?void 0:v.position])},y(t.badges[l].text),3)):P("",!0)],64)}),128))]),e("div",null,[e("h3",Me,[e("a",{href:"/"+t.product.slug+"?utm_source=Website&utm_medium=SearchPage",innerHTML:t.product.name,title:t.product.title},null,8,Ne)]),t.product.in_stock?t.product.price===0?(c(),n("div",je," Liên hệ ")):(c(),T(Z,{key:2,price:t.product.price,"compare-at-price":t.product.compare_at_price,class:"ae-price--primary"},null,8,["price","compare-at-price"])):(c(),n("div",Ge,"Hết hàng"))])]))}}),Ce={class:"ae-smartsearch-result"},Be={class:"title-head"},De={key:0},He=["href"],Ve=["href"],Ee={class:"row"},Re={key:1,class:"row animate-pulse"},Ue=e("div",null,null,-1),Fe=e("div",null,null,-1),Oe=e("div",null,null,-1),We=[Ue,Fe,Oe],xe=k({__name:"ProductGrid",props:{query:{}},setup(r){const s=r,o=d(!0),a=d(!0),i=d(1),t=d(0),_=d({}),l=Q({isDirect:!1,redirectKeyword:"",oldKeyword:""});let h=!0;const v=d([]),u=d([]),g=S(()=>u.value.flat()),q=d([]),x=d([]);let f=null;const j=(m="",$=null)=>{f&&f.abort(),f=new AbortController,a.value=!0,h&&(o.value=!0,h=!1,A.get("store/badge").then(p=>_.value=p.badges));const b=w(u).length+1;let z="store/query?query="+m+"&page="+b;$&&(z+="&direct=1"),A.get(z,{signal:f.signal}).then(p=>{b===1&&p.redirect_keyword&&(p.current_keyword!==p.redirect_keyword?(l.redirectKeyword=p.redirect_keyword,l.oldKeyword=p.current_keyword):(l.redirectKeyword="",l.oldKeyword="")),u.value.push(p.data),v.value=p.collections||[],x.value=p.product_types||[],q.value=p.vendors||[],i.value=p.last_page||1,t.value=p.total||0}).finally(()=>{f=null,a.value=!1,o.value=!1})};N(()=>{f&&f.abort()});const J=()=>{j(s.query.query,s.query.direct)};return V(()=>s.query,(m,$)=>{m.query!==($==null?void 0:$.query)&&(u.value=[]),setTimeout(()=>j(m.query,m.direct))},{deep:!0,immediate:!0}),(m,$)=>(c(),n("div",Ce,[e("h1",Be," Tìm thấy "+y(t.value)+' sản phẩm phù hợp với từ khoá "'+y(l.redirectKeyword||m.query.query)+'" ',1),l.oldKeyword!==l.redirectKeyword?(c(),n("div",De,[e("div",null,[D(" Đang hiển thị kết quả cho từ khoá "),e("a",{href:"/search?query="+l.redirectKeyword,class:"ae-keyword"},y(l.redirectKeyword),9,He)]),e("div",null,[D(" Tìm kiếm lại đúng với từ khoá "),e("a",{class:"ae-keyword",href:"/search?direct=1&query="+l.oldKeyword},y(l.oldKeyword),9,Ve)])])):P("",!0),K(F,{query:m.query},null,8,["query"]),e("ul",Ee,[(c(!0),n(I,null,L(g.value,b=>(c(),n("li",{key:b.slug,class:"col-xl-15 col-lg-3 col-md-4 col-sm-6 col-6"},[K(ze,{product:b,badges:_.value},null,8,["product","badges"])]))),128))]),a.value?(c(),n("ul",Re,[(c(),n(I,null,L(20,b=>e("li",{key:b,class:"col-xl-15 col-lg-3 col-md-4 col-sm-6 col-6 product-skeleton"},We)),64))])):P("",!0),g.value.length<t.value&&!a.value?(c(),T(O,{key:2,onIntersected:J})):P("",!0)]))}}),Xe=k({__name:"ae-smart-search",setup(r){const s=ee();return(o,a)=>w(s).type==="article"?(c(),T(Le,{key:0,query:w(s)},null,8,["query"])):(c(),T(xe,{key:1,query:w(s)},null,8,["query"]))}});export{Xe as default};