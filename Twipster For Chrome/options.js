
// Update toast
var updateToast = function(toastText){
  $('.toast').text(toastText).show().delay(3000).fadeOut(800);
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
  $('.example-tweet-text').css( "font-size", twipsterFontSize );
  updateToast('Font Size Updated. Refresh Twitter.com to see the changes.');
  //$('.toast').text('Settings Updated. Refresh Twitter.com to see the changes.').show().delay(3000).fadeOut(800);
});

// Theme
// Retrieve theme from localStorage
var storedTheme = localStorage['twipsterTheme'];
if (storedFontSize == ''){
  localStorage['twipsterTheme'] = 'minimal'; 
}

// Display current theme settings
$('#theme-' + storedTheme).addClass('active');
$('.example-tweet-text').addClass('.theme-' + storedTheme);

// Set new theme value
$('.set-theme').click(function(){
  $('.set-theme').removeClass('active');
  $(this).addClass('active');
  var twipsterTheme = $(this).attr('data-theme');
  localStorage['twipsterTheme'] = twipsterTheme;
  console.log(twipsterTheme);
  $('.example-tweet-text').addClass('.theme-' + storedTheme);
  updateToast('Theme Updated. Refresh Twitter.com to see the changes.');
});




