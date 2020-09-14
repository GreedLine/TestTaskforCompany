$(document).ready(function() {
  $("#contact-us-submit").click(function(e) {
    e.preventDefault();

    function close(){
      $('.popup-fade').fadeOut();
      $('.succesfully').fadeOut();
    }

    $.ajax({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      dataType: "json",
      data: {
        "name": $("#contact-us-form-name").val(),
        "email": $("#contact-us-form-email").val(),
        "message": $(".form-textarea").val()
        
      },
      success: function(data) {
        $("#contact-us-form").trigger('reset');
        $('.popup').fadeOut();
        $('.succesfully').fadeIn();
        setTimeout(close, 2000);
        console.log(data);

      },
      error: function(er) {
        console.log(er);
      }
    });

  });


});