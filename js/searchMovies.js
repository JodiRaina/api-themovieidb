$(document).ready(function(){
    $("#searchMovies").on("keyup", function() {
      let value = $(this).val().toLowerCase();
      $("#movies .col").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });