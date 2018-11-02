//
// ========================================
//      BASIC SCRIPT FOR INDEX.HTML
// ========================================
//

$(document).ready(function() {
  // ======================================================
  //      short animations for specific elements
  // ======================================================
  $(".profile-img").addClass("animated fadeInUp");


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

  $('html, body').animate({
      scrollTop: $("#education").offset().top
  }, 1000);






  //end of document ready function
});
