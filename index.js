const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const user = urlParams.get('userId');
let saveData = {
    userId: user,
    cabinetry: '',
    cabinetHw: '',
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

cabinetryColor1.addEventListener('click', function () {
    cabinetryImg1.style.display = 'block';
    cabinetryText1.style.display = 'inline-block';
    cabinetryImg2.style.display = 'none';
    cabinetryText2.style.display = 'none';
    cabinetryImg3.style.display = 'none';
    cabinetryText3.style.display = 'none';
    cabinetryColor1.style.border = '5px solid #26cbff';
    cabinetryColor2.style.border = 'none';
    cabinetryColor3.style.border = 'none';
    saveData.cabinetry = '1';
})
cabinetryColor2.addEventListener('click', function () {
    cabinetryImg2.style.display = 'block';
    cabinetryText2.style.display = 'inline-block';
    cabinetryImg1.style.display = 'none';
    cabinetryText1.style.display = 'none';
    cabinetryImg3.style.display = 'none';
    cabinetryText3.style.display = 'none';
    cabinetryColor1.style.border = 'none';
    cabinetryColor2.style.border = '5px solid #26cbff';
    cabinetryColor3.style.border = 'none';
    saveData.cabinetry = '2';
})
cabinetryColor3.addEventListener('click', function () {
    cabinetryImg3.style.display = 'block';
    cabinetryText3.style.display = 'inline-block';
    cabinetryImg1.style.display = 'none';
    cabinetryText1.style.display = 'none';
    cabinetryImg2.style.display = 'none';
    cabinetryText2.style.display = 'none';
    cabinetryColor1.style.border = 'none';
    cabinetryColor2.style.border = 'none';
    cabinetryColor3.style.border = '5px solid #26cbff';
    saveData.cabinetry = '3';
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

cabinethwColor1.addEventListener('click', function () {
    cabinethwImg1.style.display = 'block';
    cabinethwText1.style.display = 'inline-block';
    cabinethwImg2.style.display = 'none';
    cabinethwText2.style.display = 'none';
    cabinethwImg3.style.display = 'none';
    cabinethwText3.style.display = 'none';
    cabinethwColor1.style.border = '5px solid #26cbff';
    cabinethwColor2.style.border = 'none';
    cabinethwColor3.style.border = 'none';
    saveData.cabinetHw = '1';
})
cabinethwColor2.addEventListener('click', function () {
    cabinethwImg2.style.display = 'block';
    cabinethwText2.style.display = 'inline-block';
    cabinethwImg1.style.display = 'none';
    cabinethwText1.style.display = 'none';
    cabinethwImg3.style.display = 'none';
    cabinethwText3.style.display = 'none';
    cabinethwColor1.style.border = 'none';
    cabinethwColor2.style.border = '5px solid #26cbff';
    cabinethwColor3.style.border = 'none';
    saveData.cabinetHw = '2';
})
cabinethwColor3.addEventListener('click', function () {
    cabinethwImg3.style.display = 'block';
    cabinethwText3.style.display = 'inline-block';
    cabinethwImg1.style.display = 'none';
    cabinethwText1.style.display = 'none';
    cabinethwImg2.style.display = 'none';
    cabinethwText2.style.display = 'none';
    cabinethwColor1.style.border = 'none';
    cabinethwColor2.style.border = 'none';
    cabinethwColor3.style.border = '5px solid #26cbff';
    saveData.cabinetHw = '3';
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

countertopColor1.addEventListener('click', function () {
    countertopImg1.style.display = 'block';
    countertopText1.style.display = 'inline-block';
    countertopImg2.style.display = 'none';
    countertopText2.style.display = 'none';
    countertopImg3.style.display = 'none';
    countertopText3.style.display = 'none';
    countertopColor1.style.border = '5px solid #26cbff';
    countertopColor2.style.border = 'none';
    countertopColor3.style.border = 'none';
    saveData.countertop = '1';
})
countertopColor2.addEventListener('click', function () {
    countertopImg2.style.display = 'block';
    countertopText2.style.display = 'inline-block';
    countertopImg1.style.display = 'none';
    countertopText1.style.display = 'none';
    countertopImg3.style.display = 'none';
    countertopText3.style.display = 'none';
    countertopColor1.style.border = 'none';
    countertopColor2.style.border = '5px solid #26cbff';
    countertopColor3.style.border = 'none';
    saveData.countertop = '2';
})
countertopColor3.addEventListener('click', function () {
    countertopImg3.style.display = 'block';
    countertopText3.style.display = 'inline-block';
    countertopImg1.style.display = 'none';
    countertopText1.style.display = 'none';
    countertopImg2.style.display = 'none';
    countertopText2.style.display = 'none';
    countertopColor1.style.border = 'none';
    countertopColor2.style.border = 'none';
    countertopColor3.style.border = '5px solid #26cbff';
    saveData.countertop = '3';
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

backsplashColor1.addEventListener('click', function () {
    backsplashImg1.style.display = 'block';
    backsplashText1.style.display = 'inline-block';
    backsplashImg2.style.display = 'none';
    backsplashText2.style.display = 'none';
    backsplashImg3.style.display = 'none';
    backsplashText3.style.display = 'none';
    backsplashColor1.style.border = '5px solid #26cbff';
    backsplashColor2.style.border = 'none';
    backsplashColor3.style.border = 'none';
    saveData.backsplash = '1';
})
backsplashColor2.addEventListener('click', function () {
    backsplashImg2.style.display = 'block';
    backsplashText2.style.display = 'inline-block';
    backsplashImg1.style.display = 'none';
    backsplashText1.style.display = 'none';
    backsplashImg3.style.display = 'none';
    backsplashText3.style.display = 'none';
    backsplashColor1.style.border = 'none';
    backsplashColor2.style.border = '5px solid #26cbff';
    backsplashColor3.style.border = 'none';
    saveData.backsplash = '2';
})
backsplashColor3.addEventListener('click', function () {
    backsplashImg3.style.display = 'block';
    backsplashText3.style.display = 'inline-block';
    backsplashImg1.style.display = 'none';
    backsplashText1.style.display = 'none';
    backsplashImg2.style.display = 'none';
    backsplashText2.style.display = 'none';
    backsplashColor1.style.border = 'none';
    backsplashColor2.style.border = 'none';
    backsplashColor3.style.border = '5px solid #26cbff';
    saveData.backsplash = '3';
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

flooringColor1.addEventListener('click', function () {
    flooringImg1.style.display = 'block';
    flooringText1.style.display = 'inline-block';
    flooringImg2.style.display = 'none';
    flooringText2.style.display = 'none';
    flooringImg3.style.display = 'none';
    flooringText3.style.display = 'none';
    flooringColor1.style.border = '5px solid #26cbff';
    flooringColor2.style.border = 'none';
    flooringColor3.style.border = 'none';
    saveData.flooring = '1';
})
flooringColor2.addEventListener('click', function () {
    flooringImg2.style.display = 'block';
    flooringText2.style.display = 'inline-block';
    flooringImg1.style.display = 'none';
    flooringText1.style.display = 'none';
    flooringImg3.style.display = 'none';
    flooringText3.style.display = 'none';
    flooringColor1.style.border = 'none';
    flooringColor2.style.border = '5px solid #26cbff';
    flooringColor3.style.border = 'none';
    saveData.flooring = '2';
})
flooringColor3.addEventListener('click', function () {
    flooringImg3.style.display = 'block';
    flooringText3.style.display = 'inline-block';
    flooringImg1.style.display = 'none';
    flooringText1.style.display = 'none';
    flooringImg2.style.display = 'none';
    flooringText2.style.display = 'none';
    flooringColor1.style.border = 'none';
    flooringColor2.style.border = 'none';
    flooringColor3.style.border = '5px solid #26cbff';
    saveData.flooring = '3';
})

