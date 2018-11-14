var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

function resize() {
  var actualInnerWidth = document.body.clientWidth;
  document.getElementById("B").style.width = actualInnerWidth + "px";
}

resize();
window.onresize = function() {
  resize();
};

/*** *** *** *** ***/

$('.A').mousemove(function(e) {
  var offs = $(this).offset(),
    p = {
      x: offs.left,
      y: offs.top
    },
    mPos = {
      x: e.pageX,
      y: e.pageY
    },
    x = mPos.x - p.x - ($('.insight').width() / 2),
    y = mPos.y - p.y - ($('.insight').height() / 2);
  $('.insight', this).css({
    left: x,
    top: y
  });
  $('.B', this).css({
    left: -x,
    top: -y
  });
});

/*** *** *** *** ***/

/*$(document).ready(function(){
	$('img').each(function(){
		var src = $(this).attr('src');
		$(this).css('background-image', 'url(' + src + ')');
	});
});

$(window).on("scroll", function() {
	var yScroll = $(this).scrollTop();
	$(".plax").css({"background-position": '50% ' + ((yScroll / 10) + 0) + '%'});
});
