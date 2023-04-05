

// Get the button that triggers the modal
$(document).ready(function() {
  $('#scrollBtn').click(function() {
    $('html, body').animate({
      scrollTop: $('#myDiv').offset().top
    }, 1000);
  });
});
