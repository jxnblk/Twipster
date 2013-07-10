$(document).ready(function(){

  chrome.extension.sendMessage({method: "getFontSize"}, function(response) {
    if (response.status){
      var twipsterFontSize = response.status;
    } else {
      var twipsterFontSize = 20;
    };
    $("<style id='twipster-settings' type='text/css'>.js-tweet-text { font-size: " + twipsterFontSize + "px !important; opacity: 1 !important; }</style>").appendTo("head");
  });

  // Move "Photos and videos" link
  var photoText = $('.enhanced-media-thumbnails').find('a.list-link').text();
  var photoLink = $('.enhanced-media-thumbnails').find('a.list-link').prop('href');

  $('div.profile-nav').find('ul.js-nav-links').append('<li><a class="list-link js-nav" href="' + photoLink + '">' + photoText + '</a></li>');

  // Add create list button
  var listText = $('.content-header-buttons').find('.js-create-list-button').text();

  if ( listText !== '' ) {
    $('.profile-banner-footer').find('.default-footer').append('<button type="button" class="btn list-button" href="#" data-modal="list-new" data-element-term="create_list_button">' + listText + '</button>');
  }
  
  $('.profile-banner-footer').find('.default-footer button').on('click', function() {
    $('body').addClass('modal-enabled');
    $('#list-operations-dialog').fadeIn();
  });

  // Close overlay
  function closeOverlay() {
    $('body').removeClass('modal-enabled');
    $('#list-operations-dialog').fadeOut();
  };

  $('.close-modal-background-target, .modal-close').on('click', function() {
    closeOverlay();
  });

  // Key listenner
  document.onkeyup = function(e) {
    if ( e.keyCode === 27 ) {
      closeOverlay();
    };
  };
});