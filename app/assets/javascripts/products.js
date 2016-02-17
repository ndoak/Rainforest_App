// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
$(document).on('ready page:load', function() {
  $('#search-form').submit(function(e) {
    e.preventDefault();
    var searchValue = $('#search').val();
    $.getScript('/products?search=' + searchValue);
  });
  $(window).scroll(function) {
    var url = $('.pagination span.next').children().attr('href');
    if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      $('.pagination span.next').text("Fetching more products...");
      return $.getScript(url);
    }
  });
});
    // $.get('/products?search=' + searchValue)
    //  .done(function(data){
    //    console.log(data);
    //    $('#products').html(data);
    //  });
    // $.ajax({
    //   url: '/products?search=' + searchValue,
    //   type: 'GET',
    //   datatype: 'html'
    // }).done(function(data){
    //   $('#products').html(data);
    // });
