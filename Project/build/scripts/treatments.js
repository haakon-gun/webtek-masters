/*
HOLDER PÅ MED FUNKSJONENE (e mye feil)

IKKE RØR!
*/

document.getElementById("1").addEventListener("click", function(){
  document.getElementById("hull").style.display = "block";
  document.getElementById("tann").style.display = "none";
}
);

document.getElementById("2").addEventListener("click", function(){
  document.getElementById("hull").style.display = "none";

  var x = document.getElementById("tann");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
}
);

/*
var x = document.getElementById("hull");

if (document.getElementById("hull").style.display = "block") {
  return
}
else {
  if (x.style.display === "none") {
    x.style.display = "block";
    console.log("Trym ER KUL")
  } else {
    x.style.display = "none";
  }
}*/
