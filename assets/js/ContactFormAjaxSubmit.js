$(document).ready(function() {
  $("#ContactForm").submit(function(e){
    e.preventDefault();
    var action = $(this).attr("action");
    $.ajax({
      type: "POST",
      url: action,
      crossDomain: true,
      data: new FormData(this),
      dataType: "json",
      contentType: "multipart/form-data",
      processData: false,
      contentType: false,
      headers: {
        "Accept": "application/json"
      }
    }).done(function() {
       $('.success').addClass('is-active');
    }).fail(function() {
       alert("Une erreur s'est produite, veuillez réessayer.")
    });
  });
});
