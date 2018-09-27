//event handler
$(document).ready(function () {
    //hide uppercase keyboard when page loads
    $('#keyboard-upper-container').hide();

    $(document).keydown(function (e) {
        if (e.keyCode == 16) {
            //testing if true
            //alert(e.which + " or Shift was pressed");

            //show uppercase keyboard when shift key is pressed
            $('#keyboard-upper-container').show();
            //hide lowercase keyboard when shift key is pressed
            $('#keyboard-lower-container').hide();

            $(document).keyup(function (e) {
                $('#keyboard-lower-container').show();
                $('#keyboard-upper-container').hide();
            })
        }

        if (e.keyCode == 32) {
            $('#32').css('background-color', 'yellow');
        }

        if (e.keyCode == 48) {

            $('#48').css('background-color', 'yellow');
        }
        if (e.keyCode == 49) {

            $('#49').css('background-color', 'yellow');
        }

        if (e.keyCode == 50) {

            $('#50').css('background-color', 'yellow');
        }

        if (e.keyCode == 51) {

            $('#51').css('background-color', 'yellow');
        }

        if (e.keyCode == 52) {

            $('#52').css('background-color', 'yellow');
        }

        if (e.keyCode == 53) {

            $('#53').css('background-color', 'yellow');
        }

        if (e.keyCode == 54) {

            $('#54').css('background-color', 'yellow');
        }

        if (e.keyCode == 55) {

            $('#55').css('background-color', 'yellow');
        }

        if (e.keyCode == 56) {

            $('#56').css('background-color', 'yellow');
        }

        if (e.keyCode == 57) {

            $('#57').css('background-color', 'yellow');
        }

        if (e.keyCode == 58) {

            $('#58').css('background-color', 'yellow');
        }

        if (e.keyCode == 126) {

            $('#126').css('background-color', 'yellow');
        }











    });

});

