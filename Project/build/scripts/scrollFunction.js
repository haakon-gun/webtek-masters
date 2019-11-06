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