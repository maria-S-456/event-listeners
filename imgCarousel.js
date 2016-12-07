$(document).ready(function() {
  $(".thumbnail").click(function(event) {
    $('.hero img').attr('src', $(event.currentTarget).find('img').attr('src'));
  });
});