
let s=$("#searchBar");function rev(e,t){let o=document.getElementsByClassName("qwe")[0];o.textContent="";for(let n=0;n<e.length;n++){let l=document.createElement("div"),s=document.createElement("a"),d=document.createElement("img");d.src="r"==t?"/images/sicon.png":"/images/trending.png",s.textContent=e[n],s.href="/search?q="+e[n],l.appendChild(s),l.appendChild(d),o.appendChild(l)}}$(".horizontalBars:first").on("click",slideIt);let dw=window.outerWidth;console.log(dw),s.on("click",function(){if(document.getElementById("ye").textContent="",console.log(window.innerWidth-document.getElementById("headFixing").offsetWidth),dw<550?(console.log(dw),document.getElementById("t").style.width="80%"):dw>550&&dw<1025?(console.log(dw),document.getElementById("t").style.width="45%"):document.getElementById("t").style.width="35%",dw<550){let e=document.getElementById("db");e.style.display="block";let t=$("#headContainer");n=t.offset().top+38,document.getElementById("t").style.top=n+"px";let o=$(".horizontalBars:first img:first"),l=$(".border:first");console.log(l);let s=document.getElementsByClassName("horizontalBars")[0];console.log(s.getAttribute("data-re")),"b"==s.getAttribute("data-re")&&(l.css("display","none"),o.css("display","block"),s.setAttribute("data-re","a")),o.on("click",function(){e.style.display="none",document.getElementById("t").style.display="none",$(this).css("display","none"),l.length>0&&l.css("display","flex")})}else s.on("focusout",function(){setTimeout(function(){console.log("insde"),document.getElementById("t").style.display="none"},500)});document.getElementById("t").style.display="flex";let e=document.createElement("div");e.className="qwe",document.getElementById("ye").appendChild(e),rev(["redmi note 10","apple iphone 12","testing","testing2","testing 3"],"t")}),s.on("keyup",async function(e){console.log("keup");let t=s.val().replace(/[^\w\s]/gi,"");var o=new RegExp("^[a-zA-Z0-9]+$"),n=String.fromCharCode(e.charCode?e.charCode:e.which);console.log(!o.test(n)),o.test(n)?(console.log(t),fetch("https://price-api.datayuge.com/api/v1/compare/search/suggest?api_key=MFqoCD2uUsPMQWBjs704heOgXDwm9FNgCiX&product=" + t).then(async e=>{console.log(e.ok);var t=await e.json();console.log(t),rev(t.keywords,"r")}).catch(e=>{console.log(e)})):console.log("new")});let ft=document.querySelector("#downFoot a");console.log(ft);ft.textContent="PricesCompare.in";ft.href="/";function slideIt(){let e=document.getElementsByClassName("horizontalBars")[0];if(deviceWidth<550&&"a"==e.getAttribute("data-re"))return void e.setAttribute("data-re","b");console.log("here"),document.body.style.overflow="hidden",console.log($("#filterBar").offset().top,document.getElementById("headFixing").offsetHeight),$("#filterBar").css("top",0),$("#db2").css("display","block"),$("#filterBar").css("display","block"),document.body.style.overflow="hidden",console.log("inti");let t=$(".tr:first");console.log("new"),t.css({"animation-name":"ex","animation-duration":".3s","animation-fill-mode":"forwards"}),$("#db2").on("click",function(){$(".rt:first").css({"animation-name":"ne","animation-duration":".1s","animation-fill-mode":"forwards"}),$("#db2").css("display","none"),document.body.style.overflow="auto"})};
// let ft=document.querySelector("#downFoot a");ft.textContent ="pricescompare.in";ft.href="/";
$('#searchIcon').on('click',function(){
    console.log(document.forms)
    for(let e=0; e<document.forms.length; e++){
        console.log( document.getElementById('searchBar').value.length >2,document.forms[e].className==("newone"))
        if(document.forms[e].classList.contains("newone") & document.getElementById('searchBar').value.length >2){
            console.log('dod')
            document.forms[e].submit()
        }
    }
})
$('body').on('contextmenu',(e)=>{e.preventDefault();})
document.onkeydown = function(e) {
    if(e.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }