function startTime2() {
  
  var wedding = new Date(Date.parse("2014/05/13 17:10:00 EDT"));
  var today = new Date();
  
  $('#counter2-xs').text(dateDiffString(today,wedding,1));
  $('#counter2').text(dateDiffString(today,wedding,0));
  
  setTimeout(function(){startTime2()},500);
  
}

function dateDiffString(a, b, xs) {
  
  if (b.getTime() - a.getTime() < 0 ) {
    return "I am home!";
  }
  
  var s = (b.getSeconds() - a.getSeconds());
  var m = (b.getMinutes() - a.getMinutes());
  var H = (b.getHours() - a.getHours());
  var D = (b.getDate() - a.getDate());
  var M = (b.getMonth() - a.getMonth());
  
  if (s < 0) {
    m = m - 1;
    s = s + 60;
  }
  if (m < 0) {
    H = H - 1;
    m = m + 60;
  }
  if (H < 0) {
    D = D - 1;
    H = H + 24;
  }
  if (D < 0) {
    M = M - 1;
    D = D + daysInMonth(a.getYear(),a.getMonth());
  }
  
  var stringxs = "";
  var string = "";
  
  if (M != 0) {
    stringxs = stringxs + M + " M · ";
    string = string + M + " months · ";
  }
  if (D != 0) {
    stringxs = stringxs + D + " D · ";
    string = string + D + " days · ";
  }
  if (H != 0) {
    stringxs = stringxs + H + " H · ";
    string = string + H + " hours · ";
  }
  if (m != 0) {
    stringxs = stringxs + m + " m · ";
    string = string + m + " minutes · ";
  }
  stringxs = stringxs + s + " S";
  string = string + s + " seconds";
  
  if (xs == 1) {
    return stringxs;
  } else {
    return string;
  }
  
}

function daysInMonth(Y,M) {
  
  return new Date(Y,M,0).getDate();
  
}