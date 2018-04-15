// API BEING USED: TextGears
// This is the API we have decided to use. This API allows us to check spelling and grammar mistakes within the text
// TextGears Documentation 
// https://textgears.com/api/#documentation 

// API Key
// OTTALGT9NKahAPSw

// Sample Request
// https://api.textgears.com/check.php?text=I+is+an+engeneer!&key=OTTALGT9NKahAPSw
// Example text = I is an engineer
// key = "OTTALGT9NKahAPSw"
// key is assigned to email: mrchrishantis@gmail.com
// User PW: HcFL5G

// When user presses enter on keyboard the value is submitted. It is the same as clicking the Submit Button.


$('textarea').keypress(function (e) {
    if (e.which == 13) {
        jQuery(this).blur();
        jQuery('#submit-button').focus().click();
    }
});


// Users input will be pushed to this empty array
var arr = [];

// var arr = ["I rode the bke"]; //$('#user-input).

// Example user input: i liek the bke


// When you click on the #clear-button function will run
$('#clear-button').on("click", function () {

    // Empty #test div
    $('#test').empty();
    arr = [];
});

// When user clicks on the Submit button
// This function will run
$('#submit-button').on("click", function () {
    grammarCheck($("#user-input").val().trim(), 'test');
})

        // Put a clear in the box







            // If / Else Statement with CSS conditions
            /*
            var word = "Hello World!";
            var ab = 5;
            var cd = 2;
            if (ab === 4){
                $('#test2').html('<span style="color:green;">' + word + '</span>');        
            }
            else {
                $('#test2').html('<span style="color: red;">' + word + '</span>');
            }
            */

            //  console.log("This is the response: " + response);
            //  console.log("This is the result: " + response.result);
            //  console.log("This is the error: " + response.errors);
            //  console.log("This is the score: " + response.score);





            // Store .ajax call in variable ajaxCall
            // var ajaxCall = ???

            // Loop through var arr and var ajaxCall

            // If there is a response.error 
            // var errCount = Get Count 
            // If errCount = 1 then
            //Errors Detected = > Error Detected
            // Else => Errors Detected
            // $('test-total-error-response).html(errCount + Errors Detected)
            // (That word).css('.highlight-word-red');
            // Else
            // Get Count = 0
            // $('test-total-error-response).html(0 + Errors Detected)




