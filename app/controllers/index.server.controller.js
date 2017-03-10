exports.render = function(req, res) {
    res.render('index', {
        title: 'coupon-app',
        user: req.user ? req.user.username : ''
    });
};