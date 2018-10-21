function clockie(){
  date=new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var period;
  if (h < 10) {h="0"+h};
  if (m < 10) {m="0"+m};
  if (s < 10) {s="0"+s};
  if (h< 12) {period="AM"} else { period="PM"; h-=12};

  document.getElementById('clock').innerHTML = h + ":" + m + ":" + s+" "+period;
  setTimeout("clockie()", 1000);
}