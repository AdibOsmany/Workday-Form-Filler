var x=0;
var low=500;
var high=6000;
var mid=750;


function enterOption(id, location, choice, time){
    x=x+time;
    setTimeout(() => {
        document.getElementById(id).click();
    }, x);
    x=x+time;
    setTimeout(() => {
        document.getElementsByTagName('UL')[location].children[choice].click();
    }, x);
}

function SaC(time){
    x=x+time;
    setTimeout(() => {
        document.getElementsByClassName('css-189s4m9')[0].click();
    }, x);
}

function HaU(time){
    x=x+time;
    setTimeout(() => {
        document.getElementsByClassName('css-12zup1l')[0].children[0].click();
    }, x);
    x=x+time;
    setTimeout(() => {
        document.getElementsByClassName('css-1vxo9mm')[54].click();
    }, x);
}

function checkBox(id,time){
    x=x+time;
    setTimeout(() => {
        document.getElementById(id).click();

    }, x);
}
/****************************************************************************************************/
enterOption('input-46',2,1,low);
enterOption('input-48',2,2,low);
enterOption('input-50',2,2,low);
enterOption('input-54',2,2,low);
enterOption('input-58',2,16,low);
enterOption('input-90',2,2,low);
enterOption('input-92',2,15,low);
enterOption('input-122',2,1,low);
enterOption('input-124',2,1,low);
enterOption('input-128',2,2,low);
enterOption('input-130',2,6,low);
enterOption('input-132',2,1,low);
enterOption('input-134',2,1,low);
enterOption('input-138',2,2,low);
enterOption('input-140',2,2,low);
enterOption('input-142',2,2,low);
enterOption('input-146',2,2,low);
enterOption('input-150',2,2,low);
enterOption('input-154',2,1,low);