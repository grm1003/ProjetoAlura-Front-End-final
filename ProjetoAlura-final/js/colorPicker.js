$(document).ready(function () {
    $('#cores').on("input change", function () {
      // Change Body Background Color
      $(".fundo").css("background-color", $(this).val());
    });
  });