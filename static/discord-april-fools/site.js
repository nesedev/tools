console.log('site ready');

var logoInput = document.getElementById('logo-input');
var logoInputButton = document.getElementById('logo-input-button');
var numberInput = document.getElementById('number-input');
var logoOutput = document.getElementById('logo-output');
var downloadButton = document.getElementById('download-button');
var canvas = document.getElementById('logo-canvas');
var ctx = canvas.getContext('2d');
ctx.fillRect(0, 0, canvas.width, canvas.height);
var templateImage = new Image();
var sampleImage = new Image();

var currentFile;
var currentImage = new Image();

logoInput.onchange = function(e) {
  currentFile = e.target.files[0];
  logoInputButton.innerText = currentFile.name;
  var reader  = new FileReader();
  reader.readAsDataURL(currentFile);
  reader.onloadend = function (e) {
    currentImage.src = e.target.result;
    currentImage.onload = function() {
      ctx.clearRect(0,0,canvas.width, canvas.height);
      ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.width);
      // ctx.drawImage(templateImage, 0, 0, canvas.width, canvas.width);
      addNotification();
    }
  }
}

numberInput.onchange = function() {
  addNotification();
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.width);
  addNotification();
}

downloadButton.onclick = function() {
  var link = document.createElement('a');
  var fileName = currentFile ? (currentFile.name.substring(0, currentFile.name.lastIndexOf('.')) || currentFile.name) + '-april-fools.png' : 'discord-april-fools.png';
  link.download = fileName;
  link.href = logoOutput.src;
  link.click();
}

function addNotification() {
  ctx.save();
  ctx.beginPath();
  ctx.arc(376, 376, 128, 0, 2*Math.PI);
  ctx.clip();
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.restore();
  
  ctx.fillStyle = '#F04747';
  ctx.beginPath();
  ctx.arc(376, 376, 86, 0, 2*Math.PI);
  ctx.fill();

  ctx.fillStyle = 'white';
  ctx.font = '700 125px Roboto Mono';
  ctx.fillText(numberInput.value, 338, 420); 

  logoOutput.src = canvas.toDataURL();
}

function init() {
  ctx.clearRect(0,0,canvas.width, canvas.height);

  currentImage.src = 'images/sample.png';
  currentImage.onload = function() {
    ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.width);
    addNotification();
  }
}
init();