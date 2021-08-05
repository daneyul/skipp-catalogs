const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const user = urlParams.get('userData');
const redirect = urlParams.get('redirectUri');
let preferenceData = {
    designCatalog: '',
    cabinetry: '',
    cabinethw: '',
    countertop: '',
    backsplash: '',
    flooring: '',
    doorOpt: '',
    finishOpt: '',
    supplier: '',
}

let imgList = {
    cabinetry: document.querySelector('#cabinetry-images-1').children[0].src,
    cabinethw: document.querySelector('#cabinet-hw-images-1').children[0].src,
    countertop: document.querySelector('#countertop-images-1').children[0].src,
    backsplash: document.querySelector('#backsplash-images-1').children[0].src,
    flooring: document.querySelector('#flooring-images-1').children[0].src,
    supplier: document.querySelector('#supplier-images-1').children[0].src,
}

let supplierSelected = false;
let cabinetrySelected = false;
let cabinethwSelected = false;
let countertopSelected = false;
let backsplashSelected = false;
let flooringSelected = false;
let finishSelected = false;

//supplier section
supplierImg1 = document.querySelector('#supplier-images-1');
supplierImg2 = document.querySelector('#supplier-images-2');
supplierImg3 = document.querySelector('#supplier-images-3');
supplierText1 = document.querySelector('#supplier-text-1');
supplierText2 = document.querySelector('#supplier-text-2');
supplierText3 = document.querySelector('#supplier-text-3');
supplierSel = document.querySelector('#supplier-select');
supplierSelText = document.querySelector('#supplier-sel-text')

supplierVendor1 = document.querySelector('#supplier-vendor-1');
supplierVendor2 = document.querySelector('#supplier-vendor-1');
supplierVendor3 = document.querySelector('#supplier-vendor-1');

supplierBtn = document.querySelector('#supplier-add-btn');
supplierBtn2 = document.querySelector('#supplier-add-btn-2');

supplierBtn.addEventListener('click', function (e) {
    e.preventDefault();
    supplierSel.src = imgList.supplier;
    supplierSelText.style.zIndex = "-1";
    supplierSelected = true;
})
supplierBtn2.addEventListener('click', function (e) {
    e.preventDefault();
    supplierSel.src = imgList.supplier;
    supplierSelText.style.zIndex = "-1";
    supplierSelected = true;
})

supplierVendor1.addEventListener('click', function(e){
    supplierImg1.style.display = 'block';
    supplierText1.style.display = 'inline-block';

    supplierImg2.style.display = 'none';
    supplierText2.style.display = 'none';

    supplierImg3.style.display = 'none';
    supplierText3.style.display = 'none';

    preferenceData.supplier = supplierOpt1.innerText;
    imgList.supplier = supplierImg1.src;
})

supplierVendor2.addEventListener('click', function(e){
    supplierImg2.style.display = 'block';
    supplierText2.style.display = 'inline-block';

    supplierImg1.style.display = 'none';
    supplierText1.style.display = 'none';

    supplierImg3.style.display = 'none';
    supplierText3.style.display = 'none';

    preferenceData.supplier = supplierOpt2.innerText;
    imgList.supplier = supplierImg2.src;
})

supplierVendor3.addEventListener('click', function(e){
    supplierImg3.style.display = 'block';
    supplierText3.style.display = 'inline-block';

    supplierImg2.style.display = 'none';
    supplierText2.style.display = 'none';

    supplierImg1.style.display = 'none';
    supplierText1.style.display = 'none';

    preferenceData.supplier = supplierOpt3.innerText;
    imgList.supplier = supplierImg3.src;
})

//cabinetry section
cabinetryImg1 = document.querySelector('#cabinetry-images-1');
cabinetryImg2 = document.querySelector('#cabinetry-images-2');
cabinetryImg3 = document.querySelector('#cabinetry-images-3');
cabinetryColor1 = document.querySelector('#cabinetry-color-1');
cabinetryColor2 = document.querySelector('#cabinetry-color-2');
cabinetryColor3 = document.querySelector('#cabinetry-color-3');
cabinetryText1 = document.querySelector('#cabinetry-text-1');
cabinetryText2 = document.querySelector('#cabinetry-text-2');
cabinetryText3 = document.querySelector('#cabinetry-text-3');
cabinetrySel = document.querySelector('#cabinetry-select');
cabinetrySelText = document.querySelector('#cabinetry-sel-text')

cabinetryDoor1 = document.querySelector('#cabinetry-door-1');
cabinetryDoor2 = document.querySelector('#cabinetry-door-2');
cabinetryDoor3 = document.querySelector('#cabinetry-door-3');

doorOpt1 = document.querySelector('#door-shaker');
doorOpt2 = document.querySelector('#door-slab');
doorOpt3 = document.querySelector('#door-quarterline');

cabinetryBtn = document.querySelector('#cabinetry-add-btn');
cabinetryBtn2 = document.querySelector('#cabinetry-add-btn-2');

cabinetryBtn.addEventListener('click', function (e) {
    e.preventDefault();
    cabinetrySel.src = imgList.cabinetry;
    cabinetrySelText.style.zIndex = "-1";
    cabinetrySelected = true;
})
cabinetryBtn2.addEventListener('click', function (e) {
    e.preventDefault();
    cabinetrySel.src = imgList.cabinetry;
    cabinetrySelText.style.zIndex = "-1";
    cabinetrySelected = true;
})

doorOpt1.addEventListener('click', function(e){
    e.preventDefault();
    doorOpt1.classList.add('door-opt-btn-pressed');
    doorOpt2.classList.remove('door-opt-btn-pressed');
    doorOpt3.classList.remove('door-opt-btn-pressed');
    preferenceData.doorOpt = 'shaker';
})
doorOpt2.addEventListener('click', function(e){
    e.preventDefault();
    doorOpt2.classList.add('door-opt-btn-pressed');
    doorOpt1.classList.remove('door-opt-btn-pressed');
    doorOpt3.classList.remove('door-opt-btn-pressed');
    preferenceData.doorOpt = 'slab';
})
doorOpt3.addEventListener('click', function(e){
    e.preventDefault();
    doorOpt3.classList.add('door-opt-btn-pressed');
    doorOpt2.classList.remove('door-opt-btn-pressed');
    doorOpt1.classList.remove('door-opt-btn-pressed');
    preferenceData.doorOpt = 'quarterline';
})

cabinetryColor1.addEventListener('click', function (e) {
    e.preventDefault();
    cabinetryImg1.style.display = 'block';
    cabinetryText1.style.display = 'inline-block';

    cabinetryImg2.style.display = 'none';
    cabinetryText2.style.display = 'none';

    cabinetryImg3.style.display = 'none';
    cabinetryText3.style.display = 'none';

    cabinetryColor1.style.border = '5px solid #26cbff';
    cabinetryColor2.style.border = 'none';
    cabinetryColor3.style.border = 'none';

    preferenceData.cabinetry = cabinetryText1.children[0].innerText;
    imgList.cabinetry = cabinetryImg1.children[0].src;
})
cabinetryColor2.addEventListener('click', function (e) {
    e.preventDefault();
    cabinetryImg2.style.display = 'block';
    cabinetryText2.style.display = 'inline-block';

    cabinetryImg1.style.display = 'none';
    cabinetryText1.style.display = 'none';

    cabinetryImg3.style.display = 'none';
    cabinetryText3.style.display = 'none';

    cabinetryColor1.style.border = 'none';
    cabinetryColor2.style.border = '5px solid #26cbff';
    cabinetryColor3.style.border = 'none';
    
    preferenceData.cabinetry = cabinetryText2.children[0].innerText;
    imgList.cabinetry = cabinetryImg2.children[0].src;
})
cabinetryColor3.addEventListener('click', function (e) {
    e.preventDefault();
    cabinetryImg3.style.display = 'block';
    cabinetryText3.style.display = 'inline-block';

    cabinetryImg1.style.display = 'none';
    cabinetryText1.style.display = 'none';

    cabinetryImg2.style.display = 'none';
    cabinetryText2.style.display = 'none';

    cabinetryColor1.style.border = 'none';
    cabinetryColor2.style.border = 'none';
    cabinetryColor3.style.border = '5px solid #26cbff';

    preferenceData.cabinetry = cabinetryText3.children[0].innerText;
    imgList.cabinetry = cabinetryImg3.children[0].src;
})

//cabinet hardware section
cabinethwImg1 = document.querySelector('#cabinet-hw-images-1');
cabinethwImg2 = document.querySelector('#cabinet-hw-images-2');
cabinethwImg3 = document.querySelector('#cabinet-hw-images-3');
cabinethwColor1 = document.querySelector('#cabinet-hw-color-1');
cabinethwColor2 = document.querySelector('#cabinet-hw-color-2');
cabinethwColor3 = document.querySelector('#cabinet-hw-color-3');
cabinethwText1 = document.querySelector('#cabinet-hw-text-1');
cabinethwText2 = document.querySelector('#cabinet-hw-text-2');
cabinethwText3 = document.querySelector('#cabinet-hw-text-3');
cabinethwSel = document.querySelector('#cabinet-hw-select');
cabinethwTit1 = document.querySelector('#cabinet-hw-title-1');
cabinethwTit2 = document.querySelector('#cabinet-hw-title-2');
cabinethwTit3 = document.querySelector('#cabinet-hw-title-3');
cabinethwSelText = document.querySelector('#cabinethw-sel-text')

finishOpt1 = document.querySelector('#finish-bronze');
finishOpt2 = document.querySelector('#finish-brass');
finishOpt3 = document.querySelector('#finish-black');

cabinethwBtn = document.querySelector('#cabinet-hw-add-btn');
cabinethwBtn2 = document.querySelector('#cabinet-hw-add-btn-2');

cabinethwBtn.addEventListener('click', function (e) {
    e.preventDefault();
    cabinethwSel.src = imgList.cabinethw;
    cabinethwSelText.style.zIndex = "-1";
    cabinethwSelected = true;
})
cabinethwBtn2.addEventListener('click', function (e) {
    e.preventDefault();
    cabinethwSel.src = imgList.cabinethw;
    cabinethwSelText.style.zIndex = "-1";
    cabinethwSelected = true;
})

finishOpt1.addEventListener('click', function(e){
    e.preventDefault();
    finishOpt1.classList.add('door-opt-btn-pressed');
    finishOpt2.classList.remove('door-opt-btn-pressed');
    finishOpt3.classList.remove('door-opt-btn-pressed');
    preferenceData.finishOpt = 'bronze';
})
finishOpt2.addEventListener('click', function(e){
    e.preventDefault();
    finishOpt2.classList.add('door-opt-btn-pressed');
    finishOpt1.classList.remove('door-opt-btn-pressed');
    finishOpt3.classList.remove('door-opt-btn-pressed');
    preferenceData.finishOpt = 'brass';
})
finishOpt3.addEventListener('click', function(e){
    e.preventDefault();
    finishOpt3.classList.add('door-opt-btn-pressed');
    finishOpt2.classList.remove('door-opt-btn-pressed');
    finishOpt1.classList.remove('door-opt-btn-pressed');
    preferenceData.finishOpt = 'black';
})

cabinethwColor1.addEventListener('click', function (e) {
    e.preventDefault();
    cabinethwImg1.style.display = 'block';
    cabinethwText1.style.display = 'inline-block';

    cabinethwImg2.style.display = 'none';
    cabinethwText2.style.display = 'none';

    cabinethwImg3.style.display = 'none';
    cabinethwText3.style.display = 'none';

    cabinethwColor1.style.border = '5px solid #26cbff';
    cabinethwColor2.style.border = 'none';
    cabinethwColor3.style.border = 'none';

    preferenceData.cabinethw = cabinethwText1.children[0].innerText;
    imgList.cabinethw = cabinethwImg1.children[0].src
})
cabinethwColor2.addEventListener('click', function (e) {
    e.preventDefault();
    cabinethwImg2.style.display = 'block';
    cabinethwText2.style.display = 'inline-block';

    cabinethwImg1.style.display = 'none';
    cabinethwText1.style.display = 'none';

    cabinethwImg3.style.display = 'none';
    cabinethwText3.style.display = 'none';

    cabinethwColor1.style.border = 'none';
    cabinethwColor2.style.border = '5px solid #26cbff';
    cabinethwColor3.style.border = 'none';

    preferenceData.cabinethw = cabinethwText2.children[0].innerText;
    imgList.cabinethw = cabinethwImg2.children[0].src
})
cabinethwColor3.addEventListener('click', function (e) {
    e.preventDefault();
    cabinethwImg3.style.display = 'block';
    cabinethwText3.style.display = 'inline-block';

    cabinethwImg1.style.display = 'none';
    cabinethwText1.style.display = 'none';

    cabinethwImg2.style.display = 'none';
    cabinethwText2.style.display = 'none';

    cabinethwColor1.style.border = 'none';
    cabinethwColor2.style.border = 'none';
    cabinethwColor3.style.border = '5px solid #26cbff';

    preferenceData.cabinethw = cabinethwText3.children[0].innerText;
    imgList.cabinethw = cabinethwImg3.children[0].src
})

//countertops section
countertopImg1 = document.querySelector('#countertop-images-1');
countertopImg2 = document.querySelector('#countertop-images-2');
countertopImg3 = document.querySelector('#countertop-images-3');
countertopColor1 = document.querySelector('#countertop-color-1');
countertopColor2 = document.querySelector('#countertop-color-2');
countertopColor3 = document.querySelector('#countertop-color-3');
countertopText1 = document.querySelector('#countertop-text-1');
countertopText2 = document.querySelector('#countertop-text-2');
countertopText3 = document.querySelector('#countertop-text-3');
countertopSel = document.querySelector('#countertop-select');
countertopSelText = document.querySelector('#countertop-sel-text')

countertopBtn = document.querySelector('#countertop-add-btn');
countertopBtn2 = document.querySelector('#countertop-add-btn-2');

countertopBtn.addEventListener('click', function (e) {
    countertopSel.src = imgList.countertop;
    countertopSelText.style.zIndex = "-1";
    countertopSelected = true;
})
countertopBtn2.addEventListener('click', function (e) {
    countertopSel.src = imgList.countertop;
    countertopSelText.style.zIndex = "-1";
    countertopSelected = true;
})

countertopColor1.addEventListener('click', function (e) {
    e.preventDefault();
    countertopImg1.style.display = 'block';
    countertopText1.style.display = 'inline-block';

    countertopImg2.style.display = 'none';
    countertopText2.style.display = 'none';

    countertopImg3.style.display = 'none';
    countertopText3.style.display = 'none';

    countertopColor1.style.border = '5px solid #26cbff';
    countertopColor2.style.border = 'none';
    countertopColor3.style.border = 'none';

    preferenceData.countertop = countertopText1.children[0].innerText;
    imgList.countertop = countertopImg1.children[0].src
})
countertopColor2.addEventListener('click', function (e) {
    e.preventDefault();
    countertopImg2.style.display = 'block';
    countertopText2.style.display = 'inline-block';

    countertopImg1.style.display = 'none';
    countertopText1.style.display = 'none';

    countertopImg3.style.display = 'none';
    countertopText3.style.display = 'none';

    countertopColor1.style.border = 'none';
    countertopColor2.style.border = '5px solid #26cbff';
    countertopColor3.style.border = 'none';

    preferenceData.countertop = countertopText2.children[0].innerText;
    imgList.countertop = countertopImg2.children[0].src
})
countertopColor3.addEventListener('click', function (e) {
    e.preventDefault();
    countertopImg3.style.display = 'block';
    countertopText3.style.display = 'inline-block';

    countertopImg1.style.display = 'none';
    countertopText1.style.display = 'none';

    countertopImg2.style.display = 'none';
    countertopText2.style.display = 'none';

    countertopColor1.style.border = 'none';
    countertopColor2.style.border = 'none';
    countertopColor3.style.border = '5px solid #26cbff';

    preferenceData.countertop = countertopText3.children[0].innerText;
    imgList.countertop = countertopImg3.children[0].src
})

//backsplash section
backsplashImg1 = document.querySelector('#backsplash-images-1');
backsplashImg2 = document.querySelector('#backsplash-images-2');
backsplashImg3 = document.querySelector('#backsplash-images-3');
backsplashColor1 = document.querySelector('#backsplash-color-1');
backsplashColor2 = document.querySelector('#backsplash-color-2');
backsplashColor3 = document.querySelector('#backsplash-color-3');
backsplashText1 = document.querySelector('#backsplash-text-1');
backsplashText2 = document.querySelector('#backsplash-text-2');
backsplashText3 = document.querySelector('#backsplash-text-3');
backsplashSel = document.querySelector('#backsplash-select');
backsplashSelText = document.querySelector('#backsplash-sel-text')

backsplashBtn = document.querySelector('#backsplash-add-btn');
backsplashBtn2 = document.querySelector('#backsplash-add-btn-2');

backsplashBtn.addEventListener('click', function (e) {
    backsplashSel.src = imgList.backsplash;
    backsplashSelText.style.zIndex = "-1";
    backsplashSelected = true;
})
backsplashBtn2.addEventListener('click', function (e) {
    backsplashSel.src = imgList.backsplash;
    backsplashSelText.style.zIndex = "-1";
    backsplashSelected = true;
})

backsplashColor1.addEventListener('click', function (e) {
    e.preventDefault();
    backsplashImg1.style.display = 'block';
    backsplashText1.style.display = 'inline-block';

    backsplashImg2.style.display = 'none';
    backsplashText2.style.display = 'none';

    backsplashImg3.style.display = 'none';
    backsplashText3.style.display = 'none';

    backsplashColor1.style.border = '5px solid #26cbff';
    backsplashColor2.style.border = 'none';
    backsplashColor3.style.border = 'none';

    preferenceData.backsplash = backsplashText1.children[0].innerText;
    imgList.backsplash = backsplashImg1.children[0].src;
})
backsplashColor2.addEventListener('click', function (e) {
    e.preventDefault();
    backsplashImg2.style.display = 'block';
    backsplashText2.style.display = 'inline-block';

    backsplashImg1.style.display = 'none';
    backsplashText1.style.display = 'none';

    backsplashImg3.style.display = 'none';
    backsplashText3.style.display = 'none';

    backsplashColor1.style.border = 'none';
    backsplashColor2.style.border = '5px solid #26cbff';
    backsplashColor3.style.border = 'none';

    preferenceData.backsplash = backsplashText2.children[0].innerText;
    imgList.backsplash = backsplashImg2.children[0].src;
})
backsplashColor3.addEventListener('click', function (e) {
    e.preventDefault();
    backsplashImg3.style.display = 'block';
    backsplashText3.style.display = 'inline-block';

    backsplashImg1.style.display = 'none';
    backsplashText1.style.display = 'none';

    backsplashImg2.style.display = 'none';
    backsplashText2.style.display = 'none';

    backsplashColor1.style.border = 'none';
    backsplashColor2.style.border = 'none';
    backsplashColor3.style.border = '5px solid #26cbff';

    preferenceData.backsplash = backsplashText3.children[0].innerText;
    imgList.backsplash = backsplashImg3.children[0].src;
})

//flooring section
flooringImg1 = document.querySelector('#flooring-images-1');
flooringImg2 = document.querySelector('#flooring-images-2');
flooringImg3 = document.querySelector('#flooring-images-3');
flooringColor1 = document.querySelector('#flooring-color-1');
flooringColor2 = document.querySelector('#flooring-color-2');
flooringColor3 = document.querySelector('#flooring-color-3');
flooringText1 = document.querySelector('#flooring-text-1');
flooringText2 = document.querySelector('#flooring-text-2');
flooringText3 = document.querySelector('#flooring-text-3');
flooringSel = document.querySelector('#flooring-select');
flooringTit1 = document.querySelector('#flooring-title-1');
flooringTit2 = document.querySelector('#flooring-title-2');
flooringTit3 = document.querySelector('#flooring-title-3');
flooringSelText = document.querySelector('#flooring-sel-text')

flooringBtn = document.querySelector('#flooring-add-btn');
flooringBtn2 = document.querySelector('#flooring-add-btn-2');

flooringBtn.addEventListener('click', function (e) {
    flooringSel.src = imgList.flooring;
    flooringSelText.style.zIndex = "-1";
    flooringSelected = true;
})
flooringBtn2.addEventListener('click', function (e) {
    flooringSel.src = imgList.flooring;
    flooringSelText.style.zIndex = "-1";
    flooringSelected = true;
})

flooringColor1.addEventListener('click', function (e) {
    e.preventDefault();
    flooringImg1.style.display = 'block';
    flooringText1.style.display = 'inline-block';

    flooringImg2.style.display = 'none';
    flooringText2.style.display = 'none';

    flooringImg3.style.display = 'none';
    flooringText3.style.display = 'none';

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

    flooringImg1.style.display = 'none';
    flooringText1.style.display = 'none';

    flooringImg3.style.display = 'none';
    flooringText3.style.display = 'none';

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

    flooringImg1.style.display = 'none';
    flooringText1.style.display = 'none';

    flooringImg2.style.display = 'none';
    flooringText2.style.display = 'none';

    flooringColor1.style.border = 'none';
    flooringColor2.style.border = 'none';
    flooringColor3.style.border = '5px solid #26cbff';

    preferenceData.flooring = flooringText3.children[0].innerText;
    imgList.flooring = flooringImg3.children[0].src;
})

let saveButton1 = document.querySelector('#save-button-1');
let saveButton2 = document.querySelector('#save-button-2');
let modal = document.querySelector('#modal');
let errorText = document.querySelector('.text-block-26.error-text');
let prefText = document.querySelector('.pref-text');

document.body.addEventListener('change', function () {
	if (cabinetrySelected && cabinethwSelected && countertopSelected && backsplashSelectedd && flooringSelected && finishSelected) {
  	saveButton1.classList.add('save-pref-clicked');
    saveButton2.classList.add('save-pref2-clicked');
  }
})


saveButton1.addEventListener('click', function () {
    if ((cabinetrySelected && cabinethwSelected && countertopSelected && backsplashSelectedd && flooringSelected && finishSelected)) {
        modal.style.display = 'block';
    } else {
      errorText.style.display = 'block';
      prefText.style.color = '#c43927';
  }
});

saveButton2.addEventListener('click', function () {
    if ((cabinetrySelected && cabinethwSelected && countertopSelected && backsplashSelectedd && flooringSelected && finishSelected)) {
	    modal.style.display = 'block';
    } else {
      errorText.style.display = 'block';
      prefText.style.color = '#c43927';
  }
});

// Pricing calculator

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

supplierOpt1 = document.querySelector('#supplier-option-1')
supplierOpt2 = document.querySelector('#supplier-option-2')
supplierOpt3 = document.querySelector('#supplier-option-3')

supplierSize1 = document.querySelector('#supplier-size-1');
supplierSize2 = document.querySelector('#supplier-size-2');
supplierSize3 = document.querySelector('#supplier-size-3');
supplierSize4 = document.querySelector('#supplier-size-4');

supplierCost = document.querySelector('#supplier-cost');
supplierFt = document.querySelector('#supplier-ft');
supplierCab = document.querySelector('#supplier-cab');
supplierDraw = document.querySelector('#supplier-draw');

supplierOpt1.addEventListener('click', function(){
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
});

supplierOpt2.addEventListener('click', function(){
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
    supplierFt.innerText = pricing.linear;
    supplierCab.innerText = pricing.cabinet;
    supplierDraw.innerText = pricing.drawer;
})

supplierOpt3.addEventListener('click', function(){
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
    supplierFt.innerText = pricing.linear;
    supplierCab.innerText = pricing.cabinet;
    supplierDraw.innerText = pricing.drawer;
})

supplierSize1.addEventListener('click', function(){
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
})
supplierSize2.addEventListener('click', function(){
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
})
supplierSize3.addEventListener('click', function(){
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
})
supplierSize4.addEventListener('click', function(){
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
})

