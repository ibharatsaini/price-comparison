
$(document).ready(function () {

    $("#searchIcon").click(()=>{
        document.forms[0].submit();
    })
    
    // click on div
    $(".sub_div").click((a)=>{
    var ad = a.delegateTarget.firstElementChild.innerText
        console.log(ad);
        // window.location.replace("")
    $("#searchBar")[0].value = ad;
    // console.log($("#searchBar")[0].value);
    document.forms[0].submit();
        
        
        // document.forms[0].submit("computer")
        // console.log(a.delegateTarget.innerText)
    })
    // 
    
      
        // FUNCTIONS TO ANIMATE LIC1 SIMULTANEOUSLY .
        function tat1() {
            $(".lic1").css({
                'width': '90%',
                'margin-left': '5%'
            })
            setTimeout(tat2, 2000)
        }
    
        function tat2() {
            $(".lic1").css({
                'width': '30%',
                'margin-left': '35%'
            })
            setTimeout(tat1, 2000)
    
        }
        tat1();
    
    
    });
    