$(function(){
  var _banner = [
    '<iframe width="940" height="300" frameboarder="0" src="b01.html" id="banner"></iframe>',
    '<iframe width="940" height="300" frameboarder="0" src="b02.html" id="banner"></iframe>',
    '<iframe width="940" height="300" frameboarder="0" src="b03.html" id="banner"></iframe>'
  ];
  var _i = 0;
  var $banner = $('#banner');
  setTimeout(function(){
    var _callee = arguments.callee;
    _i = ++_i % _banner.length;
    $banner.animate({
      opacity: 0
    }, 200, function(){
      $banner.html(_banner[_i]);
      $banner.animate({
        opacity: 1
      }, 800, function(){
        setTimeout(_callee, 2000);
      });

    });

  }, 2000);
});
