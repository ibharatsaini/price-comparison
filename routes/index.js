
var express = require('express');
var router = express.Router();

const UserAgent = require('user-agents')
const fs = require('fs')

var request = require("request");
const { json } = require('body-parser');
const { Console } = require('console');

router.get('/keywords', function(req, res) {
    fs.readFile('./public/key.json', 'utf-8', (e, d) => {
        if (e) throw e
        a = JSON.parse(d)
        res.send(JSON.stringify(a))
    })
})
router.get('/compare/:id', function(req, res) {
    res.render('compareAD',que = { pid: req.params.id })

})
router.get('/mobile/xiaomi-mobiles/xiaomi-redmi-9-prime/ZToxNjYxNg',function(req,res){
    console.log('link')
    res.render('pro/redmi 9 prime',que={pid:'ZToxNjYxNg '})
})

router.get('/:cat/:brand/:product/:id',function(req,res){
    res.render('compareAD',que = { pid: req.params.id })
})
router.get('/', function(req, res) {
    res.render('index');
});
router.get('/search', function(req, resp) { 
    naming = { name: req.query.q }
    resp.render('search', que = naming)
});


router.get('/mobile',function(req,res){
    ag = req.useragent
    if (ag.isMobile && ag.platform !== "iPad") {
        res.render('cat/mobile/mobile_catMobile')
    } else {
        res.render('cat/desktop/mobile_cat')
    }
})
router.get('/headphones',function(req,res){
    ag = req.useragent
    if (ag.isMobile && ag.platform !== "iPad") {
        res.render('cat/mobile/headphone_catMobile')
    } else {
        res.render('cat/desktop/headphone_cat')
    }
})
router.get('/laptops',function(req,res){
    ag = req.useragent
    if (ag.isMobile && ag.platform !== "iPad") {
        res.render('cat/mobile/laptops_catMobile')
    } else {
        res.render('cat/desktop/laptops_cat')
    }
})
router.get('/desktop',function(req,res){
    ag = req.useragent
    if (ag.isMobile && ag.platform !== "iPad") {
        res.render('cat/mobile/desktop_catMobile')
    } else {
        res.render('cat/desktop/desktop_cat')
    }
})
router.get('/appliances',function(req,res){
    ag = req.useragent
    if (ag.isMobile && ag.platform !== "iPad") {
        res.render('cat/mobile/appliances_catMobile')
    } else {
        res.render('cat/desktop/appliances_cat')
    }
})
router.get('/led-tv',function(req,res){
    ag = req.useragent
    if (ag.isMobile && ag.platform !== "iPad") {
        res.render('cat/mobile/led_catMobile')
    } else {
        res.render('cat/desktop/led_cat')
    }
})
router.get('/kitchen-appliances',function(req,res){
    ag = req.useragent
    if (ag.isMobile && ag.platform !== "iPad") {
        res.render('cat/mobile/kitchen_catMobile')
    } else {
        res.render('cat/desktop/kitchen_cat')
    }
})

router.get('/mobile/mobiles-price-list-in-india', function(req, res) {
    data = { a: 'mobiles', b: 'mobile' }
    res.render('br/mobile/all', data)
})
router.get('/mobile/apple-mobile-price-list', function(req, res) {
    data = { a: 'apple', b: 'mobile' }
    res.render('br/mobile/apple', data)
})
router.get('/mobile/oppo-mobile-price-list', function(req, res) {
    data = { a: 'oppo', b: 'mobile' }
    res.render('br/mobile/oppo', data)
})
router.get('/mobile/xiaomi-mobile-price-list', function(req, res) {
    data = { a: 'xiaomi', b: 'mobile' }

    res.render('br/mobile/redmi', data)
})
router.get('/mobile/realme-mobile-price-list', function(req, res) {
    data = { a: 'realme', b: 'mobile' }
    res.render('br/mobile/realme', data)
})
router.get('/mobile/oneplus-mobile-price-list', function(req, res) {
    data = { a: 'oneplus', b: 'mobile' }
    res.render('br/mobile/oneplus', data)
})
router.get('/mobile/vivo-mobile-price-list', function(req, res) {
    data = { a: 'vivo', b: 'mobile' }
    res.render('br/mobile/vivo', data)
})
router.get('/mobile/tecno-mobile-price-list', function(req, res) {
    data = { a: 'tecno', b: 'mobile' }
    res.render('br/mobile/tecno', data)
})
router.get('/mobile/google-mobile-price-list', function(req, res) {
    data = { a: 'google', b: 'mobile' }
    res.render('br/mobile/google', data)
})
router.get('/mobile/samsung-mobile-price-list', function(req, res) {
    data = { a: 'samsung', b: 'mobile' }
    res.render('br/mobile/samsung', data)
})
router.get('/mobile/lenovo-mobile-price-list', function(req, res) {
    data = { a: 'lenovo', b: 'mobile' }
    res.render('br/mobile/lenovo', data)
})
router.get('/mobile/htc-mobile-price-list', function(req, res) {
    data = { a: 'htc', b: 'mobile' }
    res.render('br/mobile/htc', data)
})

router.get('/headphones/headphones-price-list-in-india', function(req, res) {
    data = { a: 'headphones', b: 'headphone' }
    res.render('br/headphone/all', data)
})
router.get('/headphones/boat-headphones-price-list/', function(req, res) {
    data = { a: 'boat', b: 'headphone' }
    res.render('br/headphone/boat', data)
})
router.get('/headphones/boult-headphones-price-list', function(req, res) {
    data = { a: 'boult', b: 'headphone' }
    res.render('br/headphone/boult', data)
})
router.get('/headphones/jbl-headphones-price-list', function(req, res) {
    data = { a: 'jbl', b: 'headphone' }
    res.render('br/headphone/jbl', data)
})
router.get('/headphones/sony-headphones-price-list', function(req, res) {
    data = { a: 'sony', b: 'headphone' }
    res.render('br/headphone/sony', data)
})
router.get('/speakers/bluetooth-speakers-price-list', function(req, res) {
    data = { a: 'random', b: 'speaker' }
    res.render('br/headphone/speakers', data)
})
router.get('/home-theater/home-theater-system-price-list', function(req, res) {
    data = { a: 'random', b: 'home theater' }
    res.render('br/headphone/home theater', data)
})

router.get('/laptops/laptops-price-list-in-india', function(req, res) {
    data = { a: 'laptops', b: 'laptop' }
    res.render('br/laptops/all', data)
})
router.get('/laptops/microsoft-laptops-price-list', function(req, res) {
    data = { a: 'microsoft', b: 'laptop' }
    res.render('br/laptops/microsoft', data)
})
router.get('/laptops/msi-laptops-price-list', function(req, res) {
    data = { a: 'msi', b: 'laptop' }
    res.render('br/laptops/msi', data)
})
router.get('/laptops/gaming-laptops-price-list', function(req, res) {
    data = { a: 'gaming', b: 'laptop' }
    res.render('br/laptops/gaming', data)
})

router.get('/led-tv/led-tv-price-list', function(req, res) {
    data = { a: 'leds', b: 'led' }
    res.render('br/led/all', data)
})
router.get('/led-tv/mi-led-tv-price-list', function(req, res) {
    data = { a: 'mi', b: 'led' }
    res.render('br/led/xiaomi', data)
})
router.get('/led-tv/lg-led-tv-price-list', function(req, res) {
    data = { a: 'lg', b: 'led' }
    res.render('br/led/lg', data)
})
router.get('/led-tv/micromax-led-tv-price-list', function(req, res) {
    data = { a: 'micromax', b: 'led' }
    res.render('br/led/micromax', data)
})
router.get('/led-tv/samsung-led-tv-price-list', function(req, res) {
    data = { a: 'samsung', b: 'led' }
    res.render('br/led/samsung', data)
})
router.get('/led-tv/sony-led-tv-price-list', function(req, res) {
    data = { a: 'sony', b: 'led' }
    res.render('br/led/sony', data)
})
router.get('/led-tv/vu-led-tv-price-list', function(req, res) {
    data = { a: 'vu', b: 'led' }
    res.render('br/led/vu', data)
})

router.get('/refrigerator/refrigerator-price-list', function(req, res) {
    data = { a: 'refrigerators', b: 'refrigerator' }
    res.render('br/refridgerator/all', data)
})
router.get('/refrigerator/godrej-refrigerator-price-list', function(req, res) {
    data = { a: 'godrej', b: 'refrigerator' }
    res.render('br/refridgerator/godrej', data)
})
router.get('/refrigerator/lg-refrigerator-price-list', function(req, res) {
    data = { a: 'lg', b: 'refrigerator' }
    res.render('br/refridgerator/lg', data)
})
router.get('/refrigerator/haier-refrigerator-price-list', function(req, res) {
    data = { a: 'haier', b: 'refrigerator' }
    res.render('br/refridgerator/haier', data)
})
router.get('/refrigerator/samsung-refrigerator-price-list', function(req, res) {
    data = { a: 'samsung', b: 'refrigerator' }
    res.render('br/refridgerator/samsung', data)
})
router.get('/refrigerator/whirlpool-refrigerator-price-list', function(req, res) {
    data = { a: 'whirlpool', b: 'refrigerator' }
    res.render('br/refridgerator/whirlpool', data)
})


router.get('/appliances/air-conditioner-price-list', function(req, res) {
    data = { a: 'air conditioner', b: 'appliances' }
    res.render('br/appliances/air conditioner', data)
})
router.get('/appliances/electric-irons-price-list', function(req, res) {
    data = { a: 'random', b: 'irons' }
    res.render('br/appliances/irons', data)
})

router.get('/microwave-oven/microwave-oven-price-list', function(req, res) {
    data = { a: 'microwave ovens', b: 'microwave oven' }
    res.render('br/micro/all', data)
})
router.get('/microwave-oven/godrej-microwave-oven-price-list', function(req, res) {
    data = { a: 'godrej', b: 'microwave oven' }
    res.render('br/micro/godrej', data)
})
router.get('/microwave-oven/haier-microwave-oven-price-list', function(req, res) {
    data = { a: 'haier', b: 'microwave oven' }
    res.render('br/micro/haier', data)
})
router.get('/microwave-oven/lg-microwave-oven-price-list', function(req, res) {
    data = { a: 'lg', b: 'microwave oven' }
    res.render('br/micro/lg', data)
})
router.get('/microwave-oven/samsung-microwave-oven-price-list', function(req, res) {
    data = { a: 'samsung', b: 'microwave oven' }
    res.render('br/micro/samsung', data)
})
router.get('/microwave-oven/whirlpool-microwave-oven-price-list', function(req, res) {
    data = { a: 'whirlpool', b: 'microwave oven' }
    res.render('br/micro/whirlpool', data)
})

router.get('/kitchen-appliances/mixer-juicer-grinder-price-list', function(req, res) {
    data = { a: 'random', b: 'mixer juicer grinder' }
    res.render('br/kitchen/mixer juicer grinder', data)
})

router.get('/monitor/aoc-monitor-price-list', function(req, res) {
    data = { a: 'aoc', b: 'monitor' }
    res.render('br/desktop/aoc', data)
})
router.get('/monitor/asus-monitor-price-list', function(req, res) {
    data = { a: 'asus', b: 'monitor' }
    res.render('br/desktop/asus', data)
})
router.get('/monitor/hp-monitor-price-list', function(req, res) {
    data = { a: 'hp', b: 'monitor' }
    res.render('br/desktop/hp', data)
})
router.get('/monitor/lenovo-monitor-price-list', function(req, res) {
    data = { a: 'lenovo', b: 'monitor' }
    res.render('br/desktop/lenovo', data)
})
router.get('/monitor/lg-monitor-price-list', function(req, res) {
        data = { a: 'lg', b: 'monitor' }
        res.render('br/desktop/lg', data)
})
router.get('/monitor/samsung-monitor-price-list', function(req, res) {
    data = { a: 'samsung', b: 'monitor' }
    res.render('br/desktop/samsung', data)
})
router.get('/desktop/mouse-price-list', function(req, res) {
    data = { a: 'random', b: 'mouse' }
    res.render('br/desktop/mouse', data)
})
router.get('/desktop/desktop-price-list', function(req, res) {
    data = { a: 'random', b: 'desktop' }
    res.render('br/desktop/all desktop', data)
})

router.get('/product', (req, res) => {
    res.render('compareProduct', list = { ids: req.query.pids })

})

router.get('/e/json/testing/:brand', function(req, res) {
    var apple2 = {}
    let brading = "./server/"+ req.params.brand + ".json"
    fs.readFile(brading, 'utf-8', (e, d) => {
        if (e) throw e
        apple2 = JSON.parse(d)
        res.send(JSON.stringify(apple2))
    })
})
router.get('/e/json/testing2/:brand2', function(req, res) {
    var apple2 = {}
    let brading = "./server/" + "data.json"
    fs.readFile(brading, 'utf-8', (e, d) => {
        if (e) throw e
        apple2 = JSON.parse(d)
        res.send(JSON.stringify(apple2))
    })
})
router.get('/json/:p/:brand', function(req, res) {
    var apple2 = {}
    req.params.p.replace("[^a-zA-Z]+","")
    req.params.brand.replace("[^a-zA-Z]+","")
    let brading = "./adc/" + req.params.p + "/" + req.params.brand + "/all " + req.params.brand + ".json"
    fs.readFile(brading, 'utf-8', (e, d) => {
            if(d){
            apple2 = JSON.parse(d)
            res.send(JSON.stringify(apple2))
            }else{
                let log=req.ip + "     "+new Date()+"    "+req.headers.referer+"    "+ 200 +"    "+brading+"    "+e
        var writeStream = fs.createWriteStream('./er.log',{flags:'a'});
    // console.log(js.er.message)
        writeStream.write(log,err=>{
            if(err){
                console.log(err)
            }
        })
            }
        })
    
})



router.post('/stream',function(req,res){
    const js = req.body
    var writeStream = fs.createWriteStream('./er.log',{flags:'a'});
    let log = req.ip+ "    "+new Date()+"     "+req.headers.referer + "     "+js.sc+"     "+js.lk+"    "+(js.er)+"\n"
    writeStream.write(log,err=>{
        if(err){
            console.log(err)
        }
    })
    

})
router.get('/privacy', function(req, res) {
    res.render('privacy')
})
router.get('/terms-of-use', function(req, res) {
    res.render('termsofuse')
})
router.get('/contact-us', function(req, res) {
    res.render('contactus')
})
router.get('/advertise-with-us',function(req,res){
    res.render('advertise')
})
router.get('/about-us',function(req,res){
    res.render('aboutus')
})
router.get('/credits',function(req,res){
    res.render('credits')
})
router.get('/get-some-error-345435',function(req,res){
    res.render('error')
})

module.exports = router;
