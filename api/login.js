// August 13, 2018

const router = require('express').Router();

router.get('/', function(request, response) {
    var name = request.session.name;
    console.log("Name: " + name);
    response.render('login.ejs');

    // render the page and pass in any flash data if it exists
});

exports.router = router;
