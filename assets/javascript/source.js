var request = require('request');
var cheerio = require('cheerio');
require('jsdom-global')();
window.$ = window.jQuery = require('jquery'); //window.
var posthtml = require('posthtml');
var beautify = require('posthtml-beautify');
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
var hljs = require('highlight.js');
var parseString = require('xml2js').parseString;
var sitemapURLs = [];
var numPagesVisited = 0;

const kevsServer = "https://mighty-river-19291.herokuapp.com/cors";



$('#submit-button-2').on('click', function () { //grab sitemap
    // request($('#input').val(), function (error, response, body) {
    var data = {
        url: $('#user-input-2').val(),
        key: "8b5dcaf7cdfb9c46221d492eec6560c571d6ec218b2485c54075ab7840fa77f9"
    }
    console.log($('#user-input-2').val());
    fetch(kevsServer, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(function (response) {
            console.log(response);
            parseString(response, function (err, result) {
                var xmlString = JSON.stringify(result);
                var xmlObj = JSON.parse(xmlString);
                for (var site in xmlObj.urlset.url) {
                    sitemapURLs.push(xmlObj.urlset.url[site].loc[0]);
                }
                console.log(sitemapURLs.length);
                // $('#button2').prop('disabled', false);
                // $('#button3').prop('disabled', false);
                // $('#button4').prop('disabled', false);
            })
        })

    // })
})

$('button3').on('click', function () {

})

$('#button4').on('click', function () { //submit selectors
    crawl();
    function crawl() {
        if (numPagesVisited >= 10) {
            console.log('max number of pages visited');
            return;
        }
        if (sitemapURLs.length === 0) {
            console.log('end of map reached');
            return;
        }
        var nextPage = sitemapURLs.shift();
        visitPage(nextPage, crawl);
    }

    function visitPage(URL, callback) {
        // request({ followRedirect: false, url: url }, function (error, response, body) {
        var data = {
            url: URL,
            key: "8b5dcaf7cdfb9c46221d492eec6560c571d6ec218b2485c54075ab7840fa77f9"
        }
        fetch(kevsServer, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(function (response) {
                numPagesVisited++;
                var $c = cheerio.load(response);
                if ($('#input3').val() === "") {
                    var results = $c($('#input2').val()).text().trim();
                } else {
                    var results = $c($('#input2').val()).find($('#input3').val()).text().trim();
                }

                $('#stuff').append("<p>" + results + "</p>");
                callback();
            })
        // })
    }
})

$('#button2').on('click', function () {
    var str;
    var jsdomPromise = new Promise((resolve, reject) => {
        JSDOM.fromURL(sitemapURLs[0]).then(dom => {
            str = dom.serialize();
            str = str.replace(/<!--(.|\s)*?-->/g, "");
            resolve(str);
        });
    });
    jsdomPromise.then((html) => {
        posthtml()
            .use(beautify({
                rules: {
                    indent: 2,
                    eol: '\r\n'
                }
            })).process(html, { sync: false })
            .then((result) => $('#thing').html(hljs.highlightAuto(result.html).value));
    })
})