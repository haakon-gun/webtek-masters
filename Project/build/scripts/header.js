
document.write(`
<header id="website-header">
  <nav class="h-centered">

     <a class="header-link-image" href="front.html" title="Forside">
          <span>
              <img id="headerLogo" alt="Forside" src="resources/logo.png">
          </span>
      </a>

      <a class="header-link" id="link1" href="about.html">
          <span><p>Om oss</p></span>
      </a>
      <a class="header-link" id="link2" href="treatments.html">
          <span><p>Behandlinger</p></span>
      </a>
      <a class="header-link" id="link3" href="prices.html">
          <span><p>Priser</p></span>
      </a>
      <a class="header-link" id="link4" href="contact.html">
          <span><p>Kontakt</p></span>
      </a>

      <span id="hamburgerMenu" onclick="openNav()">&#9776</span>
      <div id="myNav" class="overlay">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <div class="overlay-content">
          <a href="about.html">Om oss</a>
          <a href="treatments.html">Behandlinger</a>
          <a href="prices.html">Priser</a>
          <a href="contact.html">Kontakt</a>
        </div>
      </div>

  </nav>
</header>`);

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
    document.getElementById("headerLogo").style.marginTop = "3px";
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
