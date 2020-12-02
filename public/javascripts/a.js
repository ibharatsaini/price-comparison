
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
    
        $("button").click(function () {
            $(this).css({
                // "display": "none"
            });
            // if statement here
            var cj = this.value;
            var a = cj.includes("A")
            if (a == true) {
                var b = cj.replace("A", "");
                // $(`.middle_div${b}`).scrollLeft(1000);
                $(`.butB${b}`).css({
                    "display": "block"
                })
                var a1 = document.querySelector(`.middle_div${b}`);
                a1.scrollLeft += 1000;
                var u1 = a1.scrollWidth;
                var t1 = a1.clientWidth;
                var t2 = a1.scrollLeft;
                var t3 = t1+t2;
                if(t3 >= u1-1000){
                    $(`.butA${b}`).css({
                        "display": "none"
                    });
                }
            } else {
                var b = cj.replace("B", "")
                // $(`.middle_div${b}`).scrollLeft(-10000);
                var a2 = document.querySelector(`.middle_div${b}`);
                a2.scrollLeft -= 1000;
    
                // var ub1 = a2.scrollWidth;
                // var tb1 = a2.clientWidth;
                var tb2 = a2.scrollLeft;
                // console.log(ub1);
                // console.log(tb1);
                // console.log(tb2);
                // var tb3 = tb1+tb2;
                if(tb2 <= 1000){
                    $(`.butB${b}`).css({
                        "display": "none"
                    });
                }
                $(`.butA${b}`).css({
                    "display": "block"
                });
            }
        });
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
    