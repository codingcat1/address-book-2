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
  $("#add-phone").click(function(){
    $("#new-phones").append('<div class="new-phone-section">'+
                '<div class="form-group">'+
                  '<label for="new-phone">Phone</label>'+
                  '<input type="text" class="form-control new-phone">'+
                '</div>'+
              '</div>');

  })
  $("#add-email").click(function(){
    $("#new-emails").append('<div class="new-email-section">'+
                '<div class="form-group">'+
                  '<label for="new-email">Email</label>'+
                  '<input type="text" class="form-control new-email">'+
                '</div>'+
              '</div>');

  })
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses: [], phones: [], emails: [] };

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();

      var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState };
      newContact.addresses.push(newAddress);
    });

    $('.new-phone-section').each(function(){
      var inputtedPhone = $(this).find("input.new-phone").val();
      newContact.phones.push(inputtedPhone);
    });

    $('.new-email-section').each(function(){
      var inputtedEmail = $(this).find("input.new-email").val();
      newContact.emails.push(inputtedEmail);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
      });
      $("ul#phonenumbers").text("");
      newContact.phones.forEach(function(phone) {
        //debugger;
         var formattedPhone = "(" + phone.slice(0,3) + ")" + phone.slice(3, 6) + "-" + phone.slice(6, 10);
        $("ul#phonenumbers").append("<li>" + formattedPhone + "</li>");
      });
      $("ul#emails").text("");
      newContact.emails.forEach(function(email) {
        $("ul#emails").append("<li>" + email + "</li>");
      });
    });
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
    $("input.new-phone").val("");
    $("input.new-email").val("");

  });
});
