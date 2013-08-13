// set common height of triptych blocks on homepage
$(document).ready(function() {
  var blockwidth = $('.span4').width();
  var blockheight = blockwidth/1.32;
  $('.triptych .trio').height(blockheight);
});

