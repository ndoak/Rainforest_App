// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
$(document).on('ready page:load', function() {
  $(#new_review).on('submit', function(e) {
      e.preventDefault();
      var self = $(this);
      $.ajax({
        // this below refers to the object on which the event is taking place
        // in this case it is the form
        // assigning var self allows you to only convert this to jQuery object once
        url: self.attr('action'),
        type: self.attr('method'),
        dataType:'script',
        //will take the data from the form
        data: self.serialize()
          }
        }
      });
  });
});
// when you do a GET request you get a query string parameter
// when you do a POST request it will do the same thing without the query
//serialize creates the comment=blahblahblah in your URL
