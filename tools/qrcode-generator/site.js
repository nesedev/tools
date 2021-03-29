const qrCanvas = document.querySelector('#qr-code');
const qrImg = document.querySelector('#qr-code-img');
const qrText = document.querySelector('#qr-text');

function generateCode() {
  document.querySelector('#qr-code').innerHTML = '';

  QrCreator.render({
    text: document.querySelector('#qr-text').value,
    radius: 0,
    ecLevel: 'L',
    background: 'white',
    size: 1770 // in pixels
  }, qrCanvas);

  qrImg.src = qrCanvas.toDataURL();
}

// document.addEventListener('keypress', function (e) {
//   if (e.keyCode == 13) {
//     generateCode();

//     e.preventDefault();
//   };
// });

generateCode();

let typingTimer;
let typingDelay = 250;

qrText.addEventListener('input', function() {
  clearTimeout(typingTimer);
});

qrText.addEventListener('keyup', function() {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, typingDelay);
});

function doneTyping() {
  generateCode();
}