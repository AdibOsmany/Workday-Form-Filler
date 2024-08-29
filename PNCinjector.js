
var x=0;
var low=600;
var high=8000;
var mid=1500;
var behind=5000;



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
        document.getElementsByClassName('css-a9u6na')[0].click();
    }, x);
}


function Back(time){
    x=x+time;
    setTimeout(() => {
        document.getElementsByClassName('css-1ff5dtf')[0].click();
    }, x);
}


function textBox(id, text, time){
    x=x+time;
    setTimeout(() => {
        
        document.getElementById(id).value=text;


}, x);
}

function HAU(location, option,time){
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
        document.getElementsByClassName('css-pl53xa')[option].click();
    }, x);
}

function checkBox(id,time){
    x=x+time;
    setTimeout(() => {
        document.getElementById(id).click();

    }, x);
}

HAU(0,4,mid);
SaC(mid);
SaC(high);
enterOption('input-164',1,1,high);
enterOption('input-166',1,2,low);
enterOption('input-170',1,1,low);
enterOption('input-172',1,1,low);
enterOption('input-174',1,2,low);
enterOption('input-176',1,2,low);
enterOption('input-186',1,2,low);
enterOption('input-190',1,2,low);
enterOption('input-192',1,2,low);
enterOption('input-194',1,1,low);
enterOption('input-196',1,2,low);
enterOption('input-200',1,2,low);
enterOption('input-202',1,1,low);



