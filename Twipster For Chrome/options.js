
// Update toast
var updateToast = function(toastText){
  $('.toast').hide();
  $('.toast').text(toastText).fadeIn(400).delay(3000).fadeOut(800);
};


// Font Size
// Retrieve font-size from localStorage
var storedFontSize = localStorage['twipsterFontSize'];
if (storedFontSize == ''){
  localStorage['twipsterFontSize'] = 20; 
}

// Display current font-size settings
$('#fs-' + storedFontSize).addClass('active');
$('.example-tweet-text').css('font-size', storedFontSize);


// Set new font size value
$('.set-font-size').click(function(){
  $('.set-font-size').removeClass('active');
  $(this).addClass('active');
  var twipsterFontSize = $(this).attr('data-font-size');
  localStorage['twipsterFontSize'] = twipsterFontSize;
  $('.example-tweet-text').css('font-size', twipsterFontSize);
  updateToast('Font Size Updated. Refresh Twitter.com to see the changes.');
});




