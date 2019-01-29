var userLang = navigator.language || navigator.userLanguage; 
userLang = userLang.substr(0, 2).toLowerCase();
// console.log(userLang);
function writeCookie(name,value,days) {
    var date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires=" + date.toGMTString();
        }else{
        	expires = "";
    	}
    document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
    var i, c, ca, nameEQ = name + "=";
    ca = document.cookie.split(';');
    for(i=0;i < ca.length;i++) {
        c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return '';
}
if (!readCookie("lang")) {
    writeCookie("lang", "kz", 3);
}
var r = readCookie("lang");

var ruButton = document.getElementById("#ruButton");
var kzButton = document.getElementById("#kzButton");
var kz = document.getElementsByName('dva')[0];
var ru = document.getElementsByName('dva')[1];
var en = document.getElementsByName('dva')[2];
var z = document.getElementsByName('dva');

function ruBut() {
    writeCookie("lang", "ru", 3);
    location.reload();
}
function kzBut() {
    writeCookie("lang", "kz", 3);
    location.reload();
}
function enBut() {
    writeCookie("lang", "en", 3);
    location.reload();
}
function a() {
    if (r == "kz") {
        kz.checked = true;
    }
    else if(r == "ru") {
        ru.checked = true;
    }
    else if(r == "en") {
        en.checked = true;
    }
}
a();

setTimeout(function() {
    var notif = document.getElementById('notif');
    var notif_not = document.getElementById('notif_not');
    var notif_done = document.getElementById('notif_done');
    if (navigator.cookieEnabled) {
        if (readCookie("cookie") == "true") {
            notif.style.bottom = "0px";
            notif_done.style.display = "block";
        }
        else {
            notif.style.bottom = "0px";
            notif_done.style.display = "block";
            writeCookie("cookie", "true", 60); 
        }
    }
    else {
        notif.style.bottom = "0px";
        notif_not.style.display = "block";
    }
}, 5000)
function hideNotif() {
    var notif = document.getElementById('notif');
    notif.style.bottom = "-80px";
}
