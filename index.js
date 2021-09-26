const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const user = urlParams.get('userData');
const redirect = urlParams.get('redirectUri');
let preferenceData = {
    designCatalog: document.querySelector('#design-title').innerText,
    cabinetry: document.querySelector('#cabinetry-text-1').children[0].innerText,
    cabinethw: document.querySelector('#cabinet-hw-text-1').children[0].innerText,
    countertop: document.querySelector('#countertop-text-1').children[0].innerText,
    backsplash: document.querySelector('#backsplash-text-1').children[0].innerText,
    flooring: document.querySelector('#flooring-text-1').children[0].innerText,
    supplier: document.querySelector('#supplier-vendor-1').innerText,
    layout: document.querySelector('#supplier-size-1').innerText,
}

let imgList = {
    cabinetry: document.querySelector('#cabinetry-images-1').children[0].src,
    cabinethw: document.querySelector('#cabinet-hw-images-1').children[0].src,
    countertop: document.querySelector('#countertop-images-1').children[0].src,
    backsplash: document.querySelector('#backsplash-images-1').children[0].src,
    flooring: document.querySelector('#flooring-images-1').children[0].src,
    layout: document.querySelector('#layout-images-1').src,
}

function saveClassChange() {
	if (cabinetrySelected && cabinethwSelected && countertopSelected && backsplashSelected && flooringSelected && supplierSelected) {
        saveButton2.classList.add('save-pref2-clicked');
    }
}

let supplierSelected = true;
let cabinetrySelected = true;
let cabinethwSelected = true;
let countertopSelected = true;
let backsplashSelected = true;
let flooringSelected = true;// Pricing calculator

let supplier1selected = true;
let supplier2selected = false;
let supplier3selected = false;
let size1selected = true;
let size2selected = false;
let size3selected = false;
let size4selected = false;

let pricing = {
    starting: '$5,500',
    linear: '12',
    cabinet: '8',
    drawer: '4',
}

//supplier section
let supplierText1 = document.querySelector('#supplier-text-1');
let supplierText2 = document.querySelector('#supplier-text-2');
let supplierText3 = document.querySelector('#supplier-text-3');
let supplierSel = document.querySelector('#supplier-select');
let supplierHeader1 = document.querySelector('#supplier-header-1');
let supplierHeader2 = document.querySelector('#supplier-header-2');
let supplierHeader3 = document.querySelector('#supplier-header-3');
let supplierBullet1 = document.querySelector('#supplier-bullet-1');
let supplierBullet2 = document.querySelector('#supplier-bullet-2');
let supplierBullet3 = document.querySelector('#supplier-bullet-3');

let supplierVendor1 = document.querySelector('#supplier-vendor-1');
let supplierVendor2 = document.querySelector('#supplier-vendor-2');
let supplierVendor3 = document.querySelector('#supplier-vendor-3');

let supplierSize1 = document.querySelector('#supplier-size-1');
let supplierSize2 = document.querySelector('#supplier-size-2');
let supplierSize3 = document.querySelector('#supplier-size-3');
let supplierSize4 = document.querySelector('#supplier-size-4');

let supplierCost = document.querySelector('#supplier-cost');
let supplierFt = document.querySelector('#supplier-ft');
let supplierCab = document.querySelector('#supplier-cab');
let supplierDraw = document.querySelector('#supplier-draw');

let layoutImg1 = document.querySelector('#layout-images-1');
let layoutImg2 = document.querySelector('#layout-images-2');
let layoutImg3 = document.querySelector('#layout-images-3');
let layoutImg4 = document.querySelector('#layout-images-4');

let supplierBtn = document.querySelector('#supplier-add-btn');

supplierBtn.addEventListener('click', function (e) {
    e.preventDefault();
    supplierSel.src = imgList.layout;
    supplierSelected = true;
    saveClassChange();
})

supplierVendor1.addEventListener('click', function(e){
    e.preventDefault();
    supplierText1.style.display = 'inline-block';
    supplierText2.style.display = 'none';
    supplierText3.style.display = 'none';
    supplierHeader1.style.display = 'inline-block';
    supplierHeader2.style.display = 'none';
    supplierHeader3.style.display = 'none';
    supplierBullet1.style.display = 'inline-block';
    supplierBullet2.style.display = 'none';
    supplierBullet3.style.display = 'none';

    supplierVendor1.classList.add('door-opt-btn-pressed');
    supplierVendor2.classList.remove('door-opt-btn-pressed');
    supplierVendor3.classList.remove('door-opt-btn-pressed');

    supplier1selected = true;
    supplier2selected = false;
    supplier3selected = false;
    if (size1selected){
        pricing.starting = '$5,500';
    } else if (size2selected){
        pricing.starting = '$8,300';
    } else if (size3selected){
        pricing.starting = '$11,500';
    } else if (size4selected){
        pricing.starting = '$14,400';
    }
    supplierCost.innerText = pricing.starting;
    document.querySelector('#dropdown-supplier').classList.remove('w--open');

    preferenceData.supplier = supplierOpt1.innerText;
})

supplierVendor2.addEventListener('click', function(e){
    e.preventDefault();
    supplierText2.style.display = 'inline-block';
    supplierText1.style.display = 'none';
    supplierText3.style.display = 'none';
    supplierHeader2.style.display = 'inline-block';
    supplierHeader1.style.display = 'none';
    supplierHeader3.style.display = 'none';
    supplierBullet2.style.display = 'inline-block';
    supplierBullet1.style.display = 'none';
    supplierBullet3.style.display = 'none';

    supplierVendor2.classList.add('door-opt-btn-pressed');
    supplierVendor1.classList.remove('door-opt-btn-pressed');
    supplierVendor3.classList.remove('door-opt-btn-pressed');

    supplier2selected = true;
    supplier1selected = false;
    supplier3selected = false;
    if (size1selected){
        pricing.starting = '$6,000';
    } else if (size2selected){
        pricing.starting = '$8,700';
    } else if (size3selected){
        pricing.starting = '$12,500';
    } else if (size4selected){
        pricing.starting = '$16,000';
    }
    supplierCost.innerText = pricing.starting;
    document.querySelector('#dropdown-supplier').classList.remove('w--open');

    preferenceData.supplier = supplierOpt2.innerText;
})

supplierVendor3.addEventListener('click', function(e){
    e.preventDefault();
    supplierText3.style.display = 'inline-block';
    supplierText2.style.display = 'none';
    supplierText1.style.display = 'none';
    supplierHeader3.style.display = 'inline-block';
    supplierHeader2.style.display = 'none';
    supplierHeader1.style.display = 'none';
    supplierBullet3.style.display = 'inline-block';
    supplierBullet2.style.display = 'none';
    supplierBullet1.style.display = 'none';

    supplierVendor3.classList.add('door-opt-btn-pressed');
    supplierVendor2.classList.remove('door-opt-btn-pressed');
    supplierVendor1.classList.remove('door-opt-btn-pressed');

    supplier3selected = true;
    supplier1selected = false;
    supplier2selected = false;
    if (size1selected){
        pricing.starting = '$7,900';
    } else if (size2selected){
        pricing.starting = '$11,400';
    } else if (size3selected){
        pricing.starting = '$17,300';
    } else if (size4selected){
        pricing.starting = '$22,300';
    }
    supplierCost.innerText = pricing.starting;
    document.querySelector('#dropdown-supplier').classList.remove('w--open');

    preferenceData.supplier = supplierOpt3.innerText;
})

supplierSize1.addEventListener('click', function(e){
    e.preventDefault();
    size1selected = true;
    size2selected = false;
    size3selected = false;
    size4selected = false;
    pricing.linear = '12';
    pricing.cabinet = '8';
    pricing.drawer = '4';
    if (supplier1selected){
        pricing.starting = '$5,500';
    } else if (supplier2selected){
        pricing.starting = '$6,000';
    } else if (supplier3selected){
        pricing.starting = '$7,900'
    }
    supplierCost.innerText = pricing.starting;
    supplierFt.innerText = pricing.linear;
    supplierCab.innerText = pricing.cabinet;
    supplierDraw.innerText = pricing.drawer;

    layoutImg1.style.display = 'block';
    layoutImg2.style.display = 'none';
    layoutImg3.style.display = 'none';
    layoutImg4.style.display = 'none';

    supplierSize1.classList.add('door-opt-btn-pressed');
    supplierSize2.classList.remove('door-opt-btn-pressed');
    supplierSize3.classList.remove('door-opt-btn-pressed');
    supplierSize4.classList.remove('door-opt-btn-pressed');

    preferenceData.layout = supplierSize1.innerText;
    imgList.layout = layoutImg1.children[0].src
})
supplierSize2.addEventListener('click', function(e){
    e.preventDefault();
    size2selected = true;
    size1selected = false;
    size3selected = false;
    size4selected = false;
    pricing.linear = '19';
    pricing.cabinet = '10';
    pricing.drawer = '4';
    if (supplier1selected){
        pricing.starting = '$8,300';
    } else if (supplier2selected){
        pricing.starting = '$8,700';
    } else if (supplier3selected){
        pricing.starting = '$11,400'
    }
    supplierCost.innerText = pricing.starting;
    supplierFt.innerText = pricing.linear;
    supplierCab.innerText = pricing.cabinet;
    supplierDraw.innerText = pricing.drawer;

    layoutImg1.style.display = 'none';
    layoutImg2.style.display = 'block';
    layoutImg3.style.display = 'none';
    layoutImg4.style.display = 'none';

    supplierSize1.classList.remove('door-opt-btn-pressed');
    supplierSize2.classList.add('door-opt-btn-pressed');
    supplierSize3.classList.remove('door-opt-btn-pressed');
    supplierSize4.classList.remove('door-opt-btn-pressed');

    preferenceData.layout = supplierSize2.innerText;
    imgList.layout = layoutImg2.children[0].src
})
supplierSize3.addEventListener('click', function(e){
    e.preventDefault();
    size3selected = true;
    size1selected = false;
    size2selected = false;
    size4selected = false;
    pricing.linear = '28';
    pricing.cabinet = '13';
    pricing.drawer = '7';
    if (supplier1selected){
        pricing.starting = '$11,500';
    } else if (supplier2selected){
        pricing.starting = '$12,500';
    } else if (supplier3selected){
        pricing.starting = '$17,300'
    }
    supplierCost.innerText = pricing.starting;
    supplierFt.innerText = pricing.linear;
    supplierCab.innerText = pricing.cabinet;
    supplierDraw.innerText = pricing.drawer;

    layoutImg1.style.display = 'none';
    layoutImg2.style.display = 'none';
    layoutImg3.style.display = 'block';
    layoutImg4.style.display = 'none';

    supplierSize1.classList.remove('door-opt-btn-pressed');
    supplierSize2.classList.remove('door-opt-btn-pressed');
    supplierSize3.classList.add('door-opt-btn-pressed');
    supplierSize4.classList.remove('door-opt-btn-pressed');

    preferenceData.layout = supplierSize3.innerText;
    imgList.layout = layoutImg3.children[0].src
})
supplierSize4.addEventListener('click', function(e){
    e.preventDefault();
    size4selected = true;
    size1selected = false;
    size2selected = false;
    size3selected = false;
    pricing.linear = '35';
    pricing.cabinet = '16';
    pricing.drawer = '12';
    if (supplier1selected){
        pricing.starting = '$14,400';
    } else if (supplier2selected){
        pricing.starting = '$16,000';
    } else if (supplier3selected){
        pricing.starting = '$22,300'
    }
    supplierCost.innerText = pricing.starting;
    supplierFt.innerText = pricing.linear;
    supplierCab.innerText = pricing.cabinet;
    supplierDraw.innerText = pricing.drawer;

    layoutImg1.style.display = 'none';
    layoutImg2.style.display = 'none';
    layoutImg3.style.display = 'none';
    layoutImg4.style.display = 'block';

    supplierSize1.classList.remove('door-opt-btn-pressed');
    supplierSize2.classList.remove('door-opt-btn-pressed');
    supplierSize3.classList.remove('door-opt-btn-pressed');
    supplierSize4.classList.add('door-opt-btn-pressed');

    preferenceData.layout = supplierSize4.innerText;
    imgList.layout = layoutImg4.children[0].src
})

//cabinetry section
let cabinetryImg1 = document.querySelector('#cabinetry-images-1');
let cabinetryImg2 = document.querySelector('#cabinetry-images-2');
let cabinetryImg3 = document.querySelector('#cabinetry-images-3');
let cabinetryImg4 = document.querySelector('#cabinetry-images-4');
let cabinetryImg5 = document.querySelector('#cabinetry-images-5');
let cabinetryImg6 = document.querySelector('#cabinetry-images-6');
let cabinetryHeader1 = document.querySelector('#cabinetry-header-1');
let cabinetryHeader2 = document.querySelector('#cabinetry-header-2');
let cabinetryHeader3 = document.querySelector('#cabinetry-header-3');
let cabinetryHeader4 = document.querySelector('#cabinetry-header-4');
let cabinetryHeader5 = document.querySelector('#cabinetry-header-5');
let cabinetryHeader6 = document.querySelector('#cabinetry-header-6');
let cabinetryColor1 = document.querySelector('#cabinetry-color-1');
let cabinetryColor2 = document.querySelector('#cabinetry-color-2');
let cabinetryColor3 = document.querySelector('#cabinetry-color-3');
let cabinetryColor4 = document.querySelector('#cabinetry-color-4');
let cabinetryColor5 = document.querySelector('#cabinetry-color-5');
let cabinetryColor6 = document.querySelector('#cabinetry-color-6');
let cabinetryText1 = document.querySelector('#cabinetry-text-1');
let cabinetryText2 = document.querySelector('#cabinetry-text-2');
let cabinetryText3 = document.querySelector('#cabinetry-text-3');
let cabinetryText4 = document.querySelector('#cabinetry-text-4');
let cabinetryText5 = document.querySelector('#cabinetry-text-5');
let cabinetryText6 = document.querySelector('#cabinetry-text-6');
let cabinetrySel = document.querySelector('#cabinetry-select');
let cabinetrySelText = document.querySelector('#cabinetry-sel-text')

let cabinetryBtn = document.querySelector('#cabinetry-add-btn');
let cabinetryBtn2 = document.querySelector('#cabinetry-add-btn-2');

cabinetryBtn.addEventListener('click', function (e) {
    e.preventDefault();
    cabinetrySel.src = imgList.cabinetry;
    cabinetrySelText.style.zIndex = "-1";
    cabinetrySelected = true;
    saveClassChange();
})
cabinetryBtn2.addEventListener('click', function (e) {
    e.preventDefault();
    cabinetrySel.src = imgList.cabinetry;
    cabinetrySelText.style.zIndex = "-1";
    cabinetrySelected = true;
    saveClassChange();
})

cabinetryColor1.addEventListener('click', function (e) {
    e.preventDefault();
    cabinetryImg1.style.display = 'block';
    cabinetryText1.style.display = 'inline-block';
    cabinetryHeader1.style.display = 'inline-block';

    cabinetryImg2.style.display = 'none';
    cabinetryText2.style.display = 'none';
    cabinetryHeader2.style.display = 'none';

    cabinetryImg3.style.display = 'none';
    cabinetryText3.style.display = 'none';
    cabinetryHeader3.style.display = 'none';

    cabinetryImg4.style.display = 'none';
    cabinetryText4.style.display = 'none';
    cabinetryHeader4.style.display = 'none';

    cabinetryImg5.style.display = 'none';
    cabinetryText5.style.display = 'none';
    cabinetryHeader5.style.display = 'none';

    cabinetryImg6.style.display = 'none';
    cabinetryText6.style.display = 'none';
    cabinetryHeader6.style.display = 'none';

    cabinetryColor1.style.border = '5px solid #26cbff';
    cabinetryColor2.style.border = 'none';
    cabinetryColor3.style.border = 'none';
    cabinetryColor4.style.border = 'none';
    cabinetryColor5.style.border = 'none';
    cabinetryColor6.style.border = 'none';

    preferenceData.cabinetry = cabinetryText1.children[0].innerText;
    imgList.cabinetry = cabinetryImg1.children[0].src;
})
cabinetryColor2.addEventListener('click', function (e) {
    e.preventDefault();
    cabinetryImg2.style.display = 'block';
    cabinetryText2.style.display = 'inline-block';
    cabinetryHeader2.style.display = 'inline-block';

    cabinetryImg1.style.display = 'none';
    cabinetryText1.style.display = 'none';
    cabinetryHeader1.style.display = 'none';

    cabinetryImg3.style.display = 'none';
    cabinetryText3.style.display = 'none';
    cabinetryHeader3.style.display = 'none';

    cabinetryColor1.style.border = 'none';
    cabinetryColor2.style.border = '5px solid #26cbff';
    cabinetryColor3.style.border = 'none';

    cabinetryImg4.style.display = 'none';
    cabinetryText4.style.display = 'none';
    cabinetryHeader4.style.display = 'none';

    cabinetryImg5.style.display = 'none';
    cabinetryText5.style.display = 'none';
    cabinetryHeader5.style.display = 'none';

    cabinetryImg6.style.display = 'none';
    cabinetryText6.style.display = 'none';
    cabinetryHeader6.style.display = 'none';

    cabinetryColor1.style.border = 'none';
    cabinetryColor2.style.border = '5px solid #26cbff';
    cabinetryColor3.style.border = 'none';
    cabinetryColor4.style.border = 'none';
    cabinetryColor5.style.border = 'none';
    cabinetryColor6.style.border = 'none';
    
    preferenceData.cabinetry = cabinetryText2.children[0].innerText;
    imgList.cabinetry = cabinetryImg2.children[0].src;
})
cabinetryColor3.addEventListener('click', function (e) {
    e.preventDefault();
    cabinetryImg3.style.display = 'block';
    cabinetryText3.style.display = 'inline-block';
    cabinetryHeader3.style.display = 'inline-block';

    cabinetryImg1.style.display = 'none';
    cabinetryText1.style.display = 'none';
    cabinetryHeader1.style.display = 'none';

    cabinetryImg2.style.display = 'none';
    cabinetryText2.style.display = 'none';
    cabinetryHeader2.style.display = 'none';
    
    cabinetryImg4.style.display = 'none';
    cabinetryText4.style.display = 'none';
    cabinetryHeader4.style.display = 'none';

    cabinetryImg5.style.display = 'none';
    cabinetryText5.style.display = 'none';
    cabinetryHeader5.style.display = 'none';

    cabinetryImg6.style.display = 'none';
    cabinetryText6.style.display = 'none';
    cabinetryHeader6.style.display = 'none';

    cabinetryColor1.style.border = 'none';
    cabinetryColor2.style.border = 'none';
    cabinetryColor3.style.border = '5px solid #26cbff';
    cabinetryColor4.style.border = 'none';
    cabinetryColor5.style.border = 'none';
    cabinetryColor6.style.border = 'none';

    preferenceData.cabinetry = cabinetryText3.children[0].innerText;
    imgList.cabinetry = cabinetryImg3.children[0].src;
})
cabinetryColor4.addEventListener('click', function (e) {
    e.preventDefault();
    cabinetryImg4.style.display = 'block';
    cabinetryText4.style.display = 'inline-block';
    cabinetryHeader4.style.display = 'inline-block';

    cabinetryImg1.style.display = 'none';
    cabinetryText1.style.display = 'none';
    cabinetryHeader1.style.display = 'none';

    cabinetryImg2.style.display = 'none';
    cabinetryText2.style.display = 'none';
    cabinetryHeader2.style.display = 'none';
    
    cabinetryImg3.style.display = 'none';
    cabinetryText3.style.display = 'none';
    cabinetryHeader3.style.display = 'none';

    cabinetryImg5.style.display = 'none';
    cabinetryText5.style.display = 'none';
    cabinetryHeader5.style.display = 'none';

    cabinetryImg6.style.display = 'none';
    cabinetryText6.style.display = 'none';
    cabinetryHeader6.style.display = 'none';

    cabinetryColor1.style.border = 'none';
    cabinetryColor2.style.border = 'none';
    cabinetryColor3.style.border = 'none';
    cabinetryColor4.style.border = '5px solid #26cbff';
    cabinetryColor5.style.border = 'none';
    cabinetryColor6.style.border = 'none';

    preferenceData.cabinetry = cabinetryText4.children[0].innerText;
    imgList.cabinetry = cabinetryImg4.children[0].src;
})
cabinetryColor5.addEventListener('click', function (e) {
    e.preventDefault();
    cabinetryImg5.style.display = 'block';
    cabinetryText5.style.display = 'inline-block';
    cabinetryHeader5.style.display = 'inline-block';

    cabinetryImg1.style.display = 'none';
    cabinetryText1.style.display = 'none';
    cabinetryHeader1.style.display = 'none';

    cabinetryImg2.style.display = 'none';
    cabinetryText2.style.display = 'none';
    cabinetryHeader2.style.display = 'none';
    
    cabinetryImg3.style.display = 'none';
    cabinetryText3.style.display = 'none';
    cabinetryHeader3.style.display = 'none';

    cabinetryImg4.style.display = 'none';
    cabinetryText4.style.display = 'none';
    cabinetryHeader4.style.display = 'none';

    cabinetryImg6.style.display = 'none';
    cabinetryText6.style.display = 'none';
    cabinetryHeader6.style.display = 'none';

    cabinetryColor1.style.border = 'none';
    cabinetryColor2.style.border = 'none';
    cabinetryColor3.style.border = 'none';
    cabinetryColor4.style.border = 'none';
    cabinetryColor5.style.border = '5px solid #26cbff';
    cabinetryColor6.style.border = 'none';

    preferenceData.cabinetry = cabinetryText5.children[0].innerText;
    imgList.cabinetry = cabinetryImg5.children[0].src;
})
cabinetryColor6.addEventListener('click', function (e) {
    e.preventDefault();
    cabinetryImg6.style.display = 'block';
    cabinetryText6.style.display = 'inline-block';
    cabinetryHeader6.style.display = 'inline-block';

    cabinetryImg1.style.display = 'none';
    cabinetryText1.style.display = 'none';
    cabinetryHeader1.style.display = 'none';

    cabinetryImg2.style.display = 'none';
    cabinetryText2.style.display = 'none';
    cabinetryHeader2.style.display = 'none';
    
    cabinetryImg3.style.display = 'none';
    cabinetryText3.style.display = 'none';
    cabinetryHeader3.style.display = 'none';

    cabinetryImg4.style.display = 'none';
    cabinetryText4.style.display = 'none';
    cabinetryHeader4.style.display = 'none';

    cabinetryImg5.style.display = 'none';
    cabinetryText5.style.display = 'none';
    cabinetryHeader5.style.display = 'none';

    cabinetryColor1.style.border = 'none';
    cabinetryColor2.style.border = 'none';
    cabinetryColor3.style.border = 'none';
    cabinetryColor4.style.border = 'none';
    cabinetryColor5.style.border = 'none';
    cabinetryColor6.style.border = '5px solid #26cbff';

    preferenceData.cabinetry = cabinetryText6.children[0].innerText;
    imgList.cabinetry = cabinetryImg6.children[0].src;
})

//cabinet hardware section
let cabinethwImg1 = document.querySelector('#cabinet-hw-images-1');
let cabinethwImg2 = document.querySelector('#cabinet-hw-images-2');
let cabinethwImg3 = document.querySelector('#cabinet-hw-images-3');
let cabinethwImg4 = document.querySelector('#cabinet-hw-images-4');
let cabinethwImg5 = document.querySelector('#cabinet-hw-images-5');
let cabinethwImg6 = document.querySelector('#cabinet-hw-images-6');
let cabinethwHeader1 = document.querySelector('#cabinet-hw-header-1');
let cabinethwHeader2 = document.querySelector('#cabinet-hw-header-2');
let cabinethwHeader3 = document.querySelector('#cabinet-hw-header-3');
let cabinethwHeader4 = document.querySelector('#cabinet-hw-header-4');
let cabinethwHeader5 = document.querySelector('#cabinet-hw-header-5');
let cabinethwHeader6 = document.querySelector('#cabinet-hw-header-6');
let cabinethwColor1 = document.querySelector('#cabinet-hw-color-1');
let cabinethwColor2 = document.querySelector('#cabinet-hw-color-2');
let cabinethwColor3 = document.querySelector('#cabinet-hw-color-3');
let cabinethwColor4 = document.querySelector('#cabinet-hw-color-4');
let cabinethwColor5 = document.querySelector('#cabinet-hw-color-5');
let cabinethwColor6 = document.querySelector('#cabinet-hw-color-6');
let cabinethwText1 = document.querySelector('#cabinet-hw-text-1');
let cabinethwText2 = document.querySelector('#cabinet-hw-text-2');
let cabinethwText3 = document.querySelector('#cabinet-hw-text-3');
let cabinethwText4 = document.querySelector('#cabinet-hw-text-4');
let cabinethwText5 = document.querySelector('#cabinet-hw-text-5');
let cabinethwText6 = document.querySelector('#cabinet-hw-text-6');
let cabinethwSel = document.querySelector('#cabinet-hw-select');
let cabinethwSelText = document.querySelector('#cabinethw-sel-text')

let cabinethwBtn = document.querySelector('#cabinet-hw-add-btn');
let cabinethwBtn2 = document.querySelector('#cabinet-hw-add-btn-2');

cabinethwBtn.addEventListener('click', function (e) {
    e.preventDefault();
    cabinethwSel.src = imgList.cabinethw;
    cabinethwSelText.style.zIndex = "-1";
    cabinethwSelected = true;
    saveClassChange();
})
cabinethwBtn2.addEventListener('click', function (e) {
    e.preventDefault();
    cabinethwSel.src = imgList.cabinethw;
    cabinethwSelText.style.zIndex = "-1";
    cabinethwSelected = true;
    saveClassChange();
})

cabinethwColor1.addEventListener('click', function (e) {
    e.preventDefault();
    cabinethwImg1.style.display = 'block';
    cabinethwText1.style.display = 'inline-block';
    cabinethwHeader1.style.display = 'inline-block';

    cabinethwImg2.style.display = 'none';
    cabinethwText2.style.display = 'none';
    cabinethwHeader2.style.display = 'none';

    cabinethwImg3.style.display = 'none';
    cabinethwText3.style.display = 'none';
    cabinethwHeader3.style.display = 'none';

    cabinethwImg4.style.display = 'none';
    cabinethwText4.style.display = 'none';
    cabinethwHeader4.style.display = 'none';

    cabinethwImg5.style.display = 'none';
    cabinethwText5.style.display = 'none';
    cabinethwHeader5.style.display = 'none';

    cabinethwImg6.style.display = 'none';
    cabinethwText6.style.display = 'none';
    cabinethwHeader6.style.display = 'none';

    cabinethwColor1.style.border = '5px solid #26cbff';
    cabinethwColor2.style.border = 'none';
    cabinethwColor3.style.border = 'none';
    cabinethwColor4.style.border = 'none';
    cabinethwColor5.style.border = 'none';
    cabinethwColor6.style.border = 'none';

    preferenceData.cabinethw = cabinethwText1.children[0].innerText;
    imgList.cabinethw = cabinethwImg1.children[0].src
})
cabinethwColor2.addEventListener('click', function (e) {
    e.preventDefault();
    cabinethwImg2.style.display = 'block';
    cabinethwText2.style.display = 'inline-block';
    cabinethwHeader2.style.display = 'inline-block';

    cabinethwImg1.style.display = 'none';
    cabinethwText1.style.display = 'none';
    cabinethwHeader1.style.display = 'none';

    cabinethwImg3.style.display = 'none';
    cabinethwText3.style.display = 'none';
    cabinethwHeader3.style.display = 'none';

    cabinethwImg4.style.display = 'none';
    cabinethwText4.style.display = 'none';
    cabinethwHeader4.style.display = 'none';

    cabinethwImg5.style.display = 'none';
    cabinethwText5.style.display = 'none';
    cabinethwHeader5.style.display = 'none';

    cabinethwImg6.style.display = 'none';
    cabinethwText6.style.display = 'none';
    cabinethwHeader6.style.display = 'none';

    cabinethwColor1.style.border = 'none';
    cabinethwColor2.style.border = '5px solid #26cbff';
    cabinethwColor3.style.border = 'none';
    cabinethwColor4.style.border = 'none';
    cabinethwColor5.style.border = 'none';
    cabinethwColor6.style.border = 'none';

    preferenceData.cabinethw = cabinethwText2.children[0].innerText;
    imgList.cabinethw = cabinethwImg2.children[0].src
})
cabinethwColor3.addEventListener('click', function (e) {
    e.preventDefault();
    cabinethwImg3.style.display = 'block';
    cabinethwText3.style.display = 'inline-block';
    cabinethwHeader3.style.display = 'inline-block';

    cabinethwImg1.style.display = 'none';
    cabinethwText1.style.display = 'none';
    cabinethwHeader1.style.display = 'none';

    cabinethwImg2.style.display = 'none';
    cabinethwText2.style.display = 'none';
    cabinethwHeader2.style.display = 'none';

    cabinethwImg4.style.display = 'none';
    cabinethwText4.style.display = 'none';
    cabinethwHeader4.style.display = 'none';

    cabinethwImg5.style.display = 'none';
    cabinethwText5.style.display = 'none';
    cabinethwHeader5.style.display = 'none';

    cabinethwImg6.style.display = 'none';
    cabinethwText6.style.display = 'none';
    cabinethwHeader6.style.display = 'none';

    cabinethwColor1.style.border = 'none';
    cabinethwColor2.style.border = 'none';
    cabinethwColor3.style.border = '5px solid #26cbff';
    cabinethwColor4.style.border = 'none';
    cabinethwColor5.style.border = 'none';
    cabinethwColor6.style.border = 'none';

    preferenceData.cabinethw = cabinethwText3.children[0].innerText;
    imgList.cabinethw = cabinethwImg3.children[0].src
})
cabinethwColor4.addEventListener('click', function (e) {
    e.preventDefault();
    cabinethwImg4.style.display = 'block';
    cabinethwText4.style.display = 'inline-block';
    cabinethwHeader4.style.display = 'inline-block';

    cabinethwImg1.style.display = 'none';
    cabinethwText1.style.display = 'none';
    cabinethwHeader1.style.display = 'none';

    cabinethwImg2.style.display = 'none';
    cabinethwText2.style.display = 'none';
    cabinethwHeader2.style.display = 'none';

    cabinethwImg3.style.display = 'none';
    cabinethwText3.style.display = 'none';
    cabinethwHeader3.style.display = 'none';

    cabinethwImg5.style.display = 'none';
    cabinethwText5.style.display = 'none';
    cabinethwHeader5.style.display = 'none';

    cabinethwImg6.style.display = 'none';
    cabinethwText6.style.display = 'none';
    cabinethwHeader6.style.display = 'none';

    cabinethwColor1.style.border = 'none';
    cabinethwColor2.style.border = 'none';
    cabinethwColor3.style.border = 'none';
    cabinethwColor4.style.border = '5px solid #26cbff';
    cabinethwColor5.style.border = 'none';
    cabinethwColor6.style.border = 'none';

    preferenceData.cabinethw = cabinethwText4.children[0].innerText;
    imgList.cabinethw = cabinethwImg4.children[0].src
})
cabinethwColor5.addEventListener('click', function (e) {
    e.preventDefault();
    cabinethwImg5.style.display = 'block';
    cabinethwText5.style.display = 'inline-block';
    cabinethwHeader5.style.display = 'inline-block';

    cabinethwImg1.style.display = 'none';
    cabinethwText1.style.display = 'none';
    cabinethwHeader1.style.display = 'none';

    cabinethwImg2.style.display = 'none';
    cabinethwText2.style.display = 'none';
    cabinethwHeader2.style.display = 'none';

    cabinethwImg3.style.display = 'none';
    cabinethwText3.style.display = 'none';
    cabinethwHeader3.style.display = 'none';

    cabinethwImg4.style.display = 'none';
    cabinethwText4.style.display = 'none';
    cabinethwHeader4.style.display = 'none';

    cabinethwImg6.style.display = 'none';
    cabinethwText6.style.display = 'none';
    cabinethwHeader6.style.display = 'none';

    cabinethwColor1.style.border = 'none';
    cabinethwColor2.style.border = 'none';
    cabinethwColor3.style.border = 'none';
    cabinethwColor4.style.border = 'none';
    cabinethwColor5.style.border = '5px solid #26cbff';
    cabinethwColor6.style.border = 'none';

    preferenceData.cabinethw = cabinethwText5.children[0].innerText;
    imgList.cabinethw = cabinethwImg5.children[0].src
})
cabinethwColor6.addEventListener('click', function (e) {
    e.preventDefault();
    cabinethwImg6.style.display = 'block';
    cabinethwText6.style.display = 'inline-block';
    cabinethwHeader6.style.display = 'inline-block';

    cabinethwImg1.style.display = 'none';
    cabinethwText1.style.display = 'none';
    cabinethwHeader1.style.display = 'none';

    cabinethwImg2.style.display = 'none';
    cabinethwText2.style.display = 'none';
    cabinethwHeader2.style.display = 'none';

    cabinethwImg3.style.display = 'none';
    cabinethwText3.style.display = 'none';
    cabinethwHeader3.style.display = 'none';

    cabinethwImg4.style.display = 'none';
    cabinethwText4.style.display = 'none';
    cabinethwHeader4.style.display = 'none';

    cabinethwImg5.style.display = 'none';
    cabinethwText5.style.display = 'none';
    cabinethwHeader5.style.display = 'none';

    cabinethwColor1.style.border = 'none';
    cabinethwColor2.style.border = 'none';
    cabinethwColor3.style.border = 'none';
    cabinethwColor4.style.border = 'none';
    cabinethwColor5.style.border = 'none';
    cabinethwColor6.style.border = '5px solid #26cbff';

    preferenceData.cabinethw = cabinethwText6.children[0].innerText;
    imgList.cabinethw = cabinethwImg6.children[0].src
})

//countertops section
let countertopImg1 = document.querySelector('#countertop-images-1');
let countertopImg2 = document.querySelector('#countertop-images-2');
let countertopImg3 = document.querySelector('#countertop-images-3');
let countertopImg4 = document.querySelector('#countertop-images-4');
let countertopImg5 = document.querySelector('#countertop-images-5');
let countertopImg6 = document.querySelector('#countertop-images-6');
let countertopHeader1 = document.querySelector('#countertop-header-1');
let countertopHeader2 = document.querySelector('#countertop-header-2');
let countertopHeader3 = document.querySelector('#countertop-header-3');
let countertopHeader4 = document.querySelector('#countertop-header-4');
let countertopHeader5 = document.querySelector('#countertop-header-5');
let countertopHeader6 = document.querySelector('#countertop-header-6');
let countertopColor1 = document.querySelector('#countertop-color-1');
let countertopColor2 = document.querySelector('#countertop-color-2');
let countertopColor3 = document.querySelector('#countertop-color-3');
let countertopColor4 = document.querySelector('#countertop-color-4');
let countertopColor5 = document.querySelector('#countertop-color-5');
let countertopColor6 = document.querySelector('#countertop-color-6');
let countertopText1 = document.querySelector('#countertop-text-1');
let countertopText2 = document.querySelector('#countertop-text-2');
let countertopText3 = document.querySelector('#countertop-text-3');
let countertopText4 = document.querySelector('#countertop-text-4');
let countertopText5 = document.querySelector('#countertop-text-5');
let countertopText6 = document.querySelector('#countertop-text-6');
let countertopSel = document.querySelector('#countertop-select');
let countertopSelText = document.querySelector('#countertop-sel-text')

let countertopBtn = document.querySelector('#countertop-add-btn');
let countertopBtn2 = document.querySelector('#countertop-add-btn-2');

countertopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    countertopSel.src = imgList.countertop;
    countertopSelText.style.zIndex = "-1";
    countertopSelected = true;
    saveClassChange();
})
countertopBtn2.addEventListener('click', function (e) {
    e.preventDefault();
    countertopSel.src = imgList.countertop;
    countertopSelText.style.zIndex = "-1";
    countertopSelected = true;
    saveClassChange();
})

countertopColor1.addEventListener('click', function (e) {
    e.preventDefault();
    countertopImg1.style.display = 'block';
    countertopText1.style.display = 'inline-block';
    countertopHeader1.style.display = 'inline-block';

    countertopImg2.style.display = 'none';
    countertopText2.style.display = 'none';
    countertopHeader2.style.display = 'none';

    countertopImg3.style.display = 'none';
    countertopText3.style.display = 'none';
    countertopHeader3.style.display = 'none';

    countertopImg4.style.display = 'none';
    countertopText4.style.display = 'none';
    countertopHeader4.style.display = 'none';

    countertopImg5.style.display = 'none';
    countertopText5.style.display = 'none';
    countertopHeader5.style.display = 'none';

    countertopImg6.style.display = 'none';
    countertopText6.style.display = 'none';
    countertopHeader6.style.display = 'none';

    countertopColor1.style.border = '5px solid #26cbff';
    countertopColor2.style.border = 'none';
    countertopColor3.style.border = 'none';
    countertopColor4.style.border = 'none';
    countertopColor5.style.border = 'none';
    countertopColor6.style.border = 'none';

    preferenceData.countertop = countertopText1.children[0].innerText;
    imgList.countertop = countertopImg1.children[0].src
})
countertopColor2.addEventListener('click', function (e) {
    e.preventDefault();
    countertopImg2.style.display = 'block';
    countertopText2.style.display = 'inline-block';
    countertopHeader2.style.display = 'inline-block';

    countertopImg1.style.display = 'none';
    countertopText1.style.display = 'none';
    countertopHeader1.style.display = 'none';

    countertopImg3.style.display = 'none';
    countertopText3.style.display = 'none';
    countertopHeader3.style.display = 'none';

    countertopImg4.style.display = 'none';
    countertopText4.style.display = 'none';
    countertopHeader4.style.display = 'none';

    countertopImg5.style.display = 'none';
    countertopText5.style.display = 'none';
    countertopHeader5.style.display = 'none';

    countertopImg6.style.display = 'none';
    countertopText6.style.display = 'none';
    countertopHeader6.style.display = 'none';

    countertopColor1.style.border = 'none';
    countertopColor2.style.border = '5px solid #26cbff';
    countertopColor3.style.border = 'none';
    countertopColor4.style.border = 'none';
    countertopColor5.style.border = 'none';
    countertopColor6.style.border = 'none';

    preferenceData.countertop = countertopText2.children[0].innerText;
    imgList.countertop = countertopImg2.children[0].src
})
countertopColor3.addEventListener('click', function (e) {
    e.preventDefault();
    countertopImg3.style.display = 'block';
    countertopText3.style.display = 'inline-block';
    countertopHeader3.style.display = 'inline-block';

    countertopImg1.style.display = 'none';
    countertopText1.style.display = 'none';
    countertopHeader1.style.display = 'none';

    countertopImg2.style.display = 'none';
    countertopText2.style.display = 'none';
    countertopHeader2.style.display = 'none';

    countertopImg4.style.display = 'none';
    countertopText4.style.display = 'none';
    countertopHeader4.style.display = 'none';

    countertopImg5.style.display = 'none';
    countertopText5.style.display = 'none';
    countertopHeader5.style.display = 'none';

    countertopImg6.style.display = 'none';
    countertopText6.style.display = 'none';
    countertopHeader6.style.display = 'none';

    countertopColor1.style.border = 'none';
    countertopColor2.style.border = 'none';
    countertopColor3.style.border = '5px solid #26cbff';
    countertopColor4.style.border = 'none';
    countertopColor5.style.border = 'none';
    countertopColor6.style.border = 'none';

    preferenceData.countertop = countertopText3.children[0].innerText;
    imgList.countertop = countertopImg3.children[0].src
})
countertopColor4.addEventListener('click', function (e) {
    e.preventDefault();
    countertopImg4.style.display = 'block';
    countertopText4.style.display = 'inline-block';
    countertopHeader4.style.display = 'inline-block';

    countertopImg1.style.display = 'none';
    countertopText1.style.display = 'none';
    countertopHeader1.style.display = 'none';

    countertopImg2.style.display = 'none';
    countertopText2.style.display = 'none';
    countertopHeader2.style.display = 'none';

    countertopImg3.style.display = 'none';
    countertopText3.style.display = 'none';
    countertopHeader3.style.display = 'none';

    countertopImg5.style.display = 'none';
    countertopText5.style.display = 'none';
    countertopHeader5.style.display = 'none';

    countertopImg6.style.display = 'none';
    countertopText6.style.display = 'none';
    countertopHeader6.style.display = 'none';

    countertopColor1.style.border = 'none';
    countertopColor2.style.border = 'none';
    countertopColor3.style.border = 'none';
    countertopColor4.style.border = '5px solid #26cbff';
    countertopColor5.style.border = 'none';
    countertopColor6.style.border = 'none';

    preferenceData.countertop = countertopText4.children[0].innerText;
    imgList.countertop = countertopImg4.children[0].src
})
countertopColor5.addEventListener('click', function (e) {
    e.preventDefault();
    countertopImg5.style.display = 'block';
    countertopText5.style.display = 'inline-block';
    countertopHeader5.style.display = 'inline-block';

    countertopImg1.style.display = 'none';
    countertopText1.style.display = 'none';
    countertopHeader1.style.display = 'none';

    countertopImg2.style.display = 'none';
    countertopText2.style.display = 'none';
    countertopHeader2.style.display = 'none';

    countertopImg3.style.display = 'none';
    countertopText3.style.display = 'none';
    countertopHeader3.style.display = 'none';

    countertopImg4.style.display = 'none';
    countertopText4.style.display = 'none';
    countertopHeader4.style.display = 'none';

    countertopImg6.style.display = 'none';
    countertopText6.style.display = 'none';
    countertopHeader6.style.display = 'none';

    countertopColor1.style.border = 'none';
    countertopColor2.style.border = 'none';
    countertopColor3.style.border = 'none';
    countertopColor4.style.border = 'none';
    countertopColor5.style.border = '5px solid #26cbff';
    countertopColor6.style.border = 'none';

    preferenceData.countertop = countertopText5.children[0].innerText;
    imgList.countertop = countertopImg5.children[0].src
})
countertopColor6.addEventListener('click', function (e) {
    e.preventDefault();
    countertopImg6.style.display = 'block';
    countertopText6.style.display = 'inline-block';
    countertopHeader6.style.display = 'inline-block';

    countertopImg1.style.display = 'none';
    countertopText1.style.display = 'none';
    countertopHeader1.style.display = 'none';

    countertopImg2.style.display = 'none';
    countertopText2.style.display = 'none';
    countertopHeader2.style.display = 'none';

    countertopImg3.style.display = 'none';
    countertopText3.style.display = 'none';
    countertopHeader3.style.display = 'none';

    countertopImg5.style.display = 'none';
    countertopText5.style.display = 'none';
    countertopHeader5.style.display = 'none';

    countertopImg4.style.display = 'none';
    countertopText4.style.display = 'none';
    countertopHeader4.style.display = 'none';

    countertopColor1.style.border = 'none';
    countertopColor2.style.border = 'none';
    countertopColor3.style.border = 'none';
    countertopColor4.style.border = 'none';
    countertopColor5.style.border = 'none';
    countertopColor6.style.border = '5px solid #26cbff';

    preferenceData.countertop = countertopText6.children[0].innerText;
    imgList.countertop = countertopImg6.children[0].src
})

//backsplash section
let backsplashImg1 = document.querySelector('#backsplash-images-1');
let backsplashImg2 = document.querySelector('#backsplash-images-2');
let backsplashImg3 = document.querySelector('#backsplash-images-3');
let backsplashImg4 = document.querySelector('#backsplash-images-4');
let backsplashImg5 = document.querySelector('#backsplash-images-5');
let backsplashImg6 = document.querySelector('#backsplash-images-6');
let backsplashHeader1 = document.querySelector('#backsplash-header-1');
let backsplashHeader2 = document.querySelector('#backsplash-header-2');
let backsplashHeader3 = document.querySelector('#backsplash-header-3');
let backsplashHeader4 = document.querySelector('#backsplash-header-4');
let backsplashHeader5 = document.querySelector('#backsplash-header-5');
let backsplashHeader6 = document.querySelector('#backsplash-header-6');
let backsplashColor1 = document.querySelector('#backsplash-color-1');
let backsplashColor2 = document.querySelector('#backsplash-color-2');
let backsplashColor3 = document.querySelector('#backsplash-color-3');
let backsplashColor4 = document.querySelector('#backsplash-color-4');
let backsplashColor5 = document.querySelector('#backsplash-color-5');
let backsplashColor6 = document.querySelector('#backsplash-color-6');
let backsplashText1 = document.querySelector('#backsplash-text-1');
let backsplashText2 = document.querySelector('#backsplash-text-2');
let backsplashText3 = document.querySelector('#backsplash-text-3');
let backsplashText4 = document.querySelector('#backsplash-text-4');
let backsplashText5 = document.querySelector('#backsplash-text-5');
let backsplashText6 = document.querySelector('#backsplash-text-6');
let backsplashSel = document.querySelector('#backsplash-select');
let backsplashSelText = document.querySelector('#backsplash-sel-text')

let backsplashBtn = document.querySelector('#backsplash-add-btn');
let backsplashBtn2 = document.querySelector('#backsplash-add-btn-2');

backsplashBtn.addEventListener('click', function (e) {
    e.preventDefault();
    backsplashSel.src = imgList.backsplash;
    backsplashSelText.style.zIndex = "-1";
    backsplashSelected = true;
    saveClassChange();
})
backsplashBtn2.addEventListener('click', function (e) {
    e.preventDefault();
    backsplashSel.src = imgList.backsplash;
    backsplashSelText.style.zIndex = "-1";
    backsplashSelected = true;
    saveClassChange();
})

backsplashColor1.addEventListener('click', function (e) {
    e.preventDefault();
    backsplashImg1.style.display = 'block';
    backsplashText1.style.display = 'inline-block';
    backsplashHeader1.style.display = 'inline-block';

    backsplashImg2.style.display = 'none';
    backsplashText2.style.display = 'none';
    backsplashHeader2.style.display = 'none';

    backsplashImg3.style.display = 'none';
    backsplashText3.style.display = 'none';
    backsplashHeader3.style.display = 'none';

    backsplashImg4.style.display = 'none';
    backsplashText4.style.display = 'none';
    backsplashHeader4.style.display = 'none';

    backsplashImg5.style.display = 'none';
    backsplashText5.style.display = 'none';
    backsplashHeader5.style.display = 'none';

    backsplashImg6.style.display = 'none';
    backsplashText6.style.display = 'none';
    backsplashHeader6.style.display = 'none';

    backsplashColor1.style.border = '5px solid #26cbff';
    backsplashColor2.style.border = 'none';
    backsplashColor3.style.border = 'none';
    backsplashColor4.style.border = 'none';
    backsplashColor5.style.border = 'none';
    backsplashColor6.style.border = 'none';

    preferenceData.backsplash = backsplashText1.children[0].innerText;
    imgList.backsplash = backsplashImg1.children[0].src;
})
backsplashColor2.addEventListener('click', function (e) {
    e.preventDefault();
    backsplashImg2.style.display = 'block';
    backsplashText2.style.display = 'inline-block';
    backsplashHeader2.style.display = 'inline-block';

    backsplashImg1.style.display = 'none';
    backsplashText1.style.display = 'none';
    backsplashHeader1.style.display = 'none';

    backsplashImg3.style.display = 'none';
    backsplashText3.style.display = 'none';
    backsplashHeader3.style.display = 'none';

    backsplashImg4.style.display = 'none';
    backsplashText4.style.display = 'none';
    backsplashHeader4.style.display = 'none';

    backsplashImg5.style.display = 'none';
    backsplashText5.style.display = 'none';
    backsplashHeader5.style.display = 'none';

    backsplashImg6.style.display = 'none';
    backsplashText6.style.display = 'none';
    backsplashHeader6.style.display = 'none';

    backsplashColor1.style.border = 'none';
    backsplashColor2.style.border = '5px solid #26cbff';
    backsplashColor3.style.border = 'none';
    backsplashColor4.style.border = 'none';
    backsplashColor5.style.border = 'none';
    backsplashColor6.style.border = 'none';

    preferenceData.backsplash = backsplashText2.children[0].innerText;
    imgList.backsplash = backsplashImg2.children[0].src;
})
backsplashColor3.addEventListener('click', function (e) {
    e.preventDefault();
    backsplashImg3.style.display = 'block';
    backsplashText3.style.display = 'inline-block';
    backsplashHeader3.style.display = 'inline-block';

    backsplashImg1.style.display = 'none';
    backsplashText1.style.display = 'none';
    backsplashHeader1.style.display = 'none';

    backsplashImg2.style.display = 'none';
    backsplashText2.style.display = 'none';
    backsplashHeader2.style.display = 'none';

    backsplashImg4.style.display = 'none';
    backsplashText4.style.display = 'none';
    backsplashHeader4.style.display = 'none';

    backsplashImg5.style.display = 'none';
    backsplashText5.style.display = 'none';
    backsplashHeader5.style.display = 'none';

    backsplashImg6.style.display = 'none';
    backsplashText6.style.display = 'none';
    backsplashHeader6.style.display = 'none';

    backsplashColor1.style.border = 'none';
    backsplashColor2.style.border = 'none';
    backsplashColor3.style.border = '5px solid #26cbff';
    backsplashColor4.style.border = 'none';
    backsplashColor5.style.border = 'none';
    backsplashColor6.style.border = 'none';

    preferenceData.backsplash = backsplashText3.children[0].innerText;
    imgList.backsplash = backsplashImg3.children[0].src;
})
backsplashColor4.addEventListener('click', function (e) {
    e.preventDefault();
    backsplashImg4.style.display = 'block';
    backsplashText4.style.display = 'inline-block';
    backsplashHeader4.style.display = 'inline-block';

    backsplashImg1.style.display = 'none';
    backsplashText1.style.display = 'none';
    backsplashHeader1.style.display = 'none';

    backsplashImg2.style.display = 'none';
    backsplashText2.style.display = 'none';
    backsplashHeader2.style.display = 'none';

    backsplashImg3.style.display = 'none';
    backsplashText3.style.display = 'none';
    backsplashHeader3.style.display = 'none';

    backsplashImg5.style.display = 'none';
    backsplashText5.style.display = 'none';
    backsplashHeader5.style.display = 'none';

    backsplashImg6.style.display = 'none';
    backsplashText6.style.display = 'none';
    backsplashHeader6.style.display = 'none';

    backsplashColor1.style.border = 'none';
    backsplashColor2.style.border = 'none';
    backsplashColor3.style.border = 'none';
    backsplashColor4.style.border = '5px solid #26cbff';
    backsplashColor5.style.border = 'none';
    backsplashColor6.style.border = 'none';

    preferenceData.backsplash = backsplashText4.children[0].innerText;
    imgList.backsplash = backsplashImg4.children[0].src;
})
backsplashColor5.addEventListener('click', function (e) {
    e.preventDefault();
    backsplashImg5.style.display = 'block';
    backsplashText5.style.display = 'inline-block';
    backsplashHeader5.style.display = 'inline-block';

    backsplashImg1.style.display = 'none';
    backsplashText1.style.display = 'none';
    backsplashHeader1.style.display = 'none';

    backsplashImg2.style.display = 'none';
    backsplashText2.style.display = 'none';
    backsplashHeader2.style.display = 'none';

    backsplashImg3.style.display = 'none';
    backsplashText3.style.display = 'none';
    backsplashHeader3.style.display = 'none';

    backsplashImg4.style.display = 'none';
    backsplashText4.style.display = 'none';
    backsplashHeader4.style.display = 'none';

    backsplashImg6.style.display = 'none';
    backsplashText6.style.display = 'none';
    backsplashHeader6.style.display = 'none';

    backsplashColor1.style.border = 'none';
    backsplashColor2.style.border = 'none';
    backsplashColor3.style.border = 'none';
    backsplashColor4.style.border = 'none';
    backsplashColor5.style.border = '5px solid #26cbff';
    backsplashColor6.style.border = 'none';

    preferenceData.backsplash = backsplashText5.children[0].innerText;
    imgList.backsplash = backsplashImg5.children[0].src;
})
backsplashColor6.addEventListener('click', function (e) {
    e.preventDefault();
    backsplashImg6.style.display = 'block';
    backsplashText6.style.display = 'inline-block';
    backsplashHeader6.style.display = 'inline-block';

    backsplashImg1.style.display = 'none';
    backsplashText1.style.display = 'none';
    backsplashHeader1.style.display = 'none';

    backsplashImg2.style.display = 'none';
    backsplashText2.style.display = 'none';
    backsplashHeader2.style.display = 'none';

    backsplashImg3.style.display = 'none';
    backsplashText3.style.display = 'none';
    backsplashHeader3.style.display = 'none';

    backsplashImg5.style.display = 'none';
    backsplashText5.style.display = 'none';
    backsplashHeader5.style.display = 'none';

    backsplashImg4.style.display = 'none';
    backsplashText4.style.display = 'none';
    backsplashHeader4.style.display = 'none';

    backsplashColor1.style.border = 'none';
    backsplashColor2.style.border = 'none';
    backsplashColor3.style.border = 'none';
    backsplashColor4.style.border = 'none';
    backsplashColor5.style.border = 'none';
    backsplashColor6.style.border = '5px solid #26cbff';

    preferenceData.backsplash = backsplashText6.children[0].innerText;
    imgList.backsplash = backsplashImg6.children[0].src;
})

//flooring section
let flooringImg1 = document.querySelector('#flooring-images-1');
let flooringImg2 = document.querySelector('#flooring-images-2');
let flooringImg3 = document.querySelector('#flooring-images-3');
let flooringHeader1 = document.querySelector('#flooring-header-1');
let flooringHeader2 = document.querySelector('#flooring-header-2');
let flooringHeader3 = document.querySelector('#flooring-header-3');
let flooringColor1 = document.querySelector('#flooring-color-1');
let flooringColor2 = document.querySelector('#flooring-color-2');
let flooringColor3 = document.querySelector('#flooring-color-3');
let flooringText1 = document.querySelector('#flooring-text-1');
let flooringText2 = document.querySelector('#flooring-text-2');
let flooringText3 = document.querySelector('#flooring-text-3');
let flooringSel = document.querySelector('#flooring-select');
let flooringSelText = document.querySelector('#flooring-sel-text')

let flooringBtn = document.querySelector('#flooring-add-btn');
let flooringBtn2 = document.querySelector('#flooring-add-btn-2');

flooringBtn.addEventListener('click', function (e) {
    e.preventDefault();
    flooringSel.src = imgList.flooring;
    flooringSelText.style.zIndex = "-1";
    flooringSelected = true;
    saveClassChange();
})
flooringBtn2.addEventListener('click', function (e) {
    e.preventDefault();
    flooringSel.src = imgList.flooring;
    flooringSelText.style.zIndex = "-1";
    flooringSelected = true;
    saveClassChange();
})

flooringColor1.addEventListener('click', function (e) {
    e.preventDefault();
    flooringImg1.style.display = 'block';
    flooringText1.style.display = 'inline-block';
    flooringHeader1.style.display = 'inline-block';

    flooringImg2.style.display = 'none';
    flooringText2.style.display = 'none';
    flooringHeader2.style.display = 'none';

    flooringImg3.style.display = 'none';
    flooringText3.style.display = 'none';
    flooringHeader3.style.display = 'none';

    flooringColor1.style.border = '5px solid #26cbff';
    flooringColor2.style.border = 'none';
    flooringColor3.style.border = 'none';

    preferenceData.flooring = flooringText1.children[0].innerText;
    imgList.flooring = flooringImg1.children[0].src;
})
flooringColor2.addEventListener('click', function (e) {
    e.preventDefault();
    flooringImg2.style.display = 'block';
    flooringText2.style.display = 'inline-block';
    flooringHeader2.style.display = 'inline-block';

    flooringImg1.style.display = 'none';
    flooringText1.style.display = 'none';
    flooringHeader1.style.display = 'none';

    flooringImg3.style.display = 'none';
    flooringText3.style.display = 'none';
    flooringHeader3.style.display = 'none';

    flooringColor1.style.border = 'none';
    flooringColor2.style.border = '5px solid #26cbff';
    flooringColor3.style.border = 'none';

    preferenceData.flooring = flooringText2.children[0].innerText;
    imgList.flooring = flooringImg2.children[0].src;
})
flooringColor3.addEventListener('click', function (e) {
    e.preventDefault();
    flooringImg3.style.display = 'block';
    flooringText3.style.display = 'inline-block';
    flooringHeader3.style.display = 'inline-block';

    flooringImg1.style.display = 'none';
    flooringText1.style.display = 'none';
    flooringHeader1.style.display = 'none';

    flooringImg2.style.display = 'none';
    flooringText2.style.display = 'none';
    flooringHeader2.style.display = 'none';
    
    flooringColor1.style.border = 'none';
    flooringColor2.style.border = 'none';
    flooringColor3.style.border = '5px solid #26cbff';

    preferenceData.flooring = flooringText3.children[0].innerText;
    imgList.flooring = flooringImg3.children[0].src;
}) 

let saveButton2 = document.querySelector('#save-button-2');
let modal = document.querySelector('#modal');
let errorText = document.querySelector('.text-block-26.error-text');
let prefText = document.querySelector('.pref-text');

saveButton2.addEventListener('click', function () {
    if ((cabinetrySelected && cabinethwSelected && countertopSelected && backsplashSelected && flooringSelected)) {
	    modal.style.display = 'block';
    } else {
      errorText.style.display = 'block';
      prefText.style.color = '#c43927';
  }
});

