var x=0;
var low=600;
var high=8000;
var mid=1250;

function HaU(location, id, option,time){
    x=x+time;
    setTimeout(() => {
        document.getElementsByClassName('css-ujzx5o')[0].click()
    
    
    }, x);
    
    x=x+time;
    setTimeout(() => {
        document.getElementsByClassName('css-kbbc15')[location].children[0].click()
    }, x);
    
    
    x=x+time;
    setTimeout(() => {
        document.getElementsByClassName(id)[option].click();
    }, x);
}

function checkBox(id,time){
    x=x+time;
    setTimeout(() => {
        document.getElementById(id).click();

    }, x);
}

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
        document.getElementsByClassName('css-hnhvhs')[0].click();
    }, x);
}

HaU(14,'css-hr3jjd', 1,mid);
SaC(mid);
SaC(high);
enterOption('input-53',1,1,high);
enterOption('input-55',1,3,low);
checkBox('b2140208ea7f018debe7fb130101a746',low);
checkBox('5ee42e33f24101201f1fd89301015636',low);
enterOption('input-61',1,9,low);
enterOption('input-63',1,1,low);
SaC(low);
enterOption('input-64',1,2,high);
enterOption('input-65',1,2,low);
enterOption('input-66',1,2,low);
enterOption('input-67',1,4,low);
checkBox('input-68',low);
SaC(low);
checkBox('64cbff5f364f10000aeec521b4ec0000',high);