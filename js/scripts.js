$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                '<div class="form-group">' +
                  '<label for="new-street">Street</label>' +
                  '<input type="text" class="form-control new-street">' +
                '</div>' +
                '<div class="form-group">' +
                  '<label for="new-city">City</label>' +
                  '<input type="text" class="form-control new-city">' +
                '</div>' +
                '<div class="form-group">' +
                  '<label for="new-state">State</label>' +
                  '<input type="text" class="form-control new-state">' +
                '</div>' +
              '</div>');
  })


})
