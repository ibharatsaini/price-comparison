const deviceWidth=window.outerWidth;var details,specsi,naming2=window.pid;console.log(naming2),(async()=>{console.log(naming2);let t,a,l="Not defined";try{if(a="https://price-api.datayuge.com/api/v1/compare/detail?api_key=XiJ7nmLmKt5HKRMFRarBBDv9tbOe6aGz3cu&id="+naming2,(details=await fetch(a)).status&&(l=details.status,console.log(l)),!details.ok)throw e;details=await details.json()}catch(e){const d="/stream";e?(console.log(e),console.log(typeof e,e),t=String(e),console.log(t)):t="None",console.log(t);const n={sc:l,lk:a,er:t};console.log(n),fetch(d,{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}}),console.log("fetch")}try{if(console.log("specsi"),a="https://price-api.datayuge.com/api/v1/compare/specs?api_key=XiJ7nmLmKt5HKRMFRarBBDv9tbOe6aGz3cu&id="+naming2,console.log(a),specsi=await fetch(a),console.log(specsi.status),specsi.status&&(l=specsi.status),!specsi.ok)throw console.log("else"),e;specsi=await specsi.json(),console.log(specsi)}catch(e){console.log("error");const d="/stream";e?(console.log(e),console.log(typeof e,e),t=String(e),console.log(t)):t="None",console.log(t);const n={sc:l,lk:a,er:t};console.log(n),await fetch(d,{method:"POST",body:JSON.stringify(n),headers:{"Content-type":"application/json; charset=UTF-8"}}),console.log("specsi done")}if(details.hasOwnProperty("data")){var d=document.getElementById("mainBody"),n=document.createElement("div");n.className="container";var o=document.createElement("div");o.className="imageContainer";var s=document.createElement("div");if(s.className="divOfGallery",details.data.product_images.length>1){var i=document.createElement("div");i.className="slideImageOuter";var c=details.data.product_images.length;details.data.product_images.length>5&&(c=5);for(let e=0;e<c;e++){var r=document.createElement("div");r.className="slideInside",0==e&&(r.classList="slideInside blackOut");var p=document.createElement("img");p.setAttribute("src",details.data.product_images[e]),r.appendChild(p),i.appendChild(r)}s.appendChild(i)}var m=document.createElement("div");m.className="divofimage";var u=document.createElement("div");u.className="imageSlider";var h=document.createElement("img");h.setAttribute("src",details.data.product_images[0]),u.appendChild(h),m.appendChild(u),o.appendChild(s),o.appendChild(m),n.appendChild(o);var g=document.createElement("div");g.className="titleDivNew";var C=document.createElement("h1");if(C.className="priceTitle",C.innerHTML=details.data.product_name,g.appendChild(C),console.log(details.data.product_ratings),details.data.hasOwnProperty("product_ratings")&&Number(details.data.product_ratings)>0){var v=document.createElement("div");v.className="review";var y=document.createElement("div"),f=document.createElement("span");f.textContent=details.data.product_ratings+"/5";var E=document.createElement("img");E.setAttribute("src","/images/star.png"),y.appendChild(f),y.appendChild(E),v.appendChild(y),g.appendChild(v)}var _=[],b=[];q=0;for(let e=0;e<details.data.stores.length;e++)b=Object.keys(details.data.stores[e]),(details.data.stores[e][b[0]].hasOwnProperty("product_price")||details.data.stores[e][b[0]].hasOwnProperty("product_mrp"))&&(_[q]={},_[q].name=b[0],_[q].logo=details.data.stores[e][b[0]].product_store_logo,_[q].storeLink=details.data.stores[e][b[0]].product_store_url,"0"!=details.data.stores[e][b[0]].hasOwnProperty("product_price")?_[q].price=details.data.stores[e][b[0]].product_price:_[q].price=details.data.stores[e][b[0]].product_mrp,"1"==details.data.stores[e][b[0]].is_emi?_[q].emi="EMIs Available":_[q].emi="EMIs Not Available","1"==details.data.stores[e][b[0]].is_cod?_[q].cod="COD Available":_[q].cod="COD Not Available",-1!=details.data.stores[e][b[0]].product_delivery.indexOf("d")?_[q].deliveryTime=details.data.stores[e][b[0]].product_delivery+"days":_[q].deliveryTime=details.data.stores[e][b[0]].product_delivery,"0"==details.data.stores[e][b[0]].product_delivery_cost?_[q].deliveryCost="Free":_[q].deliveryCost=details.data.stores[e][b[0]].product_delivery_cost,details.data.stores[e][b[0]].product_offer.length>2?_[q].offer=details.data.stores[e][b[0]].product_offer:_[q].offer="No offers Available",_[q].returnTime=details.data.stores[e][b[0]].return_time,q++);_.sort((e,t)=>e.price-t.price),console.log(_),console.log("This is sorted");var O=document.createElement("div");if(O.className="mrpTag",details.data.product_mrp.length>0&&_.length>0){let e=_[0].price,t=details.data.product_mrp>_[_.length-1].price?details.data.product_mrp:_[_.length-1].price,a=document.createElement("span");a.innerHTML="&#x20B9;"+e;let l=document.createElement("span");l.innerHTML="&#x20B9;"+t;let d=document.createElement("span");d.textContent=Math.round((t-e)/t*100)+"% Off!",console.log(Math.round(e/t*100)),O.appendChild(a),O.appendChild(l),O.appendChild(d),g.appendChild(O),g.appendChild(O)}else if(0==details.data.product_mrp.length&&_.length>1){let e=_[0].price,t=document.createElement("span");if(t.innerHTML="&#x20B9;"+e,O.appendChild(t),_.length>1){let t=_[_.length-1].price,a=document.createElement("span");a.innerHTML="&#x20B9;"+t;let l=document.createElement("span");l.textContent=Math.round((t-e)/t*100)+"% Off!",console.log(Math.round(e/t*100)),O.appendChild(a),O.appendChild(l)}g.appendChild(O),g.appendChild(O)}else if(details.data.product_mrp.length>1){let e=details.data.product_mrp,t=document.createElement("span");t.innerHTML="&#x20B9;"+e,O.appendChild(t),g.appendChild(O),g.appendChild(O)}if(n.appendChild(g),details.data.hasOwnProperty("available_colors")){let e=document.createElement("div");e.className="colorsAvail";let t=document.createElement("h4");t.textContent="Available Colours",t.className="styleFont";let a=document.createElement("div");a.className="divOfColor";for(let e=0;e<details.data.available_colors.length;e++){let t=document.createElement("div");t.textContent=details.data.available_colors[e],a.appendChild(t)}e.appendChild(t),e.appendChild(a),g.appendChild(e)}try{if(specsi.data.hasOwnProperty("main_specs")&&specsi.data.main_specs.length>1){let e=document.createElement("div");e.className="divOfHigh";let t=document.createElement("h4");t.textContent="Highlights",t.className="styleFont";var N=document.createElement("ul");N.className="unordered";for(let e=0;e<specsi.data.main_specs.length;e++){let t=document.createElement("li");t.innerHTML=specsi.data.main_specs[e],N.appendChild(t)}e.appendChild(t),e.appendChild(N),g.appendChild(e)}}catch{console.log("err")}if(_.length>0){let e=document.createElement("div");e.className="bestOfferDiv",console.log(_);let t=document.createElement("div");t.className="bestStore";let a=document.createElement("div"),l=document.createElement("img");l.setAttribute("src",_[0].logo),a.appendChild(l);let d=document.createElement("div");d.innerHTML="&#x20B9;"+_[0].price;let o=document.createElement("div");o.textContent=_[0].cod;let s=document.createElement("div");"Free"!=_[0].deliveryCost?s.textContent="Delivery Charges Mentioned Below":s.textContent=_[0].deliveryCost+" Delivery";let i=document.createElement("div");i.textContent="Delivery in "+_[0].deliveryTime+" Days";let c=document.createElement("div");c.textContent=_[0].emi;let r=document.createElement("div"),p=document.createElement("a");p.setAttribute("href",_[0].storeLink),p.setAttribute("target","_blank"),p.textContent="Store",r.append(p),t.appendChild(a),t.appendChild(d),t.appendChild(o),t.appendChild(s),t.appendChild(i),t.appendChild(c),t.appendChild(r),e.appendChild(t),n.appendChild(e)}document.getElementById("load").style.display="none",d.appendChild(n);var w=document.createElement("div");w.className="storeComp";let e=document.createElement("div");e.className="pngDiv";var x=["e-Store","Price","COD","Delivery Charges","Expected Delivery","EMI","Return Time"];for(let t=0;t<x.length;t++){let a=document.createElement("div"),l=document.createElement("h4");l.style.fontWeight="400",l.style.fontSize="13px";let d=document.createElement("img");if(d.setAttribute("src","/images/"+x[t]+".png"),l.textContent=x[t],a.appendChild(d),a.appendChild(l),e.appendChild(a),t==x.length-1){let t=document.createElement("div"),a=document.createElement("a");a.textContent="Buy button",a.style.width="80%",t.style.visibility="hidden",t.appendChild(a),e.appendChild(t)}}w.appendChild(e);for(let e=0;e<_.length;e++){let t=document.createElement("div");t.className="divStore";let a=document.createElement("div"),l=document.createElement("img");l.setAttribute("src",_[e].logo),a.appendChild(l);let d=document.createElement("div");d.innerHTML="&#x20B9;"+_[e].price;let n=document.createElement("div"),o=document.createElement("h4");o.textContent=_[e].cod,n.appendChild(o);let s=document.createElement("div");if("Free"!=_[e].deliveryCost){let t=document.createElement("h4");t.innerHTML="&#x20B9;"+_[e].deliveryCost+" for Delivery",s.appendChild(t)}else{let t=document.createElement("h4");t.innerHTML=_[e].deliveryCost+" Delivery",s.appendChild(t)}let i=document.createElement("div"),c=document.createElement("h4");c.innerHTML="Delivery in  <span>"+_[e].deliveryTime+"</span> Days",i.appendChild(c);let r=document.createElement("div"),p=document.createElement("h4");p.textContent=_[e].emi,r.appendChild(p);let m=document.createElement("div"),u=document.createElement("h4");_[e].returnTime.length>0?(u.innerHTML="<span> "+_[e].returnTime+"</span>",m.appendChild(u)):(u.textContent="No Information Available",m.appendChild(u));let h=document.createElement("div"),g=document.createElement("a");g.setAttribute("href",_[e].storeLink),g.setAttribute("target","_blank"),g.textContent="Store",h.appendChild(g),t.appendChild(a),t.appendChild(d),t.appendChild(n),t.appendChild(s),t.appendChild(i),t.appendChild(r),t.appendChild(m),t.appendChild(h),w.appendChild(t)}let t=document.createElement("div");if(t.className="divHeading",t.textContent="Comparison",d.appendChild(t),d.appendChild(w),document.getElementsByClassName("slideInside").length>1&&$(".slideInside").hover(function(){$(".slideInside").removeClass("blackOut"),$(this).addClass("blackOut"),document.getElementsByClassName("imageSlider")[0].firstChild.setAttribute("src",$(this).children().attr("src"))}),_[0]&&_[0].hasOwnProperty("offer")){let e=document.createElement("div");e.className="divOfOffer";let t=document.createElement("div");t.className="divHeading",t.textContent="Offers",e.appendChild(t);let a=document.createElement("table");a.className="tableOfOffer";for(let e=0;e<_.length;e++){let t=document.createElement("tr");t.className="trOfHead";let l=document.createElement("td");l.className="tdOfImage";let d=document.createElement("img");d.setAttribute("src",_[e].logo),l.appendChild(d);let n=document.createElement("td");n.className="tdOfOffer",n.innerHTML=_[e].offer,t.appendChild(l),t.appendChild(n),a.appendChild(t)}e.appendChild(a),d.appendChild(e)}}else document.getElementById("load").style.display="none",document.getElementById("mainBody").innerHTML='<div class="err" style="display:flex;"><a id="bt" href="/">Go To Home Page</a></div>';if(details.hasOwnProperty("data")){console.log(details);let e=document.getElementsByTagName("head")[0],t=document.createElement("meta");t.name="description",t.content="Compare "+details.data.product_name+" By Prices,COD Available ,EMIs Available, Offers across all e-stores(Flipkart, Amazon, TataCliq, PaytmMall Etc). Compare Best Deal On "+details.data.product_name+" Across all e-Stores",e.appendChild(t);let a=document.createElement("meta");a.name="og_title",a.setAttribute("property","og:title"),a.content=details.data.product_name+" Prices in India | Compare Prices of "+details.data.product_name+" in India",e.appendChild(a);let l=document.createElement("meta");l.name="og_url",l.setAttribute("property","og:url");let d={headsets:"headphones","computer-monitor":"monitor","computer-keyboard":"keyboard",refrigerators:"refrigerator",tv:"led-tv","wireless-speakers":"speakers","home-theaters":"home-theater"};console.log(-1==d.hasOwnProperty(details.data.product_sub_category)),d.hasOwnProperty(details.data.product_sub_category)?(console.log("dt"),console.log(details.data.product_sub_category),console.log(details.data.product_brand),console.log(details.data.product_brand.toLowerCase()),console.log(details.data.product_sub_category),console.log(details.data.product_name.replace("/","").replace(/ /g,"-").toLowerCase()),console.log(details.data.product_id),l.content="http://www.pricescompare.in/"+d[details.data.product_sub_category]+"/"+details.data.product_brand.toLowerCase()+"-"+d[details.data.product_sub_category]+"/"+details.data.product_name.replace("/","").replace(/ /g,"-").toLowerCase()+"/"+details.data.product_id,console.log()):(console.log("td"),l.content="http://www.pricescompare.in/"+details.data.product_sub_category+"/"+details.data.product_brand.toLowerCase()+"-"+details.data.product_sub_category+"/"+details.data.product_name.replace("/","").replace(/ /g,"-").toLowerCase()+"/"+details.data.product_id),e.appendChild(l);let n=document.createElement("meta");n.name="og_site_name",n.setAttribute("property","og:site_name"),n.content="PricesCompare.in",e.appendChild(n);let o=document.createElement("meta");o.name="og_description",o.setAttribute("property","og:description"),o.content="Compare "+details.data.product_name+" By Prices, Cash On Delivery(COD) ,EMIs, Offer across all e-stores. Compare Best Deal On "+details.data.product_name+" Across all e-Stores",e.appendChild(o),console.log("title"),document.title="Compare "+details.data.product_name+" Prices, Specifications, Offers Across All e-Stores | PricesCompare"}if(specsi.data.hasOwnProperty("main_specs")){console.log(specsi);var B=Object.keys(specsi.data.sub_specs);console.log(B);let e=document.createElement("div");e.className="divHeading",e.textContent="Specifications",e.style.textAlign="center";let t=document.createElement("div");if(t.className="divOfSpecs",specsi.data.sub_specs.hasOwnProperty("General")){console.log(specsi.data.sub_specs.General);let e=document.createElement("h1");e.textContent="General",t.appendChild(e);let a=document.createElement("div");a.className="divOfRowing";for(let e=0;e<specsi.data.sub_specs.General.length;e++)A(a,specsi.data.sub_specs.General[e].spec_key,specsi.data.sub_specs.General[e].spec_value),t.appendChild(a)}for(let e=0;e<B.length;e++){if("General"==B[e])continue;let a=document.createElement("h1");a.textContent=B[e],t.appendChild(a);let l=document.createElement("div");l.className="divOfRowing";for(let a=0;a<specsi.data.sub_specs[B[e]].length;a++)A(l,specsi.data.sub_specs[B[e]][a].spec_key,specsi.data.sub_specs[B[e]][a].spec_value),t.appendChild(l)}function A(e,t,a){let l=document.createElement("div");if(l.className="divOfKeyValue",a.length>0){let d=document.createElement("div");d.className="divOfKey",d.textContent=t;let n=document.createElement("div");n.className="divOfValueKey",a.length>0&&(n.textContent=a),l.appendChild(d),l.appendChild(n),e.appendChild(l)}}d.appendChild(e),d.appendChild(t)}var L;try{(L=await fetch("https://price-api.datayuge.com/api/v1/compare/search?api_key=XiJ7nmLmKt5HKRMFRarBBDv9tbOe6aGz3cu&product="+details.data.product_brand+" "+details.data.product_sub_category)).ok&&(L=await L.json())}catch(e){console.log(e)}if(void 0!==L){console.log(L);var T=document.createElement("div");T.className="cont";let e=document.createElement("div");e.textContent="Similar Products",e.className="brandLogo",T.appendChild(e);let t=document.createElement("div");t.className="secondChild",console.log(L.data.length);let a=document.createElement("div");a.className="hereProducts";for(let e=0;e<L.data.length;e++){let t=document.createElement("div");t.className="productBox",console.log(L.data[e].product_image);let l=document.createElement("a");l.className="imageBox",l.setAttribute("href","/compare/"+L.data[e].product_id);let d=document.createElement("div");d.className="imageCont";let n=document.createElement("img");n.setAttribute("src",L.data[e].product_image),d.appendChild(n);let o=document.createElement("h3");o.className="h4Kafont",o.innerHTML="From &#x20B9;"+L.data[e].product_lowest_price;let s=document.createElement("h4");s.textContent=L.data[e].product_title,l.appendChild(d),l.appendChild(o),l.appendChild(s),t.appendChild(l),a.appendChild(t)}t.appendChild(a),T.appendChild(t),d.appendChild(T),$("button").click(function(){var e=this.value;console.log(e);var t=e.includes("A");if(console.log(t),1==t){var a=e.replace("A","");console.log(a),document.getElementById("butbWala").style.display="flex",$(".butB").css({display:"block"});var l=document.querySelector(".productsHere");console.log("scrolling left positive");var d=l.scrollWidth,n=l.clientWidth,o=l.scrollLeft;console.log(d,n,o),l.scrollLeft+=n,n+o>=d-n&&(document.getElementById("butaWala").style.display="none",$(".butA").css({display:"none"}))}else{a=e.replace("B","");console.log(a);var s=document.querySelector(".productsHere");n=s.clientWidth;s.scrollLeft-=n,console.log("scrolling left negative"),s.scrollLeft<=n&&(document.getElementById("butbWala").style.display="none",$(".butB").css({display:"none"})),document.getElementById("butaWala").style.display="flex",$(".butA").css({display:"block"})}})}else console.log("baghar")})();