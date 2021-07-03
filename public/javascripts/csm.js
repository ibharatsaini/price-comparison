const W = window.outerWidth;
if (W < 550) {
    document.getElementById("mainBody").style.minHeight = window.screen.height + "px";
    var details, specsi, naming2 = window.pid;
    console.log(naming2), (async() => {
        console.log(naming2);
        let t, a, l = "Not defined";
        try {
            if (a = "https://price-api.datayuge.com/api/v1/compare/detail?api_key=e4jbDB83X7WmVhIDahTVK1IupStiV7T125G&id=" + naming2, (details = await fetch(a)).status && (l = details.status), !details.ok) throw e;
            details = await details.json()
        } catch (e) {
            const d = "/stream";
            e ? (console.log(e), console.log(typeof e, e), t = String(e), console.log(t)) : t = "None", console.log(t);
            const n = { sc: l, lk: a, er: t };
            console.log(n), fetch(d, { method: "POST", body: JSON.stringify(n), headers: { "Content-type": "application/json; charset=UTF-8" } }), console.log("fetch")
        }
        try {
            if (a = "https://price-api.datayuge.com/api/v1/compare/specs?api_key=e4jbDB83X7WmVhIDahTVK1IupStiV7T125G&id=" + naming2, (specsi = await fetch(a)).status && (l = specsi.status), !specsi.ok) throw console.log("else"), e;
            specsi = await specsi.json(), console.log(specsi)
        } catch (e) {
            console.log("error");
            const d = "/stream";
            e ? (console.log(e), console.log(typeof e, e), t = String(e), console.log(t)) : t = "None", console.log(t);
            const n = { sc: l, lk: a, er: t };
            console.log(n), await fetch(d, { method: "POST", body: JSON.stringify(n), headers: { "Content-type": "application/json; charset=UTF-8" } }), console.log("specsi done")
        }
        var d, n = document.getElementById("mainBody");
        if (details.hasOwnProperty("data")) {
            var o = document.createElement("div");
            o.className = "container";
            var s = document.createElement("div");
            s.className = "imageContainer";
            var i = document.createElement("div");
            if (i.className = "divOfGallery", details.data.product_images.length > 1) {
                var c = document.createElement("div");
                c.className = "slideImageOuter";
                var r = details.data.product_images.length;
                details.data.product_images.length > 5 && (r = 5);
                for (let e = 0; e < r; e++) {
                    var p = document.createElement("div");
                    p.className = "slideInside", 0 == e && (p.classList = "slideInside blackOut");
                    var m = document.createElement("img");
                    m.setAttribute("src", details.data.product_images[e]), p.appendChild(m), c.appendChild(p)
                }
                i.appendChild(c)
            }
            var u = document.createElement("div");
            u.className = "divofimage";
            var h = document.createElement("div");
            h.className = "imageSlider";
            var g = document.createElement("img");
            g.setAttribute("src", details.data.product_images[0]), h.appendChild(g), u.appendChild(h), s.appendChild(i), s.appendChild(u), o.appendChild(s);
            var C = document.createElement("div");
            C.className = "titleDivNew";
            var v = document.createElement("h1");
            if (v.className = "priceTitle", v.innerHTML = details.data.product_name, C.appendChild(v), console.log(details.data.product_ratings), details.data.hasOwnProperty("product_ratings") && Number(details.data.product_ratings) > 0) {
                var f = document.createElement("div");
                f.className = "review";
                var y = document.createElement("div"),
                    E = document.createElement("span");
                E.textContent = details.data.product_ratings + "/5";
                var _ = document.createElement("img");
                _.setAttribute("src", "/images/star.png"), y.appendChild(E), y.appendChild(_), f.appendChild(y), C.appendChild(f)
            }
            var b = [],
                N = [];
            q = 0;
            for (let e = 0; e < details.data.stores.length; e++) N = Object.keys(details.data.stores[e]), (details.data.stores[e][N[0]].hasOwnProperty("product_price") || details.data.stores[e][N[0]].hasOwnProperty("product_mrp")) && (b[q] = {}, b[q].name = N[0], b[q].logo = details.data.stores[e][N[0]].product_store_logo, b[q].storeLink = details.data.stores[e][N[0]].product_store_url, "0" != details.data.stores[e][N[0]].hasOwnProperty("product_price") ? b[q].price = details.data.stores[e][N[0]].product_price : b[q].price = details.data.stores[e][N[0]].product_mrp, "1" == details.data.stores[e][N[0]].is_emi ? b[q].emi = "EMIs Available" : b[q].emi = "EMIs Not Available", "1" == details.data.stores[e][N[0]].is_cod ? b[q].cod = "COD Available" : b[q].cod = "COD Not Available", -1 != details.data.stores[e][N[0]].product_delivery.indexOf("d") ? b[q].deliveryTime = details.data.stores[e][N[0]].product_delivery + "days" : b[q].deliveryTime = details.data.stores[e][N[0]].product_delivery, "0" == details.data.stores[e][N[0]].product_delivery_cost ? b[q].deliveryCost = "Free" : b[q].deliveryCost = details.data.stores[e][N[0]].product_delivery_cost, details.data.stores[e][N[0]].product_offer.length > 2 ? b[q].offer = details.data.stores[e][N[0]].product_offer : b[q].offer = "No offers Available", b[q].returnTime = details.data.stores[e][N[0]].return_time, q++);
            b.sort((e, t) => e.price - t.price), console.log(b), console.log("This is sorted");
            var O = document.createElement("div");
            if (O.className = "mrpTag", details.data.product_mrp.length > 0 && b.length > 0) {
                let e = b[0].price,
                    t = details.data.product_mrp > b[b.length - 1].price ? details.data.product_mrp : b[b.length - 1].price,
                    a = document.createElement("span");
                a.innerHTML = "&#x20B9;" + e;
                let l = document.createElement("span");
                l.innerHTML = "&#x20B9;" + t;
                let d = document.createElement("span");
                d.textContent = Math.round((t - e) / t * 100) + "% Off!", console.log(Math.round(e / t * 100)), O.appendChild(a), O.appendChild(l), O.appendChild(d), C.appendChild(O), C.appendChild(O)
            } else if (0 == details.data.product_mrp.length && b.length > 1) {
                let e = b[0].price,
                    t = document.createElement("span");
                if (t.innerHTML = "&#x20B9;" + e, O.appendChild(t), b.length > 1) {
                    let t = b[b.length - 1].price,
                        a = document.createElement("span");
                    a.innerHTML = "&#x20B9;" + t;
                    let l = document.createElement("span");
                    l.textContent = Math.round((t - e) / t * 100) + "% Off!", console.log(Math.round(e / t * 100)), O.appendChild(a), O.appendChild(l)
                }
                C.appendChild(O), C.appendChild(O)
            } else if (details.data.product_mrp.length > 1) {
                let e = details.data.product_mrp,
                    t = document.createElement("span");
                t.innerHTML = "&#x20B9;" + e, O.appendChild(t), C.appendChild(O), C.appendChild(O)
            }
            if (o.appendChild(C), details.data.hasOwnProperty("available_colors")) {
                let e = document.createElement("div");
                e.className = "colorsAvail";
                let t = document.createElement("h4");
                t.textContent = "Available Colours", t.className = "styleFont";
                let a = document.createElement("div");
                a.className = "divOfColor";
                for (let e = 0; e < details.data.available_colors.length; e++) {
                    let t = document.createElement("div");
                    t.textContent = details.data.available_colors[e], a.appendChild(t)
                }
                e.appendChild(t), e.appendChild(a), C.appendChild(e)
            }
            if (specsi.data.hasOwnProperty("main_specs") && specsi.data.main_specs.length > 1) {
                let e = document.createElement("div");
                e.className = "divOfHigh";
                let t = document.createElement("h4");
                t.textContent = "Highlights", t.className = "styleFont";
                var w = document.createElement("ul");
                w.className = "unordered";
                for (let e = 0; e < specsi.data.main_specs.length; e++) {
                    let t = document.createElement("li");
                    t.innerHTML = specsi.data.main_specs[e], w.appendChild(t)
                }
                e.appendChild(t), e.appendChild(w), C.appendChild(e)
            }
            if (b.length > 0) {
                let e = document.createElement("div");
                e.className = "bestOfferDiv", console.log(b);
                let t = document.createElement("div");
                t.className = "bestStore";
                let a = document.createElement("div"),
                    l = document.createElement("img");
                l.setAttribute("src", b[0].logo), a.appendChild(l);
                let d = document.createElement("div");
                d.innerHTML = "&#x20B9;" + b[0].price;
                let n = document.createElement("div");
                n.textContent = b[0].cod;
                let s = document.createElement("div");
                s.textContent = b[0].deliveryTime + " ";
                let i = document.createElement("div");
                i.textContent = b[0].emi;
                let c = document.createElement("div"),
                    r = document.createElement("a");
                r.setAttribute("href", b[0].storeLink), r.setAttribute("target", "_blank"), r.textContent = "Store", c.append(r), t.appendChild(a), t.appendChild(d), t.appendChild(n), t.appendChild(s), t.appendChild(i), t.appendChild(c), e.appendChild(t), o.appendChild(e)
            }
            document.getElementById("load").style.display = "none", n.appendChild(o);
            var x = document.createElement("div");
            x.className = "storeComp";
            let e = document.createElement("div");
            e.className = "pngDiv";
            var A = ["e-Store", "Price", "COD", "Delivery Charges", "Expected Delivery"];
            for (let t = 0; t < A.length; t++) {
                let a = document.createElement("div"),
                    l = document.createElement("h6");
                l.style.fontWeight = "300";
                let d = document.createElement("img");
                if (d.setAttribute("src", "/images/" + A[t] + ".png"), l.textContent = A[t], a.appendChild(d), a.appendChild(l), e.appendChild(a), t == A.length - 1) {
                    let t = document.createElement("div"),
                        a = document.createElement("a");
                    a.textContent = "Buy button", a.style.width = "80%", t.style.visibility = "hidden", t.style.minWidth = "70px", t.appendChild(a), e.appendChild(t)
                }
            }
            x.appendChild(e);
            for (let e = 0; e < b.length; e++) {
                let t = document.createElement("div");
                t.className = "divStore";
                let a = document.createElement("div"),
                    l = document.createElement("img");
                l.className = "logoImage", l.setAttribute("src", b[e].logo), a.appendChild(l);
                let d = document.createElement("div");
                d.innerHTML = "&#x20B9;" + b[e].price;
                let n = document.createElement("div"),
                    o = document.createElement("img");
                o.className = "CodImage", "COD Available" == b[e].cod ? o.src = "/images/right.png" : "COD Not Available" == b[e].cod && (o.src = "/images/wrong.png"), n.appendChild(o);
                let s = document.createElement("div");
                if ("Free" != b[e].deliveryCost) {
                    let t = document.createElement("h4");
                    t.innerHTML = "&#x20B9;" + b[e].deliveryCost, s.appendChild(t)
                } else {
                    let t = document.createElement("h4");
                    t.innerHTML = b[e].deliveryCost + "", s.appendChild(t)
                }
                let i = document.createElement("div"),
                    c = document.createElement("h4");
                c.innerHTML = "<span>" + b[e].deliveryTime + "</span>", i.appendChild(c);
                let r = document.createElement("div"),
                    p = document.createElement("a");
                p.setAttribute("href", b[e].storeLink), p.setAttribute("target", "_blank"), p.textContent = "Store", r.appendChild(p), t.appendChild(a), t.appendChild(d), t.appendChild(n), t.appendChild(s), t.appendChild(i), t.appendChild(r), x.appendChild(t)
            }
            let t = document.createElement("div");
            if (t.className = "divHeading", t.textContent = "Comparison", n.appendChild(t), n.appendChild(x), document.getElementsByClassName("slideInside").length > 1 && $(".slideInside").hover(function() { $(".slideInside").removeClass("blackOut"), $(this).addClass("blackOut"), document.getElementsByClassName("imageSlider")[0].firstChild.setAttribute("src", $(this).children().attr("src")) }), b[0] && b[0].hasOwnProperty("offer")) {
                let e = document.createElement("div");
                e.className = "divOfOffer";
                let t = document.createElement("div");
                t.className = "divHeading", t.textContent = "Offers", e.appendChild(t);
                let a = document.createElement("table");
                a.className = "tableOfOffer";
                for (let e = 0; e < b.length; e++) {
                    let t = document.createElement("tr");
                    t.className = "trOfHead";
                    let l = document.createElement("td");
                    l.className = "tdOfImage";
                    let d = document.createElement("img");
                    d.setAttribute("src", b[e].logo), l.appendChild(d);
                    let n = document.createElement("td");
                    n.className = "tdOfOffer", n.innerHTML = b[e].offer;
                    let o = document.createElement("td");
                    o.className = "tdOfOffer", "EMIs Not Available" == b[e].emi ? o.textContent = "No" : "EMIs Available" == b[e].emi && (o.textContent = "Yes"), o.textContent = b[e].emi, t.appendChild(l), t.appendChild(n), t.appendChild(o), a.appendChild(t)
                }
                e.appendChild(a), n.appendChild(e)
            }
            console.log(details);
            let t1 = document.getElementsByTagName("title")[0];
            t1.textContent = "Compare " + details.data.product_name + " By Prices,Offers On e-Stores - PricesCompare.in"
            
            let a = document.getElementsByTagName("head")[0];
            console.log(a);
            a.appendChild(t1)
            let l = document.querySelector('meta[name="description"]')
                // l.name = "description";
            l.content = "Compare " + details.data.product_name + " By Prices,COD Available ,EMIs Available, Offers across all e-stores(Flipkart, Amazon, TataCliq, PaytmMall Etc). Compare Best Deals On " + details.data.product_name + " Across all e-Stores";
            // a.appendChild(l);
            let d = document.querySelector('meta[name="og_title"]')
                // d.name = "og_title";
            d.content = details.data.product_name + " Prices in India | Compare Prices of " + details.data.product_name + " in India";
            let B = document.querySelector('meta[name="og_url"]')
                // B.setAttribute("property", "og:url");
            let L = { headsets: "headphones", "computer-monitor": "monitor", "computer-keyboard": "keyboard", refrigerators: "refrigerator", tv: "led-tv", "wireless-speakers": "speakers", "home-theaters": "home-theater" };
            console.log(-1 == L.hasOwnProperty(details.data.product_sub_category));
            L.hasOwnProperty(details.data.product_sub_category) ? (console.log("dt"), console.log(details.data.product_sub_category), console.log(details.data.product_brand), console.log(details.data.product_brand.toLowerCase()), console.log(details.data.product_sub_category), console.log(details.data.product_name.replace("/", "").replace(/ /g, "-").toLowerCase()), console.log(details.data.product_id), B.content = "http://www.pricescompare.in/" + L[details.data.product_sub_category] + "/" + details.data.product_brand.toLowerCase() + "-" + L[details.data.product_sub_category] + "/" + details.data.product_name.replace("/", "").replace(/ /g, "-").toLowerCase() + "/" + details.data.product_id, console.log()) : (console.log("td"), B.content = "http://www.pricescompare.in/" + details.data.product_sub_category + "/" + details.data.product_brand.toLowerCase() + "-" + details.data.product_sub_category + "/" + details.data.product_name.replace("/", "").replace(/ /g, "-").toLowerCase() + "/" + details.data.product_id)
                // let T = document.createElement("meta");
                // T.name = "og_site_name", T.setAttribute("property", "og:site_name"), T.content = "PricesCompare.in", a.appendChild(T);
            let M = document.querySelector('meta[name="og_description"]')
            M.content = "Compare " + details.data.product_name + " By Prices, Cash On Delivery(COD) ,EMIs, Offer across all e-stores. Compare Best Deal On " + details.data.product_name + " Across all e-Stores", document.title = "Compare " + details.data.product_name + " Prices, Specifications, Offers Across All e-Stores | PricesCompare"
        } else document.getElementById("load").style.display = "none", document.getElementById("mainBody").innerHTML = '<div class="err" style="display:flex;"><a id="bt" href="/">Go To Home Page</a></div>';
        if (specsi.data.hasOwnProperty("main_specs")) {
            console.log(specsi);
            var B = Object.keys(specsi.data.sub_specs);
            console.log(B);
            let e = document.createElement("div");
            e.className = "divHeading", e.textContent = "Specifications", e.style.textAlign = "center";
            let t = document.createElement("div");
            if (t.className = "divOfSpecs", specsi.data.sub_specs.hasOwnProperty("General")) {
                console.log(specsi.data.sub_specs.General);
                let e = document.createElement("h1");
                e.textContent = "General", t.appendChild(e);
                let a = document.createElement("div");
                a.className = "divOfRowing";
                for (let e = 0; e < specsi.data.sub_specs.General.length; e++) L(a, specsi.data.sub_specs.General[e].spec_key, specsi.data.sub_specs.General[e].spec_value), t.appendChild(a)
            }
            for (let e = 0; e < B.length; e++) {
                if ("General" == B[e]) continue;
                let a = document.createElement("h1");
                a.textContent = B[e], t.appendChild(a);
                let l = document.createElement("div");
                l.className = "divOfRowing";
                for (let a = 0; a < specsi.data.sub_specs[B[e]].length; a++) L(l, specsi.data.sub_specs[B[e]][a].spec_key, specsi.data.sub_specs[B[e]][a].spec_value), t.appendChild(l)
            }

            function L(e, t, a) {
                let l = document.createElement("div");
                if (l.className = "divOfKeyValue", a.length > 0) {
                    let d = document.createElement("div");
                    d.className = "divOfKey", d.textContent = t;
                    let n = document.createElement("div");
                    n.className = "divOfValueKey", a.length > 0 && (n.textContent = a), l.appendChild(d), l.appendChild(n), e.appendChild(l)
                }
            }
            n.appendChild(e), n.appendChild(t)
        }
        try {
            (d = await fetch("https://price-api.datayuge.com/api/v1/compare/search?api_key=e4jbDB83X7WmVhIDahTVK1IupStiV7T125G&product=" + details.data.product_brand + " " + details.data.product_sub_category)).ok && (d = await d.json())
        } catch (e) { console.log(e) }
        if (void 0 !== d) {
            console.log(d);
            var T = document.createElement("div");
            T.className = "cont";
            let e = document.createElement("div");
            e.textContent = "Similar Products", e.className = "brandLogo", T.appendChild(e);
            let t = document.createElement("div");
            t.className = "secondChild", console.log(d.data.length);
            let a = document.createElement("div");
            a.className = "hereProducts0";
            for (let e = 0; e < d.data.length; e++) {
                let t = document.createElement("div");
                t.className = "productBox", console.log(d.data[e].product_image);
                let l = document.createElement("a");
                l.className = "imageBox", l.setAttribute("href", "/compare/" + d.data[e].product_id);
                let n = document.createElement("div");
                n.className = "imageCont";
                let o = document.createElement("img");
                o.setAttribute("src", d.data[e].product_image), n.appendChild(o);
                let s = document.createElement("h3");
                s.className = "h4Kafont", s.innerHTML = "From &#x20B9;" + d.data[e].product_lowest_price;
                let i = document.createElement("h4");
                i.textContent = d.data[e].product_title, l.appendChild(n), l.appendChild(s), l.appendChild(i), t.appendChild(l), a.appendChild(t)
            }
            t.appendChild(a), T.appendChild(t), n.appendChild(T), $("button").click(function() {
                console.log("button");
                var e = this.value;
                console.log(e);
                var t = e.includes("A");
                if (console.log(t), 1 == t) {
                    var a = e.replace("A", "");
                    console.log(a), document.getElementById("butbWala").style.display = "flex", $(".butB").css({ display: "block" });
                    var l = document.querySelector(".hereProducts");
                    console.log("scrolling left positive");
                    var d = l.scrollWidth,
                        n = l.clientWidth,
                        o = l.scrollLeft;
                    console.log(d, n, o), l.scrollLeft += n, n + o >= d - n && (document.getElementById("butaWala").style.display = "none", $(".butA").css({ display: "none" }))
                } else {
                    a = e.replace("B", "");
                    console.log(a);
                    var s = document.querySelector(".hereProducts");
                    n = s.clientWidth;
                    s.scrollLeft -= n, console.log("scrolling left negative"), s.scrollLeft <= n && (document.getElementById("butbWala").style.display = "none", $(".butB").css({ display: "none" })), document.getElementById("butaWala").style.display = "flex", $(".butA").css({ display: "block" })
                }
            })
        } else console.log("baghar")
    })()
};