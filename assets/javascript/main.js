var home = '<div class="content">' +
'<img src="assets/images/logo.png">' +
'<h1>Anthony\'s Coal Fired Pizza</h1>' +
'<p>The best authentic coal pizzas in town.' +
'Come try our<br>unique recipes, including home-styled chicken wings,' +
'grilled paninis, delicious desserts, and of course our award winning' +
'coal fired pizzas.</p></div>';

var menu = '<div class="content">' +
'<h1>Our Menu</h1></div>';

var contact = '<div class="content">' +
'<h1>Contact us at:</h1></div>';


$('.container').append(home);

$('.nav-button').click(function() {
  $('.nav-button').removeClass('active');
  $(this).addClass('active');
})

$('.home').click(function() {
  $('.content').remove();
  $('.container').append(home);
})

$('.menu').click(function() {
  $('.content').remove();
  $('.container').append(menu);
})

$('.contact').click(function() {
  $('.content').remove();
  $('.container').append(contact);
})
