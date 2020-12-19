
//wall cabinet section
wallSlabImg = document.querySelector('#wall-slab-img');
wallMsImg = document.querySelector('#wall-ms-img');
wallShakerImg = document.querySelector('#wall-shaker-img');
wallBeadedImg = document.querySelector('#wall-beaded-img');

wallSlabBtn = document.querySelector('#wall-slab-btn');
wallMsBtn = document.querySelector('#wall-ms-btn');
wallShakerBtn = document.querySelector('#wall-shaker-btn');
wallBeadedBtn = document.querySelector('#wall-beaded-btn');


wallSlabBtn.addEventListener('click', function () {
    wallSlabImg.style.display = 'inline-block';
    wallSlabBtn.style.opacity = 1;
    wallMsBtn.style.opacity = 0.4;
    wallShakerBtn.style.opacity = 0.4;
    wallBeadedBtn.style.opacity = 0.4;
    wallMsImg.style.display = 'none';
    wallShakerImg.style.display = 'none';
    wallBeadedImg.style.display = 'none';

})
wallMsBtn.addEventListener('click', function () {
    wallMsImg.style.display = 'inline-block';
    wallMsBtn.style.opacity = 1;
    wallSlabBtn.style.opacity = 0.4;
    wallShakerBtn.style.opacity = 0.4;
    wallBeadedBtn.style.opacity = 0.4;
    wallSlabImg.style.display = 'none';
    wallShakerImg.style.display = 'none';
    wallBeadedImg.style.display = 'none';

})
wallShakerBtn.addEventListener('click', function () {
    wallShakerImg.style.display = 'inline-block';
    wallShakerBtn.style.opacity = 1;
    wallSlabBtn.style.opacity = 0.4;
    wallMsBtn.style.opacity = 0.4;
    wallBeadedBtn.style.opacity = 0.4;
    wallSlabImg.style.display = 'none';
    wallMsImg.style.display = 'none';
    wallBeadedImg.style.display = 'none';

})
wallBeadedBtn.addEventListener('click', function () {
    wallBeadedImg.style.display = 'inline-block';
    wallBeadedBtn.style.opacity = 1;
    wallSlabBtn.style.opacity = 0.4;
    wallMsBtn.style.opacity = 0.4;
    wallShakerBtn.style.opacity = 0.4;
    wallSlabImg.style.display = 'none';
    wallMsImg.style.display = 'none';
    wallShakerImg.style.display = 'none';
})


wallCabImg1 = document.querySelector('#wall-cabinet-images-1');
wallCabImg2 = document.querySelector('#wall-cabinet-images-2');
wallCabImg3 = document.querySelector('#wall-cabinet-images-3');
wallCabColor1 = document.querySelector('#wall-cabinet-color-1');
wallCabColor2 = document.querySelector('#wall-cabinet-color-2');
wallCabColor3 = document.querySelector('#wall-cabinet-color-3');
wallCabText1 = document.querySelector('#wall-cabinet-text-1');
wallCabText2 = document.querySelector('#wall-cabinet-text-2');
wallCabText3 = document.querySelector('#wall-cabinet-text-3');

wallCabColor1.addEventListener('click', function () {
    wallCabImg1.style.display = 'grid';
    wallCabText1.style.display = 'inline-block';
    wallCabImg2.style.display = 'none';
    wallCabText2.style.display = 'none';
    wallCabImg3.style.display = 'none';
    wallCabText3.style.display = 'none';
})
wallCabColor2.addEventListener('click', function () {
    wallCabImg2.style.display = 'grid';
    wallCabText2.style.display = 'inline-block';
    wallCabImg1.style.display = 'none';
    wallCabText1.style.display = 'none';
    wallCabImg3.style.display = 'none';
    wallCabText3.style.display = 'none';
})
wallCabColor3.addEventListener('click', function () {
    wallCabImg3.style.display = 'grid';
    wallCabText3.style.display = 'inline-block';
    wallCabImg1.style.display = 'none';
    wallCabText1.style.display = 'none';
    wallCabImg2.style.display = 'none';
    wallCabText2.style.display = 'none';
})

//base cabinet section
baseSlabImg = document.querySelector('#base-slab-img');
baseMsImg = document.querySelector('#base-ms-img');
baseShakerImg = document.querySelector('#base-shaker-img');
baseBeadedImg = document.querySelector('#base-beaded-img');

baseSlabBtn = document.querySelector('#base-slab-btn');
baseMsBtn = document.querySelector('#base-ms-btn');
baseShakerBtn = document.querySelector('#base-shaker-btn');
baseBeadedBtn = document.querySelector('#base-beaded-btn');


baseSlabBtn.addEventListener('click', function () {
    baseSlabImg.style.display = 'inline-block';
    baseSlabBtn.style.opacity = 1;
    baseMsBtn.style.opacity = 0.4;
    baseShakerBtn.style.opacity = 0.4;
    baseBeadedBtn.style.opacity = 0.4;
    baseMsImg.style.display = 'none';
    baseShakerImg.style.display = 'none';
    baseBeadedImg.style.display = 'none';

})
baseMsBtn.addEventListener('click', function () {
    baseMsImg.style.display = 'inline-block';
    baseMsBtn.style.opacity = 1;
    baseSlabBtn.style.opacity = 0.4;
    baseShakerBtn.style.opacity = 0.4;
    baseBeadedBtn.style.opacity = 0.4;
    baseSlabImg.style.display = 'none';
    baseShakerImg.style.display = 'none';
    baseBeadedImg.style.display = 'none';

})
baseShakerBtn.addEventListener('click', function () {
    baseShakerImg.style.display = 'inline-block';
    baseShakerBtn.style.opacity = 1;
    baseSlabBtn.style.opacity = 0.4;
    baseMsBtn.style.opacity = 0.4;
    baseBeadedBtn.style.opacity = 0.4;
    baseSlabImg.style.display = 'none';
    baseMsImg.style.display = 'none';
    baseBeadedImg.style.display = 'none';

})
baseBeadedBtn.addEventListener('click', function () {
    baseBeadedImg.style.display = 'inline-block';
    baseBeadedBtn.style.opacity = 1;
    baseSlabBtn.style.opacity = 0.4;
    baseMsBtn.style.opacity = 0.4;
    baseShakerBtn.style.opacity = 0.4;
    baseSlabImg.style.display = 'none';
    baseMsImg.style.display = 'none';
    baseShakerImg.style.display = 'none';
})


baseCabImg1 = document.querySelector('#base-cabinet-images-1');
baseCabImg2 = document.querySelector('#base-cabinet-images-2');
baseCabImg3 = document.querySelector('#base-cabinet-images-3');
baseCabColor1 = document.querySelector('#base-cabinet-color-1');
baseCabColor2 = document.querySelector('#base-cabinet-color-2');
baseCabColor3 = document.querySelector('#base-cabinet-color-3');
baseCabText1 = document.querySelector('#base-cabinet-text-1');
baseCabText2 = document.querySelector('#base-cabinet-text-2');
baseCabText3 = document.querySelector('#base-cabinet-text-3');

baseCabColor1.addEventListener('click', function () {
    baseCabImg1.style.display = 'grid';
    baseCabText1.style.display = 'inline-block';
    baseCabImg2.style.display = 'none';
    baseCabText2.style.display = 'none';
    baseCabImg3.style.display = 'none';
    baseCabText3.style.display = 'none';
})
baseCabColor2.addEventListener('click', function () {
    baseCabImg2.style.display = 'grid';
    baseCabText2.style.display = 'inline-block';
    baseCabImg1.style.display = 'none';
    baseCabText1.style.display = 'none';
    baseCabImg3.style.display = 'none';
    baseCabText3.style.display = 'none';
})
baseCabColor3.addEventListener('click', function () {
    baseCabImg3.style.display = 'grid';
    baseCabText3.style.display = 'inline-block';
    baseCabImg1.style.display = 'none';
    baseCabText1.style.display = 'none';
    baseCabImg2.style.display = 'none';
    baseCabText2.style.display = 'none';
})

//cabinet hardware section
cabBarImg = document.querySelector('#cab-bar-img');
cabLatchImg = document.querySelector('#cab-latch-img');
cabKnobImg = document.querySelector('#cab-knob-img');
cabCupImg = document.querySelector('#cab-cup-img');
cabEdgeImg = document.querySelector('#cab-edge-img');

cabBarBtn = document.querySelector('#cab-bar-btn');
cabLatchBtn = document.querySelector('#cab-latch-btn');
cabKnobBtn = document.querySelector('#cab-knob-btn');
cabCupBtn = document.querySelector('#cab-cup-btn');
cabEdgeBtn = document.querySelector('#cab-edge-btn');


cabBarBtn.addEventListener('click', function () {
    cabBarImg.style.display = 'inline-block';
    cabBarBtn.style.opacity = 1;
    cabLatchBtn.style.opacity = 0.4;
    cabKnobBtn.style.opacity = 0.4;
    cabCupBtn.style.opacity = 0.4;
    cabEdgeBtn.style.opacity = 0.4;
    cabLatchImg.style.display = 'none';
    cabKnobImg.style.display = 'none';
    cabCupImg.style.display = 'none';
    cabEdgeImg.style.display = 'none';

})
cabLatchBtn.addEventListener('click', function () {
    cabLatchImg.style.display = 'inline-block';
    cabLatchBtn.style.opacity = 1;
    cabBarBtn.style.opacity = 0.4;
    cabKnobBtn.style.opacity = 0.4;
    cabCupBtn.style.opacity = 0.4;
    cabEdgeBtn.style.opacity = 0.4;
    cabBarImg.style.display = 'none';
    cabKnobImg.style.display = 'none';
    cabCupImg.style.display = 'none';
    cabEdgeImg.style.display = 'none';

})
cabKnobBtn.addEventListener('click', function () {
    cabKnobImg.style.display = 'inline-block';
    cabKnobBtn.style.opacity = 1;
    cabBarBtn.style.opacity = 0.4;
    cabLatchBtn.style.opacity = 0.4;
    cabCupBtn.style.opacity = 0.4;
    cabEdgeBtn.style.opacity = 0.4;
    cabBarImg.style.display = 'none';
    cabLatchImg.style.display = 'none';
    cabCupImg.style.display = 'none';
    cabEdgeImg.style.display = 'none';

})
cabCupBtn.addEventListener('click', function () {
    cabCupImg.style.display = 'inline-block';
    cabCupBtn.style.opacity = 1;
    cabBarBtn.style.opacity = 0.4;
    cabLatchBtn.style.opacity = 0.4;
    cabKnobBtn.style.opacity = 0.4;
    cabEdgeBtn.style.opacity = 0.4;
    cabBarImg.style.display = 'none';
    cabLatchImg.style.display = 'none';
    cabKnobImg.style.display = 'none';
    cabEdgeImg.style.display = 'none';
})
cabEdgeBtn.addEventListener('click', function () {
    cabEdgeImg.style.display = 'inline-block';
    cabEdgeBtn.style.opacity = 1;
    cabBarBtn.style.opacity = 0.4;
    cabLatchBtn.style.opacity = 0.4;
    cabKnobBtn.style.opacity = 0.4;
    cabCupBtn.style.opacity = 0.4;
    cabBarImg.style.display = 'none';
    cabLatchImg.style.display = 'none';
    cabKnobImg.style.display = 'none';
    cabCupImg.style.display = 'none';
})


cabImg1 = document.querySelector('#cab-images-1');
cabImg2 = document.querySelector('#cab-images-2');
cabImg3 = document.querySelector('#cab-images-3');
cabColor1 = document.querySelector('#cab-color-1');
cabColor2 = document.querySelector('#cab-color-2');
cabColor3 = document.querySelector('#cab-color-3');
cabText1 = document.querySelector('#cab-text-1');
cabText2 = document.querySelector('#cab-text-2');
cabText3 = document.querySelector('#cab-text-3');

cabColor1.addEventListener('click', function () {
    cabImg1.style.display = 'grid';
    cabText1.style.display = 'inline-block';
    cabImg2.style.display = 'none';
    cabText2.style.display = 'none';
    cabImg3.style.display = 'none';
    cabText3.style.display = 'none';
})
cabColor2.addEventListener('click', function () {
    cabImg2.style.display = 'grid';
    cabText2.style.display = 'inline-block';
    cabImg1.style.display = 'none';
    cabText1.style.display = 'none';
    cabImg3.style.display = 'none';
    cabText3.style.display = 'none';
})
cabColor3.addEventListener('click', function () {
    cabImg3.style.display = 'grid';
    cabText3.style.display = 'inline-block';
    cabImg1.style.display = 'none';
    cabText1.style.display = 'none';
    cabImg2.style.display = 'none';
    cabText2.style.display = 'none';
})
