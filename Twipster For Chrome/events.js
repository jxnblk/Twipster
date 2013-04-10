chrome.extension.onMessage.addListener(function(request, sender, sendMessage) {
    if (request.method == "getFontSize")
      sendMessage({status: localStorage['twipsterFontSize']});
    else if (request.method == "getTheme")
      sendMessage({status: localStorage['twipsterTheme']});
    else
      sendMessage({}); // snub them.
});