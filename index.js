
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

// surfaces section
srfImg11 = document.querySelector('#srf-image-1-1');
srfImg12 = document.querySelector('#srf-image-1-2');
srfImg13 = document.querySelector('#srf-image-1-3');
srfImg21 = document.querySelector('#srf-image-2-1');
srfImg22 = document.querySelector('#srf-image-2-2');
srfImg23 = document.querySelector('#srf-image-2-3');
srfImg31 = document.querySelector('#srf-image-3-1');
srfImg32 = document.querySelector('#srf-image-3-2');
srfImg33 = document.querySelector('#srf-image-3-3');
srfThumb11 = document.querySelector('#srf-thumb-1-1');
srfThumb12 = document.querySelector('#srf-thumb-1-2');
srfThumb13 = document.querySelector('#srf-thumb-1-3');
srfThumb21 = document.querySelector('#srf-thumb-2-1');
srfThumb22 = document.querySelector('#srf-thumb-2-2');
srfThumb23 = document.querySelector('#srf-thumb-2-3');
srfThumb31 = document.querySelector('#srf-thumb-3-1');
srfThumb32 = document.querySelector('#srf-thumb-3-2');
srfThumb33 = document.querySelector('#srf-thumb-3-3');
srfText11 = document.querySelector('#srf-text-1-1');
srfText12 = document.querySelector('#srf-text-1-2');
srfText13 = document.querySelector('#srf-text-1-3');
srfText21 = document.querySelector('#srf-text-2-1');
srfText22 = document.querySelector('#srf-text-2-2');
srfText23 = document.querySelector('#srf-text-2-3');
srfText31 = document.querySelector('#srf-text-3-1');
srfText32 = document.querySelector('#srf-text-3-2');
srfText33 = document.querySelector('#srf-text-3-3');

srfThumb11.addEventListener('click', function () {
    srfImg11.style.display = 'inline-block';
    srfText11.style.display = 'inline-block';
    srfImg12.style.display = 'none';
    srfText12.style.display = 'none';
    srfImg13.style.display = 'none';
    srfText13.style.display = 'none';
})
srfThumb12.addEventListener('click', function () {
    srfImg12.style.display = 'inline-block';
    srfText12.style.display = 'inline-block';
    srfImg11.style.display = 'none';
    srfText11.style.display = 'none';
    srfImg13.style.display = 'none';
    srfText13.style.display = 'none';
})
srfThumb13.addEventListener('click', function () {
    srfImg13.style.display = 'inline-block';
    srfText13.style.display = 'inline-block';
    srfImg11.style.display = 'none';
    srfText11.style.display = 'none';
    srfImg12.style.display = 'none';
    srfText12.style.display = 'none';
})
srfThumb21.addEventListener('click', function () {
    srfImg21.style.display = 'inline-block';
    srfText21.style.display = 'inline-block';
    srfImg22.style.display = 'none';
    srfText22.style.display = 'none';
    srfImg23.style.display = 'none';
    srfText23.style.display = 'none';
})
srfThumb22.addEventListener('click', function () {
    srfImg22.style.display = 'inline-block';
    srfText22.style.display = 'inline-block';
    srfImg21.style.display = 'none';
    srfText21.style.display = 'none';
    srfImg23.style.display = 'none';
    srfText23.style.display = 'none';
})
srfThumb23.addEventListener('click', function () {
    srfImg23.style.display = 'inline-block';
    srfText23.style.display = 'inline-block';
    srfImg21.style.display = 'none';
    srfText21.style.display = 'none';
    srfImg22.style.display = 'none';
    srfText22.style.display = 'none';
})
srfThumb31.addEventListener('click', function () {
    srfImg31.style.display = 'inline-block';
    srfText31.style.display = 'inline-block';
    srfImg32.style.display = 'none';
    srfText32.style.display = 'none';
    srfImg33.style.display = 'none';
    srfText33.style.display = 'none';
})
srfThumb32.addEventListener('click', function () {
    srfImg32.style.display = 'inline-block';
    srfText32.style.display = 'inline-block';
    srfImg31.style.display = 'none';
    srfText31.style.display = 'none';
    srfImg33.style.display = 'none';
    srfText33.style.display = 'none';
})
srfThumb33.addEventListener('click', function () {
    srfImg33.style.display = 'inline-block';
    srfText33.style.display = 'inline-block';
    srfImg31.style.display = 'none';
    srfText31.style.display = 'none';
    srfImg32.style.display = 'none';
    srfText32.style.display = 'none';
})