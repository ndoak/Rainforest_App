// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
$(document).on('ready page:load', function() {
  $('#search-form').submit(function(e) {
    e.preventDefault();
    var searchValue = $('#search').val();
    $.getScript('/products?search=' + searchValue);
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
  });
});
