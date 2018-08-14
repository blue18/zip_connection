const router = require('express').Router();

router.get('/', function(request, response) {
    // render the page and pass in any flash data if it exists
    response.render('signup.ejs');
});

exports.router = router;
