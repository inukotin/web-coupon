exports.render = function(req, res) {
    res.render('index', {
        title: 'coupon-app',
        user: JSON.stringify(req.user)
    });
};