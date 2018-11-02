//
// ========================================
//      BASIC SCRIPT FOR INDEX.HTML
// ========================================


$('#sweetalert').on('click', function() {
  swal({
    type: 'error',
    title: 'Sorry',
    text: 'but this section is not available yet',
  });
});


$(document).ready(function() {
  $("#btn-status-1").click(function() {
    var elem = $("#btn-status-1").text();
    if (elem == "Read more") {
      $("#btn-status-1").text("Read less");
    } else {
      $("#btn-status-1").text("Read more");
    }
  });
  $("#btn-status-2").click(function() {
    var elem = $("#btn-status-2").text();
    if (elem == "Read more") {
      $("#btn-status-2").text("Read less");
    } else {
      $("#btn-status-2").text("Read more");
    }
  });
});
