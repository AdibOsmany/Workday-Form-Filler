document.getElementById('ComcastForm').addEventListener('click', function(){
    chrome.tabs.executeScript({
        file: "CASTinjector.js"
    });
});

document.getElementById('GDITForm').addEventListener('click', function(){
    chrome.tabs.executeScript({
        file: "GDITinjector.js"
    });
});

document.getElementById('PNCForm').addEventListener('click', function(){
    chrome.tabs.executeScript({
        file: "PNCinjector.js"
    });
});


document.getElementById('MerckForm').addEventListener('click', function(){
    chrome.tabs.executeScript({
        file: "Merckinjector.js"
    });
});

document.getElementById('RaytheonForm').addEventListener('click', function(){
    chrome.tabs.executeScript({
        file: "RTXinjector.js"
    });
});

document.getElementById('VerizonForm').addEventListener('click', function(){
    chrome.tabs.executeScript({
        file: "VERIZONinjector.js"
    });
});


