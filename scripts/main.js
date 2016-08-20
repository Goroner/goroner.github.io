'use strict';

(function($){
  $(window).on('keyup keydown', function(e){
    if(e.ctrlKey && e.keyCode == 80){
      e.preventDefault();
      $('.global-search').addClass('global-search--active');
      $('.global-search__input').focus();
    } 
  });
}(jQuery));