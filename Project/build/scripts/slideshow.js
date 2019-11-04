
var i = 0;
var images = [];
var time = 3300;

images[0] = 'resources/stol.png';
images[2] = 'resources/ibsenbord.jpg';
images[1] = "resources/stoler.jpg";
images[3] = 'resources/ibsenrom.jpg';

function changeImg(){
  document.slideshow.src = images[i];

  if(i < images.length - 1){
    i++;
  } else{
    i = 0;
  }

  setTimeout("changeImg()", time);
}
window.onload = changeImg;
