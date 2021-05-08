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
}

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
cabinetrySel1 = document.querySelector('#cabinetry-select-1');
cabinetrySel2 = document.querySelector('#cabinetry-select-2');
cabinetrySel3 = document.querySelector('#cabinetry-select-3');
cabinetryTit1 = document.querySelector('#cabinetry-title-1');
cabinetryTit2 = document.querySelector('#cabinetry-title-2');
cabinetryTit3 = document.querySelector('#cabinetry-title-3');

cabinetryColor1.addEventListener('click', function (e) {
    e.preventDefault();
    cabinetryImg1.style.display = 'block';
    cabinetryText1.style.display = 'inline-block';
    cabinetrySel1.style.display = 'block';
    cabinetryTit1.style.display = 'block';

    cabinetryImg2.style.display = 'none';
    cabinetryText2.style.display = 'none';
    cabinetrySel2.style.display = 'none';
    cabinetryTit2.style.display = 'none';

    cabinetryImg3.style.display = 'none';
    cabinetryText3.style.display = 'none';
    cabinetrySel3.style.display = 'none';
    cabinetryTit3.style.display = 'none';

    cabinetryColor1.style.border = '5px solid #26cbff';
    cabinetryColor2.style.border = 'none';
    cabinetryColor3.style.border = 'none';

    preferenceData.cabinetry = cabinetryText1.children[0].innerText;
})
cabinetryColor2.addEventListener('click', function (e) {
    e.preventDefault();
    cabinetryImg2.style.display = 'block';
    cabinetryText2.style.display = 'inline-block';
    cabinetrySel2.style.display = 'block';
    cabinetryTit2.style.display = 'block';
    cabinetryImg1.style.display = 'none';
    cabinetryText1.style.display = 'none';
    cabinetryTit1.style.display = 'none';
    cabinetrySel1.style.display = 'none';
    cabinetryImg3.style.display = 'none';
    cabinetryText3.style.display = 'none';
    cabinetrySel3.style.display = 'none';
    cabinetryTit3.style.display = 'none';
    cabinetryColor1.style.border = 'none';
    cabinetryColor2.style.border = '5px solid #26cbff';
    cabinetryColor3.style.border = 'none';
    preferenceData.cabinetry = cabinetryText2.children[0].innerText;;
})
cabinetryColor3.addEventListener('click', function (e) {
    e.preventDefault();
    cabinetryImg3.style.display = 'block';
    cabinetryText3.style.display = 'inline-block';
    cabinetrySel3.style.display = 'block';
    cabinetryTit3.style.display = 'block';

    cabinetryImg1.style.display = 'none';
    cabinetryText1.style.display = 'none';
    cabinetrySel1.style.display = 'none';
    cabinetryTit1.style.display = 'none';

    cabinetryImg2.style.display = 'none';
    cabinetryText2.style.display = 'none';
    cabinetrySel2.style.display = 'none';
    cabinetryTit3.style.display = 'none';

    cabinetryColor1.style.border = 'none';
    cabinetryColor2.style.border = 'none';
    cabinetryColor3.style.border = '5px solid #26cbff';

    preferenceData.cabinetry = cabinetryText3.children[0].innerText;;
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
cabinethwSel1 = document.querySelector('#cabinet-hw-select-1');
cabinethwSel2 = document.querySelector('#cabinet-hw-select-2');
cabinethwSel3 = document.querySelector('#cabinet-hw-select-3');
cabinethwTit1 = document.querySelector('#cabinet-hw-title-1');
cabinethwTit2 = document.querySelector('#cabinet-hw-title-2');
cabinethwTit3 = document.querySelector('#cabinet-hw-title-3');

cabinethwColor1.addEventListener('click', function (e) {
    e.preventDefault();
    cabinethwImg1.style.display = 'block';
    cabinethwText1.style.display = 'inline-block';
    cabinethwSel1.style.display = 'block';
    cabinethwTit1.style.display = 'block';

    cabinethwImg2.style.display = 'none';
    cabinethwText2.style.display = 'none';
    cabinethwSel2.style.display = 'none';
    cabinethwTit2.style.display = 'none';

    cabinethwImg3.style.display = 'none';
    cabinethwText3.style.display = 'none';
    cabinethwSel3.style.display = 'none';
    cabinethwTit3.style.display = 'none';

    cabinethwColor1.style.border = '5px solid #26cbff';
    cabinethwColor2.style.border = 'none';
    cabinethwColor3.style.border = 'none';

    preferenceData.cabinethw = cabinethwText1.children[0].innerText;
})
cabinethwColor2.addEventListener('click', function (e) {
    e.preventDefault();
    cabinethwImg2.style.display = 'block';
    cabinethwText2.style.display = 'inline-block';
    cabinethwSel2.style.display = 'block';
    cabinethwTit2.style.display = 'block';

    cabinethwImg1.style.display = 'none';
    cabinethwText1.style.display = 'none';
    cabinethwSel1.style.display = 'none';
    cabinethwTit1.style.display = 'none';

    cabinethwImg3.style.display = 'none';
    cabinethwText3.style.display = 'none';
    cabinethwSel3.style.display = 'none';
    cabinethwTit3.style.display = 'none';

    cabinethwColor1.style.border = 'none';
    cabinethwColor2.style.border = '5px solid #26cbff';
    cabinethwColor3.style.border = 'none';

    preferenceData.cabinethw = cabinethwText2.children[0].innerText;
})
cabinethwColor3.addEventListener('click', function (e) {
    e.preventDefault();
    cabinethwImg3.style.display = 'block';
    cabinethwText3.style.display = 'inline-block';
    cabinethwSel3.style.display = 'block';
    cabinethwTit3.style.display = 'block';

    cabinethwImg1.style.display = 'none';
    cabinethwText1.style.display = 'none';
    cabinethwSel1.style.display = 'none';
    cabinethwTit1.style.display = 'none';

    cabinethwImg2.style.display = 'none';
    cabinethwText2.style.display = 'none';
    cabinethwSel2.style.display = 'none';
    cabinethwTit2.style.display = 'none';

    cabinethwColor1.style.border = 'none';
    cabinethwColor2.style.border = 'none';
    cabinethwColor3.style.border = '5px solid #26cbff';

    preferenceData.cabinethw = cabinethwText3.children[0].innerText;
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
countertopSel1 = document.querySelector('#countertop-select-1');
countertopSel2 = document.querySelector('#countertop-select-2');
countertopSel3 = document.querySelector('#countertop-select-3');
countertopTit1 = document.querySelector('#countertop-title-1');
countertopTit2 = document.querySelector('#countertop-title-2');
countertopTit3 = document.querySelector('#countertop-title-3');

countertopColor1.addEventListener('click', function (e) {
    e.preventDefault();
    countertopImg1.style.display = 'block';
    countertopText1.style.display = 'inline-block';
    countertopSel1.style.display = 'block';
    countertopTit1.style.display = 'block';

    countertopImg2.style.display = 'none';
    countertopText2.style.display = 'none';
    countertopSel2.style.display = 'none';
    countertopTit2.style.display = 'none';

    countertopImg3.style.display = 'none';
    countertopText3.style.display = 'none';
    countertopSel3.style.display = 'none';
    countertopTit3.style.display = 'none';

    countertopColor1.style.border = '5px solid #26cbff';
    countertopColor2.style.border = 'none';
    countertopColor3.style.border = 'none';

    preferenceData.countertop = countertopText1.children[0].innerText;
})
countertopColor2.addEventListener('click', function (e) {
    e.preventDefault();
    countertopImg2.style.display = 'block';
    countertopText2.style.display = 'inline-block';
    countertopSel2.style.display = 'block';
    countertopTit2.style.display = 'block';

    countertopImg1.style.display = 'none';
    countertopText1.style.display = 'none';
    countertopSel1.style.display = 'none';
    countertopTit1.style.display = 'none';

    countertopImg3.style.display = 'none';
    countertopText3.style.display = 'none';
    countertopSel3.style.display = 'none';
    countertopTit3.style.display = 'none';

    countertopColor1.style.border = 'none';
    countertopColor2.style.border = '5px solid #26cbff';
    countertopColor3.style.border = 'none';

    preferenceData.countertop = countertopText2.children[0].innerText;
})
countertopColor3.addEventListener('click', function (e) {
    e.preventDefault();
    countertopImg3.style.display = 'block';
    countertopText3.style.display = 'inline-block';
    countertopSel3.style.display = 'block';
    countertopTit3.style.display = 'block';

    countertopImg1.style.display = 'none';
    countertopText1.style.display = 'none';
    countertopSel1.style.display = 'none';
    countertopTit1.style.display = 'none';

    countertopImg2.style.display = 'none';
    countertopText2.style.display = 'none';
    countertopSel2.style.display = 'none';
    countertopTit2.style.display = 'none';

    countertopColor1.style.border = 'none';
    countertopColor2.style.border = 'none';
    countertopColor3.style.border = '5px solid #26cbff';

    preferenceData.countertop = countertopText3.children[0].innerText;
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
backsplashSel1 = document.querySelector('#backsplash-select-1');
backsplashSel2 = document.querySelector('#backsplash-select-2');
backsplashSel3 = document.querySelector('#backsplash-select-3');
backsplashTit1 = document.querySelector('#backsplash-title-1');
backsplashTit2 = document.querySelector('#backsplash-title-2');
backsplashTit3 = document.querySelector('#backsplash-title-3');

backsplashColor1.addEventListener('click', function (e) {
    e.preventDefault();
    backsplashImg1.style.display = 'block';
    backsplashText1.style.display = 'inline-block';
    backsplashSel1.style.display = 'block';
    backsplashTit1.style.display = 'block';

    backsplashImg2.style.display = 'none';
    backsplashText2.style.display = 'none';
    backsplashSel2.style.display = 'none';
    backsplashTit2.style.display = 'none';

    backsplashImg3.style.display = 'none';
    backsplashSel3.style.display = 'none';
    backsplashText3.style.display = 'none';
    backsplashTit3.style.display = 'none';

    backsplashColor1.style.border = '5px solid #26cbff';
    backsplashColor2.style.border = 'none';
    backsplashColor3.style.border = 'none';

    preferenceData.backsplash = backsplashText1.children[0].innerText;
})
backsplashColor2.addEventListener('click', function (e) {
    e.preventDefault();
    backsplashImg2.style.display = 'block';
    backsplashText2.style.display = 'inline-block';
    backsplashSel2.style.display = 'block';
    backsplashTit2.style.display = 'block';

    backsplashImg1.style.display = 'none';
    backsplashText1.style.display = 'none';
    backsplashSel1.style.display = 'none';
    backsplashTit1.style.display = 'none';

    backsplashImg3.style.display = 'none';
    backsplashText3.style.display = 'none';
    backsplashSel3.style.display = 'none';
    backsplashTit3.style.display = 'none';

    backsplashColor1.style.border = 'none';
    backsplashColor2.style.border = '5px solid #26cbff';
    backsplashColor3.style.border = 'none';

    preferenceData.backsplash = backsplashText2.children[0].innerText;
})
backsplashColor3.addEventListener('click', function (e) {
    e.preventDefault();
    backsplashImg3.style.display = 'block';
    backsplashText3.style.display = 'inline-block';
    backsplashSel3.style.display = 'block';
    backsplashTit3.style.display = 'block';

    backsplashImg1.style.display = 'none';
    backsplashText1.style.display = 'none';
    backsplashSel1.style.display = 'none';
    backsplashTit1.style.display = 'none';

    backsplashImg2.style.display = 'none';
    backsplashText2.style.display = 'none';
    backsplashSel2.style.display = 'none';
    backsplashTit2.style.display = 'none';

    backsplashColor1.style.border = 'none';
    backsplashColor2.style.border = 'none';
    backsplashColor3.style.border = '5px solid #26cbff';

    preferenceData.backsplash = backsplashText3.children[0].innerText;
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
flooringSel1 = document.querySelector('#flooring-select-1');
flooringSel2 = document.querySelector('#flooring-select-2');
flooringSel3 = document.querySelector('#flooring-select-3');
flooringTit1 = document.querySelector('#flooring-title-1');
flooringTit2 = document.querySelector('#flooring-title-2');
flooringTit3 = document.querySelector('#flooring-title-3');

flooringColor1.addEventListener('click', function (e) {
    e.preventDefault();
    flooringImg1.style.display = 'block';
    flooringText1.style.display = 'inline-block';
    flooringSel1.style.display = 'block';
    flooringTit1.style.display = 'block';

    flooringImg2.style.display = 'none';
    flooringText2.style.display = 'none';
    flooringSel2.style.display = 'none';
    flooringTit2.style.display = 'none';

    flooringImg3.style.display = 'none';
    flooringText3.style.display = 'none';
    flooringSel3.style.display = 'none';
    flooringTit3.style.display = 'none';

    flooringColor1.style.border = '5px solid #26cbff';
    flooringColor2.style.border = 'none';
    flooringColor3.style.border = 'none';

    preferenceData.flooring = flooringText1.children[0].innerText;
})
flooringColor2.addEventListener('click', function (e) {
    e.preventDefault();
    flooringImg2.style.display = 'block';
    flooringText2.style.display = 'inline-block';
    flooringSel2.style.display = 'block';
    flooringTit2.style.display = 'block';

    flooringImg1.style.display = 'none';
    flooringText1.style.display = 'none';
    flooringSel1.style.display = 'none';
    flooringTit1.style.display = 'none';

    flooringImg3.style.display = 'none';
    flooringText3.style.display = 'none';
    flooringSel3.style.display = 'none';
    flooringTit3.style.display = 'none';

    flooringColor1.style.border = 'none';
    flooringColor2.style.border = '5px solid #26cbff';
    flooringColor3.style.border = 'none';

    preferenceData.flooring = flooringText2.children[0].innerText;
})
flooringColor3.addEventListener('click', function (e) {
    e.preventDefault();
    flooringImg3.style.display = 'block';
    flooringText3.style.display = 'inline-block';
    flooringSel3.style.display = 'block';
    flooringTit3.style.display = 'block';

    flooringImg1.style.display = 'none';
    flooringText1.style.display = 'none';
    flooringSel1.style.display = 'none';
    flooringTit1.style.display = 'none';

    flooringImg2.style.display = 'none';
    flooringText2.style.display = 'none';
    flooringSel2.style.display = 'none';
    flooringTit2.style.display = 'none';

    flooringColor1.style.border = 'none';
    flooringColor2.style.border = 'none';
    flooringColor3.style.border = '5px solid #26cbff';

    preferenceData.flooring = flooringText3.children[0].innerText;
})

