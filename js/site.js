// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $('#checkboxAlt').on("click", function () {
    if ($('#interested').is(':checked')) {
      $('#interested').prop("checked", false);
      $('#checkboxAlt').html("<p id=\"check\"></p>");
    }
    else {
      $('#interested').prop("checked", true);
      $('#checkboxAlt').html("<p id=\"check\">&#10004;</p>");
    }
  });
  $('#forInterested').on("click", function () { // For some reason for ckicking on the label to work the way it should the checked values need to be flipped?
    if ($('#interested').is(':checked')) {
      $('#interested').prop("checked", true);
      $('#checkboxAlt').html("<p id=\"check\"></p>");
    }
    else {
      $('#interested').prop("checked", false);
      $('#checkboxAlt').html("<p id=\"check\">&#10004;</p>");
    }
  });
});