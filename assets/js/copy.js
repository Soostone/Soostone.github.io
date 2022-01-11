var codeBlocks = document.querySelectorAll('.copyable pre.highlight');

codeBlocks.forEach(function (codeBlock) {
  var copyButton = document.createElement('button');
  copyButton.className = 'btn js-copy fs-2';
  copyButton.type = 'button';
  copyButton.ariaLabel = 'Copy code to clipboard';
  copyButton.innerText = 'Copy';

  codeBlock.parentNode.parentNode.insertAdjacentElement('afterbegin', copyButton);

  copyButton.addEventListener('click', function () {
    var code = codeBlock.querySelector('code').innerText.trim();
    window.navigator.clipboard.writeText(code);

    copyButton.innerText = 'Copied';
    copyButton.classList.add('copied');
    var fourSeconds = 2000;

    setTimeout(function () {
      copyButton.innerText = 'Copy';
      copyButton.classList.remove('copied');
    }, fourSeconds);
  });
});
