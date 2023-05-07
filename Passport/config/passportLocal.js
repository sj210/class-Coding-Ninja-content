const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport, getUserByEmail,getUserById){

    const authenticator = async (email, password , done) => {
        const user = getUserByEmail(email);
        if(!user){
            return done(null, false);
        }
        try{
            if(await bcrypt.compare(password, user.password)){
                return done(null, user);
            }else{
                return done(null,false);
            }

        }
        catch(err){
            done(err);
        }
    }
    
    passport.use(new LocalStrategy({usernameField:'email'}, authenticator));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        done(null, getUserById(id))
      });

}

module.exports = initialize;