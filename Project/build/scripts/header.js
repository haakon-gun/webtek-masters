
document.write('\
\
<header id="website-header">\
  <nav class="h-centered">\
\
\     <a class="header-link-image" href="front.html" title="Forside">\
          <span>\
              <img id="headerLogo" alt="Forside" src="resources/logo.png">\
          </span>\
      </a>\
\
      <a class="header-link" href="about.html">\
          <span><p>Om oss</p></span>\
      </a>\
      <a class="header-link" href="treatments.html">\
          <span><p>Behandlinger</p></span>\
      </a>\
      <a class="header-link" href="prices.html">\
          <span><p>Priser</p></span>\
      </a>\
      <a class="header-link" href="contact.html">\
          <span><p>Kontakt</p></span>\
      </a>\
  </nav>\
</header>');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("website-header").style.height ="80px"
    document.getElementById("website-header").style.fontSize ="100%"
    console.log("pess")
  } else {
    document.getElementById("website-header").style.width ="100%"
    document.getElementById("website-header").style.height = "180px"
    document.getElementById("headerLogo").style.width = "200px"
  }
}