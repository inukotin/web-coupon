var port = 1337;

module.exports = {
    port: port,
    db: 'mongodb://localhost/coupondb',
    facebook: {
        clientID: '472830659507187',
        clientSecret: 'a3b592813a48336da53962396be8bc69',
        callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
    }
};
