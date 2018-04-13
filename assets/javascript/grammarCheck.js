var grammarCheck = function(textInput, textOutput, numPagesVisited) {
    // Console logging the click to make sure this triggers the function
    console.log("Submit button has been clicked");

    // Get the user's input and storing the information into a variable
    var str = textInput;
    console.log('The user has put in their input', str);

    // Split the words
    // Format for API is "A+B+C"
    // We have to split the user-input
    var res = str.split(" ");

    //document.getElementById("test").innerHTML = res; // Same thing as before, but in JS

    //Joining the split words with "+"
    var est = res.join('+');
    console.log('The + have joined inbetween words', est);

    // Taking var est and putting it into the #test div
    // var r = $("#test").html('"' + est + '"');


    // Pushing "A+B+C" into the empty array var arr
    arr.push(est); // Working... WOOooooooooOooooo!
    console.log(JSON.parse(JSON.stringify(arr))); // Check that var is being pushed into an array


    // Storing API URL into var URL
    var URL = "https://api.textgears.com/check.php?"

    // Storing our TextGears API into var apiKEY
    //var apiKEY = "&key=OTTALGT9NKahAPSw"

    var apiKEY = "&key=DEMO_KEY"

    // Storing our user input into var userInput
    // Free Trial Limits
    // 4096 characters per request
    // 250 requests per month
    // 250 per day

    // Storing all variables / creating a query for our API Request into var queryURL
    var queryURL = URL + "text=" + arr + apiKEY
    console.log("This is the API URL:" + queryURL);

    $.ajax({
        url: queryURL,
        method: "GET",
        //async: false

    }).then(function (response) {

        var arrCompare = [];

        //Joining the split words with "+"
        //var est2 = res.join('" "');
        //console.log(est2);

        // Pushing "A"+"B"+"C" into the empty array var arrCompare
        //arrCompare.push(res); // Working... WOOooooooooOooooo!
        //console.log(JSON.parse(JSON.stringify(arrCompare))); // Check that var is being pushed into an array

        // Check that var is being pushed into an array
        //console.log(JSON.parse(JSON.stringify(apiResult))); 
        console.log(response.errors);

        $('#' + textOutput).append(str);
        //$('#test').append(res);

        //$(res[j]).css("color", "red");

        // Stores the bad words or error words
        var badWords = [];

        // Stores the better words to be used for improvement
        var betterWords = [];


        // for (var j = 0; j < res.length; j++) {
        //         console.log("repsonse", res);
        //         console.log("j1",j
        if (textOutput.indexOf('result-modal') !== -1) {
            $('#link-' + numPagesVisited).text(response.errors.length)
        }
        // Looping through the results returned by API
        for (var i = 0; i < response.errors.length; i++) {
            console.log("i1", i);
            // Looping through the user input array

            console.log('response from api ', response.errors);
            console.log('response from api ', response.errors[i].bad);


            badWords.push(response.errors[i].bad)
            console.log('bad words array', badWords);

            // betterWords.push(response.errors[i].better)
            // console.log('better words array', betterWords);

            var betterWords = response.errors[i].better.join('\n');
            console.log('resErr', betterWords);

            // if (response.errors[i].bad.indexOf(res[j]) !== -1) {
            //     console.log('true');
            //     // console.log(apiResult[i]);

            //     console.log("res j ",res[j]);
            //     // GOAL - IF TRUE HIGHLIGHT THE SPECIFIC WORD(S) RED //
            //     res.splice(j,1,res[j]);

            //     //if (res[j]) {
            //      $('#test').append(res[j]).css("color", "red");   
            //     //}


            //     // // $('#test').text('<u style="color:green;"> ' + res[j] + '</u>');
            //     // // $('#test').append('<u style="color:green;"> ' + res[j] + '</u>');

            //     // console.log("res[j]", res[j]);
            //     // console.log("j2", j);
            //     // console.log("i2", i);
            // }

            // else if (res[j].indexOf(response.errors[i].bad) !== -1){
            //     console.log('else res[j] ', res[j]);

            //     //if (res[j]) {
            //         $('#test').append(res[j]).css("color", "green");   
            //     //}

            //     //$('#test').append(res[j]).css("color", "black");



            // }
            //  }
        }

        // This piece of code makes all error words red
        // An error word is a word the API identifies as incorrect
        // Is there a difference between grammar mistakes and spelling mistakes? Use two different colors?


        var p = document.getElementById(textOutput);
        var newInput = p.innerHTML
        console.log(newInput);
        //var bWordArr = ['i', 'bke'];

        badWords.forEach(function (bWord) {
            console.log('bad word ', bWord);
            newInput = newInput.replace(bWord, `<span class="color badword">${bWord}<span class="bwtext">try :${betterWords}</span></span>`)
        });
        // when you hover over badwords

        // better words show

        // betterWords.forEach(function (betterWord) {
        // console.log('better word ', betterWord);
        // newInput = newInput.replace(bWord, betterWord,`<span class="color" id="tooltip>${bWord}<div id="tooltip-text">${betterWord}</div></span>`)


        p.innerHTML = newInput
    
    })
    }