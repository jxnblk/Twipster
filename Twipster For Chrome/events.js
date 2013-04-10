chrome.extension.onMessage.addListener(function(request, sender, sendMessage) {
    if (request.method == "getFontSize")
      sendMessage({status: localStorage['twipsterFontSize']});
    else
      sendMessage({});
});