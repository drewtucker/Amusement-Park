
$(document).ready(function() {
  $("#heightForm").submit(function(event) {
    event.preventDefault();
    var askHeight = parseInt($("input#heightInput").val());
    if (askHeight < 48) {
      $("#merry-go-round").show();
      $("#roller-coaster").hide();
      $("#extreme-coaster").hide();
    }
    else if (askHeight > 84) {
      $("#merry-go-round").show();
      $("#roller-coaster").show();
      $("#extreme-coaster").hide();
    }
    else {
      $("#merry-go-round").show();
      $("#roller-coaster").show();
      $("#extreme-coaster").show();
    }
  });

});
