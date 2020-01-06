// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 700) {     // If page is scrolled more than 700px
      $('#scroll-btn').fadeIn(200);     // Fade in the arrow
  } else {
      $('#scroll-btn').fadeOut(200);   // Else fade out the arrow
  }
});
$('#scroll-btn').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});