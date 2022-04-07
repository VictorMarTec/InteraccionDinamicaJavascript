//alert();

let allRadious = document.getElementById('allRadious');
let radiousLT = document.getElementById('radiousLT');
let radiousLB = document.getElementById('radiousLB');
let radiousRB = document.getElementById('radiousRB');
let radiousRT = document.getElementById('radiousRT');

let taReview = document.getElementById('taReview');

let inputLT = document.getElementById('inputLT');
let inputLB = document.getElementById('inputLB');
let inputRB = document.getElementById('inputRB');
let inputRT = document.getElementById('inputRT');

let widthBorder = document.getElementById('widthBorder');
let btnWidth = document.getElementById('btnWidth');

let borderSolid = document.getElementById('borderSolid');
let borderDotted = document.getElementById('borderDotted');
let borderDashed = document.getElementById('borderDashed');
let borderDouble = document.getElementById('borderDouble');
let borderGroove = document.getElementById('borderGroove');
let borderRidge = document.getElementById('borderRidge');
let borderInset = document.getElementById('borderInset');
let borderOutset = document.getElementById('borderOutset');
let borderHidden = document.getElementById('borderHidden');
let borderNone = document.getElementById('borderNone');

let borderColor = document.getElementById('borderColor');
let alphaBorder = document.getElementById('alphaBorder');

let allBorder = document.getElementById('allBorder');
let topBorder = document.getElementById('topBorder');
let rightBorder = document.getElementById('rightBorder');
let bottomBorder = document.getElementById('bottomBorder');
let leftBorder = document.getElementById('leftBorder');
var estilo = "solid";

radiousLT.oninput = function (e) {
    inputLT.value = radiousLT.value;

    if (allRadious.checked) {
        taReview.style.borderRadius = radiousLT.value + 'px';
        inputLB.value = radiousLT.value;
        inputRB.value = radiousLT.value;
        inputRT.value = radiousLT.value;

        radiousLB.value = radiousLT.value;
        radiousRB.value = radiousLT.value;
        radiousRT.value = radiousLT.value;
    }

    else {
        taReview.style.borderTopLeftRadius = radiousLT.value + 'px';
    }

};

radiousRT.oninput = function (e) {
    inputRT.value = radiousRT.value;
    taReview.style.borderTopRightRadius = radiousRT.value + 'px';
};

radiousLB.oninput = function (e) {
    inputLB.value = radiousLB.value;
    taReview.style.borderBottomLeftRadius = radiousLB.value + 'px';
};

radiousRB.oninput = function (e) {
    inputRB.value = radiousRB.value;
    taReview.style.borderBottomRightRadius = radiousRB.value + 'px';
};

allRadious.oninput = function (e) {
    if (!allRadious.checked) {
        taReview.style.borderTopRightRadius = '0px';
        taReview.style.borderBottomLeftRadius = '0px';
        taReview.style.borderBottomRightRadius = '0px';
        inputLB.value = 0;
        inputRB.value = 0;
        inputRT.value = 0;

        radiousLB.value = 0;
        radiousRB.value = 0;
        radiousRT.value = 0;
    }
};

widthBorder.oninput = function(e){
    taReview.style.borderWidth=widthBorder.value + 'px';
};

btnWidth.onclick=function(e){
    taReview.style.borderWidth = '1px';
    widthBorder.value = 1;
};

borderSolid.onclick=function(e){
    taReview.style.borderStyle = 'solid';
    estilo = 'solid';
};

borderDotted.onclick=function(e){
    taReview.style.borderStyle = 'dotted';
    estilo = 'dotted';
};

borderDashed.onclick=function(e){
    taReview.style.borderStyle = 'dashed';
    estilo = 'dashed';
};

borderDouble.onclick=function(e){
    taReview.style.borderStyle = 'double';
    estilo = 'double';
};

borderGroove.onclick=function(e){
    taReview.style.borderStyle = 'groove';
    estilo = 'groove';
};

borderRidge.onclick=function(e){
    taReview.style.borderStyle = 'ridge';
    estilo = 'ridge';
};

borderInset.onclick=function(e){
    taReview.style.borderStyle = 'inset';
    estilo = 'inset';
};

borderOutset.onclick=function(e){
    taReview.style.borderStyle = 'outset';
    estilo = 'outset';
};

borderHidden.onclick=function(e){
    taReview.style.borderStyle = 'hidden';
    estilo = 'hidden';
};

borderNone.onclick=function(e){
    taReview.style.borderStyle = 'none';
    estilo = 'none';
};


borderColor.oninput=function(e){
    taReview.style.borderColor=borderColor.value;
};

sliderColor.oninput=function(e){
    taReview.style.opacity=(sliderColor.value)/255;
};

btnColor.onclick=function(e){
    taReview.style.opacity = '255';
    sliderColor.value = 255;
};

allBorder.onclick=function(e){
    console.log(estilo);
    taReview.style.borderStyle=estilo;
};

topBorder.onclick=function(e){
    taReview.style.borderStyle='none';
    taReview.style.borderTopStyle = estilo;
    console.log(estilo);
};

rightBorder.onclick=function(e){
    taReview.style.borderStyle='none';
    taReview.style.borderRightStyle = estilo;
};
bottomBorder.onclick=function(e){
    taReview.style.borderStyle='none';
    taReview.style.borderBottomStyle = estilo;
};
leftBorder.onclick=function(e){
    taReview.style.borderStyle='none';
    taReview.style.borderLeftStyle = estilo;
};