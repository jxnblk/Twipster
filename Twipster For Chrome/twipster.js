  chrome.extension.sendMessage({method: "getFontSize"}, function(response) {
    console.log(response.status);
    if (response.status){
      var twipsterFontSize = response.status;
    } else {
      var twipsterFontSize = 16;
    };
    console.log(twipsterFontSize);
    $("<style id='twipster-settings' type='text/css'>.js-tweet-text { font-size: " + twipsterFontSize + "px !important; }</style>").appendTo("head");
  });
