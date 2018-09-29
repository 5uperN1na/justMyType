//event handler
$(document).ready(function () {
    //high uppercase keyboard when page loads
    $("#keyboard-upper-container").hide();

    //when shift key is pressed down
    $(document).keydown(function (e) {
        if (e.which === 16) {
            //uppercase displays
            $( "#keyboard-upper-container").show();
            $("keyboard-lower-container").hide();
        }
    });

    //when shift key is released
    $(document).keyup(function (e) {
        if (e.which === 16) {
            //lowercase displays
            $("keyboard-lower-container").show();
            $("#keyboard-upper-container").hide();
        }
    });

    //when any keys is pressed
    $(document).keypress(function (e) {
        //highlight pressed key
        let key = $("#" + e.which);
        $(key).css("background-color", "yellow");
        //when key is released
        $(document).keyup(function (e) {
            //remove highlight on released key
            $(key).css("background-color", "#f5f5f5");
        });
    });


});


