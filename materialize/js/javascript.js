



$(document).ready(function () {

    // var instance = M.Modal.getInstance(elem);
    var elem = document.querySelector('.modal');

    var instance = M.Modal.init(elem);

    var badGrammarSentence = "The girl with the black and white puppys have a ball.";

    var badGrammarParagraph = "Their probably just unaware of the affect they're words wood have on us. Its no big deal and we should just except it. I wouldn't altar a single word. They've been served there just deserts, and I would of maid the same mistake. Let sleeping dogs lay. They probably never past English class anyway, and your far two picky about these things.";

    var modalTestOutput = "TEST";

    var labelText = "Enter Your Text Here"

    var labelClear = ""

    function resetText() {
        userInput = "";
        instance.close();
        $("#labelText").text();

    }



    $("#submitButton").on("click", function () {
        alert("your button works!");
        var userInput = $("#user-input").val();
        console.log(userInput);
        $('.modal').modal();
        // function resetText();
    });
    $("#testSentence").on("click", function () {
        console.log(badGrammarSentence);
        $("#labelText").text(labelClear);
        $("#user-input").text(badGrammarSentence);
        $("#modalText").modal();
    });
    $("#testParagraph").on("click", function() {
        console.log(badGrammarParagraph);
        $("#labelText").text(labelClear);
        $("#user-input").text(badGrammarParagraph);
        $("#modalText").modal();
    });
    $("#labelClear").on("click", function() {
        $("#user-input").text("");
        $("#labelText").text(labelText);
    })


});