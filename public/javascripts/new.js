$("#closePopUp span").on("click",()=>{document.getElementById("headContainer").style.zIndex="49",document.getElementById("animating").style.display="none",document.getElementById("alertBox").style.display="none",document.getElementById("disableBody").style.display="none"});var filterBar=document.getElementById("filterBar");deviceWidth<1025?filterBar.style.height=window.screen.height+"px":filterBar.style.minHeight=window.screen.height+"px",document.getElementsByClassName("results")[0].style.minHeight=window.screen.height-"150"+"px";var newData,greatest,smallest,sn,gn,brandValue,bnao,promises,item,naming=window.na,sortedData=[],newJson=[],specs=[],newBrands=[],whichCat=[];async function requesting(){var t=5;let n,a,l="Not Defined";try{var o=0,s=$("#searchBar");if(console.log(s),s.val(naming),null==brandValue||""==brandValue||null==brandValue)try{if(console.log(naming),a="https://price-api.datayuge.com/api/v1/compare/search?api_key=XiJ7nmLmKt5HKRMFRarBBDv9tbOe6aGz3cu&product="+naming,newData2=await fetch(a),newData2.status&&(l=newData2.status),!newData2.ok)throw er(),e;newData=await newData2.json()}catch(e){er();const t="/stream";e?(console.log(e),console.log(typeof e,e),n=String(e),console.log(n)):n="None",console.log(n);const o={sc:l,lk:a,er:n};console.log(o),fetch(t,{method:"POST",body:JSON.stringify(o),headers:{"Content-type":"application/json; charset=UTF-8"}})}else try{if(a="https://price-api.datayuge.com/api/v1/compare/search?api_key=XiJ7nmLmKt5HKRMFRarBBDv9tbOe6aGz3cu&product="+naming+"&filter=brand%3A"+brandValue,newData2=await fetch(a),newData2.status&&(l=newData2.status),!newData2.ok)throw er(),e;newData=await newData2.json()}catch(e){er();const t="/stream";e?(console.log(e),console.log(typeof e,e),n=String(e),console.log(n)):n="None",console.log(n);const o={sc:l,lk:a,er:n};console.log(o),fetch(t,{method:"POST",body:JSON.stringify(o),headers:{"Content-type":"application/json; charset=UTF-8"}})}newData.data.length<t&&(t=newData.data.length);var i=!1;for(let s=0;s<t;s++){var d,r;console.log(s);try{if(a="https://price-api.datayuge.com/api/v1/compare/detail?api_key=XiJ7nmLmKt5HKRMFRarBBDv9tbOe6aGz3cu&id="+newData.data[s].product_id,!(d=await fetch(a)).ok)throw e}catch(e){er(),d.status&&(l=d.status);const t="/stream";e?(console.log(e),console.log(typeof e,e),n=String(e),console.log(n)):n="None",console.log(n);const o={sc:l,lk:a,er:n};console.log(o),fetch(t,{method:"POST",body:JSON.stringify(o),headers:{"Content-type":"application/json; charset=UTF-8"}})}d.ok?(newJson[s]=await d.json(),newJson[s].data.index=s):i=!0;try{if(a="https://price-api.datayuge.com/api/v1/compare/specs?api_key=XiJ7nmLmKt5HKRMFRarBBDv9tbOe6aGz3cu&id="+newData.data[s].product_id,!(r=await fetch(a)).ok)throw e}catch(e){er(),r.status&&(l=r.status);const t="/stream";e?(console.log(e),console.log(typeof e,e),n=String(e),console.log(n)):n="None",console.log(n);const o={sc:l,lk:a,er:n};console.log(o),fetch(t,{method:"POST",body:JSON.stringify(o),headers:{"Content-type":"application/json; charset=UTF-8"}})}if(r.ok?specs[s]=await r.json():i=!0,newData.hasOwnProperty("data")&&(sortedData[s]=newData.data[s],sortedData[s].index=s,newJson[s].data.product_brand&&-1==newBrands.indexOf(newJson[s].data.product_brand)&&(newBrands[o]=newJson[s].data.product_brand,whichCat[o]=newJson[s].data.product_sub_category,o++)),i)break;"undefined"!==sortedData[s]&"undefined"!==newJson[s]&"undefined"!==specs[s]&&(console.log("undefined"),creatingBody(sortedData[s],newJson[s],specs[s]))}smallest=0,greatest=0,console.log(smallest),console.log(greatest);for(let e=0;e<sortedData.length;e++)console.log("ye hai sorted data"),sortedData[smallest].product_lowest_price>=sortedData[e].product_lowest_price?smallest=e:sortedData[greatest].product_lowest_price<sortedData[e].product_lowest_price&&(greatest=e);sn=parseFloat(sortedData[smallest].product_lowest_price),gn=parseFloat(sortedData[greatest].product_lowest_price),document.getElementById("min").value=sn,document.getElementById("max").value=gn,console.log(sn,gn)}catch(n){console.log(n)}if(deviceWidth>1025)console.log("slide into"),$("#slider").slider({range:!0,min:parseFloat(sortedData[smallest].product_lowest_price),max:parseFloat(sortedData[greatest].product_lowest_price),values:[parseFloat(sortedData[smallest].product_lowest_price),parseFloat(sortedData[greatest].product_lowest_price)],slide:(e,t)=>{whenSliding(t.values[0],t.values[1])},change:(e,t)=>{console.log("change in slide"),t.values[0]==sn&&t.values[1]==gn?$('button[value="pr"]').css({display:"none"}):$('button[value="pr"]').css({display:"block"}),rech("change")}});else{console.log("slider");try{noUiSlider.create(slider,{start:[sn,gn],connect:!0,range:{min:sn,max:gn}})}catch{slider.noUiSlider.on("set",[sn.gn])}console.log(noUiSlider),slider.noUiSlider.on("update",function(e,t){0===t?min.value=parseInt(e[t]):max.value=parseInt(e[t]),min.value==sn&&max.value==gn?$('button[value="pr"]').css({display:"none"}):$('button[value="pr"]').css({display:"block"}),rech("slider noi")})}null==brandValue&&(console.log("brandvalue undefined"),console.log(brandValue),newBranding());for(let e=0;e<newJson.length;e++)for(let t=0;t<newJson[e].data.stores.length;t++){let n=Object.keys(newJson[e].data.stores[t]);if(newJson[e].data.stores[t][n[0]].hasOwnProperty("is_cod")){if("1"==newJson[e].data.stores[t][n[0]].is_cod){bnao=1;break}bnao=0}}console.log("last line")}function whenSliding(e,t){document.getElementById("min").value=e,document.getElementById("max").value=t}function creatingBody(e,t,n){console.log("creatingbOS");document.getElementsByClassName("mainBody")[0],document.getElementsByClassName("sortingBar")[0];var a=document.getElementsByClassName("results")[0];let l=document.createElement("a");l.className="resultsCont",l.href="/compare/"+e.product_id;let o=document.createElement("div");o.className="imagesOuter";let s=document.createElement("div");s.className="imageChecking";let i=document.createElement("img");i.setAttribute("src",e.product_image),i.className="imageClass";let d=document.createElement("div");d.className="titleDiv";let r=document.createElement("h3");if(r.className="title",r.textContent=e.product_title,d.appendChild(r),t.data.hasOwnProperty("product_ratings")&&parseInt(t.data.product_ratings)>0){var c=document.createElement("div");c.className="review";var p=document.createElement("div"),m=document.createElement("span");m.textContent=t.data.product_ratings+"/5";var u=document.createElement("img");u.setAttribute("src","/images/star.png"),p.appendChild(m),p.appendChild(u),c.appendChild(p),d.appendChild(c)}let g=document.createElement("div");g.className="specsKey";let h=document.createElement("ul");var y;h.className="specList";try{for(let e=0;e<n.data.main_specs.length;e++)(y=document.createElement("li")).className="listItem",y.innerHTML=n.data.main_specs[e],h.appendChild(y);g.appendChild(h)}catch{console.log("specification nahi hai iski")}let v=document.createElement("div");v.className="pricesDiv";var f=0,C=[];let w=function(e){for(let t=0;t<e.data.stores.length;t++){let n=Object.keys(e.data.stores[t]);e.data.stores[t][n[0]].hasOwnProperty("product_store_url")&&"0"!=(e.data.stores[t][n[0]].product_price||e.data.stores[t][n[0]].product_mrp)&&(C[f]={},C[f].name=n[0],"0"!=e.data.stores[t][n[0]].product_price?C[f].price=parseInt(e.data.stores[t][n[0]].product_price):C[f].price=e.data.stores[t][n[0]].product_mrp,C[f].url={},C[f].url=e.data.stores[t][n[0]].product_store_url,C[f].logo=e.data.stores[t][n[0]].product_store_logo,f++)}return C.sort((e,t)=>parseFloat(e.price)-parseFloat(t.price)),C}(t);var B=document.createElement("div");if(B.className="mrpTag",t.data.product_mrp.length>0&&w.length>0){let e=w[0].price,n=document.createElement("span");n.innerHTML="&#x20B9;"+e;let a=parseInt(t.data.product_mrp);if(B.appendChild(n),a!==w[0].price||w[w.length-1].price>a){console.log("iske bhi andar");let n=a>w[w.length-1].price?t.data.product_mrp:w[w.length-1].price,l=document.createElement("span");l.innerHTML="&#x20B9;"+n;let o=document.createElement("span");o.textContent=Math.round((n-e)/n*100)+"% Off!",B.appendChild(l),B.appendChild(o)}d.appendChild(B),d.appendChild(B)}else if(0==t.data.product_mrp.length&&w.length>1){console.log("second andar");let e=w[0].price,t=document.createElement("span");if(t.innerHTML="&#x20B9;"+e,B.appendChild(t),w.length>1){let t=w[w.length-1].price,n=document.createElement("span");n.innerHTML="&#x20B9;"+t;let a=document.createElement("span");a.textContent=Math.round((t-e)/t*100)+"% Off!",console.log(Math.round(e/t*100)),B.appendChild(n),B.appendChild(a)}d.appendChild(B),d.appendChild(B)}else if(t.data.product_mrp.length>1){console.log("aa gya");let e=t.data.product_mrp,n=document.createElement("span");n.innerHTML="&#x20B9;"+e,B.appendChild(n),d.appendChild(B),d.appendChild(B)}d.appendChild(g);var b=document.createElement("table");b.className="tableOfLogo";for(let e=0;e<w.length;e++){let t=document.createElement("a"),n=document.createElement("h4"),a=document.createElement("tr"),l=document.createElement("td"),o=document.createElement("img");o.setAttribute("src",w[e].logo),l.appendChild(o);let s=document.createElement("td");n.innerHTML="&#x20B9;"+w[e].price,0==e?deviceWidth>1025?n.style.fontSize="1.7vw":deviceWidth>550&&deviceWidth<1025?n.style.fontSize="15px":n.style.fontSize="11px":deviceWidth>1025?n.style.fontSize="1.4vw":deviceWidth>550&&deviceWidth<1025?n.style.fontSize="13px":n.style.fontSize="9px",n.style.fontWeight="400",t.setAttribute("href",w[e].url),t.appendChild(n),s.appendChild(t),a.appendChild(l),a.appendChild(s),b.appendChild(a)}let E=document.createElement("div");E.className="compareDivision";var _=document.createElement("label");_.className="labelOfCompare";let x=document.createElement("span");x.className="spanOfBox";var N=document.createElement("input");N.setAttribute("onclick","comp(this)");let O=document.createElement("span");O.style.display="inline-block",O.textContent="Compare Specs",O.style.marginLeft="30px",O.style.color="#551A8B",N.id=e.product_id,N.type="checkbox",N.name=e.product_sub_category,N.value=e.product_id,_.setAttribute("for",e.product_id);var k=document.createElement("span");k.className="spanforCheckBox",_.appendChild(N),_.appendChild(x),_.appendChild(k),_.appendChild(O),E.appendChild(_),v.appendChild(b),v.appendChild(E),s.appendChild(i),o.appendChild(s),l.appendChild(o),l.appendChild(d),l.appendChild(v),a.appendChild(l)}function newBranding(){let e={headphones:["Sony","boAt","Boult","JBL","Panasonic","realme","Ubon"],mobile:["Samsung","Xiaomi","Asus","Apple","OnePlus","Vivo","oppo","Honor","Nokia","Huawei"]};if(newBrands.length>0){console.log(newBrands);let s=document.getElementsByClassName("divOfBrands")[0];function t(e){var t=document.createElement("label");let n=document.createElement("span");n.className="spanOfBrandBox";var a=document.createElement("input");let l=document.createElement("p");l.style.display="inline-block",l.style.marginLeft="30px",l.innerHTML=e,a.id=e,a.type="checkbox",a.name="brand",a.value=e,t.setAttribute("for",e),t.className="labelOfBrandName";var o=document.createElement("span");o.className="spanforBrandCheckBox",t.appendChild(a),t.appendChild(n),t.appendChild(o),t.appendChild(l),s.appendChild(t)}for(let e=0;e<newBrands.length;e++)console.log(newBrands[e]),t(newBrands[e]);var n=1,a=0;1==whichCat.length&&(whichCat[1]=whichCat[0]);for(var l=0;l<whichCat.length;l++){for(var o=l;o<whichCat.length;o++)whichCat[l]==whichCat[o]&&a++,n<a&&(n=a,item=whichCat[l]);a=0}console.log(item+"is "+n+" times");try{for(let n=0;n<e[item].length;n++)-1==newBrands.indexOf(e[item][n])&&t(e[item][n])}catch{console.log("trying")}console.log("ew")}$(".divOfBrands").find(":checkbox").click(function(e){disabling(this),$this=$(this);let t=$(this).attr("name");$('input:checkbox[name="'+t+'"]').attr("checked",!1),$this.attr("checked",!0),brandValue=$this.val(),document.getElementsByClassName("results")[0].innerHTML="","mobile"==item?naming="mobile":"headphones"==item&&(naming="headphone"),requesting()})}function er(){document.getElementsByClassName("resultsCont").length>0||(document.getElementsByClassName("results")[0].innerHTML='<div class="err" style="display:flex;"><div id="bt">No Products Found</div></div>')}function payonDelivery(e,t,n,a,l){console.log("payondelivery");let o=parseFloat(a),s=parseFloat(l),i=document.getElementById("COD");if(document.getElementsByClassName("results")[0].innerHTML="",null!=i)if(i.checked)for(let a=0;a<e.length;a++){var d;for(let e=0;e<t[a].data.stores.length;e++){let n=Object.keys(t[a].data.stores[e]);if(t[a].data.stores[e][n[0]].hasOwnProperty("is_cod")){if("1"!=t[a].data.stores[e][n[0]].is_cod){d=0;break}d=1}}1==d&&e[a].product_lowest_price>=o&&e[a].product_lowest_price<=s&&creatingBody(e[a],t[e[a].index],n[e[a].index])}else for(let a=0;a<t.length;a++)parseFloat(e[a].product_lowest_price)>=o&&parseFloat(e[a].product_lowest_price)<=s&&creatingBody(e[a],t[e[a].index],n[e[a].index]);else for(let a=0;a<t.length;a++)e[a].product_lowest_price>=o&&e[a].product_lowest_price<=s&&creatingBody(e[a],t[e[a].index],n[e[a].index])}requesting(),$("#min").on("change",()=>{console.log("min max");let e=parseFloat($("#min").val()),t=parseFloat($("#max").val());e>gn&&(e=gn),e>t&&(e=t),e<sn&&(e=sn),$("#min").val(e),deviceWidth>1025?$("#slider").slider("values",0,e):(slider.noUiSlider.set([e]),console.log("inside min"))}),$("#max").on("change",()=>{console.log("max min");let e=parseFloat($("#max").val()),t=parseFloat($("#min").val());e>gn&&(e=gn),e<t&&(e=t),e<sn&&(e=sn),$("#max").val(e),deviceWidth>1025?$("#slider").slider("values",1,e):slider.noUiSlider.set([,e])});var prodCategory,categ,idList=[],divOfPopUp=document.getElementsByClassName("divOfPopUp")[0],spanOfItem=document.createElement("div");function comp(e){console.log("comp");let t=2;if(deviceWidth>550&&(t=3),e.checked){if(0==idList.length&&(categ=e.name),!(e.id in idList)){if(categ!=e.name)return e.checked=!1,void animatingMessage("You Must Compare Products Of Same Category",!1);if(!(idList.length<t))return e.checked=!1,void animatingMessage("Three Products Are Not Enough?",!1);idList.push(e.id)}}else{var n=idList.indexOf(e.id);n==idList.length-1?idList.pop():idList.splice(n,n+1)}idList.length>0?(divOfPopUp.style.display="block",spanOfItem.textContent=idList.length,divOfPopUp.prepend(spanOfItem)):divOfPopUp.style.display="none"}function disabling(e){if(console.log("new diabling"),"delivery"==e.name)e.checked?$('button[value="pd"]').css({display:"block"}):$('button[value="pd"]').css({display:"none"});else if("brand"==e.name){if($("#sb").val("rel"),e.checked)return void $('button[value="br"]').css({display:"block"});$('button[value="br"]').css({display:"none"})}rech("disabliing ke andae")}function showingAlertBox(){console.log("showingalertbox");var e=document.getElementById("alertBox"),t=document.getElementById("relating");t.innerHTML="",document.getElementById("disableBody").style.display="block",e.style.visibility="hidden",document.getElementById("alertBox").style.display="block";let n=document.createElement("h3");n.className="headingOfCompareAlert",n.textContent="Products To Compare";let a=document.createElement("div");a.className="divOfMainProd";for(let e=0;e<idList.length;e++)for(let t=0;t<newJson.length;t++)if(idList[e]==newJson[t].data.product_id){let e=document.createElement("div");e.className="divOfProd";let n=document.createElement("div");n.className="divOfHeadingbrand";let o=document.createElement("h3");o.textContent=newJson[t].data.product_name;var l=document.createElement("span");l.className="spanOfCloseHeading",l.innerHTML="&times;",l.style.cursor="pointer",l.style.marginRight="0px";let s=document.createElement("div");s.className="divOfImageComp";let i=document.createElement("img");i.src=newJson[t].data.product_images[0],i.style.maxWidth="100%",i.style.maxHeight="100%",i.className="imageOfProd",s.appendChild(i),n.appendChild(o),n.appendChild(l),e.appendChild(n),e.appendChild(s),a.appendChild(e)}t.appendChild(n),t.appendChild(a),e.style.visibility="visible";let o=window.innerWidth,s=window.innerHeight;e.style.left=o/2-e.offsetWidth/2+"px",e.style.top=s/2-e.offsetHeight/2+"px";let i=document.createElement("form");i.setAttribute("method","GET"),i.setAttribute("action","/product");let d=document.createElement("div");d.id="divOfCompareButton",d.type="submit";let r=document.createElement("h3");r.textContent="Compare",r.style.margin="auto",r.style.color="whitesmoke",d.appendChild(r);var c=document.createElement("input");c.name="pids",c.type="text",c.value=idList,c.style.display="none",i.appendChild(c),i.appendChild(d),i.style.height="10%",t.appendChild(i),$(".spanOfCloseHeading").on("click",n=>{let a=$(".spanOfCloseHeading").index(n.target);n.target.className="",document.getElementsByClassName("divOfMainProd")[0].removeChild(document.getElementsByClassName("divOfProd")[a]);let l=document.getElementsByName("pids")[0].value.split(",");document.querySelector('.results label[for="'+l[a]+'"] input').checked=!1,a==l.length-1?(l.pop(),idList.pop()):(l.splice(a,1),idList.splice(a,1)),l.length>0?document.getElementsByName("pids")[0].value=l:(e.style.display="none",t.innerHTML="",document.getElementById("disableBody").style.display="none",document.getElementsByTagName("html")[0].style.overflow="scroll",document.getElementsByClassName("divOfPopUp")[0].style.display="none",animatingMessage("Add Products To Compare",!0))}),console.log(document.forms),console.log($("divOfCompareButton")[0]),$("#divOfCompareButton").on("click",()=>{document.getElementsByName("pids")[0].value.split(",").length>1?document.forms[0].submit():animatingMessage("Add Atleast One More Product",!0)})}function rech(e){console.log(e),console.log("here rech");let t=$("#sb").val(),n=JSON.parse(JSON.stringify(sortedData)),a=document.getElementById("min").value,l=document.getElementById("max").value;"l"==t?(n.sort((e,t)=>e.product_lowest_price-t.product_lowest_price),payonDelivery(n,newJson,specs,a,l)):"p"==t?(n.sort((e,t)=>t.product_lowest_price-e.product_lowest_price),payonDelivery(n,newJson,specs,a,l)):payonDelivery(n,newJson,specs,a,l),document.getElementsByClassName("results")[0].childElementCount<1&&er()}function animatingMessage(e,t){document.getElementsByClassName("overlay")[0].style.display="block",document.querySelector(".messageBox h4").textContent=e,document.getElementsByClassName("messageBox")[0].style.display="flex",t&&(document.querySelectorAll(".messageBox div")[0].style.display="none"),$(".messageBox div").on("click",()=>{document.getElementsByClassName("overlay")[0].style.display="none",document.querySelector(".messageBox").style.display="none",showingAlertBox()}),setTimeout(()=>{document.getElementsByClassName("overlay")[0].style.display="none",document.getElementsByClassName("messageBox")[0].style.display="none",document.querySelectorAll(".messageBox div")[0].style.display="inline-block"},6e3)}spanOfItem.style.width="20px",$(".divOfPopUp:first").on("click",showingAlertBox),$("#sb").on("change",function(){rech("sb")}),$(":button").on("click",function(){if(console.log("line 405"),val=$(this).attr("value"),"pd"==val)$(this).css({display:"none"}),document.getElementById("COD").checked=!1;else if("pr"==val)$(this).css({display:"none"}),$("#min").val(sn),$("#max").val(gn),deviceWidth>1025?($("#slider").slider("values",0,sn),$("#slider").slider("values",1,gn)):slider.noUiSlider.set([sn,gn]);else if("br"==val){return $(this).css({display:"none"}),brandValue="",$("input:checkbox[name=brand]").attr("checked",!1),void requesting()}rech("button")});