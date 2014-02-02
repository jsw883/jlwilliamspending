/*!
 * RSVP submit validation using js in html.
 */

 function submitRSVPWeddingMD() {
  if ($('#rsvp-wedding-md input[name=rsvp-name]').val().length == 0) {
    BootstrapDialog.error(
      'Oops',
      'Please enter your name, so that we know who to expect!'
    );
  } else if ($('#rsvp-wedding-md input[name=rsvp-number-attending]').val().length == 0) {
    BootstrapDialog.error(
      'Oops',
      'Please let us know how many people you are including in your RSVP!'
    );
  } else {
    console.log('inside else');
    $('#rsvp-wedding-md').submit();
  }        
}
function submitRSVPWeddingXS() {
  if ($('#rsvp-wedding-xs input[name=rsvp-name]').val().length == 0) {
    BootstrapDialog.error(
      'Oops',
      'Please enter your name, so that we know who to expect!'
    );
  } else if ($('#rsvp-wedding-xs input[name=rsvp-number-attending]').val().length == 0) {
    BootstrapDialog.error(
      'Oops',
      'Please let us know how many people you are including in your RSVP!'
    );
  } else {
    console.log('inside else');
    $('#rsvp-wedding-xs').submit();
  }
}
function submitRSVPEvening() {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if ($('#rsvp-evening input[name=rsvp-name]').val().length == 0) {
    BootstrapDialog.error(
      'Oops',
      'Please enter your name, so that we know who to expect!'
    );
  } else if ($('#rsvp-evening input[name=rsvp-email]').val().length == 0) {
    BootstrapDialog.error(
      'Oops',
      'Please enter an email address, so we know how to get in touch with you!'
    );
  } else if (!re.test($('#rsvp-evening input[name=rsvp-email]').val())) {
    BootstrapDialog.error(
      'Oops',
      'Please enter a valid email address, so we know how to get in touch with you!'
    );
  } else if ($('#rsvp-evening .active input[name=rsvp-answer]').val() == null) {
    BootstrapDialog.error(
      'Oops',
      'Please choose if you are attending or not attending. Really, you should come!'
    );
  } else if ($('#rsvp-evening textarea[name=rsvp-message]').val().length == 0) {
    BootstrapDialog.warning(
      'Verify',
      'Do you have any questions, or do you have any dietary requirements?',
      function (response) {
      console.log(response);
        if (response) {
          $('#rsvp-evening').submit();
        }
      }
    );
  } else {
    $('#rsvp-evening').submit();
  }
}