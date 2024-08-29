var x=0;
var low=500;
var high=6000;
var mid=750;


function enterOption(id, location, choice, time){
    x=x+time;
    setTimeout(() => {
        document.getElementById(id).click();
    document.getElementsByTagName('UL')[location].children[choice].click();
    }, x);
}

function SaC(time){
    x=x+time;
    setTimeout(() => {
        document.getElementsByClassName('css-1ecqfnq')[0].click();
    }, x);
}

function HaU(time){
    x=x+time;
    setTimeout(() => {
        document.getElementsByClassName('css-12zup1l')[0].children[0].click();
    }, x);
    x=x+time;
    setTimeout(() => {
        document.getElementsByClassName('css-k6lv5y')[0].children[0].children[3].click();
    }, x);
}

function checkBox(id,time){
    x=x+time;
    setTimeout(() => {
        document.getElementById(id).click();

    }, x);
}
/****************************************************************************************************/
HaU(mid);
SaC(mid);
SaC(high);
enterOption('input-109',2,1,high);
enterOption('input-111',2,1,low);
enterOption('input-113',2,1,low);
enterOption('input-115',2,1,low);
enterOption('input-119',2,2,low);
enterOption('input-123',2,2,low);
enterOption('input-125',2,1,low);
enterOption('input-131',2,2,low);
SaC(low);
enterOption('input-135',2,1,high);
enterOption('input-137',2,1,low);
enterOption('input-139',2,11,low);
enterOption('input-161',2,1,low);
SaC(low);
enterOption('input-162',3,2,high);
checkBox('1d175767e01d1000aec0e3cb33900001',low);
enterOption('input-164',3,2,low);
checkBox('input-165',low);
SaC(low);