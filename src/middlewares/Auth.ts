import passport from 'passport'
import express from 'express'
import passportJwt from 'passport-jwt'
const JWTstrategy = require("passport-jwt").Strategy

class Authentication {
  constructor() {
    this.authInit();
  }

  authCheck = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    passport.authorize("authentication", {session: false}, (err, user, msg) => {
      if (err) {
        return res.status(401).json({
          message: err
        })
      }
      next()
    })(req, res, next);
  }

  authInit = () => {
    passport.use(
      "authentication", 
      new JWTstrategy(
        {
          secretOrKey:  process.env.JWT_key,
          jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
        }, (token: string, done: passportJwt.VerifiedCallback) => {
          if (token == process.env.token) {
            return done(null, true);
          }
          return done("You're not authorized", false);
        }
      )
    )
  }

}


export default new Authentication();