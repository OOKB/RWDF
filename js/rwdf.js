// set common height of triptych blocks on homepage
$(document).ready(function() {
  var blockwidth = $('.span4').width();
  var blockheight = blockwidth/1.32;
  $('.triptych .trio').height(blockheight);
});

// subtract height of projects so prev/next buttons show up in right places
$(document).ready(function() {
  var projectheight = $('article.project').height();
  var relpos = (61+projectheight)*-1;
  $('.minus-top .btn').css('top',relpos);
});


