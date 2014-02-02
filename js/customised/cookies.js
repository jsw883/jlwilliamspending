/*!
 * Generic scripts for getting and clearing cookies using js in html.
 */

$(document).ready(function () {
  var wedding = getCookieByName('wedding');
  if (wedding == 'done') {
    $('#div-rsvp-wedding').addClass("hidden");
    $('#rsvp-done-wedding').removeClass("hidden");
  }
  var evening = getCookieByName('evening');
  if (evening == 'yes') {
    $('#div-rsvp-evening').addClass("hidden");
    $('#rsvp-yes-evening').removeClass("hidden");
  } else if (evening == 'no') {
    $('#div-rsvp-evening').addClass("hidden");
    $('#rsvp-no-evening').removeClass("hidden");
  }
});

function getCookieByName(name) {

    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    
    for(var i = 0 ; i < cookies.length ; i++) {
        
        x = cookies[i].substr(0, cookies[i].indexOf("="));
        y = cookies[i].substr(cookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        
        if (x == name) {
            return unescape(y);
        }
        
    }
    
    return null;
    
}

function clearAllCookies(name) {

    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    
    for(var i = 0 ; i < cookies.length ; i++) {
        
        x = cookies[i].substr(0, cookies[i].indexOf("="));
        y = cookies[i].substr(cookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        
        document.cookie = x + "=cleared;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        
    }
    
    location.reload();
    
    return null;
    
}