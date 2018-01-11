
$(document).ready(function() {
  $("#heightForm").submit(function(event) {
    event.preventDefault();
    var askHeight = parseInt($("input#heightInput").val());
    console.log(askHeight);
    if (isNaN(askHeight) || askHeight === 0) {
      return alert("Please enter a valid number.");
      $("#merry-go-round").hide();
      $("#roller-coaster").hide();
      $("#extreme-coaster").hide();
    }
    else if (askHeight < 48) {
      $("#merry-go-round").show();
      $("#roller-coaster").hide();
      $("#extreme-coaster").hide();
    }
    else if (askHeight > 84) {
      $("#merry-go-round").show();
      $("#roller-coaster").show();
      $("#extreme-coaster").hide();
    }
    else if (askHeight > 1 || askHeight < 84) {
      $("#merry-go-round").show();
      $("#roller-coaster").show();
      $("#extreme-coaster").show();
    }
  });

});
