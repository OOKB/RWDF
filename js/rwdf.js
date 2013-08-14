// set common height of triptych blocks on homepage
$(document).ready(function() {
  var blockwidth = $('.span4').width();
  var blockheight = blockwidth/1.32;
  $('.triptych .trio').height(blockheight);
});

// subtract height of projects so prev/next buttons show up in right places
$(document).ready(function() {
  var projectheight = $('article.project').height();
  var iconheight    = $('article.project div.tags.top').height();
  var imageheight    = $('article.project div.leadimage').height();
  var hedheight     = $('article.project h2').height();
  var relpos        = (80+projectheight-iconheight-hedheight-imageheight)*-1;
  $('.minus-top .btn').css('top',relpos);
});


