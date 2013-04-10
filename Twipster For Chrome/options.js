
// Retrieve settings from localStorage
var storedFontSize = localStorage['twipsterFontSize'];
if (storedFontSize == ''){
  localStorage['twipsterFontSize'] = 20; 
}
console.log(storedFontSize);
$('#fs-' + storedFontSize).addClass('active');
$('.example-tweet-text').css( "font-size", storedFontSize );


// Set new font size value
$('.set-font-size').click(function(){
  $('.set-font-size').removeClass('active');
  $(this).addClass('active');
  var twipsterFontSize = $(this).attr('data-font-size');
  localStorage['twipsterFontSize'] = twipsterFontSize;
  console.log(twipsterFontSize);
  $('.example-tweet-text').css( "font-size", twipsterFontSize );
  $('.toast').text('Settings Updated. Refresh Twitter.com to see the changes.').show().delay(2000).fadeOut(800);
});



