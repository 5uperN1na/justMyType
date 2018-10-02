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
            //remove highlight on released key
            $(key).css("background-color", "#f5f5f5");
        });
    });

    let sentences = [
        "ten ate neite ate nee enet ite ate inet ent eate",
        "Too ato too nOt enot one totA not anot tOO aNot",
        "oat itain oat tain nate eate tea anne inant nean",
        "itant eate anot eat nato inate eat anot tain eat",
        "nee ene ate ite tent tiet ent ine ene ete ene ate"
    ];

    let arrayIndex = 0;
    let sentenceDisplay = sentences[arrayIndex];

    let sentenceCharacter = 0;
    let character = sentenceDisplay.substring(sentenceCharacter, sentenceCharacter + 1);

    $("#sentence").text(sentenceDisplay);
    $("#target-letter").text(character);
     


    $(document).keypress(function (e) {
        if (e.which == sentences[arrayIndex].charCodeAt(sentenceCharacter)) {
            console.log('true');

        }
    });


    //TESTING
    //let letter = 'a';

    // $(document).keydown(function (e) {
    //var kc = e.which || e.keyCode;
    // console.log(String.fromCharCode(kc).toLowerCase() == letter)

    //});


});


