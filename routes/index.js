//g2fqZExRCWJTtoRV7EnGnUlU8ES4M26JYi0 --status:active
//nZqK67bO82GJKMwHYsPR2Tv3bkdv4Nek5PW  --status : inactive
//BCcTsJIt8smf4vguW2H3awfBHP2E4dku675 --bharat ki key
// JkbkZuuWBwAYw0eehZjWPl6hqPtMIXNYRYF --didi status:active
var express = require('express');
var router = express.Router();
var request = require('request');

// function to add categories in slide menu started here-----------------------------------------------------------------
var request = require("request");
var a = 1;
var f = 0;
var arr = []; // contains category
var arr_2 = []; // contains sub_category
var arr_3 = []; // contains product images
var arr_4 = []; // contains product rating
var arr_5 = []; // contains product lowest prices

function si() {
    if (a != 10 && a != 19 && a != 29 && a != 39) {
        request(`https://price-api.datayuge.com/api/v1/compare/list/categories?api_key=g2fqZExRCWJTtoRV7EnGnUlU8ES4M26JYi0&page=` + a, function (_err, _res, _body) {
            try {
                var ans = JSON.parse(_body);
                console.log(ans.current_page);
            } catch (e) {
                console.log(e);
            }
            a = a + 1;
            if (a == 39) {
                console.log("task completed");
                console.log(arr);
                console.log(arr_2);
                // function to get images of every element of arr_2
                function hehe() {
                    request(`https://price-api.datayuge.com/api/v1/compare/search?api_key=g2fqZExRCWJTtoRV7EnGnUlU8ES4M26JYi0&product=${arr_2[f]}`, function (err, res, body) {
                        try {
                            var a = JSON.parse(body);
                            console.log(f + ": " + arr_2[f] + ": " + a.data[0].product_image);
                            // console.log();
                            arr_3.push(a.data[0].product_image);
                            arr_4.push(a.data[0].product_rating);
                            arr_5.push(a.data[0].product_lowest_price);
                        } catch (e) {
                            console.log(e);
                            arr_3.push("fake data");
                            arr_4.push("fake data");
                            arr_5.push("fake data");
                        }
                        f++;
                        if (arr_2[f] == 'code0194') {
                            arr_3.push("fake data");
                            arr_4.push("fake data");
                            arr_5.push("fake data");
                            f++;
                        }
                        if (f < arr_2.length) {
                            if (f == 8 || f == 8 * 2 || f == 8 * 3 || f == 8 * 4 || f == 8 * 5 || f == 8 * 6 || f == 8 * 7 || f == 8 * 8 || f == 8 * 9 || f == 8 * 10 || f == 8 * 11 || f == 8 * 12 || f == 8 * 13 || f == 8 * 14 || f == 8 * 15 || f == 8 * 16 || f == 8 * 17 || f == 8 * 18) {
                                console.log("now waiting for 70 seconds----------------------------------");
                                setTimeout(hehe, 70000);
                            } else {
                                hehe();
                            }
                        } else {
                            console.log(arr_3);
                            console.log(arr_4);
                        }
                    });
                }
                console.log("main wala start ho gaya...................................................");
                setTimeout(hehe, 70000);
                // FUNCTION TO GET IMAGES AND PRODUCT RATING ENDED
            }
            try {
                for (var b = 0; b < ans.data.length; b++) { //inside every pages
                    var b3; // for sub_category
                    if (b3 == null) {
                        b3 = ans.data[b].sub_category;
                    }
                    var kna1 = b3.includes("books");
                    var kna2 = b3.includes("men");
                    var kna3 = b3.includes("women");
                    var kna4 = b3.includes("care");
                    var kna5 = b3.includes("kids");
                    // var kna6 = b3.includes("home");

                    if (kna1 == false && kna5 == false && kna2 == false && kna3 == false && kna4 == false) {
                        //  && kna6 == false
                        if (b3 != ans.data[b].sub_category) {
                            arr_2.push(b3);
                        } else if (ans.data[b].id == 14) {
                            arr_2.push(b3);
                        }
                        b3 = ans.data[b].sub_category;
                    }
                    var b1;
                    if (b1 == null) { // for category
                        b1 = ans.data[b].category;
                    }
                    if (b1 != "books" && b1 != "kids" && b1 != "men" && b1 != "women" && b1 != "care") {
                        // && b1 != "home"
                        if (b1 != ans.data[b].category) {
                            arr.push(b1);
                            arr_2.push("code0194");
                        }
                        b1 = ans.data[b].category;
                    }
                }
            } catch (e) {
                console.log(e);

            }
            si();
        });
    } else if (a != 39) {
        console.log(arr);
        console.log(arr_2);

        if (a == 10 || a == 19 || a == 29) {
            request(`https://price-api.datayuge.com/api/v1/compare/list/categories?api_key=g2fqZExRCWJTtoRV7EnGnUlU8ES4M26JYi0&page=` + a, function (_err, _res, _body) {
                try {
                    var ans = JSON.parse(_body);
                    console.log(ans.current_page);
                    for (var c = 0; c < ans.data.length; c++) { //inside every pages
                        var b4; // for sub_category
                        if (b4 == null) {
                            b4 = ans.data[c].sub_category;
                        }
                        var knb1 = b4.includes("books");
                        var knb2 = b3.includes("men");
                        var knb3 = b3.includes("women");
                        var knb4 = b3.includes("care");
                        var knb5 = b3.includes("kids");
                        // var knb6 = b3.includes("home");

                        if (knb1 == false && knb5 == false && knb2 == false && knb3 == false && knb4 == false) {
                            //  && knb6 == false
                            if (b4 != ans.data[c].sub_category) {
                                arr_2.push(b4);
                            }
                            b4 = ans.data[c].sub_category;
                        }

                        var b2; // for category
                        if (b2 == null) {
                            b2 = ans.data[c].category;
                        }
                        if (b2 != "books" && b2 != "kids" && b2 != "men" && b2 != "women" && b2 != "care") {
                            // && b2 != "home"
                            if (b2 != ans.data[c].category) {
                                arr.push(b2);
                                arr_2.push("code0194");
                            }
                            b2 = ans.data[c].category;
                        }
                    }
                } catch (e) {
                    // arr.push("fake data");
                    // arr_2.push("fake data");
                }
            });
        }
        // ----------------------------------------------------------------------
        a = a + 1;
        setTimeout(si, 70000);
    }
}
si();
// function to add categories ended here --------------------------------------------------------------------------------

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', cat_name = {
        b0: arr_2,
        b1: arr,
        b2: arr_3,
        b3: arr_4,
        b4: arr_5
    });
});

router.get('/search', (req, resp, next) => {
    // let que = {name:"ashish"};
    // console.log(typeof(que));
    //  (async()=>{var newNew = await fetch('https://price-api.datayuge.com/api/v1/compare/detail?api_key=fKKrkmmV6q1Q2mWARftu9cXhPqqfJ3b7Xqd&id=ZToxNTA5Ng');
    //  var newne = await newNew.json();
    //  console.log(newne)})();
    //  console.log(newNew.json())
    //  var newne = await newNew.json();
    // //  var newne = await newNew.json();
    //       request('https://price-api.datayuge.com/api/v1/compare/detail?api_key=fKKrkmmV6q1Q2mWARftu9cXhPqqfJ3b7Xqd&id=ZToxNTA5Ng',(err,res,_body)=>{
    //         details = JSON.parse(_body);
    //         console.log(typeof(details.data.stores[0].amazon))
    //         console.log((details.data.stores[0].amazon.product_price))
    // });
    //            //   console.log(details.data.stores[0].amazon.product_color)

    // })
    // console.log(que.name)
    resp.render('search', que = {
        name: req.query.q,
        catname: arr

    })
    //   console.log(req.query.q)
    //  request("https://price-api.datayuge.com/api/v1/compare/search?api_key=fKKrkmmV6q1Q2mWARftu9cXhPqqfJ3b7Xqd&product="+req.query.q,(err,res,_body)=>{
    //         details = JSON.parse(_body);
    //         console.log(details);
    //         var fullDetails = [];
    //         for(let i=0; i<1; i++){
    //              console.log(details.data[i].product_id)
    //              request("https://price-api.datayuge.com/api/v1/compare/detail?api_key=fKKrkmmV6q1Q2mWARftu9cXhPqqfJ3b7Xqd&id="+details.data[i].product_id, (err,respond,__body)=>{
    //                     console.log("this is body" + __body)
    //              })

    //          }
    //          console.log(fullDetails)
    //   }).then(resp.render('search',details,fullDetails))


    // resp.render('search')
});
router.get('/compare/:id', (req, res) => {
    console.log(req.params.id)
    res.render('compare', que = { pid: req.params.id })
})
router.get('/product', (req, res, next) => {
    res.render('compareProduct', list = { ids: req.query.pids })

})



module.exports = router;