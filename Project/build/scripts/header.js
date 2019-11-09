


function populateheaderDiv(){

  //Creating some elements and arrays for the header.
  var header = document.createElement("header");
  header.id = "website-header";
  var nav = document.createElement("nav");
  nav.className = "h-centered";
  var aTags = [];
  var spanTags = [];
  var pTags = [];
  var hrefs =["about.html", "treatments.html", "prices.html", "contact.html"];
  var texts = ["Om oss", "Behandlinger", "Priser", "Kontakt"];

  //Constants for the burger getElementById
  var aTags2 = [];
  var span = document.createElement("span");
  span.id = "hamburgerMenu";
  span.onclick = function() {openNav();};
  span.appendChild(document.createTextNode('\u2630'));
  var div = document.createElement("div");
  div.id = "myNav";
  div.className = "overlay";
  var divOverlay = document.createElement("div");
  divOverlay.className = "overlay-content";


  for(var i = 0; i<5; i++){
    aTags[i] = document.createElement("a");
    spanTags[i] = document.createElement("span");

    //burger menu
    aTags2[i] = document.createElement("a");

    //1 time.
    if(i==0){
      aTags[i].className = "header-link-image";
      aTags[i].href = "front.html";
      aTags[i].title = "Forside";
      var img = document.createElement("img");
      img.id ="headerLogo"
      img.alt = "Logo"
      img.src ="resources/logo.png";
      spanTags[i].appendChild(img);

      //burger meny
      aTags2[i].href = "javascript:void(0)";
      aTags2[i].className = "closebtn";
      aTags2[i].onclick = function() {closeNav();};
      aTags2[i].appendChild(document.createTextNode('\u00D7'));
      div.appendChild(aTags2[i]);
      //run 4 times.
    }else{
      aTags[i].className = "header-link";
      aTags[i].id = "link"+i;
      aTags[i].href = hrefs[i-1];
      pTags[i-1] = document.createElement("p");
      pTags[i-1].appendChild(document.createTextNode(texts[i-1]));
      spanTags[i].appendChild(pTags[i-1]);

      //burgerMeny
      aTags2[i].href = hrefs[i-1];
      aTags2[i].appendChild(document.createTextNode(texts[i-1]));
      divOverlay.appendChild(aTags2[i]);
    }
    aTags[i].appendChild(spanTags[i]);
    nav.appendChild(aTags[i]);
  }

  //burgerMenu
  div.appendChild(divOverlay);
  nav.appendChild(span);
  nav.appendChild(div);

  header.appendChild(nav);

  var body = document.getElementById("body");
  body.insertBefore(header, body.firstChild);


}


populateheaderDiv();



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("website-header").style.height = "60px";
    document.getElementById("website-header").style.fontSize = "100%";
    document.getElementById("headerLogo").style.width = "150px";
    document.getElementById("headerLogo").style.marginTop = "0px";
    document.getElementById("link1").style.height = "100%";
    document.getElementById("link2").style.height = "100%";
    document.getElementById("link3").style.height = "100%";
    document.getElementById("link4").style.height = "100%";
    document.getElementById("hamburgerMenu").style.marginTop = "10px";
  } else {
    document.getElementById("website-header").style.width = "100%";
    document.getElementById("website-header").style.height = "80px";
    document.getElementById("headerLogo").style.width = "200px";
    document.getElementById("link1").style.height = "75%";
    document.getElementById("link2").style.height = "75%";
    document.getElementById("link3").style.height = "75%";
    document.getElementById("link4").style.height = "75%";
    document.getElementById("hamburgerMenu").style.marginTop = "20px";
  }
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
