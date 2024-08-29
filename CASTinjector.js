
//children[1]-yes
//children[2]-no
var x=0;
var y=600;
var z=8000;
var t=1500;



//--------------------------------------------------------------------------------------------//
function enterOption(id, location, choice, time){
    x=x+time;
    setTimeout(() => {
        document.getElementById(id).click();
    }, x);
    setTimeout(() => {
        document.getElementsByTagName('UL')[location].children[choice].click();
    }, x);
}

function SaC(time){
    x=x+time;
    setTimeout(() => {
        document.getElementsByClassName('css-a9u6na')[0].click();
    }, x);
}


function textBox(id, text, time){
    x=x+time;
    setTimeout(() => {

        document.getElementById(id).value=text;

}, x);
}
//--------------------------------------------------------------------------------------------//

x=x+t;
setTimeout(() => {
    document.getElementsByClassName('css-ujzx5o')[0].click()


}, x);

x=x+t;
setTimeout(() => {
    document.getElementsByClassName('css-kbbc15')[1].children[0].click()
}, x);


x=x+t;
setTimeout(() => {
    document.getElementsByClassName('css-pl53xa')[1].click();
}, x);





SaC(t);

SaC(z);

enterOption('input-69',2,1,z);

enterOption('input-73',2,1,y);
enterOption('input-75',2,4,y);
enterOption('input-77',2,1,y);
enterOption('input-79',2,1,y);
enterOption('input-81',2,1,y);
enterOption('input-83',2,2,y);
enterOption('input-85',2,2,y);
enterOption('input-89',2,2,y);
enterOption('input-93',2,2,y);
enterOption('input-97',2,2,y);
enterOption('input-101',2,2,y);
enterOption('input-105',2,4,y);
enterOption('input-107',2,4,y);
enterOption('input-109',2,3,y);
enterOption('input-111',2,1,y);
enterOption('input-113',2,2,y);
enterOption('input-117',2,1,y);

SaC(y);
enterOption('input-118',3,3,z);
enterOption('input-119',3,2,y);
enterOption('input-120',3,3,y);

x=x+y;
    setTimeout(() => {
        document.getElementById('input-121').click();

    }, x);

SaC(y);




    
x=x+y;
    setTimeout(() => {
        document.getElementsByClassName("css-41zxn6")[1].click()

    }, x);

    
    


