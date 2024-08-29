var x=0;
var low=500;
var high=7000;
var mid=(low*2);


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
        document.getElementsByClassName('css-1fj9w0a')[0].click();
    }, x);
}

function HaU(time){
    x=x+time;
    setTimeout(() => {
        document.getElementsByClassName('css-19ce3yz')[0].click();
    
    
    }, x);
    
    x=x+time;
    setTimeout(() => {
        document.getElementsByClassName('css-19ngtar')[0].children[5].click(0);
    }, x);
}
function checkBox(id,time){
    x=x+time;
    setTimeout(() => {
        document.getElementById(id).click();

    }, x);
}

HaU(mid);
SaC(mid);
SaC(high);
enterOption('input-81',2,2,high);
enterOption('input-83',2,2,low);
enterOption('input-85',2,2,low);
enterOption('input-87',2,2,low);
SaC(low);
enterOption('input-91',2,1,high);
enterOption('input-93',2,2,low);
enterOption('input-103',2,4,low);
enterOption('input-105',2,5,low);
enterOption('input-111',2,2,low);
enterOption('input-113',2,1,low);
enterOption('input-115',2,1,low);
enterOption('input-117',2,2,low);
SaC(high*3);



enterOption('input-156',2,2,high);
enterOption('input-157',2,2,low);
enterOption('input-158',2,3,low);
checkBox('input-159',low);
SaC(low);
checkBox('64cbff5f364f10000aeec521b4ec0000',high);