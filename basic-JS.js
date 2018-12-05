//
// ========================================
//      BASIC SCRIPT FOR INDEX.HTML
// ========================================
//

$(document).ready(function() {
  // ======================================================
  //      short animations for specific elements
  // ======================================================

  $("#linkedIn").addClass("animated rollIn");
  $("#twitter").addClass("animated zoomInDown");
  $("#flickr").addClass("animated fadeInUp");
  $("#pinterest").addClass("animated wobble");


  // ======================================================
  // when something is clicked but the content is not ready
  // ======================================================
  $('.sth').on('click', function() {
    swal({
      type: 'error',
      title: 'Sorry',
      text: 'but this section is not available yet',
    });
  });
  // ============================================
  //      button btn-status-1 is clicked
  // ============================================
  $("#btn-status-1").click(function() {
    var elem = $("#btn-status-1").text();
    if (elem == "Read more") {
      $("#btn-status-1").text("Read less");
    } else {
      $("#btn-status-1").text("Read more");
    }
  });
  // ============================================
  //      button btn-status-2 is clicked
  // ============================================
  $("#btn-status-2").click(function() {
    var elem = $("#btn-status-2").text();
    if (elem == "Read more") {
      $("#btn-status-2").text("Read less");
    } else {
      $("#btn-status-2").text("Read more");
    }
  });

  // ============================================
  //      smooth scrolling - navbar
  // ============================================

  $('.nav a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });


  //end of document ready function
});
