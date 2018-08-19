const passport = require('passport');
const { Strategy } = require('passport-local');

module.exports = function localStrategy() {
  passport.use(new Strategy(
    {
      userNameField: 'username',
      passportField: 'password',
    }, (username, password, done) => {
      const user = {
        username, password,
      };
      done(null, user);
    },
  ));
};
