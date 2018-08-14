// August 13, 2018

const router = require('express').Router();

router.get('/', function(request, response) {
    // render the page and pass in any flash data if it exists
    response.render('login.ejs');
});

// Message is received in this function
router.post('/', function (request, response) {
    try {
        var email = request.body.email;
        var password = request.body.password;

        response.send('You send the email "' + email + '". Password: ' + password );

        if(email == "test@gmail.com" && password == "usa123") {
            console.log("Email and password matched...");
        } else {
            console.log("Email or password failed...");
        }

    } catch (error) {
        console.error(error);
    }
});

exports.router = router;
