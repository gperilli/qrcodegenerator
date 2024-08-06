const QRCode = require('qrcode');

const qrCodeTextInput = document.querySelector("#qr-code-text-input");
const qrCodeOutput = document.querySelector("#qr-code-output");
const exportBtn = document.querySelector("#export-btn");

qrCodeTextInput.addEventListener('input', () => {
  const text = qrCodeTextInput.value;

  if (text) {
    console.log(text);
    QRCode.toCanvas(qrCodeOutput, text, function (error) {
      if (error) console.error(error)
    })
  } else {
    QRCode.toCanvas(qrCodeOutput, 'www.google.com', function (error) {
      if (error) console.error(error)
    })
  }
});

exportBtn.addEventListener('click', () => {
  const dataUrl = qrCodeOutput.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = 'qrcode.png';
  link.click();
});