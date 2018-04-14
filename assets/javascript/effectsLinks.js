
// Script for Tabs /

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Script for Side Bar Nav A.K.A THE LIBRARY A.K.A THE ACHAIA RECORDS
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

// materialize character counter
// $(document).ready(function() {
//     $('text#user-input-2').characterCounter().val();
//     $()
//   });

//   $('#mybutton').on('click', function(evt) {
//     $('#mydiv').show();
//     return false;//Returning false prevents the event from continuing up the chain
// });
// question one jquery language
$(".ques1").click(function () {
    $(".ans1").show();
    $(".ques1").hide();
    $(".ans2").hide();
    $(".ques2").show();
    $(".ans3").hide();
    $(".ques3").show();

});

$("#faqRestore1").click(function () {
    $(".ans1").hide();
    $(".ques1").show();
});
// question two jquery language
$(".ques2").click(function () {
    $(".ques2").hide();
    $(".ans2").show();
    $(".ans1").hide();
    $(".ques1").show();
    $(".ans3").hide();
    $(".ques3").show();
});

$("#faqRestore2").click(function () {
    $(".ans2").hide();
    $(".ques2").show();
});
// question three jquery language
$(".ques3").click(function () {
    $(".ques3").hide();
    $(".ans3").show();
    $(".ans2").hide();
    $(".ques2").show();
    $(".ans1").hide();
    $(".ques1").show();
});

$("#faqRestore3").click(function () {
    $(".ans3").hide();
    $(".ques3").show();
});

