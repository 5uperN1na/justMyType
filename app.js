//event handler
$(document).ready(function () {
    //hide uppercase keyboard when page loads
    $('#keyboard-upper-container').hide();

    $(document).keydown(function (e) {
        if (e.keyCode == 16) {
            //testing when shift key is pressed
            alert(e.which + " or Shift was pressed");

            //show uppercase keyboard when shift key is pressed
            $('#keyboard-upper-container').show();
            //hide lowercase keyboard when shift key is pressed
            $('#keyboard-lower-container').hide();
        }
        if (e.keyCode == 49) {
            //testing when shift key is pressed
            alert(e.which + " or 1 was pressed");
            //$('#keyboard-lower-container span').text();
            // $('#item1 span').html();
            $("span:contains('49')").css('background-color', 'pink'); 
            //$('keyboard-lower-container #49').css('background-color', 'pink');
        }










    });

});

