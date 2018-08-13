const router = require('express').Router();
console.log("Entered login.js line 2 ");

// Support encoded bodies
// Message is received in this function
router.post('/', function (request, response) {

    try {
        var email = request.body.email;
        var password = request.body.password;
        response.send('You send the email "' + email + '". Password: ' + password );
    } catch (error) {
        console.error(error);
    }
});
exports.router = router;
