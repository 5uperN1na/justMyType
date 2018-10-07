//event handler
$(document).ready(function () {
    //high uppercase keyboard when page loads
    $("#keyboard-upper-container").hide();

    //when shift key is pressed down
    $(document).keydown(function (e) {
        if (e.which === 16) {
            //uppercase displays
            $("#keyboard-upper-container").show();
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
            //remove highlight on pressed key
            $(key).css('background-color', '');
        });
    });

    //sentences stored in an array
    let sentences = [

        "ten ate neite ate nee enet ite ate inet ent eate",
        "Too ato too nOt enot one totA not anot tOO aNot",
        "oat itain oat tain nate eate tea anne inant nean",
        "itant eate anot eat nato inate eat anot tain eat",
        "nee ene ate ite tent tiet ent ine ene ete ene ate"
    ];

    //Global variables to for calcuations
    //global variable for storing start time value
    let startTime;
    //global variable and set flag to false for timer
    let setTimer = false;
    //global variable to assign current time
    let time = new Date();
    //global variable for wrong keys pressed set to 0
    let mistakes = 0;
    //global variable for correct keys pressed set to 0
    let correctKeys = 0;
    //global variable for wrong keys pressed in order to tally to calculate words per minute
    let talliedMistakes = 0;

    //Global variables for array and characters
    //global variable for array index set to 0
    let arrayIndex = 0;
    //global variable to set array sentences with index value
    let sentenceDisplay = sentences[arrayIndex];
    //global variable for each character set to 0
    let sentenceCharacter = 0;
    //global variable for each character (in order to display)
    let character = sentenceDisplay.substring(sentenceCharacter, sentenceCharacter + 1);
    //display sentences from the array
    $("#sentence").text(sentenceDisplay);
    //display each character from the displayed sentence
    $("#target-letter").text(character);

    //event handler when a key is pressed down
    $(document).keypress(function (e) {

        //conditional statement to check for timer is equal to false
        if (setTimer === false) {
            //get current time and store in startTime variable declared above
            startTime = time.getTime();
            //set flag to true
            setTimer = true;
        }

        //conditional statement to validate key pressed against the displayed key
        if (e.which == sentences[arrayIndex].charCodeAt(sentenceCharacter)) {
            //storing each character in variable  
            character = sentenceDisplay.substring(sentenceCharacter, sentenceCharacter + 1);
            //displaying each character to be pressed
            $('#target-letter').text(character);
            //displaying yellow block over character to be pressed
            $('#yellow-block').css('left', '+=18px');
            //storing keys pressed correctly
            correctKeys = ('<div class=\'glyphicon glyphicon-ok\'></div>');
            //appending correct keys pressed to feedback div
            $(correctKeys).appendTo('#feedback');
            //moving onto next character
            sentenceCharacter++;

            //conditional statement to check if it is the last character of the sentence
            if (sentenceCharacter === sentenceDisplay.length) {
                //if true move to the next sentence in the array
                arrayIndex++;
                //if it is the last sentence, calculate word per minute
                if (arrayIndex === sentences.length) {
                    //get updated date and store in local variable
                    let updatedDate = new Date();
                    //get end time and store in local variable
                    let stopTime = updatedDate.getTime();
                    //get minutes and store in location variable
                    let min = (stopTime - startTime) / 60000;
                    //calculate word per minute
                    calculation = Math.round(54 / min - 2 * talliedMistakes);
                    //provide words per minute and prompt to play again
                    let playAgain = confirm(
                        `You typed ${calculation} words per minute! Do you want play again?`
                    );
                    //start game over again if user clicks ok
                    if (playAgain == true) {
                        location.reload();
                    }
                } else {
                    //move onto next sentence in the array
                    sentenceDisplay = sentences[arrayIndex];
                    //display the next sentence
                    $("#sentence").text(sentenceDisplay);
                    //set the characters count back to 0
                    sentenceCharacter = 0;
                    //display each character in sentence +1
                    character = sentenceDisplay.substring(sentenceCharacter, sentenceCharacter + 1);
                    //display character in target div
                    $("#target-letter").text(character);
                    //yellow nudge display over character
                    $("#yellow-block").css("left", "15px");
                    //display checkmark when key pressed correctly
                    $("#feedback").text("");
                }
            }

        } else {
            //storing keys pressed incorrectly
            mistakes = ('<div class=\'glyphicon glyphicon-remove\'></div>');
            //appending keys to feedback div
            $(mistakes).appendTo('#feedback');
            //tally mistakes incremented
            talliedMistakes++;

        }

    });


});


